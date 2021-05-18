//       ***********************
//            INSTRUCTIONS
//       ***********************

// 1. Read the code below one block at a time.
// 2. Look for the @TODOs, and figure out how to fix them.
    // next to each @TODO you will find tasks that need to be finished

// The variable will change from X to O based on what player turn it is. We need to hold this so we can place an X or O on the board when they're clicked.
let currentMarker = 'X'
// game array
let game = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]


// this "handleClick" function is called when a box is clicked. Here, "element" will hold the same value as "this" does in the HTML. 
// "this" is a special word in JS but "element" could have been "thing" or "el" or whatever we wanted it to be as long as we use it again in the "console.log" statement
const handleClick = (element) => {
  // console.log('xyz:  ' + element.id);

  // get the location of the element being clicked on char1=row char2=col; expected [0-2][0-2]
  const row = parseInt(element.id.charAt(0));
  const col = parseInt(element.id.charAt(1));
  // console.log('abc:  ' + row + ' , ' + col)
  
  // set the current mark (x or o) to array using row/col
  game[row][col] = currentMarker;
  // console.log('###:  ' + game[row][col]);
  // console.log('1,1###:  ' + game[1][1]);


  // this uses the "log" method on the "console" to log out the element's id so we can see it with our human eyes
  console.log('The element you clicked on has an id:  ${element.id}')

  // this next line prevents an X being changed to an O or an O being changed to an X by...
  //  checking to see if the square clicked has anything in it, if not continue
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  }
}






// this function places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id) => {

  // @TODO-1: Open the console tab in your Chrome Inspector Tool and click on the top-left square to see what's logged to the console. 
  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
  
  // @TODO-2: Build a line of code that will set the innerHTML property of the element that was clicked to the "currentMarker"
  document.getElementById(id).innerHTML = currentMarker
  // @TODO-2.5: MIX & MATCH, You will need the following pieces of code to build that line:
  // = currentMarker
  // .getElementById(id)
  // document
  // .innerHTML 
  
  checkWin()
  
}

const checkWin = () => {
  let winText = "";
  // horizontal checks for X
  if ((game[0][0] === "X" && game[0][1] === "X" && game[0][2] === "X") ||
    (game[1][0] === "X" && game[1][1] === "X" && game[1][2] === "X") ||
    (game[2][0] === "X" && game[2][1] === "X" && game[2][2] === "X") ) {
    // console.log("XXX Wins XXX Horizontal");
    winText = "***   X has a Horizontal Win   ***";

    // horizontal checks for O
  } else if ((game[0][0] === "O" && game[0][1] === "O" && game[0][2] === "O") ||
  (game[1][0] === "O" && game[1][1] === "O" && game[1][2] === "O") ||
  (game[2][0] === "O" && game[2][1] === "O" && game[2][2] === "O") ) {
  // console.log("OOO  Wins  OOO Horizontal");
  winText = "***   O has a Horizontal Win   ***";

    //vertical checks for X
  } else if ((game[0][0] === "X" && game[1][0] === "X" && game[2][0] === "X") ||
  (game[0][1] === "X" && game[1][1] === "X" && game[2][1] === "X") ||
  (game[0][2] === "X" && game[1][2] === "X" && game[2][2] === "X") ) {
  // console.log("XXX Wins XXX  Vertical");
  winText = "***   X has a Vertical Win   ***";

    // Vertical checks for O
  } else if ((game[0][0] === "O" && game[1][0] === "O" && game[2][0] === "O") ||
  (game[0][1] === "O" && game[1][1] === "O" && game[2][1] === "O") ||
  (game[0][2] === "O" && game[1][2] === "O" && game[2][2] === "O") ) {
  // console.log("XXX Wins OOO  Vertical");
  winText = "***   O has a Vertical Win   ***";

    // Diagonal checks for X
  } else if ((game[0][0] === "X" && game[1][1] === "X" && game[2][2] === "X") ||
  (game[0][2] === "X" && game[1][1] === "X" && game[2][0] === "X")) {
  // console.log("XXX Wins OOO  Diagonal");
  winText = "***   X has a Diagonal Win   ***";

    // Diagonal checks for O
  } else if ((game[0][0] === "O" && game[1][1] === "O" && game[2][2] === "O") ||
  (game[0][2] === "O" && game[1][1] === "O" && game[2][0] === "O")) {
  // console.log("XXX Wins OOO  Diagonal");
  winText = "***   O has a Diagonal Win   ***";

    // Tie game checks
  } else if (game[0][0] != "" && game[0][1] != "" && game[0][2] != "" &&
     game[1][0] != "" && game[1][1] != "" && game[1][2] != "" &&
     game[2][0] != "" && game[2][1] != "" && game[2][2] != "" ) {
       winText = "***     Tie Game     ***";
     }

  
  // if winText is blank continue, if not blank send window alert and reset board
  if (winText != "") {
    window.alert(winText);
    resetBoard()
  } else {
    changeMarker()
  }
}


// This "changeMarker" function changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}



// This "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {
  
  // @TODO-3: To make your "Restart" button work you'll need to build a line of code here that:
      // collects all of the "td" elements into an HTML Collection: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp  
      // document.getElementById(id).innerHTML = currentMarker
      const squares = document.getElementsByTagName("TD")
  // @TODO-3.5: MIX & MATCH, You will need the following pieces of code to build that line:
  // squares
  // .getElementsByTagName("TD")
  // =
  // document
  // const
 
  game = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]

  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (i=0; i < squares.length; i++) {

    // will log out the id of each square as it loops over them.
    console.log(squares[i].id)

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null
  }  
}