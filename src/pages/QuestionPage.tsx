import styled from "styled-components";
import { questionData } from "../stores/question/questionData";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function QuestionPage() {
  //   console.log(100 / questionData.length);
  const [questionIndex, setQuestionIndex] = useState(0);
//   const navigate = useNavigate();
  const handleClickAnswer = () => {
    setQuestionIndex((prev) => prev + 1);
    console.log(questionIndex);
  };
  return (
    <Wrapper>
      <Header type="progress" progressRate={questionIndex} />
      <ContentWrapper>
        <Title>{questionData[questionIndex].title}</Title>
        <ButtonGroup>
          <Button onClick={handleClickAnswer}>
            {questionData[questionIndex].answerA}
          </Button>
          <Button onClick={handleClickAnswer}>
            {questionData[questionIndex].answerB}
          </Button>
        </ButtonGroup>
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
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;
