
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/BrunoOliveira16/Formacao-JavaScript-Web-Developer-DIO/main/TRILHA-JAVASCRIPT-MODULO-04/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}

