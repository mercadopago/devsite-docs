---
sites_supported:
  - mla
  - mpe
  - mco
  - mlu
  - mlm
  - mlc
---

# Integração avançada

## Receba notificações de suas ordens 

As [notificações IPN](https://www.mercadopago.com.br/developers/pt/guides/notifications/ipn/) (Instant Payment Notification) são a **forma automática de aviso da criação de novas ordens e as atualizações de seus estados**. Por exemplo, se foram aprovadas, recusadas ou se estiverem pendentes. 

Implementa IPN de `merchant_order` junto com uma busca do pedido por `external_reference` como método de contingência.

## Devoluções de seus pagamentos 

As devoluções acontecem quando o pagamento foi realizado, porém, o vendedor decide anulá-lo total ou parcialmente. Você poderá achar todas as informações na [seção Devoluções e cancelamentos](https://www.mercadopago.com.br/developers/pt/guides/manage-account/cancellations-and-refunds/).

> WARNING
> 
> OBS.
> 
> Leve em consideração que para pagamentos presenciais somente poderá realizar devoluções, mas não cancelamentos. 

## Gere relatórios de suas vendas

Integre os [relatórios de conciliação de Mercado Pago](https://www.mercadopago.com.br/developers/pt/guides/reports/general-considerations/reconciliation-reports/) com seu sistema para conciliar suas vendas e conhecer as movimentações de sua conta. 


## Teste e valide sua integração

Detalhamos todos os casos necessários que deve comprovar para validar que seu sistema esteja integrado corretamente com Mercado Pago. 
Você pode achar todos os casos na seção de Testes.

### Próximos passos

<div>  
<a href="https://www.mercadopago.com.br/developers/pt/guides/qr-code/final-steps/integration-test/" style="text-decoration:none;color:inherit">
<blockquote class="next-step-card next-step-card-right">
<p class="card-note-title">Teste sua integração<span class="card-status-tag card-status-tag-recommended">RECOMENDADO</span></p>
 <p>Realize os casos de uso mais frequentes para validar sua integração.</p>
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