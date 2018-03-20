# Tipos de documentos

Os tipos de documentos aceitos ao efetuar uma cobrança através do Mercado Pago variam de acordo com o país.

## Obtenha os tipos de documentos

Os tipos de documentos aceitos podem ser obtidos da seguinte forma:

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


**Resposta**

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

Os resultados incluídos nesta resposta coincidirão com o país associado à sua conta Mercado Pago. Você poderá obter mais informações sobre este recurso e seus atributos em [Referência da API](/reference).

## Tipos de documentos por país

Os tipos de documentos aceitos de acordo com cada país estão indicados abaixo.

Apenas o México não requer esta informação.

### Argentina

Tipo de documento               | ID                       |
:------------------------------ | :----------------------- |
Documento Nacional de Identidad | `DNI`                    |
Cédula de Identidad             | `CI`                     |
Libreta Cívica                  | `LC`                     |
Libreta de Enrolamiento         | `LE`                     |
Outros                            | `Otro`                   |

### Brasil

Tipo de documento           | ID                       |
:-------------------------- | :----------------------- |
Cadastro de Pessoas Físicas | `CPF`                    |

### Chile

Tipo de documento          | ID                       |
:------------------------- | :----------------------- |
Rol Único Tributario       | `RUT`                    |
Outros                       | `Otro`                   |

### Colômbia

Tipo de documento                   | ID                       |
:---------------------------------- | :----------------------- |
Cédula de Ciudadanía                | `CC`                     |
Cédula de Extranjeria               | `CE`                     |
Número de Identificación Tributaria | `NIT`                    |
Outros                                | `Otro`                   |

### Peru

Tipo de documento                | ID                       |
:------------------------------- | :----------------------- |
Documento Nacional de Identidad  | `DNI`                    |
Carné de Extranjería             | `CE`                     |
Registro Único de Contribuyentes | `RUC`                    |

### Uruguai

Tipo de documento          | ID                       |
:------------------------- | :----------------------- |
Cédula de Identidad        | `CI`                    |
Outros                       | `Otro`                   |

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
Passaporte                       | `Pasaporte`              |
