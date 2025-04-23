fetch('api_ei.php')
    .then(response => response.json())
    .then(result => {
        const servicios = result.data || result;

        if (!servicios || servicios.length === 0) {
            console.log('No hay datos disponibles para mostrar.');
            return;
        }

        const contenedorExterno = document.getElementById("servicios-externos");

        servicios.forEach(servicio => {

                  
            const card = document.createElement('div');
            card.className = "col-md-4";
            card.innerHTML = `
                <div class="card mb-4 shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">${servicio.titulo.esp}</h5>
                        <p class="card-text">${servicio.descripcion.esp}</p>

                    </div>
                </div>
            `;          
            contenedorExterno.appendChild(card);

        });
    })
    .catch(error => {
        console.error('Error al obtener los datos externos:', error);
    });

/**********************************Internos***************************************************** */

fetch('http://localhost/EV1API/index.php')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta de la API interna');
        }
        return response.json();
    })
    .then(result => {
        const serviciosInternos = result.data;

        if (!serviciosInternos || serviciosInternos.length === 0) {
            console.log('No hay datos internos disponibles para mostrar.');
            return;
        }

        const contenedorInterno = document.getElementById('servicios-internos');

        serviciosInternos.forEach(servicio => {
            // Aseg. de que las propiedades existan en el objeto servicio
            const titulo = servicio.Titulo_Esp || 'Sin título';
            const descripcion = servicio.Descripcion_Esp || 'Sin descripción';

            const card = document.createElement('div');
            card.className = "col-md-4";
            card.innerHTML = `                                  
                <div class="card mb-4 shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">${titulo}</h5>
                        <p class="card-text">${descripcion}</p>
                    </div>
                </div>
            `;
            contenedorInterno.appendChild(card);    
        });
    })
    .catch(error => {
        console.error('Error al obtener los datos internos:', error);
    });