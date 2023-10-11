# Checkout Transparente

Com o [Checkout Transparente](/developers/pt/docs/checkout-api/landing), todo o processo de finalização de compra acontecerá dentro do ambiente da loja online, sem a necessidade de redirecionamento para uma página externa. Além de permitir maior controle no processo de customização e integração, o checkout oferece uma estrutura completa para processamento de pagamentos com os principais meios disponíveis no mercado. 

> WARNING
>
> Atenção
>
> Para integrar o Checkout Transparente, você deve ter o Checkout Pro ("**Checkout Mercado Pago**") na sua loja da Shopify. Para saber como integrá-lo, consulte a [documentação.](/developers/pt/docs/shopify/integration-configuration/checkout-pro)

Para instalar o Checkout Transparente em uma loja Shopify, siga os passos abaixo:

1. Faça login na sua loja [Shopify](https://accounts.shopify.com/store-login).
2. Acesse o site de instalação do Mercado Pago Checkout Transparente [clicando aqui](https://apps.shopify.com/checkout-transparente-mp).
3. Clique no botão **Adicionar app**. Você será redirecionado para uma tela de autorização, onde serão mostradas as permissões que você outorgará à aplicação do Checkout Transparente. Para continuar, clique em **Instalar app**. 
4. Na próxima tela, insira as **credenciais de produção** (`public key` e `access token`) nos campos solicitados. Acesse o [Painel do desenvolvedor](https://www.mercadopago.com.ar/developers/panel) para obter as credenciais da sua aplicação e, caso ainda não tenha criado uma aplicação, veja [esta documentação](/developers/pt/docs/shopify/additional-content/your-integrations/introduction) para saber como criá-la. 
5. No campo **Como você quer operar?**, selecione a opção "Ativar Modo Teste para checkouts Mercado Pago" para poder realizar transações de teste e garantir o correto funcionamento do checkout.
6. A seguir, você poderá **configurar parcelamento e juros** caso deseje que a loja o ofereça. Para configurar isso, clique em **Editar**.
7. Na seção **Quais meios de pagamento você quer oferecer?**, selecione o tipo de meio de pagamento que você deseja que a loja ofereça através do Checkout Transparente. Você pode escolher Mercado Pago, cartões de crédito, boleto ou Pix.
8. Clique em **Salvar alterações** para finalizar a instalação.

> No caso de renovar suas credenciais, lembre-se de substituí-las em sua integração.

![installation choapi](/images/shopify/configurar-chotransparente-pt.gif)

> NOTE
>
> Importante
>
> Depois de instalado, o Checkout Transparente pode levar até 10 minutos para aparecer vinculado na loja da Shopify devido ao armazenamento em cache. Se precisar de ajuda para instalar o Checkout Transparente, entre em contato com o [Suporte.](https://www.mercadopago.com/developers/pt/support)