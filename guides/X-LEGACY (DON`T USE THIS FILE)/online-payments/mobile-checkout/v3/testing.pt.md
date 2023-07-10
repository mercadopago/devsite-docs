---
sites_supported:
    - mla
    - mlb
    - mlm
    - mco
    - mlc
    - mpe
---
# Teste a Integração

Antes de partir para a produção, é muito importante que realize testes de fluxo de pagamentos, verificando se as configurações feitas nas preferências realmente estão no checkout.

Você deve verificar se:

+ As informações do produto ou serviço a ser pago estão corretas.
+ Reconhece a conta do cliente para quem o e-mail é enviado.
+ Oferece os métodos de pagamento que deseja.
+ A experiência de pagamento é apropriada e se informa o resultado do pagamento.

Para testar a integração siga estes passos:

1. Configure a public key do sandbox na sua aplicação.
2. Crie a preferência no seu servidor com o access token.
3. Preencha os dados do formulário, inserindo os dígitos de um cartão de teste. Na data de vencimento, é necessário inserir qualquer data posterior à data atual e o código de segurança de 3 ou 4 dígitos dependendo do cartão.
4. No nome do titular do cartão, insira o prefixo correspondente ao que deseja testar:

* **APRO**: Pagamento aprovado.  
* **CONT**: Pagamento pendente.
* **CALL**: Recusado, ligar para autorizar.  
* **FUND**: Recusado por saldo insuficiente.  
* **SECU**: Recusado por código de segurança.  
* **EXPI**: Recusado por data de validade.
* **FORM**: Recusado por erro no formulário.
* **OTHE**: Recusado geral.

### Cartões para testar nosso Checkout

Utilize estes cartões de teste para testar os diferentes resultados do pagamento.

| País | Visa | Mastercard | American Express |
| --- | --- | --- | --- |
| Argentina | 4509 9535 6623 3704 | 5031 7557 3453 0604 | 3711 803032 57522 |
| Brasil | 4235 6477 2802 5682 | 5031 4332 1540 6351 | 3753 651535 56885 |
| Chile | 4168 8188 4444 7115 | 5416 7526 0258 2580 | 3757 781744 61804 |
| Colômbia | 4013 5406 8274 6260 | 5254 1336 7440 3564 | 3743 781877 55283 |
| México | 4075 5957 1648 3764 | indisponível | 3766 7520 5781 151|
| Peru | 4009 1753 3280 6176 | indisponível | indisponível |
| Uruguay | 4157 2362 1173 6486 |5161 4413 1585 2061 | indisponível |
| Venezuela | 4966 3823 3110 9310 | 5177 0761 6430 0010 | indisponível |

Você também pode [usar cartões de teste de métodos de pagamento locais de cada país](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/localization/local-cards).
