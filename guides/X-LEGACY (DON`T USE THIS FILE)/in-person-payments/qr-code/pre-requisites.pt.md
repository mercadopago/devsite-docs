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

## Requisitos prévios

Observe estes pontos antes de começar: 

### 1. Acesse uma conta

Para poder começar a integração, é necessário **contar com uma conta de Mercado Pago ou Mercado Livre**. 

Você pode [Entrar](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/qr-code/pre-requisites) em uma conta existente ou [Criar uma nova conta](https://www.mercadopago[FAKER][URL][DOMAIN]).

### 2. Crie uma aplicação

Para transacionar via integração Mercado Pago, uma credencial deve ser criada. Essa credencial terá uma identificação e o Access Token, somente com esse token será possível transacionar utilizando uma conta Mercado Pago.
Crie uma aplicação para obter as credenciais e configurar notificações webhooks.

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
> Caso sua integração seja um PDV integrado a vários lojistas/Vendedores, veja o tópico 4 e 5. Fique atento à segurança de sua integração e faça a implantação [Oauth](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/security/oauth/introdution).

### 3. Gerar usuários de teste

Para realizar os testes, é necessário que você tenha, no mínimo, dois usuários: um comprador e um vendedor. 

Execute o comando seguinte para gerar um usuário de teste: 

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${TEST_ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]","description" : "a description"}'
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
    "site_id": "[FAKER][GLOBALIZE][UPPER_SITE_ID]",
    "description": "a description",
    "email": "test_user_123456@testuser.com",
    "date_created": "2021-11-04T12:02:35Z",
    "date_last_updated": "2021-11-04T12:02:35Z"
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

### 4. Como coletar Access Token (OAuth)

Para você integrador que irá trabalhar com diversas lojas que utilizam carteira digital Mercado Pago, orientamos que faça o processo de OAuth - autenticação entre contas, esse processo consiste no processo do vendedor permitir que seus dados sejam compartilhados com um sistema terceiro de forma segura.

O access token não poderá ser compartilhado de outra maneira que não seja o OAuth. [Clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/credentials) para mais informações.

### 5. Como Identificar sua integração (Sponsor ID)

Para identificar os pedidos que são transacionados pelo seu sistema de gestão, faça a inclusão do sponsor ID, veja nas APIs de [ordens presenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference) como você enviará essa informação.

Passo a Passo:
> * Crie uma conta no portal Mercado Pago (identificação Integrador).
> * Colete o Collector ID (Cust ID ou User ID) de sua conta.
> * Inclua o Collector ID de sua conta Integrador dentro do Sponsor ID do vendedor.
> * Envie o Sponsor ID em todas as transações de QR. [Consulte a api](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/post).

---
### Próximos passos

> LEFT_BUTTON_REQUIRED_PT
>
> Lojas e Caixas
>
> Para realizar a integração, primeiramente deverá configurar suas lojas e caixas.
>
> [Lojas e Caixas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/qr-code/stores-pos)
