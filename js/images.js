const imageDiv = document.querySelector(".user-images");
const button = document.querySelector("#button-photo");
const canvas = document.querySelector("#image");


function takePicture(){
    const context = canvas.getContext('2d');
    context.drawImage(player, 0, 0, canvas.width, canvas.height);

    var data = canvas.toDataURL('image/png');
    var image = document.createElement('img');
    image.setAttribute('src', data);
    imageDiv.append(image);
}

button.addEventListener("click", takePicture);