# Teste a sua integração

Com os usuários de teste você poderá testar a integração do seu sistema com o Mercado Pago, sem utilizar dinheiro.

Para realizar os testes, você precisa ter pelo menos dois usuários: um comprador e um vendedor.
> Se você ainda não gerou os seus usuários, faça isso nos [pré-requisitos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/qr-code/pre-requisites).

| Tipos de usuários | Descrição |
| --- | --- |
| Vendedor | É a **conta de testes que você utiliza para obter as credenciais** a serem configuradas em seu sistema para poder interagir com as APIs do Mercado Pago. Você também poderá acessar a [conta Mercado Pago](https://www.mercadopago.com.br/activities) e verificar as transações testadas. |
| Comprador | É a **conta que você utiliza para testar o processo de compra**. Você deve acessar o app do Mercado Pago com os detalhes deste usuário. Se tiver dinheiro disponível na conta ou cartões salvos, serão habilitados como meio de pagamento. |

## Cartões de teste

[TXTSNIPPET][/guides/snippets/test-integration/test-cards]

## Teste o fluxo de pagamento

### 1. Utilize o seu usuário vendedor para atribuir um pedido a um caixa.

Para testar o modelo atendido, gere um pedido com as [credenciais]([FAKER][CREDENTIALS][URL]) do usuário de teste que deseja utilizar como vendedor e envie um pedido ao QR previamente criado.


### 2. Realize um pagamento usando o seu usuário comprador

- A. Ingresse no app do Mercado Pago com seu usuário de teste comprador.
- B. Clique em "Pagar com QR" e verifique o QR do ponto de venda.
- C. Escolha um cartão guardado ou preencha com os dados de um novo cartão e faça o pagamento.

### 3. Receba notificações de pedidos

Verifique se o seu sistema já recebeu as notificações de status do pedido. E pronto!

