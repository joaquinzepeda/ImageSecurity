console.log('js');
// Obtiene una referencia al contenedor de imágenes en el HTML
var imageContainer = document.getElementById("image-container");
console.log(imageContainer);

// Crea una referencia al directorio de imágenes del usuario en Firebase Storage
//var userImagesRef = storage.ref("users/userID/images");
var ImagesRef = storage.ref("images");
// Obtiene la lista de imágenes en el directorio y las ordena por fecha de creación
ImagesRef.list({
  maxResults: 5,
  orderBy: [{
    field: "timeCreated",
    direction: "DESC"
  }]
}).then(function(result) {
  // Para cada imagen en la lista
  result.items.forEach(function(imageRef) {
    // Obtiene la URL de descarga de la imagen
    imageRef.getDownloadURL().then(function(url) {
      // Crea un elemento de imagen en el HTML
      var image = document.createElement("img");
      // Establece la URL de la imagen
      image.src = url;
      console.log(url);
      // Agrega la imagen al contenedor de imágenes
      imageContainer.appendChild(image);
    });
  });
}).catch(function(error) {
  console.log(error);
});














