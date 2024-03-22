fetch("http://localhost:3000/playgrounds")
.then(response=> response.json())
.then(playgrounds=>{
    playgrounds.forEach(playground=>{
        const li = document.createElement("li");
        li.textContent=playground.name;
        li.setAttribute("id", "playground " + playground.id);
        li.addEventListener("mouseover", () =>{
            li.textContent = (playground.name + ": " + playground.location)
        li.addEventListener("mouseout", ()=>{
            li.textContent = (playground.name)
        li.addEventListener("click", ()=>{
            populateMain(playground)
        })
        })
        })
        document.querySelector("#playgroundList").append(li)
     })
     document.querySelector("form").addEventListener("submit", event =>{
        event.preventDefault();
        document.querySelector("#playgroundList").innerHTML="";
        const bathrooms = document.querySelector('input[name="bathrooms"]:checked').value
        const wheelchair= document.querySelector('input[name="wheelchair"]:checked').value
        const inclusive = document.querySelector('input[name="inclusive"]:checked').value
     
        console.log(bathrooms)
        console.log(wheelchair)
        console.log(inclusive)
     })
})

function populateMain(playground){
    document.querySelector("#playgroundName").textContent = playground.name;
    document.querySelector("#playgroundPhoto").src = playground.photo;
    document.querySelector("#playgroundAddress").textContent ="Address: " + playground.location;
    document.querySelector("#playgroundBathrooms").textContent = "Bathrooms: " + playground.bathrooms;
    document.querySelector("#playgroundWheelchair").textContent = "Wheelchair Access: " + playground.wheelchair;
    document.querySelector("#playgroundInclusive").textContent ="Inclusive Play Elements: " + playground.inclusive;
    document.querySelector("#playgroundAmenities").textContent ="Amenities: " + playground.amenities
}

