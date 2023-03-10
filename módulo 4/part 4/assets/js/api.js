
async function fetchProfileData() {
    const url = 'https://github.com/larisn/bootcamp-javascript-developer/blob/main/m%C3%B3dulo%204/part%204/assets/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}