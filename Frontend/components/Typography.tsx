import styled, { css, keyframes } from "styled-components";
export interface Props {
  color?: string;
  fontSize?: string;
  lHeight?: string;
  weight?: string;
  tt?: string;
  hoverBg?: string;
  ls?: string;
  family?: string;
  hover?: boolean;
  green?: any;
  centered?: any;
  right?: any;
  font?: any;
  marqueed?: any;
  primary?: any;
  home?: any;
  lh?: any;
}
const marqueeAnimationPrimary = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`;

const marqueeAnimationSecondary = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;
const H1 = styled.h1<Props>`
  font-style: normal;
  font-weight: ${(props) => props.weight && props.weight};
  line-height: ${(props) => props.lHeight && props.lHeight};
  font-size: ${(props) => props.fontSize && props.fontSize};
  font-family: ${(props) => (props.family ? props.family : "Organeto")};
  text-transform: uppercase;
  letter-spacing: ${(props) => props.ls && props.ls};
  color: ${(props) => (props.color ? props.color : " #242a3b")};
  line-height: ${(props) => (props.lh ? props.lh : "51px")};
  margin-bottom: 0px;
  ${(props) =>
    props.marqueed &&
    css`
      z-index: 999;
      white-space: nowrap;
      will-change: transform;
      animation: ${props.primary
          ? marqueeAnimationPrimary
          : marqueeAnimationSecondary}
        10s linear infinite;

      &:hover {
        animation-play-state: paused;
      }
    `}
  ${(props) =>
    props.home &&
    css`
      @media (max-width: 768px) {
        font-size: 24px;
        line-height: 32px;
      }
    `}
`;
const H2 = styled.h2``;
const H3 = styled.h3<Props>`
  font-style: normal;
  font-weight: ${(props) => props.weight && props.weight};
  line-height: ${(props) => props.lHeight && props.lHeight};
  font-size: ${(props) => props.fontSize && props.fontSize};
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  font-family: ${(props) =>
    props.family ? props.family : "'Organeto','sans-serif'"};
  letter-spacing: ${(props) => props.ls && props.ls};
  margin-bottom: 0px;
`;

const P = styled.p<Props>`
  font-style: normal;
  font-weight: ${(props) => (props.weight ? props.weight : "500")};
  line-height: ${(props) => (props.lHeight ? props.lHeight : "24px")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  letter-spacing: ${(props) => props.ls && props.ls};
  color: ${(props) => (props.color ? props.color : "#ffffff")};

  font-family: ${(props) =>
    props.family ? props.family : "'Poppins','sans-serif'"};
  margin-bottom: 0px;
  &:hover {
    text-decoration: ${(props) => props.hover && "underline"};
    opacity: ${(props) => props.hover && "0.8"};
  }
`;
const A = styled.a<Props>`
  font-style: normal;
  font-weight: ${(props) => (props.weight ? props.weight : "500")};
  line-height: ${(props) => (props.lHeight ? props.lHeight : "24px")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  letter-spacing: ${(props) => props.ls && props.ls};
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  text-decoration: none;
  font-family: ${(props) =>
    props.family ? props.family : "'Nekst','sans-serif'"};
  margin-bottom: 0px;
  &:hover {
    opacity: ${(props) => props.hover && "0.8"};
  }
`;
const HeadingAlt = styled.span<Props>`
  line-height: 130px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "60px")};
  font-family: ${(props) =>
    props.family ? props.family : "'Montserrat', sans-serif"};
  color: transparent;
  -webkit-text-stroke: 2px #242a3b;
  -webkit-text-stroke-color: 2px #242a3b;
  text-shadow: none;
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }
  ${(props) =>
    props.green &&
    css`
      -webkit-text-stroke: 2px #242a3b;
      text-stroke: 2px #242a3b;
    `}
  ${(props) =>
    props.centered &&
    css`
      text-align: center;
    `}
  ${(props) =>
    props.right &&
    css`
      float: right;
    `}
      ${(props) =>
    props.font &&
    css`
      @media (max-width: 768px) {
        font-size: 64px;
      }
    `}
`;
const SpanHeading = styled.span<Props>`
  font-family: "Montserrat", sans-serif;
  font-size: 53px;
  color: #db5c4d !important;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }
`;
export { H1, H2, H3, P, A, HeadingAlt, SpanHeading };
