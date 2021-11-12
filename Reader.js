const fs = require("fs");
const util = require("util")

class Reader{

    constructor(){
        this.reader = util.promisify(fs.readFile) //promisse para retornar valor na principal
    }

    async Read(pasta){ //localização do arquivo
        try{
            return await this.reader(pasta,"utf-8")
        }catch(erro){
            return undefined
        }
    }
}


module.exports = Reader;