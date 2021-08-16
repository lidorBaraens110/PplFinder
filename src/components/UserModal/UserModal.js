import React, { useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, Icon, Typography, IconButton } from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons'
import { useSelector, useDispatch } from "react-redux";
import { BiMaleSign, BiFemaleSign } from 'react-icons/bi';
import moment from 'moment'
import Text from '../Text';
import { useFavorites } from 'hooks';
import { closeModal } from '../../redux/action';
import * as S from './style';

const UserModal = () => {

    const dispatch = useDispatch();
    const open = useSelector(state => state.modal.open)
    const userContent = useSelector(state => state.modal.content)
    const { favorites, handleFavorites } = useFavorites()

    const onClose = () => {
        dispatch(closeModal())
    }

    return (
        <Dialog open={open} onClose={onClose} fullWidth={true}>
            <S.WrapAllContent>
                <S.WrapContent color='#f1f1f1'>
                    <S.WrapImgAndIcon>
                        <img src={userContent.picture?.large} />
                        <S.IconButtonWrapper>
                            <IconButton onClick={() => handleFavorites(userContent)}>
                                {favorites?.find(fav => userContent.login?.uuid === fav.login.uuid) ?
                                    <Favorite color="error" />
                                    :
                                    <FavoriteBorder color='error' />
                                }
                            </IconButton>
                        </S.IconButtonWrapper>
                    </S.WrapImgAndIcon>
                    <Text color="black" size='1.5rem' bold padding='0.5rem 0'>
                        {userContent.name?.first} {userContent.name?.last}
                    </Text>
                    <Text color="black" size='1rem'>
                        age: {userContent.dob?.age}
                        <br />
                        birthday :{moment(userContent.dob?.date).format("MM/DD/YYYY")}
                    </Text>
                    <S.WrapperGender>
                        <Text padding="0 0.5rem 0 0">
                            gender: {userContent.gender}
                        </Text>
                        {userContent.gender === "female" ? <BiFemaleSign /> : <BiMaleSign />}
                    </S.WrapperGender>
                </S.WrapContent>
                <S.WrapContent color='transparent' justifyContent='space-between'>
                    <Text size='1.2rem' bold>
                        Contact:
                    </Text>
                    <Text lineHeight='2'>
                        cell: {userContent.cell}
                        <br />
                        phone: {userContent.phone}
                        <br />
                        email: {userContent.email}
                    </Text>

                    <Text size='1.2rem' bold>
                        Location:
                    </Text>
                    <Text lineHeight='2'>
                        {userContent.location?.city}, {userContent.location?.country}
                        <br />
                        {userContent.location?.street.name} {userContent.location?.street.number}
                    </Text>

                    <Text>
                        registered in {moment(userContent.registered?.date).format("MM/DD/YYYY")}
                    </Text>
                </S.WrapContent>
            </S.WrapAllContent>
        </Dialog>
    );
}

export default UserModal;