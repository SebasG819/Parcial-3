export class AppGame extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const lienzo = this.ownerDocument.createElement('section');
        this.shadowRoot?.appendChild(lienzo);
    }
}

customElements.define('app-game', AppGame)