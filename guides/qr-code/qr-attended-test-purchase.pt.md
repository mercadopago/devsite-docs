# Fazer uma compra teste 

A seguir, vamos te mostrar como simular um fluxo de pagamento completo para o Código QR. 

> WARNING
>
> Importante
>
> Durante todo o fluxo de teste, você deverá usar as **credenciais de produção dos usuários de teste** que você criou anteriormente. Em cada passo, será indicado se é o usuário vendedor ou comprador.

## Criar pedido 

1. Faça login **no site do Mercado Pago** com o nome de usuário e a senha da conta de vendedor teste que você criou. 
2. Crie uma [nova aplicação](/developers/pt/docs/qr-code/additional-content/your-integrations/dashboard) de teste para o código QR e obtenha as credenciais de produção (Access Token) do usuário de vendedor de teste. 
3. Use as credenciais de produção do usuário de vendedor de teste para criar uma [loja](/developers/pt/reference/stores/_users_user_id_stores/post) e uma [caixa](/developers/pt/reference/pos/_pos/post), seguindo as instruções para configurá-las. Tenha em mente que, ao criar a caixa, o campo `fixed_amount` deve ser definido como `true`. Os links retornados na resposta para o objeto `qr` são as imagens do Código QR associadas à sua caixa. 
4. Ainda usando as credenciais do usuário de vendedor de teste, [crie um pedido](/developers/pt/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put) e atribua-o à caixa que você criou no passo anterior. Ao fazer isso, você também estará atribuindo esse pedido ao Código QR associado à caixa. Certifique-se de configurar o campo `notification_url` com a URL onde você receberá as notificações sobre as atualizações de pagamentos com o tópico `merchant_order`. 

## Realizar pagamento 

1. Baixe e instale **o aplicativo do Mercado Pago em seu dispositivo móvel** e faça login com a conta do usuário de teste definido como comprador. 
2. Escaneie do seu dispositivo móvel o Código QR que você gerou. O aplicativo mostrará o valor do pedido gerado e as opções de pagamento disponíveis. 
3. Realize o pagamento usando [cartões de teste](/developers/pt/docs/qr-code/additional-content/your-integrations/test/cards), que também permitirão que você teste diferentes fluxos de pagamento. 

### Casos de validação 
Se você desejar, pode testar diferentes casos para validar se o seu sistema está integrado corretamente com o Mercado Pago. Estes são cenários que simulam situações que podem ocorrer ao realizar um pagamento. 

A seguir, você pode ver estes casos em detalhes, o resultado esperado no sistema para cada situação, e uma série de observações que indicarão o que fazer em cada caso.

| Caso | Resultado esperado | Observações |
|---|---|---|
| **Escaneamento correto do QR**. O usuário escaneia um Código QR válido, ou seja, um QR que foi previamente associado a um pedido.  | O aplicativo exibe a tela de pagamento com o valor atribuído. | Verifique se o valor exibido na tela de pagamento corresponde ao valor atribuído durante a criação da ordem. Caso não corresponda, verifique se a ordem foi corretamente atribuída à caixa correta. |
| **Pagamento aprovado**. O usuário realiza um pagamento e ele é aprovado. | O sistema de Ponto de Venda recebe as informações de um pagamento aprovado. | Verifique se você recebeu as [notificações](/developers/pt/docs/qr-code/additional-content/your-integrations/notifications) com o tópico `merchant_order` e verifique se o status delas está como `closed`. |
| **Cancelar pedido**. O usuário muda de ideia e decide pagar em dinheiro, por exemplo. | [Elimine o pedido](/developers/pt/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_pos_external_pos_id_orders/delete) da caixa. | Escaneie o QR e verifique se a tela de espera é exibida. Isso confirmará que o pedido foi removido corretamente. |
| **Escaneamento prévio à criação do pedido**. O cliente escaneia um código QR válido antes de atribuir-lhe o pedido. | O aplicativo mostra a tela de espera. | Verifique se você configurou o campo `fixed_amount=true` ao criar a caixa. |
| **Pagamento recusado**. O usuário realiza um pagamento e ele é recusado. | O sistema de Ponto de Venda recebe as informações de um pagamento recusado e continua esperando que o pedido seja pago. | Verifique se você recebeu as [notificações](/developers/pt/docs/qr-code/additional-content/your-integrations/notifications) com o tópico `merchant_order` e confirme se o status dessas notificações está como `opened`. Aguarde a segunda tentativa de pagamento. |
| **Segunda tentativa de pagamento**. O pagamento realizado pelo usuário é rejeitado e, sem a necessidade de escanear novamente o QR, uma segunda tentativa é feita e é aprovada. | O sistema do Ponto de Venda recebe as informações de um pagamento rejeitado e, em seguida, de um pagamento aprovado. | Não elimine o pedido após um pagamento recusado e verifique que o seu Ponto de Venda não encerra a transação na caixa.  |

> WARNING
>
> Importante
>
> Apesar de o ambiente de testes não permitir validar casos de devolução de pagamentos ou reembolsos, recomendamos que você implemente o fluxo de devoluções na sua integração de produção utilizando nossa [API de reembolsos](/developers/pt/reference/chargebacks/_payments_id_refunds/post).

## Verificar notificações 
Após ter realizado o pagamento com o usuário de teste, verifique se você recebeu as notificações com o tópico `merchant_order` sobre os estados do pedido em seu sistema. 

Para verificar se elas foram processadas corretamente, faça uma requisição **GET** para o endpoint [/merchant_orders](/developers/pt/reference/merchant_orders/_merchant_orders_id/get) com o ID da merchant order que você recebeu na notificação. Isso permitirá que você valide o estado de cada uma: 
 * Se o estado retornado for `closed`, o pedido foi pago com sucesso. 
 * Se o estado retornado for `opened`, o pedido ainda não foi pago. Aguarde até que o pagamento seja feito e aprovado. 

