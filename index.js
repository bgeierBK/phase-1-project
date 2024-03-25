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
        if((bathrooms ==="yes") && (wheelchair === "yes") && (inclusive === "yes") ){
            const yesYesYes = playgrounds.filter((playground) =>{
                return (playground.bathrooms.includes("Yes")) && (playground.wheelchair === "Yes") && (playground.inclusive === "Yes") 
            })
            yesYesYes.forEach(playground =>{
                const li =document.createElement("li");
                li.textContent = playground.name
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
        

        }

        else if((bathrooms ==="yes") && (wheelchair === "no") && (inclusive === "yes") ){
            const yesNoYes = playgrounds.filter((playground) =>{
                return (playground.bathrooms.includes("Yes")) && (playground.inclusive === "Yes") 
            })
            yesNoYes.forEach(playground =>{
                const li =document.createElement("li");
                li.textContent = playground.name
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
        

        } //next one goes here

       else if((bathrooms ==="yes") && (wheelchair === "no") && (inclusive === "no") ){
            const yesNoNo = playgrounds.filter((playground) =>{
                return (playground.bathrooms.includes("Yes")) 
            })
            yesNoNo.forEach(playground =>{
                const li =document.createElement("li");
                li.textContent = playground.name
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
        

        } //next one goes here

       else if((bathrooms ==="yes") && (wheelchair === "yes") && (inclusive === "no") ){
            const yesYesNo = playgrounds.filter((playground) =>{
                return (playground.bathrooms.includes("Yes") && (playground.wheelchair === "Yes")) 
            })
            yesYesNo.forEach(playground =>{
                const li =document.createElement("li");
                li.textContent = playground.name
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
        

        } 
        else if((bathrooms ==="no") && (wheelchair === "yes") && (inclusive === "yes") ){
            const noYesYes = playgrounds.filter((playground) =>{
                return (playground.wheelchair === "Yes") && (playground.inclusive === "Yes") 
            })
            noYesYes.forEach(playground =>{
                const li =document.createElement("li");
                li.textContent = playground.name
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
        

        }
        else if((bathrooms ==="no") && (wheelchair === "no") && (inclusive === "yes") ){
            const noNoYes = playgrounds.filter((playground) =>{
                return (playground.inclusive === "Yes") 
            })
            noNoYes.forEach(playground =>{
                const li =document.createElement("li");
                li.textContent = playground.name
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
        

        }

        else if((bathrooms ==="no") && (wheelchair === "yes") && (inclusive === "no") ){
            const noYesNo = playgrounds.filter((playground) =>{
                return (playground.inclusive === "Yes") 
            })
            noYesNo.forEach(playground =>{
                const li =document.createElement("li");
                li.textContent = playground.name
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
        

        }

       else if((bathrooms ==="no") && (wheelchair === "no") && (inclusive === "no")){
       playgrounds.forEach(playground =>{
            const li =document.createElement("li");
            li.textContent = playground.name
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
    

    }
        
        
    
     })
     

     
     populateMain(playgrounds[0])
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



yesYesYes.forEach(playground =>{
    const li =document.createElement("li");
    li.textContent = playground.name
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

function populateList(array){
array.forEach(playground =>{
    const li =document.createElement("li");
    li.textContent = playground.name
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

}
