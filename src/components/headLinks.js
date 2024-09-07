class HeadLinks extends HTMLElement {
    constructor() {
        super();

        this.render();
    }

    render() {
        this.innerHTML = `
        <header>
            <p>RAMDANi LiNKS</p>
        </header>
        `
    }
}

customElements.define('head-links', HeadLinks);