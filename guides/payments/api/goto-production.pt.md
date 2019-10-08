# Requisitos para ir à produção

Quando tenha a aplicação pronta e funcionando na modalidade Sandbox e quiser começar a processar pagamentos reais, deverá completar a homologação da sua integração a partir da [página das credenciais.]([FAKER][CREDENTIALS][URL]) Mais tarde Mercado Pago pode verificar o seu site afim que sejam cumpridos todos os detalhes a seguir. Caso contrário, um assessor entrará em contato contigo para dizer se há algo que deve ser corrigido na sua integração.

## Por que é necessário esse processo?

Porque assim garantimos (tanto o Mercado Pago quanto você) a segurança dos dados dos seus clientes e a adequação às normas legais de cada país, entre outras coisas. Além disso, seguindo esses conselhos, você poderá conseguir uma boa experiência de compra e ajudar a maximizar a conversão dos pagamentos que receber.

O não cumprimento dessas normas poderá implicar desde o não processamento dos pagamentos até ações legais de acordo com o estabelecido nos [termos e condições](https://www.mercadopago.com.br/ajuda/termos-e-condicoes_300).

## Uso do SDK Javascript mercadopago.js

Deve importar a biblioteca mercadopago.js no seu site, da forma que é fornecida pelo Mercado Pago. Não pode modificá-la, nem armazená-las nos seus servidores. Ao garantir isso, podemos realizar todos os controles pertinentes ao usuário para melhorar a conversão dos pagamentos e evitar fraude.

## Os dados dos cartões não devem chegar até os seus servidores

Ao criar um formulário para os dados de cartão, verifique de não incluir o atributo name nas tags input. Isso irá prevenir que os dados cheguem ao seu servidor quando o usuário envie o formulário. Não se preocupe, o SDK mercadopago.js identificará corretamente os parâmetros mediante ao atributo data-checkout e os enviará diretamente aos servidores do Mercado Pago.
Ao não manusear os dados dos cartões evitará muita dor de cabeça e não será necessário cumprir com as normas PCI-DSS para prevenir uma possível vulnerabilidade dos dados. O Mercado Pago irá se encarregar do cumprimento dessas normas por você.

## Certificado SSL

Tentamos garantir maior confiabilidade e segurança possível nas transações que são realizadas pelos seus clientes, e também, que seus dados não sejam roubados por terceiros. Para isso, é um requisito que tenha um certificado SSL e que o formulário de pagamentos esteja sobre uma página HTTPS.
Durante os testes em modo sandbox, pode operar em HTTP, mas para a homologação, deverá adquirir o certificado caso não tenha.

## Promoções e Financiamento

Se oferece pagamentos com cartões de crédito com parcelamentos, deve deixar claro as promoções oferecidas pelo MercadoPago. Pode incluir um de nossos [banners de meio de pagamentos](https://www.mercadopago.com/mlb/com.mercadopago.web.landing.LandingController?id=banners), ou ainda direcionar o cliente para a [sessão de promoções](https://www.mercadopago.com.br/promocoes/).
Também deve informar os juros que serão pagos pelo seu usuário, direcionando para a sessão [custos de parcelamento MercadoPago](https://www.mercadopago.com.br/ajuda/Custos-de-parcelamento_322).

----[mla]----
> NOTE
>
> Nota
>
> Devido à [E 51/2017](https://www.boletinoficial.gob.ar/#!DetalleNormaBusquedaRapida/158269/20170125/resolucion%2051) do Secretaría do Comércio da Argentina, sobre os preços transparentes, é necessário que você cumpra certos [requisitos adicionais](https://www.mercadopago.com.ar/developers/es/related/resolucion-e-512017/).
------------

## Comunicação dos estados

Deve oferecer a melhor comunicação possível ao usuário no que diz respeito aos estados que o seu pagamento está, assim como os possíveis erros na inserção de dados do cartão. Isso fará melhorar a conversão do seu checkout, uma vez que oferece a seus clientes informações claras e o informa bem o que falta ou o que deve corrigir para finalizar o processo de pagamento.

Para isso, consulte os [possíveis códigos de erro da API](https://www.mercadopago.com.br/developers/pt/guides/payments/api/handling-responses), junto a comunicação que sugerimos que seja implementada em cada caso.

Além disso, quando o pagamento com cartão de crédito é aprovado, deverá mostrar na tela, assim como um possível envio de email do pagamento aprovado, como o comprador verá o resultado daquela compra na sua fatura de cartão de crédito, simplesmente mostre o valor do atributo `statement_descriptor` da resposta do pagamento.

Se permite fazer devoluções de pagamentos, deixe claro que poderão ser feitas em até 90 dias depois da aprovação do pagamento.

### Termos e condições

Deve disponibilizar uma politica de termos e condições, na qual especifique que se responsibiliza por todos os dados que estão sendo inseridos no seu site.
