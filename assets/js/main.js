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

  document.getElementsByTagName("body")[0].addEventListener("click", e => {
    if (e.target.parentElement.id === "close-button") {
      document.getElementById("cover").classList.replace("show-cover", "hide-cover");
      setTimeout(() => document.getElementById("cover").remove(), 300);
    }
  });

  [...document.getElementsByClassName("project-entry")].forEach(elem => {
    elem.addEventListener("click", () => {
      if (window.matchMedia("only screen and (max-device-width: 480px)").matches) {
        window.location = elem.dataset.url;
      } else {
        document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend",
          `<div id="cover" class="hide-cover">
          <div class="page-content-center" id="cover-content"></div>
          </div>`
        );

        // small delay before making visible - fade in animation doesn't work otherwise
        setTimeout(() => document.getElementById("cover").classList.replace("hide-cover", "show-cover"), 50);

        fetch(elem.dataset.url)
          .then(r => r.text())
          .then(t => {
            let temp = document.createElement("span");
            temp.innerHTML = t;
            document.getElementById("cover-content").appendChild(temp.getElementsByClassName("center-window")[0]);

            let header = document.querySelector(".page-content-center > .center-window > header");
            header.insertAdjacentHTML("afterbegin", "<div class='left'></div>");
            header.insertAdjacentHTML("beforeend", "<div class='right'><div id='close-button' title='Close'><i class='far fa-times-circle'></i></div></div>");

            createGallery();
          });
      }
    });
  });

  [...document.getElementsByClassName("skill-display")].forEach(elem => {
    elem.addEventListener("click", (e) => {
      [...document.getElementsByClassName("skill-open")].forEach(open => { open.classList.remove("skill-open") });
      e.currentTarget.parentElement.classList.add("skill-open");
    });
  })
});

getTheme = () => {
  let b = document.cookie.match('(^|;)\\s*theme\\s*=\\s*([^;]+)');
  return b ? b.pop() : undefined;
}

setTheme = (theme) => {
  document.cookie = `theme=${theme}; expires=Fri, 31 Dec 9999 23:59:59 GMT; sameSite=strict`;
}