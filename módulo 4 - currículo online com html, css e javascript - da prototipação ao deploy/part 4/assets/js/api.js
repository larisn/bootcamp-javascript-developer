
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/larisn/bootcamp-javascript-developer/main/m%C3%B3dulo%204%20-%20curr%C3%ADculo%20online%20com%20html%2C%20css%20e%20javascript%20-%20da%20prototipa%C3%A7%C3%A3o%20ao%20deploy/part%204/assets/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}