# Devoluções e cancelamentos

**Devoluções** são transações realizadas quando determinada cobrança é revertida e os valores pagos retornam para o comprador. Isso significa que o cliente receberá de volta em sua conta ou na fatura do cartão de crédito, o valor pago na aquisição de determinado produto ou serviço.

**Cancelamentos** acontecem quando uma compra é realizada mas o pagamento ainda não foi aprovado por algum motivo. Neste caso, considerando que a transação não foi processada e o estabelecimento não recebeu qualquer valor, a compra é cancelada e não ocorre cobrança.

Nas seções abaixo você encontra os passos necessários para aceitar devoluções e realizar cancelamentos em sua loja.

## Devoluções
Para aceitar a devolução de determinado pagamento realizado em sua loja, ative a opção na configuração do seu meio de pagamento selecionando a opção "Sim" no campo pendente. Ao habilitar essa opção, o módulo fará o reembolso parcial ou total do pagamento no Mercado Pago quando for criada uma nota de crédito no pedido. O reembolso é feito apenas em pagamentos que tenham o status 'approved'.

> Se o reembolso for feito no painel Mercado Pago, o módulo não estará preparado para criar nota de crédito automaticamente. Devido a esta limitação, é aconselhável que seja criado a partir da loja.

## Cancelamentos

Para cancelar pagamentos das transações realizadas em sua loja, você deve ativar a opção na configuração do seu método de pagamento selecionando a opção "Sim" no campo pendente. Ao habilitar essa opção, o módulo irá cancelar o pagamento no Mercado Pago quando o pedido for cancelado.

O pagamento será cancelado quando o status estiver em `pending` ou `in_process`, caso contrário o plugin retornará uma mensagem de erro.
