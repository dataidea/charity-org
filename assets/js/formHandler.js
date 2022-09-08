const form = document.querySelector("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const data = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        message: form.message.value
    }

    const res = await fetch("https://dosomethingmailer.herokuapp.com/contact", 
    {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"content-Type": "application/json"},
    }) 
    
})