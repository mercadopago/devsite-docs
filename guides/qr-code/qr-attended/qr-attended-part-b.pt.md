---
sites_supported:
  - mla
  - mpe
  - mco
  - mlu
  - mlm
  - mlc
  - mlb
---

#  Integrar o modelo QR atendido

Para receber por meio de um código QR modelo atendido, deverá criar um pedido e associá-lo ao caixa onde quiser receber. 

## Criar um pedido

```curl
curl -X POST 
https://api.mercadopago.com/mpmobile/instore/qr/$USER_ID/$EXTERNAL_ID?access_token=PROD_ACCESS_TOKEN -d
{
    "external_reference": "Ticket-0001",
    "notification_url": "www.yourserver.com",
    "items" :[{
    		   "title" : "Produto 1",
    		   "currency_id" : "[FAKER][CURRENCY][ACRONYM]",
    		   "unit_price" : 120.00,
    	     "quantity" : 1,
           "description": "Produto de Mercado Pago",
           "picture_url": "https://bit.ly/2lCRcEN"
    		    },
            {
    		   "title" : "Produto 1",
    		   "currency_id" : ("[FAKER][CURRENCY][ACRONYM]"),
    		   "unit_price" : 100.00,
    		   "quantity" : 2
    		    }],
    "sponsor_id": 446566691
}
```
Pode obter mais informações em [Referências do API](https://www.mercadopago.com.br/developers/pt/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/post/).

> NOTE
> 
> OBS.
> 
> Leve em consideração que se não fez previamente o carregamento do nome de seu negócio ou a logomarca em [sua conta de Mercado Pago](https://www.mercadopago.com.br/settings/account), o título e a imagem do pedido que o cliente veja no app serão as do item carregado. 



## Validade do pedido

Por defeito, o pedido do QR expira aos 10 minutos de ser criado ou automaticamente ao ser encerrado. 

Se um tempo de expiração diverso for requerido, poderá enviar o header `X-Ttl-Store-Preference` com o tempo desejado em segundos. Por exemplo, para que esteja disponível durante 5 minutos, o header `X-Ttl-Store-Preference`: 300 deverá ser enviado.

## Remover um pedido

Para remover o pedido associado a um QR antes de que expire por validade ou seja encerrado, poderá fazê-lo por meio do método a seguir: 

```curl
curl -X DELETE https://api.mercadopago.com/mpmobile/instore/qr/$USER_ID/$EXTERNAL_ID?access_token=PROD_ACCESS_TOKEN  -d 
```
A resposta será um `HTTP 204 No Content`.

### Próximos passos


> LEFT_BUTTON_REQUIRED_PT
>
> Integração avançada
>
> Conheça as opções disponibilizadas para chegar à integração para o seguinte nível.
>
> [Integração avançada](https://www.mercadopago.com.br/developers/pt/guides/qr-code/final-steps/advanced-integration/)


> RIGHT_BUTTON_RECOMMENDED_PT
>
> Teste sua integração
>
> Realiza os casos de uso mais frequentes para validar sua integração.
>
> [Teste sua integração](https://www.mercadopago.com.br/developers/pt/guides/qr-code/final-steps/integration-test/)
