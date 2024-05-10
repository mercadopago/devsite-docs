# Atualização da integração

Para atualizar a integração de um subcredenciador, é necessário atualizar a propriedade `forward_data.sub_merchant` com os campos descritos abaixo.

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

| Campo | Tipo | Descrição | Obrigatório/Opcional |
|---|---|---|---|
| `document_type` | Texto | Número do CPF ou CNPJ do sub estabelecimento comercial | Obrigatório |
| `document_number` | Texto | Identificação do CPF ou CNPJ do sub estabelecimento comercial | Obrigatório |
| `mmc` | Texto | MCC do sub estabelecimento conforme deliberação da Abecs e/ou CNAE primário | Obrigatório |
| `sub_merchant_id` | Texto | Código do estabelecimento do sub estabelecimento comercial | Obrigatório |
| `business_name` | Texto | Nome do sub estabelecimento comercial | Obrigatório |
| `address_street` | Texto | Rua onde o sub comércio está localizado | Obrigatório |
| `address_door_number` | Número | Número da rua onde o subcomércio está localizado | Obrigatório |
| `city` | Texto | Cidade onde o sub comércio está localizado | Obrigatório |
| `region_code_iso` | Texto | Estado onde o sub comércio está localizado | Obrigatório |
| `region_code` | Texto | Código postal do subcomércio | Obrigatório |
| `country` | Texto | País em que o sub comércio está localizado | Obrigatório |
| `zip` | Texto | CEP do subcomércio | Obrigatório |
| `phone` | Texto | Telefone do subcomércio | Obrigatório |

> WARNING
>
> Importante
>
> A circular 3978 determina que todos os Facilitadores de Pagamento identifiquem os beneficiários finais no momento da transação. Para cumprimento desta norma, se torna enviar os parâmetros da propriedade `sub_merchant` que foram detalhados na tabela anterior. Caso os campos não sejam enviados, a bandeira poderá aplicar penalidades ao Facilitador de Pagamento. 

