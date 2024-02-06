# Configuração da integração
 
Para realizar a integração com o Mercado Pago, siga os procedimentos abaixo.
 
1. No Painel Administrativo da sua loja na Prestashop, acesse o menu **Módulos e serviços**, localize o plugin do Mercado Pago e clique em **configurar**.
2. Na tela de gerenciamento do plugin, preencha os campos solicitados de acordo com suas informações de negócio.
3. No campo **Localização**, selecione o país de operação da sua conta do Mercado Pago.
4. Na seção **Credenciais**, confirme se os campos estão devidamente preenchidos de acordo com as [credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/credentials) indicadas em seu seu [Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/dashboard/introduction). 
5. Em seguida, configure as informações de negócio necessárias para identificar sua loja.
 
* **Nome da loja:** insira o nome da sua loja.
* **Categoria da loja:** insira a categoria dos produtos de sua loja.
* **Integrator ID:** Insira seu *integrator_id* como membro do **&lt;dev&gt;program**, do Mercado Pago. Caso ainda não seja um membro, [clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/developer-program) para mais informações.
 
6. Configure as experiências de pagamento da sua loja de acordo com o tipo de checkout que você escolheu para configurar, podendo ser o [Checkout Pro](https://www.mercadopago.[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/introduction), o [Checkout Transparente](https://www.mercadopago.[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/introduction) e o **Ticket Checkout**.

> NOTE
>
> Importante
>
> Lembre-se que a disponibilidade das configurações descritas abaixo está condicionada ao tipo de checkout escolhido.
 
* **Ativar o checkout:** selecione **Sim** para ativar a experiência do Mercado Pago no checkout da sua loja.
* **Meios de pagamento:** escolha os meios de pagamento que deseja oferecer.
* **Máximo de parcelas:** selecione o máximo de parcelas que deseja oferecer em sua loja.
* **Parcelamento e acréscimos:** [configure](https://www.mercadopago.[FAKER][URL][DOMAIN]/costs-section) a tarifa que será paga em cada compra e também ofereça parcelas sem acréscimos para seus clientes.
* **Voltar à loja:** selecione se deseja ou não que o cliente retorne automaticamente à sua loja após concluir o pagamento.
* **Modal checkout:** defina se os clientes terão acesso ao formulário de pagamentos do Mercado Pago sem sair da sua loja.
* **Modo binário:** ative quando não quiser deixar os pagamentos em estado pendente ou em revisão. Com o modo binário, os pagamentos serão aceitos ou recusados automaticamente.
* **Cancelamento das preferências de pagamento:** indique o período em que as preferências de pagamento do cliente ficarão salvas sem que este precise incluí-las novamente.
* **Desconto por comprar com Mercado Pago:** defina um valor percentual de desconto para os clientes que pagarem com Mercado Pago.
* **Meios de pagamento presenciais:** selecione quais meios de pagamento serão oferecidos nos pagamentos realizados via Ticket Checkout.
* **Vencimento pagamento:** após a seleção dos meios de pagamento presenciais, indique em quantos dias estes vencerão após a sua emissão.
 
Pronto! Agora o plugin do Mercado Pago com a PrestaShop está integrado à sua loja.
 
> NEXT_STEP_CARD_PT
>
> Teste de pagamentos
>
> Saiba como realizar uma compra teste e garantir o funcionamento da integração.
>
> [Teste de pagamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/prestashop/testing)
