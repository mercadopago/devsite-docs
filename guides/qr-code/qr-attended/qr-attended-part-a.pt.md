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

# Pagamentos QR modelo atendido

## O que é QR por modelo atendido?

Depois de ter recebido o pedido de um cliente, **este modelo permite que o operador associe um pedido ao caixa** para a cobrança. É recomendado para lojas de produtos, restaurantes de fast-food, entre outros. 

## Características do modelo

As características principais são:

- O operador sempre trabalha desde seu sistema de ponto de venda onde a modalidade de Receber com Mercado Pago foi inclusa. Dessa opção, envia-se uma ordem ao caixa associado. 
- Para o cliente realizar o pagamento, é preciso associar um pedido ao caixa. 
- O operador vê a cobrança impactada em seu sistema. 


## Fluxo do modelo

Explicamos a você o funcionamento do modelo atendido: 

>![Flujo de pago en punto de venta QR Mercado Pago](/images/qr-user-flow.pt.png)

---

> NOTE
> 
> OBS.
> 
> O `pos_id` é o identificador unívoco do caixa dentro de Mercado Pago. É obtido no momento da criação de um caixa e possui um QR associado.

1. (A) O ponto de venda registra o pedido e envia seus dados ao server do vendedor. 
	(B) O servidor do vendedor envia a ordem ao server de Mercado Pago junto com o `pos_id`, um identificador exclusivo do ponto de venda que está sendo usado.
2. O pedido é associado ao QR e fica à espera do escaneio do cliente. 
3. O cliente escaneia o QR e Mercado Pago busca  o pedido através do `pos_id`. Não afeta o fluxo se o escaneio for realizado antes de começar o registro do pedido. 
4. (A) Logo depois, o server do vendedor recebe uma notificação do pedido. 
(B) O recebimento é confirmado. 
(C) E o cliente vai ver desde o aplicativo a tela para realizar o pagamento do pedido. 
5. Finalmente, o cliente paga o pedido. 
6. (A) O cliente verá a confirmação do pagamento. 
(B) O server do vendedor recebe uma notificação com o pedido. 
(C) E confirma seu recebimento. 
7. (A) O server do vendedor consulta o estado do pedido com o ID recebido na última notificação para saber se está fechado ou se continua aberto, pendente de pagamento. 
(B) Mercado Pago restitui os dados correspondentes, como seu estado, informação  de pagamentos, entre outros. 
8. Se o pedido estiver encerrado (**closed**), o comprovante pode ser impresso para finalizar a operação. 

> NOTE
> 
> OBS.
> 
> No item 4 deverá executar os passos 7A e 7B para obter o estado do pedido. 

### Próximos passos

<div>
<a href="https://www.mercadopago.com.br/developers/pt/guides/qr-code/qr-attended/qr-attended-part-b/" style="text-decoration:none;color:inherit">       
<blockquote class="next-step-card next-step-card-left">
<p class="card-note-title">Integrar o modelo QR atendido<span class="card-status-tag card-status-tag-required">REQUERIDO</span></p>
 <p>Conheça passo a passo como integrar este modelo.</p>
</blockquote>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>