# Localización

* Nosotros vs. Empresa
* Nivel de formalidad
* Tipo de lenguaje (No se puede vs. Se puede hacer X)
* Tono: imperativo vs. pregunta vs. otros
* Si es pregunta, en 1ra persona?
* Glosario
* No felicitar


## Funcionalidades

Ciertas funcionalidades de Mercado Pago varían según cada país. A continuación se indica el soporte en cada uno.

### Pagos

Funcionalidad             | AR    | BR    |  
:------------------------ | :---: | :---: |
Procesamiento             | ✔     | ✔     |

### Suscripciones

Recurring no todos los países.


Medios de pago             | AR    | BR    |  
:------------------------ | :---: | :---: |
`visa`, `master`             | ✔     | ✔     |

***


## Medios de pago

Los medios de pago ofrecidos por Mercado Pago varían según cada país.

### Obteniendo los medios de pago

Los medios disponibles pueden ser obtenidos programáticamente de la siguiente forma:

**Pedido**

	<?php
		require_once ('mercadopago.php');
		$mp = new MP ('ACCESS_TOKEN');
		$payment_methods = $mp->get('/v1/payment_methods');
		print_r ($payment_methods);
	?>
	
**Respuesta**

	[
		{
		    "id": "rapipago",
		    "name": "Rapipago",
		    "payment_type_id": "ticket",
		    "status": "active",
		    "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/2002.gif",
		    "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/2002.gif",
		    "deferred_capture": "does_not_apply",
		    "settings": [],
		    "additional_info_needed": []
		},
		...
	]

Obviamente los medios de pago obtenidos en esta respuesta, coincidirán con el país asociado a tu cuenta de Mercado Pago.

### Medios de pago por país

A continuación se indican los medios de pago disponibles para cada país.

#### Argentina

Agregar columna de tiempo de acreditación

Medio de pago   				| Tipo                     | ID  
:-------------------------	| :----------------------- |:--------------------
Visa							| Tarjeta de Crédito       | `visa`
MasterCard					| Tarjeta de Crédito       | `master`
American Express				| Tarjeta de Crédito       | `amex`
Diners Club International	| Tarjeta de Crédito       | `diners`
Tarjeta Naranja				| Tarjeta de Crédito       | `naranja`
Tarjeta Nativa				| Tarjeta de Crédito       | `nativa`
Tarjeta Shopping				| Tarjeta de Crédito       | `shopping`
Tarjeta Cencosud				| Tarjeta de Crédito       | `cencosud`
Cabal							| Tarjeta de Crédito       | `cabal`
Visa Débito       			| Tarjeta de Débito        | `debvisa`
MasterCard Débito			| Tarjeta de Débito        | `debmaster`
PagoFácil						| Efectivo                 | `pagofacil`
RapiPago						| Efectivo                 | `rapipago`
Provincia NET					| Efectivo                 | `provincia`
Carga Virtual					| Efectivo                 | `cargavirtual`
Red Link			       	| Transferencia Bancaria   | `redlink`
Dinero en cuenta	       	| Mercado Pago             | `account_money`

#### Brasil

Medio de pago   				| Tipo                     | ID  
:-------------------------	| :----------------------- |:--------------------
Visa							| Tarjeta de Crédito       | `visa`
MasterCard					| Tarjeta de Crédito       | `master`
American Express				| Tarjeta de Crédito       | `amex`
Hipercard						| Tarjeta de Crédito       | `hipercard`
Diners Club International	| Tarjeta de Crédito       | `diners`
Elo								| Tarjeta de Crédito       | `elo`
Tarjeta Mercado Livre		| Tarjeta de Crédito       | `mercadolivre`
Boleto Bancario				| Efectivo                 | `boleto`
Dinero en cuenta	       	| Mercado Pago             | `account_money`

#### Brasil

Medio de pago   				| Tipo                     | ID  
:-------------------------	| :----------------------- |:--------------------
Visa							| Tarjeta de Crédito       | `visa`

***

## Tipos de documento

Los tipos de documento necesarios para realizar un pago a través de Mercado Pago varían según cada país.

### Obteniendo los tipos de documento

Los tipos de documento pueden ser obtenidos programáticamente de la siguiente forma:

**Pedido**

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
	
Obviamente los tipos de documento obtenidos en esta respuesta, coincidirán con el país asociado a tu cuenta de Mercado Pago.

### Tipos de documento por país

A continuación se indican los tipos de documento aceptados para cada país.

#### Argentina

Tipo de Documento         | Longitud    | ID  
:------------------------ | :---------| :----------
DNI                       | 7/8         | `DNI`
Cédula                    | 1/9         | `CI`
Libreta Cívica            | 6/7         | `LC`
Libreta de Enrolamiento   | 6/7         | `LC`
Otro                      | 5/20        | `Otro`

***
