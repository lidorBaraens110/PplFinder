import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import useGeolocation from "hooks/useGeolocation";
import { insertModal } from '../../redux/action'
import * as S from "./style";

const UserList = ({ users,
  isLoading,
  countries,
  handleChange,
  handleFavorites,
  favorites,
  lastIndexRef,
}) => {

  const [hoveredUserId, setHoveredUserId] = useState();
  const dispatch = useDispatch();

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  const location = useGeolocation();

  const calculateTheDistance = (coords) => {
    const { latitude, longitude } = coords
    return calcCrow(location.coordinates.lat, location.coordinates.lng, latitude, longitude).toFixed(1)
  }

  function calcCrow(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
  }

  // Converts numeric degrees to radians
  function toRad(Value) {
    return Value * Math.PI / 180;
  }

  const colorOption = (distance) => {
    let color = 'blue'
    if (distance < 5000) {
      color = "green"
    } else if (distance < 15000) {
      color = "orange"
    } else {
      color = 'red'
    }
    return color
  }

  const openModal = (content) => {
    dispatch(insertModal(content))
  }

  return (
    <S.UserList>
      {countries &&
        <S.Filters>
          {countries.map((country, i) => {
            return <CheckBox
              key={i}
              value={country.value}
              isChecked={country.checked}
              onChange={handleChange}
              label={country.name} />
          })}
        </S.Filters>
      }
      <S.List>
        {users.map((user, index) => {
          const distance = calculateTheDistance(user.location.coordinates)
          return (
            <S.User
              ref={index === users.length - 1 ? lastIndexRef : null}
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <S.UserPicture src={user?.picture.large} alt="" />
              <S.UserInfo>
                <Text size="22px" cursor='pointer' bold onClick={() => openModal(user)}>
                  {user?.name.title} {user?.name.first} {user?.name.last}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                  {user?.location.street.number} {user?.location.street.name}
                </Text>
                <Text size="14px">
                  {user?.location.city} {user?.location.country}
                </Text>
                <Text size="12px" color={colorOption(distance)} >
                  Distance from me {distance} KM
                </Text>
              </S.UserInfo>
              <S.IconButtonWrapper
                isVisible={index === hoveredUserId || favorites.find(fav => user.login.uuid === fav.login.uuid)}
              >
                <IconButton onClick={() => handleFavorites(user)}>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );

        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
