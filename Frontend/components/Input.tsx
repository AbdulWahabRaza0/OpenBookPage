import styled from "styled-components";
interface Props {
  width?: string;
}
const Input = styled.input<Props>`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
  width: ${(props) => (props.width ? props.width : "50%")};
  color: black;
  background-color: white;
  border-radius: 13px;
  border: 1px solid #db5c4d;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
`;
export { Input };
