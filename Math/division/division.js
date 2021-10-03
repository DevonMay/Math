//this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..
 const questions = [
    {
        question: "57446 / 864 = ____",
        optionA: "17.89",
        optionB: "66.44",
        optionC: "68.00",
        optionD: "191.99",
        correctOption: "optionC"
    },

    {
        question: "369 / 92 =_____",
        optionA: "4.10",
        optionB: "7.90",
        optionC: "200",
        optionD: "596",
        correctOption: "optionD"
    },

    {
        question: "569 / 55 =_____",
        optionA: "779",
        optionB: "762",
        optionC: "850",
        optionD: "772",
        correctOption: "optionB"
    },

    {
        question: "813 / 52 =_____",
        optionA: "990",
        optionB: "920",
        optionC: "865",
        optionD: "560",
        correctOption: "optionC"
    },

    {
        question: "78878 / 7888 =_____",
        optionA: "900",
        optionB: "792",
        optionC: "650",
        optionD: "857",
        correctOption: "optionD"
    },

    {
        question: "946 / 87 =_____",
        optionA: "757",
        optionB: "810",
        optionC: "680",
        optionD: "767",
        correctOption: "optionD"
    },

    {
        question: "97845 / 630 =_____",
        optionA: "99",
        optionB: "110",
        optionC: "117",
        optionD: "85",
        correctOption: "optionC"
    },

    {
        question: "13258 / 895=_____",
        optionA: "168",
        optionB: "150",
        optionC: "186",
        optionD: "99",
        correctOption: "optionA"
    },

    {
        question: "29887 / 12  =_____",
        optionA: "875",
        optionB: "760",
        optionC: "865",
        optionD: "870",
        correctOption: "optionD"
    },

    {
        question: "200 / 40 =_____",
        optionA: "135",
        optionB: "275",
        optionC: "120",
        optionD: "175",
        correctOption: "optionD"
    },

    {
        question: "85 / 136 / 152 =_____",
        optionA: "290",
        optionB: "250",
        optionC: "373",
        optionD: "370",
        correctOption: "optionC"
    },

    {
        question: "163 / 250 =_____",
        optionA: "467",
        optionB: "450",
        optionC: "390",
        optionD: "267",
        correctOption: "optionA"
    },

    {
        question: "68 / 180 = ____",
        optionA: "150",
        optionB: "109",
        optionC: "200",
        optionD: "160",
        correctOption: "optionB"
    },

    {
        question: "128 / 10 = _____",
        optionA: "7",
        optionB: "90",
        optionC: "65",
        optionD: "70",
        correctOption: "optionD"
    },

    {
        question: "65 / 120 = _____",
        optionA: "45",
        optionB: "55",
        optionC: "40",
        optionD: "42",
        correctOption: "optionA"
    },

    {
        question: "65 / 98 = ______",
        optionA: "99",
        optionB: "87",
        optionC: "97",
        optionD: "80",
        correctOption: "optionC"
    },

    {
        question: "150 / 256 = _____",
        optionA: "372",
        optionB: "265",
        optionC: "370",
        optionD: "300",
        correctOption: "optionA"
    },

    {
        question: "280 / 120 = ______",
        optionA: "60",
        optionB: "100",
        optionC: "50",
        optionD: "75",
        correctOption: "optionC"
    },

    {
        question: "260 / 350 = ______",
        optionA: "287",
        optionB: "300",
        optionC: "275",
        optionD: "380",
        correctOption: "optionD"
    },

    {
        question: "200 / 100 = _____",
        optionA: "180",
        optionB: "200",
        optionC: "150",
        optionD: "190",
        correctOption: "optionA"
    },

    {
        question: "400 / 280 = ______",
        optionA: "160",
        optionB: "155",
        optionC: "200",
        optionD: "170",
        correctOption: "optionD"
    },

    {
        question: "150 / 200 = _____",
        optionA: "150",
        optionB: "250",
        optionC: "240",
        optionD: "290",
        correctOption: "optionB"
    },

    {
        question: "285 / 450 = _____",
        optionA: "415",
        optionB: "315",
        optionC: "250",
        optionD: "300",
        correctOption: "optionB"
    },

    {
        question: "250 /500 = ______",
        optionA: "260",
        optionB: "300",
        optionC: "200",
        optionD: "250",
        correctOption: "optionC"
    },

    {
        question: "178 / 450 = ______",
        optionA: "185",
        optionB: "190",
        optionC: "192",
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
let playerScore = 0  //holds the player score
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
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
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
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
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
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
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