const URL = "https://official-joke-api.appspot.com/random_joke";
const factpara = document.querySelector("#fact")
const factpara1 = document.querySelector(".fact")
const btn = document.querySelector("#btn")

// const getFacts = async () => {
//     console.log("getting data.....")
//     let response = await fetch(URL);
//     console.log(response); //json format
//     let data = await response.json();
//     factpara.innerText = data.punchline
// };


function getFacts(){
    fetch(URL)
    .then((response) =>{
        return response.json();
    })

.then((data) => {
    console.log(data);
    factpara.innerText = data.setup
    factpara1.innerText = data.punchline
    

})
}
btn.addEventListener("click",getFacts);