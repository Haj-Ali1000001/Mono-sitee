let circlePBNum = document.getElementById('circleProgressBarNumber')
let progressCircle = document.getElementById('progressCircle')

function matchProgress (){
    let percent = (316 - ((316 / 100) * Number(circlePBNum.textContent)))
    progressCircle.style.strokeDashoffset = percent
}

document.addEventListener('DOMContentLoaded', matchProgress)




let watchHistory = document.getElementById('page-profile-tab-content-view-history')
let watchHistoryButton = document.getElementById('page-profile-tab-content-view-history-button')
let buyHistory = document.getElementById('page-profile-tab-content-shopping-history')
let buyHistoryButton = document.getElementById('page-profile-tab-content-shopping-history-button')
let changePassword = document.getElementById('page-profile-tab-content-changePassword')
let changePasswordButton = document.getElementById('page-profile-tab-content-changePassword-button')
let otherDevice = document.getElementById('page-profile-tab-content-otherDevices')
let otherDeviceButton = document.getElementById('page-profile-tab-content-otherDevices-button')



function accordion(button, target){
    button.addEventListener('click', function(){
        target.classList.toggle('hidden')
    })
}

watchHistoryButton.addEventListener('click',function(){
    watchHistory.classList.toggle('hidden')
})
buyHistoryButton.addEventListener('click',function(){
    buyHistory.classList.toggle('hidden')
})
changePasswordButton.addEventListener('click',function(){
    changePassword.classList.toggle('hidden')
})
otherDeviceButton.addEventListener('click',function(){
    otherDevice.classList.toggle('hidden')
})