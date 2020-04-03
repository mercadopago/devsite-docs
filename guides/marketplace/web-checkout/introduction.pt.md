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

Suas [credenciais]([FAKER][CREDENTIALS][URL]) são as chaves que te informamos para que você possa configurar suas integrações. Para este caso, você vai utilizar uma chave pública e outra privada.

* A chave pública, ou Public key, é utilizada para acessar todos os recursos que precisará de seu frontend para coletar dados de cartão de crédito e convertê-los em um token
representativo que pode ser guardado de forma segura em seus servidores para criar um pagamento.

* A chave privada, ou Access token, é utilizada para todas as requisições realizadas às APIs, tais como processamento de pagamentos, reembolsos, armazenamento de cartões, etc. As chaves privadas devem ser mantidas confidencialmente em seus servidores de backend e nunca devem ser publicadas.

> Possui alguma dúvida? Consulte nossas [perguntas frequentes](https://www.mercadopago.com.br/developers/pt/guides/faqs/credentials/).


As [credenciais]([FAKER][CREDENTIALS][URL_BASIC]) que se deve utilizar para associação dos vendedores ao Marketplace (2º Passo) são o Client id e Client secret.

#### [Começar a criar meu Marketplace](https://www.mercadopago.com.br/developers/pt/guides/marketplace/web-checkout/create-marketplace)
