# Introdução à API do MarketPlace

O **MarketPlace** é um site ou aplicação que permite uma interação entre compradores e vendedores para a conclusão de uma transação comercial. O proprietário do Marketplace fornece um espaço aos vendedores para que apresentem seus produtos ou serviços, e é responsável pela gestão de todos os aspectos da transação. Por exemplo, o Mercado Livre é um Marketplace.

O Mercado Pago permite realizar cobranças em nome dos vendedores de sua plataforma e, opcionalmente, cobra uma taxa pela transação.

Quando um pagamento é gerado, o dinheiro é dividido imediatamente entre a conta do seu vendedor e a sua, em caso de taxa de comissão.


> NOTE
>
> Nota
>
> A comissão do MercadoPago será descontada do valor recebido pelo vendedor.

O Marketplace requer 3 passos:

1. **Criar uma aplicação** Marketplace.
2. **Conectar** as contas de seus vendedores.
3. **Efetuar** a cobrança em nome dos vendedores.

Após criar a aplicação, você só precisa executar o segundo e o terceiro passos para cada fornecedor subsequente.

## Credenciais

Assim como na API de Pagamentos, você conta com dois pares de chaves para conectar-se com a API. Estas chaves podem ser encontradas na seção [credenciais da sua conta](https://www.mercadopago.com/mla/account/credentials).

A **chave pública**, ou *public_key*, é utilizada para acessar todos os recursos que precisará de seu frontend para coletar dados de cartão de crédito e tokenizar.

A **chave privada**, ou *access_token*, é utilizada para todas as requisições realizadas às APIs, tais como processamento de pagamentos, reembolsos, armazenamento de cartões, etc. As chaves privadas devem ser mantidas **confidencialmente** em seus servidores de backend e nunca devem ser publicadas.

> Ao clicar no botão “renovar credenciais”, você obterá novos pares de chaves e as anteriores deixarão de funcionar. Faça isso apenas se desconfiar que suas chaves privadas foram violadas ou por questões de segurança, semelhante à alteração de senha, a cada período de tempo. Lembre-se de substituir as credenciais em sua aplicação para mantê-la funcionando.

## Modo Sandbox e Modo de Produção

Inicialmente, sua aplicação poderá interagir com o MercadoPago apenas no **Modo Sandbox**, uma réplica exata do **Modo de Produção**, desenvolvido com o objetivo de facilitar os testes durante a integração.

Forneceremos cartões de teste para que possa simular transações como se fossem reais.

Assim que tiver testado sua aplicação, você deverá realizar o [processo de homologação](#) e preencher o formulário “Quero ir para a produção”, que pode ser encontrado em suas credenciais.

Sua aplicação será ativada automaticamente. Tudo o que deve fazer é substituir as chaves do sandbox pelas de produção em seu código.

#### [Começar a criar meu Marketplace](/guides/marketplace/api/create-marketplace.pt.md).
