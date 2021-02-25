// https://icanhazdadjoke.com/

const joke=document.getElementById("joke");
const jokebtn=document.querySelector("#jokeBtn");

//// promises
// const getJokes = () =>{
//     const setHeaders={
//         headers:{
//            Accept:  "application/json"
//         }
//     }
//     fetch(' https://icanhazdadjoke.com/', setHeaders)
//     .then((res) => res.json())
//     .then((data) => joke.innerHTML=data.joke)
//     .catch((error)=> console.log(error))
// }

//// async
// async function getJokes(){}
const getJokes = async () =>{
    const setHeaders={
        headers:{
           Accept:  "application/json"
        }
    }
    const res= await fetch(' https://icanhazdadjoke.com/', setHeaders);
    const data=await res.json();
    joke.innerHTML=data.joke;
}

jokebtn.addEventListener('click',getJokes);
getJokes();