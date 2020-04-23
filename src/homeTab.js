const homeTab = (container) => {
    const navbar = document.createElement('navbar')
    navbar.classList.add("nav");
    const li = document.createElement("ol");
    li.classList.add("nav-item")
    li.setAttribute("id", "menu");
    li.innerHTML = "Menu";
    navbar.appendChild(li);

    const about  = document.createElement("ol");
    about.classList.add("nav-item");
    about.innerHTML = "About ";
    navbar.appendChild(about);

    const location  = document.createElement("ol");
    location.classList.add("nav-item");
    location.innerHTML = "Contact ";
    navbar.appendChild(location);

    container.appendChild(navbar);
}

const article = (container) =>{
    const art = document.createElement("article");
    art.classList.add("art");
    art.innerHTML =`<h1>Welcome to Roma's Deli</h1>`
    container.appendChild(art);
}
export { homeTab, article};

