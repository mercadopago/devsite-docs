---
sites_supported:
  - mla
  - mlb
  - mlm
  - global

---

# Sucursales

Antes de comenzar a cobrar usando QR en tu plataforma, deberás crear sucursales y cajas.
Cada cuenta de Mercado Pago puede tener _"N"_ cantidad de sucursales y cada sucursal
puede tener _"N"_ cantidad de cajas. Para realizar la integración es necesario tener
por lo menos una sucursal y una caja.

## Conceptos

Primero debes familiarizarte con los siguiente conceptos ya que los usarás durante la integración.

| Atributo       | Descripción                                                  |
| -------------- | ------------------------------------------------------------ |
| `ACCESS_TOKEN` | Es el [token de acceso](https://www.mercadopago.com/mlm/account/credentials) de la cuenta de Mercado Pago a la cual se acreditarán los cobros. |
| `COLLECTOR_ID` | Es el número de usuario de la cuenta de Mercado Pago, son los últimos 9 dígitos de tu `access_token`, posterior al guión medio. |

## Crear una sucursal

El request para crear una sucursal en nuestra plataforma es el siguiente:

```bash
POST https://api.mercadolibre.com/users/COLLECTOR_ID/stores?access_token=ACCESS_TOKEN
```

**Parámetros a enviar**
```json
{
    "description": "Sucursal de Prueba",                         //Titulo descriptivo de la sucursal, este dato aparecerá en el mapa de nuestras apps
    "open_hours": "Lunes a Viernes, 24 hrs.",                    //Horario "humano" de la sucursal, también saldrá en el mapa
    "status": "active",                                          //Requerido para activar la sucursal en el mapa
    "tags": ["payment"],                                         //Permisos, permite aceptar pagos.
    "phone": "528181818181",                                     //Teléfono de la sucursal
    "location": {                                                //Datos geográficos
        "address_line": "Parque México, Condesa, CDMX",          //Calle y colonia a mostrar en el mapa, máximo 59 caracteres
        "latitude": 19.4029824,                                         
        "longitude": -99.1808316                                        
    }
}
```

**Respuesta**
```json
{
    "id": "12990012",                                            //ID Generado automáticamente, se recomienda guardar en la base de datos
    "user_id": "278532907",                                      //ID del usuario dueño de la sucursal, guardar en BD para relacionar con el franquiciatario
    "description": "Sucursal de Prueba",                        
    "date_creation": "2019-01-15T21:26:04.207Z",                 //Timestamp de la fecha de creación de la sucursal
    "open_hours": "Lunes a Viernes, 24 hrs.",
    "status": "active",
    "tags": [
        "payment"
    ],
    "phone": null,
    "location": {
        "address_line": "Parque México, Ciudad de México, CDMX",
        "latitude": 19.4029824,
        "longitude": -99.1808316,
        "id": "MX-DIF",                                         //ID interno del Pais/Estado
        "type": "state"                                         
    }
}
```

### Consultar sucursales existentes

Si deseas consultar las sucursales existentes de un usuario podrás hacerlo haciendo la siguiente búsqueda:

```bash
GET https://api.mercadolibre.com/users/COLLECTOR_ID/stores/search?limit=100&offset=0
```

### Consultar sucursal

Podrás consultar una sucursal usando este request:

```bash
GET https://api.mercadolibre.com/users/COLLECTOR_ID/stores/$id?access_token=ACCESS_TOKEN
```


## Modificar una sucursal

Habrá ocasiones donde necesitarás modificar una sucursal, utiliza el siguiente request:

```bash
PUT https://api.mercadolibre.com/users/COLLECTOR_ID/stores/STORE_ID?access_token=ACCESS_TOKEN
```

**Donde:**
* `STORE_ID` es el ID generado por Mercado Pago de la sucursal creada.

**Parámetros**
```json
{
    //Parámetros a modificar
}
```


## Errores

Además de los errores que ya conoces en [nuestra guía](https://www.mercadopago.com.mx/developers/es/guides/payments/api/handling-responses/),
te podrás encontrar con cualquiera de los siguientes

```json
{
    "message": "store 12941001 not found",
    "error": "not_found",
    "status": 404,
    "cause": []
}
```
Este objeto aparece cuando el `STORE_ID` que deseas buscar **no fue encontrado**.

```json
{
    "error": "1000",
    "message": "Store not found",
    "description": "Missing id: 12932019",
    "status": 404
}
```

Este objeto aparece cuando nuestra API no recibe alguno de los atributos mínimos de búsqueda.

## Portal Mercado Pago
![GIF Sucursales]()

## Siguientes pasos
Ya estás listo para crear puntos de venta, revisa la [guía para crear cajas](https://www.mercadopago.com.mx/developers/es/guides/instore-payments/qr-payments/qr-pos/).
