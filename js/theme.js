let b = document.cookie.match('(^|;)\\s*theme\\s*=\\s*([^;]+)');
if ((b && b.pop() === "dark") || !b && window.matchMedia("screen and (prefers-color-scheme: dark)").matches) document.getElementsByTagName("html")[0].innerHTML += "<link href='/css/main_dark.css' type='text/css' rel='stylesheet'/>";