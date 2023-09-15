> SERVER_SIDE
>
> h1
>
> Conta Mercado Pago

Os pagamentos com **Conta Mercado Pago** não precisam ser enviados via backend. Caso o usuário selecione esta opção como meio de pagamento, a `preferenceId` enviada na inicialização do Brick é responsável por redirecionar o comprador ao site do Mercado Pago, onde será feito o pagamento diretamente em nosso site. 

Para redirecionar o comprador de volta para o seu site, você pode configurar as `back_urls` como descrito [neste artigo](/developers/pt/docs/checkout-bricks/payment-brick/additional-customization/preferences#bookmark_redirecione_o_comprador_para_o_seu_site).

# Marketplace

_Marketplace_ é um site/plataforma de e-commerce que conecta vendedores e compradores em um único ambiente de venda, permitindo a venda de produtos e serviços online com maior abrangência e possibilidade de conversão.

Além da estrutura necessária para realizar vendas, alguns _marketplaces_ cuidam da disposição dos produtos, métodos de pagamento e envio, otimizando o processo de venda e facilitando o gerenciamento do negócio.

A divisão dos valores entre o vendedor e o _marketplace_ é feita automaticamente a partir do _split_ de pagamento, sem a necessidade de qualquer ação por parte do vendedor.

> NOTE
>
> Importante
>
> A comissão do Mercado Pago é descontada do valor recebido pelo vendedor. Ou seja, primeiro é descontada a comissão do Mercado Pago e, sobre o valor restante, se desconta a comissão do _marketplace_.

Para a configuração do marketplace em Checkout Bricks siga as etapas listadas abaixo.

1. Crie um `access_token` para cada vendedor seguindo a documentação de [OAuth](/developers/pt/docs/checkout-bricks/additional-content/security/oauth/creation).
2. Na [configuração de inicialização](/developers/pt/docs/checkout-bricks/common-initialization) de Bricks, adicione `marketplace: true`.

```javascript
const settings = {
  initialization : {
    amount: 100,
    preferenceId: "<PREFERENCE_ID>",
    marketplace: true,
  },
};
```

3. Utilize a `public_key` da sua conta de integrador no **frontend** e insira o `access_token` do vendedor, obtido na etapa 1, no **backend ou no header** da requisição.
4. Para determinar a porcentagem de comissão do _marketplace_, preencha o parâmetro `marketplace_fee` com um valor em moeda local (seu padrão é 0) a ser cobrado para cada preferência criada na API [/checkout/preferences](/developers/pt/reference/preferences/_checkout_preferences/post). Lembre-se de adicionar o id da preferência na inicialização do Brick.

Ao concluir essas etapas, o Checkout Bricks terá sido integrado ao marketplace e estará pronto para processar os pagamentos.

> WARNING
>
> Atenção
>
> No fluxo de _marketplace_ não é possível habilitar pagamentos parcelados sem cartão.