function formWork(){

    let firstName = document.querySelector('#first').value
    console.log(first)

    let lastName = document.querySelector('#last').value
    console.log(last)

    let firstNameLength = firstNameLength.length
    console.log(firstNameLength)

    let emailId = document.querySelector('#email').value
    console.log(emailId)

    let emailIdLength = emailId.length
    console.log(emailIdLength)

    let emailStructure = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    console.log(emailStructure)

    if(firstNameLength <= 3 ){
        document.querySelector('.text').innerText = 'Name is required with miniimum 3 characters !'

    }else if(!emailId.match(emailStructure)){
        document.querySelector('.text').innerText = 'Please enter a valid email address !'

    }
    else{
        document.querySelector('.text').innerText = ''
        document.querySelector('.success').innerText = 'Details submitted success !!!'

    }

}