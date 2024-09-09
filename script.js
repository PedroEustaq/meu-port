// ANIMACAO
var lastO = document.querySelectorAll(".hidden");
var Slast = document.querySelectorAll(".Shidden");

var myObserver = new IntersectionObserver( (abacate) => {
abacate.forEach( (contar) => {
    if (contar.isIntersecting) {
        contar.target.classList.add('show');
    } else {
        contar.target.classList.remove('show');
    }
})
});

var observaSite = new IntersectionObserver( (obsSite) => {
    console.log(obsSite);
    obsSite.forEach( (contarR) => {
        if (contarR.isIntersecting) {
            contarR.target.classList.add('apareceSite');
        } else {
            contarR.target.classList.remove('apareceSite');
        }
    })
    });
lastO.forEach( (lastO) => myObserver.observe(lastO));
Slast.forEach( (Slast) => observaSite.observe(Slast));
// ANIMACAO

var S1 = document.getElementById("projetosD");
var S2 = document.getElementById("projetosD2");
var S3 = document.getElementById("projetosD3");
var S4 = document.getElementById("projetosD4");
var siteAgora = 1;
function setinhaD() {
    siteAgora += 1;
    if (siteAgora == 5) {
        siteAgora = 1;
    }
    if (siteAgora == 1) {
        S1.style.display = "flex";
    } else {
        S1.style.display = "none";
    }
    if (siteAgora == 2) {
        S2.style.display = "flex";
    }else {
        S2.style.display = "none";
    }
    if (siteAgora == 3) {
        S3.style.display = "flex";
    }else {
        S3.style.display = "none";
    }
    if (siteAgora == 4) {
        S4.style.display = "flex";
    }else {
        S4.style.display = "none";
    }
}
function setinhaE() {
    siteAgora -= 1;
    if (siteAgora == 0) {
        siteAgora = 4;
    }
    if (siteAgora == 4) {
        S4.style.display = "flex";
    } else {
        S4.style.display = "none";
    }
    if (siteAgora == 3) {
        S3.style.display = "flex";
    }else {
        S3.style.display = "none";
    }
    if (siteAgora == 2) {
        S2.style.display = "flex";
    }else {
        S2.style.display = "none";
    }
    if (siteAgora == 1) {
        S1.style.display = "flex";
    }else {
        S1.style.display = "none";
    }
}
document.getElementById('Home').addEventListener('click', function() {
    document.getElementById('contain').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('Sobre').addEventListener('click', function() {
    document.getElementById('sobre1').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('Portfolio').addEventListener('click', function() {
    document.getElementById('projetosD').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('Certificado').addEventListener('click', function() {
    document.getElementById('CertificadoArea').scrollIntoView({ behavior: 'smooth' });
});

function abrirGit() {
    window.open("https://github.com/PedroEustaq");
}
function abrirIn() {
    window.open("https://www.linkedin.com/in/pedroeu/");
}
