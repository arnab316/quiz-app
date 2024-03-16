import { useState } from 'react';
import Question from './components/Question'
import Result from './components/Result'
import questions from './constants/question.json';
import './App.css'
function App() {
const [currentQuestion, setCurrentQuestion] =useState(0)
const [userAnswers, setuserAnswers] =useState([])

const resetQuiz = ()=>{
  setCurrentQuestion(0)
  setuserAnswers([]);
}

const handleNextQuestion = (isCorrect)=>{
  setCurrentQuestion(currentQuestion+1)
  setuserAnswers([...userAnswers, isCorrect ])
}
  return (
    <div className='App'>
     <h1 >Backchodi quiz</h1>
       {/* questions component */}

      { currentQuestion < questions.length && (
      <Question question={questions[currentQuestion]} 
      onAnswerclick={handleNextQuestion}/> )}

       {/* quiz component */}
       {currentQuestion === questions.length && (
        <Result
        userAnswers={userAnswers}
        questions={questions}
        resetQuiz={resetQuiz}
        />)}
      </div>
  )
}

export default App
