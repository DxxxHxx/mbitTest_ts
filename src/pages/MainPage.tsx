import styled from "styled-components";
import catImg from "../assets/cat.jpeg";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Header from "../components/Header";

export default function MainPage() {
  const naviage = useNavigate();
  const handleClickBtn = () => naviage("/question");
  return (
    <Wrapper>
      <Header type="header" />
      <ContentWrapper>
        <Title>나에게 맞는 주인님은?!</Title>
        <LogoImg>
          <Image
            roundedCircle
            src={catImg}
            alt="cat"
            width={350}
            height={350}
          />
        </LogoImg>
        <Desc>MBTI를 기반으로 하는 나랑 잘 맞는 고양이 찾기!</Desc>
        <Desc>내가 집사가 되어 고양이를 키운다면?</Desc>
        <Button
          onClick={handleClickBtn}
          variant="primary"
          style={{ fontSize: 25, marginTop: 20, marginBottom: 20 }}
        >
          테스트 시작하기
        </Button>
      </ContentWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fffacd;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  font-family: "Jalnan";
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media all and (max-width: 376px) {
    padding: 0 7px;
  }
`;
const Title = styled.div`
  margin-top: 20px;
  font-size: 20pt;
`;
const LogoImg = styled.div`
  width: 200;
  height: 200;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  margin-top: 20px;
  font-size: 20pt;

  @media all and (max-width: 426px) {
    font-size: 14pt;
  }
`;
