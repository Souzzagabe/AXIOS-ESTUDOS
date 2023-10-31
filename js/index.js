const searchRepository = document.querySelector(".search")
const clear = document.querySelector(".clear")

const repo = document.querySelector("#repos")
const userName = document.querySelector("#userName")


bringRepositoy = () => {
    axios
        .get(`https://api.github.com/users/${userName.value}/repos`)
        .then((response) => {
            const repos = response.data
            console.log(repos)

            for(i in repos) {
                console.log(repos[i])

                let element = document.createElement("li")
                element.innerHTML = JSON.stringify(repos[i].url)

                repo.appendChild(element)
            }

        })

        .catch((error) => console.error(error))
}

searchRepository.addEventListener("click", () => {
    bringRepositoy()
})
clear.addEventListener("click", () => {
    location.reload()
})
