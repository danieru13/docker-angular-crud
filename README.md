# Tarea Docker (Ing Web)

## API

La ruta de la API de Alumnos es `/student` 

### Endpoints

#### Modelo 

El modelo en específico de alumno es este:

```JSON
{
    name: {

        type: String
    },
    class: {
        type: String
    },  
    year: {
        type: Number
    },
    grades: {
        type: [Number]
    }
}
``` 

#### GET

`/student` Obtener información de todos los estudiantes.

`/student/{id}` Obtener información de un alumno en específico por ID.

`/student/delete/{id}` Borrar la info de un alumno en específico por ID.

#### POST

`/student/add` Agrega un alumno a la base de datos.

`/student/update/{id}` Actualiza los datos de un alumno en específico por ID.

## Importancia y uso de contenedores

Los contenedores son de alta importancia ya que ayudan a que un código o tecnología en específico se ejecute de igual manera en cualquier entorno,  sin importar las diferencias que tengan estos. Los contenedores son más ligeros que una máquina virtual, se pueden reusar, se despliegan rapidaménte, usan los recursos de forma eficiente, permiten escalabilidad y son seguros.

### Usos

- Cambiar las aplicaciones existentes a arquitecturas basadas en la nube.

- Proveer mejor soporte para arquitecturas de microservicios.

- Proveer de apoyo a DevOps para integración continua y despliegue (CI/CD).

- Proveer fácil despliegue de trabajos y tareas repetitivos.