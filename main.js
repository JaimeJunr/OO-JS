// Funão Construtora da Clase Abstração 
function Automovel(modelo, max_spd, placa) {
    this.Modelo = modelo;
    
    let _placa = placa;

    //Getter
    this.getPlaca = function() {
        return _placa

    }

    //Setter
    this.setPlaca = function(valor) {
        if (valor === Number){
            _placa = valor
        }

    }

    //Função de funcionalidade
    this.aceleração = function(){
        spd = 1;
        this.max_spd = max_spd

        for (i = 0; i <= max_spd; i += spd){
            console.log(`A velocidade atual de ${modelo} é ${i}`);
        }if (i = max_spd){
            return i
        }
    }
}

// Funão Construtora Herdeira Carro
function Carro(cor, marca){
    this.Cor = cor;
    this.Marca = marca;
    Automovel.call(this, "Carro", 20, 31323)
}
// Funão Construtora Herdeira Moto
function Moto(cor, marca){
    this.Cor = cor;
    this.Marca = marca;
    Automovel.call(this, "Moto", 15, 45123)
    
}

//#region Instanciamento das Classes

const CarroDoJaime = new Carro("Preto", "Honda");
const MotoDoJaime = new Moto("Branca", "Honda");
const MotoCorrida = new Moto("Preta", "Yamaha");
//#endregion

//#region  Projetando no Log os Objetos, funções e retorno de 
console.log(CarroDoJaime);
console.log(MotoDoJaime);
console.log(MotoCorrida);
//#endregion

//#region  Confirmando dado retornado pela funcionalidade
if (CarroDoJaime.aceleração() <= MotoCorrida.aceleração()){
    console.log("Moto Corrida venceu");
}
else{
    console.log("Jaime Venceu");
}
//#endregion


//set
CarroDoJaime.setPlaca(12211);

//get
console.log(CarroDoJaime.getPlaca())




