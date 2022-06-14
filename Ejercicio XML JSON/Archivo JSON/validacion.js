const bd =[
    {"Id":0,"Apellido":"Apellido: Espinoza", "Nombre":"Nombre: Edward", "Cédula": "Cédula: 1314683010", "Semestre": "Semestre: Quinto", 
    "Paralelo":" Paralelo: B", "Direccion":"Direccion: Manta", "Telefono": "Telefono: 0939733694",
    "Correo":"Correo: edwardespin12@gmail.com"},

    {"Id":1,"Apellido":"Apellido: Bello", "Nombre":"Nombre: Mike","Cédula": "Cédula: 1316619897", "Semestre": "Semestre: Sexto", 
    "Paralelo":" Paralelo: C", "Direccion":"Direccion: Manta", "Telefono": "Telefono: 0908765412",
    "Correo":"Correo: djmikepro22@gmail.com"},

    {"Id":2,"Apellido":"Apellido: López", "Nombre":"Nombre: Luis", "Cédula": "Cédula: 1314745835", "Semestre": "Semestre: Quinto", 
    "Paralelo":" Paralelo: B", "Direccion":"Direccion: Manta", "Telefono": "Telefono: 0962046398",
    "Correo":"Correo: luislopez1201@hotmail.com"},

    {"Id":3,"Apellido":"Apellido: Palacios", "Nombre":"Nombre: Michael","Cédula": "Cédula: 1316893161", "Semestre": "Semestre: Quinto", 
    "Paralelo":" Paralelo: B", "Direccion":"Direccion: Manta", "Telefono": "Telefono: 0998631357",
    "Correo":"Correo: michaelpal201@gmail.com"},

    {"Id":4,"Apellido":"Apellido: Macias", "Nombre":"Nombre: Melina","Cédula": "Cédula: 1316985710", "Semestre": "Semestre: Cuarto", 
    "Paralelo":" Paralelo: B", "Direccion":"Direccion: Manta", "Telefono": "Telefono: 0945098722",
    "Correo":"Correo: melmacias44@gmail.com"},

    {"Id":5,"Apellido":"Apellido: Parrales", "Nombre":"Nombre: Cristhina","Cédula": "Cédula: 1317740528", "Semestre": "Semestre: Quinto", 
    "Paralelo":" Paralelo: B", "Direccion":"Direccion: Manta", "Telefono": "Telefono: 0923600098",
    "Correo":"Correo: cristhinaaa2@gmail.com"},
    
    {"Id":6,"Apellido":"Apellido: Chancay", "Nombre":"Nombre: Nagely","Cédula": "Cédula: 1350176721", "Semestre": "Semestre: Quinto", 
    "Paralelo":" Paralelo: B", "Direccion":"Direccion: Montecristi", "Telefono": "Telefono: 0934069754",
    "Correo":"Correo: nagelchan38@hotmail.com"},

    {"Id":7,"Apellido":"Apellido: Zambrano", "Nombre":"Nombre: Luis","Cédula": "Cédula: 1315589984", "Semestre": "Semestre: Quinto", 
    "Paralelo":" Paralelo: B", "Direccion":"Direccion: Montecristi", "Telefono": "Telefono: 0994001208",
    "Correo":"Correo: Luiszam20@gmail.com"},

    {"Id":8,"Apellido":"Apellido: Pacheco", "Nombre":"Nombre: Gabriel","Cédula": "Cédula: 1316661030", "Semestre": "Semestre: Quinto", 
    "Paralelo":" Paralelo: B", "Direccion":"Direccion: Manta", "Telefono": "Telefono: 0900761234",
    "Correo":"Correo: gabrilp36@gmail.com"},
    
    {"Id":9,"Apellido":"Apellido: Vera", "Nombre":"Nombre: Shirley", "Cédula": "Cédula: 1316892957", "Semestre": "Semestre: Sexto", 
    "Paralelo":" Paralelo: B", "Direccion":"Direccion: Manta", "Telefono": "Telefono: 0932456800",
    "Correo":"Correo: shirleyve08@gmail.com"},
]

const estudiantes = document.querySelectorAll('.nom_estudiante');

estudiantes.forEach((estudiante)=>{
    estudiante.addEventListener('click', (nombre)=>{
        let id=nombre.target.getAttribute('estu-id');
        bd.forEach((estudiante)=>{
            if(id == estudiante.Id){
                const verDetalle=nombre.target.parentElement.lastElementChild;
                verDetalle.innerHTML=`
                                    <div class="lista"
                                        <div class="nom">
                                        <h2>Datos del estudiante:</h2>
                                        <h2 class="list-inline-item footer-menu"><a class="nav-link" style="color:#000000" href="inicio.html"> REGRESAR</a></h2>
                                        <p>${estudiante.Nombre}</p>
                                        <p>${estudiante.Apellido}</p>
                                        <p>${estudiante.Cédula}</p>
                                        <p>${estudiante.Correo}</p>
                                        <p>${estudiante.Telefono}</p>
                                        <p>${estudiante.Direccion}</p>
                                        <p>${estudiante.Semestre}</p>
                                        <p>${estudiante.Paralelo}</p>
                                        </div> 
                                    </div>`

            }
        })
    })
})

