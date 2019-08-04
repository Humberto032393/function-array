//Lightning exercise:
// create an array of your top five favorite bands (at least 5)
// write a function that takes an array of bands as an argument and logs each name to the console 

const favoriteBands = ["Mana", "Aventura", "RBD", "SPM", "Kinto Sol" ]

const displayBands = (bandsArray) => {
   bandsArray.forEach(band => {
       console.log(band)
       
   });
}


displayBands(favoriteBands)

// added and ice cream example

const favoriteIceCreams = ["chocolate", "vanilla", "straberry", "hazelnut", "dulce de leche"]

const displayIceCreams = (iceCreamArray) => {
iceCreamArray.forEach(iceCream => {
console.log(iceCream)
   });
}

displayIceCreams(favoriteIceCreams)