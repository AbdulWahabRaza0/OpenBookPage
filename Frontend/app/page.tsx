"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import {
  Wrapper,
  useMediaQuery,
  Container,
  TypeWriterComp,
  Image,
  MarqueeContainer,
  ScrollWrapper,
  SplitWrapper,
  HeadingComp,
  MarqueeComp,
} from "@/components/Layout";
import { Spacer } from "@/components/Spacer";
import { H1, P } from "@/components/Typography";
import { PrimaryButton } from "@/components/Buttons";
import { Input } from "../components/Input";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Header1Data,
  TeamData,
  RoadmapData,
  ResponsiveRoadMapData,
} from "../utils";

import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [mount, setMount] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const isResponsive = useMediaQuery({
    query: "(max-width: 752px)",
  });
  const doContact = async () => {
    console.log("I am here ", email);
    if (email) {
      const data = {
        email,
      };
      try {
        //we can add proxy as well in next. config file
        const res = await fetch("http://localhost:8000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const temp = await res.json();
        console.log(temp);
      } catch (e) {
        console.log(e);
      }
    }
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setMount(true);
  }, []);
  const handleButtonClick = () => {
    const url = "https://open-book-frontend.vercel.app/";
    window.open(url, "_blank");
  };
  return (
    mount && (
      <ScrollWrapper id="home" style={{ width: "100%" }}>
        <Wrapper bg="#f5f5f5">
          <Navbar />
          <Wrapper id="about" width="100%" style={{ overflowX: "hidden" }}>
            <Container pt="40px">
              <Wrapper
                height="auto"
                className="d-flex flex-row align-items-center"
                style={{
                  zIndex: 1,
                  position: "relative",
                }}
              >
                <Wrapper className="d-flex flex-row gap-5">
                  {!isResponsive && (
                    <Wrapper bg="#242a3b" height="65vh" width="0.7px"></Wrapper>
                  )}
                  <Wrapper
                    width={isResponsive ? "100%" : "650px"}
                    mt={isResponsive ? "13vh" : "15vh"}
                    ms={isResponsive ? "" : "30px"}
                    me={isResponsive ? "" : "30px"}
                    mb={isResponsive ? "10vh" : ""}
                    className={`d-flex flex-column justify-content-start gap-2 ${
                      isResponsive && "align-items-center text-center"
                    }`}
                  >
                    <H1
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      style={{ height: !isResponsive ? "180px" : "" }}
                      lh={isResponsive ? "61px" : "68px"}
                      fontSize={isResponsive ? "36px" : "44px"}
                      family="'Montserrat', sans-serif"
                      weight="900"
                      color="#DB5C4D"
                    >
                      <span
                        style={{
                          fontSize: "24px",
                          color: "black",
                          lineHeight: isResponsive ? "71px" : "18px",
                        }}
                      >
                        PRODUCTIVITY REDEFINED
                      </span>

                      <TypeWriterComp
                        text={"LEARN MORE IN THE VOICES YOU LIKE"}
                      />
                    </H1>
                    {!isResponsive && (
                      <Image
                        style={{
                          position: "absolute",
                          bottom: "0%",
                          width: "100%",
                          height: "100%",
                          left: "0.01%",
                          zIndex: 0,
                          opacity: "0.2",
                        }}
                        src="/assets/snake.png"
                        alt={"snake"}
                        className="img-fluid"
                      />
                    )}
                  </Wrapper>
                </Wrapper>
              </Wrapper>

              <Image
                style={{
                  position: "absolute",
                  top: "0%",
                  right: "0%",
                  zIndex: 0,
                }}
                width="auto"
                height="auto"
                className="img-fluid"
                src="/assets/e5.svg"
                alt="background"
              />
            </Container>
          </Wrapper>
        </Wrapper>
        <Wrapper bg={"#f5f5f5"}>
          <Wrapper
            id="marquee"
            pt={isResponsive ? "5vh" : ""}
            pb={isResponsive ? "5vh" : ""}
            ms={isResponsive ? "20px" : ""}
            me={isResponsive ? "20px" : ""}
          >
            {isResponsive ? (
              <div
                style={{
                  paddingLeft: "0px",
                  overflow: "hidden",
                }}
              >
                <H1 fontSize="40px" home marqueed={isResponsive} primary={true}>
                  <MarqueeComp />
                </H1>
                <Spacer />
              </div>
            ) : (
              <div>
                <MarqueeContainer
                  className={isResponsive ? "" : "scrollable-hr"}
                >
                  <H1
                    home
                    marqueed={isResponsive}
                    primary={true}
                    className="d-flex flex-row align-items-center gap-3"
                  >
                    <MarqueeComp />
                  </H1>
                </MarqueeContainer>
              </div>
            )}
          </Wrapper>
        </Wrapper>

        <Wrapper bg="#f8f8f8">
          <Wrapper id="app" pt={"5%"} style={{ overflowX: "hidden" }}>
            <Wrapper data-aos="zoom-in" data-aos-duration="2000">
              <HeadingComp
                heading={
                  <>
                    {" "}
                    incentivizing
                    <br /> your voice
                  </>
                }
              />
            </Wrapper>
            <Wrapper position="relative" style={{ overflow: "hidden" }}>
              {Header1Data.map((val, index) => {
                return (
                  <>
                    <Wrapper key={index}>
                      <Wrapper
                        bg={index % 2 === 0 ? "#f8f8f8" : "#f5f5f5"}
                        position="relative"
                      >
                        <SplitWrapper
                          left={index % 2 ? true : false}
                          src={val.src}
                          headline={val.headline}
                          text={val.text}
                          index={index}
                        />
                      </Wrapper>
                    </Wrapper>
                  </>
                );
              })}
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Wrapper bg="#f8f8f8">
          <Container>
            <Wrapper id="devices" mt={isResponsive ? "10vh" : ""}>
              <Wrapper data-aos="fade-down" data-aos-duration="2000">
                <HeadingComp
                  heading={
                    <>
                      Join the Network from any
                      <br />
                      device of your choice
                    </>
                  }
                />
              </Wrapper>
              <Wrapper>
                {isResponsive ? (
                  <>
                    <Wrapper data-aos="fade-right" data-aos-duration="2000">
                      {" "}
                      <Image
                        style={{ marginTop: "-13vh", marginBottom: "-17vh" }}
                        src="/assets/device_mob.svg"
                        alt="devices"
                        className="img-fluid"
                      />
                    </Wrapper>
                  </>
                ) : (
                  <>
                    {" "}
                    <Wrapper data-aos="fade-down" data-aos-duration="2000">
                      <Image
                        src="/assets/device.svg"
                        alt="devices"
                        className="img-fluid"
                      />
                    </Wrapper>
                  </>
                )}
              </Wrapper>
            </Wrapper>
            <Wrapper bg="#f8f8f8">
              <Wrapper className="d-flex flex-row align-items-center justify-content-center gap-2 pt-5 pb-5">
                {["/assets/solid_play.png", "/assets/solid_app.png"].map(
                  (imgSrc, index) => {
                    return (
                      <>
                        <Wrapper data-aos="flip-left" data-aos-duration="2000">
                          <Image
                            key={index}
                            src={imgSrc}
                            alt="app store"
                            width={isResponsive ? "25px" : "70px"}
                            height={isResponsive ? "25px" : "70px"}
                          />
                        </Wrapper>
                      </>
                    );
                  }
                )}
              </Wrapper>
            </Wrapper>
          </Container>
        </Wrapper>

        <Wrapper
          id="experience"
          bg="radial-gradient(circle, #ffffff, #f1efef)"
          mt={isResponsive ? "0%" : "0%"}
          width="100%"
          height="400px"
          className="d-flex flex-column align-items-center justify-content-center gap-4"
        >
          <Wrapper data-aos="fade-down" data-aos-duration="2000">
            <HeadingComp
              heading={
                <>
                  {" "}
                  Experience the magic
                  <br /> of Auralnexus
                </>
              }
            />
          </Wrapper>
          <Wrapper data-aos="flip-left" data-aos-duration="2000">
            <PrimaryButton
              transform={true}
              width={isResponsive ? "200px" : "375px"}
              height={isResponsive ? "58px" : "75px"}
              fontSize={isResponsive ? "21px" : "27px"}
              fontColor="white"
              onClick={handleButtonClick}
              heartbeat={true}
            >
              Visit now
            </PrimaryButton>
          </Wrapper>
        </Wrapper>
        <Wrapper bg="white">
          <Container>
            <Wrapper id="roadmap" mt={isResponsive ? "5vh" : ""}>
              <Wrapper data-aos="fade-down" data-aos-duration="2000">
                <HeadingComp heading={<>Roadmap</>} />
              </Wrapper>
              <Wrapper>
                {isResponsive ? (
                  <>
                    <Wrapper position="relative">
                      <Image
                        className="img-fluid"
                        src="/assets/solid_road.png"
                        alt="roadmap"
                      />
                      <Wrapper
                        position="absolute"
                        style={{ top: 0, right: 0, zIndex: 100 }}
                      >
                        {ResponsiveRoadMapData.right.data.map(
                          (val, index: any) => {
                            return (
                              <>
                                <Wrapper
                                  mt={index === 0 ? "30px" : "130px"}
                                  key={index}
                                >
                                  {val.lineData.map((line, lineIndex) => {
                                    return (
                                      <>
                                        <Wrapper
                                          fontColor="black !important"
                                          data-aos="flip-up"
                                          data-aos-duration={(
                                            2000 *
                                            (lineIndex + 1000)
                                          ).toString()}
                                          key={lineIndex}
                                        >
                                          {line}
                                        </Wrapper>
                                      </>
                                    );
                                  })}
                                </Wrapper>
                              </>
                            );
                          }
                        )}
                      </Wrapper>

                      <Wrapper
                        position="absolute"
                        style={{ top: 0, left: 0, zIndex: 100 }}
                      >
                        {ResponsiveRoadMapData.left.data.map((val, index) => {
                          return (
                            <>
                              <Wrapper mt={"130px"} key={index}>
                                {val.lineData.map((line, lineIndex) => {
                                  return (
                                    <>
                                      <Wrapper
                                        data-aos="flip-up"
                                        data-aos-duration={(
                                          2000 *
                                          (lineIndex + 1000)
                                        ).toString()}
                                        key={lineIndex}
                                      >
                                        {line}
                                      </Wrapper>
                                    </>
                                  );
                                })}
                              </Wrapper>
                            </>
                          );
                        })}
                      </Wrapper>
                    </Wrapper>
                  </>
                ) : (
                  <>
                    {" "}
                    {RoadmapData.map((obj, index) => {
                      return (
                        <>
                          <Wrapper key={index}>
                            <Wrapper
                              data-aos="zoom-in"
                              data-aos-duration={2000}
                            >
                              <Image
                                className="img-fluid"
                                src={obj.imgSrc}
                                alt="roadmap"
                              />
                            </Wrapper>
                            {obj.data.map((line, lineIndex) => {
                              return (
                                <Wrapper
                                  data-aos="flip-up"
                                  data-aos-duration={(
                                    2000 *
                                    (lineIndex + 1000)
                                  ).toString()}
                                  key={lineIndex}
                                  mt={(lineIndex === 0 ? -30 : 0) + "px"}
                                  ms="16%"
                                  me="16%"
                                  className="d-flex flex-row align-items-center justify-content-between"
                                >
                                  {line.lineData.map((lineData, dataIndex) => {
                                    return (
                                      <>
                                        <Wrapper key={dataIndex}>
                                          {lineData}
                                        </Wrapper>
                                      </>
                                    );
                                  })}
                                </Wrapper>
                              );
                            })}
                          </Wrapper>
                        </>
                      );
                    })}
                  </>
                )}
              </Wrapper>
            </Wrapper>
          </Container>
        </Wrapper>
        <Wrapper bg="#f8f8f8" position="relative">
          <Container>
            <Wrapper
              id="team"
              mt={isResponsive ? "5vh" : "5%"}
              style={{ position: "relative" }}
            >
              <Wrapper className="d-flex flex-row align-items-center justify-content-center">
                <Wrapper data-aos="fade-down" data-aos-duration="2000">
                  <HeadingComp
                    heading={
                      <>
                        Meet the Visionaries
                        <br /> behind AuralNexus
                      </>
                    }
                  />
                </Wrapper>
              </Wrapper>
              {!isResponsive && (
                <Image
                  style={{
                    width: "60%",
                    height: "70%",
                    position: "absolute",
                    zIndex: "0",
                    opacity: 0.2,
                    bottom: "25%",
                    left: 0,
                  }}
                  src="/assets/lines.png"
                  alt="lines"
                  className="img-fluid"
                />
              )}
              <Wrapper>
                <Wrapper
                  className={`d-flex flex-row align-items-center  ${
                    isResponsive
                      ? "gap-3 justify-content-center flex-wrap"
                      : "justify-content-center gap-1"
                  }`}
                  position="relative"
                  style={{ overflowX: "hidden" }}
                >
                  {TeamData.map((val, index) => {
                    return (
                      <>
                        <Wrapper
                          data-aos="flip-up"
                          data-aos-duration="2000"
                          key={index}
                          pt="20px"
                          pb="20px"
                          ps="20px"
                          pe="20px"
                          borderRadius="10px"
                          height="auto"
                          width="300px"
                          className="mx-5"
                        >
                          <Wrapper
                            className={`d-flex flex-column align-items-center justify-content-end gap-4`}
                          >
                            <Wrapper>
                              <Image
                                src={val.profile}
                                alt="haider"
                                width="250px"
                                height="250px"
                                className="rounded-5"
                              />
                            </Wrapper>
                            <Wrapper className="d-flex flex-column align-items-center justify-content-center">
                              <H1
                                className={`mb-0 text-center`}
                                fontSize="31px"
                                family="'Poppins','sans-serif'"
                              >
                                {val.name}
                              </H1>

                              <P className={`mb-0 text-center text-black`}>
                                {val.desc}
                              </P>
                              <P color="gray" className={`mb-0 text-center`}>
                                {val.position}
                              </P>
                              <Wrapper
                                className={`d-flex flex-row align-items-center justify-content-center mt-2`}
                              >
                                <LinkedInIcon />
                              </Wrapper>
                            </Wrapper>
                          </Wrapper>
                        </Wrapper>
                      </>
                    );
                  })}
                </Wrapper>
              </Wrapper>
            </Wrapper>
            <Wrapper
              pt="10%"
              id="contact"
              className="d-flex flex-column align-items-center justify-content-center gap-3"
              position="relative"
              style={{ zIndex: 1, overflow: "hidden" }}
            >
              <Wrapper
                mt={isResponsive ? "5vh" : ""}
                data-aos="fade-down"
                data-aos-duration="2000"
                position="relative"
              >
                <HeadingComp
                  heading={
                    <>
                      Intrested in Project?
                      <br />
                      Request a pitch today
                    </>
                  }
                />
              </Wrapper>
              <Wrapper
                width="100%"
                className={`d-flex flex-row align-items-center justify-content-center gap-3 ${
                  isResponsive && "flex-wrap"
                }`}
              >
                <Input
                  type="name"
                  placeholder="Enter Your Name"
                  width={isResponsive ? "90%" : "24.5%"}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <Input
                  type="text"
                  placeholder="Enter Your LinkedIn Profile"
                  width={isResponsive ? "90%" : "24.5%"}
                  value={linkedIn}
                  onChange={(e) => {
                    setLinkedIn(e.target.value);
                  }}
                />
              </Wrapper>
              <Wrapper
                width="100%"
                data-aos="flip-right"
                data-aos-duration="2000"
                className="d-flex flex-column align-items-center justify-content-center flex-wrap gap-3"
              >
                <Input
                  type="email"
                  placeholder="Enter Your Email"
                  width={isResponsive ? "90%" : "50%"}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Wrapper>

              <Spacer height={isResponsive ? "0px" : "10px"} />
              <Wrapper data-aos="flip-up">
                <PrimaryButton
                  width={isResponsive ? "120px" : ""}
                  height={isResponsive ? "50px" : ""}
                  fontSize="21px"
                  transform={true}
                  heartbeat={false}
                  onClick={() => doContact()}
                >
                  Submit
                </PrimaryButton>
              </Wrapper>
            </Wrapper>

            <Spacer height="40px" />
          </Container>
          {!isResponsive && (
            <Image
              style={{
                position: "absolute",
                bottom: "-25%",
                right: "-20%",
                width: "50%",
                height: "60%",
                opacity: "0.2",
                zIndex: 0,
              }}
              className="img-fluid"
              src="/assets/circle.png"
              alt="background"
            />
          )}
        </Wrapper>

        <Wrapper bg="#f8f8f8" position="relative" style={{ zIndex: 1 }}>
          <Wrapper bg="#100f0f" style={{ zIndex: 100 }}>
            <Container>
              <Wrapper id="footer">
                <Wrapper width="100%" height="0.5px" bg="white"></Wrapper>
                <Wrapper className="d-flex flex-column align-items-center justify-content-center">
                  <Image
                    src="/assets/logo.svg"
                    alt="logo"
                    width="170px"
                    height="120px"
                  />
                  <Wrapper className="d-flex flex-row align-items-center justify-content-center gap-3">
                    {["/assets/app1.svg", "", "/assets/app2.svg"].map(
                      (val, index) => {
                        return (
                          <>
                            {index === 1 ? (
                              <>
                                <LinkedInIcon
                                  style={{ fontSize: "25px", color: "white" }}
                                />
                              </>
                            ) : (
                              <Image
                                key={index}
                                src={val}
                                alt="app store"
                                width="25px"
                                height="25px"
                              />
                            )}
                          </>
                        );
                      }
                    )}
                  </Wrapper>
                  <Wrapper
                    width="100%"
                    className={`px-3 pb-2 mt-5 d-flex  ${
                      isResponsive
                        ? "justify-content-center flex-column align-items-center"
                        : "justify-content-between flex-row align-items-end"
                    }`}
                  >
                    <Wrapper
                      className={`d-flex flex-column justfy-content-center ${
                        isResponsive
                          ? "align-items-center my-3"
                          : "align-items-start"
                      }`}
                    >
                      {["Security", " Policy"].map((val, index) => {
                        return (
                          <>
                            <Wrapper
                              key={index}
                              ls="1px"
                              lHeight="24px"
                              fontSize="14px"
                              family="Poppins"
                              fontColor="white"
                            >
                              {val}
                            </Wrapper>
                          </>
                        );
                      })}
                    </Wrapper>
                    <Wrapper
                      fontSize="14px"
                      ls="1px"
                      lHeight="24px"
                      fontColor="white"
                      family="Poppins"
                    >
                      &copy;2023 | All rights reserved.
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Container>
          </Wrapper>
        </Wrapper>
      </ScrollWrapper>
    )
  );
}
