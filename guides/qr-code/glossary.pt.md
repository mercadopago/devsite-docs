# Glossário

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
