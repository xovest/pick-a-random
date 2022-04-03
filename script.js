fetch('https://randomfox.ca/floof/')
  .then(res => res.json())
  .then(x => {
    console.log(x);
    document.querySelector("body > div.card_img > img").src = x.image;
    //cat => x.file
    //dog => x.message
    //bunny => x.media.poster
    //fox => x.image
  })
//https://aws.random.cat/meow
//https://dog.ceo/api/breeds/image/random
//https://api.bunnies.io/v2/loop/random/?media=gif,png
//https://randomfox.ca/floof/