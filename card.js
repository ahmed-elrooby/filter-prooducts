const container = document.getElementById("container");
fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=0bd0730b59625b4570f8f531b92473f1")
.then((res)=> res.json())
.then((data)=>{

    data.results.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("card")
        const img = document.createElement("img");
        img.src= `https://image.tmdb.org/t/p/original/${element.poster_path}`;
        const h = document.createElement("h1");

        h.textContent = element.title;

        const ul = document.createElement("ul");
        ul.classList.add("flex")
        element.genre_ids.forEach((item)=>{
            const genners = document.createElement("li");
genners.textContent= item;
ul.appendChild(genners);
div.appendChild(ul)
        })

        //vote_average
        const span = document.createElement("span");
        span.classList.add("vote")
        span.textContent = element.vote_average.toFixed(1);
        div.appendChild(span);

        div.appendChild(img);
        div.appendChild(h)
        container.appendChild(div)
    });
} )
