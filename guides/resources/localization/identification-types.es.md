
# Tipos de documento

Los tipos de documento aceptados a la hora de hacer un cobro a través de Mercado Pago varían según cada país.<br>

> WARNING
>
> Importante
>
> Ten en cuenta que esta información no aplica para México.

<br>

## Obteniendo los tipos de documento

Los tipos de documento aceptados pueden ser obtenidos de la siguiente forma:

**GET /v1/identification_types**

[[[
```php
    <?php
        require ('mercadopago.php');
        $mp = new MP ('ACCESS_TOKEN');
        $identification_types = $mp->get('/v1/identification_types');
        print_r ($identification_types);
    ?>
```
```curl
curl -X GET \
-H "Content-Type: application/json" \
'https://api.mercadopago.com/v1/identification_types?public_key=PUBLIC_KEY'
```
]]]

**Respuesta**

[[[
```json
    [
        {
            "id": "DNI",
            "name": "DNI",
            "type": "number",
            "min_length": 7,
            "max_length": 8
          },
          ...
      ]
```
]]]

Los resultados incluídos en esta respuesta coincidirán con el país asociado a tu cuenta de Mercado Pago. Puedes obtener más información sobre este recurso y sus atributos en la [Referencia de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/identification_types/_identification_types/get).

## Tipos de documento por país

A continuación se indican los tipos de documento aceptados para cada país.

### Argentina

| Tipo de documento | ID |
| :--- | :--- |
| Documento Nacional de Identidad | `DNI` |
| Cédula de Identidad | `CI` |
| Libreta Cívica | `LC` |
| Libreta de Enrolamiento | `LE` |
| Otro | `Otro` |

### Brasil

| Tipo de documento | ID |
| :--- | :--- |
| Cadastro de Pessoas Físicas | `CPF` |
| Cadastro Nacional da Pessoa Jurídica | `CNPJ` |


### Chile

| Tipo de documento | ID |
| :--- | :--- |
| Rol Único Tributario | `RUT` |
| Otro | `Otro` |

### Colombia

| Tipo de documento | ID |
| :--- | :--- |
| Cédula de Ciudadanía | `CC` |
| Cédula de Extranjeria | `CE`                     |
| Número de Identificación Tributaria | `NIT` |
| Otro | `Otro` |

### Perú

| Tipo de documento | ID |
| :--- | :--- |
| Documento Nacional de Identidad | `DNI` |
| Carné de Extranjería | `CE` |
| Registro Único de Contribuyentes | `RUC` |

### Uruguay

| Tipo de documento | ID |
| :--- | :--- |
| Cédula de Identidad | `CI` |
| Otro | `Otro` |
