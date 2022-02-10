console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => displayImages(data))

    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => { displayBreeds(data)

    document.getElementById('breed-dropdown').addEventListener('change', event => {
        displayBreeds(data)
    })
})
})

const displayImages = (dogs) => {
    const imageContainer = document.querySelector("#dog-image-container")
    dogs.message.forEach(element => {
        const img = document.createElement("img")
        img.setAttribute('src', element)
        imageContainer.appendChild(img)
    })
}

const displayBreeds = (breeds) => {
    const dogBreeds = document.querySelector('#dog-breeds')
    dogBreeds.innerHTML = ""
    for (const breed in breeds.message) {
        if (breed[0] === document.getElementById('breed-dropdown').value) {
        const li = document.createElement('li')
        li.innerText = breed
        li.addEventListener('click', changeColor)
        dogBreeds.appendChild(li)
        }
    }
}

const changeColor = (event) => {
    event.target.style.color = 'blue'
}