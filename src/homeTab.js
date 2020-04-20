const homeTab = (container) => {
    const navbar = document.createElement('navbar')
    navbar.classList.add("nav");
    const li = document.createElement("li");
    li.classList.add("nav-item")
    li.innerHTML = "Menu";
    navbar.appendChild(li);
    container.appendChild(navbar);
}
export default homeTab;