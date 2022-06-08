const holaMundo = () => {
    console.log("Hola, Mundo"); // Hola, Mundo
};

function callback(test){
    console.log("Entrando a la funcion primaria");
    test();
}

callback(holaMundo)
