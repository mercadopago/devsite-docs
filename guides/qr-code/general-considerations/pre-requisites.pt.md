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
| Credenciais (Credentials)         | Suas credenciais são as senhas que lhe fornecemos para que você possa configurar suas integrações. Para poder achá-las, vá para suas [credenciais]([FAKER][CREDENTIALS][URL]) e selecione as **produtivas** na opção *Checkout personalizado*. |
| `ACCESS_TOKEN` | É a senha privada do aplicativo para gerar pagamentos, dentro da secção [credenciais]([FAKER][CREDENTIALS][URL]). Deve utilizá-la para se identificar em suas integrações. Utiliza sempre as do **Modo Produção**.  |
| `COLLECTOR_ID` | É o ID do usuário vendedor em Mercado Pago, são os últimos 9 dígitos do access_token, posterior hífen. Também conhecido como `USER_ID` |
| `SPONSOR_ID` | É o ID do usuário fornecedor do sistema integrado com Mercado Pago, são os últimos 9 dígitos do `access_token`, posterior ao hífen. O `sponsor_ID` não pode ser igual que o `COLLECTOR_ID`. |
| Loja | É uma **loja física** onde seus clientes podem adquirir seus produtos ou serviços. Você pode ter várias sucursais numa mesma conta.  |
| Caixa | É um **ponto de venda** que existe numa sucursal ou loja física. Cada caixa terá um código QR unívoco vinculado.  |
| Ordem | É o pedido realizado pelo seu cliente. Contém uma relação de produtos com seu valor associado. 

## Requisitos prévios

Para continuar, é necessário realizar o passo a seguir: 

**1. Acesso à conta de Mercado Pago ou Mercado Livre**

Para poder começar a integração, é necessário **contar com uma conta de Mercado Pago ou Mercado Livre**. Se ainda não tiver uma, poderá [criar uma conta de Mercado Pago](https://www.mercadopago.com.br) quando quiser.


> NOTE
> 
> OBS.
> 
> Se for operar em nome de outros, você pode trabalhar com credenciais deles de uma forma mais fácil e segura por [Marketplace](https://www.mercadopago.com.br/developers/pt/guides/marketplace/api/introduction/).


### Próximos passos


> LEFT_BUTTON_REQUIRED_PT
>
> Lojas e Caixas
>
> Para realizar a integração, primeiramente deverá configurar suas sucursais e caixas.
>
> [Lojas e Caixas](https://www.mercadopago.com.br/developers/pt/guides/qr-code/general-considerations/stores-pos/)
