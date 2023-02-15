function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`

    const site1 = document.getElementById('profile.site1')
    site1.innerText = `Meu Linkedin`
    site1.href = profileData.site1

    const site2 = document.getElementById('profile.site2')
    site2.innerText = `Meu GitHub`
    site2.href = profileData.site2
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill =>` 
        <li class="skills__container--tools">
            <img src="${skill.logo}" alt="Icone do ${skill.name}" title="${skill.name}" class="skills__container--img">
        </li>
        `
    ).join('')
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill =>
        `<li class="skills__list--item">${skill}</li>`
    ).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language=>`
        <li class="language__item">${language}</li>
    `).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
        <li class="portfolio__item">
            <span class="portfolio__item--title">${project.name}</span>
            <a href="${project.demo}" class="portfolio__item--link" target="_blank">Demonstração do Projeto</a>
            <a href="${project.url}" class="portfolio__item--link" target="_blank">Repositório do GitHub</a> 
        </li>
        `
    }).join('')
}

function updateExperience(profileData) {
    const professionalExperience = document.getElementById('profile.experience')
    professionalExperience.innerHTML = profileData.experience.map(experience => {
        return `
        <li class="experience__item">
            <h2 class="experience__item--title">${experience.name}</h2>
            <p class="experience__item--company">${experience.company}</p>
            <p class="experience__item--time">${experience.date}</p>
            <p class="experience__item--description">${experience.description}</p> 
        </li>
      `
    }).join('')
}

(async()=> {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateHardSkills(profileData)
    updateSoftSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateExperience(profileData)
})()

