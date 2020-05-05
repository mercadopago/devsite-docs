# Preferências de pagamento
<br/>

Encontre a configuração das preferências de pagamento nos *Ajustes* do WooCommerce assim que tiver instalado o módulo. Lá, vá à seção *Payments*, ative o checkout que quiser oferecer e configure as opções que preferir para o seu site.

> NOTE
>
> Nota
>
> Lembre-se de que temos diversos [tipos de checkout]() que se adaptam às necessidades do seu negócio e que cada um conta com a sua própria configuração.

## Informações do negócio

Insira o **nome do seu negócio** para que apareça na fatura dos seus clientes e seja mais fácil reconhecer o pagamento quando parecer no resumo da fatura. Selecione a qual **categoria** pertencem os produtos e/ou serviços que a loja oferece e faça outros ajustes de acordo com as suas necessidades.

![Informação básica](/images/woocomerce/br_info_basica.png)

> WARNING
>
> Importante
>
> Não esqueça de inserir seu `integrator_id` como [Parceiro](https://partners.mercadopago.com/) certificado do Mercado Pago. Se você não o possui, pode [solicitá-lo agora](https://docs.google.com/forms/d/e/1FAIpQLScTwPlLRVW2rB_BnCxekUnfJu9rn-tUMh8ENAnqpxLeB8ULUw/viewform?usp=sf_link).

<span></span>

> NOTE
>
> Nota
> 
> Todos os nossos módulos contam com uma licença de código aberto. Quer participar da criação? [Sugira melhorias e edições](https://github.com/mercadopago/cart-woocommerce) no Github.

## Configuração básica

Ative o checkout que quer oferecer aos seus clientes conforme suas preferências e escolha os meios de pagamento com os quais eles podem comprar.

* Ative um tipo de checkout
  * Use o Checkout Mercado Pago para aceitar pagamentos com cartões, em dinheiro e saldo na conta do Mercado Pago. 
  * Use o Checkout Personalizado para ter controle sobre outras configurações. 

<!-- > WARNING
>
> Importante
>
> Lembre-se de que o [Checkout Mercado Pago](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/introduction) é excludente do Checkout Personalizado e viceversa. Você pode usar os de checkout personalizados ao mesmo tempo para oferecer todos os meios de pagamento. -->

* Escolha os [meios de pagamento disponíveis](https://www.mercadopago.com.br/developers/pt/guides/localization/payment-methods/) para seus clientes conforme o país onde operam e o tipo de checkout que esteja configurando.

* Estableça o máximo de parcelas que poderão pagar.

* Ativar conversão de moeda do Mercado Pago.

> NOTE
>
> Nota
>
> A opção para ativar a conversão de moeda está disponível apenas no checkout personalizado. O Checkout Mercado Pago faz a conversão automaticamente.

## Configuração avançada

Você terá diferentes ajustes disponíveis conforme o tipo de checkout que ativar na sua loja. Personalize a experiência de compra com os ajustes avançados que correspondam a cada um.

### Ajustes comuns em todos os checkouts

| Configuración                 | Descripción                                                               	                  |
|-------------------------------|-----------------------------------------------------------------------------------------------|
| Modo binário     	            | Ative esta opção quando não quiser deixar os pagamentos em estado pendente ou em revisão. Com o modo binário, os pagamentos serão aceitos ou recusados automaticamente.|
| Modelo Gateway               	| Se você opera com o [modelo gateway](https://www.mercadopago.com.ar/developers/pt/guides/gateway/general-considerations/introduction/) como processador de pagamentos e tem seus próprios números de comércio, é possível configurar descontos e tarifas para os seus clientes por pagarem com Mercado Pago.|

### Checkout Mercado Pago

#### Experiências de pagamento com Checkout Mercado Pago

Escolha qual experiência de compra seus clientes terão na hora de pagar:

| Experiencia de pagamento      | Características                                                              	                                           |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| Redirect     	                | Seus clientes serão redirecionados para uma página do Mercado Pago com o formulário de pagamentos para terminar a compra.|
| Modal                       	| Seus clientes terão acesso ao formulário de pagamentos do Mercado Pago sem sair da sua loja.                             |

> NOTE
>
> Nota
>
> Veja a [documentação do Checkout Mercado Pago](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/introduction/) para conhecer melhor todas as suas características e funcionalidades.

| Configuração                  | Descrição                                                                 	                  |
|-------------------------------|-----------------------------------------------------------------------------------------------|
| Voltar à loja         	      | Ao escolher redirect, você sempre terá a opção de fazer com que seus clientes retornem ou não à sua loja quando o pagamento for finalizado.|
| URLs configuráveis          	| De aprovação, pagamento recusado, pagamento pendente.|

### Checkout Personalizado

#### Pagamentos com cartões

| Configuração                  | Descrição                                                                   	                |
|-------------------------------|-----------------------------------------------------------------------------------------------|
| Cupons de desconto       	    | Ative esta opção quando quiser oferecer descontos aos seus clientes. Aparecerá um campo no formulário onde poderão inserir seu cupom.|

#### Pagamentos presenciais

| Configuração                  | Descrição                                                                    	                |
|-------------------------------|-----------------------------------------------------------------------------------------------|
| Cupons de desconto       	    | Ative esta opção quando quiser oferecer descontos aos seus clientes. Aparecerá um campo no formulário onde poderão inserir seu cupom.|
| Reduzir inventário     	      | Ative esta opção quando quiser automatizar a diminuição do inventário por cada ordem de compra aprovada após um pagamento com Mercado Pago. |

---

### Próximos passos

> LEFT_BUTTON_REQUIRED_ES
>
> Teste e receba pagamentos
>
> Teste o módulo e confira se tudo está funcionando bem para começar a receber o dinheiro das suas vendas no Mercado Pago. 
>
>
> [Receber pagamentos](https://www.mercadopago.com.br/developers/pt/guides/plugins/woocommerce/receive-payments/)