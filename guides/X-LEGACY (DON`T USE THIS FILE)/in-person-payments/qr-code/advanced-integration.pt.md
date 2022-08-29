# Integração avançada

## Devoluções de seus pagamentos 

----[mla, mlm, mco, mlu, mlb, mlc]----

As devoluções acontecem quando o pagamento foi realizado, porém, o vendedor decide anulá-lo total ou parcialmente. Você poderá achar todas as informações na [seção Devoluções e cancelamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/cancellations-and-refunds).

------------

----[mpe]----

As devoluções acontecem quando o pagamento foi realizado, porém, o vendedor decide anulá-lo totalmente. Você poderá achar todas as informações na [seção Devoluções e cancelamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/cancellations-and-refunds).

------------

> WARNING
> 
> Nota
> 
> Leve em consideração que para pagamentos presenciais somente poderá realizar devoluções, mas não cancelamentos. 

Veja o processo de estorno para pagamentos via QR CODE [neste vídeo tutorial.](https://youtu.be/6Zi1ayIaFqs?list=PLCazXKuqZp3g4WfhNlhsB3FL9-1z7gUny)

## Obter dados do pedido

Se você deseja obter o pedido atual de uma caixa, também pode fazê-lo.

```curl
curl -X GET \
-H 'Authorization: Bearer ACCESS_TOKEN' \
https://api.mercadopago.com/instore/qr/seller/collectors/USER_ID/pos/EXTERNAL_POS_ID/orders
```
Pode obter mais informações em [Referências do API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_pos_external_pos_id_orders/get).


## Gere relatórios de suas vendas

Integre os [relatórios de conciliação de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/general-considerations/reconciliation-reports) com seu sistema para conciliar suas vendas e conhecer as movimentações de sua conta. 


## Teste e valide sua integração

Detalhamos todos os casos necessários que deve comprovar para validar que seu sistema esteja integrado corretamente com Mercado Pago. 
Você pode achar todos os casos na [seção de Testes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/qr-code/integration-test).

Veja mais detalhes neste [vídeo tutorial](https://youtu.be/izpBBw3Ivi4?list=PLCazXKuqZp3g4WfhNlhsB3FL9-1z7gUny).

---
### Próximos passos


> LEFT_BUTTON_RECOMMENDED_PT
>
> Teste sua integração
>
> Realize os casos de uso mais frequentes para validar sua integração.
>
> [Teste sua integração](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/qr-code/integration-test)
