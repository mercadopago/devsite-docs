# Configure o Checkout Transparente

Com o [Checkout Transparente](/developers/pt/docs/checkout-api/landing), todo o processo de finalização de compra acontecerá dentro do ambiente da loja online, sem a necessidade de redirecionamento para uma página externa. Além de permitir maior controle no processo de customização e integração, o checkout oferece uma estrutura completa para processamento de pagamentos com os principais meios disponíveis no mercado. 

> WARNING
>
> Atenção
>
> Para integrar o Checkout Transparente, você deve ter o Checkout Pro na sua loja da Shopify. Para saber como integrá-lo, consulte a [documentação.](/developers/pt/docs/shopify/integration-configuration/checkout-pro)

Para instalar o Checkout Transparente em uma loja Shopify, siga os passos abaixo:

1. Faça login na sua loja [Shopify](https://accounts.shopify.com/store-login).
2. Acesse o site de instalação do Mercado Pago Checkout Transparente [clicando aqui](https://apps.shopify.com/checkout-transparente-mp).
3. Clique no botão **Adicionar app**. Você será redirecionado para uma tela de autorização, onde serão mostradas as permissões que você outorgará à aplicação do Checkout Transparente. Para continuar, clique em **Instalar app**. 
4. Na próxima tela, você precisará inserir as suas credenciais Public Key e Access Token de teste e de produção. Acesse o [Dashboard](https://www.mercadopago.com.ar/developers/panel) para obter as credenciais da sua aplicação. Se você ainda não criou uma aplicação, aprenda como fazê-lo em [esta documentação](/developers/pt/docs/shopify/additional-content/dashboard/introduction). 
5. No campo **Como você quer operar?**, selecione a opção "Ativar Modo Teste para checkouts Mercado Pago" para poder realizar transações de teste e garantir o correto funcionamento do checkout.
6. A seguir, você poderá **configurar parcelamento e juros** caso deseje que a loja o ofereça. Para configurar isso, clique em **Editar**.
7. Na seção **Quais meios de pagamento você quer oferecer?**, selecione o tipo de meio de pagamento que você deseja que a loja ofereça através do Checkout Transparente. Você pode escolher Mercado Pago, cartões de crédito, boleto ou Pix.
8. Clique em **Salvar alterações** para finalizar a instalação.

> No caso de renovar suas credenciais, lembre-se de substituir as credenciais de produção e de teste em sua integração.

![installation choapi](/images/shopify/configurar-chotransparente-pt.gif)

> NOTE
>
> Importante
>
> Depois de instalado, o Checkout Transparente pode levar até 10 minutos para aparecer vinculado na loja da Shopify devido ao armazenamento em cache. Se precisar de ajuda para instalar o Checkout Transparente, entre em contato com o [Suporte.](https://www.mercadopago.com/developers/pt/support)


> WARNING
>
> Atenção
>
> Caso esteja utilizando a versão antiga do app Mercado Pago ("Mercado Pago"), [clique aqui](/developers/pt/docs/shopify/how-tos/migration) para saber como migrar para a versão atual ("Checkout Mercado Pago").

Para instalar o Checkout Pro em sua loja Shopify, siga os passos abaixo:

1. Vá para a sua loja [Shopify](https://accounts.shopify.com/store-login).
2. No painel administrativo da loja, clique em **Configurações**.
3. Uma vez lá, selecione a opção **Pagamentos**. 
4. Em "Formas de pagamento adicionais", clique em **Adicionar formas de pagamento**.
5. Acesse a aba **Pesquisar por fornecedor** e procure o novo app com o nome "Checkout Mercado Pago".
6. Após localizá-lo, selecione-o, clique em **Ativar** e, por fim, em **Conectar**.
7. Selecione **Instalar app** e, depois, clique em **Gerenciar**.
8. Insira as suas **credenciais de produção** (`public key` e `access token`) nos campos solicitados e clique em **Salvar**. Lembre-se de ter suas [credenciais](/developers/pt/docs/shopify/additional-content/credentials) à mão.
9. Para finalizar a instalação, clique em **Ativar Checkout Mercado Pago**.

> Nesta etapa, você pode selecionar as imagens dos meios de pagamento que deseja exibir em sua loja para fins ilustrativos. Além disso, se desejar, você pode ativar o [modo de teste.](/developers/pt/docs/shopify/sales-processing/integration-test)
> <br/><br/>
> No caso de renovar suas credenciais, lembre-se de substituir as credenciais de produção e de teste em sua integração.