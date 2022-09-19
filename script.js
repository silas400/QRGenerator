let main = document.querySelector("#main")

let qrInput = document.querySelector("#qrInput")

let generateBtn = document.querySelector("#generate")

let qrImage = document.querySelector("#qrImage")

generateBtn.addEventListener("click", function(){
    main.style.height = "400px"
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput.value}`
    qrImage.style.opacity = '1'
    

})
