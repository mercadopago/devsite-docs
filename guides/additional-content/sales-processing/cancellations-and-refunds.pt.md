# Reembolsos e cancelamentos

**Reembolsos** são transações realizadas quando determinada cobrança é revertida e os valores pagos retornam para o comprador. Isso significa que o cliente receberá de volta em sua conta ou na fatura do cartão de crédito, o valor pago na aquisição de determinado produto ou serviço.

**Cancelamentos** acontecem quando uma compra é realizada mas o pagamento ainda não foi aprovado por algum motivo. Neste caso, considerando que a transação não foi processada e o estabelecimento não recebeu qualquer valor, a compra é cancelada e não ocorre cobrança.

Apesar de serem transações similares, é importante ter em mente que o cancelamento é feito no mesmo dia da captura do pagamento, devolvendo o limite ao cartão do comprador dentro do período definido pelo banco emissor. Já o reembolso é feito diretamente na fatura do cartão de crédito ou na conta corrente em casos de pagamento via Pix, boleto ou débito.

Nesta documentação, você encontra as instruções e os links das APIs necessárias para realizar uma reembolso integral, parcial, e cancelar uma compra em sua loja.

> WARNING
>
> Important
>
> Ao executar as APIs citadas nesta documentação, você poderá encontrar o atributo **X-Idempotency-Key**. Seu preenchimento é importante para garantir a execução e re-execução de requisições sem que haja efeitos colaterais como por exemplo, pagamentos em duplicidade em casos de reembolso.

## Cancelamentos

Antes de realizar o cancelamento de uma compra, é preciso atentar-se os seguintes fatores: 

- **Status de pagamento**: Os cancelamentos somente poderão ser realizados caso o status de pagamento esteja como Pending ou In process. Esses status são exibidos na resposta da chamada à API de cancelamento nos campos *Status* e *Status detail*, respectivamente.

- **Prazo de vencimento**: Um pagamento expira após 30 dias sem confirmação e o cancelamento é automático. O status final dessa transação aparecerá como *cancelled* ou *expired*. Essas informações serão exibidas na resposta da chamada à API de cancelamento, nos campos *Status* e *Status detail*, respectivamente. 

----[mlb]----
- **Boleto bancário**: Se o prazo de validade de um boleto expirar, o usuário poderá gerá-lo novamente inserindo o ID da transação da sua conta no Mercado Pago. Contudo, caso queira evitar problemas de retenção de estoque, por exemplo, é possível optar por não disponibilizar uma nova emissão deste boleto. Para isso, basta realizar seu cancelamento.

------------

> Visite nossa Referência API para ter acesso à API de [Criar cancelamento](/developers/pt/reference/chargebacks/_payments_payment_id/put).

## Reembolsos

[TXTSNIPPET][/guides/snippets/test-integration/refunds]