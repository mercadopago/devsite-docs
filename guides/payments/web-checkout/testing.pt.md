---
sites_supported:
  - mpe
---

# Teste a Integração

Antes de partir para a produção, é muito importante que realize testes de fluxo de pagamentos, verificando se as configurações feitas nas preferências realmente estão no checkout.

Você deve verificar se:
+ As informações do produto ou serviço a ser pago estão corretas
+ Reconhece a conta do cliente para quem o e-mail é enviado
+ Oferece os métodos de pagamento que deseja
+	Seu cliente é redirecionado corretamente após a conclusão do pagamento
+ A experiência de pagamento é apropriada e informa o resultado do pagamento


## Como realizar os testes?

### Crie usuários de teste

Para simular o processo de pagamento do começo ao fim é necessário criar 2 usuários de teste: **vendedor** e **comprador**.

Você deve fazer a seguinte requisição à API para criar cada um dos usuários.

Utilize o *site_id* para indicar o país de onde quer realizar os testes.

| Pais  | Site_id |
| ---- 	| ----- |
| Argentina | **MLA** |
| Brasil  | **MLB** |
| México  | **MLM** |
| Chile | **MLC** |
| Uruguai | **MLU** |
| Peru  | **MPE** |
| Colômbia  | **MCO**|

##### _Request_
[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $body = array(
    "json_data" => array(
      "site_id" => "[FAKER][GLOBALIZE][SITE_ID]"
    )
  );

  $result = MercadoPago\SDK::post('/users/test_user', $body);

  var_dump($result);
?>
```
```curl
curl -X POST \
-H "Content-Type: application/json" \
"https://api.mercadopago.com/users/test_user?access_token=ENV_ACCESS_TOKEN" \
-d '{"site_id":"[FAKER][GLOBALIZE][SITE_ID]"}'
```
]]]
##### _Response_
```json
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
| Uruguay  	 | 4157 2362 1173 6486 |5161 4413 1585 2061  | indisponível      |

Você também pode [usar cartões de teste para formas de pagamento locais de cada país.](https://www.mercadopago.com.br/developers/pt/guides/localization/local-cards)

### Faça os testes correspondentes

O processo completo para testar o checkout é o seguinte:

1. Inicie a sessão no Mercado Pago com o **vendedor** e obtenha as [credenciais]([FAKER][CREDENTIALS][URL]) para configurá-las na criação da preferência de pagamento.
2. Encerre a sessão no Mercado Pago.
3. Envie o e-mail do **comprador** na preferência de pagamento.
4. Preencha os dados do formulário, inserindo os dígitos de um cartão de teste. Na data de vencimento é necessário inserir qualquer data posterior à data atual e o código de segurança aleatório de 4 dígitos para cartões Amex ou 3 dígitos para quaisquer outros cartões.
5. No nome do titular do cartão, você pode inserir um dos prefixos abaixo para testar os diferentes resultados (pagamentos aprovados, recusados ou pendentes):
	* **APRO**: Pagamento aprovado.
	* **CONT**: Pagamento pendente.
	* **CALL**: Recusado, ligar para autorizar.
	* **FUND**: Recusado por saldo insuficiente.
	* **SECU**: Recusado por código de segurança.
	* **EXPI**: Recusado por data de validade.
	* **FORM**: Recusado por erro no formulário.
	* **OTHE**: Recusado geral.
6. Em caso de pagamento recusado, você poderá fazer uma nova tentativa e simular algum outro resultado, assim como indicado no item anterior.
7. Verifique se recebeu a notificação corretamente
8. Efetue a devolução de um pagamento aprovado e verifique se recebeu a notificação com a atualização de status do pagamento.

### Condições de uso

+ Os usuários de teste expiram depois de 60 dias sem atividades no MercadoPago.
+ É possível ter até 10 usuários de teste simultâneos.
+ Para fazer pagamentos de testes use valores baixos:
	* Pode pagar com um cartão de crédito real e, em seguida, cancelar os pagamentos e receber todo o estorno.
	* Pode fazer pagamentos com boletos, mas não deve concretizá-los.
+ As simulações só podem ser efetuadas por usuários de teste.
+ Não é possível fazer retiradas para contas bancárias com o dinheiro recebido nos testes de integração.
