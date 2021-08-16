import styled from "styled-components";

export const WrapAllContent = styled.div`
display:flex
`
export const WrapContent = styled.div`
display:flex;
flex-direction:column;
flex: 1;
padding: 2rem;
background-color:${({ color }) => color};
justify-content:${({ justifyContent }) => justifyContent};
`
export const WrapImgAndIcon = styled.div`
 display: flex; 
 flex-direction: row; 
 justify-content:space-between;

`
export const User = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-height: 128px;
  gap: 2px;
  overflow: hidden;
`;

export const UserPicture = styled.img`
  border-radius: 45%;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const IconButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: opacity 0.2s ease-in-out;
`;

export const WrapperGender = styled.div`
color: black;
display: flex;
flex-direction: row;
align-items: center;
`
