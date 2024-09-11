----[mlb]----
# Linha de crédito
Com o Checkout Transparente, é possível oferecer **Linha de crédito**. Com essa linha de crédito, administrada pelo Mercado Pago, o pagamento é creditado integralmente na conta do vendedor, podendo o cliente optar por pagar em até 12 parcelas fixas mensais e sem a necessidade de cartão.
Atualmente, a **Linha de crédito** é oferecida em nosso [Checkout Pro](/developers/pt/docs/checkout-pro/landing), e agora também é possível acessá-lo diretamente do checkout da loja via Checkout Transparente.


Para configurar a **Linha de crédito** no checkout da loja, siga os passos descritos abaixo.
1. No **Painel de Controle** da loja, acesse **Lojas > Configuração > Vendas > Forma de pagamento**.
2. Em **Outros meios de pagamento**, clique em **Configurar** no plugin do Mercado Pago.
3. Selecione a opção **Linha de crédito** e configure os campos conforme indicado a seguir.
    1. O campo **Ativado** define que o meio de pagamento estará disponível no checkout da loja. Escolha "Sim", ou deixe o valor definido pelo sistema se corresponder a esta opção.
    2. Em **Título**, defina o título de como a forma de pagamento será exibida no checkout da loja. Recomendamos usar “Linha de crédito”.
    3. Em **Prazo limite para pagamento**, escolha o tempo que o cliente tem para concluir o pagamento.
    4. Quando o cliente não tiver crédito ativo para utilizar a Linha de crédito, iremos redirecioná-lo para o Mercado Pago. A opção **Meio de pagamento excluído** permite a remoção de meios de pagamento do Mercado Pago e, caso o cliente queira utilizar algum deles mesmo assim, deverá retornar ao checkout para finalizar o pagamento.

![Tela de configuração do meio de pagamento](/images/adobe-commerce/cho-api-config2-mlb-pt.png)

## Definições comuns de meios de pagamento
Nesta seção é possível definir algumas características gerais da plataforma para o uso do Checkout Transparente. Preencha cada um dos campos solicitados de acordo com a descrição abaixo.
1. Na opção **Valor mínimo do pedido**, defina o valor mínimo para que um pedido possa ser processado. Neste campo, informe números inteiros. O método de pagamento só será exibido ao consumidor se o valor do pedido for igual ou maior ao que você informar.
2. Em **Valor máximo do pedido**, defina um valor máximo para que o pedido seja processado. Neste campo, informe números inteiros. O método de pagamento só será exibido ao consumidor se o valor do pedido for igual ou menor ao que você informar.
3. Em ​**​Pagamento a partir de países específicos**, selecione os países que podem usar esse meio de pagamento. Apenas consumidores cujo o endereço de pagamento seja de um dos países que selecionou podem ver essa forma de pagamento.
4. Na opção **Ordem de exibição**, defina uma ordem crescente de exibição dessa forma de pagamento no checkout. Por exemplo, se for 1, qualquer outra forma de pagamento com ordem maior será exibida depois dela.

![Tela de definições comuns de meios de pagamento](/images/adobe-commerce/cho-api-credits-definitions-mlb-pt.png)

Clique em **Gravar Configuração** para salvar as alterações realizadas, e pronto, ja pode oferecer **Linha de crédito** como meio de pagamento no checkout da loja.

------------
----[mla]----
# Cuotas sin tarjeta
Com o Checkout API, é possível oferecer **Cuotas sin tarjeta**. Com essa linha de crédito, administrada pelo Mercado Pago, o pagamento é creditado integralmente na conta do vendedor, podendo o cliente optar por pagar em até 12 parcelas fixas mensais e sem a necessidade de cartão.
Atualmente, o **Cuotas sin tarjeta** é oferecido em nosso [Checkout Pro](/developers/pt/docs/checkout-pro/landing), e agora também é possível acessá-lo diretamente do checkout da loja via Checkout API.

Para configurar o **Cuotas sin tarjeta** no checkout da loja, siga os passos descritos abaixo.
1. No **Painel de Controle** da loja, acesse **Lojas > Configuração > Vendas > Forma de pagamento**.
2. Em **Outros meios de pagamento**, clique em **Configurar** no plugin do Mercado Pago.
    ![Tela de configuração do plugin do Mercado Pago](/images/adobe-commerce/cho-api-credits-config-mla-es.png)
3. Selecione a opção **Cuotas sin tarjeta** e configure os campos conforme indicado a seguir.
    1. O campo **Ativado** define que o meio de pagamento estará disponível no checkout da loja. Escolha "Sim", ou deixe o valor definido pelo sistema se corresponder a esta opção.
    2. Em **Título**, defina o título de como a forma de pagamento será exibida no checkout da loja. Recomendamos usar “Cuotas sin tarjeta”.
    3. Em **Prazo limite para pagamento**, escolha o tempo que o cliente tem para concluir o pagamento.
    4. Quando o cliente não tiver linha de crédito ativa para utilizar o Cuotas sin tarjeta no Mercado Pago, iremos redirecioná-lo para o Mercado Pago. A opção **Meio de pagamento excluído** permite a remoção de meios de pagamento do Mercado Pago e, caso o cliente queira utilizar algum deles mesmo assim, deverá retornar ao checkout para finalizar o pagamento.

![Tela de configuração do meio de pagamento](/images/adobe-commerce/cho-api-credits-config2-mla-es.png)

## Definições comuns de meios de pagamento
Nesta seção é possível definir algumas características gerais da plataforma para o uso do Checkout API. Preencha cada um dos campos solicitados de acordo com a descrição abaixo.
1. Na opção **Valor mínimo do pedido**, defina o valor mínimo para que um pedido possa ser processado. Neste campo, informe números inteiros. O método de pagamento só será exibido ao consumidor se o valor do pedido for igual ou maior ao que você informar.
2. Em **Valor máximo do pedido**, defina um valor máximo para que o pedido seja processado. Neste campo, informe números inteiros. O método de pagamento só será exibido ao consumidor se o valor do pedido for igual ou menor ao que você informar.
3. Em ​**​Pagamento a partir de países específicos**, selecione os países que podem usar esse meio de pagamento. Apenas consumidores cujo o endereço de pagamento seja de um dos países que selecionou podem ver essa forma de pagamento.
4. Na opção **Ordem de exibição**, defina uma ordem crescente de exibição dessa forma de pagamento no checkout. Por exemplo, se for 1, qualquer outra forma de pagamento com ordem maior será exibida depois dela.

![Tela de definições comuns de meios de pagamento](/images/adobe-commerce/cho-api-credits-definitions-mlb-pt.png)

Clique em **Gravar Configuração** para salvar as alterações realizadas, e pronto, ja pode oferecer **Cuotas sin tarjeta** como meio de pagamento no checkout da loja.

------------
----[mlm]----
# Meses sin tarjeta
Com o Checkout API, é possível oferecer **Meses sin tarjeta**. Com essa linha de crédito, administrada pelo Mercado Pago, o pagamento é creditado integralmente na conta do vendedor, podendo o cliente optar por pagar em até 12 parcelas fixas mensais e sem a necessidade de cartão.
Atualmente, o **Meses sin tarjeta** é oferecido em nosso [Checkout Pro](/developers/pt/docs/checkout-pro/landing), e agora também é possível acessá-lo diretamente do checkout da loja via Checkout API.


Para configurar o **Meses sin tarjeta** no checkout da loja, siga os passos descritos abaixo.
1. No **Painel de Controle** da loja, acesse **Lojas > Configuração > Vendas > Forma de pagamento**.
2. Em **Outros meios de pagamento**, clique em **Configurar** no plugin do Mercado Pago.
3. Selecione a opção **Meses sin tarjeta** e configure os campos conforme indicado a seguir.
    1. O campo **Ativado** define que o meio de pagamento estará disponível no checkout da loja. Escolha "Sim", ou deixe o valor definido pelo sistema se corresponder a esta opção.
    2. Em **Título**, defina o título de como a forma de pagamento será exibida no checkout da loja. Recomendamos usar “Meses sin tarjeta”.
    3. Em **Prazo limite para pagamento**, escolha o tempo que o cliente tem para concluir o pagamento.
    4. Quando o cliente não tiver linha de crédito ativa para utilizar o Meses sin tarjeta, iremos redirecioná-lo para o Mercado Pago. A opção **Meio de pagamento excluído** permite a remoção de meios de pagamento do Mercado Pago e, caso o cliente queira utilizar algum deles mesmo assim, deverá retornar ao checkout para finalizar o pagamento.

![Tela de configuração do meio de pagamento](/images/adobe-commerce/cho-api-credits-config2-mlm-es.png)

## Definições comuns de meios de pagamento
Nesta seção é possível definir algumas características gerais da plataforma para o uso do Checkout API. Preencha cada um dos campos solicitados de acordo com a descrição abaixo.
1. Na opção **Valor mínimo do pedido**, defina o valor mínimo para que um pedido possa ser processado. Neste campo, informe números inteiros. O método de pagamento só será exibido ao consumidor se o valor do pedido for igual ou maior ao que você informar.
2. Em **Valor máximo do pedido**, defina um valor máximo para que o pedido seja processado. Neste campo, informe números inteiros. O método de pagamento só será exibido ao consumidor se o valor do pedido for igual ou menor ao que você informar.
3. Em ​**​Pagamento a partir de países específicos**, selecione os países que podem usar esse meio de pagamento. Apenas consumidores cujo o endereço de pagamento seja de um dos países que selecionou podem ver essa forma de pagamento.
4. Na opção **Ordem de exibição**, defina uma ordem crescente de exibição dessa forma de pagamento no checkout. Por exemplo, se for 1, qualquer outra forma de pagamento com ordem maior será exibida depois dela.

![Tela de definições comuns de meios de pagamento](/images/adobe-commerce/cho-api-credits-definitions-mlb-pt.png)

Clique em **Gravar Configuração** para salvar as alterações realizadas, e pronto, ja pode oferecer **Meses sin tarjeta** como meio de pagamento no checkout da loja.

------------