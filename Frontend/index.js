let container = document.getElementById("container")

let api = "https://app-ndfd.onrender.com/users"

async function fetchData(url){
    try{

        let res = await fetch(url)

        let data = await res.json()

        console.log(data)

        appendData(data)
    }
    catch(err){
        console.log(err)
    }
}

fetchData(api)

function createCard(item){

    let div = document.createElement("div")
    div.classList.add("main")

    let id = document.createElement("p")
    let name = document.createElement("h3")
    let age = document.createElement("h5")
    let image = document.createElement("img")

    id.innerText = item.id
    name.innerText = item.name
    age.innerText = item.age
    image.src = item.image
    image.style.height = "100px"

    div.append(id, image, name, age)

    return div
}

function appendData(user){
    container.innerHTML = ""

    user.forEach((ele)=>{
        let card = createCard(ele)

        container.append(card)
    })
}