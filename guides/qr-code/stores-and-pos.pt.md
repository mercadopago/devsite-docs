# Lojas e caixas

As **lojas** e os **caixas** são importantes para receber pagamentos in-store com QR. Permitem que você crie sua loja e designe seus pontos de venda.

![Caixas e lojas](/images/mobile/stores_pos.pt.png)

## Lojas

São **estabelecimentos físicos** onde os clientes podem adquirir os seus produtos ou serviços. Você pode conectar várias lojas numa mesma conta.

## Benefícios

Os benefícios de criar lojas são:

- **Conseguir traçabilidade**. Cada pagamento ficará associado a uma loja, o qual será valioso na hora de obter os seus relatórios de conciliação para identificar transações por loja.
- **Visibilidade em mapas de lojas**.  As lojas criadas aparecem no mapa dos apps do Mercado Pago ou Mercado Livre conforme forem recebendo pagamentos. Com isso, os clientes ganham visibilidade sobre a existência das lojas.
- **Otimizar a organização dos caixas**.

## Criar uma loja

Para criar uma loja é preciso declarar o nome da mesma, o horário de funcionamento, a localização e alguma referência que a identifique.

Acesse [Criar loja](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/stores/_users_user_id_stores/post) em nossa Referência de API para criar uma loja. Na documentação você encontrará todas as informações necessárias.

> WARNING
>
> Importante
>
> 1. Você deve saber o `country_id` do país onde a loja está localizada. Para isso consulte a [nossa API de países](https://api.mercadolibre.com/countries).
> 2. O `state_name` deve corresponder aos **estados** do [país especificado](https://api.mercadolibre.com/countries/$country_id).
> 3. O `city_name` deve corresponder às **cidades** [dos estados](https://api.mercadolibre.com/states/$state_id).

# Caixas

É um **ponto de venda** que existe numa loja física. Cada caixa tem um código QR único vinculado.

## Criar um caixa

Tendo criado as lojas, você pode criar os caixas. Considere o seguinte:

| Termo | Descrição |
| --- | --- |
| `EXTERNAL_STORE_ID` | Vincula o caixa com a loja. É um campo requerido e é o `external_id` da loja previamente criada. |
| `EXTERNAL_ID` | Identifica univocamente cada caixa. É uma identificação requerida, que não pode ser alterada nem ser repetida em uma mesma conta Mercado Pago. Também é encontrado como `EXTERNAL_POS_ID`. |

Acesse [Criar caixa](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/pos/_pos/post) em nossa Referência de API para criar um caixa. Na documentação você encontrará todas as informações necessárias.

> NOTE
>
> Nota
>
>
> Uma vez criado o caixa, você poderá ver no `Response` os links para os diferentes entregáveis do QR, junto com outros dados relevantes do caixa.