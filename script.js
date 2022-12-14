document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.

  //q = question and a = answer choice. Had to create selectors for each answer per question (4 questions x 2 answer choices =   8 total selectors)


  //First HTML File
  let submitBtn = document.querySelector(".submit");
  let q1a1 = document.querySelector(".q1");
  let q1a2 = document.querySelector(".q2");
  let q2a1 = document.querySelector(".q3");
  let q2a2 = document.querySelector(".q4");
  let q3a1 = document.querySelector(".q5");
  let q3a2 = document.querySelector(".q6");
  let q4a1 = document.querySelector(".q7");
  let q4a2 = document.querySelector(".q8");

  //Other HTML File
  const topHeading = document.getElementById("topHeading");
  const picture = document.getElementById("character");
  const lowerHeading = document.getElementById("belowHeading");

  // console.log(q4a2.value)
  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.

  let letter1;
  let letter2;
  let letter3;
  let letter4;



  submitBtn.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.


   // task 7: create a conditional statement for the responses to Question 1 based on the user input.

    if(q1a1.checked == true){
      let question1Input = q1a1.value
      letter1 = "E"
    }
    else{
      let question1Input = q1a2.value
      letter1 = "I"
    }



    // task 8: create a conditional statement for the responses to Question 2 based on the user input.

    if(q2a1.checked == true){
      let question2Input = q2a1.value
      letter3 = "F"
    }
    else{
      let question2Input = q2a2.value
      letter3 = "T"
    }


    // task 9: create a conditional statement for the responses to Question 3 based on the user input.

    if(q3a1.checked == true){
      let question3Input = q3a1.value
      letter2 = "S"
    }
    else{
      let question3Input = q3a2.value
      letter2 = "N"
    }

    //Question 4 as well
    
    if(q4a1.checked == true){
      let question4Input = q4a1.value
      letter4 = "J"
    }
    else{
      let question4Input = q4a2.value
      letter4 = "P"
    }


    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.

    let finalPersonalityType = `${letter1}${letter2}${letter3}${letter4}`


    //variables for the result page (images+respective character)
    let personalityArr = ["INTJ","INTP", "ENTJ", "ENTP", "INFJ", "INFP", "ENFJ", "ENFP", "ISTJ", "ISFJ", "ESTJ",       "ESFJ", "ISTP", "ISFP", "ESTP", "ESFP"]
    let characterArr = ["Kurapika", "L", "Bakugo", "Gojo", "Itachi", "Alphonse Elric", "Tanjiro", "Luffy", "Mikasa", "Hinata", "Maki", "Reiner", "Zoro", "Eren Yaegar", "Joseph Joestar", "Gon"]
    let characterImgArr = ["https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/05/Hunter-x-Hunter-Kurapika-Abilities.jpg", "https://static.tvtropes.org/pmwiki/pub/images/l_lawlietdeathnote.png", "https://media.comicbook.com/2020/10/my-hero-academia-bakugo-1240308.jpeg?auto=webp", "https://fictionhorizon.com/wp-content/uploads/2022/03/What-Satoru-Gojo-would-look-like-in-Demon-Slayer-Naruto.jpg", "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/06/itachi.jpg", "https://static.wikia.nocookie.net/fullmetal-alchemist-database/images/f/f6/AlphonseElricEp7.png/revision/latest?cb=20121007031424", "https://www.cheatsheet.com/wp-content/uploads/2022/02/Tanjiro-Demon-Slayer-Undercover.jpg?w=1200&h=675", "https://staticg.sportskeeda.com/editor/2021/11/2a485-16358656961313-1920.jpg", "https://inasianspaces.files.wordpress.com/2022/01/7d3yupk.png?w=1200", "https://www.looper.com/img/gallery/the-untold-truth-of-hinata-hyuga-from-naruto/intro-1652817613.jpg", "https://i.pinimg.com/originals/fc/85/7f/fc857fafc0dfd2c288dc063d47bd832b.jpg", "https://www.postapocalypticmedia.com/wp-content/uploads/2020/12/ReinerFeature-1024x683.jpg", "https://i.ytimg.com/vi/D9MPvxDMiQA/maxresdefault.jpg", "https://www.sideshow.com/wp/wp-content/uploads/2022/02/eren-yeager-season-1.jpeg", "https://images.alphacoders.com/103/1031256.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQitUELJbRKsjeCcWh7ynBdlU3P-tODjsDP4anDcpYId7DNv7uBTPr3yxPFpdulshM2xas&usqp=CAU"]


    //INTJ: Kurapika
    //INTP: L
    //ENTJ: Bakugo
    //ENTP: Gojo (yo waimo)
    //INFJ: Itachi Uchiha
    //INFP: Alphonse Elric
    //ENFJ: Tanjiro
    //ENFP: Luffy
    //ISTJ: Mikasa Ackerman
    //ISFJ: Hinata Hyuga
    //ESTJ: Maki Ze'nin
    //ESFJ: Reiner
    //ISTP: Zoro
    //ISFP: Eren Yaegar
    //ESTP: Joseph Joestar
    //ESFP: Gon

    //E vs I
    //F vs T
    //
    //

    
    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display        these to the page: the result, an image that corresponds and a message to go with it.

    for(i = 0; i<personalityArr.length; i++){
      if(finalPersonalityType === personalityArr[i]){
        finalPicture = characterImgArr[i]
        let animeCharacter = characterArr[i]
        let heading = `You are ${animeCharacter}!`
        let belowHeading = `${finalPersonalityType}`
        
        //Now appending them to the actual document
        topHeading.innerHTML = heading
        picture.src = finalPicture
        lowerHeading.innerHTML = belowHeading
        
      }
    }
  }
};