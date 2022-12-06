/*=============== SHOW SOCIAL NETWORKS ===============*/

const showSocial = (toggleCard, socialCard) => {

    const toggle = document.getElementById(toggleCard),
        social = document.getElementById(socialCard)

    toggle.addEventListener('click', () => {

        if (social.classList.contains('animation')) {
            social.classList.add('down-animation')
            setTimeout(() => {
                social.classList.remove('down-animation')
            }, 1000)

        }

        social.classList.toggle('animation')
    })
}

showSocial('card-toggle', 'card-social')