const cIcons = {
    "light": `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>`,
    "dark": `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>`
}
const cIcon = document.getElementById('themeIcon');

function giscusRender(theme) {
    if (document.head.dataset['comments-enabled'] == 'true'){

    
        baseUrl = document.head.dataset['baseUrl'];
        themes = {
            "dark": `${baseUrl}css/gs_dark.css`,
            "light":`${baseUrl}css/gs_light.css`
        }
        giscus = document.getElementById('giscusScript');
        if (giscus){
            giscus.remove();
        }
        let js = document.createElement('script');
        js.setAttribute("id", 'giscusScript')
        js.setAttribute("src", document.head.dataset['giscus-src'])
        js.setAttribute("data-repo", document.head.dataset['giscus-repo'])
        js.setAttribute("data-repo-id", document.head.dataset['giscus-repo-id'])
        js.setAttribute("data-category", document.head.dataset['giscus-category'])
        js.setAttribute("data-category-id", document.head.dataset['giscus-category-id'])
        js.setAttribute("data-mapping", document.head.dataset['giscus-mapping'])
        js.setAttribute("data-strict",document.head.dataset['giscus-strict'])
        js.setAttribute("data-reactions-enabled",document.head.dataset['giscus-reactions-enabled'])
        js.setAttribute("data-emit-metadata", document.head.dataset['giscus-emit-metadata'])
        js.setAttribute("data-input-position", document.head.dataset['giscus-input-position'])
        js.setAttribute("data-theme", themes[theme])
        js.setAttribute("data-lang", document.head.dataset['giscus-lang'])
        js.setAttribute("crossorigin", document.head.dataset['giscus-crossorigin'])
        js.setAttribute("nonce", document.head.dataset['giscus-nonce'])
        js.async = true;
        commentsBase = document.getElementById('giscusWidget');
        commentsBase.appendChild(js)
    }
}

function setStartTheme(){
    let targetColorTheme = '';
    let currentTheme = localStorage.getItem('color-theme');
    if (currentTheme != null) {
        targetColorTheme = currentTheme
    } else { 
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        if (darkThemeMq.matches) {
            targetColorTheme = 'dark';
        } else {
            targetColorTheme = 'light';
        }
    }
    cIcon.innerHTML = cIcons[targetColorTheme];
    document.documentElement.setAttribute('color-theme', targetColorTheme);
    localStorage.setItem('color-theme',targetColorTheme);
    giscusRender(targetColorTheme)
}



function switchTheme() {
    current = document.documentElement.getAttribute('color-theme')
    if (current == 'dark') {
        targetColorTheme = 'light';
    }
    if ( current == 'light') {
        targetColorTheme = 'dark';
    }
    document.documentElement.setAttribute('color-theme', targetColorTheme);
    cIcon.innerHTML = cIcons[targetColorTheme];
    localStorage.setItem('color-theme',targetColorTheme);
    giscusRender(targetColorTheme)
}


document.getElementById("themeIcon").addEventListener("click", switchTheme);