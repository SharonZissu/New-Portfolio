import React from "react";
import styled from "styled-components";
import { Titles } from "../styles";
import { inProgressCourses, OnlineCourses } from "../utils";
import { Course } from "../components/index";

const Education = () => {
  return (
    <Container>
      <Titles mainTitle="Education" subTitle="My" color="#4f565b" mt={20} />
      <SubTitle ml={1.6} textAlign="left">
        Online Courses
      </SubTitle>
      <OnlineCoursesContainer>
        {OnlineCourses.map(({ name, by, hours, imgName }, i) => (
          <Course key={i} name={name} by={by} hours={hours} imgName={imgName} />
        ))}
      </OnlineCoursesContainer>
      <SubTitle mr={1.6} textAlign="right">
        In Progress
      </SubTitle>
      <InProgressCoursesContainer>
        {inProgressCourses.map(({ name, by, hours, imgName }, i) => (
          <Course key={i} name={name} by={by} hours={hours} imgName={imgName} />
        ))}
      </InProgressCoursesContainer>
      <SubTitle ml={1.6} mb={1} textAlign="left">
        Certificates
      </SubTitle>
      <Certificate>
        <CertificateImg
          height={14.3}
          src={require("../images/sqlink-graduate.png").default}
        />
        <Info>
          <SQLinkImgContainer>
            <SQLinkImg src={require("../images/sqlink-logo.png").default} />
          </SQLinkImgContainer>

          <Specialization>React & Redux</Specialization>
          <Institution>40 Hours</Institution>
          {/* <GPA>GPA: 88</GPA> */}
        </Info>
      </Certificate>
      <Certificate>
        <CertificateImg
          height={28.2}
          src={require("../images/bsc.png").default}
        />
        <Info mt={13}>
          <Specialization>B.Sc. Computer Science</Specialization>
          <Institution>Holon Institute Of Technology</Institution>
          <GPA>GPA: 88</GPA>
        </Info>
        <GraduateImgContainer>
          <GraduateImg src={require("../images/graduate.png").default} />
        </GraduateImgContainer>
      </Certificate>
      <Certificate>
        <CertificateImg
          height={28.2}
          src={require("../images/bagrut.png").default}
        />
        <Info mt={13}>
          <Specialization>Computer Class</Specialization>
          <Institution>Kugel High School</Institution>
          <GPA>GPA: 110</GPA>
        </Info>
        <StudentImgContainer year1="2008" year2="2011">
          <StudentImg src={require("../images/student.png").default} />
        </StudentImgContainer>
      </Certificate>
    </Container>
  );
};

export default Education;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    -166deg,
    #f6f6f7 80%,
    #ffffff 80%
  ) !important;
  margin-top: -20rem;
  /* clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0% 100%); */
`;

const SubTitle = styled.h2`
  color: #333;
  font-size: 2.3rem;
  font-weight: 600;
  text-transform: uppercase;
  width: 78rem;
  margin-right: ${({ mr }) => (mr ? `${mr}rem` : 0)};
  margin-left: ${({ ml }) => (ml ? `${ml}rem` : 0)};
  margin-bottom: ${({ mb }) => (mb ? `${mb}rem` : 0)};
  text-align: ${({ textAlign }) => textAlign};
`;

const OnlineCoursesContainer = styled.div`
  display: flex;
  width: 78rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 10rem;
`;

const InProgressCoursesContainer = styled(OnlineCoursesContainer)`
  justify-content: flex-end;
`;

const Certificate = styled.div`
  display: flex;
  width: 78rem;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10rem;
  position: relative;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 6;
  margin-top: ${({ mt }) => (mt ? `${mt}rem` : 0)};
  min-width: 36.4rem;
`;
const Specialization = styled.h3`
  color: #333;
  font-weight: 500;
  font-size: 2.4rem;
  text-align: center;
  background-image: linear-gradient(160deg, #8300e9 0%, #00e2db 88%);
`;

const Institution = styled.p`
  color: #333;
  font-weight: 500;
  font-size: 2.4rem;
  text-align: center;
`;

const GPA = styled(Institution)``;

const SQLinkImgContainer = styled.div`
  width: 19.2rem;
  height: 9rem;
  margin: 0 auto;
  margin-bottom: 1rem;

  ::before {
    position: absolute;
    content: "2020";
    white-space: pre;
    height: 100%;
    width: 150%;
    top: -0.2rem;
    left: 13rem;
    font-size: 3rem;
    color: #333;
    z-index: -1;
  }
`;

const SQLinkImg = styled.img`
  height: 100%;
  width: 100%;
`;

const CertificateImg = styled.img`
  width: 20rem;
  height: ${({ height }) => `${height}rem`};
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.2);
  margin-right: 8rem;
`;

const GraduateImgContainer = styled.div`
  width: 16rem;
  height: 18.3rem;
  position: absolute;
  top: -1rem;
  left: 50%;
  z-index: 5;
  ::before {
    position: absolute;
    content: "2017                2020";
    white-space: pre;
    height: 100%;
    width: 150%;
    top: 1rem;
    left: -6rem;
    font-size: 3rem;
    color: #333;
    z-index: 3;
  }
`;

const StudentImgContainer = styled(GraduateImgContainer)`
  width: 12rem;
  height: 18.1rem;
  left: 53%;
  ::before {
    content: "2008                 2011";
    left: -8.5rem;
  }
`;
const GraduateImg = styled.img`
  height: 100%;
  width: 100%;
`;

const StudentImg = styled(GraduateImg)``;
