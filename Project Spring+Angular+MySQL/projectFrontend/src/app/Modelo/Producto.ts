import { Categoria } from "./Categoria";

export class Producto{
    id!: number;
    codigo!: String;
    nombre!: String;
    descripcion!: String;
    precio_unitario!: number;
    stock!: number;
    categoria_id!: Categoria;
}