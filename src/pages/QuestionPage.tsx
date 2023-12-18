import { questionData } from "../stores/question/questionData"
export default function QuestionPage(){
    console.log(questionData)
    return <>{questionData[0].title}</>
}