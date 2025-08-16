fetch(" https:api.giphy.com/v1/gifs/random?api_key=CtXxWB97KhrvzLrF4e5f21ckDIfcZ8fk ")
.then( function(response){
  return response.json();
})
.then(function(jsonData){
  console.log(jsonData);
})