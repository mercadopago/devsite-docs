# Como previnir fraudes nos pagamentos com cartão

O **Mercado Pago Antifraude Plus** é um complemento ao [Mercado Pago Cartões](/developers/pt/docs/shopify/integration-configuration/checkout-cards) para otimizar a validação de segurança e manter altos níveis de aprovação, adicionando mais segurança ao identificar o device ID de compradores e evitar fraudes e estornos.

O app conta com a tecnologia **3DS 2.0 (3-D Secure)** para autenticar as transações com cartão de crédito antes de concluir o pagamento, validando se a pessoa que realiza a compra é realmente o titular do cartão ou tem acesso às contas deste titular. Veja [3DS 2.0](/developers/pt/docs/shopify/additional-content/security/3ds) para mais informações sobre como esse tipo de autenticação funciona.

Para instalar o Mercado Pago Antifraude Plus, siga as etapas abaixo.

1. Acesse a página do app [Mercado Pago Antifraude Plus](https://apps.shopify.com/mercado-pago-antifraud-plus) no "Marketplace" e clique em **Instalar**. Se ainda não o fez, faça login com sua conta da Shopify.

![antifraude plus 0](/images/shopify/antifraude-plus-0-pt.png)

2. Leia com atenção as informações sobre as permissões solicitadas e clique novamente em **Instalar**.

![antifraude plus 2](/images/shopify/antifraude-plus-2-pt.png)

3. Se você já instalou o app [Mercado Pago Cartões](/developers/pt/docs/shopify/integration-configuration/checkout-cards), não precisa inserir suas credenciais novamente, mas poderá alterá-las se necessário. 

> WARNING
>
> Importante
>
> Lembre-se de que, ao alterar a senha do Shopify, **é necessário renovar suas credenciais**. Para isso, siga as instruções na documentação de [Boas práticas de segurança para suas credenciais](/developers/pt/docs/shopify/best-practices/credentials-best-practices/secure-credentials). Em seguida, para atualizá-las na sua conta do Shopify, clique em Gerenciar conta e preencha os campos correspondentes com seu `access_token` e `public_key`, **tomando cuidado para não trocar os campos ao copiar e colar as credenciais**.

4. Clique na opção **Verificar ativação** do Mercado Pago Antifraude Plus e vá para a seção de "Ir para temas" da Shopify.

![antifraude plus 3](/images/shopify/antifraude-plus-3-pt.png)

5. Por fim, clique em **Salvar** para finalizar a instalação.

![antifraude plus 4](/images/shopify/antifraude-plus-4-pt.png)

Pronto! O **Mercado Pago Antifraude Plus** foi instalado com sucesso!