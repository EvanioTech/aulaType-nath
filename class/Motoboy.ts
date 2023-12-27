
export abstract class Motoboy {
    nome: string;
    idade: number;
    ganhos: number;
    saldoAccount: number = 0;
    saque:number = 0;

    constructor(nome: string, idade: number, ganhos: number, saque:number) {
        this.nome = nome;
        this.idade = idade;
        this.ganhos = ganhos;
        this.saque = saque
        
    }
    newSaldo = ():number => {
        return this.saldoAccount + this.ganhos 
    }
 mostraObj = () : any => {
    console.log(this.nome,'idade',this.idade,
    'ganhos',this.ganhos)
    
 
}

 
 fizsaque = ( ): number => {
    return this.newSaldo() - this.saque
 }



}