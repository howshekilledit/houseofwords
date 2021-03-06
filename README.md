# houseofwords
House of Words
Morgan Green
// Profile of Content
Keywords
#variables
#signifiers
#language
#3D
Contexts
What is the context or background that inspired your recipe? (< 100 words)

	Most of the artwork I’ve exhibited for the last few years uses software I’ve coded to process language. I’m interested in how software can move words around quickly. Computational efficiency allows me to simulate the breakdown of language at incredible speeds. This exercise allows others to participate in this practice with me. Moving through the “house of words,” the program I’ve created reorients people to whatever they’ve written. Hopefully these literal shifts in perspective will help users to consider their choice of words in a different way, and also to consider the experiences of others. This project proposes that no two people speak the same language.

Which community are you offering the recipe to? (< 100 words)

	This is an all-level activity for anyone with curiosity about language and control. For those who are brand new to coding, it’s also a great way to get your feet wet with some variable declarations. For anyone, regardless of coding experience, it’s a chance to look at the way you use language from a new perspective. It’s also a good starting place for anyone who is curious about coding 3D imagery with JavaScript, as most of the exercise is written in Babylon.js, a fun and powerful 3D library.

How does your submission relate to intersectional feminism? (< 100 words)

	Language is an important tool for maintaining systems of power; it can also be a tool to help alter those systems. In this exercise, I ask people to define words that likely trigger different connotations for different people. Once people have defined the words, they will find themselves confronted with their own definitions. I am hoping this staged confrontation with language will help people better understand how it operates. I hope this kind of work can help people to use language in a way that challenges intersecting supremacies (white, male, cis, straight etc.), rather than upholding them.


Short Description

This  is an all-level activity that deals with variable declarations and assignments in JavaScript. Variables are one of the most important and powerful building blocks of any coding language. If you are new to coding, variable assignments are a great place to begin. This activity can be done in groups or individually.

Those who are new to coding can simply follow the instructions and learn about variables. Those with more experience can explore the source code and learn more about babylon.js, a wonderful library for creating three-dimensional art with code.

For all participants, regardless of coding level, these instructions should foster reflection on language and the way it operates in culture. This exercise suggests the possibility that no two people speak the same language.

Variables are containers: they can hold a variety of different values. You could imagine a variable as a tea bag, and its value as the kind of tea the bag holds. While the procedure might be the same for different kinds of tea, the flavor will vary depending on the contents of the bag. Wherever a variable appears in code, it deploys the value it contains, much as a teabag releases its flavors when placed in hot water. Variables allow programs to respond to varying stimuli differently, and this is powerful.

This exercise encourages you to think about language, as we use it every day, in the same way. As variables hold different values, and as tea bags hold different flavors — words, too, can evoke different meanings and feelings for different people and at different times.

We’ll begin with a warmup that uses basic HTML, CSS, and Javascript, and allows you to get the hang of assigning variables. Then we’ll move on to something more complex with babylon.js in steps 2-4.



// Body of Content

STEP 1: MADLIB WARM-UP

We’ll begin by assigning variable values to populate a Madlib.

Even if you’ve never coded before, you might be familiar with the concept of a variable from taking algebra in school. In this exercise, variables hold values, just like in algebra; however, these particular variables hold text rather than numbers.

In JavaScript, this is how you declare and assign a text variable, also known as a string:

var pet = "cat";

Where the command var signals the declaration of a variable, pet is the name that references that variable, and "cat" is the value the variable contains. The quotation marks enclosing the value signal that it is to be read as a text (or string) value. The equals sign (=) assigns "cat" to pet, and the semicolon (;) terminates the line of code.

In the syntax we’ll be using, we’ll deploy our string variables using template strings (also known as template literals). For example,  this template string would produce the sentence “My cat eats twice a day,” assuming the variable is assigned as above:

`My ${pet} eats twice a day.`

We could change the value of the variable pet using the following command

pet = "dog";

And then the same code (`My ${pet} eats twice a day.`)  would produce the phrase, “My dog eats twice a day.” The symbols ${} signal that the value of the variable with the enclosed name pet should replace that snippet of code. Surrounding the text in backticks (`) rather than quotes (") tells the code to look for template strings and substitute them with the appropriate values.

You’ll be assigning two kinds of variables in this exercise: string variables which hold one value each, and arrays, which hold a series of string values. The code will then deploy the variables you’ve assigned using a third kind of variable: the template string.

Another important tool we’ll be using in this exercise is code comments. Code comments are ignored by the computer, so they allow you to explain what your code does in plain language, or to temporarily omit a line of code. In this exercise, there are additional instructions in the code comments for you to follow along.

In Javascript, you can turn text into a comment either by preceding it with // (in which case the comment will terminate at the end of the line, or by wrapping it with /* */ (e.g. /*comment*/). In the second case, the comment can take up multiple lines. In the code editor for this exercise, comments will most likely appear as gray text, but it depends on your settings.

To complete the warmup, go to howshekilledit.com/madlib and read the code comments for detailed instructions. This should give you an idea of how text variables can operate within a program.


STEP 2: HOUSE OF WORDS

In this step, rather than randomly selecting nouns, adjectives, etc. as with the madlib, you’ll be thinking about what a certain set of words means to you. Whether you are a seasoned coder or brand new, take some time to notice how the language you choose affects the experience.

The words you choose in this exercise will have a lot of power. Read on to see it all unfold! Go to howshekilledit.com/how and carefully follow the instructions in the code comments. Note the instructions on how to save your work at the bottom.


STEP 3: BUILD YOUR OWN ROOM

If you would like, you can build a room of your own, like one of the rooms in Step 2.
You have the option to write your own template string for others to populate (Option 2). Or you can just write your own small poem and fill the room with it (Option 1).

If you don’t want to use template strings, or you feel you understand them, go ahead and proceed to howshekilledit.com/byo. Further instructions await you there. Note that instructions continue after you finish writing text.


This next part is an optional challenge.
Read on for more use cases and an explanation of template strings.

Consider again this example, in which pet is assigned as a simple string variable, and sentence is assigned as a template string:

var pet = "cat";
var sentence = `My ${pet} eats twice a day.`
//the above line assigns the variable called ‘sentence’ the value “My cat eats twice a day.”

Three important symbols are colored for emphasis. The backticks `` that establish the variable as a template string, and the dollar sign $ and curly braces {} that surround the variable, allowing it to embed into the template string.



This formatting allows the code interpreter to sub in any string value where ${pet} appears in the sentence. So if you change the value of pet, the sentence changes accordingly:

var pet = "dog";
var sentence = `My ${pet} eats twice a day.`;
//the above line assigns the variable called ‘sentence’ the value "My dog eats twice a day."

var pet = "toaster";
var sentence = `My ${pet} eats twice a day.`;
//the above line assigns the variable called ‘sentence’ the value "My toaster eats twice a day."

Here’s a different example:

var fav_color = "purple";
var phrase = `My favorite color is ${fav_color}.`;
//the above line assigns the variable called ‘phrase’ the value "My favorite color is purple."

Note that our variable names don’t really make a difference to the code interpreter. We could get the same results with the following:

var variable_1 = "purple";
var variable_2 = `My favorite color is ${variable_1}.`;
//the above line assigns the variable called ‘variable_2’ the value "My favorite color is purple."

…BUT we can make things clearer for ourselves by giving our variables names that have meaning for us.

You can build your own room by visiting howshekilledit.com/byo. You can also look at the code from the first two steps to see more examples in action.

Follow the instructions under OPTION 2 in the comments. They will help you to create your own template string sentence and fill the room with it. After you’ve written your sentence, you can continue to read the comments to make additional changes to the room.

If you get stuck…

Your first line of defense might be to click the “Console” button, underneath the code editor. This is likely to point you in the right direction.

Note that the code interpreter is very different from a human brain in the following respect: it cannot understand something that is almost the type of input it expects to hear. Human brains have amazing capacity for interpolation. For example, we can interpret a few dots and lines as a smiling face :-) . While computer scientists are working on computers’ interpolative abilities, they do not come standard. So while a human who expects to see pet could easily interpret Pet as the same thing, the computer has no ability to recognize these two words as essentially the same. If it expects to see pet, it will not recognize Pet.

Which is just to say, if you are stuck, take a careful look at the examples and the code from steps 1 and 2. See if you can match the format. One misplaced symbol can make all the difference. Once you get used to this kind of careful looking, coding starts to become easier. Persistence is at least as important to effective coding as brain power and logical thinking.


STEP 4: SHARE AND DISCUSS

If you are working in a group, share each other’s houses from step 2. Spend some time with them. Note the differences and similarities in the words that populate the houses in step 2, and consider the questions below.

If you are working individually, you can check out some other peoples’ houses at howshekilledit.com/cow and consider the questions that way.

DISCUSSION QUESTIONS:

What are some of the differences and similarities in the way that you’ve defined different words?
Are these differences surprising? Do they tell you anything about what it might be like to occupy a different point of view, to walk in someone else’s shoes?
How does contextualizing what you’ve written (in longer sentences, in the space of a house) affect its meaning? How does it affect the way it feels?

If you’ve completed step 3, have someone populate the variables for your room (or trade with your group members). Talk about what happens.

Close by discussing or considering how you feel after this exercise, and what observations you might take with you now that you’ve completed it.

Would you like your work from this exercise to appear publicly so that others can experience it?

If you would like to share any of what you’ve made, you can save it by following the instructions in the code comments. You are welcome to submit your link for public sharing at howshekilledit.com/submit-how. You can submit anonymously, or include your name. If approved, your links will be added to the “City of Words.” Submissions will be lightly moderated.
