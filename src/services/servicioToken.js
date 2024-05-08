let url="https://accounts.spotify.com/api/token"
let token="Bearer BQArG5ZeeCBP9JlqYHGKCI3-qF_rNfUnAZLD6iS6mSQSud2_b6SRk4rGgoqlxZMWTDVgjWBoTtlWAxwsxz9B2cjW7prmNd4thE1_1G5qk61WHvY6ugk"
let grantType="grant_type=client_credentials"
let clienId="client_id=ab0d2a879e604fd5911e478d4c07c32f"
let clientSecret="client_secret=13da0e6ed7e44e3bbe0a7baeac28b63f"
let datosBody=grantType+'&'+clienId+'&'+clientSecret
//Creo la peticion
let peticion={
    method:"POST",
    headers:{
        "Content-Type":"application/x-www-form-urlencoded"   

    },
    body:datosBody
}

fetch(url,peticion)
.then(respuesta=>{return respuesta.json()})//todo bien 
.then(respuesta=>{console.log(respuesta)    
    let token=respuesta.token_type+" "+respuesta.access_token
    let urlCanciones="https://api.spotify.com/v1/artists/5VQCk9RiLwri99OgOT34kq/top-tracks?market=US"
    let peticionCanciones={
        method:"GET",
        headers:{
            Authorization:token
        },
    
    }
    fetch(urlCanciones,peticionCanciones)
    .then(respuesta=>{return respuesta.json()})
    .then(respuesta=>{console.log(respuesta)        
        for (let i = 1; i <= 10; i++) {
            let titulo = document.getElementById(`titulo${i}`);
            titulo.textContent = respuesta.tracks[i - 1].name;
      
            let imagen = document.getElementById(`imagen${i}`);
            imagen.src = respuesta.tracks[i - 1].album.images[0].url;
      
            let audio = document.getElementById(`audio${i}`);
            audio.src = respuesta.tracks[i - 1].preview_url;
          }
        
    })
    .catch(respuesta=>{console.log(respuesta)})



}) // todo bien
.catch(respuesta=>{console.log(respuesta)}) // error