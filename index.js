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
    const form = document.querySelector ("#form-1")
    form.addEventListener ("submit", function (event) {
        event.preventDefault ()
        let username = document.querySelector (".username").value
        let username2 = document.querySelector (".username2").value
        const email = document.querySelector (".email").value
        const password = document.querySelector (".alert").value
        console.log(username2);
        console.log(username);
        console.log(email);
        console.log(password);
    })

    // to show name on top
    document.querySelector ("#click").onclick = function (){
        let username = document.querySelector (".username").value
        let username2 = document.querySelector (".username2").value
        document.querySelector ("h2").textContent = `Hello ${username} ${username2}...`   
     }

     // fetching images
    fetch (baseUrl)
    .then (response => response.json())
    .then (data => displayTrees (data))
     
})
