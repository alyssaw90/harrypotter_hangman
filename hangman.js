$(document).ready(function(){
  var c = document.getElementById("canvas");
  var ct = c.getContext("2d");
  ct.strokeStyle = "black";

  $("#categoryHeader,#changeCategory")
  var guessesLeft = 7;
  var randomWord;
  var randomNum = Math.floor(Math.random() * 50);
  var search_start = 0
  var lettersLeft;
  var clearC = false;
  var categorySelect = false;

  //Category arrays
  var characters = ["katie bell", "sirius black", "lavendar brown", "cho chang", "crabbe", "colin creevy", "bartemius crouch", "bartemius crouch jr", "fleur delacour", "amos diggory", "cedric diggory", "albus dumbledore", "dudley dursley", "fat lady", "argus filch", "seamus finnigan", "nicholas flammel", "mundungus fletcher", "professor flitwick", "cornelius fudge", "hermonie granger", "godric gryffindor", "goyle", "rebeus hagrid", "he who must not be named", "dobby", "madam hooch", "helga hufflepuff", "lee jordan", "igor karkaroff", "kreacher", "viktor krum", "bellatrix lestrange", "gilderoy lockhart", "neville longbottom", "luna lovegood", "draco malfoy", "lucius malfoy", "narcissa malfoy", "minerva mcgonagall", "alastor moody", "moaning myrtle", "nearly headless nick", "peter pettigrew", "harry potter", "james potter", "lily potter", "professor quirrell", "rowena ravenclaw", "tom marvolo riddle", "rita skeeter", "salazar slytherin", "severus snape", "professor sprout", "dean thomas", "tonks", "dolores umbridge", "lord voldemort", "fred weasley", "george weasley", "ginny weasley", "ron weasley", "oliver wood", "you know who"];
  var classesAndSpells = ["accio", "aguamenti", "alohomora", "arithmancy", "avada kedavra", "apparate", "bubble head charm", "care of magical creatures", "charm", "crutiatus curse", "diffindo", "divination", "defense against the dark arts", "elixir of life", "engorgio", "evanesco", "expecto patronum", "expelliarmus", "extendable ear", "felix felicis", "floo powder", "gillyweed", "grim", "herbology", "howler", "imperius curse", "incendio", "invisibility cloak", "lumos", "madrake", "marauders map", "horcrux", "obliviate", "nox", "parsel tongue", "patronus", "petrificus totalus", "polyjuice potion", "port key", "potions", "reducio", "riddikulus", "transfiguration", "unforgiveable curses", "unbreakable vow"];
  var creatures = ["aragog", "basilisk", "boggart", "centaurs", "buckbeak", "cornish pixies", "crookshanks", "dementor", "dragon", "errol", "fang", "fawkes", "ghoul", "giant", "gnomes", "goblins", "grindylow", "hippogriff", "house elf", "nagini", "norbert", "mrs norris", "padfoot", "prongs", "scabers", "trevor", "werewolf"];
  var morePotterWords = ["auror", "azkaban", "beater", "black forest", "borgin and burkes", "butterbeer", "chamber of secrets", "chaser", "chocolate frogs", "daily prophet", "dark mark", "death eaters", "diagon alley", "dumbledores army", "firebolt", "flourish and blotts", "forbidden forest", "goblet of fire", "godrics hollow", "golden snitch", "great hall", "grey lady", "gringotts", "gryffindor", "hogsmeade", "hogwarts", "honeydukes", "hufflepuff", "inquisitorial squad", "keeper", "knight bus", "knockturn alley", "leaky cauldron", "ministry of magic", "mudblood", "muggle", "order of the phoneix", "peeves", "privet drive", "pumpkin juice", "pumpkin patsy", "quaffle", "quidditch", "room of requirement", "seeker", "slytherin", "sorting hat", "squib", "time turner", "triwizard tournament", "wand", "whomping willow", "zonkos"];

  console.log(randomNum);
  $("#guessesLeft").html(guessesLeft);

  function catSelect(){
    if(categorySelect==false){
      swal("Please select a category first!");
    }
  }
  //Character button
  $("#characters").click(function(){
    categorySelect = true;
    randomWord = characters[randomNum];
    $("#characters,#magic,#creatures,#more").hide();
    $("#selectCat").hide();
    $("#category").html("Characters");
    $("#categoryHeader,#changeCategory").show();
    $("button:not(#characters,#magic,#creatures,#changeCategory)").attr("disabled",false)
    numSpaces();
  });
  //Magic button
  $("#magic").click(function(){
    categorySelect = true;
    randomWord = classesAndSpells [randomNum];
    $("#characters,#magic,#creatures,#more").hide();
    $("#selectCat").hide();
    $("#category").html("Magic");
    $("#categoryHeader,#changeCategory").show();
    $("button:not(#characters,#magic,#creatures,#changeCategory)").attr("disabled",false)
    numSpaces();
  });
  //Creature button
  $("#creatures").click(function(){
    categorySelect = true;
    randomWord = creatures[randomNum];
    $("#characters,#magic,#creatures,#more").hide();
    $("#selectCat").hide();
    $("#category").html("Creatures");
    $("#categoryHeader,#changeCategory").show();
    $("button:not(#characters,#magic,#creatures,#changeCategory)").attr("disabled",false)
    numSpaces();
  });
  //More button
  $("#more").click(function(){
    categorySelect = true;
    randomWord = morePotterWords[randomNum];
    $("#characters,#magic,#creatures,#more").hide();
    $("#selectCat").hide();
    $("#category").html("more");
    $("#categoryHeader,#changeCategory").show();
    $("button:not(#characters,#magic,#creatures,#changeCategory)").attr("disabled",false)
    numSpaces();
  });
  //Change category button
  $("#changeCategory").click(function(){
    categorySelect = false;
    $("#characters,#magic,#creatures,#more").show();
    $(this).hide();
    randomWord="";
    randomNum = Math.floor(Math.random() * 10);
    $("#guesswordbox").empty();
    $("button:not(#characters,#magic,#creatures,#more,#changeCategory)").css({"background":"#eaeaea", "color": "black"})
    $("button:not(#characters,#magic,#creatures,#more,#changeCategory)").attr("disabled","disabled");
    $("#guessesLeft").html(guessesLeft);
    ct.clearRect(0,0,c.width,c.height)
    ct.beginPath();
  })
  //Number of spaces in word
  function numSpaces(){
    console.log(randomWord);
    lettersLeft = randomWord.length;
    for(i=0; i<randomWord.length; i++){
      $("#guesswordbox").append("<span style=font-size:50px>_</span>&nbsp;&nbsp;");
    }
  }
  //Runs when a button is clicked
  $("button:not(#characters,#magic,#creatures,#more,#changeCategory)").click(function(){
    catSelect();
    var letter = $(this).html();
    var indexNum = randomWord.indexOf(letter);

    console.log(indexNum);

    if(indexNum == -1){

      guessesLeft -= 1;
      $("#guessesLeft").html(guessesLeft);

      if(guessesLeft == 6){
        //Hook
        ct.moveTo(100,0);
        ct.lineTo(100,30);
        ct.stroke();
      }else if(guessesLeft == 5){
        //Head
        ct.beginPath();
        ct.arc(100,60,30,0,2 * Math.PI);
        ct.stroke();
      }else if(guessesLeft == 4){
        //Body
        ct.moveTo(100,90);
        ct.lineTo(100,200);
        ct.stroke();
      }else if(guessesLeft == 3){
        //Left arm
        ct.moveTo(100,110);
        ct.lineTo(150,90);
        ct.stroke();
      }else if(guessesLeft == 2){
        //Right arm
        ct.moveTo(100,110);
        ct.lineTo(50,90);
        ct.stroke();
      }else if(guessesLeft == 1){
        //Left leg
        ct.moveTo(100,200);
        ct.lineTo(150,220);
        ct.stroke();
      }
      if(guessesLeft <= 0){
        //Right leg
        ct.moveTo(100,200);
        ct.lineTo(50,220);
        ct.stroke();
        //Losing alert
        swal("You ran out of guesses!! You Lose! Let's Try Again. The word was " + randomWord);
        location.reload();
      }else{
        swal(letter + " is not in the word! Guess another letter!");
      }

      $(this).css({"background-color": "red","color":"white"});
      $(this).attr("disabled","disabled");



    }else{
      //Letter not in word
      while(randomWord.indexOf(letter,search_start) != -1){
        var indexNumber = randomWord.indexOf(letter,search_start);
        $("#guesswordbox span:nth-child(" + (indexNumber+1) + ")").html(letter);
        search_start = indexNumber + letter.length;
        lettersLeft -= 1;
        console.log("index :" + indexNumber);
      }

      $(this).css({"background-color": "green","color":"white"});
      $(this).attr("disabled","disabled");
      search_start = 0;


    }
    //Winner!!
    if(lettersLeft <= 0){
      swal("You won! Let's play again!");
      location.reload();
    }
  });
});













