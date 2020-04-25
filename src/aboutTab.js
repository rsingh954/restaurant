const about = () =>{
    const section = document.createElement("section");
    const content = document.createElement("div");
    content.innerHTML = `
    <div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4> About | Roma's Deli </h4>
      <hr>
      <p><em>Roma's has served San Bruno for years. Our customers have have grown befire our eyes. We are a staple in 
      the community.</p>
    </div>
  </div>
</div>
    `

    document.body.appendChild(section)
    section.appendChild(content);
}

export default about;