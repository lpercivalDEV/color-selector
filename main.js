
// selection based on color grid
let grid = document.getElementsByClassName('box');
let text = document.getElementsByClassName('colorLabels');

//adding event listener to each box in the grid
for(var i = 0; i < grid.length; i++) {
    grid[i].addEventListener("click", function(){
        changeColor(event);
    });
    text[i].addEventListener("click", function(){
        event.stopPropagation();
    });
};

//change color of background based on clicked box
function changeColor(event) {
    let temp = (event.target);
    let current = getComputedStyle(temp).getPropertyValue("background-color");
    console.log(current);
    body.style.backgroundColor = current;
}



//Old version of app -> selection based on pull down menu
// 
// let user = document.getElementById("firstName");
// let choice = document.getElementById("background");
// let printResult = document.getElementById("result");
//
//
// document.getElementById('background').onchange = function(){
//     body.style.backgroundColor = background.value;
//     switch (choice.value) {
//         case "#B03F3B":
//             console.log("You selected Brick.");
//             console.log(user);
//             printResult.innerHTML=  user.value + ' selected Brick. Nice one!';
//             break;
//             case "#94A437":
//             console.log("You selected Bamboo Green.");
//             printResult.innerHTML=  user.value + ' selected Bamboo Green. Good choice!';
//                 break;
//                 case "#629CCB":
//                 console.log("You selected Ice Blue.");
//                 printResult.innerHTML=  user.value + ' selected Ice Blue. Super cool!';
//                     break;
//                     case "#7D5EC9":
//                     console.log("You selected Grape.");
//                     printResult.innerHTML=  user.value + ' selected Grape. Tasty!';
//                         break;
//                         case "#67224F":
//                         console.log("You selected Wine.");
//                         printResult.innerHTML=  user.value + ' selected Wine. Divine!';
//                             break;
//                             case "#774228":
//                             console.log("You selected Coffee.");
//                             printResult.innerHTML=  user.value + ' selected Coffee. Best choice!';
//                                 break;
//         default: printResult.innerHTML=  user.value + ", please select a color from the dropdown."
//
//     }
// };
