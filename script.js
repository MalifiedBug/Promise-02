async function getData(){
    await fetch("https://api.nasa.gov/planetary/apod?api_key=52urUnnUDI8sDKhPLLGxg9Tug67EXIPbh2KpgUKa")
    .then((res)=>res.json())
    .then((data)=>{console.log(data)
        document.getElementById("container").innerHTML = `<div class="card">
        <img src=${data.hdurl} alt=${data.copyright}>
        <h3>Copyright of: ${data.copyright} </h3>
        <h4>Title: ${data.title}</h4>
        <p>Date: ${data.date}</p>
        <p>Explanation: ${data.explanation}</p>

    </div>`
    
    })

}

