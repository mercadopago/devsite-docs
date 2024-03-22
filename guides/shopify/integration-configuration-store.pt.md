# Configure informações da loja

Recomendamos personalizar as informações do checkout da loja para garantir uma melhor experiência de compra e uma integração mais próxima entre o checkout do Mercado Pago e a Shopify. Para fazer isso, siga os passos abaixo:

----[mla, mlm, mpe, mco, mlu, mlc]----
> WARNING
>
> Atenção
>
> Se estava utilizando o antigo app do Mercado Pago (“**Mercado Pago**”) e deixou de receber pagamentos em sua loja, não se preocupe. Para voltar a vender, instale nosso novo app (“**Checkout Mercado Pago**”) seguindo a [documentação](/developers/pt/docs/shopify/integration-configuration/checkout-pro).

------------

## Configure o nome da empresa

1. Vá para sua loja [Shopify](https://accounts.shopify.com/store-login).
2. No painel administrativo da loja, clique em **Configurações**.

![Panel](/images/shopify/store-panel-es.png)

3. Uma vez lá, selecione a opção **Checkout**.

![Checkout](/images/shopify/checkout-es.png)

4. Na secção **Informações do cliente**, selecione o campo "Nome da empresa", como obrigatório.

![Company name](/images/shopify/company-name-es.png)

5. Clique em **Salvar**.

## Configurar o idioma da loja

1. No painel administrativo da loja, clique em **Configurações**.

![Panel](/images/shopify/store-panel-es.png)

2. Uma vez em Configurações, clique em **Idiomas**.

![Language](/images/shopify/language-es.png)

3. Na seção "Idiomas da loja", você poderá escolher o idioma no qual deseja que a loja opere. Clique em **Alterar o valor padrão**.

![Change language](/images/shopify/change-language-es.png)

4. Na próxima tela, escolha o idioma de sua preferência.

![Panel](/images/shopify/change-language-2-es.png)

5. Clique no botão **Salvar**.

## Ajustar valores de identificação pessoal do comprador

A loja Shopify exibirá os campos de solicitação de identificação pessoal do comprador com o termo "Company". Para alterar isso para a identificação solicitada pelo país em que a loja opera, siga estes passos:

1. No painel administrativo da loja, clique em **Configurações**.

![Panel](/images/shopify/store-panel-es.png)

2. Uma vez lá, selecione a opção **Checkout**.

![Checkout](/images/shopify/checkout-es.png)

2. Na seção "Idioma do checkout", clique em **Gerenciar idioma do checkout**.

![Checkout language](/images/shopify/checkout-language-pt.png)

3. Na próxima tela, use a barra de busca do site para pesquisar a palavra "Company". A busca devolverá vários campos que você pode modificar.

![Values id](/images/shopify/values-id-es.gif)

5. Substitua as seguintes entradas com a indicação do tipo de identificação pessoal que a sua loja solicitará de acordo com o país onde ela opera----[mlb]----(por exemplo, CPF para Brasil)------------:

- **Company label**
- **Optional company label**
- **Address company blank**

6. Clique em **Salvar**.