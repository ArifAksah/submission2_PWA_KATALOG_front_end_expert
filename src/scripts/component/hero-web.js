class HeroWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
        <div class="hero-text">
          <h1>Hunger Apps </h1>
          <p>Temukan Restaurant Favorit Anda </p>
        </div>
        </div>
           `;
  }
}
customElements.define('hero-web', HeroWeb);
