// Cargar productos desde data.json
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const productosContainer = document.getElementById('productos');
        data.forEach(producto => {
            const productoElement = document.createElement('div');
            productoElement.classList.add('producto');

            productoElement.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.titulo}">
                <h2>${producto.titulo}</h2>
                <p>${producto.descripcion}</p>
                <span>$${producto.costo}</span>
                <button>Añadir al carrito</button>
            `;
            productosContainer.appendChild(productoElement);
        });
    })
    .catch(error => console.error('Error cargando productos:', error));

