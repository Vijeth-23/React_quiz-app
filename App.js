import{useState} from "react";
function App(){
  const questions=[
    {
      questionText:"which is the frontend framework used to create single page application?",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"Express js",isCorrect:false},
        {answerText:"React js",isCorrect:true},
        {answerText:"Mongo db",isCorrect:false}

      ],
    },
    {
      questionText:"Which among these is the wec framework of node js?",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"Express js",isCorrect:true},
        {answerText:"React js",isCorrect:false},
        {answerText:"Mongo db",isCorrect:false},
      ],

    },
    {
      questionText:"which among these technologies deals with database?",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"Express js",isCorrect:false},
        {answerText:"React js",isCorrect:false},
        {answerText:"Mongo db",isCorrect:true},
      ],
    },
    {
      questionText:"which among these is not in MERN?",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"CSS",isCorrect:true},
        {answerText:"react js",isCorrect:false},
        {answerText:"express js",isCorrect:false},
      ],
    },
    {
      questionText:"Which among these is in MERN?",
      answerOption:[
        {answerText:"Python",isCorrect:false},
        {answerText:"HTML",isCorrect:false},
        {answerText:"Node js",isCorrect:true},
        {answerText:"purescript",isCorrect:false},
      ],
      
    },
    {
      questionText:"what is the correct abbreviation of NPM?",
      answerOption:[
        {answerText:"NETWORK PROGRAM MANAGER",isCorrect:false},
        {answerText:"NETWORK PACKAGE MANAGER",isCorrect:false},
        {answerText:"NODE PACKAGE MANAGER",isCorrect:true},
        {answerText:"NODE PROGRAM MANAGER",isCorrect:false},
      ],
    },
    {
      questionText:"which among these is javascript web server?",
      answerOption:[
        {answerText:"Node js",isCorrect:true},
        {answerText:"CSS",isCorrect:false},
        {answerText:"react js",isCorrect:false},
        {answerText:"express js",isCorrect:false},
        
      ],
    },
    {
      questionText:"Is MERN a fullstack technology?",
      answerOption:[
        {answerText:"yes",isCorrect:true},
        {answerText:"no",isCorrect:false},
        {answerText:"maybe",isCorrect:false},
        {answerText:"none of the above",isCorrect:false},
        
      ],
    },
    {
      questionText:"what are the building blocks of react?",
      answerOption:[
        {answerText:"states",isCorrect:false},
        {answerText:"components",isCorrect:true},
        {answerText:"lists",isCorrect:false},
        {answerText:"none of the above",isCorrect:false},
        
      ],
    },
    {
      questionText:"which among these is used to create video streaming sites?",
      answerOption:[
        {answerText:"mongo db",isCorrect:false},
        {answerText:"node js",isCorrect:true},
        {answerText:"react js",isCorrect:false},
        {answerText:"none of the above",isCorrect:false},
        
      ],
    },

    

  ]

const[currentQuestion,setCurrentQuestion]=useState(0)
const[showScore,setShowScore]=useState(false)
const[score,setScore]=useState(0)
const handle=(isCorrect)=>{
  if(isCorrect)
  {
    setScore(score+1)
  }
  const nextQuestion=currentQuestion+1;
  if(nextQuestion<questions.length){
    setCurrentQuestion(nextQuestion)
  }
  else{
    setShowScore(true)
  }
}
return(
  <div className="app">
    {showScore ? (
      <div className="score-section">
      you scored {score} out of {questions.length}
    </div>
    ):(
      <>
      <div className="question-section">
        <div className="question-count">
          <span>Question{currentQuestion+1}</span>/{questions.length}
          </div>
          <div className="question-text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOption.map((answerOption)=>(
              <button onClick={()=>handle(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        )            )}
          </div>
          </>
    )}
     
  </div>
 
)
            }


export default App


