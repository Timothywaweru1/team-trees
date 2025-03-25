document.addEventListener ("DOMContentLoaded",() =>{
    const baseUrl = "http://localhost:3000/trees"
    function displayTrees (trees) {
        trees.forEach(tree=> {
            let html = `
            <div id = "box">
                <h3>${tree.name}</h3>
                <img src="${tree.image_url}" alt="" id="image">
                <p id="description">${tree.description}</p>
            </div>
            `
            let about_trees = document.getElementById('about-trees')

            about_trees.innerHTML += html

        });
        
    }
    let parent = document.querySelector ("#about-trees")
    let children = parent.children
    
    console.log(children);
    
    
    
    fetch (baseUrl)
    .then (response => response.json())
    .then (data => displayTrees (data))
     
})
