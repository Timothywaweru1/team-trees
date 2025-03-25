document.addEventListener("DOMContentLoaded", () =>{
    const baseUrl = "http://localhost:3000/trees"
    fetch(baseUrl)
    .then(response => response.json ())
    .then (trees => {
        trees.forEach(tree => {
            document.querySelector ("h4").textContent = tree.name
            document.querySelector ("#image").src = tree.image_url
            document.querySelector ("#description").textContent = tree.description
        });
    })
    .catch (error => console.log(error))
})
