function gamingIsToggled() {

    const gamingButton = document.querySelector('.gaming-button');

    if (gamingButton.classList.contains("is-toggled")){
        gamingButton.classList.remove('is-toggled');
    } else {
        gamingButton.classList.add('is-toggled');
    }  
}

function musicIsToggled() {

    const musicButton = document.querySelector('.music-button');

    if (musicButton.classList.contains("is-toggled")){
        musicButton.classList.remove('is-toggled');
    } else {
        musicButton.classList.add('is-toggled');
    }
}

function techIsToggled() {

    const techButton = document.querySelector('.tech-button');

    if (techButton.classList.contains("is-toggled")){
        techButton.classList.remove('is-toggled');
    } else {
        techButton.classList.add('is-toggled');
    }
}