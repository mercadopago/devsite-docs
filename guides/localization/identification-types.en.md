# Identification types

The types of documents accepted when making a payment through MercadoPago vary by country.

## Get the document types

You can get the document types accepted as follows:

**GET /v1/identification_types**

	<?php
		require ('mercadopago.php');
		$mp = new MP ('ACCESS_TOKEN');
		$identification_types = $mp->get('/v1/identification_types');
		print_r ($identification_types);
	?>

**Response**

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

The results included in this response will coincide with the country associated with your MercadoPago account. For more information about this feature and its attributes, go to  [API reference](/reference).

## Identification types by country

The document types accepted by country are listed below.

Only Mexico does not require this information.

### Argentina

Identification type               | ID                       |
:------------------------------ | :----------------------- |
Documento Nacional de Identidad | `DNI`                    |
Cédula de Identidad             | `CI`                     |
Libreta Cívica                  | `LC`                     |
Libreta de Enrolamiento         | `LE`                     |
Others                           | `Otro`                   |

### Brazil

Identification type           | ID                       |
:-------------------------- | :----------------------- |
Cadastro de Pessoas Físicas | `CPF`                    |

### Chile

Identification type          | ID                       |
:------------------------- | :----------------------- |
Rol Único Tributario       | `RUT`                    |
Others                      | `Otro`                   |

### Colombia

Identification type                   | ID                       |
:---------------------------------- | :----------------------- |
Cédula de Ciudadanía                | `CC`                     |
Cédula de Extranjeria               | `CE`                     |
Número de Identificación Tributaria | `NIT`                    |
Others                               | `Otro`                   |

### Peru

Identification type                | ID                       |
:------------------------------- | :----------------------- |
Documento Nacional de Identidad  | `DNI`                    |
Carné de Extranjería             | `CE`                     |
Registro Único de Contribuyentes | `RUC`                    |

### Uruguay

Identification type          | ID                       |
:------------------------- | :----------------------- |
Cédula de Identidad        | `CI`                    |
Others                      | `Otro`                   |

### Venezuela

Identification type                | ID                       |
:------------------------------- | :----------------------- |
Cédula de Identidad V            | `CI-V`                   |
Cédula de Identidad E            | `CI-E`                   |
Registro de Informacion Fiscal J | `RIF-J`                  |
Registro de Informacion Fiscal P | `RIF-P`                  |
Registro de Informacion Fiscal V | `RIF-V`                  |
Registro de Informacion Fiscal E | `RIF-E`                  |
Registro de Informacion Fiscal G | `RIF-G`                  |
Passport                         | `Pasaporte`              |
