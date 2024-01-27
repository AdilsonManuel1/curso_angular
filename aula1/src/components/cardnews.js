class cardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.innerHTML= "<h1> Hello Word </h1>";
    }
}

customElements.define('card-new',cardNews);