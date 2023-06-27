//Función para obtener un ID aleatorio e irrepetible
export const generarId = () => {
    const random = Math.random().toString(36).slice(2)
    const fecha = Date.now().toString(36)

    return random + fecha
}

// Copiar y pegar objetoX.id = generarId(); detras de     setObjetos([...objetos, objeto ])


// Función para obtener fecha

export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)

    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }
    
    // Formato - 27 de Junio de 2023
    return fechaNueva.toLocaleDateString('es-ES', opciones)
    
}


