---
indexable: false
---

# Requisitos prévios para começar

## Considerações e restrições

----[mla]----
Observe que o valor mínimo permitido para criar uma assinatura é de R$ 2 e o máximo é de R$ 250.000.

------------

----[mlb]----
Observe que o valor mínimo permitido para criar uma assinatura é de R$ 0,5 e o máximo é de R$ 50.000.

------------

----[mlm]----
Observe que o valor mínimo permitido para criar uma assinatura é de $ 10 e o máximo é de R$ 200.000.

------------

## Primeiros passos

### Acesso à conta Mercado Pago ou Mercado Livre
Para poder começar a integração, é necessário ter uma conta Mercado Pago ou Mercado Livre.

e você ainda não tem uma, pode <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/" target="_blank">criar uma conta do Mercado Pago</a> quando quiser..

### Tenha suas credenciais à mão

As credenciais são as chaves que lhe fornecemos para que você possa configurar sua integração. Para este caso, você usará uma chave pública e uma chave privada.

Para poder encontrá-las, confira a seção de <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/account/credentials/" target="_blank">Credenciais</a>.

>Dúvidas sobre credenciais? Você pode conferir nossas <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/support/" target="_blank">perguntas frequentes.</a>.


### Utilize nossa biblioteca oficial

Integre nosso  <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/sdks/official/js/" target="_blank">SDK Javascript do Mercado Pago</a> que te permite criar um token com os dados do cartão de forma segura e enviá-lo ao seu backend para usá-lo nos seus pagamentos.


### Conheça os usuários de teste 

Comece a se familiarizar com a API ou teste sua integração, usando usuários de teste.

#### Criar usuários de teste

Execute o curl a seguir para gerar um usuário de teste:


[[[
```curl curl -X POST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer ENV_ACCESS_TOKEN" \
"https://api.mercadopago.com/users/test_user" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'
```
]]]

### Respuesta
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

>WARNING
>
>Importante
>
> * Tanto o comprador quanto o vendedor devem ser usuários de teste.
> * Você pode gerar até 10 contas de usuários de teste simultaneamente. Portanto, recomendamos que você salve o e-mail e a senha de cada um.
> * Os usuários do Mercado Pago expiram após 60 dias sem nenhuma atividade no Mercado Pago.
> * Para pagamentos de teste, recomendamos o uso de valores baixos
> * Os valores devem respeitar os <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/monto-minimo-maximo-medios-de-pago_620/" target="_blank">valores mínimos e máximos</a> para cada meio de pagamento. 



------------
### Próximos passos
> LEFT_BUTTON_REQUIRED_PT
>
> Integre assinaturas
>
> Escolha sua forma de integração e comece a receber pagamentos recorrentes.
>
> [Pruebas](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/integration/)
