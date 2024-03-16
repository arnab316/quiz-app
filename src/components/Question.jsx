

const Question = ({question, onAnswerclick}) => {
  return (
    <div className="question">
      <h2>{question.question}</h2>
      <ul className="options">
        {question.answerOptions.map((option)=>{
         return <li key={option.text}>
            <button onClick={()=>onAnswerclick(option.isCorrect)}>
              {option.text}
            </button>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Question
