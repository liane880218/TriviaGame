$(document).ready(function() {
    // Variables's initialization 
    var questionsArray = [];
    var myArray = [0,1,2];
    var question = "";
    var question1 = "";
    var question2 = "";
    var countStart = 60;
    var rightAnswer = [];
    var wrongAnswer = [];
    var unAnswered = [];
    var downloadTimer = "";
    var value = "";
    var name = 0;
    var image = "";
    var found = ""

    function restartVariables(){
        //Restartting variables
        questionsArray = [];
        myArray = [0,1,2];
        question = "";
        question1 = "";
        question2 = "";
        countStart = 60;
        rightAnswer = 0;
        wrongAnswer = 0;
        unAnswered = 0;
        downloadTimer = "";
        value = "";
        name = 0;
        image = "";
        found = ""
    }

    // $("#start").click(function () {
    //     $("#start").hide();
    //     shuffle(myArray);
    //     countdown();
    //     questionsDisplay();
    // });

    function shuffle(arra1) {
        //Shuffle my array of index
        var ctr = arra1.length;
        var temp = "";
        var index = "";
        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
    }

    function questionObject(idQuestion, question, answer1, answer2, answer3, correctAnswer) {
        //questionObject constructor
        this.idQuestion = idQuestion;
        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.correctAnswer = correctAnswer;
    }

    //Create new questionObject and push it into an array
    question = new questionObject(0, "Who was the original drummer for the Beatles?", "Pete Best", "Ringo Start", "Stuart Sutcliffe", "Pete Best");
    question1 = new questionObject(1, "Which of the Beatles did some fans believe had died and been replaced by a double?", "John", "Ringo", "Paul", "Paul");
    question2 = new questionObject(2, "Which album required over 700 hours of recordings?", "Abbey Road", "Let it be", "Sgt. Peppers Lonely Hearts Club Band", "Sgt. Peppers Lonely Hearts Club Band");
    questionsArray.push(question,question1, question2);

    function questionsDisplay(){ 
        //Display 10 randomly questions and their answers       
        for (l = 0; l < 2; l++) {
            $("#answers").append("<div id='" + questionsArray[myArray[l]].idQuestion + "'></div>")
            $("#" + questionsArray[myArray[l]].idQuestion).append("<h1>" + questionsArray[myArray[l]].question + "</h1>");
            $("#" + questionsArray[myArray[l]].idQuestion).append("<input type='radio' id='" + questionsArray[myArray[l]].answer1 + "' name='" + questionsArray[myArray[l]].idQuestion + "' value='" + questionsArray[myArray[l]].answer1+ "'>" + "<label>" + questionsArray[myArray[l]].answer1 + "</label>");
            $("#" + questionsArray[myArray[l]].idQuestion).append("<input type='radio' id='" + questionsArray[myArray[l]].answer2 + "' name='" + questionsArray[myArray[l]].idQuestion + "' value='" + questionsArray[myArray[l]].answer2+ "'>" + "<label>" + questionsArray[myArray[l]].answer2 + "</label>");
            $("#" + questionsArray[myArray[l]].idQuestion).append("<input type='radio' id='" + questionsArray[myArray[l]].answer3+ "' name='" + questionsArray[myArray[l]].idQuestion + "' value='" + questionsArray[myArray[l]].answer3+ "'>" + "<label>" + questionsArray[myArray[l]].answer3 + "</label>");
            $("#" + questionsArray[myArray[l]].idQuestion).append("<img src ='' class='" + questionsArray[myArray[l]].idQuestion + "'/>");
            $("img").hide();
        }
    }   

    function countdown(){
        //Timer count down -- 60 seconds
        $("#timers").text("Time remaining: " + countStart + " seconds");
        downloadTimer = setInterval(function(){
        --countStart;
        $("#timers").text("Time remaining: " + countStart + " seconds");
        if(countStart === 0)
            clearInterval(downloadTimer);
        },1000);
    }

    shuffle(myArray);
    countdown();
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
            // console.log("resspuesta correcta");
            image = 'assets/images/right.png';  
            if (indexRight <= -1) {
                rightAnswer.push(this.name);
            }
            
            if (indexWrong > -1) {
                wrongAnswer.splice(indexWrong, 1);
            }                                                                  

            console.log('rightAnswer '+rightAnswer);
            console.log('wrongAnswer '+wrongAnswer);
        }else{
            //Clicked incorrect answer
            // console.log("resspuesta incorrecta");
            image = 'assets/images/wrong.png';
            if (indexRight > -1) {
                rightAnswer.splice(indexRight, 1);
            }
            if (indexWrong <= -1) {
                wrongAnswer.push(this.name);
            }
            // console.log('rightAnswer '+rightAnswer);
            // console.log('wrongAnswer '+wrongAnswer);
        }
        $("." + this.name).attr("src",image);
        $("." + this.name).show();
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
