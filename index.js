const QuestionAndAnswer = [
   {
       test: "1. What does Responsive website mean?",
       i: "a website which is faster",
       ii: "a website which performs well",
       iii: "a website that adapt to all devices",
       iv: "both (i) and (ii)",
       correct: "iii",
   },
   {
       test: "2. What does ECMA in ECMAScript stand for?",
       i: "European Computer Manufacturing Agency ",
       ii: "European Computer Manufacturers Association",
       iii: "Electronic Computer Management Association",
       iv: "none of these",
       correct: "ii",
   },
   {
       test: "3. Which one of the following is not a characteristic of innerHTML?",
       i: "It retrieves and sets the content in plain text",
       ii: "it considers the spaces",
       iii: "HTML tags can be inserted",
       iv: "all of them",
       correct: "i",
   },
   {
       test: "4. HTML is:",
       i: "a programming language",
       ii: "a standard mark-up language",
       iii: "both i and ii",
       iv: "a scripting language",
       correct: "ii",
   },
   {
    test: "5. what is DOM in full?",
    i: "Data Oriented Management",
    ii: "Data Oriented Model",
    iii: "Document Object Model",
    iv: "none of the above",
    correct: "iii",
},
{
    test: "6. when is the word DEFER used in javaScript",
    i: "In a script tag used in the body of HTML",
    ii: "In method call",
    iii: "In creating an object",
    iv: "In a script tag used in head of the HTML",
    correct: "iV",
},
];
const questionnaire= document.getElementById('questionnaire')
const answerEls = document.querySelectorAll('.answer')
const testQ = document.getElementById('test')
const i_choice = document.getElementById('i_choice')
const ii_choice = document.getElementById('ii_choice')
const iii_choice = document.getElementById('iii_choice')
const iv_choice = document.getElementById('iv_choice')
const nextBtn = document.getElementById('next')
const submitBtn = document.getElementById('submit')
let theQuiz = 0
let marks = 0
loadQuiz()
function loadQuiz() {
   deselectAnswers()
   const currentQuestionAndAnswer = QuestionAndAnswer[theQuiz]
   testQ.innerText =currentQuestionAndAnswer.test
   i_choice.innerText = currentQuestionAndAnswer.i
   ii_choice.innerText = currentQuestionAndAnswer.ii
   iii_choice.innerText = currentQuestionAndAnswer.iii
   iv_choice.innerText = currentQuestionAndAnswer.iv
}
function deselectAnswers() {
   answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
   let answer
   answerEls.forEach(answerEl => {
       if(answerEl.checked) {
           answer = answerEl.id
       }
   })
   return answer
}
nextBtn.addEventListener('click', () => {
   const answer = getSelected()
   if(answer) {
      if(answer === QuestionAndAnswer[theQuiz].correct) {
          marks++
      }
      theQuiz++
      if(theQuiz < QuestionAndAnswer.length) {
          loadQuiz()
      } else {
          next.innerHTML = `
          <h2> click the button below to finish</h2>
          `
      }
   }
})
submitBtn.addEventListener('click', message);
function message(){
    if(marks >= (QuestionAndAnswer.length/2)){
   submit.innerHTML= `
   <h2>Congratulations,Your score is ${marks}/${QuestionAndAnswer.length} </h2>
    `}
    else{
        submit.innerHTML= `
   <h2>Your score is ${marks}/${QuestionAndAnswer.length} </h2>
    `}
    

}

