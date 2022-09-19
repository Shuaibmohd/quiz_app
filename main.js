const quizData =[ 
{
    question: 'Which language runs in a web browser?',
    a: 'Python',
    b: 'Java',
    c: 'JavaScript',
    d: 'C#',
    correct: 'c'
},

{
    question: 'What does CSS stand for?',
    a: 'Central Stlye Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b'
},

{
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'a'
},
{
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1994',
    c: 'none of the above',
    d: '1995',
    correct: 'd',
}

]

const quiz = document.getElementById('quiz');
const answerElms = document.querySelectorAll('.answer')
const questionElms = document.getElementById('question')
const a_text = document.getElementById('a-text')
const b_text = document.getElementById('b-text')
const c_text = document.getElementById('c-text')
const d_text = document.getElementById('d-text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz];

    questionElms.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerElms.forEach(answerElm => answerElm.checked =
        false)
}

function getSelected() {
    let answer

    answerElms.forEach(answerElm => {
        if(answerElm.checked) {
            answer = answerElm.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }

    }


})