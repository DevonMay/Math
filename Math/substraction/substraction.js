const questions = [{
        question: "19 - 85  =__",
        optionA: "57",
        optionB: "-12",
        optionC: "71",
        optionD: "-66",
        correctOption: "optionD"
    },

    {
        question: "150 - 77 =___",
        optionA: "44",
        optionB: "36",
        optionC: "-52",
        optionD: "73",
        correctOption: "optionD"
    },

    {
        question: "571 - 148 =_____",
        optionA: "-287",
        optionB: "423",
        optionC: "-120",
        optionD: "359",
        correctOption: "optionB"
    },

    {
        question: "225 - 96 =_____",
        optionA: "108",
        optionB: "-112",
        optionC: "129",
        optionD: "185",
        correctOption: "optionC"
    },

    {
        question: "477 - 125 =_____",
        optionA: "167",
        optionB: "259",
        optionC: "315",
        optionD: "352",
        correctOption: "optionD"
    },

    {
        question: "684 - 458 =_____",
        optionA: "147",
        optionB: "218",
        optionC: "109",
        optionD: "226",
        correctOption: "optionD"
    },

    {
        question: "721 - 254 =_____",
        optionA: "457",
        optionB: "369",
        optionC: "467",
        optionD: "221",
        correctOption: "optionC"
    },

    {
        question: "99 - 62 =_____",
        optionA: "37",
        optionB: "58",
        optionC: "61",
        optionD: "99",
        correctOption: "optionA"
    },

    {
        question: "23 - 14 - 8 =_____",
        optionA: "13",
        optionB: "5",
        optionC: "11",
        optionD: "1",
        correctOption: "optionD"
    },

    {
        question: "95 - 64 - 33 =_____",
        optionA: "-8",
        optionB: "13",
        optionC: "-2",
        optionD: "-6",
        correctOption: "optionD"
    },

    {
        question: "788 - 158 =_____",
        optionA: "290",
        optionB: "578",
        optionC: "630",
        optionD: "370",
        correctOption: "optionC"
    },

    {
        question: "887 - 547 =_____",
        optionA: "330",
        optionB: "225",
        optionC: "347",
        optionD: "267",
        correctOption: "optionA"
    },

    {
        question: "98 - _____ - 54 = 10",
        optionA: "29",
        optionB: "34",
        optionC: "20",
        optionD: "16",
        correctOption: "optionB"
    },

    {
        question: "128 - _____ - 105 = -65",
        optionA: "74",
        optionB: "62",
        optionC: "75",
        optionD: "88",
        correctOption: "optionD"
    },

    {
        question: "48 - _____ - 12 = 4",
        optionA: "32",
        optionB: "55",
        optionC: "47",
        optionD: "52",
        correctOption: "optionA"
    },

    {
        question: "66 - _____ - 12 = 22",
        optionA: "48",
        optionB: "87",
        optionC: "32",
        optionD: "28",
        correctOption: "optionC"
    },

    {
        question: "369 - _____ - 256 = 14",
        optionA: "99",
        optionB: "102",
        optionC: "69",
        optionD: "87",
        correctOption: "optionA"
    },

    {
        question: "741 - _____ - 475 = 8",
        optionA: "189",
        optionB: "100",
        optionC: "258",
        optionD: "221",
        correctOption: "optionC"
    },

    {
        question: "460 - _____ - 350 = 85",
        optionA: "54",
        optionB: "77",
        optionC: "39",
        optionD: "25",
        correctOption: "optionD"
    },

    {
        question: "300 - _____ - 33 = 198",
        optionA: "69",
        optionB: "54",
        optionC: "150",
        optionD: "62",
        correctOption: "optionA"
    },

    {
        question: "400 - _____ - 180 = 135",
        optionA: "48",
        optionB: "59",
        optionC: "102",
        optionD: "85",
        correctOption: "optionD"
    },

    {
        question: "150 - _____ - 48 = 47",
        optionA: "69",
        optionB: "55",
        optionC: "27",
        optionD: "20",
        correctOption: "optionB"
    },

    {
        question: "385 - _____ - 120 = 181",
        optionA: "92",
        optionB: "84",
        optionC: "67",
        optionD: "88",
        correctOption: "optionB"
    },

    {
        question: "250 - _____ - 154 = 51",
        optionA: "28",
        optionB: "55",
        optionC: "51",
        optionD: "69",
        correctOption: "optionC"
    },

    {
        question: "875 - _____ - 412 = 338",
        optionA: "185",
        optionB: "190",
        optionC: "125",
        optionD: "200",
        correctOption: "optionC"
    }

]
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() {
    //function to shuffle and push 10 questions to shuffledQuestions array
    //app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0 //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        } else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
        //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
            //displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        } else {
            handleEndGame() //ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    } else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    } else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}