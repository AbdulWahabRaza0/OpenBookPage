import styled from "@emotion/styled";
import ButtonComp from "@mui/material/Button";
import { keyframes } from "@emotion/react";
interface Props {
  mt?: string;
  lh?: string;
  width?: string;
  weight?: string;
  fontColor?: string;
  bg?: string;
  border?: string;
  height?: string;
  onClick?: any;
  borderRadius?: string;
  fontSize?: string;
  padding?: string;
  transform?: boolean;
  family?: string;
  heartbeat?: boolean;
}
const heartbeatAnimation = keyframes`
  0% {
    transform: scale(1);

  }
  50% {
    transform: scale(1.03);
    
  }
  100% {
    transform: scale(1);
  }
`;
export const PrimaryButton = styled(ButtonComp)<Props>`
  font-style: normal;
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
  text-align: center;
  text-transform: none;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  height: ${(props) => (props.height ? props.height : "58px")};
  color: ${(props) => (props.fontColor ? props.fontColor : "white")};
  width: ${(props) => (props.width ? props.width : "200px")};
  line-height: ${(props) => (props.lh ? props.lh : "auto")};
  margin-top: ${(props) => (props.mt ? props.mt : "0px")};
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "6px"};
  border: ${(props) => (props.border ? props.border : "none")};
  transform: ${(props) => props.transform && "skew(-20deg)"};
  background: ${(props) => (props.bg ? props.bg : "#DB5C4D")};
  font-family: ${(props) => props.family && props.family};
  animation: ${heartbeatAnimation} 1s infinite;
  animation: ${(props) =>
    props.heartbeat ? ` ${heartbeatAnimation} 1s infinite` : "none"};
  &:hover {
    background: ${(props) =>
      (props.bg ? props.bg : "RGB(219, 92, 77,0.7)") + " !important"};
  }
`;
