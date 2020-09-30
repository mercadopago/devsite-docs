---
indexable: false
---

# Testes   

## Teste de assinaturas

Explicamos como usar nossos cartões e usuários de teste para verificar se suas assinaturas foram criadas corretamente.

> NOTE
> 
> Limitações de teste de assinatura
> 
> No momento, com usuários experimentais só é possível realizar o fluxo de criação de uma assinatura e você não poderá ver o impacto ou registro da cota, seja através do painel Mercado Pago ou por API.


### Como testar sua integração

**Os usuários de teste permitem testar suas assinaturas** ao gerar fluxos de pagamento com uma cópia exata das suas configurações.

Tipos de usuário |   Descrição  
------------ 	 |	--------    
Vendedor       |  Esta é a conta de teste que você usa para configurar a assinatura e credenciais para a cobrança.
Pagador        |  É a conta de teste que você usa para testar os pagamentos recorrentes.  

### Como criar usuários

Para começar, você precisa ter pelo menos dois usuários de teste: um comprador e um vendedor.

Para configurar a conta do vendedor, você pode usar as credenciais de teste do seu usuário. 

Execute o curl a seguir para gerar um usuário de teste:


[[[
```curl curl -X POST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer ENV_ACCESS_TOKEN" \
"https://api.mercadopago.com/users/test_user" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'
```
]]]

### Resposta
`HTTP Status 200 OK`
```json
{
    "id": 123456,
    "nickname": "TT123456",
    "password": "qatest123456",
    "site_status": "active",
    "email": "test_user_XXXX@testuser.com"
}
```

### Teste o fluxo de pagamento

#### 1. Configure a assinatura com os dados do seu usuário vendedo

Use a <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/account/credentials" target="_blank">chave pública de teste</a> do seu usuário vendedor na hora de criar a assinatura que quiser testar

#### 2. Faça um pagamento com seu usuário comprador

Testes com cartão de crédito

1. Acesse a assinatura que você criou e quer revisar.
1. Preencha os dados de um **cartão de teste**.
1. Insira os dados do seu usuário de teste pagador.
1. Confirme a compra e pronto!

### Cartões de teste

Cartão |   Número  | Código de segurança   |   Data de vencimento
--- |	--- | --- | --- 
Mastercard       |  5031 7557 3453 0604 |   123 | 11/25            
Visa             |  4509 9535 6623 3704 |   123 | 11/25   
American Express |  3711 803032 57522   |   1234| 11/25   

------------
### Próximos passos

> LEFT_BUTTON_RECOMMENDED_PT
>
> Integração avançada
>
> Atualize, altere ou cancele suas assinaturas.
>
> [Integração avançada](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/subscriptions/advanced-integration/)

> RIGHT_BUTTON
>
> Novas tentativas de cobrança
>
> Caso você tenha problemas, explicamos a lógica de novas tentativas de cobrança. 
>
> [Novas tentativas de cobrança](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/subscriptions/payment-retry/)
