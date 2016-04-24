
var guess_input_text;
var finished = false;
var guesses = 0;
var random_color;

function do_game(){
    colors =["blue","cyan","gold","gray","green","magenta","orange","red","white","yellow","brown","darkblue"];
    var color_index = Math.floor(Math.random()*colors.length);
    random_color = colors[color_index]; //add var random_color above.
    //document.write(random_color);
    
    while (!finished) {
        guess_input_text = prompt('I am thinking of one of these colors: \n\n' + colors.sort()
                + '\n\n What color am I thinking of?');
        guesses += 1;
        finished = check_guess();
    }
}


function check_guess(){
    if (colors.indexOf(guess_input_text) == -1) {
        alert("Sorry, I don't recognize your color.");
        return false;
    }
    
    if (guess_input_text > random_color) {
        alert('Hint: your color is alphabetically higher than mine');
        return false;
    }
    if (guess_input_text < random_color) {
        alert('Hint: your color is alphabetically lower than mine');
        return false;
    }
    myBody=document.getElementsByTagName("body")[0];
    myBody.style.background=random_color;
    alert('Congratulations! You have guessed the color ' + random_color + 
            '\n\n It took you ' + guesses + ' guesses to finish the game!');
    return true;
}
