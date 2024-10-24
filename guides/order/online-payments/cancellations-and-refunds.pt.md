# Reembolsos e cancelamentos

**Reembolsos** são transações realizadas quando determinada cobrança é revertida e os valores pagos retornam para o comprador. Isso significa que o cliente receberá de volta em sua conta ou na fatura do cartão de crédito, o valor pago na aquisição de determinado produto ou serviço.

**Cancelamentos** acontecem quando uma compra é realizada mas o pagamento ainda não foi aprovado por algum motivo. Neste caso, considerando que a transação não foi processada e o estabelecimento não recebeu qualquer valor, a compra é cancelada e não ocorre cobrança.

Apesar de serem transações similares, é importante ter em mente que o cancelamento é feito no mesmo dia da captura do pagamento, devolvendo o limite ao cartão do comprador dentro do período definido pelo banco emissor. Já o reembolso é feito diretamente na fatura do cartão de crédito ou na conta corrente em casos de pagamento via Pix, boleto ou débito.

Nesta documentação, você encontra as instruções e os links das APIs necessárias para realizar uma reembolso integral, parcial, e cancelar uma compra em sua loja.

> WARNING
>
> Importante
>
> Ao executar as APIs citadas nesta documentação, você deverá enviar o atributo **X-Idempotency-Key**. Seu preenchimento é obrigatório para garantir a execução e re-execução de requisições sem que haja efeitos colaterais como por exemplo, pagamentos em duplicidade em casos de reembolso. Atualize [nossa biblioteca de SDK](/developers/pt/docs/sdks-library/landing) ou gere um UUID V4 e envie-o no _header_ de suas chamadas para evitar erros.

## Cancelamentos

Antes de realizar o cancelamento de uma compra, é preciso atentar-se os seguintes fatores: 

- **Status de pagamento**: Os cancelamentos somente poderão ser realizados caso o status de pagamento esteja como Pending ou In process. Esses status são exibidos na resposta da chamada à API de cancelamento nos campos *Status* e *Status detail*, respectivamente.

- **Prazo de vencimento**: Um pagamento expira após 30 dias sem confirmação e o cancelamento é automático. O status final dessa transação aparecerá como *cancelled* ou *expired*. Essas informações serão exibidas na resposta da chamada à API de cancelamento, nos campos *Status* e *Status detail*, respectivamente. 

> Visite nossa Referência API para ter acesso à API de [Cancelar order por ID](/developers/pt/reference/order/online-payments/cancel-order/post).

## Reembolsos

Reembolsos podem ser feitos de duas maneiras: **integral**, quando o valor total da venda é devolvido ao comprador ou **parcial**, quando apenas parte do valor pago é retornado ao comprador.

Antes de realizar um reembolso, é importante considerar os fatores abaixo.

* **Prazo de reembolso:** é possível reembolsar um pagamento dentro de 180 dias a partir da sua data de aprovação. 
* **Meio de pagamento:** para pagamentos com cartão de crédito, o valor será devolvido diretamente na fatura.

Para realizar reembolsos integrais ou parciais de um pagamento e consultar os reembolsos feitos em sua loja, visite nossa Referência API e acesse a API de [Reembolso total da order](/developers/pt/reference/order/online-payments/refund/post).