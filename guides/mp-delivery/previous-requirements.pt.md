# Pré-requisitos da integração

Para poder realizar a integração do Mercado Pago Delivery com seu PDV/POS, é preciso atender aos requisitos abaixo.

| Requisitos | Descrição |
|---|---|
|Conta Mercado Pago| É necessário que o integrador tenha uma conta no Mercado Pago para criar uma aplicação. Com uma aplicação você poderá configurar seu Webhook, para receber notificações de novos pedidos, e gerar suas credenciais. Caso não a tenha uma conta Mercado Pago, [clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para criar.|
|Credenciais| As [credenciais](/developers/pt/guides/additional-content/credentials/credentials) são senhas únicas com as quais identificamos uma integração na sua conta e servem para capturar pagamentos em lojas virtuais e outras aplicações de forma segura.|
|Access Token| Por meio do protocolo de autorização OAuth, cada restaurante poderá autorizar a aplicação que foi criada na conta do integrador a receber notificações de novos pedidos. Além disso, cada restaurante terá um token de acesso que será utilizado para realizar operações utilizando as APIs de Delivery do Mercado Pago. Veja [OAuth](/developers/pt/guides/additional-content/security/oauth/introduction) para entender o fluxo de autorização que deverá ser feito com os restaurantes.|