let autos = [
    "url(http://cdn.imagin.studio/getImage?customer=img&make=aiways&modelFamily=u5&width=2600&zoomType=fullscreencdn.imagin.studio/)",
    "url(https://cdn.imagin.studio/getImage?customer=img&make=cupra&modelFamily=ateca&width=2600&zoomType=fullscreen&paintId=pspc0138)",
    "url(https://cdn.imagin.studio/getImage?customer=img&make=infiniti&modelFamily=qx30&width=2600&zoomType=fullscreen&paintId=pspc0256)",
    "url(http://cdn.imagin.studio/getImage?customer=img&make=ldv&modelFamily=deliver-9&width=2600&zoomType=fullscreencdn.imagin.studio/)",
    "url(http://cdn.imagin.studio/getImage?customer=img&make=mazda&modelFamily=cx-30&width=2600&zoomType=fullscreen&paintId=pspc0278)",
    "url(http://cdn.imagin.studio/getImage?customer=img&make=renault&modelFamily=duster&width=2600&zoomType=fullscreen&paintId=pspc0124)",
    "url(http://cdn.imagin.studio/getImage?customer=img&make=volkswagen&modelFamily=atlas&width=2600&zoomType=fullscreen&paintId=pspc0220sspc0004)",
    "url(http://cdn.imagin.studio/getImage?customer=img&make=ford&modelFamily=bronco&width=2600&zoomType=fullscreen&paintId=pspc0092)",
    "url(http://cdn.imagin.studio/getImage?customer=img&make=mercedes&modelFamily=eqe&width=2600&zoomType=fullscreen&paintId=pspc0004sspc0033)"
]

let aux = 0;
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let imgtop1 = document.getElementById("imgtop1");
let imgtop2 = document.getElementById("imgtop2");
let imgtop3 = document.getElementById("imgtop3");
let imgtop4 = document.getElementById("imgtop4");
let arrowizq = document.getElementById("aiz")
let arrowder = document.getElementById("adr")

let interval = setInterval(mostrarAutos,10000)

mostrarAutos();

arrowizq.addEventListener("click",()=>{
    aux--;
    aux--;
    mostrarAutos();
})

arrowder.addEventListener("click",()=>{
    mostrarAutos();
})


function mostrarAutos(){
    aux++;
    if(aux == -1){
        aux = 7;
        img1.style.backgroundImage = autos[aux-1];
        img2.style.backgroundImage = autos[aux];
        img3.style.backgroundImage = autos[aux+1];
    }
    else if(aux == 0){
        img1.style.backgroundImage = autos[aux+8];
        img2.style.backgroundImage = autos[aux];
        img3.style.backgroundImage = autos[aux+1];
    }
    else if(aux > 7){
        img1.style.backgroundImage = autos[aux-1];
        img2.style.backgroundImage = autos[aux];
        img3.style.backgroundImage = autos[0];
        aux = 0;
    }else{
        img1.style.backgroundImage = autos[aux-1];
        img2.style.backgroundImage = autos[aux];
        img3.style.backgroundImage = autos[aux+1];
    }
}

imgtop1.style.backgroundImage = autos[1];
imgtop2.style.backgroundImage = autos[3];
imgtop3.style.backgroundImage = autos[5];
imgtop4.style.backgroundImage = autos[8];

