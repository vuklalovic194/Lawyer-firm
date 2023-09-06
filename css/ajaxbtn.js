const url = 'https://random.dog/woof.json'
const xhr = new XMLHttpRequest()
$(document).ready(function(){
    $("#ajaxbtn").on('click',function(){
        xhr.open('GET', url)
        xhr.responseType = 'json'
        xhr.onload = () => HTMLOutputElement(xhr.response, )
        xhr.send()  
    })
})




