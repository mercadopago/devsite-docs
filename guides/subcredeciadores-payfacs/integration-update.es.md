# Adecuación de la integración

Para actualizar la integración de un subacreditador, se deberá actualizar la propiedad `forward_data.sub_merchant` con los campos que describimos a continuación. 

```JavaScript
{
"payer": {...},
"forward_data": {
"sub_merchant": {
    "sub_merchant_id": 123123,
            "mcc": "5462",
            "country": "BRA",
            "address_door_number": 1,
            "zip": "2222222",
            "document_number": "222222222222222",
            "city": "SÃO PAULO",
            "address_street": "RUA A",
	     "business_name": "LOJINHA DO ZÉ",
            "region_code_iso": "BR-MG",
            "region_code": "BR",
            "document_type": "CNPJ",
            "phone": "123123123"
  	}
  }
  "transaction_amount": 20,
  "description": "...",
  "token": "....",
  "statement_descriptor": "PRUEBA",
  "issuer_id": ...,
  "payment_method_id": "...",
  "amounts": {...},
  "installments": 1,
  "pos_id": "....",
  "external_reference": "...",
  }
```

| Campo | Tipo | Descripción | Requerido/Opcional |
|---|---|---|---|
| `document_type` | Texto | Número de CPF o CNPJ del subestablecimiento comercial | Requerido |
| `document_number` | Texto | Identificación del CPF o CNPJ del subestablecimiento comercial | Requerido |
| `mmc` | Texto | MMC del subestablecimiento conforme a la decisión de la Abecs y/o el CNAE primario | Requerido |
| `sub_merchant_id` | Texto | Código de establecimiento del subestablecimiento comercial | Requerido |
| `business_name` | Texto | Nombre del subestablecimiento comercial | Requerido |
| `address_street` | Texto | Calle en donde el subcomercio está localizado | Requerido |
| `address_door_number` | Número | Número de la calle en donde el subcomercio está ubicado | Requerido |
| `city` | Texto | Ciudad en donde el subcomercio está ubicado | Requerido |
| `region_code_iso` | Texto | Estado en donde el subcomercio está ubicado | Requerido |
| `region_code` | Texto | Código postal del subcomercio | Requerido |
| `country` | Texto | País en donde el subcomercio está ubicado | Requerido |
| `zip` | Texto | CEP del subcomercio | Requerido |
| `phone` | Texto | Teléfono del subcomercio | Requerido |

> WARNING
>
> Importante
>
> La circular 3978 determina que todos los Facilitadores de Pago identifiquen a los beneficiarios finales en el momento de la transacción. Para cumplir con esta norma, se vuelve obligatorio enviar los parámetros de la propiedad `sub_merchant` que fueron detallados en la tabla anterior. En caso de que los campos no sean enviados, la bandera de la tarjeta podrá aplicar penalizaciones al Facilitador de Pago.