//Intenta tipar una pluck function!
//TIP! Buscar la palabra reservada keyof y usar extends!
function pluck<Type, Key extends keyof Type>(
    arreglo: Type[], 
    prop: Key
    ): Type[Key][] {
    return arreglo.map((object) => {
        return object[prop]
    })
}

console.log(pluck([
    { name: 'hello', age: 12 }, 
    { name: 'santiago', age: 15 }
], 'name'));