import { Motoboy } from "./Motoboy";


export class Month extends Motoboy {
    mes:string;
    
    constructor( nome:string,idade:number,ganhos:number, mes:string,saque:number){
    super(nome,idade,ganhos,saque);
    this.mes = mes;
    }
    
    

}