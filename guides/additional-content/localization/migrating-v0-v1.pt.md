# Manual de migração: nova versão da API de pagamentos

Protegemos seus pagamentos sempre. Trabalhamos na nova versão de nossa API para continuar atendendo os mais altos padrões de segurança.

Neste manual, você encontrará todas as informações necessárias para poder atualizar sua API de pagamento para a nova versão (v1).

**Conteúdo do manual**

* [Recursos migrados](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/localization/migrating-v0-v1#recursos_migrados)  
* [Versões de ferramentas para a nova versão](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/localization/migrating-v0-v1#versões_de_ferramentas_para_a_nova_versão) 
* [Exemplos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/localization/migrating-v0-v1#exemplos) 


### Lembre-se: 

* Desde o dia 10 de dezembro de 2018, **a versão antiga não conta mais com suporte**. 
* Se você usa botões de pagamento ou Mercado Shops, a mudança não afeta você.
* Se você tem o seu próprio e-commerce, por favor, consulte sua equipe de tecnologia. 
* Ou, se você trabalha com alguma plataforma, como Magento, Shopify ou outra, por favor, entre em contato com seu suporte técnico.

Se você usa o recurso de search de payments, você precisa de um novo recurso e incluir um novo parâmetro para obter o mesmo resultado. Para mais informações, consulte a [seção de exemplos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/localization/migrating-v0-v1#exemplos).


> NOTE
>
>  (i) Se continuar com a versão anterior (v0), a partir de 1 de abril, você só poderá acessar a busca de informações dos seus pagamentos dos últimos 90 dias. 


## Recursos migrados

A seguir, você encontrará os recursos migrados e seus equivalentes.

| Uso | Método | URI do Recurso deprecado | URI do Recurso equivalente | Referência |
| --- | --- | --- | --- | --- |
| Devoluções | `POST` | /collections/$payment_id/refunds | /v1/payments/$payment_id/refunds |- |
| Devoluções | `PUT` | /collections/$payment_id | /v1/payments/$payment_id/ | [acesse](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_id/put)	 |
| Atualização de pagamento | `PUT` | /payments/$payment_id | /v1/payments/$payment_id/ | [acesse](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_id/put) |
| Atualização de pagamento | `PUT` | /collections/$payment_id | /v1/payments/$payment_id/ | [acesse](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_id/put) |
| Pagamentos | `GET` | /payments/$payment_id | /v1/payments/$payment_id/ | [acesse](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_id/get) |
| Pagamentos | `GET` | /collections/$payment_id | /v1/payments/$payment_id/ | [acesse](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_id/get) |
| Notificação de pagamentos| `GET` | /collections/notifications/$payment_id | /v1/payments/$payment_id/ |[acesse](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_id/get) |
| Busca de pagamentos | `GET` | /payments/search | /v1/payments/search | [acesse](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_search/get)|
| Busca de pagamentos | `GET` | /collections/search | /v1/payments/search | [acesse](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_search/get)|

## Versões válidas das ferramentas para a nova versão 

Se você usa as nossas ferramentas, para a nova versão da API, é necessário que as versões instaladas sejam as que estão detalhadas na tabela acima. 

| Ferramenta | Versão |
| --- | --- |
| Magento 1.x | 2.11.4 |
| Adobe Commerce (Magento).x | 2.2.0 |
| Opencart 3.x | 4.1 |
| Opencart 2.3 | 3.2 |
| WooCommerce | 3.0.17 |
| WPCommerce | 4.2.6 |
| OsCommerce | none |
| VirtueMart | 2.2.0 |
| ZenCart | 1.0.3 |
| Prestashop 1.6.x | 3.1.0 |
| Prestashop 1.7.x | 1.0.12 |
| SDK PHP 0.x | 0.5.3 |
| SDK PHP 1.x | 1.1.4 |
| SDK Java 0.x | 0.3.5 |
| SDK Java 1.x | 1.0.19 |
| SDK .net 0.x | 0.3.4 |
| SDK .net 1.x | 1.0.10 |
| SDK ruby 0.x | 0.3.6 |
| SDK python 0.x | 0.3.5 |
| SDK NodeJS 1.x | 1.0.16 |

## Exemplos 

### Busca de um pagamento

Para a busca de pagamentos, você deve usar o endpoint /v1/payments/search
Lembre-se que o resultado desta busca traz os pagamentos como payer e collector de quem a realiza.

Para manter a consistência semântica com os resultados do endpoint /payments/search, você deve adicionar o parâmetro payer.id com o seu identificador de usuário.

```json
curl -X GET \
 -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
 "http://api.mercadopago.com/v1/payments/search?site_id=MLA&limit=50&range=date_created&end_date=NOW&begin_date=NOW-90DAYS&sort=date_created&criteria=desc&payer.id=PAYER_ID" 
```

Para manter a consistência semântica com os resultados do endpoint /payments/search, você deve adicionar o parâmetro payer.id com o seu identificador de usuário.

```json
curl -X GET \
 -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
 "http://api.mercadopago.com/v1/payments/search?site_id=MLA&limit=50&range=date_created&end_date=NOW&begin_date=NOW-90DAYS&sort=date_created&criteria=desc&collector.id=COLLECTOR_ID" 
```

### Devolução total

```json
curl -X POST \
        -H "content-type: application/json" \
        -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
        "https://api.mercadopago.com/v1/payments/:id/refunds"
```


### Devolução parcial

```curl
curl -X POST \
        -H 'content-type: application/json' \
        -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
        'https://api.mercadopago.com/v1/payments/12861583/refunds' \
        -d '{
                "amount": 5.0
        }'
```

Se precisar fazer adaptações, lembre-se que é importante fazer essa mudança antes da data limite.


Se você tiver alguma dúvida ou precisar de ajuda para fazer essas alterações, [entre em contato](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/support) conosco.

Equipe Mercado Pago