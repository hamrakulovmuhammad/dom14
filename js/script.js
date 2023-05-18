fetch('https://jsonplaceholder.typicode.com/photos')
    .then(i => i.json())
    .then(item => reload(item))


let body = document.querySelector('body')
function reload(arr) {
    for (let i of arr) {
        let box = document.createElement('div')
        let img = document.createElement('img')
        let p = document.createElement('p')
        p.classList.add('p')
        img.classList.add('img')

        img.src = i.thumbnailUrl
        p.innerHTML = i.title

        body.append(box)
        box.append(img, p)
    }

}