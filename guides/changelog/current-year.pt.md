# Release notes Mercado Pago 2020

Cada release note descreve as alterações que se aplicam a uma versão. Essas alterações podem incluir:

- **Atualizações em APIs:** lançamentos, modificações ou eliminação de recursos, parâmetros ou campos em nossas APIs.

- **Novos produtos ou funcionalidades:** Lançamentos de ferramentas que farão com que possa aceitar pagamentos de forma mais fácil.

- **Anúncios:** Novidades relacionadas a algum de nossos produtos ou alterações futuras.

- **Atualizações na documentação:** Guias, referências e tutoriais para te ajudar a monetizar seu negócio integrando Mercado Pago.



## 4 de maio de 2020

### Nova versão SDK .NET

Lançamos uma nova versão do SDK .NET.

Confira no Github o detalhe das [últimas atualizações produtivas](https://github.com/mercadopago/dx-dotnet/releases/tag/1.7.0).


## 3 de abril de 2020

### Atualização de documentação - API

Renovamos a documentação para usar nossas APIs de pagamento. Adicionamos um exemplo básico do formulário no frontend e também diagramas de funcionamento para te ajudar na hora de integrar.

[Ir para a documentação de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/payments/api/introduction/)


## 27 de março de 2020

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


## 19 de março de 2020

### Nova versão Prestashop 1.6 & 1.7

Lançamos uma nova versão do Prestashop 1.6 & 1.7. Disponibilizamos o Checkout Mercado Pago através de modal para que seus compradores possam comprar sem sair de seu site.
Confira no Github o detalhe das [últimas atualizações produtivas](https://github.com/mercadopago/cart-prestashop-7/releases).

[Ir para a documentação de Prestashop 1.6 & 1.7](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/prestashop/introduction/)


## 9 de janeiro de 2020

Se você possui campanhas publicitárias para seu negócio, é importante acompanhá-las e ver se elas estão lhe ajudando a concretizar vendas. Para poder melhorá-las e sejam cada vez mais eficientes, acrescentamos a possibilidade de associar um pixel do Facebook e uma tag de acompanhamento de conversões do Google Ads aos pagamentos de seu Checkout Mercado Pago.

[Começar a medir a conversão de seus anúncios](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/configurations/).