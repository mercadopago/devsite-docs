# Como integrar o checkout em marketplace

Marketplace é um site/plataforma de e-commerce que conecta vendedores e compradores em um único ambiente de venda, permitindo a venda de produtos e/ou serviços online com maior abrangência e possibilidade de conversão.

Além da estrutura necessária para realizar vendas, alguns _marketplaces_ cuidam da disposição dos produtos, métodos de pagamento e envio, otimizando o processo de venda e facilitando o gerenciamento do negócio.

Caso escolha vender através de um Marketplace, é possível integrar **dois tipos de checkout do Mercado Pago** para processar os pagamentos realizados.
 
* [Checkout Pro](/developers/pt/guides/checkout-pro/landing):  Neste modelo de checkout  o comprador é direcionado para uma página do Mercado Pago para concluir o pagamento.
* ----[mla, mlu, mpe, mco, mlc, mlm]----[Checkout API](/developers/pt/guides/checkout-api/introduction)------------ ----[mlb]----[Checkout Transparente](/developers/pt/guides/checkout-api/introduction)------------: Este modelo de checkout permite ao comprador realizar o pagamento dentro do ambiente do _marketplace_.

Ambos checkouts realizam automaticamente a divisão dos valores entre o vendedor e o _marketplace_ por meio do _split_ de pagamento, sem a necessidade de qualquer ação por parte do vendedor.

> NOTE
>
> Importante
>
> A comissão do Mercado Pago é descontada do valor recebido pelo vendedor. Ou seja,  primeiro é descontada a comissão do Mercado Pago e sobre o valor restante se desconta a comissão do Marketplace.

Para realizar a integração você precisará seguir o fluxo de integração usual do checkout escolhido necessariamente usando um access token para cada vendedor, obtido através de OAuth. Abaixo listamos as etapas necessárias para integrar um checkout ao _marketplace_.

1. Siga as etapas descritas na [documentação OAuth](/developers/pt/guides/additional-content/security/oauth/introduction) para obter cada `access_token`. Esta informação será necessária durante o processo de integração do checkout ao _marketplace_.
2. Escolha o tipo de checkout que deseja ([Checkout Pro](/developers/pt/guides/checkout-pro/landing) ou ----[mla, mlu, mpe, mco, mlc, mlm]----[Checkout API](/developers/pt/guides/checkout-api/introduction------------ ----[mlb]----[Checkout Transparente](/developers/pt/guides/checkout-api/introduction)------------) e siga todo o fluxo de integração.
3. Na integração do checkout, utilize a `public_key` da sua conta de integrador no frontend e insira o `access_token` do vendedor obtido na etapa 1, no backend ou no header da requisição. 

4. Para determinar a porcentagem de comissão do marketplace:

    - Se o checkout for Pro, preencha o parâmetro `marketplace_fee` com o valor a ser cobrado para cada preferência de pagamento criada na API **/checkout/preferences**.
    - Se o checkout for Transparente, preencha o parâmetro `application_fee` com o valor a ser cobrado para cada pagamento criado na API **/payments**.

Ao concluir essas etapas, o checkout terá sido integrado ao _marketplace_ e estará pronto para processar os pagamentos.
