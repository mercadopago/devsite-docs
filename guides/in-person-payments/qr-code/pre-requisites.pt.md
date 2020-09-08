---
sites_supported:
  - mla
  - mpe
  - mco
  - mlu
  - mlm
  - mlc
  - mlb
---

# Requisitos prévios para se integrar

## Glossário

Sabemos que alguns termos são novos. Antes de começar, os deixamos perto de suas mãos. 

| Termo                            | Descrição                                                  |
| -----------------------------------| ------------------------------------------------------------ | 
| Credenciais (Credentials)         | Suas credenciais são as senhas que lhe fornecemos para que você possa configurar suas integrações. Para poder achá-las, vá para suas [credenciais]([FAKER][CREDENTIALS][URL]) e selecione as produtivas. |
| `ACCESS_TOKEN` | É a senha privada do aplicativo para gerar pagamentos, dentro da secção [credenciais]([FAKER][CREDENTIALS][URL]). Deve utilizá-la para se identificar em suas integrações. Utiliza sempre as do **Modo Produção**.  |
| `USER_ID` | É o ID do usuário vendedor em Mercado Pago, são os últimos dígitos do access_token, posterior do último hífen. Também conhecido como `COLLECTOR_ID`. |
| `SPONSOR_ID` | É o ID do usuário fornecedor do sistema integrado com Mercado Pago, são os últimos dígitos do `access_token`, posterior do último hífen. O `sponsor_ID` não pode ser igual que o `USER_ID`. |
| Loja (Store) | É uma **loja física** onde seus clientes podem adquirir seus produtos ou serviços. Você pode ter várias lojas numa mesma conta.  |
| Caixa (POS) | É um **ponto de venda** que existe numa sucursal ou loja física. Cada caixa terá um código QR unívoco vinculado.  |
| Ordem | É o pedido realizado pelo seu cliente. Contém uma relação de produtos com seu valor associado. 

> Encontre toda a informação sobre suas credenciais em nossas [perguntas frequentes](https://www.mercadopago.com.br/developers/pt/guides/resources/faqs/credentials/).

## Requisitos prévios

Para continuar, é necessário realizar o passos a seguir: 

### 1. Acesso à conta de Mercado Pago ou Mercado Livre

Para poder começar a integração, é necessário **contar com uma conta de Mercado Pago ou Mercado Livre**. Se ainda não tiver uma, poderá [criar uma conta de Mercado Pago](https://www.mercadopago.com.br) quando quiser.

> NOTE
> 
> Nota
> 
> Se for operar em nome de outros, você pode trabalhar com credenciais deles de uma forma mais fácil e segura por [Marketplace](https://www.mercadopago.com.br/developers/pt/guides/online-payments/marketplace/checkout-api/introduction/).

### 2. Gerar usuários de teste

Para realizar os testes, é necessário que você tenha, no mínimo, dois usuários: um comprador e um vendedor. 

Execute o comando seguinte para gerar um usuário de teste: 

```curl
curl -X POST \

-H "Content-Type: application/json" \
"https://api.mercadopago.com/users/test_user?access_token=PROD_ACCESS_TOKEN
-d '{"site_id":"[FAKER][SITE][ID]"}'
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

Uma vez que os usuários de teste são criados, você pode começar com a integração e criar as sucursais e caixas.

---
### Próximos passos

> LEFT_BUTTON_REQUIRED_PT
>
> Lojas e Caixas
>
> Para realizar a integração, primeiramente deverá configurar suas sucursais e caixas.
>
> [Lojas e Caixas](https://www.mercadopago.com.br/developers/pt/guides/in-person-payments/qr-code/stores-pos/)
