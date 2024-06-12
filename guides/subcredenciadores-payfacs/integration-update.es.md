# Actualización de la integración

> WARNING
>
> Importante
>
> La Circular BCB 3978 nº determina que todos los Facilitadores de Pago identifiquen a los beneficiarios finales en el momento de la transacción. Para cumplir con esta norma, se vuelve obligatorio enviar los parámetros de la propiedad `sub_merchant` que fueron detallados en la tabla anterior. En caso de que los campos no sean enviados, la bandera de la tarjeta podrá aplicar penalizaciones que serán trasladadas al Facilitador de Pago.

Para utilizar la integración de Facilitador de Pago, es necesario actualizar la propiedad `forward_data.sub_merchant` para el envío de los campos descritos a continuación.

```json
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
      "phone": "123123123",
      "url": "www.nomedofacilitador.com.br"
    }
  },
  "transaction_amount": 20,
  "description": "...",
  "token": "....",
  "statement_descriptor": "PRUEBA",
  "issuer_id": ...,
  "payment_method_id": "...",
  "amounts": {...},
  "installments": 1,
  "pos_id": "....",
  "external_reference": "..."
}
```

| Campo | Tipo | Descripción | Requerido/Opcional | Ejemplo | 123123 |
|---|---|---|---|---|---|
| `sub_merchant_id` | Texto | Código del subcomercio | Requerido | 123123 |
| `mcc` | Texto | MMC del subcomercio conforme a la decisión de la Abecs y/o el CNAE primario | Requerido | 5462 |
| `country` | Texto | País en donde el subcomercio está ubicado | Requerido | BRA |
| `address_door_number` | Número | Número de la calle en donde el subcomercio está ubicado | Requerido | 1 |
| `zip` | Texto | CEP del subcomercio | Requerido | 2222222 |
| `document_number` | Texto | Identificación del CPF o CNPJ del subcomercio | Requerido | 222222222222222 |
| `city` | Texto | Ciudad en donde el subcomercio está ubicado | Requerido | SÃO PAULO |
| `address_street` | Texto | Calle en donde el subcomercio está localizado | Requerido | RUA A |
| `business_name` | Texto | Nombre del subcomercio | Requerido | LOJINHA DO ZÉ |
| `region_code_iso` | Texto | Estado en donde el subcomercio está ubicado | Requerido | BR-MG |
| `region_code` | Texto | Código postal del subcomercio | Requerido | BR |
| `document_type` | Texto | Número del CPF o CNPJ del subcomercio | Requerido | CNPJ |
| `phone` | Texto | Teléfono del subcomercio | Requerido | 123123123 |
| `url` | Texto | URL del Facilitador de Pago | Requerido | www.nomedofacilitador.com.br |