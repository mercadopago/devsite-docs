# Configuração da integração

Atualmente existem 4 tipos de checkout disponíveis para o WooCommerce. Caso queira configurar todas as formas de pagamento oferecidas, o processo deve ser feito individualmente, do contrário, escolha o que melhor se adequa ao seu negócio e configure conforme abaixo:

1. Acesse o Painel do WordPress.
2. Clique em **Plugins > Plugins instalados**.
3. Busque por **Mercado Pago Payments for WooCommerce** e clique em **Configurar**.
4. Selecione **1 ou mais checkouts/opções de pagamento** que você deseja oferecer e clique em **Gerenciar** para abrir a tela de gerenciamento do plugin.

Na tela de gerenciamento do plugin, você deverá preencher os campos solicitados de acordo com suas informações de negócio considerando as seções abaixo.

## País de operação

No campo **País de operação** você deverá selecionar o país no qual sua conta do Mercado Pago opera. 

## Ativação de credenciais

Na seção **Insira credenciais para Modo Teste ou Modo Produção**, você deverá inserir suas credenciais de **produção** e **teste**.

Credenciais de produção, porque ao finalizar os testes iniciais, habilitaremos a loja para o processamento de vendas reais e é por meio dessa credencial que a ativação é feita.

Credenciais de teste, porque em um primeiro momento, será necessário realizar testes para garantir o funcionamento correto do fluxo de compra e pagamentos.

Para ativar as credenciais, siga os passos a seguir.

1. Desça a tela até a seção de **Credenciais**.
2. Em **Como você quer operar os checkouts da sua loja?**, selecione a opção **Ativar modo teste para checkouts Mercado Pago**. (Mantendo este campo habilitado, sua loja estará em **modo teste**, o que permitirá testar o funcionamento do plugin antes de habilitar a loja para produção).
3. Insira suas credenciais de **teste** e **produção** nos campos solicitados. Caso ainda não tenha essas informações, acesse nossa documentação [Credenciais](https://www.mercadopago.[FAKER][URL][DOMAIN]/developers/pt/guides/resources/credentials) e siga o passo a passo para obtê-las. 
4. Ao finalizar o preenchimento, clique em **Salvar alterações**.

Com as credenciais preenchidas, configure as informações de negócio.

## Informações de negócio

As informações de negócio são necessárias para identificar sua loja. Preencha os campos conforme abaixo.

1. **Nome da loja:** insira o nome da sua loja.
2. **Categoria da loja:** insira a categoria dos produtos de sua loja.
3. **ID da loja:** Use um número ou prefixo para identificar pedidos e pagamentos provenientes da sua loja.
4. **Integrator ID:** Insira seu *integrator_id* como membro do **&lt;dev&gt;program**, do Mercado Pago. Caso ainda não seja um membro, [clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/developer-program) para mais informações.

Em **Ajustes avançados**, você configura opções relativas ao salvamento de informações em um arquivo para depurar problemas técnicos, além de configurar as [notificações IPN](https://www.mercadopago[FAKER][DOMAIN][URL]/developers/pt/guides/notifications/ipn/introduction). 

## Experiência de pagamento

Além das configurações anteriores, você encontra diferentes opções relacionadas à experiência de pagamento da sua loja, dependendo do tipo de checkout que você escolheu para configurar. Verifique abaixo as principais funcionalidades que você pode oferecer

> NOTE
>
> Importante
>
> Lembre-se que a disponibilidade das configurações descritas abaixo está condicionada ao tipo de checkout escolhido.

1. **Ativar o checkout:** selecione **Sim** para ativar a experiência do Mercado Pago no checkout da sua loja.
2. **Título:** mantenha o texto padrão ou altere para outro de sua preferência. Esse texto será exibido no checkout, junto às opções de pagamento.
3. **Meios de pagamento:** escolha os meios de pagamento que deseja oferecer.
4. **Converter moeda:** ative esta opção para que o valor da moeda configurada no WooCommerce seja compatível ao valor da moeda que você usa no Mercado Pago.
5. **Máximo de parcelas:** selecione o máximo de parcelas que deseja oferecer em sua loja.
6. **Experiência de pagamento:** selecione entre **Redirect** e **Modal**. Em **Redirect**, os clientes serão redirecionados para uma página do Mercado Pago com o formulário de pagamentos para terminar a compra. Já em **Modal**, os clientes terão acesso ao formulário de pagamentos do Mercado Pago sem sair da sua loja.
7. **Voltar à loja:** selecione se deseja ou não que o cliente retorne automaticamente à sua loja após concluir o pagamento.
8. **URL de sucesso / URL de pagamento recusado / URL de pagamento pendente:** caso queira construir uma URL e personalizar a página de retorno para os 3 status informados, basta inseri-las no campo solicitado.
9. **Modo binário:** ative quando não quiser deixar os pagamentos em estado pendente ou em revisão. Com o modo binário, os pagamentos serão aceitos ou recusados automaticamente.
10. **Cupons de desconto:** selecione se deseja ou não oferecer cupons de desconto em sua loja.
11. **Reduzir inventário:** selecione **Sim** se deseja que o produto seja retirado do estoque durante a criação do pedido, independentemente do pagamento ser aprovado ou não. Caso contrário, mantenha **Não** para que o produto seja retirado do estoque somente quando o pagamento for aprovado. 
12. **Desconto por comprar com Mercado Pago:** defina um valor percentual de desconto para os clientes que pagarem com Mercado Pago.
13. **Comissão por compra com Mercado Pago:** defina um valor percentual adicional que quiser cobrar como tarifa dos seus clientes por pagar com Mercado Pago.
----[mlb]----
14. **Pix:** caso queira oferecer pagamentos por Pix, é preciso ativar o **Checkout Personalizado** **- Pague com Pix** e seguir os passos descritos na tela para concluir a integração.
15. **Vencimento do Pix:** defina o prazo de validade do código enviado ao cliente após a realização do pedido. Este será o período que o cliente terá para pagar a compra.
------------

16. **Pagamento com cartões salvos**: permite que os clientes comprem com os dados do cartão guardados no Mercado Pago, sem precisar preencher dados do cartão no checkout da loja.

----[mlb]----
> WARNING
>
>Importante
>
> Antes de configurar o Pix como meio de pagamento, recomendamos [baixar a última versão](https://br.wordpress.org/plugins/woocommerce-mercadopago/#description) do plugin Mercado Pago para WooCommerce e [cadastrar sua chave Pix](https://www.mercadopago.com.br/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required) no Mercado Pago. 
------------

## E-mail de notificação

Tendo selecionado o **Checkout Transparente** para receber os pagamento de sua loja, é importante configurar o envio de e-mails que notificarão o usuário de suas transações. Veja abaixo como personalizar o envio do **e-mail transacional** no painel de gerenciamento do WooCommerce.

1. Em **E-mails**, habilite o envio a ser configurado selecionando a opção ˜ativar esse e-mail de notificação".
2. Personalize o template do e-mail com: os destinatários, o assunto do e-mail e o cabeçalho.
3. Insira o **conteúdo** a ser enviado e selecione o tipo do e-mail.
6. Indique também o nome e o endereço de e-mail do remetente, além do logo e das cores da sua loja.
4. Feitas as devidas configurações, instale e configure um **servidor de SMTP** de sua preferência para viabilizar o envio dos e-mails. 
5. Envie um **e-mail de teste** para garantir que a plataforma está enviando os e-mails corretamente.

Pronto! Agora o plugin do Mercado Pago com o WooCommerce está integrado à sua loja e pode ser testado realizando compras que serão apenas para fim de validar o funcionamento do plugin, mas não movimentará qualquer valor.

> NEXT_STEP_CARD_PT
>
> Teste de compras
>
> Saiba como realizar uma compra teste e garantir o funcionamento da integração.
>
> [Teste de compras](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/woocommerce/testing)
