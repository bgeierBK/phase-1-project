fetch("https://api.nhle.com/stats/rest/en/")
.then(response => response.json())
.then(playersgit =>{
    pokemon.forEach(monster =>{
        const li = document.createElement("li");
        li.textContent = monster.name;
        document.querySelector("#list").append(li);
    }
        )
}
    )