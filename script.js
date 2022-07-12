class Libro{
    constructor(nombre,precio, autor, editorial, genero){
        this.nombre = nombre;
        this.precio = precio;
        this.autor = autor;
        this.editorial = editorial;
        this.genero = genero;
    }

    sumarIva(){
        this.precio = this.precio * 1.21;
    }
}

const Libro1 = new Libro("Papel Pintado","1000", "Diego Giacomini", "Editorial", "Politica");
const Libro2 = new Libro("La Revolucion De La Libertad","1000", "Diego Giacomini","Editorial", "Genero");
const Libro3 = new Libro("Libertad-Libertad-Libertad","1000","Miley-Giacomini","Editorial", "Genero");
const Libro4 = new Libro("Hacia una nueva Libertad","1000","Rothbard","Editorial","Genero");
const Libro5 = new Libro("Que le hizo el gobierno a nuestro dinero","1000","Rothbard","Editorial","Genero");
const Libro6 = new Libro("La anatomia del estado","1000","Rothbard","Editorial","Genero");

const Productos = [Libro1, Libro2, Libro3, Libro4, Libro5, Libro6];

console.log(Productos.indexOf(Libro5));
Productos.pop();
Productos.reverse();

console.log(Productos);