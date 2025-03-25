document.addEventListener ("DOMContentLoaded",() =>{
    const baseUrl = "http://localhost:3000/trees"
    function displayTrees (trees) {
        trees.forEach(tree=> {
            let html = `
            <div>
                <h3>${tree.name}</h3>
                <img src="${tree.image_url}" alt="" id="image">
                <p id="description">${tree.description}</p>
            </div>
            `
            let about_trees = document.getElementById('about-trees')

            about_trees.innerHTML += html
            // document.querySelector ("h3").textContent += tree.name
            // document.querySelector ("img").src = tree.image_url
            // document.querySelector ("#description").textContent = tree.description
        });
        
    }
    fetch (baseUrl)
    .then (response => response.json())
    .then (data => displayTrees (data))
     
})
