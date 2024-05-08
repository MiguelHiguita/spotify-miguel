//consumiendo APIS
/* 
1. Declarar una variable para almacenar la URL del API
2. Almacenar en una variable o en varias variables datos de control que se necesiten en el API
3. Construir la peticion que se va a enviar 
4. Ejecutar el consumo del API
*/

let url="https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD/top-tracks?market=US"
let token="Bearer BQArG5ZeeCBP9JlqYHGKCI3-qF_rNfUnAZLD6iS6mSQSud2_b6SRk4rGgoqlxZMWTDVgjWBoTtlWAxwsxz9B2cjW7prmNd4thE1_1G5qk61WHvY6ugk"
let peticion={
    method:"GET",
    headers:{
        Authorization:token
    },

}
fetch(url,peticion)
.then(function(){})
.then(function(){})
.catch(function(){})