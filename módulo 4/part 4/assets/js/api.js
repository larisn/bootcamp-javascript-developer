
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/larisn/bootcamp-javascript-developer/main/m%C3%B3dulo%204/part%204/assets/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}