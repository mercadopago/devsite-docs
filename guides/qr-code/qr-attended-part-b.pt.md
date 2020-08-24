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

## Fluxo do modelo

Explicamos como funciona o modelo atendido:

>![Fluxo de pagamento no ponto de venda QR Mercado Pago](/images/qr-user-flow.pt.png)
---

1. O ponto de venda registra um pedido (1a) e cria um pedido atribuído a uma caixa (1b). Neste momento, o pedido está disponível para leitura (2).
2. Quando o cliente escaneia o QR (3) com o pedido e faz o pagamento (5), uma notificação IPN (4a e 6b) é recebida no servidor do vendedor. Com estes dados obtém-se o estado da encomenda (7a), para validar se está encerrada ou ainda em aberto, com pagamento pendente.

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
    		   "currency_id" : "[FAKER][CURRENCY][ACRONYM]",
    		   "unit_price" : 100.00,
    		   "quantity" : 2
    		    }],
    "sponsor_id": 446566691
}
```
Pode obter mais informações em [Referências do API](https://www.mercadopago.com.br/developers/pt/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/post/).

Assim que o pedido for criado, ele estará disponível para ser **digitalizado e pago**.

> NOTE
> 
> OBS.
> 
> Leve em consideração que se não fez previamente o carregamento do nome de seu negócio ou a logomarca em [sua conta de Mercado Pago](https://www.mercadopago.com.br/settings/account), o título e a imagem do pedido que o cliente veja no app serão as do item carregado. 

## Remover um pedido

Para remover o pedido associado a um QR antes de que expire por validade ou seja encerrado, poderá fazê-lo por meio do método a seguir: 

```curl
curl -X DELETE https://api.mercadopago.com/mpmobile/instore/qr/$USER_ID/$EXTERNAL_ID?access_token=PROD_ACCESS_TOKEN  -d 
```
A resposta será um `HTTP 204 No Content`.

## Receba notificações de suas ordens 

As [notificações IPN](https://www.mercadopago.com.br/developers/pt/guides/notifications/ipn/) (Instant Payment Notification) são a **forma automática de aviso da criação de novas ordens e as atualizações de seus estados**. Por exemplo, se foram aprovadas, recusadas ou se estiverem pendentes. 

Implementa IPN de `merchant_order` junto com uma busca do pedido por `external_reference` como método de contingência.

<a href="https://www.mercadopago.com.ar/developers/pt/guides/notifications/ipn/" target="_blank"> Receber notificações IPN </a>

---
### Próximos passos


> LEFT_BUTTON_REQUIRED_PT
>
> Integração avançada
>
> Conheça as opções disponibilizadas para chegar à integração para o seguinte nível.
>
> [Integração avançada](https://www.mercadopago.com.br/developers/pt/guides/qr-code/advanced-integration/)


> RIGHT_BUTTON_RECOMMENDED_PT
>
> Teste sua integração
>
> Realiza os casos de uso mais frequentes para validar sua integração.
>
> [Teste sua integração](https://www.mercadopago.com.br/developers/pt/guides/qr-code/integration-test/)
