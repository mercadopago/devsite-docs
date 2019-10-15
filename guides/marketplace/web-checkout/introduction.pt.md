# Introdução

O **MarketPlace** é um site ou aplicação que permite uma interação entre compradores e vendedores para a conclusão de uma transação comercial. O proprietário de um Marketplace fornece um espaço aos vendedores para que apresentem seus produtos ou serviços, e é responsável pela gestão de todos os aspectos da transação. Por exemplo, o Mercado Livre é um Marketplace.

O Mercado Pago permite realizar cobranças em nome dos vendedores de sua plataforma e, opcionalmente cobrar uma taxa pela transação.

Quando um pagamento é gerado, o dinheiro é dividido imediatamente entre a conta do seu vendedor e a sua, em caso de taxa de comissão.

_Esclarecimento: O split do pagamento só pode ser realizado entre duas contas (o Marketplace e a conta vendedora)._

> NOTE
>
> Nota
>
>A comissão do Mercado Pago será descontada do valor recebido pelo vendedor.
>Primeiro se desconta a comissão do Mercado Pago, e sobre o restante se desconta a comissão do Marketplace.

O _Marketplace_ requer 3 passos:

1. **Criar uma aplicação** Marketplace.
2. **Conectar** as contas de seus vendedores.
3. **Efetuar a cobrança** em nome dos vendedores.

Após criar a aplicação, você só precisa executar o segundo e o terceiro passos para cada fornecedor subsequente.

## Credenciais

Assim como no Checkout de Pagamentos, você conta com um par de chaves privadas para conectar-se com a API. Essas chaves são encontradas na sessão de [credenciais da sua conta]([FAKER][CREDENTIALS][URL]).

As **chaves privadas** (também conhecidas como `access_token`) são utilizadas para todas as requisições realizadas às APIs, tais como processamento de pagamentos, reembolsos, etc. As chaves privadas devem ser mantidas **confidencialmente** em seus servidores de backend e nunca devem ser publicadas.

Antes de utilizar o Access Token é preciso preencher o formulário "Quero ir para produção".

Ao utilizar o Smart Checkout, as credenciais que se deve utilizar para associação dos vendedores ao Marketplace (2º Passo) são o Client_id e Client_secret da sessão de Checkout Básico da página de credenciais.

#### [Começar a criar meu Marketplace](https://www.mercadopago.com.br/developers/pt/guides/marketplace/web-checkout/create-marketplace)
