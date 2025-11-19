// ANIMACAO
var lastO = document.querySelectorAll(".hidden");
var Slast = document.querySelectorAll(".Shidden");
var myObserver = new IntersectionObserver((abacate) => {
    if (window.innerWidth <= 768) {
        console.log("Script desativado no mobile");
        return; // Sai do script se for mobile
    } else {
    abacate.forEach((contar) => {
        if (contar.isIntersecting) {
            contar.target.classList.add('show');
        } else {
            contar.target.classList.remove('show');
        }
    })}
});

var observaSite = new IntersectionObserver((obsSite) => {
    if (window.innerWidth <= 768) {
        console.log("Script desativado no mobile");
        return; // Sai do script se for mobile
    } else {
    console.log(obsSite);
    obsSite.forEach((contarR) => {
        if (contarR.isIntersecting) {
            contarR.target.classList.add('apareceSite');
        } else {
            contarR.target.classList.remove('apareceSite');
        }
    })}
});
lastO.forEach((lastO) => myObserver.observe(lastO));
Slast.forEach((Slast) => observaSite.observe(Slast));
//====================================================

// ARRASTAR
document.getElementById('Home').addEventListener('click', function () {
    document.getElementById('contain').scrollIntoView({ behavior: 'smooth' });
});

document.getElementsByClassName('Home')[0].addEventListener('click', function () {
    document.getElementById('contain').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('Sobre').addEventListener('click', function () {
    document.getElementById('textReal').scrollIntoView({ behavior: 'smooth' });
});

document.getElementsByClassName('Sobre')[0].addEventListener('click', function () {
    document.getElementById('textReal').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('Portfolio').addEventListener('click', function () {
    document.getElementById('projetosD').scrollIntoView({ behavior: 'smooth' });
});
document.getElementsByClassName('Portfolio')[0].addEventListener('click', function () {
    document.getElementById('projetosD').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('Contato').addEventListener('click', function () {
    document.getElementsByClassName('EntreEmContato')[0].scrollIntoView({ behavior: 'smooth' });
});
document.getElementsByClassName('Contato')[0].addEventListener('click', function () {
    document.getElementsByClassName('EntreEmContato')[0].scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('Certificado').addEventListener('click', function () {
    document.getElementById('CertificadoArea').scrollIntoView({ behavior: 'smooth' });
});
//====================================================

function abrirAcademico() {
    window.open("https://github.com/PedroEustaq/Projetos-Academicos-Geral");
}

function abrirCert() {
    window.open("Certificados.pdf");
}










// THEME SWITCH
document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('mudartemaID');
    const temaGuardado = localStorage.getItem('temadapagina');
    
    // Carregar tema salvo
    if (temaGuardado === 'light') {
        document.body.classList.add('light-mode');
        themeSwitch.checked = true;
    }
    
    // Alternar tema
    themeSwitch.addEventListener('change', function() {
        document.body.classList.toggle('light-mode');
        localStorage.setItem('temadapagina', document.body.classList.contains('light-mode') ? 'light' : 'dark');
    });
});

