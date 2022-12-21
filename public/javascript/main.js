const _rock = document.getElementById('rock');
const _paper = document.getElementById('paper');
const _scissor = document.getElementById('scissor');
const _rock_com = document.getElementById('com_rock');
const _paper_com = document.getElementById('com_paper');
const _scissor_com = document.getElementById('com_scissor');
const winBox = document.getElementById('box');
const result = document.getElementById("results");
const reset = document.getElementById("refresh");
const addElement1 = [...document.getElementsByClassName("dissap")];
const button = document.querySelector('button');

function playMatch() {
    var choices = ['Rock', 'Paper', 'Scissor'];
    var randomChoices = Math.floor(Math.random() * 3);
    return choices[randomChoices];
}

//Color Change
function resultObject() {
    winBox.classList.add('winBox'),
    result.setAttribute("style", "font-size:36px; color:white;");
}

function resultDraw() {
    winBox.classList.add('drawBox');
    result.setAttribute("style", "font-size:36px; color:white;");
}
//Text Win or Lose or Draw BOX
function win() {
    console.log('PLAYER 1 WIN');
    resultObject();
    result.innerText = 'PLAYER 1 WIN'
}
function lose() {
    console.log('COM WIN');
    resultObject();
    result.innerText = 'COM WIN'
}
function draw() {
    console.log('DRAW');
    resultDraw();
    result.innerText = 'DRAW'
}


// Hands Game Compare
function gameCompare(playerChoice) {
    const computerChoice = playMatch();
    console.log('Hasil Player =>' + playerChoice);
    console.log('Hasil dari =>' + computerChoice);

    switch (playerChoice + computerChoice) {
        case "RockScissor":
        case "ScissorPaper":
        case "PaperRock":
            win();
            break;
        case "ScissorRock":
        case "RockPaper":
        case "PaperScissor":
            lose();
            break;
        case "ScissorScissor":
        case "RockRock":
        case "PaperPaper":
            draw();
    }


    switch (computerChoice) {
        case "Rock":
            _rock_com.classList.add('chosen');
            break;
        case "Scissor":
           _scissor_com.classList.add('chosen');
            break;
        case "Paper":
            _paper_com.classList.add('chosen');
    }
}


//Player Choice
function play() {
    _rock.addEventListener('click', function () {
        this.classList.add('chosen');
        gameCompare('Rock');
        addElement1.forEach(addElement3 => {
            addElement3.setAttribute("style", "cursor: not-allowed;pointer-events: none;")
        })
    })

    _paper.addEventListener('click', function () {
        this.classList.add('chosen');
        gameCompare('Paper');
        addElement1.forEach(addElement3 => {
            addElement3.setAttribute("style", "cursor: not-allowed;pointer-events: none;")
        })
    })

    _scissor.addEventListener('click', function () {
        this.classList.add('chosen');
        gameCompare('Scissor');
        addElement1.forEach(addElement3 => {
            addElement3.setAttribute("style", "cursor: not-allowed;pointer-events: none;");
        })
    })
}

play();

// Reset
reset.addEventListener('click', function () {
    //window.location.reload();

    addElement1.forEach(addElement2 => {
        addElement2.classList.remove('chosen')
    });
    addElement1.forEach(addElement3 => {
        addElement3.removeAttribute("style", "cursor: not-allowed;pointer-events: none;")

    })
    winBox.classList.remove('winBox');
    winBox.classList.remove('drawBox');
    result.removeAttribute("style", "color: ''; font-size:'' ")

    result.style.marginTop = null
    result.style.fontSize = null
    result.innerText = "VS"
    button.disabled = false;
})