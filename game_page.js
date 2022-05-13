player1_name = localStorage.getItem("player1name")
player2_name = localStorage.getItem("player2name")
player2_score = 0;
player1_score = 0
document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "question turn:" + player1_name
document.getElementById("player_answer").innerHTML = "answer turn:" + player2_name
function send(){
   getword = document.getElementById("word").value;
   word = getword.toLowerCase();
   char_1 = word.charAt(1)
   console.log(char_1);
   pos = Math.floor(word.length/2);
   char_2 = word.charAt(pos);
   console.log(char_2)
   char_3 = word.charAt(word.length -1);
   console.log(char_3)
   r1 = word.replace(char_1,"_")
   r2 = r1.replace(char_2,"_")
   r3 = r2.replace(char_3,"_")
   console.log(r3)
   tag = "<h3 id='word_display'>Q." + r3 + "</h3>"
   inputtag = "<br>anwser: <input id='input_box' type = 'text'>";
   buttontag = "<br><button onclick='check()' class='btn btn-success'>check answer</button>"
   document.getElementById("output").innerHTML = tag+ inputtag + buttontag
   document.getElementById("word").value = ""
}
questionturn = "player1"
ansturn = "player2"
function check(){
   getans = document.getElementById("input_box").value;
   ans = getans.toLowerCase();
   if(word == ans){
      if(ansturn == "player1"){
         player1_score = player1_score + 1;
         document.getElementById("player1_score").innerHTML = player1_score;
      }
      else{
         player2_score = player2_score + 1;
         document.getElementById("player2_score").innerHTML = player2_score;
      }
   } 
   if(questionturn == "player1"){
      questionturn = "player2";
      document.getElementById("player_question").innerHTML = "question turn:" + player2_name;
   }
   else{
      questionturn = "player1";
      document.getElementById("player_question").innerHTML = "question turn:" + player1_name;
   }

   if(ansturn == "player1"){
      ansturn = "player2";
      document.getElementById("player_answer").innerHTML = "answer turn:" + player2_name;
   }
   else{
      ansturn = "player1";
      document.getElementById("player_answer").innerHTML = "answer turn:" + player1_name;
   }
   document.getElementById("output").innerHTML = "";
}