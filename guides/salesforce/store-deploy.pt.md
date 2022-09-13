# Carregar a loja

Para ativar o Mercado Pago na loja, siga os passos abaixo.

> Para carregar e implantar o site, você pode usar uma ferramenta compatível com WebDAV.

## Configuração do cartucho

Para ativar o cartucho "int_mercadopago", é necessário configurá-lo para ser utilizado como processador de pagamentos.

1. Vá para o painel de configurações do Salesforce, em **Admin > Sites > Manage Sites > _your site_ > Settings**.
2. Adicione "int_mercadopago" à lista de cartuchos como primeiro elemento (ou, pelo menos, antes de "app_storefront_base").
3. Compacte a pasta "int_mercadopago/metadata" em um arquivo _.zip_.
4. Em **Administration > Site Development > Site Import and Export**, carregue este arquivo .zip usando a opção **Upload**.
5. Selecione o arquivo .zip carregado e importe-o usando a opção **Import**.
6. Role até o final desta página e verifique os resultados na seção **Status**.

## Configuração de credenciais do Mercado Pago

Para usar o Mercado Pago com Cloud Commerce, você deve ter uma conta no Mercado Pago. Siga [esta documentação](/developers/pt/docs/salesforce/additional-content/credentials) para gerar suas credenciais. Em seguida, acesse **Ferramentas do comerciante > Preferências personalizadas > MercadopagoCredentials** e preencha os campos **Public key** e **Access Token**.

E pronto! Agora você pode usar o cartucho do Mercado Pago no site da sua loja Cloud Commerce.