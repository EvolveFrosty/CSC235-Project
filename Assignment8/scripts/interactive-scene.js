/* interactive-scene.js
   author: Phil Barello
*/


// define a function to randomly select and display a message from the list of pre-defined messages,
function displayMessage(){
  // create an array of messages
    var messages = [
  "In 1638, Momauguin was the &quot;sole sachem of Quinnipiack\
  and had absolute power to aliene and dispose of the same, that in consequence of the protection he had tasted\
  by the English from the Pequots and Mohawks, he yielded up all his right, title, and interest to all the lands\
  rivers, ponds, and trees, with all the liberties and appurtenances belonging to the same, to Theophilus Eaton, \
  John Davenport, and others their heirs and assigns forever.&quot;\
  <br>(<a href='https://www.cga.ct.gov/hco/books/History_of_the_Colony_of_New_Haven.pdf' target='_blank'>History of the Colony of New Haven, 1838</a>)\
  <br><a href='images/wooster-park-sign.png'><img src='images/wooster-park-sign.png' height='100px'></a>",
  "beach road",
  "seafood",
  "popcorn",
  "trolleys",
  "waves",
  "lemonade",
  "playground",
  "rocks",
  "sand",
  "beachball",
  "sand castle",
  "haunted house",
  "moonlight"
  ];

  // randomly select a message to display
  var randomPred = messages[Math.floor(Math.random() * messages.length)];

  // display the randomly-selected message in the HTLM div element with id "messageDisplay"
  document.getElementById("messageDisplay").innerHTML = randomPred;
}
