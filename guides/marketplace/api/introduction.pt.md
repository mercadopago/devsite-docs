# Introdução

O **MarketPlace** é um site ou aplicação que permite uma interação entre compradores e vendedores para a conclusão de uma transação comercial. O proprietário do _Marketplace_ fornece um espaço aos vendedores para que apresentem seus produtos ou serviços, e é responsável pela gestão de todos os aspectos da transação. Por exemplo, o Mercado Livre é um _Marketplace_.

O Mercado Pago permite realizar cobranças em nome dos vendedores de sua plataforma e, opcionalmente, cobrar uma taxa pela transação.

Quando um pagamento é gerado, o dinheiro é dividido imediatamente entre a conta do seu vendedor e a sua, em caso de taxa de comissão.

_Esclarecimento: A divisão do pagamento só pode ser realizada entre duas contas (o Marketplace e a conta vendedora), não mais._

> NOTE
>
> Nota
>
> A comissão do Mercado Pago será descontada do valor recebido pelo vendedor.
> Primeiro se desconta a comissão do Mercado Pago, e sobre o restante se desconta a comissão do _Marketplace_.

O _Marketplace_ requer 3 passos:

1. **Criar uma aplicação** _Marketplace_.
2. **Conectar** as contas de seus vendedores.
3. **Efetuar** a cobrança em nome dos vendedores.

Após criar a aplicação, você só precisa executar o segundo e o terceiro passos para cada fornecedor subsequente.

## Credenciais

Suas [credenciais]([FAKER][CREDENTIALS][URL]) são as chaves que te informamos para que você possa configurar suas integrações. Para este caso, você vai utilizar uma chave pública e outra privada.

A chave pública, ou **Public key**, é utilizada para acessar todos os recursos que precisará de seu frontend para coletar dados de cartão de crédito e convertê-los em um token
representativo que pode ser guardado de forma segura em seus servidores para criar um pagamento. 

A chave privada, ou **Access token**, é utilizada para todas as requisições realizadas às APIs, tais como processamento de pagamentos, reembolsos, armazenamento de cartões, etc. As chaves privadas devem ser mantidas confidencialmente em seus servidores de backend e nunca devem ser publicadas.

> NOTE
>
> Nota
>
> Possui alguma dúvida? Consulte nossas [perguntas frequentes](https://www.mercadopago.com.br/developers/pt/guides/faqs/credentials/).

## Modo _Sandbox_ e Modo de Produção

Inicialmente, sua aplicação poderá interagir com o Mercado Pago apenas no **Modo Sandbox**, uma réplica exata do **Modo de Produção**, desenvolvido com o objetivo de facilitar os testes durante a integração.

Forneceremos [cartões de teste](https://www.mercadopago.com.br/developers/pt/guides/marketplace/web-checkout/testing-marketplace) para que possa simular transações como se fossem reais.

Assim que tiver testado sua aplicação, você deverá realizar o [processo de homologação](https://www.mercadopago.com.br/developers/pt/guides/marketplace/api/goto-production) e preencher o formulário “Quero ir para a produção”, que pode ser encontrado em suas [credenciais]([FAKER][CREDENTIALS][URL]).

**Antes de utilizar as credenciais de produção é preciso completar o formulário de "Quero ir para produção" para ativa-las.** 
Caso contrario se receberá o erro de "Invalid use of live credentials". 

Sua aplicação será ativada automaticamente. Tudo o que deve fazer é substituir as chaves do _sandbox_ pelas de produção em seu código.

#### [Começar a criar meu Marketplace](https://www.mercadopago.com.br/developers/pt/guides/marketplace/api/create-marketplace).
