## Table of Contents
1. [Informacion General](#informacion-general)
2. [Tecnologias](#tecnologias)
3. [Ejecucion](#ejecucion)
4. [Autores](#autores)

### Informacion General
***
Proyecto: Administrador de Productos y Categorías

El proyecto es un sistema web administrativo de productos y sus categorías, está implementado con servicios web.
Para la creación de los servicios se usó Spring Boot como Back-End y se usó Angular como Front-End que
consume los servicios. 
La base de datos consta de 2 tablas(Producto y Categoria) y está en MySQL.

Back-End
- Para ambas tablas se implementó los servicios básicos de un CRUD(create, read, update, delete)

Front-End
- Para ambas tablas cuenta con modulos para el registro, actualizacion, listado y borrado
- Implementacion para el consumo de los servicios web

## Tecnologias
***
Las tecnologías usadas en el proyecto son:
* [Spring Boot] Framework v2.4.3
* [Angular CLI] Framework v11.2.3
* [Node] v14.16.0
* [Maven] v3.6.3

## Pre-Requisitos
***
Tener instalado y configurado lo siguiente:
- Maven
- MySQL
- IntelliJ IDEA
- Java 11
- Node

## Ejecucion
***
Back-End
- Verificar que el servicio de MySQL está en ejecución
- Abrir el proyecto project_backend en IntelliJ IDEA y ejecutarlo.
- El proyecto estará en ejecucion en http://localhost:8080/

Front-End
- Desde un Terminar situarse en la ruta dentro del proyecto y ejecutarlo con el comando: ng serve
- El proyecto se compilará y estará disponible en http://localhost:4200/

Una vez iniciado el Front-End y Back-End, lo que queda es interactuar con el sistema. Para eso
cuenta con un menu de opciones
Productos:
    - Agregar producto: Permite agregar nuevo producto a la base de datos
    - Administrar producto: Permite listar los productos de la base de datos. Este modulo tiene 
      las opciones de editar y eliminar cada uno de los registros
    - Editar: Permite editar un producto de la base de datos
    - Eliminar: Ppermite eliminar un producto de la base de datos

Categorias:
    - Agregar categoria: Permite agregar nuevo categoria a la base de datos
    - Administrar categoria: Permite listar los categorias de la base de datos. Este modulo tiene 
      las opciones de editar y eliminar cada uno de los registros
    - Editar: Permite editar un categoria de la base de datos
    - Eliminar: Ppermite eliminar un categoria de la base de datos

## Autores
***
> Autor 1 
> Autor 2
