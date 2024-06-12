# Atualização da integração

> WARNING
>
> Importante
>
> A Circular BCB nº3978/2020 determina que todos os Facilitadores de Pagamento identifiquem os beneficiários finais no momento da transação. Para cumprimento desta norma, se torna obrigatório enviar os parâmetros da propriedade `sub_merchant` que foram detalhados na tabela anterior. Caso os campos não sejam enviados, a bandeira poderá aplicar penalidades que serão repassadas ao Facilitador de Pagamento.

Para utilizar a integração de Facilitador de Pagamento, é necessário atualizar a propriedade `forward_data.sub_merchant` para envio dos campos descritos abaixo.

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

| Campo | Tipo | Descrição | Obrigatório/Opcional | Exemplo |
|---|---|---|---|---|---|
| `sub_merchant_id` | Texto | Código do sub comércio. | Obrigatório | 123123 |
| `mcc` | Texto | MCC do sub comércio conforme deliberação da Abecs e/ou CNAE primário. | Obrigatório | 5462 |
| `country` | Texto | País em que o sub comércio está localizado. | Obrigatório | BRA |
| `address_door_number` | Número | Número da rua onde o sub comércio está localizado. | Obrigatório | 1 |
| `zip` | Texto | CEP do sub comércio. | Obrigatório | 2222222 |
| `document_number` | Texto | Identificação do CPF ou CNPJ do sub comércio. | Obrigatório | 222222222222222 |
| `city` | Texto | Cidade onde o sub comércio está localizado. | Obrigatório | SÃO PAULO |
| `address_street` | Texto | Rua onde o sub comércio está localizado. | Obrigatório | RUA A |
| `business_name` | Texto | Nome do sub comércio. | Obrigatório | LOJINHA DO ZÉ |
| `region_code_iso` | Texto | Estado onde o sub comércio está localizado. | Obrigatório | BR-MG |
| `region_code` | Texto | Código postal do subcomércio. | Obrigatório | BR |
| `document_type` | Texto | Número do CPF ou CNPJ do sub comércio. | Obrigatório | CNPJ |
| `phone` | Texto | Telefone do sub comércio. | Obrigatório | 123123123 |
| `url` | Texto | URL do Facilitador de Pagamento | Obrigatório | www.nomedofacilitador.com.br |