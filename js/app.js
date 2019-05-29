

function img_highlight() {

    var imgUrl = document.querySelectorAll("input");
    var newImgUrl = ""; 

    if(imgUrl[0].checked){
        newImgUrl = imgUrl[0].labels[0].children[0].currentSrc;
    }else if(imgUrl[1].checked){
        newImgUrl = imgUrl[1].labels[0].children[0].currentSrc;
    }else if(imgUrl[2].checked){
        newImgUrl = imgUrl[2].labels[0].children[0].currentSrc;
    }

    document.querySelector("#img_destaque").src = newImgUrl;
    //var imgteste = "http://br.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/87/32/31/20028688.jpg";
    
}