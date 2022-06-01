----[mlb]----
# Checkout Transparente
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
# Checkout API
------------
 
Com o ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API ------------, utilize nossos SDKs oficiais ou interaja diretamente com nossas APIs para construir sua própria experiência de pagamento na sua loja, controlando toda a experiência.
 
Para integrar o checkout, siga os passos abaixo.
 
1. Selecione **Sim** para ativar a experiência do Mercado Pago no checkout da sua loja.
2. Escolha os **meios de pagamento** que deseja oferecer dentro do ambiente de pagamento da sua loja, podendo ser: ----[mlb]---- débito, crédito, boleto e Pix. A opção de pagamento com Pix só será exibida se houver uma chave pix cadastrada no Mercado Pago. ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- débito, crédito e boleto. ------------
3. [Configure](https://www.mercadopago.com.br//costs-section#from-section=menu) a tarifa que será paga em cada compra e também ofereça parcelas sem juros para seus clientes.
4. Defina se os clientes terão acesso ao formulário de pagamentos do Mercado Pago sem sair da sua loja.
5. Ative o **modo binário** quando não quiser deixar os pagamentos em estado pendente ou em revisão. Com o modo binário, os pagamentos serão aceitos ou recusados automaticamente.
6. Indique o período em que as preferências de pagamento do cliente ficarão salvas sem que este precise incluí-las novamente.
7.Defina um valor percentual de desconto para os clientes que pagarem com Mercado Pago.
 
## Customização de e-mail
 
Tendo selecionado o **Checkout Transparente** para receber os pagamento de sua loja, é importante configurar o envio de e-mails que notificarão o usuário de suas transações.
 
Veja abaixo como personalizar o envio do **e-mail transacional** no painel de gerenciamento da PrestaShop.
 
1. No **Painel Administrativo** da sua loja na PrestaShop, clique em **Internacional > Traduções** e selecione o template que deseja alterar.
2. Altere o template conforme desejado.
 
Feitas as devidas alterações, em **Parâmetros da Loja > Definições de Encomenda > Status** você pode definir um template de email para cada status de pedido. Para configurar o **servidor de SMTP** e viabilizar o envio dos e-mails:
 
1. Acesse **Parâmetros Avançados > Email** e selecione a opção "Definir meus próprios parâmetros de SMTP". Preencha com as informações do servidor responsável pelos envios.
2. Envie um e-mail de teste para garantir que a plataforma está enviando os e-mails corretamente.

> PREV_STEP_CARD_PT
>
> Configuração de pagamento - Checkout Pro
>
> Saiba como configurar o Checkout Pro para receber os pagamento de sua loja.
>
> [Configuração de pagamento - Checkout Pro](/developers/pt/docs/prestashop/payment-setup-chopro)

> NEXT_STEP_CARD_PT
>
> Teste de pagamentos
>
> Saiba como realizar uma compra teste e garantir o funcionamento da integração.
>
> [Teste de pagamentos](/developers/pt/docs/prestashop/integration-test)