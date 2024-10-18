# Pagamentos online

----[mlb]----
O **Checkout Transparente** do Mercado Pago permite que todo o processo de finalização de compra, desde o preenchimento de dados do usuário até a realização do pagamento aconteça em um único ambiente, sem a necessidade de redirecionamento para uma página externa à sua loja.

------------
----[mla, mlm]----
O **Checkout API** do Mercado Pago permite que todo o processo de finalização de compra, desde o preenchimento de dados do usuário até a realização do pagamento aconteça em um único ambiente, sem a necessidade de redirecionamento para uma página externa à sua loja.

------------

Principais diferenças da nova **API Order** para a antiga **API de Payments**:

| Funcionalidade  | Payments API  | Order API |
| --- | --- |--- |
| Modo  | Automático  | Automático e manual |
| Operações  | Payments  | Payments e [In-store](/developers/pt/docs/order/online-payments/introduction) (QR e Point)|
| Múltiplas transações  | Não possui | Possui |
| Envio de metadados  | Permite  | Não permite |
| Envio de Notification Url  | Permite no _payload_  | Não permite no _payload_ e
deve ser configurado no [Painel do desenvolvedor > Detalhes da aplicação](/developers/pt/docs/order/additional-content/your-integrations/application-details). |
| Validações com respostas de erros completas  | Valida um erro por vez  | Retorna uma lista com todos os erros |
| Retorno de dados PII | Retorna em alguns cenários (ex: aprovado)  | Não retorna em nenhum cenário |

Uma Order de Pagamentos online pode ser criada para ser processada de dois modos: **Modo automático** e **Modo manual**. 

## Modo automático

## Modo manual