# Configuração da integração

Conecte uma conta do Mercado Pago ao módulo para capturar os recebimentos das suas vendas no PrestaShop. Atualmente existem **3 tipos de checkout** disponíveis para o PrestaShop. Portanto, caso queira configurar todas as formas de pagamento oferecidas, o processo deve ser feito individualmente, do contrário, escolha o que melhor se adequa ao seu negócio. 

Veja abaixo as principais características desses tipos de checkout:

| Características | Checkout Pro | Checkout Personalizado | Ticket Checkout |
| --- | --- | --- | --- |
| Meios de pagamento | Pagamento com cartões, em dinheiro e com dinheiro na conta do Mercado Pago. | Pagamentos com cartões de crédito. | Pagamentos presenciais. |
| Experiência de pagamento | Seus clientes pagam na página do Mercado Pago com um formato redirect (fora da sua loja) ou modal (dentro da sua loja). | Seus clientes pagam sem sair da sua loja virtual. | Seus clientes pagam sem sair da sua loja virtual. |
| Usuários convidados | Seus clientes podem pagar tendo ou não uma conta no Mercado Pago. | Seus clientes pagam como convidados, sem ter uma conta no Mercado Pago. | Seus clientes pagam como convidados, sem ter uma conta no Mercado Pago. |

> NOTE
>
> Nota
>
> Consulte a [documentação do Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/introduction) para conhecer melhor todas as suas características e funcionalidades.

Na tela de gerenciamento do plugin (acesse o menu **Módulos e serviços** e clique em **configurar**), você deverá preencher os campos solicitados de acordo com suas informações de negócio considerando as seções abaixo.

## País de operação

No campo **Localização** você deverá selecionar o país no qual sua conta do Mercado Pago opera. 

## Ativação de credenciais

Na seção **Credenciais**, você deverá inserir suas credenciais de:

* **Teste**: em um primeiro momento, será necessário realizar testes para garantir o funcionamento correto do fluxo de pagamentos.

* **Produção**: ao finalizar os testes iniciais, habilitaremos a loja para o processamento de vendas reais e é por meio dessa credencial que a ativação é feita.

![Credenciais](/images/prestashop/credenciais_pt.png)

> NOTE
>
> Nota
>
> Não há problema em usar as mesmas credenciais em várias lojas.Entretanto, se o vendedor quiser rastrear cada uma de suas lojas, ele pode criar um [app-id](http://applications.mercadopago.com/) diferente, um para cada loja e usar as credenciais desse app-id especificado. Caso ainda não tenha as informações das Credenciais, acesse nossa documentação [Credenciais](https://www.mercadopago.[FAKER][URL][DOMAIN]/developers/pt/guides/resources/credentials) e siga o passo a passo para obtê-las. 

Com as credenciais preenchidas, configure as informações de negócio.

## Informações de negócio

As informações de negócio são necessárias para identificar sua loja. Preencha os campos conforme abaixo.

1. **Nome da loja:** insira o nome da sua loja.
2. **Categoria da loja:** insira a categoria dos produtos de sua loja.
3. **Integrator ID:** Insira seu *integrator_id* como membro do **&lt;dev&gt;program**, do Mercado Pago. Caso ainda não seja um membro, [clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/developer-program) para mais informações.

## Experiência de pagamento

Além das configurações anteriores, você encontra diferentes opções relacionadas à experiência de pagamento da sua loja, dependendo do tipo de checkout que você escolheu para configurar. Verifique abaixo as principais funcionalidades que você pode oferecer.

> NOTE
>
> Importante
>
> Lembre-se que a disponibilidade das configurações descritas abaixo está condicionada ao tipo de checkout escolhido.

1. **Ativar o checkout:** selecione **Sim** para ativar a experiência do Mercado Pago no checkout da sua loja.
2. **Meios de pagamento:** escolha os meios de pagamento que deseja oferecer.
3. **Máximo de parcelas:** selecione o máximo de parcelas que deseja oferecer em sua loja.
4. **Parcelamento e juros:** [configure](https://www.mercadopago.com.br//costs-section#from-section=menu) a tarifa que será paga em cada compra e também ofereça parcelas sem juros para seus clientes.
5. **Voltar à loja:** selecione se deseja ou não que o cliente retorne automaticamente à sua loja após concluir o pagamento.
6. **Modal checkout:** defina se os clientes terão acesso ao formulário de pagamentos do Mercado Pago sem sair da sua loja.
7. **Modo binário:** ative quando não quiser deixar os pagamentos em estado pendente ou em revisão. Com o modo binário, os pagamentos serão aceitos ou recusados automaticamente.
8. **Cancelamento das preferências de pagamento:** indique o período em que as preferências de pagamento do cliente ficarão salvas sem que este precise incluí-las novamente.
9. **Desconto por comprar com Mercado Pago:** defina um valor percentual de desconto para os clientes que pagarem com Mercado Pago.
10. **Meios de pagamento presenciais:** selecione quais meios de pagamento serão oferecidos nos pagamentos realizados via Ticket Checkout.
11. **Vencimento pagamento:** após a seleção dos meios de pagamento presenciais, indique em quantos dias estes vencerão após a sua emissão.

Pronto! Agora o plugin do Mercado Pago com o PrestaShop está integrado à sua loja e pode ser testado a fim de validar o seu funcionamento, mas sem movimentar qualquer valor.

> LEFT_BUTTON_REQUIRED_PT
>
> Teste de pagamentos
>
> Saiba como realizar uma compra teste e garantir o funcionamento da integração.
>
> [Teste de pagamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/prestashop/testing)