class TituloDinamico extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode:"open"});

        const componentRoot = document.createElement('h1');
        //componentRoot.textContent='Adilson';
        componentRoot.textContent =this.getAttribute("Nome");
        const componentRoot1 = document.createElement('body');

        //estilo

        const style = document.createElement("style");
        style.textContent=`
        h1{
            color:red;
        }
        body{
            background-color:red;
        }
        
        `;
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
        shadow.appendChild(componentRoot1);

    }
}

customElements.define('titulo-dinamico',TituloDinamico)