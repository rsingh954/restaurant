const homeTab = (container) => {
    const navbar = document.createElement('navbar')
    navbar.classList.add("nav");
    const li = document.createElement("ol");
    li.classList.add("nav-item")
    li.innerHTML = "Menu";
    navbar.appendChild(li);

    const about  = document.createElement("ol");
    about.classList.add("nav-item");
    about.innerHTML = "About ";
    navbar.appendChild(about);

    const location  = document.createElement("ol");
    location.classList.add("nav-item");
    location.innerHTML = "Location ";
    navbar.appendChild(location);

    container.appendChild(navbar);
}

const article = (container) =>{
    const art = document.createElement("article");
    art.classList.add("art");
    art.innerHTML =`<h1>Welcome!</h1>`
    container.appendChild(art);
}
export { homeTab, article};