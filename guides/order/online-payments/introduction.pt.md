# Pagamentos online

----[mlb]----
O **Checkout Transparente** do Mercado Pago permite que todo o processo de finalização de compra, desde o preenchimento de dados do usuário até a realização do pagamento aconteça em um único ambiente, sem a necessidade de redirecionamento para uma página externa à sua loja.

------------
----[mla, mlm]----
O **Checkout API** do Mercado Pago permite que todo o processo de finalização de compra, desde o preenchimento de dados do usuário até a realização do pagamento aconteça em um único ambiente, sem a necessidade de redirecionamento para uma página externa à sua loja.

------------
Uma order de pagamentos online pode ser criada para ser processada de dois modos: **Modo automático** e **Modo manual**. 

## Modo automático

O Modo automático, como o nome propõe, é o modo padrão da aplicação. Por esse modo, a transação é completada em uma única etapa e as modificações são limitadas. Para criar a order no modo automático, é necessário certificar-se que o campo `processing_mode`, responsável por definir o formato de criação e processamento da transação, esteja como `automatic` e que todas as informações estão sendo enviadas nessa única solicitação. 

As operações permitidas são: 

- [**Criar e processar Order**](/development/pt/reference/order/online-payments/create/post): responsável pela criação da order já com o processamento da transação simultâneo.
- [**Buscar transação**](/development/pt/reference/order/online-payments/get-order/get): permite localizar uma intenção de order existente.
- [**Capturar transação**](/development/pt/reference/order/online-payments/capture/post): possibilita a captura do valor autorizado de uma order. Essa opção só é válida para cartões de crédito.
- [**Cancelar transação**](/development/pt/reference/order/online-payments/cancel-order/post): responsável pelo cancelamento de uma order já existente, mas que ainda não foi processado. 
- [**Reembolsar**](/development/pt/reference/order/online-payments/refund/post): no caso do modo automático, o estorno sempre será total. 

## Modo manual

O Modo manual é onde podemos dividir o processamento da transação em etapas que podem ser configuradas e executadas de maneira incremental. Permite a personalização de cada etapa do processo de pagamento, adaptando-se a diferentes necessidades e cenários. Para criar a Order no modo manual, é necessário certificar-se que o campo `processing_mode`, responsável por definir o formato de criação e processamento da transaçãom esteja como `manual`. 

As operações permitidas são:

- [**Criar order (sem transações ou com transações)**](/development/pt/reference/order/online-payments/create/post): responsável pela criação e autorização da order, mas sem o processamento simultâneo
- [**Adicionar transação**](/development/pt/reference/order/online-payments/add-transaction/post): essa operação de adição de transações só pode ser feita no modo manual e é responsável por adicionar mais de uma transação em um mesmo _payload_. 
- **[Alterar](/development/pts/reference/order/online-payments/update-transaction/patch) e/ou [remover](/development/es/reference/order/online-payments/delete-transaction/delete) transação**: a alteração e remoção de transações só pode ser feita no modo manual e permitem mudar informações de pagamento que já tinham sido adicionadas anteriormente à order. São operações que modificam um item dentro de qualquer campo do parâmetro `transactions`.
- [**Capturar transação**](/development/pt/reference/order/online-payments/capture/post): responsável por capturar o valor autorizado de um order. Essa opção só é válida para cartões de crédito.
- [**Processar transação**](/development/pt/reference/order/online/process-order/post): possibilitada a execução das transações criadas e/ou alteradas no modo manual. 
- [**Buscar transação**](/development/pt/reference/order/online-payments/get-order/get): permite localizar uma intenção de order existente.
- [**Cancelar transação**](/development/pt/reference/order/online-payments/cancel-order/post): responsável pelo cancelamento de um order já existente, mas não que ainda não foi processado. 
- [**Reembolsar transação**](/development/pt/reference/order/online-payments/refund/post): no modo manual podem ser criados estornos totais ou parciais de um pagamento. O pedido será reembolsado totalmente se todas as transações forem estornadas por completo. 
  - **Reembolso total**: não deverá ser indicado o valor a ser reembolsado no `body` da requisição.
  - **Reembolso parcial**: deverá ser especificada a quantia a ser reembolsada no `body` da requisição. Todas as outras transações permanecerão como estão e somente a transação alterada será reembolsada. 