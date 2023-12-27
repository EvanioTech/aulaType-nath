/*const  Motoboy = {
    nome: 'evanio',
    idade: 28,
    Ganhos: 10000,

    bestEntregador(){
        console.log(`${this.nome} tem ${this.idade} anos e ganha mensalmente ${this.Ganhos} Reais`)
    }
}

Motoboy.bestEntregador()*/

import { Motoboy } from "./class/Motoboy";
import { Month } from "./class/month";

const December: Month = new Month('Evanio', 28, 4500, 'Dezembro',13000)
const Decimo: number = 4500
const Ferias: number = 4500
console.log(`Ola senhor ${December.nome} você tem um saldo de ${December.newSaldo() +Decimo+Ferias} Reais!
o senhor gostaria de efetuar um saque?` )
console.log(`${December.nome} efetuou um saque no valor de ${December.saque}Reais`)
console.log(`seu novo saldo agora é ${Decimo+ Ferias+ December.fizsaque()} Reais`)



/*const motoboyCabecudo = new Motoboy('Rafa',38,5600)
motoboyCabecudo.mostraObj()
motoboyCabecudo.newSaldo()
const motoboy4Oi = new Motoboy('evanio',28,5000)
motoboy4Oi.mostraObj()
console.log('Saldo na carteira',motoboy4Oi.newSaldo())*/


