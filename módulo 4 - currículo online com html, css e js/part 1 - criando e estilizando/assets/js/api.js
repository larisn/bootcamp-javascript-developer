
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/larisn/bootcamp-javascript-developer/main/m%C3%B3dulo%204%20-%20curr%C3%ADculo%20online%20com%20html%2C%20css%20e%20js/part%201%20-%20criando%20e%20estilizando/assets/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
