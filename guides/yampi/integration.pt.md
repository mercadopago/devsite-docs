# Configuração da integração 
 
Para realizar a integração com o Mercado Pago, siga os procedimentos abaixo.
 
1. No Dashboard da sua loja na Yampi, acesse o menu **Checkout** e clique em **Pagamento**.
2. Na tela de **gerenciamento dos gateways de pagamento**, clique no botão **+ Nova afiliação** e selecione o gateway do Mercado Pago. 
3. Em seguida, indique o **nome do meio de pagamento** que aparecerá para o comprador como, por exemplo, "Mercado Pago - Pix".
4. Informe o texto que **identificará o pagamento na fatura do cartão**. Este campo não pode conter espaço ou caracteres especiais.
5. Selecione **Sim** para indicar que as transações serão automaticamente autorizadas e capturadas ou **Não** para que as transações sejam apenas autorizadas e capturadas posteriormente em até 5 dias.
6. Na mesma página, você encontrará os campos `Public key` e `Access token`, que deverão ser preenchidos com as com as [credenciais](/developers/pt/guides/additional-content/your-integrations/credentials) de **produção** indicadas em [Detalhes da aplicação](/developers/pt/guides/additional-content/your-integrations/application-details) do Mercado Pago. Caso a sua conta seja nova e ativação das credenciais não tenha sido realizada anteriormente, o Mercado Pago solicitará a [criação de uma nova aplicação](/developers/pt/guides/additional-content/dashboard/introduction). 
7. Clique em **Salvar** para confirmar as informações de integração. Para alterar as informações inseridas, na tela de **gerenciamento dos gateways de pagamento**, clique em **editar** ao lado do gateway do Mercado Pago.
8. Feitas as devidas configurações de integração, selecione os meios de pagamento que estarão disponíveis para utilizar com o Mercado Pago. Você poderá selecionar todos os que deseja e depois editá-los ou configurá-los manualmente após as configurações do plugin. Para mais informações, veja a seção [Configuração de pagamentos](/developers/pt/docs/yampi/payment-configuration-cho-api).

Feitas as configurações de negócio, configure a experiências de pagamento da sua loja com o Checkout Transparente do Mercado Pago.