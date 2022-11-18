let rating = 0
document.querySelector("#b-one").onclick = function(){
    resetGlobes();
    rating = '1'
    document.querySelector("#b-one").className ="clicked globes";
}

document.querySelector("#b-two").onclick = function(){
    resetGlobes();
    rating = '2'
    document.querySelector("#b-two").className ="clicked globes";
}

document.querySelector("#b-three").onclick = function(){
    resetGlobes();
    rating = '3'
    document.querySelector("#b-three").className ="clicked globes";
}

document.querySelector("#b-four").onclick = function(){
    resetGlobes();
    rating = '4'
    document.querySelector("#b-four").className ="clicked globes";
}

document.querySelector("#b-five").onclick = function(){
    resetGlobes();
    rating = '5'
    document.querySelector("#b-five").className ="clicked globes";
}


function resetGlobes(){
    document.querySelector('#b-one').className = 'globes'
    document.querySelector('#b-two').className = 'globes'
    document.querySelector('#b-three').className = 'globes'
    document.querySelector('#b-four').className = 'globes'
    document.querySelector('#b-five').className = 'globes'
}

document.querySelector("#sub-button").onclick = function(){
    if (rating == 0){
        alert("Please select a rating before submitting the form")
    }else{
        document.querySelector(".ratings-container").className = "hidden";
        document.querySelector(".thank-you-container").className = "";

        document.querySelector('#rating-value').innerHTML = rating;
    }
}