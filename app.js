

function Quiz(questions){
    this.score=0;
    this.questions=questions;
    this.questionIndex=0;
    
    }
    Quiz.prototype.getQuestionIndex=function(){
    
        return this.questions[this.questionIndex];
    }
    Quiz.prototype.isEnded=function(){
        return this.questions.length===this.questionIndex;
    
    }
    Quiz.prototype.guess=function(answer){
    
        //this.questionIndex++;
        if(this.getQuestionIndex().correctAnswer(answer)){
            this.score++;
        }

        this.questionIndex++;
    }

    function Question(text,choices,answer){

        this.text=text;
        this.choices=choices;
        this.answer=answer;
    
    
    }
    Question.prototype.correctAnswer=function(choice){
        return choice===this.answer;
    }



    function myFunction() {
        location.reload();
      }
       
    
    function populate(){


        if(quiz.isEnded()){
            showScores();

        }
        else{
        document.getElementById("question").innerHTML=quiz.getQuestionIndex().text;
            var choices=quiz.getQuestionIndex().choices;
            for (var i = 0; i < choices.length; i++) {
               var element =document.getElementById("choice"+i).innerHTML=choices[i];
                
            guess("choice"+i,choices[i]);
            
            }
            showProgress();

        }
    }

    function showProgress(){

        var progressIndex=quiz.questionIndex+1;
        document.getElementById('progress').innerHTML="Question "+progressIndex+" of"+quiz.questions.length;
    }

function guess(id,guess){
    
    var button=document.getElementById(id);
    button.onclick=function(){
        quiz.guess(guess);
        
        populate();
        
    }


}

    function showScores(){

        if(quiz.score>=3){

            var gameOverHtml;

            gameOverHtml ="<h1>You Successfully Pass!</h1><h2 id='score'>Your score:"+quiz.score+"</h2><br><img src='congrates.gif'width='300px'><br><br><button type='button'onclick='myFunction()' class='shadow-lg p-3 mb-5 btn btn but'>Try Again</button>"
    
          
            document.getElementById('q').innerHTML=gameOverHtml;

            
    

        }
        else{
            var gameOverHtml;

            gameOverHtml ="<h1>You Fail!</h1><h2 id='score'>Your score:"+quiz.score+"</h2><br><img src='tenor .gif'width='300px'height='200px'><br><br><button type='button' onclick='myFunction()'class='shadow-lg p-3 mb-5 btn btn but'>Try Again</button>"
    
          
            document.getElementById('q').innerHTML=gameOverHtml;
            
        }

       
    }
     var questions=[
      new Question("Which one is not an object oriented programing language?",["Java","C#","C++","C"],"C"),
   new Question("MVC is ______",["libary","Framework","All","Language"],"Framework"),
   new Question("Which language is use for styling web pages?",["Jquery","HTML","CSS","XML"],"CSS"),
   new Question("Which language is use for web apps?",["Python","PHP","Javascript","All"],"PHP")



    ];
    var quiz=new Quiz(questions);
    populate();