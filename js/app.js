let warning = document.querySelector('.warning');
let form = document.forms.subscribe;
let userInput = form.email;
const submitBtn = form.submitBtn;

submitBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  if(validate(userInput.value)){
    removeMessage();
  }else{
    showMessage();
  }
});

function showMessage(){
  warning.style.display = "block";
  userInput.style.border="1px solid red";
}

function removeMessage(){
  warning.style.display = "none";
  userInput.style.border="none";
}

function validate(email){
  const reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/;
  if(reg.test(email)) return true;
  return false;
}