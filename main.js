function calculateSphere(){
    let radius = document.getElementById("radiusBox").value;
    if (radius === "" || isNaN(radius)) {
        alert(`Radius field is required!\nInsert a number`);
        radiusBox.focus();
        event.preventDefault();
        return false;
    }

    radius = Math.abs(radius);
    let volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
    document.getElementById("volumeBox").value = volume;
    
    const myCanvas = document.getElementById("myCanvas");
    const painter = myCanvas.getContext("2d");

    if (radius <= 150) {
        const X = myCanvas.width / 2;
        const Y = myCanvas.height / 2;
        const R = radius;
        painter.beginPath();
        painter.arc(X, Y, R, 0, 2 * Math.PI);
        painter.stroke();
        
    } 
    else {
        alert(`Maximum radius is 150! \n Circle radius is bigger then canvas limit`);
        radiusBox.focus();
        event.preventDefault();
        return false;
    }
} 
 
function clearCanvas() {
    const myCanvas = document.getElementById("myCanvas");
    painter = myCanvas.getContext("2d");
    painter.clearRect(0, 0, myCanvas.width, myCanvas.height);
}

function drawInterval() {
    const myCanvas = document.getElementById("myCanvas");
    const painter = myCanvas.getContext("2d");
    const X = myCanvas.width / 2;
    const Y = myCanvas.height / 2;
    let counter = 0;
    let i = setInterval(function(){
        painter.beginPath();
        painter.arc(X, Y, counter, 0, 2 * Math.PI);
        painter.stroke();
        painter.closePath();

        counter++;
        if(counter === 150) {
        clearInterval(i);
        }
    }, 10); 
}