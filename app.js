//con lo siguiente hacemos obligatoria la introduccion de parametros cuando ejecutamos el código de
//node.
const argv = require('./config/yargs').argv;
const colors = require('colors');

//para introducir en la consola los datos de base y alias se hace de la siguiente manera:
// node app listar  -b=5 -l=10
//si no introducimos el dato de limite, automáticamente se asigna el que pusimos por default

//para obtener informacion acera de nuestra app basta con utilizar lo siguiente:
// node app listar --help




//importamos el archivos donde tenemos nuestra funcion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); // con la destructuracion podemos utilizar la funcion unicamente invocando
//a la funcion, en lugar hacer la siguiente notacion: multiplicar.crearArchivo
//const {} <--- esto quiere decir que es una detructuracion

//con el process.argv podemos obtener datos ingresador por la cosola escribiento porejemplo node app --base
//let argv2 = process.argv;

let comando = argv._[0];


switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado: ${archivo.yellow}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}


/* let parametro = argv[2];
let base = parametro.split('=')[1]
 */

/* console.log('base: ', argv.base);
console.log('limite', argv.limite); */


/* console.log(process.argv); //con este comando podemos ver los procesos que estan corriendo

crearArchivo(base)
    .then((archivo) => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e)); */

//con npm init ---> checar la descripcion de este comando que se escribe en la consola
//se crea un archivo package.json el cual es muy importante cuando pongamos nuestro proyecto en algun repositorio o cuando lo
//cambiemos el proyecto a otro ordenador
//npm maneja  todas la librerias automáticamente. No debemos subir a un repositorio todos los 
//módulos de node, si nosotro utilizamos yargs, todo el manejo de los paquetes de node se hace 
//automáticamente, incluso en otros sistemas operativos
//instalando yargs en el directorio donde esta nuestro proyecto

//npm install --save-dev nodemon <-----  esto instala nodemos localmente en el proyecto donde estemos trabajando