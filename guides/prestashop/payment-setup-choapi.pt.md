# Configuração de pagamentos com ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- # Checkout API ------------
 
Com o ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API ------------, ofereça pagamentos com **cartões de crédito** diretamente em sua loja, sem que o comprador precise ser redirecionado para realizar o pagamento.
 
Para integrar o checkout, siga os passos abaixo.
 
1. Selecione **Sim** para ativar a experiência do checkout na sua loja. Clique [aqui](/developer/pt/guides/additional-content/payment-localization/consult-payment-methods) e veja quais são as bandeiras de cartões diponíveis para pagamento.
2. [Configure](https://www.mercadopago.com.br//costs-section#from-section=menu) a tarifa que será paga em cada compra e também ofereça parcelas sem juros para seus clientes.
3. Ative o **modo binário** quando não quiser deixar os pagamentos em estado pendente ou em revisão. Com o modo binário, os pagamentos serão aceitos ou recusados automaticamente.
4. Indique o período em que as preferências de pagamento do cliente ficarão salvas sem que este precise incluí-las novamente.
5. Se necessário, defina um valor percentual de desconto para os clientes que pagarem com Mercado Pago.
 
## Customização de e-mail
 
Tendo selecionado o ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API ------------ para receber os pagamento de sua loja, é importante configurar o envio de e-mails que notificarão o usuário de suas transações.
 
Veja abaixo como personalizar o envio do **e-mail transacional** no painel de gerenciamento da PrestaShop.
 
1. No **Painel Administrativo** da sua loja na PrestaShop, clique em **Internacional > Traduções** e selecione o template que deseja alterar.
2. Altere o template conforme desejado.
 
Feitas as devidas alterações, em **Parâmetros da Loja > Definições de Encomenda > Status** você pode definir um template de email para cada status de pedido. Para configurar o **servidor de SMTP** e viabilizar o envio dos e-mails:
 
1. Acesse **Parâmetros Avançados > Email** e selecione a opção "Definir meus próprios parâmetros de SMTP". Preencha com as informações do servidor responsável pelos envios.
2. Envie um e-mail de teste para garantir que a plataforma está enviando os e-mails corretamente.

> PREV_STEP_CARD_PT
>
> Configuração de pagamentos com Checkout Pro
>
> Saiba como configurar o Checkout Pro para receber os pagamento de sua loja.
>
> [Configuração de pagamento com Checkout Pro](/developers/pt/docs/prestashop/payment-setup/cho-pro)

> NEXT_STEP_CARD_PT
>
> Configuração de pagamentos presenciais
>
> Configure a sua loja para receber pagamentos presenciais. 
>
> [Configuração de pagamentos presenciais](/developers/pt/docs/prestashop/payment-setup/in-person)