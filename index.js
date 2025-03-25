document.addEventListener ("DOMContentLoaded", () =>{
    const baseUrl = "http://localhost:3000/plants"
    function create () {
        let block = document.createElement ("div")
        const heading = document.createElement ("h5")
        document.body.append (block)
        block.appendChild (heading)
        for (i = 0 ; i < 1 ; i ++) {
            let img = document.createElement ("img")
            block.appendChild (img)
        }

        block.setAttribute ("id" , "tree-section")
        let description = document.createElement ("div")
        block.appendChild (description)
        description.setAttribute ("class", "about-tree")
    }
    create ()
    fetch (baseUrl)
    .then (response => response.json ())
    .then (plants => {
        plants.forEach(plant => {
            let img = document.querySelector ("img")
            img.src = plant.imageUrl

        });
    })
})