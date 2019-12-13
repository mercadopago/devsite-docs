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

# Sucursais e Caixas

## Introdução

As **lojas** e **caixas** são os conceitos que você usará no Mercado Pago para gerenciar seus negócios e manter um registro das suas contas. Você pode ter vários caixas dentro de uma loja.

| Termo       |  Descrição                                                 |
| ------------- | ------------------------------------------------------------ |
| Loja      | É um **estabelecimiento físico** onde seus clientes podem adquirir seus produtos ou serviços. Você pode ter várias lojas numa mesma conta.  |
| Caixa           | É um **ponto de venda** que existe numa sucursal ou loja física. Cada caixa terá um código QR unívoco vinculado.  |

> ![Cajas y Sucursales](/images/stores_pos.pt.png) 



## Lojas

### Quais são os benefícios de criar sucursais?

Os benefícios de criar Sucursais são:

- **Conseguir traçabilidade**. Cada pagamento ficará associado a uma sucursal e no momento de obter seus relatórios de conciliação será valioso para identificar transações por sucursal. 
- **Visibilidade em mapas de sucursais**.  As sucursais criadas aparecem no mapa dos app de Mercado Pago ou Mercado Livre à medida que forem tendo pagamentos. Assim, conferem visibilidade a todos os clientes sobre a existência da loja. 
- **Aportar uma melhor organização dos caixas**. 

### Como criar uma sucursal?

Para criar uma sucursal, você tem que declarar seu nome, horários de trabalho, localização e alguma referência que o identifique. 

Para gerá-la, execute o código a seguir: 

[[[
 ```curl
curl -X POST https://api.mercadopago.com/users/$COLLECTOR_ID/stores?access_token=PROD_ACCESS_TOKEN -d
{  
   "name":"Loja Instore",
   "business_hours":{  
      "monday":[  
         {  
            "open":"08:00",
            "close":"13:00"
         },
         {  
            "open":"15:00",
            "close":"18:00"
         }
      ],
      "tuesday":[  
         {  
            "open":"08:00",
            "close":"18:00"
         }
      ]   
   },
   "location":{  
      "street_number":"3039",
      "street_name":"Caseros",
      "city_name":"Belgrano",
      "state_name":"Capital Federal",
      "latitude":-32.8897322,
      "longitude":-68.8443275,
      "reference":"3er Piso"
   },
   "external_id":"STORE001"
}
```
]]]

Você pode obter mais informações nas [Referências de API](https://www.mercadopago.com.br/developers/pt/reference/stores/_users_user_id_stores/post/).


## Caixas

Tendo sucursais criadas, você pode criar seus caixas. Considere o seguinte: 

| Termo       |  Descrição                                                 |
| ------------- | ------------------------------------------------------------ |
| `EXTERNAL_STORE_ID`     | Vincula o Caixa com a Sucursal. É um campo requerido e é o mesmo *external_id* da Sucursal previamente criada. |
| `EXTERNAL_ID`           | Identifica univocamente cada caixa. É requerido e não se pode alterar nem repetir numa mesma conta de Mercado Pago. |
| `URL`           | Somente é utilizado no modelo desatendido. Neste campo se declara o URL de um serviço de seu domínio ao qual  Mercado Pago consultará se houver um pedido disponível.  |

[[[
 ```curl
curl -X POST https://api.mercadopago.com/pos?access_token=PROD_ACCESS_TOKEN -d     
{
  "name":"Caixa Principal", 
  "fixed_amount": true,
  "category": 621102,
  "external_store_id": "STORE001",
  "external_id": "CAIXA0001",
  "url": "https://www.miempresa.com/pay-mp?locationId=6232&positionId=1"
}
```
]]]

Você pode obter mais informações em [Referências de API](https://www.mercadopago.com.br/developers/pt/reference/pos/_pos/post/).

Uma vez criado o caixa, poderemos ver no “Response” os links para diferentes entregáveis do QR, junto com outros dados relevantes do caixa. 



### Próximos passos


> LEFT_BUTTON_RECOMMENDED_PT
>
> Integrar o modelo QR atendido
>
> Se em seu processo de venda for necessária a participação de um operador, revise esse modelo!
>
> [Integrar o modelo QR atendido](https://www.mercadopago.com.br/developers/pt/guides/qr-code/qr-attended/qr-attended-part-a/)


> RIGHT_BUTTON_RECOMMENDED_PT
>
> Integrar o modelo autônomo do QR
>
> Se a venda só pode ser concretizada com a ação do cliente, esse é o seu modelo!
>
> [Integrar o modelo autônomo do QR](https://www.mercadopago.com.br/developers/pt/guides/qr-code/qr-unattended/qr-unattended-part-a/)