$(document).ready(function(){
    $('#startButton').on("click", function(run){
// create a timer
// start timer on click
    var number = 3;
    var intervalID;
    function run(){
        clearInterval(intervalId);
        intervalID = setInterval(decrement, 1000);
    }
    function decrement(){
        number--;
        $('#timer').html('<p>' + number + '<p>');
        if (number === 0) {
            stop();
        }
    }   
    function stop(){
        clearInterval(intervalId);
        } 
    })
    console.log(run);
// start timer on click
//populate questions class with questions
        //need to create questions array
        //need to create answers array
//populate with potential answers
//recognize on click for each answer
//all done button
//recognize all done button
    //stop function
        //if all done button pushed OR timer <=
        //calculate correct answers
        //calculate incorrect answers
        //calculate unanswered
        //display start over button

    
    });




;