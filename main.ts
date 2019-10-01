class DomManipulation {
    
    public app = document.getElementById('app')

    public insertText(): void {
        if (this.app) {
            this.app.innerText = 'E ae gurizada!'

            setTimeout(() => {
                this.app.innerText = 'Atualizou!'
            }, 500)
        }
    }
}

let p = new DomManipulation()

p.insertText()