const contact = () =>{
    const form = document.createElement("form");
     form.setAttribute("class", "form");
    form.innerHTML = `
    <label for="fname"><strong>First name</strong>:</label>
    <input type="text" id="fname" name="fname"><br><br>
    <label for="lname"><strong>Message:</strong></label>
    <input type="text-area" id="lname" name="lname"><br><br>
    <input class = "submit" type="submit" value="Submit">
    `;
    document.body.appendChild(form);

}

export default contact;