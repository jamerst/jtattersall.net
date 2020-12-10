document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("theme-switch")) {
    let theme = getTheme();

    if (theme && theme === "light" || !theme && window.matchMedia("screen and (prefers-color-scheme: light)").matches) {
      document.getElementById("theme-switch").textContent = "Switch to Dark Theme";
    } else {
      document.getElementById("theme-switch").textContent = "Switch to Light Theme";
    }

    document.getElementById("theme-switch").addEventListener("click", () => {
      if (theme === "light") {
        theme = "dark";
        setTheme(theme);
        document.getElementsByTagName("html")[0].lastChild.insertAdjacentHTML("beforeend", "<link href='/css/main_dark.css' type='text/css' rel='stylesheet'/>");
        document.getElementById("theme-switch").textContent = "Switch to Light Theme";
      } else {
        theme = "light";
        setTheme(theme);
        document.querySelector("link[rel=stylesheet][href='/css/main_dark.css']").remove();
        document.getElementById("theme-switch").textContent = "Switch to Dark Theme";
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(elem => {
    elem.addEventListener("click", event => {
      event.preventDefault();

      if (event.target.parentElement.classList.contains("current-page")) return;

      document.getElementsByClassName("current-page")[0].classList.remove("current-page");
      event.target.parentElement.classList.add("current-page");

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
});

getTheme = () => {
  let b = document.cookie.match('(^|;)\\s*theme\\s*=\\s*([^;]+)');
  return b ? b.pop() : undefined;
}

setTheme = (theme) => {
  document.cookie = `theme=${theme}; expires=Fri, 31 Dec 9999 23:59:59 GMT; sameSite=strict`;
}