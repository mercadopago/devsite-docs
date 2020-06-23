# Changelog

Descubra tudo sobre as novas versões e atualizações das integrações do Mercado Pago.

---

## Junho 2020

### 11 de junho

> CHANGELOG
> 
> Nova versão do Botão e link de pagamento
> 
> NEW_VERSION
> 
> Botão e link de pagamento

Lançamos uma nova versão do Botão e do link de pagamento, totalmente atualizados. Criamos e implementamos uma nova experiência para a criação de links de pagamento para compartilhar on-line por chat, e-mail ou nas redes sociais.

[Ir para a documentação de Botão e Link de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/payments/button/intro-button/)

---

## Maio 2020

### 26 de maio

> CHANGELOG
> 
> Nova versão SDK Javascript
> 
> NEW_VERSION
> 
> SDK Javascript

Lançamos uma nova versão do SDK Javascript 1.3.0. A partir de agora, é compatível com Internet Explorer 11 para que o possa usar em suas integrações sem problemas.
[Ir para a documentação do SDK Javascript](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/sdks/official/js/)


### 13 de maio

> CHANGELOG
> 
> Nova versão WooCommerce
> 
> NEW_VERSION
> 
> WooCommerce

Lançamos uma nova versão do WooCommerce.

[Ir para a documentação de WooCommerce](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/woocommerce/introduction/)

> GIT
> 
> Github
> 
> Confira no GitHub o detalhe das [últimas atualizações produtivas](https://github.com/mercadopago/cart-woocommerce/releases/tag/v4.2.0).


### 6 de maio

> CHANGELOG
> 
> Nova versão SDK Java
> 
> NEW_VERSION
> 
> SDK Java

Lançamos uma nova versão do SDK Java 1.6.

> GIT
> 
> Github
> 
> Confira no Github o detalhe das [últimas atualizações produtivas](https://github.com/mercadopago/dx-java/releases/tag/1.6.0).


### 4 de maio

> CHANGELOG
> 
> Nova versão SDK .NET
> 
> NEW_VERSION
> 
> SDK .NET

Lançamos uma nova versão do SDK .NET.

> GIT
> 
> Github
> 
> Confira no Github o detalhe das [últimas atualizações produtivas](https://github.com/mercadopago/dx-dotnet/releases/tag/1.7.0).

---

## Abril 2020

### 3 de abril

> CHANGELOG
> 
> Atualização de documentação de API
> 
> NEW_DOCUMENTATION
> 
> API 

Renovamos a documentação para usar nossas APIs de pagamento. Adicionamos um exemplo básico do formulário no frontend e também diagramas de funcionamento para te ajudar na hora de integrar.

[Ir para a documentação de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/payments/api/introduction/)

---

## Marco 2020

### 27 de março

> CHANGELOG
> 
> Melhoramos seus relatórios programados
> 
> FEATURE
> 
> Relatórios

Para ajudar a otimizar suas conciliações, implementamos melhorias na geração dos intervalos de datas para relatórios programados. A mudança é válida tanto para o relatório de Dinheiro retirado, como para o relatório de Todas as transações. Desde quarta-feira 1 de abril, para encontrar seus relatórios programados, busque-os por um segundo a menos.


Filtros do `search`| Data atual | Nova data |
 --------- | ------------------------ | ------------------------------- |
begin_date  | 01/01/2020 00:00:00 | 01/01/2020 00:00:00
end_date | 02/01/2020  00:00:00 | 01/01/2020  23:59:59


Seu novo parâmetro ficaria da seguinte forma:

```
https://api.mercadolibre.com/account/bank_report/search?access_token={{access_token}}
	&created_from=schedule
	&user_id=290477154
	&begin_date=2020-01-01T00:00:00Z
	&end_date=2020-01-01T23:59:59Z

```

> Para mais informações sobre a programação de relatórios, [consulte a documentação](https://www.mercadopago.com.ar/developers/pt/guides/reports/general-considerations/reconciliation-reports/).


### 19 de março

> CHANGELOG
> 
> Nova versão Prestashop 1.6 & 1.7
> 
> NEW_VERSION
> 
> Prestashop

Lançamos uma nova versão do Prestashop 1.6 & 1.7. Disponibilizamos o Checkout Mercado Pago através de modal para que seus compradores possam comprar sem sair de seu site.

[Ir para a documentação de Prestashop 1.6 & 1.7](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/prestashop/introduction/)

> GIT
> 
> Github
> 
> Confira no GitHub o detalhe das [últimas atualizações produtivas](https://github.com/mercadopago/cart-prestashop-7/releases).

---

## Janeiro 2020

### 9 de janeiro

> CHANGELOG
> 
> Obtenha informações sobre seu negócio
> 
> FEATURE
> 
> Checkout Mercado Pago

Se você possui campanhas publicitárias para seu negócio, é importante acompanhá-las e ver se elas estão lhe ajudando a concretizar vendas. Para poder melhorá-las e sejam cada vez mais eficientes, acrescentamos a possibilidade de associar um pixel do Facebook e uma tag de acompanhamento de conversões do Google Ads aos pagamentos de seu Checkout Mercado Pago.

[Começar a medir a conversão de seus anúncios](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/configurations/).