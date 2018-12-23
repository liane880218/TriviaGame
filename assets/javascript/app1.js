$(document).ready(function() {
    // Variables's initialization 
    var questionsArray = [];
    var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var question0 = "";
    var question1 = "";
    var question2 = "";
    var question3 = "";
    var question4 = "";
    var question5 = "";
    var question6 = "";
    var question7 = "";
    var question8 = "";
    var question9 = "";
    var countStart = 60;
    var rightAnswer = [];
    var wrongAnswer = [];
    var unAnswered = 5;
    var downloadTimer = "";
    var value = "";
    var name = 0;
    var image = "";
    var found = ""

    // function restartVariables(){
    //     //Restartting variables
    //     questionsArray = [];
    //     myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    //     question0 = "";
    //     question1 = "";
    //     question2 = "";
    //     question3 = "";
    //     question4 = "";
    //     question5 = "";
    //     question6 = "";
    //     question7 = "";
    //     question8 = "";
    //     question9 = "";
    //     countStart = 60;
    //     rightAnswer = [];
    //     wrongAnswer = [];
    //     unAnswered = 5;
    //     downloadTimer = "";
    //     value = "";
    //     name = 0;
    //     image = "";
    //     found = ""
    // }

    function shuffle(myArray) {
        //Shuffle my array of index
        var ctr = myArray.length;
        var temp = "";
        var index = "";
        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = myArray[ctr];
            myArray[ctr] = myArray[index];
            myArray[index] = temp;
        }
    }

    function questionObject(idQuestion, question, answer0, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, correctAnswer) {
        //questionObject constructor
        this.idQuestion = idQuestion;
        this.question = question;
        this.answer0 = answer0;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.answer5 = answer5;
        this.answer6 = answer6;
        this.answer7 = answer7;
        this.answer8 = answer8;
        this.answer9 = answer9;
        this.correctAnswer = correctAnswer;
    }

    function createQuestionObject(){
        //Create new questionObject and push it into an array
        question0 = new questionObject(0, "Who was the original drummer for the Beatles?", "Pete Best", "Ringo Start", "Stuart Sutcliffe", "Pete Best");
        question1 = new questionObject(1, "Which of the Beatles did some fans believe had died and been replaced by a double?", "John", "Ringo", "Paul", "Paul");
        question2 = new questionObject(2, "Which album required over 700 hours of recordings?", "Abbey Road", "Let it be", "Sgt. Peppers Lonely Hearts Club Band", "Sgt. Peppers Lonely Hearts Club Band");
        question3 = new questionObject(3, "In what Beatles song did George Harrison first play the sitar?", "Norwegian wood", "Whithin you without you", "Accross the universe", "Norwegian wood");
        question4 = new questionObject(4, "What is the only song John Lennon recorded completely by himself during his time with the Beatles?", "Julia", "Mother", "In my life", "Julia");
        question5 = new questionObject(5, "What was the name of the Beatles's manager?", "George Martin", "Billy Preston", "Brian Epstein", "Brian Epstein");
        question6 = new questionObject(6, "Where were the Beatles originally formed?", "London", "Liverpool", "Hamburg", "Liverpool");
        question7 = new questionObject(7, "What was the working title of Yesterday?", "The day before", "I beleive", "Scrambled eggs", "Scrambled eggs");
        question8 = new questionObject(8, "What was the Beatles' first single?", "Please, please me", "Love me do", "Twist and shout", "Love me do");
        question9 = new questionObject(9, "What was the name of the Beatles's producer?", "Billy Preston", "George Martin", "Brian Epstein", "George Martin");
        questionsArray.push(question0, question1, question2, question3, question4, question5, question6, question7, question8, question9);
    }
    
    function questionsDisplay(){ 
        //Display 10 randomly questions and their answers       
        // $("#answers, #gameStartOver, #gameDone").empty();
        for (l = 0; l < 6; l++) {
            $("#answers").append("<div id='" + questionsArray[myArray[l]].idQuestion + "'></div>")
            $("#" + questionsArray[myArray[l]].idQuestion).append("<h1>" + questionsArray[myArray[l]].question + "</h1>");
            $("#" + questionsArray[myArray[l]].idQuestion).append("<input type='radio' id='" + questionsArray[myArray[l]].answer0 + "' name='" + questionsArray[myArray[l]].idQuestion + "' value='" + questionsArray[myArray[l]].answer0+ "'>" + "<label>" + questionsArray[myArray[l]].answer0 + "</label>");
            $("#" + questionsArray[myArray[l]].idQuestion).append("<input type='radio' id='" + questionsArray[myArray[l]].answer1 + "' name='" + questionsArray[myArray[l]].idQuestion + "' value='" + questionsArray[myArray[l]].answer1+ "'>" + "<label>" + questionsArray[myArray[l]].answer1 + "</label>");
            $("#" + questionsArray[myArray[l]].idQuestion).append("<input type='radio' id='" + questionsArray[myArray[l]].answer2+ "' name='" + questionsArray[myArray[l]].idQuestion + "' value='" + questionsArray[myArray[l]].answer2+ "'>" + "<label>" + questionsArray[myArray[l]].answer2 + "</label>");
            $("#" + questionsArray[myArray[l]].idQuestion).append("<img src ='' class='" + questionsArray[myArray[l]].idQuestion + "'/>");
            $("img").hide();
        }
        $("#gameDone").append("<button id='done' type='button'>Done</button>");
        $("#gameStartOver").append("<button id='startOver' type='button'>Start Over</button>");

    }   

    function endGame(countStart){
        if(countStart <= 0){
            clearInterval(downloadTimer);
            $("#timers").text("All done!");
            $("#answers, #gameDone").empty();
            $("#answers").append("<label>Correct answers:&nbsp;</label><label>" + rightAnswer.length + "</label><img src ='assets/images/right.png' /><br>")
            $("#answers").append("<label>Incorrect answers:&nbsp;</label><label>" + wrongAnswer.length + "</label><img src ='assets/images/wrong.png' /><br>")
            $("#answers").append("<label>Unanswered:&nbsp;</label><label>" + unAnswered + "</label><img src ='assets/images/unanswered.png' /><br>")
        }    
    }

    function countdown(){
        //Timer count down -- 60 seconds
        $("#timers").text("Time remaining: " + countStart + " seconds");
        downloadTimer = setInterval(function(){
        --countStart;
        $("#timers").text("Time remaining: " + countStart + " seconds");
        endGame(countStart);
        },1000);
    }

    shuffle(myArray);
    countdown();
    createQuestionObject();
    questionsDisplay();

    $("input").click(function () {
        //Input clicked is the correct answer or no
        value = this.value; //Clicked answer
        name = parseInt(this.name); //Clicked idQuestion

        //Element in questionsArray with idQuestion iqual to clicked idQuestion
        found = questionsArray.find(function(element) {
            return element.idQuestion === name;
        }); 

        //See if clicked idQuestion have been clicked before
        var indexRight = rightAnswer.indexOf(this.name);
        var indexWrong = wrongAnswer.indexOf(this.name);

        if(value === found.correctAnswer){
            //Clicked correct answer
            image = 'assets/images/right.png';  
            if (indexRight <= -1) {
                rightAnswer.push(this.name);
            }
            if (indexWrong > -1) {
                wrongAnswer.splice(indexWrong, 1);
            }   
        }else{
            //Clicked incorrect answer
            image = 'assets/images/wrong.png';
            if (indexRight > -1) {
                rightAnswer.splice(indexRight, 1);
            }
            if (indexWrong <= -1) {
                wrongAnswer.push(this.name);
            }
        }
        if ((indexWrong <= -1) && (indexRight <= -1)) {
            //Unanswered counter
            unAnswered--;
        } 
        $("." + this.name).attr("src",image);
        $("." + this.name).show();
    });  

    $("#done").click(function(){
        //Game done
        countStart = 0;
        endGame(countStart);
    });

    $("#startOver").click(function(){
        //Re-Start the game
        location.reload();
        // restartVariables();
        // shuffle(myArray);
        // countdown();
        // createQuestionObject();
        // questionsDisplay();
    });
})

    
        
        
        


    // clearInterval() parar 


        // for (var i = 0; i < 3; i++) {
        //     chooseNumbers(3, 1);
        //     if(numberQuestions.length === 0){
        //         numberQuestions.push(numbers);  
        //     }else{
        //         if(numberQuestions.indexOf(numbers) !== -1){
        //             numberQuestions.push(numbers);  
        //         }else{
    
        //         } 
        //     }
            
        // }
        // console.log(numberQuestions);
    







    // // Variables's initialization 
    // var win = 0;
    // var losse = 0;
    // var numberGuess = 0;
    // var totalScore = 0;
    // var crystalNumber = [];
    // var ruby = $("#ruby");
    // var aquamarine = $("#aquamarine");
    // var emerald = $("#emerald");
    // var ambar = $("#ambar");
    // var numberGuessvalue = 0


    // function restartVariables(){
    //     //Restartting variables
    //     numberGuess = 0;
    //     totalScore = 0;
    //     crystalNumber = [];
    //     ruby = $("#ruby");
    //     aquamarine = $("#aquamarine");
    //     emerald = $("#emerald");
    //     ambar = $("#ambar");
    //     numberGuessvalue = 0
    // }


    // function chooseNumbers(max, min){
    //     //Setting value of numberGuess ramdonly
    //     numberGuess = Math.floor(Math.random() * (max - min + 1) + min);
    // }

    // function crystalValues(){
    //     //Setting value of crystals ramdonly
    //     for (var i = 0; i < 4; i++) {
    //         chooseNumbers(12, 1);
    //         crystalNumber.push(numberGuess);  
    //     }
    //     // console.log(crystalNumber + " Numbers to guess 1-12");
    //     ruby.attr("value", crystalNumber[0]);
    //     aquamarine.attr("value", crystalNumber[1]);
    //     emerald.attr("value", crystalNumber[2]);
    //     ambar.attr("value", crystalNumber[3]);
    // }
    
    // function restartValues(){
    //     //Restartting HTML Values
    //     $("#numberGuesses").text(numberGuess);
    //     numberGuessvalue = numberGuess;
    //     $("#wins").text(win);
    //     $("#losses").text(losse);
    //     $("#totalScores").text(totalScore);
    // }

    // chooseNumbers(120, 19);
    // // console.log(numberGuess + " Number to guess 19-120");
    // restartValues();
    // crystalValues();

    // $(".crystalDiv").on("click", function() {
    //     //Game rules 
    //     divID = "";
    //     divID = $(this).attr("id");
    //     // console.log(divID);
    //     totalScore += parseInt($(this).attr("value"));
    //     $("#totalScores").text(totalScore);
    //     // console.log($(this).attr("value"));
    //     // console.log(totalScore);
    //     if(totalScore === numberGuessvalue){
    //         win ++;
    //         // console.log("You win!!!!!!");
    //         restartVariables();
    //         chooseNumbers(120, 19);
    //         // console.log(numberGuess + " Number to guess 19-120");
    //         restartValues();
    //         crystalValues();      
    //     }else if(totalScore > numberGuessvalue){
    //         // console.log("You Lose!!!!!!");
    //         losse ++;
    //         restartVariables();
    //         chooseNumbers(120, 19);
    //         // console.log(numberGuess + " Number to guess 19-120");
    //         restartValues();
    //         crystalValues();  
    //     }
        
    // });

    // $("#reset").on("click", function(){
    //     // Reset Button clear all
    //     win = 0;
    //     losse = 0;
    //     restartVariables(); 
    //     chooseNumbers(120, 19);
    //     console.log(numberGuess + " Number to guess 19-120");
    //     restartValues();
    //     crystalValues();
    // });
