var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/beer.jpg') {
      myImage.setAttribute ('src','images/beer1.png');
    } else {
      myImage.setAttribute ('src','images/beer.jpg');
    }
}   
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Beer is cool, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Beer is cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
  