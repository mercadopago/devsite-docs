# Migração da versão V0 para V1 da API de Mercado Pago

No Mercado Pago procuramos sempre otimizar nossa plataforma oferecendo a mais alta eficiência e segurança no processamento de pagamentos.

No momento, estamos trabalhando na migração da nossa API V0 para a V1 com o objetivo de manter os mais altos padrões de qualidade.

Consequentemente, o Mercado Pago exigirá que a nova versão da API seja utilizada a partir de 30 de julho de 2018.

Depois desse prazo, a versão V0 será desativada e qualquer tentativa de conexão utilizando-a falhará.

### Pontos para serem levados em conta

* A alteração terá impacto **a partir de 30 de julho de 2018.**
* Se você usa apenas os botões de pagamento de Mercado Pago, essa alteração não afetará você.
* Se você usa apenas Mercado Shops, essa alteração não afetará você.
* Caso tenha seu **próprio e-commerce, consulte sua equipe de TI**.
* Caso **opere com alguma plataforma de e-commerce**, como por exemplo: Magento, Shopify ou outros **Consulte seu respectivo suporte técnico**.

## Recursos migrados

A tabela abaixo traz uma relação dos recursos migrados.

| Uso                      | Método | URI do Recurso deprecado               | URI do Recurso equivalente       | Referência                                                      |
|--------------------------|--------|----------------------------------------|----------------------------------|-----------------------------------------------------------------|
| Devoluções               | `POST` | /collections/$payment_id/refunds       | /v1/payments/$payment_id/refunds |-                                                                |
| Devoluções               | `PUT`  | /collections/$payment_id               | /v1/payments/$payment_id/        |-                                                                |
| Atualização de pagamento | `PUT`  | /payments/$payment_id                  | /v1/payments/$payment_id/        |[acesse](/reference/payments/endpoints/_payments_id/put.yaml)    |
| Atualização de pagamento | `PUT`  | /collections/$payment_id               | /v1/payments/$payment_id/        |[acesse](/reference/payments/endpoints/_payments_id/put.yaml)    |
| Pagamentos               | `GET`  | /payments/$payment_id                  | /v1/payments/$payment_id/        |[acesse](/reference/payments/endpoints/_payments_id/get.yaml)    |
| Pagamentos               | `GET`  | /collections/$payment_id               | /v1/payments/$payment_id/        |[acesse](/reference/payments/endpoints/_payments_id/get.yaml)    |
| Notificação de pagamentos| `GET`  | /collections/notifications/$payment_id | /v1/payments/$payment_id/        |[acesse](/reference/payments/endpoints/_payments_id/get.yaml)    |
| Busca de pagamentos      | `GET`  | /payments/search                       | /v1/payments/search              |[acesse](/reference/payments/endpoints/_payments_search/get.yaml)|
| Busca de pagamentos      | `GET`  | /collections/search                    | /v1/payments/search              |[acesse](/reference/payments/endpoints/_payments_search/get.yaml)|

### Exemplos

#### Devolução Total
```json
curl -X POST \
        -H "content-type: application/json" \
        "https://api.mercadopago.com/v1/payments/:id/refunds?access_token=ENV_ACCESS_TOKEN"
```

#### Devolução Parcial

```curl
curl -X POST \
        -H 'content-type: application/json' \
        'https://api.mercadopago.com/v1/payments/12861583/refunds?access_token=ENV_ACCESS_TOKEN' \
        -d '{
                "amount": 5.0
        }'
```

Caso você precise fazer adaptações, **é importante que você se lembre de fazer essa alteração em tempo hábil, porque caso contrário, é muito provável que suas conexões com o Mercado Pago comecem a falhar.**

Se você tiver alguma dúvida ou precisar de ajuda para concluir com êxito essa mudança, entre em contato conosco através do seguinte [formulário de contato](https://www.mercadopago.com.br/developers/pt/support).

Equipe do Mercado Pago.
