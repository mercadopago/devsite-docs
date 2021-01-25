
# Identification types

The types of documents accepted when making a payment through Mercado Pago vary by country.<br>

> WARNING
>
> Important
>
> Keep in mind that this information does not apply to Mexico.

<br>

## Get the document types

You can get the document types accepted as follows:

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

**Response**


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

The results included in this response will coincide with the country associated with your Mercado Pago account. For more information about this feature and its attributes, go to  [API reference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/identification_types/_identification_types/get).

## Identification types by country

The document types accepted by country are listed below.

### Argentina

| Identification type | ID |
| :--- | :--- |
| Documento Nacional de Identidad | `DNI` |
| Cédula de Identidad | `CI` |
| Libreta Cívica | `LC` |
| Libreta de Enrolamiento | `LE` |
| Others | `Otro` |

### Brazil

| Identification type | ID |
| :--- | :--- |
| Cadastro de Pessoas Físicas | `CPF` |
| Cadastro Nacional da Pessoa Jurídica | `CNPJ` |


### Chile

| Identification type | ID |
| :--- | :--- |
| Rol Único Tributario | `RUT` |
| Others | `Otro` |

### Colombia

| Identification type | ID |
| :--- | :--- |
| Cédula de Ciudadanía | `CC` |
| Cédula de Extranjeria | `CE` |
| Número de Identificación Tributaria | `NIT` |
| Others | `Otro` |

### Peru

| Identification type | ID |
| :--- | :--- |
| Documento Nacional de Identidad | `DNI` |
| Carné de Extranjería | `CE` |
| Registro Único de Contribuyentes | `RUC` |

### Uruguay

| Identification type | ID |
| :--- | :--- |
| Cédula de Identidad | `CI` |
| Others | `Otro` |
