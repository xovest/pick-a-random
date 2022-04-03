function catter() {
  fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(x => document.querySelector("body > div.card_img > img").src = x.file)
}

function dogger() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(x => document.querySelector("body > div.card_img > img").src = x.message)
}

function bunnyer() {
  fetch('https://api.bunnies.io/v2/loop/random/?media=gif,png')
    .then(res => res.json())
    .then(x => document.querySelector("body > div.card_img > img").src = x.media.poster)
}

function foxer() {
  fetch('https://randomfox.ca/floof/')
    .then(res => res.json())
    .then(x => document.querySelector("body > div.card_img > img").src = x.image)
}

document.querySelector("#cat").addEventListener('click', catter)
document.querySelector("#dog").addEventListener('click', dogger)
document.querySelector("#bunny").addEventListener('click', bunnyer)
document.querySelector("#fox").addEventListener('click', foxer)