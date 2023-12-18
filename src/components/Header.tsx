import styled from "styled-components";
import ProgressBar from "react-bootstrap/ProgressBar";
import { questionData } from "../stores/question/questionData";

interface IHeaderProps {
  type: string;
  progressRate?:number
}
export default function Header({ type,progressRate }: IHeaderProps) {
  return (
    <>
      {type === "progress" ? (
        <ProgressWrapper>
          <ProgressBar
            style={{ width: "100%", height: "30px" }}
            now={Math.round((progressRate!/questionData.length)*100)}
            label={`${Math.round((progressRate!/questionData.length)*100)}%`}
          />
        </ProgressWrapper>
      ) : (
        <Wrapper>😽예비 집사 판별기😽</Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  background-color: #ffa07a;
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 15px; */

  @media all and (max-width: 426px) {
    font-size: 20pt;
  }
`;
const ProgressWrapper = styled(Wrapper)`
  padding: 15px;
  background-color: inherit;
`;
