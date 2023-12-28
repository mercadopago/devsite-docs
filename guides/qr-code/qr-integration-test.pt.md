# Teste a sua integração

## Criar usuários de teste

Utilize contas de teste para garantir que sua integração dê suporte a todos os fluxos e cenários possíveis. Elas têm os mesmos recursos de uma conta real do Mercado Pago, o que permite testar o funcionamento das integrações que você está desenvolvendo.

Se você ainda não criou usuários de teste, acesse [Pré-requisitos](/developers/pt/docs/qr-code/pre-requisites) para saber como fazê-lo.

## Cartões de teste

[TXTSNIPPET][/guides/snippets/test-integration/test-cards]

## Teste o fluxo de pagamento

### 1. Utilize o seu usuário vendedor para atribuir um pedido a um caixa.

Para testar o modelo atendido, gere um pedido com as credenciais do usuário de teste que deseja utilizar como vendedor e envie um pedido ao QR previamente criado.


### 2. Realize um pagamento usando o seu usuário comprador

- A. Ingresse no app do Mercado Pago com seu usuário de teste comprador.
- B. Clique em "Pagar com QR" e verifique o QR do ponto de venda.
- C. Escolha um cartão guardado ou preencha com os dados de um novo cartão e faça o pagamento.

### 3. Receba notificações de pedidos

Verifique se o seu sistema já recebeu as notificações de status do pedido. E pronto!

## Valide a sua integração

Detalhamos os casos necessários para validar que o seu sistema esteja corretamente integrado ao Mercado Pago.

**Casos para validar:**

|Modelo QR|Link|
|---|---|
|Atendido|[Clique aqui](/developers/pt/docs/qr-code/additional-content/qr-validation-cases/qr-attended-events)|
|Dinâmico|[Clique aqui](/developers/pt/docs/qr-code/additional-content/qr-validation-cases/qr-dynamic-events)|