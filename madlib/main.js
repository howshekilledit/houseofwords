//READ ON FOR INSTRUCTIONS


//the gray text is called a 'comment,' and the computer knows to ignore it, 
//so you can write anything you want in a comment without messing up your code. 

//you can create a single-line comment like this one by starting your line with two slashes

/*or you can create a 
multi-line
comment
like this one by starting with 
slash-star and endign with star-slash*/

//continue to scroll and read all comments to see how to complete this exercise. 
//sometimes comments come at the end of a line of code, like in the line that follows...

var body_part = ""; //between the quotation marks, put a body part 
var person_name = ""; //between the quotation marks, put a name
var plural_noun = "";  //between the quotation marks, put a plural noun
var sound = ""; //see if you can guess what to do here...
var number = "" //... and here
var noun = ""; //and here
var adjectives = ["", ""]; //in this line, put one adjective between each pair of quotes

/*now save your work by hitting CMND+S or CTRL+S, or by clicking the icon
on the very top left of the screen and selecting File>Save
refresh the browser to see your output! 

.
.
.
.
.
.
if you are working in a group, now would be a great time 
to read your results to each other

if you are on your own, after reading your results try changing what you've put between the quotation marks in lines 12-20 and pressing "play" again see what happens

IF IT'S NOT WORKING, check to make sure that everything you've added 
is properly enclosed between quotes, if you have quotes within quotes, that might also break your code

You are now done with part 1 of this exercise! 
You are welcome to scroll down and see the code 
that was executed using the variables you assigned. 

Or you can move on to part 2 in the main document. 
.
.
.
.

*/

//check to make sure that all of the variables have been populated
let words = adjectives.concat([body_part, person_name, sound, noun, number, plural_noun]);
if (words.indexOf("") == -1) {
    //fill in madlib with variables
    var madlib =document.getElementById('text');
    madlib.classList.add('glow');
    var story = `When ${person_name} entered the ${adjectives[0]} house, they felt in their ${body_part} that it was teeming with ${adjectives[1]} ghosts. They knew that they should turn and run, but instead their feet led them through the corridor into the dining room. Some ${number} ${plural_noun} floated above the table as as an eery ${sound} echoed through their ${body_part}. ${person_name} got out unscathed, but returned home questioning everything, like whether ${noun} is even ${adjectives[1]}.`;
    //display madlib on page
    madlib.innerText = story;
}