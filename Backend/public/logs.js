getData(); 
        //funcion para extraer datos de API
        async function getData() {
            const response = await fetch('/api');
            const data = await response.json();

            //crear div para cada elemento de la denuncia
            for (item of data) {
                const root = document.createElement('p');
                const  lugar = document.createElement('div');
                const fecha = document.createElement('div');
                const nombre_d = document.createElement('div');
                const des = document.createElement('div');

                lugar.textContent = `lugar: ${item.lugar}`;
                fecha.textContent = `fecha: ${item.fecha}`;
                nombre_d.textContent = `nombre denunciado: ${item.nombre_d}`;
                des.textContent = `des: ${item.des}`;

                //añadir divs a root div
                root.append(lugar, fecha, nombre_d, des);
                //añadir root a body
                document.body.append(root);
            }
            console.log(data);
        }