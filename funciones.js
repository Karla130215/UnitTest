function calcularDescuento(precio, porcentaje){
    if(porcentaje<0 || porcentaje>100){
        return "Porcentaje Invalido"
    }
    else{
        descuento=precio*porcentaje/100;
        precio=precio-descuento;
        return precio;
    }
}
function validarPassword(password){
    //Se valida que sean almenos 8 dijitos y que tenga almenos un numero
    const regexPassword = /^(?=.*[0-9]).{8,}$/;
    return regexPassword.test(password);//regresa true o false

}
function celsiusAFahrenheit(celsius){
    conversion=(celsius*1.8)=36;
    return conversion;
}


module.exports.calcularDescuento = calcularDescuento;
module.exports.validarPassword=validarPassword;
module.exports.celsiusAFahrenheit=celsiusAFahrenheit;