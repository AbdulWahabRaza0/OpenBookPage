"use client";
import React, { useState } from "react";
import { Wrapper, useMediaQuery, Image } from "./Layout";
import { PrimaryButton } from "./Buttons";
import { A, P } from "./Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const menuitems = [
  { name: "About", link: "#about" },
  { name: "Key features", link: "#app" },
  {
    name: "visit now",
    link: "#experience",
  },
  {
    name: "Devices",
    link: "#devices",
  },
  {
    name: "Roadmap",
    link: "#roadmap",
  },
  {
    name: "Team",
    link: "#team",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isResponsive = useMediaQuery({
    query: "(max-width: 752px)",
  });
  return (
    <>
      <Wrapper
        width="100%"
        // bg="white"
        // style={{
        //   backgroundImage:
        //     "linear-gradient(to bottom,rgba(185, 93, 93, 0.2), rgba(185, 93, 93, 0.4))",
        //   zIndex: 1000,
        // }}
      >
        <Wrapper
          ps={isResponsive ? "30px" : "50px"}
          pe="3%"
          pt="35px"
          className="d-flex flex-row align-items-center justify-content-between"
        >
          <Image
            src="/assets/black_logo.svg"
            alt="playin logo"
            className="img-fluid"
            width={240}
            height={60}
          />
          <Wrapper
            zIndex={100}
            style={{ position: "fixed", right: "5%" }}
            className={
              isResponsive
                ? "d-flex flex-column align-items-center justify-content-center gap-3"
                : "d-flex flex-row align-items-center justify-content-center"
            }
          >
            {open ? (
              <>
                <Wrapper
                  bg="#242a3b"
                  width={isResponsive ? "90vw" : "auto"}
                  borderRadius="40px"
                  height={isResponsive ? "auto" : "60px"}
                  mt={isResponsive ? "60%" : ""}
                  className={
                    isResponsive
                      ? "d-flex flex-column align-items-center justify-content-end ps-2 pe-2 pt-5 pb-2 gap-4"
                      : "d-flex flex-row align-items-center justify-content-center ps-4 pe-4 gap-4"
                  }
                >
                  {menuitems.map((val, index) => {
                    return (
                      <>
                        <A
                          key={index}
                          href={val.link}
                          className="mb-0"
                          style={{ cursor: "pointer" }}
                          hover={true}
                        >
                          {val.name}
                        </A>
                      </>
                    );
                  })}

                  <Wrapper
                    data-aos="flip-left"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon
                      style={{
                        transition: "all 0.5s ease",
                        color: "white",
                        cursor: "pointer",
                      }}
                    />
                  </Wrapper>
                </Wrapper>
              </>
            ) : (
              <Wrapper
                bg="#282834"
                borderRadius="50%"
                width="70px"
                height="70px"
                style={{ cursor: "pointer" }}
                className="d-flex flex-row align-items-center justify-content-center"
                onClick={() => {
                  setOpen(true);
                }}
              >
                <Wrapper data-aos="flip-left">
                  <MenuIcon
                    className="mb-0"
                    style={{
                      fontSize: "21px",
                      color: "white",
                    }}
                  />
                </Wrapper>
              </Wrapper>
            )}
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default Navbar;
