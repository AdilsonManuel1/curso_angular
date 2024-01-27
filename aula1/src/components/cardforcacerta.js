class cardCerta extends HTMLElement{
constructor(){
    super();

    const shadow = this.attachShadow({mode:"open"});
    shadow.appendChild(this.buider());
    shadow.appendChild(this.style());

}

buider(){
    const componentRoot = document.createElement("div");

    componentRoot.setAttribute("class","card");
    const card_left = document.createElement("div");
    card_left.setAttribute("class","card_left");
    const card_right = document.createElement("div");
    card_right.setAttribute("class","card-right");

    const autor = document.createElement("span");
    autor.textContent = "By "+(this.getAttribute("autor") || " Anonimo");

    const linkTile = document.createElement("a");
    // Aqui acontece algo lindo, cria a tag a e depois adiciona o atributo title, que recebe o texto adicionano no title no html.
    linkTile.textContent= this.getAttribute("title");
    linkTile.href = this.getAttribute("link-url");


    const newConsyeny = document.createElement("p");

    newConsyeny.textContent = this.getAttribute("content");



    const newsImage = document.createElement("img");
    newsImage.src= this.getAttribute("link-img") || "assets/img/default.jpg";
    newsImage.alt="Imagem de Capa";

    card_left.appendChild(autor);
    card_left.appendChild(linkTile);
    card_left.appendChild(newConsyeny);
    card_right.appendChild(newsImage);

 
    
    

componentRoot.appendChild(card_left);

componentRoot.appendChild(card_right);

    return componentRoot;
}
style(){}

}

customElements.define('card-certo',cardCerta)


