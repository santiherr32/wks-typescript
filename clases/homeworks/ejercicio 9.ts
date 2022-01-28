function suma(a: number, b: string): string;
function suma(a: string, b: number): string;
function suma(a: string, b: string): string;
function suma(a: number, b: number): number;
function suma(a: any, b: any): any{
    return a + b;
}

function restar(a: number, b: string): string;
function restar(a: string, b: number): string;
function restar(a: string, b: string): string;
function restar(a: number, b: number): number;
function restar(a: any, b: any): any{
    return a - b;
}

function multiplicar(a: number, b: string): string;
function multiplicar(a: string, b: number): string;
function multiplicar(a: string, b: string): string;
function multiplicar(a: number, b: number): number;
function multiplicar(a: any, b: any): any{
    return a * b;
}

function dividir(a: number, b: string): string;
function dividir(a: string, b: number): string;
function dividir(a: string, b: string): string;
function dividir(a: number, b: number): number;
function dividir(a: any, b: any): any{
    return a / b;
}

let resultado = suma('hola', 2) //cambien los parametros para ver su comportamiento
let resultado2 = restar(18,6) //cambien los parametros para ver su comportamiento
let resultado3 = multiplicar(5,9) //cambien los parametros para ver su comportamiento
let resultado4 = dividir(45, 5) //cambien los parametros para ver su comportamiento
//haciendo hover sobre resultado
console.log(resultado);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);

//Aplicar lo mismo para el resto de las operaciones matematicas!