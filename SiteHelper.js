/*
    SiteHelper by Entertainmasters
    Concept by Copy05
*/

const Footer = document.getElementById("footer")
const Header = document.getElementById("header")
const MobileNavBar = document.getElementById("mobilenavbar")
const Hamburger = document.getElementById("mnb-hamburger")

const HeaderHTML = `
<a href="index.html" class="logohref">
            <p class="logo">CopyWealth</p>
</a>
        <ul class="nav_links">
        <li><a class="dktl" href="./index.html#about">About</a></li>
        <li><a class="dktl" href="./quotes.html">Quotes</a></li>
        <li><a class="dktl" href="./digital-tools.html">Digital Tools</a></li>
        <li><a class="dktl contactlink" href="./apply.html">Work with me</a></li>
        <li id="mnb-hamburger"><a href="#" id="mnb-hamburger-btn">≡</a></li>
        </ul>
`

const MobileNavBarHTML = `
<div class="mnb_links">
    <a class="mnb-link" href="./index.html#about">About</a>
    <a class="mnb-link" href="./quotes.html">Quotes</a>
    <a class="mnb-link" href="./digital-tools.html">Digital Tools</a>
    <li><a href="./apply.html" class="mnb-contactlink mnb-link">Work with me</a></li>
</div>
`

const FooterHTML = `
        <p class="copyright">&copy; Copyright CopyWealth, ${new Date().getFullYear().toString()}.</p>

        <div class="socials">
            <a href="https://www.youtube.com/@CopyWealth" class="sociallink"><img class="footersocial" alt="CopyWealth Youtube Link" src="https://copy05.github.io/Portfolio/pics/youtubelogo.png" height="30"></a>
            <a href="https://twitter.com/CopyWealthiest" class="sociallink"><img class="footersocial" alt="CopyWealth Twitter Link" src="https://copy05.github.io/Portfolio/pics/twitterlogo.png" height="30"></a>
            <a href="https://discord.gg/JSRHqSZ" class="sociallink"><img class="footersocial" alt="CopyWealth Discord Link" src="https://copy05.github.io/Portfolio/pics/discordlogo.png" height="40"></a>
            <a href="https://instagram.com/copywealthy" class="sociallink"><img class="footersocial" alt="CopyWealth Instagram Link" src="https://copy05.github.io/Portfolio/pics/instagramlogo.png" height="30"></a>
            <a href="https://www.tiktok.com/@copywealth" class="sociallink"><img class="footersocial" alt="CopyWealth Tiktok Link" src="https://entertainmasters.com/src/tiktoklogo.png" height="30"></a>
            <a href="https://github.com/Copy05" class="sociallink"><img class="footersocial" alt="CopyWealth Tiktok Link" src="https://copy05.github.io/Portfolio/pics/githubicon.png" height="30"></a>
        </div>
`

document.addEventListener('DOMContentLoaded', e => {

    Footer.innerHTML = FooterHTML;
    Header.innerHTML = HeaderHTML;
    MobileNavBar.innerHTML = MobileNavBarHTML;

    const Hamburger = document.getElementById("mnb-hamburger-btn")

    Hamburger.addEventListener("click", (e) => {

        if(MobileNavBar.style.display === "none"){
            MobileNavBar.style.display = "block"
            Hamburger.innerText = "X"
            return;
        }
        if(MobileNavBar.style.display === "block"){
            MobileNavBar.style.display = "none"
            Hamburger.innerText = "≡"
            return;
        }

    })

})

