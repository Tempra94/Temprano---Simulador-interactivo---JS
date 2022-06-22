// Calcular el promedio de las calificaciones de los Alumnos

function sumarCalificaciones(calificacion1, calificacion2, calificacion3){
    let promedio = ((calificacion1 + calificacion2 + calificacion3) / 3)
    alert("El promedio de las calificaciones es : " + promedio)
    if(promedio >= 6){
        alert("Aprobado")
    }else{
        alert("Desaprobado")
    }
    
}

let calificacion1 = parseFloat(prompt("Ingrese la calificacion del primer trimestre"))
let calificacion2 = parseFloat(prompt("Ingrese la calificacion del segundo trimestre"))
let calificacion3 = parseFloat(prompt("Ingrese la calificacion del tercer trimestre"))

sumarCalificaciones(calificacion1, calificacion2, calificacion3)

