let loginPageInput = document.getElementById('loginPageInput')
let loginPageButton = document.getElementById('loginPageButton')

let allowedNumbers = ['Digit0','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9',]

loginPageInput.addEventListener('input', function(event){
    console.log(event);
  if((loginPageInput.value.charAt(0) === '0' && loginPageInput.value.charAt(1) === '9') && loginPageInput.value.length == '11'){
    loginPageButton.disabled = false
}else{
    loginPageButton.disabled = true
    
  }
})
loginPageInput.addEventListener('keypress', function(event){
    if(allowedNumbers.includes(event.code) === false){
        event.preventDefault()
    }
})


// Sign Up page scipts

let signUpPageNameInput = document.getElementById('signUpName')
let signUpPageLnameInput = document.getElementById('signUpLastName')
let signUpPagePasswordInput = document.getElementById('SignUpuserPasswordInput')
let signUpPagePasswordInputControl = document.querySelector('.showHideButton')
let signUpPagePasswordInputMassage = document.getElementById('signUpNameMessage')
let signUpPageSubmitButton = document.getElementById('signUpSubmitButton')

let alowedChars = ['0','1','2','3','4','5','6','7','8','9','_','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','F','G','H','I','J','K','L','M','N','O','P','Q','R','T','U','V','W','X','Y','Z'
]


function signUpCheck (){
    if((signUpPageNameInput.length >= 3) && ((signUpPagePasswordInput.length >= 8))
    ){
        signUpPageSubmitButton.disabled = false
    }else{
        signUpPageSubmitButton.disabled = true
        console.log('sallam nashod')
    }
}


signUpPageNameInput.addEventListener('keydown', signUpCheck)
signUpPageLnameInput.addEventListener('keydown', signUpCheck)
signUpPagePasswordInput.addEventListener('keydown', signUpCheck)


function passwordShowHide (input, button){
    button.addEventListener('click', function(){
        if(input.type === 'password'){
            input.type = 'text'
            document.querySelector(`svg.showEye`).classList.add('hidden')
            document.querySelector(`svg.hiddenEye`).classList.remove('hidden')
        }else{
            input.type = 'password'
            document.querySelector(`svg.showEye`).classList.remove('hidden')
            document.querySelector(`svg.hiddenEye`).classList.add('hidden')
        }
    })
}

let PasswordInput = document.querySelector('.userPasswordInput')
let PasswordInputButton = document.querySelector('.userPasswordButton')


passwordShowHide(PasswordInput, PasswordInputButton)

