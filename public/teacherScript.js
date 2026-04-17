// Add an event listener to the form that upon submits creates a new teacher
// When the teacher is created redirect to the teachers page
const form = document.querySelector("form")

form.addEventListener("submit", async(e) => {
e.preventDefault()

const teacherData = new FormData(form)
const reqBody = Object.fromEntries(teacherData)

await fetch("/add/teacher",{
    method: "POST",
    headers:{
        "content-Type":"application/json"
    },
    body: JSON.stringify(reqBody)
})
window.location.href = "/"
})