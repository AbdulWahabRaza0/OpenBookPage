import styled, { css } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Col, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Typewriter from "typewriter-effect";
import { Image } from "react-bootstrap";
import { H1, P, SpanHeading, HeadingAlt } from "./Typography";
interface WrapperProps {
  width?: string;
  border?: string;
  borderRadius?: string;
  height?: string;
  fontSize?: string;
  weight?: string;
  bg?: string;
  fontColor?: string;
  hoverBg?: string;
  ms?: string;
  me?: string;
  mt?: string;
  mb?: string;
  ps?: string;
  pe?: string;
  pt?: string;
  pb?: string;
  p?: string;
  zIndex?: any;
  ls?: string;
  lHeight?: string;
  position?: string;
  top?: any;
  family?: string;
  transition?: boolean;
  gradient?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};
  border: ${(props) => (props.border ? props.border : "")};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  color: ${(props) => (props.fontColor ? props.fontColor : "")};
  margin-left: ${(props) => (props.ms ? props.ms : "")};
  margin-right: ${(props) => (props.me ? props.me : "")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  padding-left: ${(props) => (props.ps ? props.ps : "")};
  padding-right: ${(props) => (props.pe ? props.pe : "")};
  padding-top: ${(props) => (props.pt ? props.pt : "")};
  padding-bottom: ${(props) => (props.pb ? props.pb : "")};
  padding: ${(props) => (props.p ? props.p : "")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "")};
  z-index: ${(props) => props.zIndex && props.zIndex};
  position: ${(props) => props.position && props.position};
  line-height: ${(props) => props.lHeight && props.lHeight};
  background: ${(props) => props.bg && props.bg};
  transition: ${(props) => props.transition && "background-color 0.5s ease"};
  background-image: ${(props) =>
    props.gradient && "radial-gradient(circle, #66302a, black)"};
  font-family: ${(props) =>
    props.family ? props.family : "'Organeto','sans-serif'"};
  top: ${(props) => props.top && props.top};
  &:hover {
    background: ${(props) => props.hoverBg && props.hoverBg};
  }
`;
const Container = ({ children, pt }: any) => {
  return (
    <>
      <Wrapper ps="3.29%" pe="3.4%" pt={pt ? pt : "5%"} pb="1%">
        {children}
      </Wrapper>
    </>
  );
};
const TypeWriterComp = ({ text }: any) => {
  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(text).start();
        }}
      />
    </>
  );
};
const MarqueeSlider = ({ children }: any) => {
  return (
    <>
      <Marquee
        style={{ overflowY: "hidden" }}
        play={true}
        pauseOnHover={true}
        gradient={false}
      >
        {children}
      </Marquee>
    </>
  );
};

const MarqueeContainer = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 50vw;
`;
interface Scrollprops {
  relative?: any;
}
const WrapperContainer = styled.div<Scrollprops>`
  background: black;

  ${(props) =>
    props.relative &&
    css`
      position: relative;
    `}
`;
const MarqueeComp = () => {
  return (
    <>
      <SpanHeading>Articles Voiced by Icons</SpanHeading> -{" "}
      <HeadingAlt green>Quick AI Abstracts</HeadingAlt> -{" "}
      <SpanHeading>Perfecting Editorial Pieces</SpanHeading> -{" "}
      <HeadingAlt green>Showcasing Publications</HeadingAlt> -{" "}
      <SpanHeading>Explore Engaging Content</SpanHeading> -
    </>
  );
};
const HeadingComp = ({ heading }: any) => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 752px)",
  });
  return (
    <>
      <H1
        className={isResponsive ? "mb-0 text-center" : "text-center mb-5"}
        fontSize={isResponsive ? "31px" : "50px"}
        lh={isResponsive ? "41px" : "57px"}
        color="#db5c4d"
        family="'Montserrat', sans-serif"
        weight="700"
      >
        {heading}
      </H1>
    </>
  );
};
const ScrollWrapper = ({ children }: any) => {
  const scrollHandler = () => {
    const hr_scrollables: any =
      document.getElementsByClassName("scrollable-hr");
    const vr_scrollables: any =
      document.getElementsByClassName("scrollable-vr");

    for (const element of hr_scrollables) {
      const rect = element.getBoundingClientRect();
      const inView =
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight);

      if (!inView) continue;

      let progress = (window.innerHeight - rect.top) / window.innerHeight;

      const width = element.scrollWidth;

      const scrollPosition = progress * width;

      element.scrollLeft = scrollPosition;
    }
  };

  return (
    <WrapperContainer onWheel={scrollHandler}>{children}</WrapperContainer>
  );
};
const SplitWrapper = ({ left, src, headline, text }: any) => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 752px)",
  });
  return (
    <>
      {!left ? (
        <>
          <Wrapper className="container container-fluid">
            <Row
              className={`${
                isResponsive
                  ? "align-items-center justify-content-center"
                  : "align-items-center justify-content-center"
              }`}
            >
              <Col md={6} lg={6} xl={6}>
                {" "}
                <Wrapper
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  ms={isResponsive ? "" : "-25%"}
                  mb={isResponsive ? "" : ""}
                >
                  <Image
                    width="500px"
                    height="500px"
                    src={src}
                    alt="item"
                    className="img-fluid"
                  />
                </Wrapper>
              </Col>
              <Col md={6}>
                <Wrapper data-aos="fade-left" data-aos-duration="2000">
                  <Wrapper
                    mt={isResponsive ? "-90px" : ""}
                    className={`d-flex flex-column justify-content-end 
                  ${isResponsive ? "text-center" : "text-end align-items-end"}
                  `}
                  >
                    <H1
                      family="'Montserrat', sans-serif"
                      fontSize={isResponsive ? "21px" : "41px"}
                      lh={isResponsive ? "31px" : ""}
                      weight="700"
                      color="black"
                    >
                      {headline}
                    </H1>
                    <P
                      className="mt-3"
                      fontSize={isResponsive ? "" : "21px"}
                      lHeight="31px"
                      color="gray"
                    >
                      {text}
                    </P>
                  </Wrapper>
                </Wrapper>
              </Col>
            </Row>
          </Wrapper>
        </>
      ) : (
        <>
          {" "}
          {/* <Wrapper
            width={isResponsive ? "100%" : "100%"}
            className={`d-flex flex-row align-items-center ${
              isResponsive
                ? "flex-wrap-reverse justify-content-center text-center"
                : "justify-content-between"
            }`}
          >
            <Wrapper
              data-aos="fade-left"
              data-aos-duration="2000"
              className={`d-flex flex-row align-items-center  ${
                isResponsive
                  ? "justify-content-center text-center"
                  : "justify-content-end"
              }`}
            >
              <Wrapper
                mt={isResponsive ? "-13vh" : ""}
                ps={isResponsive ? "" : "170px"}
                className={`d-flex flex-column justify-content-center gap-2 ${
                  isResponsive
                    ? "text-center align-items-center"
                    : "text-start align-items-start"
                }`}
              >
                <H1
                  family="'Montserrat', sans-serif"
                  fontSize={isResponsive ? "21px" : "41px"}
                  lh={isResponsive ? "31px" : ""}
                >
                  {headline}
                </H1>
                <P fontSize={isResponsive ? "" : "21px"}>{text}</P>
              </Wrapper>
            </Wrapper>
            <Wrapper
              data-aos="fade-right"
              data-aos-duration="2000"
              // me={isResponsive ? "" : "2%"}
              className={`d-flex flex-row align-items-center ${
                isResponsive
                  ? "justify-content-center flex-wrap"
                  : "justify-content-end"
              }`}
            >
              <Image
                width="500px"
                height="300px"
                src={src}
                alt="item"
                className="img-fluid"
              />
            </Wrapper>
          </Wrapper> */}
          <Wrapper className="container container-fluid">
            <Row
              className={`${
                isResponsive
                  ? "align-items-center justify-content-center flex-wrap-reverse"
                  : "align-items-center justify-content-center"
              } `}
            >
              <Col md={6} lg={6} xl={6}>
                <Wrapper
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  mt={isResponsive ? "-13vh" : ""}
                  className={`d-flex flex-column justify-content-start ${
                    isResponsive
                      ? "text-center"
                      : "text-start align-items-start"
                  }`}
                >
                  <H1
                    family="'Montserrat', sans-serif"
                    fontSize={isResponsive ? "21px" : "41px"}
                    lh={isResponsive ? "31px" : ""}
                    weight="700"
                    color="black"
                  >
                    {headline}
                  </H1>
                  <P
                    className="mt-3"
                    fontSize={isResponsive ? "" : "21px"}
                    lHeight="31px"
                    color="gray"
                  >
                    {text}
                  </P>
                </Wrapper>
              </Col>
              <Col md={6} lg={6} xl={6}>
                <Wrapper
                  width="100%"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  me={isResponsive ? "" : "-120px"}
                  ms={isResponsive ? "" : "120px"}
                  className={`d-flex flex-row align-items-center ${
                    isResponsive
                      ? "justify-content-center"
                      : "justify-content-end"
                  }`}
                >
                  <Image
                    width="500px"
                    height="500px"
                    src={src}
                    alt="item"
                    className="img-fluid"
                  />
                </Wrapper>
              </Col>
            </Row>
          </Wrapper>
        </>
      )}
    </>
  );
};
export {
  Wrapper,
  useMediaQuery,
  MarqueeSlider,
  Row,
  Col,
  Container,
  TypeWriterComp,
  Image,
  MarqueeContainer,
  ScrollWrapper,
  SplitWrapper,
  MarqueeComp,
  HeadingComp,
};
