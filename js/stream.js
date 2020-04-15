const player = document.getElementById('player');

function showStream(stream){
    player.srcObject = stream;
}

navigator.mediaDevices.getUserMedia({video: true})
    .then(showStream)
    .catch(function(err){
        //alert("Sem acesso à câmera.");
    });


    
