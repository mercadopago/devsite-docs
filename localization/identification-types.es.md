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

### Argentina

Medio de pago   				| ID
:-------------------------	| :----------------------- |
DNI                        | `DNI`                    |
Cédula de Identidad        | `CI`                     |
Libreta Cívica             | `LC`                     |
Libreta de Enrolamiento    | `LE`                     |

### Brasil

....






