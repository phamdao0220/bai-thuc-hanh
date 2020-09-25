
function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveDown = function(){
        if(this.top < 400){
            this.top += 50;
            console.log(this.top)
        }

    }
    this.moveRight=function (){
        if(this.left < 900){
            this.top +=50;
        }

    }

}
let hero = new Hero('pikachu.png', 20, 30, 200);


function start(){
    hero.moveDown();
    if(hero.top < window.innerWidth - hero.size){

        hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();
