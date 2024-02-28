# Fazer uma compra teste 

A seguir, vamos te mostrar como simular um fluxo de pagamento completo para o Código QR modelo dinâmico. 

> WARNING
>
> Importante
>
> Durante todo o fluxo de teste, você deverá usar as **credenciais de produção dos usuários de teste** que você criou anteriormente. Em cada passo, será indicado se é o usuário vendedor ou comprador.

## Criar pedido 

1. Faça login **no site do Mercado Pago** com o nome de usuário e a senha da conta de vendedor teste que você criou. 
2. Crie uma [nova aplicação](/developers/pt/docs/qr-code/additional-content/your-integrations/dashboard) de teste para o código QR e obtenha as credenciais de produção (Access Token) do usuário de vendedor de teste. 
3. Use as credenciais de produção do usuário de vendedor de teste para criar uma [loja](/developers/pt/reference/stores/_users_user_id_stores/post) e uma [caixa](/developers/pt/reference/pos/_pos/post), seguindo as instruções para configurá-las. Tenha em mente que, ao criar a caixa, o campo `fixed_amount` deve ser definido como `true`.  
4. Ainda usando as credenciais do usuário de vendedor de teste, [crie um pedido](/developers/pt/reference/qr-dynamic/_instore_orders_qr_seller_collectors_user_id_pos_external_pos_id_qrs/put) e atribua-o à caixa que você criou no passo anterior. Certifique-se de configurar o campo `notification_url` com a URL onde você receberá as notificações sobre as atualizações de pagamentos com o tópico `merchant_order`. 
5. Utilize o parâmetro `qr_data` obtido na resposta à criação do pedido para gerar um código QR. Você pode utilizar ferramentas ou bibliotecas que o ajudarão a converter essa string em uma imagem de um código QR.

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
| **Pagamento recusado**. O usuário realiza um pagamento e ele é recusado. | O sistema de Ponto de Venda recebe as informações de um pagamento recusado e continua esperando que o pedido seja pago. | Verifique se você recebeu as [notificações](/developers/pt/docs/qr-code/additional-content/your-integrations/notifications) com o tópico `merchant_order` e confirme se o status dessas notificações está como `opened`. Aguarde a segunda tentativa de pagamento. |
| **Segunda tentativa de pagamento**. O pagamento realizado pelo usuário é rejeitado e, sem a necessidade de escanear novamente o QR, uma segunda tentativa é feita e é aprovada. | O sistema do Ponto de Venda recebe as informações de um pagamento rejeitado e, em seguida, de um pagamento aprovado. | Não elimine o pedido após um pagamento recusado e verifique que o seu Ponto de Venda não encerra a transação na caixa.  |
| **Expiração do pedido**. O usuário tenta pagar após a expiração do QR. | A ordem expira e, ao escanear o código QR, uma tela de erro é exibida. |Verifique se você definiu o campo `expiration_date` no pedido e se ele é anterior ao momento em que o pedido é escaneado. | 

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

