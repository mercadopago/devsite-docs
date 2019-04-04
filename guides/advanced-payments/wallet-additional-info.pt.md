# Informação adicional

É possível enviar informações que podem melhorar a análise de prevenção à fraudes e a taxa de aprovação. Para isso, é necessário enviar o campo `additional_info` com as informações do pagador e do endereço de entrega. Quanto mais informações forem enviadas, melhor será a taxa de aprovação de pagamentos.

Os usuários devem ser redirecionados para o seguinte endereço:

`https://auth.mercadopago.com.br/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>&scopes=read,write,offline_access,wallet-payments`

onde:

* `<APP_ID>` é o valor do APP_ID.
* `<REDIRECT_URI>` é o valor inserido no campo `Redirect Uri`.

Você receberá um código de autorização no URL especificado:

`http://<REDIRECT_URI>?code=AUTHORIZATION_CODE`

Esse `AUTHORIZATION_CODE` ele será usado para criar as credenciais e tem um tempo de validade de 10 minutos.

### Obter o access token e os dados do pagador

Use o código de autorização, obtido na etapa anterior, para obter as credenciais do usuário por meio da API OAuth e, assim, poder efetuar um pagamento acessando os meios de pagamento da sua carteira.

#### Request
```curl
curl -X POST \
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments?access_token=SELLER_TOKEN' \
```

#### Body
```json
{
   "wallet_payment":{
      "transaction_amount":700.50,
      "description":"Payment Google",
      "external_reference":"Pago_123",
      "access_token":"PAYER_ACCESS_TOKEN"      
   },
   "binary_mode": true,
   "additional_info": {
      "shipments": {
         "receiver_address": {
         "zip_code": "1111",
         "street_name": "Avenida Uno y tres cuartos",
         "street_number": 123,
         "floor": 4,
         "apartment": "C"
      }
    },
    "payer": {
      "address": {
         "street_name": "Calle Cuatro",
         "street_number": "342"
      }
    }
  }
}
```
