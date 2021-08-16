import React from "react";
import { Typography } from "@material-ui/core";
import * as S from "./style";

const Text = ({ size = "14px", children, bold, color, onClick, cursor, padding, lineHeight }) => {
  return (
    <Typography onClick={onClick} >
      <S.Text size={size} bold={bold} color={color} cursor={cursor} padding={padding} lineHeight={lineHeight}>
        {children}
      </S.Text>
    </Typography>
  );
};

export default Text;
