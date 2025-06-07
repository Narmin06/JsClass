// Task1
class Kitab{
    constructor(ad,müəllif,il){
        this.ad = ad,
        this.müəllif = müəllif,
        this.il = il
    }
    melumat(){
            return `Ad: ${this.ad}; Müəllif: ${this.muellif}; İl: ${this.il}`;
    }
}

const kitab1 = new Kitab("Qaranlıq Günəş", "Zaur Pənahov", 2018);
console.log(kitab1.melumat());



// Task2
class Telebe{
    constructor(ad,yas){
        this.ad = ad,
        this.yas = yas,
        this.qiymetler = [];
    }
    qiymetElaveEt(qiymet){
        if (typeof qiymet === "number" && qiymet >= 0 && qiymet <= 100) {
             this.qiymetler.push(qiymet);
        } 
        else {console.log("Yanlis qiymet daxil etdiniz!!!");}
    }
    ortaQiymet(){
        if (this.qiymetler.length === 0) {return 0;}
        const cem = this.qiymetler.reduce((acc,qiymet) =>acc+qiymet,0);
        return cem / this.qiymetler.length;
    }
}

const telebe1 = new Telebe("Narmin", 21);
telebe1.qiymetElaveEt(100);
telebe1.qiymetElaveEt(100);
telebe1.qiymetElaveEt(100);
console.log(telebe1.ortaQiymet());


// Task3
class MathUtil{
    static kvadrat(num){
        return num * num;
    }

    static kok(num) {
        return Math.sqrt(num);
    }

    static cem(array) {
        return array.reduce((acc,value)=>acc+value,0);
    }
}
console.log( MathUtil.kvadrat(6));       
console.log(MathUtil.kok(36));     
console.log(MathUtil.cem([1, 2, 3, 4])); 




// Task4
class Heyvan{
    constructor(ad,yas){
        this.ad = ad,
        this.yas = yas
    }

    sesCixar(){
        console.log("Heyvan səslənir");
    }
}

class It extends Heyvan{
    constructor(ad,yas){
        super(ad,yas);
    }

    sesCixar(){
        console.log("Hav hav!");
    }
}
const heyvan1 = new Heyvan("It", 1);
heyvan1.sesCixar(); 

const it1 = new It("Pambıq", 3);
it1.sesCixar(); 




// Task5
class BankHesabi{
    #balans;
    constructor() {
        this.#balans = 0;
    }

    pulArtir(miqdar){
        this.#balans += miqdar;
    }

    pulCixar(miqdar){
        if (miqdar <= this.#balans) { this.#balans -= miqdar; } 
        else {console.log("Balansda vesait yoxdur!"); }
    }

    get balans() {
        return this.#balans;
    }
}

const hesab1 = new BankHesabi();
hesab1.pulArtir(1000);
hesab1.pulCixar(500);
console.log(hesab1.balans);




// Task6
class Qahraman{
    constructor(ad) {
        this.ad = ad;
    }
}

const Ucan = {
    uc(){
        console.log(`${this.ad} uça bilir`);
    }
};

Object.assign(Qahraman.prototype,Ucan);

const qahraman1 = new Qahraman("Superman");
qahraman1.uc();
