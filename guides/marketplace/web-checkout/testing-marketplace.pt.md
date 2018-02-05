# Teste a Integração

Antes de partir para a produção, é muito importante que realize testes de fluxo de pagamentos, verificando se as configurações feitas nas preferências estão no checkout.
Você deve verificar se:

+ As informações do produto ou serviço a ser pago estão corretas
+ Se reconhece a conta do cliente para quem o e-mail é enviado
+ Oferece os métodos de pagamento que deseja
+	Seu cliente é redirecionado corretamente após a conclusão do pagamento
+ Se a divisão do pagamento é feita corretamente entre a sua conta do marketplace e a do vendedor


## Como realizar os testes?

### Crie usuários de teste

Para simular o processo de pagamento do começo ao fim, é necessário criar 3 usuários de teste: **marketplace**, **vendedor** e **comprador**.

Você deve fazer a seguinte requisição à API para criar cada um dos usuários.

Utilize o *site_id* para indicar o país de onde quer realizar os testes. Argentina: **MLA**, Brasil: **MLB**, México: **MLM**, Venezuela: **MLV**, Chile: **MLC**, Uruguai: **MLU**, Peru: **MPEv e Colômbia: **MCO**.

##### Request
```curl
# Get access token
AT=`curl -s -X POST -H 'content-type: application/x-www-form-urlencoded' 'https://api.mercadopago.com/oauth/token'
-d 'grant_type=client_credentials'
-d 'client_id=CLIENT_ID'
-d 'client_secret=CLIENT_SECRET' | grep -o '"access_token":"[^"]*"' | sed -n 's/.*"access_token":"\(.*\)"/\1/p'`

curl -X POST \
-H "Content-Type: application/json" \
"https://api.mercadopago.com/users/test_user?access_token=$AT" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'
```
##### Response
```curl
{
    "id": 123456,
    "nickname": "TT123456",
    "password": "qatest123456",
    "site_status": "active",
    "email": "test_user_123456@testuser.com"
}
```

### Cartões de teste

| País       | Visa                | Mastercard          | American Express  |
| ---------- | ------------------- | ------------------- | ----------------- |
| Argentina  | 4509 9535 6623 3704 | 5031 7557 3453 0604 | 3711 803032 57522 |
| Brasil     | 4235 6477 2802 5682 | 5031 4332 1540 6351 | 3753 651535 56885 |
| Chile      | 4168 8188 4444 7115 | 5416 7526 0258 2580 | 3757 781744 61804 |
| Colômbia   | 4013 5406 8274 6260 | 5254 1336 7440 3564 | 3743 781877 55283 |
| México     | 4075 5957 1648 3764 | 5474 9254 3267 0366 | indisponível      |
| Peru       | 4009 1753 3280 6176 | indisponível        | indisponível      |
| Uruguai  	 | 4157 2362 1173 6486 |5808 8877 7464 1586  | indisponível      |
| Venezuela  | 4966 3823 3110 9310 | 5177 0761 6430 0010 | indisponível      |

Você também pode [usar cartões de teste de métodos de pagamento locais de cada país](/guides/localization/local-cards.pt.md).

### Faca os testes correspondentes

O processo completo para testar o checkout é o seguinte:

1. Inicie a sessão no Mercado Pago com a conta do **marketplace** e gere um APP_ID com todas as suas configurações e a URL a ser enviada ao **vendedor** para que vincule sua conta.
2. Inicie a sessão no Mercado Pago com o **vendedor** e vincule a conta ao marketplace, entrando na URL configurada.
3. Verifique se as credenciais do vendedor foram registradas no marketplace.
4. Efetue um pagamento de teste. Você pode enviar o e-mail do **comprador** na preferência de pagamento, ou testar o fluxo como *convidado*. O e-mail do comprador será solicitado ao finalizar a compra.
5. Preencha os dados do formulário, inserindo os dígitos de um cartão de teste. Na data de vencimento, é necessário inserir qualquer data posterior à data atual e o código de segurança de 3 dígitos.
6. No nome do titular do cartão, insira o prefixo correspondente ao que deseja testar:
    * **APRO**: Pagamento aprovado.  
    * **CONT**: Pagamento pendente.  
    * **CALL**: Recusado, ligar para autorizar.  
    * **FUND**: Recusado por saldo insuficiente.
    * **SECU**: Recusado por código de segurança.  
    * **EXPI**: Recusado por data de validade.
    * **FORM**: Recusado por erro no formulário.  
    * **OTHE**: Recusado geral.
7. Valide, em caso de nova tentativa, para que sejam realizadas corretamente.
8. Verifique se recebeu a notificação corretamente.
9. Verifique se a divisão do pagamento entre as contas do marketplace e a do vendedor foi feita. corretamente, conforme especificado no atributo marketplace\_fee da preferência de pagamentos.
10. Efetue a devolução de um pagamento aprovado.
