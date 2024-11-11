
const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad', 
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60', 
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.', 
        ubicacion: '123 Main Street, Anytown, CA 91234', 
        habitaciones: 2, 
        baños: 2,
        costo: 2000, 
        smoke: false, 
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar', 
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.', 
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789', 
        habitaciones: 3, 
        baños: 3,
        costo: 2500, 
        smoke: true, 
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial', 
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60', 
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.', 
        ubicacion: '123 Main Street, Anytown, CA 91234', 
        habitaciones: 2, 
        baños: 2,
        costo: 2200, 
        smoke: false, 
        pets: false
    }
];

const elementoHTML = document.querySelector("#alquiler");
let conjuntoPropiedades2 = "";

for (let casas of propiedades_alquiler) {
    conjuntoPropiedades2 += `
        <div class="alquiler Col-12 col-md-4">
            <img src="${casas.src}" alt="${casas.nombre}">
            <h3>${casas.nombre}</h3>
            <p>${casas.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${casas.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${casas.habitaciones} Habitaciones</p>
            <p><i class="fas fa-bath"></i> ${casas.baños} Baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${casas.costo}</p>
            <p>${casas.pets ? '<i class="fas fa-paw icono-true"></i> Mascotas: Sí' : '<i class="fas fa-paw icono-false"></i> Mascotas: No'}</p>
            <p>${casas.smoke ? '<i class="fas fa-smoking icono-true"></i> Fumar: Sí' : '<i class="fas fa-smoking-ban icono-false"></i> Fumar: No'}</p>
        </div>
    `;
}

elementoHTML.innerHTML = conjuntoPropiedades2;

