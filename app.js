let playGame = document.getElementById("playGame");
let body = document.getElementsByTagName("body");

playGame.addEventListener("click", bugSelection);

function bugSelection() {
  body[0].style.transform = "translateY(-100%)";
}

let flyButton = document.getElementById("fly");
let mosquitoButton = document.getElementById("mosquito");
let spiderButton = document.getElementById("spider");
let roachButton = document.getElementById("roach");

let flyImg = document.getElementsByClassName("flyImg");
let mosquitoImg = document.getElementsByClassName("mosquitoImg");
let spiderImg = document.getElementsByClassName("spiderImg");
let roachImg = document.getElementsByClassName("roachImg");

flyButton.addEventListener("click", gameTime);
mosquitoButton.addEventListener("click", gameTime);
spiderButton.addEventListener("click", gameTime);
roachButton.addEventListener("click", gameTime);

let game = document.getElementById("game");

window.addEventListener("resize", getGameWidthHeight);

let randomNumWidth, randomNumHeight, randomRotation;

function getGameWidthHeight() {
  let actualWidth = game.clientWidth;
  let actualHeight = game.clientHeight;

  let maxWidth = actualWidth - 100;
  let maxHeight = actualHeight - 100;

  randomNumWidth = Math.floor(Math.random() * maxWidth) + 1;
  randomNumHeight = Math.floor(Math.random() * maxHeight) + 1;

  randomRotation = Math.floor(Math.random() * 360) + 1;

  console.log(randomRotation);
}

function gameTime(e) {
  getGameWidthHeight();
  //console.log(e.path[0].className);

  body[0].style.transform = "translateY(-200%)";

  setTimeout(() => {
    time2play(e);
    setInterval(() => {
      startTimer();
    }, 1000);
  }, 2000);
}

function time2play(e) {
  if (e.path[0].className.includes("thisIsFly")) {
    //console.log("this just might work");

    let flyClone = flyImg[0].cloneNode(true);

    //console.log(randomRotation);

    let newImgFly = flyClone;
    //console.log(newImgFly);
    newImgFly.style.position = "absolute";
    newImgFly.style.left = randomNumWidth + "px";
    newImgFly.style.top = randomNumHeight + "px";
    newImgFly.style.width = "100px";
    newImgFly.addEventListener("click", removeInsect);
    newImgFly.style.transform = "rotate(" + randomRotation + "deg)";
    newImgFly.style.cursor = "pointer";

    game.append(newImgFly);
  }

  if (e.path[0].className.includes("thisIsMosquito")) {
    let mosquitoClone = mosquitoImg[0].cloneNode(true);
    let newImgMosquito = mosquitoClone;

    newImgMosquito.style.position = "absolute";
    newImgMosquito.style.left = randomNumWidth + "px";
    newImgMosquito.style.top = randomNumHeight + "px";
    newImgMosquito.style.width = "100px";
    newImgMosquito.addEventListener("click", removeInsect);
    newImgMosquito.style.transform = "rotate(" + randomRotation + "deg)";
    newImgMosquito.style.cursor = "pointer";

    game.append(newImgMosquito);
  }

  if (e.path[0].className.includes("thisIsSpider")) {
    let spiderClone = spiderImg[0].cloneNode(true);
    let newImgSpider = spiderClone;

    newImgSpider.style.position = "absolute";
    newImgSpider.style.left = randomNumWidth + "px";
    newImgSpider.style.top = randomNumHeight + "px";
    newImgSpider.style.width = "100px";
    newImgSpider.addEventListener("click", removeInsect);
    newImgSpider.style.transform = "rotate(" + randomRotation + "deg)";
    newImgSpider.style.cursor = "pointer";

    game.append(newImgSpider);
  }

  if (e.path[0].className.includes("thisIsRoach")) {
    let roachClone = roachImg[0].cloneNode(true);
    let newImgRoach = roachClone;

    newImgRoach.style.position = "absolute";
    newImgRoach.style.left = randomNumWidth + "px";
    newImgRoach.style.top = randomNumHeight + "px";
    newImgRoach.style.width = "100px";
    newImgRoach.addEventListener("click", removeInsect);
    newImgRoach.style.transform = "rotate(" + randomRotation + "deg)";
    newImgRoach.style.cursor = "pointer";

    game.append(newImgRoach);
  }
}

let bugCount = document.getElementById("numberOfBugsKilled");

let killCount = 0;

function removeInsect(e) {
  e.path[0].style.transform = e.path[0].style["transform"] + "scale(0)";

  e.path[0].style.transition = "all 0.5s";

  killCount++;

  console.log(killCount);

  if (killCount == 20) {
    relayMessage();
  }

  bugCount.innerText = killCount;

  setTimeout(() => {
    getGameWidthHeight();
    time2play(e);
  }, 500);

  getGameWidthHeight();

  setTimeout(() => {
    getGameWidthHeight();
    time2play(e);
  }, 1000);
}

/* This is for stopwatch variables*/

let minute = 00;
let second = 00;

let secondHand = document.getElementById("second");
let minuteHand = document.getElementById("minute");

/* This is the actual stopwatch function */

function startTimer() {
  second++;
  if (second < 9) {
    secondHand.innerText = "0" + second;
  }

  if (minute < 9) {
    minuteHand.innerText = "0" + minute;
  }

  if (second > 9) {
    secondHand.innerText = second;
  }

  if (minute > 9) {
    minuteHand.innerText = minute;
  }

  if (second > 59) {
    minute++;
    minuteHand.innerText = "0" + minute;
    second = 0;
    secondHand.innerText = "0" + second;
  }
}

let impossibleMessage = document.getElementById("impossibleMessage");

function relayMessage() {
  impossibleMessage.style.display = "flex";
  impossibleMessage.style.top = "22.5%";
  impossibleMessage.style.visibility = "visible";
  //impossibleMessage.style.height = "90px";
  impossibleMessage.style.zIndex = "2";
}
