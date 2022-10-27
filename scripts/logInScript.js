let header_burger = document.querySelector('.header_burger');
let header_menu = document.querySelector('.header_menu');
let body = document.querySelector('body');
let header_list = document.querySelector('.header_list');



header_burger.addEventListener('click', function (event) {

  header_burger.classList.toggle('active');
  header_menu.classList.toggle('active');
  body.classList.toggle('lock');
  header_list.classList.remove('active');


});

let myInput = document.getElementById('myInput');
let myEmail = document.getElementById('email');

myInput.addEventListener('focus', (event) => {
  myEmail.style.color = "#AB78F6";
});

myInput.addEventListener('focusout', (event) => {
  myEmail.style.color = "inherit";
});


let myCheckBox = document.getElementById('check');
let myCheckBoxLabel = document.getElementById('checkLabel');


function CheckFunction() {

  if (myCheckBox.checked) {

    myCheckBoxLabel.innerHTML = "Will be remembered &#128521";
    myCheckBoxLabel.style.color = "#AB78F6";
    return true;
  }

  else if (myCheckBox.checked == false) {
    myCheckBoxLabel.innerHTML = "Remember me...";
    myCheckBoxLabel.style.color = "inherit";
    return false;
  }



}
function Preset(){

  if(document.cookie.length>0){
    let data = document.cookie.split('=')[1];
    myInput.value= data;
  }
}



function NextClick() 
{
  if(myInput.value == ""){
    alert("Email cant be empty");
  }

  else {
    if(CheckFunction())
    {
      document.cookie = `email = ${myInput.value}; expires=Wed, 4 May 2022 22:59:00 +0400;`;
      alert("Cookies have been added");
    }
    else {
      alert("Cookies haven been deleted");
      document.cookie = `email = ${myInput.value}; expires=Mon, 18 Apr 2022 22:59:00 +0400;`;
    }
  }
}

Preset(); 