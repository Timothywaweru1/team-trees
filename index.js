document.addEventListener ("DOMContentLoaded",() =>{
    const baseUrl = "http://localhost:3000/trees"
    function displayTrees (trees) {
        trees.forEach(tree=> {
            let html = `
            <div id = "box">
            <h3>${tree.name}</h3>
            <img src="${tree.image_url}" alt="" id="image">
            <p id="description">${tree.description}</p>
            
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
    
    // fetching image
    fetch (baseUrl)
    .then (response => response.json())
    .then (data => displayTrees (data))
    // to show name on top
    document.querySelector ("#click").onclick = function (){
        let username = document.querySelector (".username").value
        let username2 = document.querySelector (".username2").value
        document.querySelector ("h2").textContent = `Hello ${username} ${username2}...`   
    }
    // password
    //  let eyeIcon = document.querySelector ("#password-eye")
    //  let password = document.querySelector (".alert")
    //  eyeIcon.addEventListener ("onclick",function (){
        //     if (password.type === "password") {
            //         password.type = "text"
            //     } else {
                //         password.type = "password"
                //     }
                //  })
                
                // posting trees in the website
                const form2 = document.querySelector ("#form-2")
                form2.addEventListener ("submit" , function (e) {
                    e.preventDefault ()
                    const nameOfTree = document.querySelector (".name").value
                    let newsOfTree = document.querySelector (".news-of-tree").value
                    const img = document.querySelector (".url").value
                    
                    const treeObject = {
                        name : nameOfTree,
                        description : newsOfTree,
                        image_url : img
                    }
                    
                    console.log(treeObject);
                    
                    fetch ("http://localhost:3000/trees", {
                        method : "POST" ,
                        headers : {
                            "Content-Type" : "application/json"
                        },
                        body : JSON.stringify  (treeObject)
                    })
                    .then (response => response.json ())
                    .then (data => console.log (data))
                    .catch (error => console.error(error)
                )
            })
            // deleting images of trees 
            // function deleteTree (tree_id) {
                //     fetch (`${baseUrl}/${tree_id}`, {
                    //         method : "DELETE",
                    //         headers : {
                        //             "Content-type" : "application/json"
                        //         }
                        //     })
                        //     .then (response => response.json ())
                        //     .then (data => console.log (data))
                        //     .catch (error => console.log (error) )
                        // }
                        
                    })
                    