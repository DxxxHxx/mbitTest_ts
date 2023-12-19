import styled from "styled-components";
import { questionData } from "../stores/question/questionData";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

export default function QuestionPage() {
  const navigate = useNavigate();

  const [questionIndex, setQuestionIndex] = useState(0);
  const [totalScore, setTotlaScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "FT", score: 0 },
    { id: "PJ", score: 0 },
  ]);

  const handleClickAnswer = (answer: number, type: string) => {
    const newScore = totalScore.map((item) => {
      if (item.id === type) {
        return {
          ...item,
          score: (item.score += answer),
        };
      } else {
        return item;
      }
    });
    setTotlaScore(newScore);

    if (questionData.length !== questionIndex + 1) {
      setQuestionIndex((prev) => (prev += 1));
    } else {
      const mbti = "ENTJ";
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({ mbti: mbti })}`,
      });
    }
  };
  return (
    <Wrapper>
      <Header type="progress" progressRate={questionIndex} />
      <ContentWrapper>
        <Title>{questionData[questionIndex].title}</Title>
        <ButtonGroup>
          <Button
            onClick={() =>
              handleClickAnswer(1, questionData[questionIndex].type)
            }
          >
            {questionData[questionIndex].answerA}
          </Button>
          <Button
            onClick={() =>
              handleClickAnswer(0, questionData[questionIndex].type)
            }
          >
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
