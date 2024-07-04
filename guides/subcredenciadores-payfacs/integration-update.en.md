# Integration Update

> WARNING
>
> Important
>
> Circular BCB 3978 no. determines that all Payment Facilitators identify the ultimate beneficiaries at the time of the transaction. To comply with this regulation, it becomes mandatory to send the parameters of the `sub_merchant` property that are detailed in the table below. In case the fields are not sent, the card networks may apply penalties that will be passed on to the Payment Facilitator.

To use the Payment Facilitator integration, it is necessary to update the `forward_data.sub_merchant` property for sending the fields described below.

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
	    "legal_name": "LOJINHA DO ZÉ",
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

| Field | Type | Description | Required/Optional | Example |
|---|---|---|---|---|
| `sub_merchant_id` | Text | Submerchant code | Required | 123123 |
| `mcc` | Text | Submerchant MCC according to Abecs decision and/or primary CNAE | Required | 5462 |
| `country` | Text | Country where the submerchant is located | Required | BRA |
| `address_door_number` | Number | Street number where the submerchant is located | Required | 1 |
| `zip` | Text | CEP of the submerchant | Required | 2222222 |
| `document_number` | Text | CPF or CNPJ identification of the submerchant | Required | 222222222222222 |
| `city` | Text | City where the submerchant is located | Required | SÃO PAULO |
| `address_street` | Text | Street where the submerchant is located | Required | RUA A |
| `legal_name` | Text | Name of the submerchant | Required | LOJINHA DO ZÉ |
| `region_code_iso` | Text | State where the submerchant is located | Required | BR-MG |
| `region_code` | Text | Postal code of the submerchant | Required | BR |
| `document_type` | Text | CPF or CNPJ number of the submerchant | Required | CNPJ |
| `phone` | Text | Phone number of the submerchant | Required | 123123123 |
| `url` | Text | Payment Facilitator URL | Required | www.paymentfacilitator.com.br |