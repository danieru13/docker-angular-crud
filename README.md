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