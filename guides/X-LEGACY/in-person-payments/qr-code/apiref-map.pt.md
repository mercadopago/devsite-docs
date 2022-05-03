# Mapa de APIs

As ações a seguir estão disponíveis para **Código QR**.

### Lojas

|Ação|Descrição|
|---|---|
|[Obter loja](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/stores/_stores_id/get)|Veja todas as informações de um estabelecimento físico com o ID da loja que você deseja.|
|[Criar loja](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/stores/_users_user_id_stores/post)|Gere um estabelecimento físico onde os clientes possam adquirir produtos ou serviços.|
|[Pesquisar em lojas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/stores/_users_user_id_stores_search/get)|Encontre todas as informações das lojas criadas através de filtros específicos.|
|[Atualizar loja](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/stores/_users_user_id_stores_id/put)|Renovar os dados de um estabelecimento físico.|
|[Excluir loja](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/stores/_users_user_id_stores_id/delete)|Exclua um estabelecimento físico sempre que for necessário com o ID da loja.|

### Caixas

|Ação|Descrição|
|---|---|
|[Criar caixa](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/pos/_pos/post)|Gerar um ponto de venda em uma loja.|
|[Pesquisar em caixas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/pos/_pos/get)|Encontre todas as informações dos pontos de venda através de filtros específicos.|
|[Obter caixa](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/pos/_pos_id/get)|Veja toda a informação de um ponto de venda a partir do ID da caixa que você deseja.|
|[Atualizar caixa](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/pos/_pos_id/put)|Atualizar os dados de um ponto de venda.|
|[Excluir caixa](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/pos/_pos_id/delete)|Exclua um ponto de venda sempre que for necessário com o ID da caixa.|

### Modelo Atendido

#### Ordens presenciais

|Ação|Descrição|
|---|---|
|[Criar ordem](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/post)|Gerar uma ordem para associar com a preferência de pagamento e obter a URL necessária para iniciar o fluxo de pagamento.|
|[Excluir ordem](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/delete)|Exclua uma ordem criada sempre que for necessário com o ID do vendedor e a caixa.|

#### Ordens presenciais v2

|Ação|Descrição|
|---|---|
|[Criar ordem](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put)|Gerar uma ordem para associar com a preferência de pagamento e obter a URL necessária para iniciar o fluxo de pagamento.|
|[Obter ordem](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_pos_external_pos_id_orders/get)|Veja todas as informações de pagamento de um produto ou serviço com a identificação do pedido de sua escolha.|
|[Excluir ordem](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_pos_external_pos_id_orders/delete)|Exclua uma ordem criada sempre que for necessário com o ID do vendedor e a caixa.|

### Ordens

|Ação|Descrição|
|---|---|
|[Pesquisar em ordens](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/merchant_orders/_merchant_orders_search/get)|Encontre todas as informações dos pedidos gerados através de filtros específicos ou por um intervalo de datas específico.|
|[Obter ordem](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/merchant_orders/_merchant_orders_id/get)|Veja todas as informações de pagamento de um produto ou serviço com a identificação do pedido de sua escolha.|

### Pagamentos

|Ação|Descrição|
|---|---|
|[Pesquisar em pagamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_search/get)|Pesquisa e retorna pagamentos efetuados nos últimos doze meses a partir da data de pesquisa.|
|[Obter pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_id/get)|Consulte todas as informações de um pagamento através do ID de pagamento.|

### Reembolsos

|Ação|Descrição|
|---|---|
|[Criar reembolso](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/chargebacks/_payments_id_refunds/post)|Criar um reembolso parcial/total para um pagamento específico.|



