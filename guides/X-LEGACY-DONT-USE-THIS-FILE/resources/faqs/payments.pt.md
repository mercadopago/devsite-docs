# Meios de pagamento
---

## Como receber pagamentos em diferentes moedas

----[mlb]----
No momento, o Mercado Pago permite pagamentos somente em moeda local. Ou seja, uma conta criada no Brasil aceitará somente pagamentos em reais (BRL) e de clientes que tenham uma conta do mesmo país.
------------

----[mlm]----
No momento, o Mercado Pago permite pagamentos somente em moeda local. Ou seja, uma conta criada no México aceitará somente pagamentos em pesos mexicanos (MXN) e de clientes que tenham uma conta do mesmo país.
------------

----[mlc]----
No momento, o Mercado Pago permite pagamentos somente em moeda local. Ou seja, uma conta criada no Chile aceitará somente pagamentos em pesos chilenos (CLP) e de clientes que tenham uma conta do mesmo país.
------------

----[mpe]----
No momento, o Mercado Pago permite pagamentos somente em moeda local. Ou seja, uma conta criada no Peru aceitará somente pagamentos em soles (PEN) e de clientes que tenham uma conta do mesmo país.
------------

----[mlu]----
No momento, o Mercado Pago permite pagamentos somente em moeda local. Ou seja, uma conta criada no Uruguai aceitará somente pagamentos em pesos uruguaios (UYU) e de clientes que tenham uma conta do mesmo país.
------------

----[mco]----
No momento, o Mercado Pago permite pagamentos somente em moeda local. Ou seja, uma conta criada no Colômbia aceitará somente pagamentos em pesos colombianos (COP) e de clientes que tenham uma conta do mesmo país.
------------

----[mla]----
No momento, o Mercado Pago permite pagamentos somente em moeda local. Ou seja, uma conta criada na Argentina aceitará somente pagamentos em pesos argentinos (ARS) e de clientes que tenham uma conta do mesmo país.
------------

----[mla, mco, mlu, mpe, mlc, mlm]----
## Os meios de pagamento não aparecem no meu checkout

O Mercado Pago conta com uma validação de valores no momento de oferecer os meios de pagamento disponíveis.

No caso em que o valor não cumpra com as condições de [valores mínimos e máximos](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/_620) do meio de pagamento, nosso checkout solicitará iniciar uma seção na conta do Mercado Pago, já que a única opção disponível para usar será dinheiro em conta. Por isso, seus clientes não poderão pagar como convidados.

Isso ocorre porque, de acordo com o valor escolhido, você pode visualizar alguns meios de pagamentos e outros não devido a não cumprir com os requisitos necessários. Ou seja, com base no valor do produto e do mínimo ou máximo permitido, serão mostrados os meios de pagamentos disponíveis.
------------

----[mlb]----
## Os meios de pagamento não aparecem no meu checkout

O Mercado Pago conta com uma validação de valores no momento de oferecer os meios de pagamento disponíveis.

No caso em que o valor não cumpra com as condições de [valores mínimos e máximos](https://www.mercadopago[FAKER][URL][DOMAIN]/ajuda/_324) do meio de pagamento, nosso checkout solicitará iniciar uma seção na conta do Mercado Pago, já que a única opção disponível para usar será dinheiro em conta. Por isso, seus clientes não poderão pagar como convidados.

Isso ocorre porque, de acordo com o valor escolhido, você pode visualizar alguns meios de pagamentos e outros não devido a não cumprir com os requisitos necessários. Ou seja, com base no valor do produto e do mínimo ou máximo permitido, serão mostrados os meios de pagamentos disponíveis.

## Como gerar a segunda via do boleto

Para gerar uma segunda via do boleto será necessário [utilizar o método GET da API de Payment](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_id/get) passando o ID do pagamento e a Access Token do vendedor.

A consulta será da seguinte forma:

`https://api.mercadopago.com/v1/payments/PAYMENT_ID`

No retorno da chamada haverá o parâmetro `transaction_details` que conterá o  `external_resource_url` com o link da segunda via do boleto.

## Remover o boleto como forma de pagamento

Dependendo do seu tipo de checkout e integração o processo pode ser diferente.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Checkout Pro

É possível remover a opção de boleto com uso de preferências de pagamento. Você pode encontrar mais detalhes em nossa [documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/configurations/#bookmark_atributos_para_a_preferência).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Checkout Transparente

A remoção é realizada diretamente no seu frontend. Você pode obter os meios de pagamento desejados ao excluir boleto da chamada ao método payment, inserindo o parâmetro `"payment_type_id" = credit_card` como filtro, por exemplo.

> Você pode encontrar mais detalhes na [referência da API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payment_methods/_payment_methods/get).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plugins ou soluções de e-commerce prontas para usar

Caso venda através de um de nossos plugins ou soluções de e-commerce prontas para usar, e se esta configuração for disponibilizada pelo plugin ou plataforma, será necessário verificar na documentação ou nas configurações da forma de pagamento do painel administrativo da respectiva solução.

## Definir prazo de vencimento do boleto

Por padrão, a data de vencimento é de 3 dias corridos, mas é possível [definir a data de vencimento do boleto via API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/other-payment-ways), através do campo `date_of_expiration`.
------------

## Melhore a aprovação de seus pagamentos

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Verifique como testar sua integração
Revise a documentação da integração que está implementando e teste todos os passos necessários de acordo com a seção de testes da respectiva documentação.
Se atente no passo da criação dos usuários de teste vendedor e comprador, para evitar reprovação de pagamentos por identificação de autofinanciamento ao cruzar os dados do pagador e do recebedor.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Valide sua identidade
Verifique se a identidade da conta vendedor está validada no painel do Mercado Pago. Acesse: Seu perfil > Validar identidade.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Adicione o nosso código de segurança em seu website
É importante que acrescente em sua integração toda a informação necessária para [melhorar a aprovação de seus pagamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/payment-rejections/#bookmark_recomendações_para_melhorar_sua_aprovação).

----[mla, mco, mlu, mpe, mlc, mlm]----
> Se você ainda precisar de ajuda, recomendamos que entre em contato através da [Ajuda](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/charges).
------------

----[mlb]----
> Se você ainda precisar de ajuda, recomendamos que entre em contato através da [Ajuda](https://www.mercadopago[FAKER][URL][DOMAIN]/ajuda/charges).
------------