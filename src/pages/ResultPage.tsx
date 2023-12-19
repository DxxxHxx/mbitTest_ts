import styled from "styled-components";
import Header from "../components/Header";
import { resultData } from "../stores/result/resultData";
import Image from "react-bootstrap/Image";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import KakaoShareBtn from "../components/KakaoShareBtn";

export default function ResultPage() {
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const result = resultData.find((item) => item.best === mbti);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Header type="header" />
      <ContentWrapper>
        <Title>result</Title>
        <ResultImg>
          <Image
            roundedCircle
            src={result?.img}
            alt="cat"
            width={350}
            height={350}
          />
        </ResultImg>
        <Desc>
          결과 : {mbti}, 추천 : {result?.name}
        </Desc>
        <BtnWrapper>
          <Button onClick={() => navigate("/")} style={{ width: 170 }}>
            테스트 다시하기
          </Button>

          <KakaoShareBtn data={result!} />
        </BtnWrapper>
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

  padding: 10px;

  @media all and (max-width: 376px) {
    padding: 0 7px;
  }
`;
const Title = styled.div`
  margin-top: 20px;
  font-size: 25pt;
`;
const ResultImg = styled.div`
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
const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
  margin-bottom: 30px;
`;
