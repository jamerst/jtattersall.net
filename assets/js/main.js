document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-switch");
  if (toggle) {
    let theme = getTheme();

    if (theme && theme === "light" || !theme && window.matchMedia("screen and (prefers-color-scheme: light)").matches) {
      toggle.innerHTML = '<i class="fas fa-moon"></i>';
      toggle.setAttribute("title", "Switch to dark theme");
    } else {
      toggle.innerHTML = '<i class="fas fa-sun"></i>';
      toggle.setAttribute("title", "Switch to light theme");
    }

    document.getElementById("theme-switch").addEventListener("click", () => {
      if (theme === "light") {
        theme = "dark";
        setTheme(theme);
        document.getElementsByTagName("html")[0].lastChild.insertAdjacentHTML("beforeend", "<link href='/css/main_dark.css' type='text/css' rel='stylesheet'/>");
        toggle.innerHTML = '<i class="fas fa-sun"></i>';
        toggle.setAttribute("title", "Switch to light theme");
      } else {
        theme = "light";
        setTheme(theme);
        document.querySelector("link[rel=stylesheet][href='/css/main_dark.css']").remove();
        toggle.innerHTML = '<i class="fas fa-moon"></i>';
        toggle.setAttribute("title", "Switch to dark theme");
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(elem => {
    elem.addEventListener("click", event => {
      event.preventDefault();

      if (event.target.parentElement.classList.contains("current")) return;

      document.getElementsByClassName("current")[0].classList.remove("current");
      event.target.parentElement.classList.add("current");

      document.querySelector(event.target.attributes["href"].value).scrollIntoView({ behavior: "smooth" });
    })
  });
});

class Expandable {
  constructor(elem) {
    this.elem = elem;
    this.summary = elem.querySelector("summary");
    this.content = elem.querySelector(".content");

    this.animation = null;
    this.isClosing = false;
    this.isOpening = false;

    this.summary.addEventListener("click", (e) => this.onClick(e));
  }

  onClick(e) {
    e.preventDefault();

    const currentlyOpen = document.querySelector("details[open].smooth");
    if (currentlyOpen) {
      new Expandable(currentlyOpen).close();
    }

    if (this.isClosing || !this.elem.open) {
      this.open();
    } else if (this.isOpening || this.elem.open) {
      this.close();
    }
  }

  close() {
    this.isClosing = true;

    const fullHeight = `${this.elem.offsetHeight}px`;
    const summaryHeight = `${this.summary.offsetHeight}px`;
    
    if (this.animation) {
      this.animation.cancel();
    }

    this.animation = this.elem.animate({
      height: [fullHeight, summaryHeight]
    }, { duration: 250, easing: "ease-out"});

    this.animation.onfinish = () => this.onAnimationFinish(false);
    this.animation.oncancel = () => this.isClosing = false;
  }

  open() {
    this.elem.style.height = `${this.elem.offsetHeight}px`;
    this.elem.open = true;

    const startHeight = `${this.elem.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;

    window.requestAnimationFrame(() => {
      this.isExpanding = true;

      if (this.animation) {
        this.animation.cancel();
      }

      this.animation = this.elem.animate({
        height: [startHeight, endHeight]
      }, { duration: 250, easing: "ease-out"});

      this.animation.onfinish = () => this.onAnimationFinish(true);
      this.animation.oncancel = () => this.isOpening = false;
    })
  }

  onAnimationFinish(open) {
    this.elem.open = open;
    this.animation = null;
    this.isClosing = false;
    this.isOpening = false;

    this.elem.style.height = "";
  }
}

document.querySelectorAll("details.smooth").forEach((elem) => new Expandable(elem));

getTheme = () => {
  let b = document.cookie.match('(^|;)\\s*theme\\s*=\\s*([^;]+)');
  return b ? b.pop() : undefined;
}

setTheme = (theme) => {
  document.cookie = `theme=${theme}; expires=Fri, 31 Dec 9999 23:59:59 GMT; sameSite=strict`;
}