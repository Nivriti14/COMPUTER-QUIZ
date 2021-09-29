class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput(" Name ");
    this.input2 = createInput("Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("SIMPLE COMPUTER QUIZ");
    this.title.position(350, 0);

    // this.question("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
     //this.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.html("Question:- Which enables us to send the same letter to different persons? " );
    // question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );

    this.question.position(150, 80);
    this.option1.html("1: MACROS " );
    this.option1.position(150, 100);
    this.option2.html("2: TEMPLATE" );
    this.option2.position(150, 120);
    this.option3.html("3: MAIL MERGE " );
    this.option3.position(150, 140);
    this.option4.html("4: FORM LETTERS" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      
       this.message.html("Thank You, Your Answer Has Been Submitted");
       this.message.position(350, 350);

     //this.message.html("Thank You, Your Answer Has Been Submitted");
      //this.message.position(Y=300);

      // this.message("Thank You, Your Answer Has Been Submitted");
      // this.message(350, 350);

      // this.message.html("Thank You, Your Answer Has Been Submitted");
       //this.message.position(350);


    });
  }
}
