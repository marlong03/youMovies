
const container = document.getElementById("container")
const windows = document.getElementById("window")
const title = document.getElementById("title")
const pWindow = document.getElementById("pw")
const btn = document.getElementById("btn")
const imgW = document.querySelector("#imgW")
const i = document.getElementById("i")
const APIKEY = '?api_key=13876c955a407b204404206b2f444d68';
const API = 'https://api.themoviedb.org/3/movie/';

for(let i = 0; i<82;i++){

    fetch(API + i + APIKEY)
    .then(response => response.json())
    .then (res => {
        
        if(res.title != undefined && res.poster_path != null){

            let div = document.createElement("div")
            div.classList.add("movie")
            container.appendChild(div)

            div.innerHTML = ' <div class="cont_img"><img src="' 
            + 'https://image.tmdb.org/t/p/w500/' + res.poster_path 
            + '" alt=""></div><div class="cont"><div class="cont_des"><h3>' 
            + res.title + '</h3></div><div class="cont_but"><i class="i">ver</i></div><p>'+ res.overview+'</p></p></div>'
            container.addEventListener("click",function(x){
                console.log(x.path[3].childNodes[1].childNodes[0].src);
                imgW.src = x.path[3].childNodes[1].childNodes[0].src
                windows.style.display="flex";
                title.innerHTML = x.path[2].children[0].childNodes[0].childNodes[0].data 
                pWindow.innerHTML = x.path[2].children[2].childNodes[0].data;
                console.log(x.path[2].children[0].childNodes[0].childNodes[0].data);
                console.log(x);
            })   
        }
    })
}

btn.addEventListener("click", function (){
    windows.style.display="none";
 
})