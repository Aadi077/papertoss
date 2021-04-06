class Bucket {
    constructor(){
        this.sideone = new Ground(1000,580,200,15,"white");
        this.sidetwo = new Ground(900,530,15,100,"green");
        this.sidethree = new Ground(1100,530,15,100,"red");

        this.image = loadImage ("dustbingreen.png");

    }
    display(){
        this.sideone.display();
        this.sidethree.display();
        this.sidetwo.display();

        imageMode(CENTER);
        image(this.image,1000,530,220, 140);

    }
}