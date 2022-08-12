let nombreusuario = localStorage.getItem('nombreusuario')
let apellidousuario = localStorage.getItem('apellidousuario')
document.getElementById('nombreusuario').value = nombreusuario;
document.getElementById('apellidousuario').value = apellidousuario;

function ValidarFormulario(){
    let nombreusuario = document.getElementById('nombreusuario').value;
    let apellidousuario = document.getElementById('apellidousuario').value;
    localStorage.setItem('nombreusuario', nombreusuario);
    localStorage.setItem('apellidousuario', apellidousuario);
}

class Producto{
    constructor(id, nombre,precio, autor, editorial, genero, imagen){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.autor = autor;
        this.editorial = editorial;
        this.genero = genero;
        this.imagen = imagen;
    }

    //Con este metodo muestro los Libros
    mostrarProducto() {
        return (
        "id: " +
        this.id +
        " "+
        "autor: " +
        this.autor +
        " Nombre: " +
        this.nombre +
        " Precio: " +
        this.precio + 
        " " +
        "Editorial: " +
        this.editorial +
        " " +
        "Genero: " +
        this.genero +
        "\n"
        );
    }

}

function clickEnProducto(id) {
    alert('click en ' + id);
}
    fetch('./data.json')
    .then((resinicial) => resinicial.json())
    .then((res) => {
        const miArray = res;
        let htmlAux = '';
        for (let i = 0; i < miArray.length; i++) {
        htmlAux =
            htmlAux +
            `<div onclick="clickEnProducto(${miArray[i].id})">
                <h3>${miArray[i].nombre}</h3>            
                <p>${miArray[i].precio}</p>            
            </div>`;
        }
        document.getElementById('listadoDeProductos').innerHTML = htmlAux;
        console.log(htmlAux);
    })
    .catch((e) => {
    console.log(e);
    });


//Destructuracion de arrays
    //Ejemplo 1
    const[a , b] = productos
    console.log(a);
    console.log(b);
    //Ejemplo 2
    const[, , c, d] = productos
    console.log(c);
    console.log(d);

//Spread de arrays
let arraySpread = [...productos]
console.log(arraySpread)

//Genero un array de autores
let autores = ["Diego Giacomini", "Milei Giacomini","Rothbard", "Ludwig von Mises", "Israel M. Kirzner"];

// Genero el arrays, metiendo los objetos adentro
const productosEnCarro=[];

//Uso esta variable para si el usuario no quiere continuar la compra
let autor = ""

//Este ciclo se va a repetir hasta que el usuario, escriba finalizar o enter directamente
while(autor != "Finalizar" && autor != null) {
    let string = autores.join ("\n");//Genero el string de autores uno abajo de otro
    autor = prompt(
        'Ingrese un autor para continuar comprando o ingrese "Finalizar" para terminar sus compra/s: \n(' + string + ")"
    );

    //
    if (autor != "Finalizar" && autor != null) {
        let productosFiltradoPorAutor = productos.filter(
        (item) => item.autor == autor
        );

        //Genero una lista con todos los libros de ese autor
        let cartel = "";
        for (let i = 0; i < productosFiltradoPorAutor.length; i++) {
            cartel += productosFiltradoPorAutor[i].mostrarProducto();
        }

        //Genero una lista de los libros del autor seleccionado anteriormente
        let idSeleccionado = parseInt(
            prompt("Seleccione el id del producto que quiere comprar: \n\n" + cartel)
        );


        let productoParaCarro = productosFiltradoPorAutor.find(
            (item) => item.id == idSeleccionado
            );


        if (productoParaCarro) {
                productosEnCarro.push(productoParaCarro);                
            }            
    }    
}

if (productosEnCarro.length > 0) {
    alert('Te invitamos a Iniciar sesion o Registrarte para terminar tu compra');
    let nombre = prompt('ingrese su nombre');
    let apellido = prompt('ingrese su apellido')
    let mail = prompt('ingrese su email');


    //Creo una funcion para finalizar la compra
    function comprar(nombre, apellido, email, productosEnCarro) {
        let cant = productosEnCarro.reduce((acc, item) => item.precio + acc, 0);/*
        Uso el metodo reduce para pasar el precio final de la compra/s */
        alert("Gracias" +" " + nombre + " " + apellido + " por tu compra. \n Total: $" + cant + "\n En breve te llegara a tu email: " + email + " " +  "Cuanto tiempo tardara el envio" );
        /*Llamo un alert para que muestre la confirmacion de compra */
    }

    //Toastify
    let boton = document.getElementById("comprar")
    boton.addEventListener("click", respuestaClick)
    function respuestaClick(){
        Toastify({
            text: "Se agrego el producto al carrito",
            duration: 3000,
            gravity: 'top',
            position: 'center',
            style: {
                background: 'linear-gradient(to right, #00b09b, #96c92d)',
            }    
        }).showToast();    
    }

//Llamo a la funcion
comprar(nombre, apellido, mail, productosEnCarro);
}

let miFormulario = document.getElementById ("formulario");
miFormulario. addEventListener ("submit", validarFormulario );
function validarFormulario (e){
    //Cancelamos el comportamiento del evento
    e.preventDefault ();
    //Obtenemos el elemento desde el cual se disparó el evento
    let formulario = e.target
    //Obtengo el valor del primer hijo <imput type ="text">
    console.log(formulario.children[0].value)
    //Obtengo el valor del segundo hijo <input type="text">
    console.log(formulario.children[1].value);
    //Obtengo el valor del tercer hijo hijo <input type="number">
    console.log(formulario.children[2].value);
}