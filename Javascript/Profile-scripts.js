let circlePBNum = document.getElementById('circleProgressBarNumber')
let progressCircle = document.getElementById('progressCircle')

function matchProgress (){
    let percent = (316 - ((316 / 100) * Number(circlePBNum.textContent)))
    progressCircle.style.strokeDashoffset = percent
}

document.addEventListener('DOMContentLoaded', matchProgress)