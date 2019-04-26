---
  indexable: false
---

# Configurar Aplicação para processar pagamentos Wallet Payments

Para processar pagamentos na modalidade Wallet Payments, os seguintes passos devem ser cumpridos.

### Criar uma conta Mercado Pago

A conta deve ser criada no site do Mercado Pago no país em que você deseja receber pagamentos.

* Argentina: www.mercadopago.com.ar
* Brasil: www.mercadopago.com.br
* Mexico: www.mercadopago.com.mx

### Criar uma aplicação

A aplicação será utilizada para solicitar permissões de acesso aos payers. A aplicação deve ser criada acessando `https://applications.mercadopago.com/` e completando as informações solicitadas. No campo `Redirect URI`, você deve inserir o endereço para o qual os usuários serão redirecionados quando a etapa de autorização de uso da carteira for concluída. Uma vez que o aplicativo é criado, o valor de `APP_ID` será obtido, o que será necessário para as etapas a seguir.

### Ativar sua aplicação para que receba pagamentos na modalidade Wallet Payments 

Entre em contato com seu executivo de conta e informe o `APP_ID` da aplicação para solicitar a habilitação da modalidade Wallet Payments.
