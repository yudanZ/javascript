//module pattern( old way) IIFE and clouser

var fightModule = (function(){
    var harry = 'potter'
    var voldemort = 'voldemort'
    function fight(char1, char2){
        var attck1 = Math.floor(Math.random * char1.length);
        var attct2 = Math.floor(Math.random() * char2.length)

        return attck1 > attct2 ? `${char1} wins` : `${char2} wins`
    }


    return {
        fight: fight
    }
})()

console.log(fightModule.fight('aa', 'bb'));

//CommonJs and AMD, by using this, we need to use browserfy to bundling js files
var module1 = require('module1')
var module2 = require('module2');
function fight(){

}

module.exports = {
    fight: fight
};

//AMD
define(['module1', 'module2'],
    function(module1Import, module2Import){
        var fight = module1Import.fight;
        var module2 = module2Import

        function dance(){

        }
        return {
            dance: dance
        }
    }
)

//ES6 Modules
//export / import
//<script type='module'>
//live-server

const harry = 'potter'
const voldemort = 'voldemort'

export function fight(char1, char2){
    const attck1 = Math.floor(Math.random * char1.length);
    const attct2 = Math.floor(Math.random() * char2.length)

    return attck1 > attct2 ? `${char1} wins` : `${char2} wins`
}