import styled from "styled-components";

export const Text = styled.div`
  font-size: ${({ size }) => size};
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  color: ${({ color }) => color};
  cursor:${({ cursor }) => cursor};
  padding:${({ padding }) => padding};
  line-height:${({ lineHeight }) => lineHeight};
`;
