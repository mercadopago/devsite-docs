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

# Integração avançada

## Devoluções de seus pagamentos 

As devoluções acontecem quando o pagamento foi realizado, porém, o vendedor decide anulá-lo total ou parcialmente. Você poderá achar todas as informações na [seção Devoluções e cancelamentos](https://www.mercadopago.com.br/developers/pt/guides/manage-account/cancellations-and-refunds/).

> WARNING
> 
> Nota
> 
> Leve em consideração que para pagamentos presenciais somente poderá realizar devoluções, mas não cancelamentos. 

## Validade do pedido

Por defeito, o pedido do QR expira aos 10 minutos de ser criado ou automaticamente ao ser encerrado. 

Se um tempo de expiração diverso for requerido, poderá enviar o header `X-Ttl-Store-Preference` com o tempo desejado em segundos. Por exemplo, para que esteja disponível durante 5 minutos, o header `X-Ttl-Store-Preference: 300` deverá ser enviado.

## Gere relatórios de suas vendas

Integre os [relatórios de conciliação de Mercado Pago](https://www.mercadopago.com.br/developers/pt/guides/reports/general-considerations/reconciliation-reports/) com seu sistema para conciliar suas vendas e conhecer as movimentações de sua conta. 


## Teste e valide sua integração

Detalhamos todos os casos necessários que deve comprovar para validar que seu sistema esteja integrado corretamente com Mercado Pago. 
Você pode achar todos os casos na [seção de Testes](https://www.mercadopago.com.ar/developers/pt/guides/qr-code/integration-test/).

---
### Próximos passos


> LEFT_BUTTON_RECOMMENDED_PT
>
> Teste sua integração
>
> Realize os casos de uso mais frequentes para validar sua integração.
>
> [Teste sua integração](https://www.mercadopago.com.br/developers/pt/guides/qr-code/integration-test/)