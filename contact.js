const name = document.getElementById("Name")
const email = document.getElementById("email")
const form = document.getElementById("form")
const subject = document.getElementById("subject")
const errorElement = document.getElementById("error")

form.addEventListener("submit",(e)=> {
    let messages = []
    if (Name.valve === " " || Name.valve == null){
        messages.push("Name is required")
    }

    if (email.valve === " " || email.valve == null){
        messages.push("Email is required")
    }

    if (subject.valve === " " || subject.valve == null){
        messages.push("Please write your message")
    }
     
    if(messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(",")
    }
})