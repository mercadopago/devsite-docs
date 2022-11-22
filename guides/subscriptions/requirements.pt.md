# Pré-requisitos

Para realizar a integração de assinaturas, é preciso atender aos requisitos listados abaixo.

| Requisitos | Descrição |
|---|---|
| Aplicação  | As aplicações são as diferentes integrações contidas em uma ou mais lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de ter tudo organizado e manter um controle que facilite a gestão. Veja [Dashboard](/developers/pt/docs/subscriptions/additional-content/dashboard/introduction) para mais informações sobre como criar uma aplicação. |
| Conta de vendedor Mercado Pago ou Mercado Livre | Para integrar assinaturas em seu site, é preciso uma conta de vendedor no Mercado Pago ou Mercado Livre. Caso não tenha, [clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para criar. | 
| Credenciais | Senhas únicas com as quais identificamos uma integração na sua conta. Para realizar as integrações, serão necessárias a _Public key_ e o _Access Token_. [Clique aqui](/developers/pt/guides/additional-content/credentials/credentials) para mais informações. |
| Integração com SDK Javascript - Card token ID | A integração com o SDK Javascript do Mercado Pago permite criar um token com os dados do cartão e enviá-lo ao seu backend para ser usado nos pagamentos. Para mais informações, [clique aqui](/developers/pt/guides/sdks) |
| Valor mínimo para transação | ----[mlb]---- O valor mínimo permitido para criar uma assinatura é de R$1,00 e o máximo é de R$700,00 ------------ ----[mla]---- O valor mínimo permitido para criar uma assinatura é de $5,00 e o máximo é de $250.00,00 ------------ ----[mlm]---- O valor mínimo permitido para criar uma assinatura é de $100.00 e o máximo é de $200,000.00 ------------ ----[mlc]---- O valor mínimo permitido para criar uma assinatura é de $950,00 e o máximo é de $350.000,00 ------------ ----[mco]---- O valor mínimo permitido para criar uma assinatura é de $1.600,00 e o máximo é de $30.000.000 ------------ ----[mpe]---- O valor mínimo permitido para criar uma assinatura é de $2,00 e o máximo é de $1.500 ------------ ----[mlu]---- O valor mínimo permitido para criar uma assinatura é de $15,00 e o máximo é de $300.000 ------------ | 

Se todos os pré-requisitos foram atendidos, você poderá realizar a integração das assinaturas.

