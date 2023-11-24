import { SaveInfoin } from "../../store/actions";
import { user } from "../../types/info";
import { dispatch } from "../../store";

const userInfo: user = {
    name: "",
    word: "",
    print: "",
};

export class AppForm extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {


        const tittle = this.ownerDocument.createElement('h1');
        tittle.innerText = "polloc's board"

        const name = this.ownerDocument.createElement('input');
        name.addEventListener("change",(e: any) => {
        
            userInfo.name = e.target.value;
        });
        const namel = this.ownerDocument.createElement('label');
        namel.innerText = "Escribe tu nombre de usuario"

        const word = this.ownerDocument.createElement('input');
        word.addEventListener("change",(e: any) => {
        
            userInfo.word = e.target.value;
        });
        const wordl = this.ownerDocument.createElement('label');
        wordl.innerText = "Escribe la letra con la que te quieres identificar"

        const print = this.ownerDocument.createElement(`input`);
        print.addEventListener("change",(e: any) => {
        
            userInfo.print = e.target.value;
        });
        const printed = this.ownerDocument.createElement(`label`);
        printed.innerText = "Escribe tu color deseado"

        const SaveInfo = this.ownerDocument.createElement(`button`) 
        SaveInfo.innerText = "Guarda tu informacion"
        SaveInfo.addEventListener("click",async(e) => {
            console.log(userInfo);
            dispatch( await SaveInfoin(userInfo));
        });

        SaveInfo.addEventListener("click", async (e) => {

    
        })

        this.shadowRoot?.appendChild(tittle);
        this.shadowRoot?.appendChild(namel);
        this.shadowRoot?.appendChild(name);
        this.shadowRoot?.appendChild(wordl);
        this.shadowRoot?.appendChild(word);
        this.shadowRoot?.appendChild(printed);
        this.shadowRoot?.appendChild(print);
        this.shadowRoot?.appendChild(SaveInfo);  
    }
}

customElements.define('app-form', AppForm)