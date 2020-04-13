class Auto {
    private marke: string;
    private ps: number = 250;
    private farbe: string = "Knall-grün";

    constructor(marke: string = "VW") {
        this.marke = marke;
    }
}

class Parkhaus {
    private autos: Auto[] = [];
    public imParkhausParken(auto: Auto) {
        this.autos.push(auto);
    }
}

let schneiderUndSohneParkhaus = new Parkhaus();

const auto1 = new Auto("Tesla");
const auto2 = new Auto();
console.log(auto1)
console.log(auto2)

schneiderUndSohneParkhaus.imParkhausParken(auto1);
schneiderUndSohneParkhaus.imParkhausParken(auto2);
console.log(schneiderUndSohneParkhaus);
