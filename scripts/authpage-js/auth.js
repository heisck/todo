class Auth {
  sign = 'Sign up';

  inputs() {
    if (this.sign === 'Sign up') {
      return `
      <input class="auth-info" placeholder="username eg. @heisck" type="text" name="">
      <input class="auth-info" placeholder="email eg. heisck@domain.com" type="email" name="">
      <input class="auth-info" type="password" placeholder="password double click to show password" name="">
      `
    }
    else {
      return `
      <input class="auth-info" placeholder="username or email eg. heisck or heisck@domain.com" type="text" name="">
      <input class="auth-info" type="password" placeholder="password double click to show password" name="">
      `
    }
  }

  link() {
    if (this.sign === 'Sign up') {
      return `
      <p id="auth-option-footer">Have an account?     
        <span id="js-footer-link">Sign in</span>
      </p>
      `
    }
    else {
      return `
      <p id="auth-option-footer">Don't have an account?     
        <span id="js-footer-link">Sign up</span>
      </p>
      `
    }
  }
}

const auth = new Auth();
const animate = 'appear 1s ease-out forwards';

renderPage(animate);
function renderPage(animate) {
  document.getElementById('js-auth-page').innerHTML =
  `
  <div id="auth-section">
    <header id="header">
      <h1>
        Todo Webapp
      </h1>
    </header>
    <main style = "animation: ${animate};" class="auth-container">
      <p id="auth-option-header">${auth.sign}</p>
      ${auth.inputs()}
      <a href="todopage.html">
        <button id="js-submit-btn">
          Submit
        </button>
      </a>
      ${auth.link()}
    </main>
  </div>
  <footer id="logo">
    <img src="images/logo.jpg" alt="logo of creator">
  </footer>
`
  renderInOutPage();
}


function renderInOutPage() {
  document.getElementById('js-auth-page').addEventListener('click', (e) => {
    if (e.target.matches('#js-footer-link')) {
      const span = e.target;
      span.innerText === 'Sign in' ? 
      auth.sign = 'Sign in' :
      auth.sign = 'Sign up';
      const animate = 'none';
      renderPage(animate);
    }
  })

}
