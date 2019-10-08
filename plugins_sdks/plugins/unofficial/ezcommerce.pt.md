# EZ Commerce

## O que é EZ Commerce?

[EZ Commerce](https://www.ezcommerce.com.br/) é um ecossistema completo de soluções para sua loja virtual que permite processar pagamentos através do Mercado Pago.
Para obter maiores informações sobre as possibilidades que a EZ Commerce oferece acesse [sua página de recursos](https://www.ezcommerce.com.br/plataforma/recursos-de-ecommerce/).

## Configurar EZ Commerce para operar com Mercado Pago

Os passos para começar a operar com Mercado Pago são os seguintes:

1. Configurar boleto.
2. Configurar cartões de crédito.

### Configurar boleto

Para operar com boleto, siga estes passos:

1. Expanda o menu "Configurações".
2. Acesse "Formas de Pagamento".
3. Selecione a aba "Boleto bancário".
4. Clique na opção "Boleto Bancário" que tenha na coluna "Adquirente / Gateway" a informação "mercadopago_transparente".
5. Preencha os dados do grupo "Específico". Para obter o Client ID e o Client Secret veja a seção [Credenciais](#bookmark_credenciais).
6. Clique em salvar.

    ![Ez Commerce Configuration Page - Ticket](/images/ezcommerce-ticket-1.gif)

### Configurar Cartões de Crédito

Para operar com cartões de crédito siga estes passos:

1. Expanda o menu "Configurações".
2. Acesse "Formas de Pagamento".
3. Selecione a aba "Cartão de Crédito".
4. Localize as bandeiras que tenham na coluna "Adquirente / Gateway" a informação "mercadopago_transparente".
5. Preencha os dados do grupo "Específico". Para obter o Client ID, o Client Secret e a Public Key veja a seção [Credenciais](#bookmark_credenciais).
6. Selecione o Tipo de parcelamento que deseja:
- Dinâmico: A plataforma utilizará as configurações de juros da conta do Mercado Pago.
- Customizado: Deverá configurar as informações de parcelamento na plataforma (total de parcelas, parcelas sem juros, porcentagem de juros e parcela mínima).
7. Clique em salvar.

    ![Ez Commerce Setup Page - Credit Card](/images/ezcommerce-credit-card-1.gif)

>Esses passos devem ser executados para todas as BANDEIRAS que deseja ativar.

## Credenciais

Para obter as credenciais deve seguir esses passos:

1. Faça login na conta do Mercado Pago
2. Acesse esse [painel](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mla/account/credentials).
3. Selecione a guia "Checkout básico" para visualizar  Client ID e o Client Secret.
4. Selecione a guia "Checkout transparente" para visualizar a Public Key e o Access Token (Modo Produção para processar pagamentos reais / Modo Sandbox para realizar testes).
5. Antes de passar à Produção assegure se de preencher o formulário ‘Eu quero ir para produção’ (Se já realizou este passo, o link não aparece).
