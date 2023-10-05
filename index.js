let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
        let audio = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        let audio = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        let audio = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        let audio = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        let audio = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "k":
        let audio = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "l":
        let audio = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;

      default:
        console.log(buttonInnerHTML);
      // break;
    }
    // this.style.color = "blue";
    // let audio = new Audio("sounds/tom-1.mp3");
    // audio.play();
  });
}

// document.querySelector(".drum").addEventListener("click", function (){
//     alert("i got clicked!");
// });

// function handleClick(i) {
//   for (let i = 0; i < document.querySelectorAll(".drum".length); btn++) {
//     const element = i[btn];
//   }
//   return alert("I got clicked!");
// }
