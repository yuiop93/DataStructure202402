var readline = require("readline-sync");

var Ans=Math.floor(Math.random()*10) //0<= rand <1
var win=false;

while(!win){
    do{
        var G = readline.questionInt("Please input an intger 0-9 ?");

    }while(G<0 || G>9)
    // for(var i=0;i<10;i++){

    // }
    // while(){

    // }

    if(Ans == G){
        console.log("You Win!")
        //question
        var again=readline.question("Again? Y/N");
        if(again=="Y"){
            Ans=Math.floor(Math.random()*9)+1 
        }else{
            win=true;
        }
        
    }else{
        console.log("Wrong");
        //goto 4
    }
}


