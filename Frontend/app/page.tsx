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
  Row,
  Col,
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
      <>
        <ScrollWrapper id="home">
          <Wrapper
            bg="white"
            style={{
              backgroundImage:
                "linear-gradient(to bottom,rgba(185, 93, 93, 0.2), rgba(159, 80, 80, 0.4))",
            }}
          >
            <Navbar />
            <Wrapper
              id="about"
              width="100%"
              
            >
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
                      <Wrapper
                        bg="#242a3b"
                        height="65vh"
                        width="0.7px"
                      ></Wrapper>
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
                        fontSize={isResponsive ? "41px" : "41px"}
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

                <Wrapper
                  id="marquee"
                  mt={isResponsive ? "5vh" : ""}
                  mb={isResponsive ? "5vh" : ""}
                >
                  {isResponsive ? (
                    <div
                      style={{
                        paddingLeft: "0px",
                        overflow: "hidden",
                      }}
                    >
                      <H1
                        fontSize="40px"
                        home
                        marqueed={isResponsive}
                        primary={true}
                      >
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
              </Container>
            </Wrapper>
          </Wrapper>
          <Wrapper
            bg="white"
            style={{
              backgroundImage:
                "radial-gradient(rgba(143, 74, 74, 0.2), rgba(150, 62, 62, 0.4))",
            }}
          >
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
              <Wrapper>
                {Header1Data.map((val, index) => {
                  return (
                    <>
                      <SplitWrapper
                        left={index % 2 ? true : false}
                        src={val.src}
                        headline={val.headline}
                        text={val.text}
                      />
                    </>
                  );
                })}
              </Wrapper>
            </Wrapper>
          </Wrapper>
          <Wrapper
            bg="white"
            style={{
              backgroundImage:
                "linear-gradient(to bottom,rgba(185, 93, 93, 0.4), rgba(185, 93, 93, 0.1))",
            }}
          >
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
                          style={{ marginTop: "-10vh", marginBottom: "-15vh" }}
                          src="/assets/responsiveDevices.svg"
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
                          src="/assets/devices.png"
                          alt="devices"
                          className="img-fluid"
                        />
                      </Wrapper>
                    </>
                  )}
                </Wrapper>
              </Wrapper>
            </Container>
          </Wrapper>
          <Wrapper
            bg="white"
            style={{
              backgroundImage:
                "linear-gradient(to bottom,rgba(185, 93, 93, 0.1), rgba(185, 93, 93, 0.3))",
            }}
          >
            <Wrapper className="d-flex flex-row align-items-center justify-content-center gap-2 pt-5 pb-5">
              {["/assets/play.svg", "/assets/app.svg"].map((imgSrc, index) => {
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
              })}
            </Wrapper>
          </Wrapper>
          <Wrapper
            id="experience"
            style={{
              backgroundImage:
                "linear-gradient(to bottom,rgba(185, 93, 93, 0.4), rgba(185, 93, 93, 0.1))",
            }}
            mt={isResponsive ? "0%" : "0%"}
            bg="white"
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
                fontSize="21px"
                onClick={handleButtonClick}
              >
                Visit now
              </PrimaryButton>
            </Wrapper>
          </Wrapper>
          <Wrapper
            bg="black"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, black, transparent)",
            }}
          >
            <Container>
              <Wrapper id="roadmap" mt={isResponsive ? "5vh" : ""}>
                <Wrapper data-aos="fade-down" data-aos-duration="2000">
                  <HeadingComp heading={<>Roadmap</>} />
                </Wrapper>
                <Wrapper>
                  {isResponsive ? (
                    <>
                      <Wrapper position="relative">
                        <Image src="/assets/road3.svg" alt="roadmap" />
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
                                          fontColor="white !important"
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
                          style={{ top: 0, left: "20px", zIndex: 100 }}
                        >
                          {ResponsiveRoadMapData.left.data.map((val, index) => {
                            return (
                              <>
                                <Wrapper mt={"130px"} key={index}>
                                  {val.lineData.map((line, lineIndex) => {
                                    return (
                                      <>
                                        <Wrapper
                                        fontColor="white !important"
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
                                <Image src={obj.imgSrc} alt="roadmap" />
                              </Wrapper>
                              {obj.data.map((line, lineIndex) => {
                                return (
                                  <Wrapper
                                  fontColor="white"
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
                                    {line.lineData.map(
                                      (lineData, dataIndex) => {
                                        return (
                                          <>
                                            <Wrapper key={dataIndex}>
                                              {lineData}
                                            </Wrapper>
                                          </>
                                        );
                                      }
                                    )}
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
          <Wrapper
            bg="white"
            style={{
              backgroundImage:
                "linear-gradient(to bottom,rgba(185, 93, 93, 0.1), rgba(185, 93, 93, 0.4))",
            }}
          >
            <Container>
              <Wrapper id="team" mt={isResponsive ? "5vh" : "5%"}>
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
                <Wrapper>
                  <Wrapper
                    className={`d-flex flex-row align-items-center  ${
                      isResponsive
                        ? "gap-3 justify-content-center flex-wrap"
                        : "justify-content-center gap-1"
                    }`}
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

                                <P className={`mb-0 text-center`}>{val.desc}</P>
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
              >
                <Wrapper
                  mt={isResponsive ? "5vh" : ""}
                  data-aos="fade-down"
                  data-aos-duration="2000"
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
                    placeholder="Enter your LinkedIn profile"
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
                    onClick={() => doContact()}
                  >
                    Submit
                  </PrimaryButton>
                </Wrapper>
              </Wrapper>
              <Spacer height="40px" />
            </Container>
          </Wrapper>
          <Wrapper
            style={{
              background: " linear-gradient(to bottom, #b36666,#f59696)",
            }}
          >
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
                              fontColor="black"
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
                      fontColor="black"
                      family="Poppins"
                    >
                      &copy;2023 | All rights reserved.
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Container>
          </Wrapper>
        </ScrollWrapper>
      </>
    )
  );
}
