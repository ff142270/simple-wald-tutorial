class Baum {
    private hoehe: number = 0;
    private typ: string
    private durchmesser: number = 0;

    constructor(typ: string = "Tanne") {
        this.typ = typ;
    }

    public wachsen(zuseatzlicheHoehe: number = 5) {
        this.hoehe += zuseatzlicheHoehe;
        this.durchmesser = +zuseatzlicheHoehe / 5;
    }
}

const baum1 = new Baum("Fichte");

console.log(baum1)
baum1.wachsen();
console.log(baum1);