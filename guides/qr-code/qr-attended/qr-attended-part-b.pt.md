---
sites_supported:
  - mla
  - mpe
  - mco
  - mlu
  - mlm
  - mlc
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
    		   "title" : [FAKER][COMMERCE][PRODUCT_NAME],
    		   "currency_id" : [FAKER][CURRENCY][ACRONYM],
    		   "unit_price" : 120.00,
    	     "quantity" : 1,
           "description": "Producto de Mercado Pago",
           "picture_url": "https://bit.ly/2lCRcEN"
    		    },
            {
    		   "title" : [FAKER][COMMERCE][PRODUCT_NAME],
    		   "currency_id" : [FAKER][CURRENCY][ACRONYM],
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

<div>
<a href="https://www.mercadopago.com.br/developers/pt/guides/qr-code/final-steps/advanced-integration/" style="text-decoration:none;color:inherit">       
<blockquote class="next-step-card next-step-card-left">
<p class="card-note-title">Integração avançada<span class="card-status-tag card-status-tag-required">REQUERIDO</span></p>
 <p>Conheça as opções disponibilizadas para chegar à integração para o seguinte nível.</p>
</blockquote>
</a>    
<a href="https://www.mercadopago.com.br/developers/pt/guides/qr-code/final-steps/integration-test/" style="text-decoration:none;color:inherit">
<blockquote class="next-step-card next-step-card-right">
<p class="card-note-title">Teste sua integração<span class="card-status-tag card-status-tag-recommended">RECOMENDADO</span></p>
 <p>Realiza os casos de uso mais frequentes para validar sua integração.</p>
</blockquote>
</a>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>