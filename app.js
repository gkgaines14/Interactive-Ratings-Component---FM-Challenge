document.querySelector("#sub-button").onclick = function(){
    console.log("button Clicked")
}

document.querySelector("#b-one").onclick = function(){
    let buttonOne = document.querySelector("#b-one");
    if(buttonOne.className =="globes"){
        buttonOne.className="clicked globes";
    }else{
        buttonOne.className="globes";
    }
    console.log("this is button 1")
    console.log(buttonOne.className);
}