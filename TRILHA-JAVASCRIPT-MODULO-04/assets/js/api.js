
async function fetchProfileData() {
    const url = '../../data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}