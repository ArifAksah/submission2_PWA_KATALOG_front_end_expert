class NavWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="nav">
    <ul class="nav-logo-pos">
      <li>
        <img
          src="../images/icon48x48.png"
          class="logo-img"
          alt="logo website"
        />
      </li>
      <li><h1 class="nav-logo">Hunger Apps</h1></li>
    </ul>
    <button class="menuHamburger" tabindex="0" id="hamburgerButton">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
    <ul class="nav-bar" id="navigationDrawer">
      <li class="nav-item">
        <a href="/">Home</a>
      </li>
      <li class="nav-item">
        <a href="#/favorites-page">Favorites</a>
      </li>
      <li class="nav-item">
        <a href="https://www.instagram.com/arifaksah/?igshid=YmMyMTA2M2Y">About Us</a>
      </li>
    </ul>
  </nav>
    `;
  }
}
customElements.define('nav-web', NavWeb);
