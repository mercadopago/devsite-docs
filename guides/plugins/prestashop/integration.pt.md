# Configuração da integração

Para realizar a integração com o Mercado Pago, siga os procedimentos abaixo.

1. Na tela de gerenciamento do plugin (acesse o menu **Módulos e serviços** e clique em **configurar**), você deverá preencher os campos solicitados de acordo com suas informações de negócio.

![Configurar integração](/images/prestashop/integracao_pt.gif)

2. No campo **Localização**, selecione o país de operação da sua conta do Mercado Pago. 

3. Na seção **Credenciais**, insira as suas credenciais de:

* **Teste**: em um primeiro momento, será necessário realizar testes para garantir o funcionamento correto do fluxo de pagamentos.

* **Produção**: ao finalizar os testes iniciais, habilitaremos a loja para o processamento de vendas reais e é por meio dessa credencial que a ativação é feita.

![Credenciais](/images/prestashop/credenciais_pt.png)

> NOTE
>
> Nota
>
> Não há problema em usar as mesmas credenciais em várias lojas. Entretanto, se o vendedor quiser rastrear cada uma de suas lojas, ele pode criar um [app-id](http://applications.mercadopago.com/) diferente, um para cada loja e usar as credenciais desse app-id especificado. Caso ainda não tenha as informações das Credenciais, acesse nossa documentação [Credenciais](https://www.mercadopago.[FAKER][URL][DOMAIN]/developers/pt/guides/resources/credentials) e siga o passo a passo para obtê-las. 

4. Com as credenciais preenchidas, configure as informações de negócio necessárias para identificar sua loja.

* **Nome da loja:** insira o nome da sua loja.
* **Categoria da loja:** insira a categoria dos produtos de sua loja.
* **Integrator ID:** Insira seu *integrator_id* como membro do **&lt;dev&gt;program**, do Mercado Pago. Caso ainda não seja um membro, [clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/developer-program) para mais informações.

5. Por fim, configure as experiências de pagamento da sua loja de acordo com o tipo de checkout que você escolheu para configurar. Com o [Checkout Pro](https://www.mercadopago.[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/introduction) o pagamento é realizado na página do Mercado Pago (dentro ou fora da sua loja) com cartões (débito ou crédito) e dinheiro (saldo da conta do Mercado Pago ou boleto bancário), enquanto com o [Checkout Transparente](https://www.mercadopago.[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/introduction) o pagamento é realizado com cartão de crédito sem sair da sua loja virtual e, com o **Ticket Checkout**, os pagamentos são realizados presencialmente com dinheiro ou boleto bancário. Verifique abaixo as principais funcionalidades que você pode oferecer.

> NOTE
>
> Importante
>
> Lembre-se que a disponibilidade das configurações descritas abaixo está condicionada ao tipo de checkout escolhido.

* **Ativar o checkout:** selecione **Sim** para ativar a experiência do Mercado Pago no checkout da sua loja.
* **Meios de pagamento:** escolha os meios de pagamento que deseja oferecer.
* **Máximo de parcelas:** selecione o máximo de parcelas que deseja oferecer em sua loja.
* **Parcelamento e juros:** [configure](https://www.mercadopago.com.br//costs-section#from-section=menu) a tarifa que será paga em cada compra e também ofereça parcelas sem juros para seus clientes.
* **Voltar à loja:** selecione se deseja ou não que o cliente retorne automaticamente à sua loja após concluir o pagamento.
* **Modal checkout:** defina se os clientes terão acesso ao formulário de pagamentos do Mercado Pago sem sair da sua loja.
* **Modo binário:** ative quando não quiser deixar os pagamentos em estado pendente ou em revisão. Com o modo binário, os pagamentos serão aceitos ou recusados automaticamente.
* **Cancelamento das preferências de pagamento:** indique o período em que as preferências de pagamento do cliente ficarão salvas sem que este precise incluí-las novamente.
* **Desconto por comprar com Mercado Pago:** defina um valor percentual de desconto para os clientes que pagarem com Mercado Pago.
* **Meios de pagamento presenciais:** selecione quais meios de pagamento serão oferecidos nos pagamentos realizados via Ticket Checkout.
* **Vencimento pagamento:** após a seleção dos meios de pagamento presenciais, indique em quantos dias estes vencerão após a sua emissão.

Pronto! Agora o plugin do Mercado Pago com o PrestaShop está integrado à sua loja e, antes de colocar em produção para vendas reais, recomendamos testar a loja para validar o seu funcionamento

> LEFT_BUTTON_REQUIRED_PT
>
> Teste de pagamentos
>
> Saiba como realizar uma compra teste e garantir o funcionamento da integração.
>
> [Teste de pagamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/prestashop/testing)