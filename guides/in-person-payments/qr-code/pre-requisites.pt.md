# Requisitos prévios para se integrar

## Glossário

Sabemos que alguns termos são novos. Antes de começar, os deixamos perto de suas mãos. 

| Termo | Descrição |
| --- | --- |
| Credenciais (Credentials) | Suas credenciais são as senhas que lhe fornecemos para que você possa configurar suas integrações. Para poder achá-las, vá para suas [credenciais]([FAKER][CREDENTIALS][URL]) e selecione as produtivas. |
| `ACCESS_TOKEN` | É a senha privada do aplicativo para gerar pagamentos, dentro da secção [credenciais]([FAKER][CREDENTIALS][URL]). Deve utilizá-la para se identificar em suas integrações. Utiliza sempre as do **Modo Produção**. |
| `USER_ID` | É o ID do usuário vendedor no Mercado Pago. Este ID é composto pelos últimos dígitos do access_token após o último hífen. Isso significa que, se o seu `access_token` for **APP_USR-8499883828799661-062409-bf057c51fc05f87eba5608328f869879-446566691**, seu `USER_ID` será **446566691**. Também conhecido como `COLLECTOR_ID`. |
| `SPONSOR_ID` | É o ID do usuário fornecedor do sistema integrado com Mercado Pago. Este ID é composto pelos últimos dígitos do `access_token` após o último hífen. Isso significa que, se seu `access_token` for **APP_USR-8499883828799661-062409-bf057c51fc05f87eba5608328f869879-776566693**, seu `USER_ID` será **776566693**. O `sponsor_ID` não pode ser igual ao `USER_ID`. |
| Loja (Store) | É uma **loja física** onde seus clientes podem adquirir seus produtos ou serviços. Você pode ter várias lojas numa mesma conta. |
| Caixa (POS) | É um **ponto de venda** que existe numa sucursal ou loja física. Cada caixa terá um código QR unívoco vinculado. |
| Ordem | É o pedido realizado pelo seu cliente. Contém uma relação de produtos com seu valor associado. |

> Leia [Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/credentials) para mais informações. 

## Requisitos prévios

Observe estes pontos antes de começar: 

### 1. Acesse uma conta

Para poder começar a integração, é necessário **contar com uma conta de Mercado Pago ou Mercado Livre**. 

Você pode [Entrar](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/qr-code/pre-requisites) em uma conta existente ou [Criar uma nova conta](https://www.mercadopago[FAKER][URL][DOMAIN]).

### 2. Crie uma aplicação

Você precisará criar uma aplicação para cada solução, a fim de ter tudo organizado e manter um controle que facilite a gestão. Crie uma aplicação para obter as credenciais e configurar notificações de webhooks.

É fácil e explicamos como fazer isso:

1. Entre em [Suas integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications).
2. Selecione “Nova aplicação” ou “Criar sua primeira aplicação”.
3. Dê a ela um nome com o qual você possa identificá-la mais tarde.
4. Aceite nossos Termos e condições. E pronto!

Caso não tenha nenhuma aplicação cadastrada, [veja o tutorial](https://youtu.be/FFhHdiqpnEI?list=PLCazXKuqZp3g4WfhNlhsB3FL9-1z7gUny).

> NOTE
> 
> Nota
>
> Se for operar em nome de outros, você pode trabalhar com credenciais deles de uma forma mais fácil e segura por [Oauth](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/security/oauth).

### 3. Gerar usuários de teste

Para realizar os testes, é necessário que você tenha, no mínimo, dois usuários: um comprador e um vendedor. 

Execute o comando seguinte para gerar um usuário de teste: 

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
"https://api.mercadopago.com/users/test_user"
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'
```

> NOTE
> 
> Nota
> 
> As credenciais utilizadas são as produtivas da conta com a qual você vai operar.   

Resposta:

```json
{
    "id": 123456,
    "nickname": "TT123456",
    "password": "qatest123456",
    "site_status": "active",
    "email": "test_user_123456@testuser.com"
}
```

> WARNING
>
> IMPORTANTE
>
> * Você pode gerar até 10 contas de usuários de teste em simultâneo. Por isso, recomendamos você salvar o e-mail e senha de cada um. 
> * Os usuários de teste caducam após 60 dias sem atividade em Mercado Pago.
> * Para realizar pagamentos de teste, recomendamos que você utilize valores baixos.
> * Tanto o comprador como o vendedor devem ser usuários de teste.
> * Utiliza cartões de teste, já que não é possível sacar o dinheiro.
> * Vídeo tutorial de como criar um [usuário teste.](https://youtu.be/ejdnAM0A9jA?list=PLCazXKuqZp3g4WfhNlhsB3FL9-1z7gUny)

Uma vez que os usuários de teste são criados, você pode começar com a integração e criar as lojas e caixas.

---
### Próximos passos

> LEFT_BUTTON_REQUIRED_PT
>
> Lojas e Caixas
>
> Para realizar a integração, primeiramente deverá configurar suas lojas e caixas.
>
> [Lojas e Caixas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/qr-code/stores-pos)
