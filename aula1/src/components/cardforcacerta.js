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
style(){

    const style = document.createElement("style");
    // esse estilo é apenas para o componente
    style.textContent= `
    
    .card img{
        height: 100px;
    }
    .card{
        width: 50%;
        border: 1px solid;
        display: flex; 
        margin-bottom:10px;
        justify-content: space-between;
        box-shadow: 31px 17px 47px 0px rgba(0,0,0,0.75);
    }
    
    .card_left{
       display: flex;
       flex-direction: column;
       justify-content: center;
       padding-left: 5px;
    }
    .card_left > a{
        margin-top: 15px;
        font-size: 25px;
        text-decoration:none;
        text-style:none;
        color:black;
        font-weight: bold;
    }
    .card_left > p{
        color: gray;
    }
    .card_left >span{
        font-weight: 300;
    }
    `;

    return style;
}

}

customElements.define('card-certo',cardCerta)


