# Teste sua integração

Antes de partir para a produção, é muito importante que realize testes de fluxo de pagamentos, verificando se as configurações feitas nas preferências realmente estão no checkout.

Você deve verificar se:

+ As informações do produto ou serviço a ser pago estão corretas.
+ Reconhece a conta do cliente para quem o e-mail é enviado.
+ Oferece os métodos de pagamento que deseja.
+ A experiência de pagamento é apropriada e se informa o resultado do pagamento.


## Para testar a integração siga estes passos:

1. Configure a [Public Key]([FAKER][CREDENTIALS][URL]) na sua aplicação.
2. Crie a preferência no seu servidor com o [Access Token]([FAKER][CREDENTIALS][URL]).
3. Preencha os dados do formulário, inserindo os dígitos de um cartão de teste. Na data de vencimento, é necessário inserir qualquer data posterior à data atual e o código de segurança de 3 ou 4 dígitos dependendo do cartão.
4. Para **testar diferentes resultados de pagamento**, preencha o dado que quiser no nome do titular do cartão. Veja mais informações em [Disponibilidade dos produtos e meios de pagamento.](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/localization/consult-payment-methods)