const fs = require("fs");

class Reader{
    Read(filepatch){ //localização do arquivo

        fs.readFile(filepatch,"utf8",(erro,data)=>{
            if(erro){
                console.log("erro")
            }else{
                console.log(data)
            }

        })
    }
}

module.exports = Reader;