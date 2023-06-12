# Transações via Checkout Pro

Ao realizar uma requisição de pagamento (`/checkout/preferences`), basta atribuir o ID da sua conta Mercado Pago ao campo `sponsor_id` no corpo (body) da requisição.

Exemplo:

```bash
curl --location --request POST 'https://api.mercadolibre.com/checkout/preferences' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}' \
--data-raw '{
    "auto_return": "all",
    "back_urls": {
        "success": "https://httpbin.org/get?status=pago",
        "failure": "https://httpbin.org/get?status=recusado",
        "pending": "https://httpbin.org/get?status=pendente"
    },
    "redirect_urls": {
        "failure": "https://httpbin.org/get?status=redirectrecusado",
        "pending": "https://httpbin.org/get?status=redirectpendente",
        "success": "https://httpbin.org/get?status=redirectsuccess"
    },
    "notification_url": "https://webhook.site/d69d1102-b677-44f6-ae6d-104a7e813b93",
    "expires": false,
    "external_reference": "Pedido - Teste ",
    "date_of_expiration": "2022-04-01T22:59:00.000-04:00",
    "sponsor_id": "{{ADICIONE O ID DE SUA CONTA MERCADO PAGO REFERENTE A SUA PLATAFORMA}}",
    "items": [
        {
            "id": "1234",
            "currency_id": "BRL",
            "title": "Produto",
            "category_id": "entertainment",
            "quantity": 1,
            "unit_price": 4
        },
        {
            "id": "1234",
            "currency_id": "BRL",
            "title": "frete",
            "category_id": "entertainment",
            "quantity": 1,
            "unit_price": 1
        }
    ],
  
    "payment_methods": {
        "default_installments": null,
        "default_payment_method_id": null,
        "excluded_payment_types": []
    },
    "installments": null,
    "shipments": {
        "receiver_address": {
	         "zip_code": "95630000",
	         "street_name": "Avenida Shipments",
	         "street_number": "15"
        }
    }
}'
```

> NOTE
>
> Atenção!
>
> A informação do campo `collector_id` não é a mesma do `sponsor_id`.
> * O `collector-id`: é o vendedor;
> * O `sponsor-id`: é a plataforma (onde está o vendedor), como Vtex, LI, Magento, etc.

> NOTE
>
> Observação
>
> Tanto o `collector` quanto o `sponsor-id` podem ser obtidos no passo [Como obter o Sponsor ID](/developers/pt/guides/integration-guide-for-partners/how-to-get-sponsor-id). No entanto, são contas do Mercado Pago distintas.
Se você enviar a mesma informação nos dois campos, a API retornará um erro: "Invalid users involved".

> Ainda tem dúvidas sobre credenciais? Acesse o material a seguir: [Onde posso encontrar as credenciais](https://www.mercadopago.com.br/developers/pt/support/20214).