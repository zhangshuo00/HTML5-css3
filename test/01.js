var dropBox = document.getElementById('dropBox');
    document.ondragover = function(e){
        e.preventDefault();
    }
    document.ondrop = function(e){
        e.preventDefault();
    }
    dropBox.ondragover = function(e){
        e.preventDefault();
    }
    dropBox.ondrop = function(e){
        console.log("释放图片");
        var file = e.dataTransfer.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e){
            var img = new Image();
            img.src = reader.result;
            dropBox.appendChild(img);
        }
    }