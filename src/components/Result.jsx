
const Result = ({userAnswers, questions, resetQuiz =()=>{}}) => {
   const correctAnswers = userAnswers.filter((answer)=> answer).length
  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        You answere {correctAnswers} out of {questions.length} quetions 
        <span onClick={resetQuiz}>Reset Question</span>
        </p>
        <ul>
          {questions.map((question, index)=>{
           return <li key={index} data-correct={userAnswers[index]}>
            Q{index+1} . {question.question}</li>
          })}
        </ul>
    </div>
  )
}

export default Result
