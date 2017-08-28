# Tipos de documento

Los tipos de documento aceptados a la hora de hacer un cobro a través de Mercado Pago varían según cada país.

## Obteniendo los tipos de documento

Los tipos de documento aceptados pueden ser obtenidos de la siguiente forma:

**GET /v1/identification_types**

	<?php
		require_once ('mercadopago.php');
		$mp = new MP ('ACCESS_TOKEN');
		$identification_types = $mp->get('/v1/identification_types');
		print_r ($identification_types);
	?>

**Respuesta**

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

Los resultados incluídos en esta respuesta coincidirán con el país asociado a tu cuenta de Mercado Pago. Puedes obtener más información sobre este recurso y sus atributos en la [Referencia de API](#).

## Tipos de documento por país

A continuación se indican los tipos de documento aceptados para cada país.

Sólo México no requiere esta información.

### Argentina

Tipo de documento               | ID                       |
:------------------------------ | :----------------------- |
Documento Nacional de Identidad | `DNI`                    |
Cédula de Identidad             | `CI`                     |
Libreta Cívica                  | `LC`                     |
Libreta de Enrolamiento         | `LE`                     |
Otro                            | `Otro`                   |

### Brasil

Tipo de documento           | ID                       |
:-------------------------- | :----------------------- |
Cadastro de Pessoas Físicas | `CPF`                    |

### Chile

Tipo de documento          | ID                       |
:------------------------- | :----------------------- |
Rol Único Tributario       | `RUT`                    |
Otro                       | `Otro`                   |

### Colombia

Tipo de documento                   | ID                       |
:---------------------------------- | :----------------------- |
Cédula de Ciudadanía                | `CC`                     |
Cédula de Extranjeria               | `CE`                     |
Número de Identificación Tributaria | `NIT`                    |
Otro                                | `Otro`                   |

### Perú

Tipo de documento                | ID                       |
:------------------------------- | :----------------------- |
Documento Nacional de Identidad  | `DNI`                    |
Carné de Extranjería             | `CE`                     |
Registro Único de Contribuyentes | `RUC`                    |

### Uruguay

Tipo de documento          | ID                       |
:------------------------- | :----------------------- |
Cédula de Identidad        | `CI`                    |
Otro                       | `Otro`                   |

### Venezuela

Tipo de documento                | ID                       |
:------------------------------- | :----------------------- |
Cédula de Identidad V            | `CI-V`                   |
Cédula de Identidad E            | `CI-E`                   |
Registro de Informacion Fiscal J | `RIF-J`                  |
Registro de Informacion Fiscal P | `RIF-P`                  |
Registro de Informacion Fiscal V | `RIF-V`                  |
Registro de Informacion Fiscal E | `RIF-E`                  |
Registro de Informacion Fiscal G | `RIF-G`                  |
Pasaporte                        | `Pasaporte`              |
