# WooCommerce

### Mercado Pago Module (WooCommerce 3.x)

## Introdução

O módulo do Mercado Pago para o WooCommerce permite expandir as funcionalidades da sua loja virtual e oferecer uma experiência de pagamento única aos seus clientes.

Se você já usa o WooCommerce para criar sites de e-commerce no WordPress, um dos gerenciadores de conteúdo mais populares do mundo, pode contar com nosso módulo para adicionar um processador de pagamento confiável ao seu site ou de seus clientes.

> Leve suas vendas para outro nível com o processador de pagamento para WooCommerce do Mercado Pago, pronto para uso na sua loja virtual.

Pense grande. Instale nosso gateway de pagamento no WooCommerce e leve suas vendas para outro nível com a melhor experiência de compra:

* Faça **promoções** e venda parcelado com o melhor **financiamento** possível
* Principais **meios de pagamento** de cada país onde operamos
* **Compra em um clique:** lembramos os dados dos seus clientes, basta digitar o código de segurança do cartão
* **Pagamento como visitante:** não excluímos ninguém, não é necessário que seus clientes abram uma conta no Mercado Pago
* **Estorno** de pagamentos
* **Cancelamento** de pagamentos pendentes
* Recuse ou aceite pagamentos **de forma automática**
* Conte com o **suporte oficial** do Mercado Pago

> **Você é desenvolvedor?** Este manual também foi pensado para que você faça a instalação, integração e configuração mais rapidamente do nosso módulo de plataformas de e-commerce mais reconhecidas no mundo.

Confira as opções de pagamento que desenvolvemos para cobrir as necessidades do seu negócio:

| Checkout básico                                                                   | Checkout de pagamentos com cartão                         | Checkout de pagamentos presenciais           |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------|----------------------------------------------|
| Ofereça todos os meios de pagamento.                                              | Ofereça pagamentos com cartão de crédito.                 | Ofereça pagamentos com boleto e na lotérica. |
| Experiência de pagamento no site do Mercado Pago.                                 | Experiência de pagamento dentro da sua loja.              | Experiência de pagamento dentro da sua loja. |
| Seus clientes podem pagar como visitantes ou acessando sua conta do Mercado Pago. | Seus clientes pagam como visitantes sem sair da sua loja. | Seus clientes pagam como visitantes sem sair da sua loja. |


## Requisitos de instalação

|                             	| Detalhes                                                                 	|
|-------------------------------|---------------------------------------------------------------------------|
| Versões de Plataforma       	| WordPress 3.1.x - 4.9.x, WooCommerce 2.6.x - 3.4.x                       	|
| Ambiente                    	| LAMP (Linux, Apache, MySQL e PHP)                                        	|
| Sistema                     	| Linux x86, x86-64                                                        	|
| Servidor Web                	| Apache 2.x                                                               	|
| Versão PHP                  	| 5.6 o superior con soporte a curl                                        	|
| Banco de Dados              	| MySql 5.6 ou superior, MariaDB 10.0 ou superior                          	|
| Dependências de estensões   	| WooComerce                                                               	|
| Configurações Adicionais     	| safe_mode off, memory_limit maior que 256 MB                             	|
| SSL                         	| Certificado SSL é necessário para usar cartões de crédito ou boletos     	|

> É um requisito que você tenha um certificado SSL e o formulário de pagamento a ser fornecido em uma página HTTPS. Durante os testes do modo sandbox você pode operar via HTTP, mas para homologação você precisará adquirir o certificado caso não o tenha.


## Instalação

Você pode instalar o Mercado Pago no WordPress de duas formas:

1. De forma automática, pela seção de “Plugins” do WordPress
  * Siga estas etapas para a instalação:
    * Acesse “Adicionar novo” e busque “WooCommerce Mercado Pago” entre a oferta de módulos do WordPress.
    * Clique em Instalar e depois entre na seção “Plugins Instalados”.
    * Ative-o para começar a configurar o módulo na sua loja.
    * Pronto!

2. De forma manual
  * Instale o módulo seguindo estas etapas:
    * Baixe o arquivo [.zip](https://github.com/mercadopago/cart-woocommerce/archive/master.zip) agora ou pelo [directorio](https://br.wordpress.org/plugins/woocommerce-mercadopago/) de módulos do WordPress
    * Descompacte a pasta e altere o nome para “woocommerce-mercadopago”
    * Copie o arquivo “woocommerce-mercadopago” no seu diretório do WordPress, dentro da pasta “Plugins”
    * Pronto!

Se a instalação foi feita corretamente, você o verá na área de trabalho do WordPress, em "Plug-ins instalados". Ative-o e vamos passar para a integração da sua conta e as etapas de configuração.


## Integração

Siga estas etapas para integrar sua conta do Mercado Pago ao módulo e receber os pagamentos das suas vendas:

1. Crie uma [conta de vendedor](https://www.mercadopago.com.br/registration-company?confirmation_url=https%3A%2F%2Fwww.mercadopago.com.ar%2Fcomo-cobrar) no Mercado Pago, caso ainda não tenha uma.
2. Obtenha suas [credenciais](https://www.mercadopago.com.br/developers/pt/guides/localization/credentials), são as chaves, que te identificam de forma única dentro da plataforma, e as insira nos campos correspondentes para integrar o módulo à sua conta.
3. Configure as preferências de pagamento do checkout que quiser oferecer e faça outros ajustes avançados se quiser alterar as opções que vêm por padrão.
4. Homologue sua conta para [ir a Produção](https://www.mercadopago.com.br/developers/pt/guides/payments/api/goto-production/) e receba pagamentos reais.


## Configuração do módulo

Insira as informações básicas sobre sua empresa para começar a configurar o módulo:

* Digite o nome da sua loja, ele aparecerá nas NF-e que enviarmos para seus clientes para cada compra.
* Selecione a qual categoria seus produtos pertencem.
* Preencha um número ou prefixo para identificar os pedidos e pagamentos da sua loja.

> **Avanzado:** edite os ajustes avançados quando quiser configurar as [notificações IPN](https://www.mercadopago.com.br/developers/pt/guides/notifications/ipn/) e registre informações sobre as transações entre WooCommerce e o Mercado Pago em nossos arquivos de troca com os modos de debug e log. Se é você quem integra o módulo, isso será útil caso haja problemas nos pagamentos com o Mercado Pago.


## Receber pagamentos

Coloque o checkout que você deseja usar para oferecer nossas opções de pagamento no gateway de compra.

Quando você ativa o plug-in, a plataforma leva você para as Configurações do WooCommerce e, de lá, para a seção "Pagamentos", onde terá à sua disposição os tipos de checkout que oferecemos para sua loja virtual: Checkout Básico, Checkout Personalizado para pagamentos on-line e Check-out personalizado para pagamentos com boleto.

![Checkouts Mercado Pago](/images/woocommerce/br_woo_payments.png)

O checkout básico e checkout personalizado são excludentes um do outro. Portanto, se você usar o checkout básico, não poderá usar as opções personalizadas e vice-versa.

Você deve tomar uma decisão para ativar as diferentes experiências de compra:

* Você quer oferecer **todos os meios de pagamento** de uma forma pré-estabelecida? Ative e configure o checkout básico.
* Quer permitir **somente pagamentos com boleto?** Ative o checkout personalizado de pagamentos com boleto.
* Você permitirá **pagamentos com cartão de crédito** sob medida? Ative o checkout personalizado de pagamentos on-line.
* Quer oferecer **todos os meios de pagamento de forma personalizada?** Ative tanto o checkout personalizado para pagamentos on-line como o checkout personalizado para pagamentos com boleto.  

Agora, revise as opções que todos os checkouts têm e configure cada campo, abaixo você encontrará o detalhe de cada um:

|           |                                   | Checkout Básico para todos los medios de pago | Checkout Personalizado para pagos online | Checkout Personalizado para pagos en efectivo |
|-----------|-----------------------------------|-----------------------------------------------|------------------------------------------|-----------------------------------------------|
| Básicas   | Ativar CHO                        | ✔                                             | ✔                                        | ✔                                             |
|           | Meios de pagamento On             | ✔                                             | ✔                                        |                                               |
|           | Meios de pagamento Off            | ✔                                             |                                          | ✔                                             |
|           | Máximo de parcelas                | ✔                                             | ✔                                        | ✔                                             |
|           | Dias para vencimento              |                                               |                                          | ✔                                             |
| Avançadas | Experiência de pagamento redirect | ✔                                             |                                          |                                               |
|           | Experiência de pagamento modal    | ✔                                             |                                          |                                               |
|           | Cupons de desconto                | ✔                                             | ✔                                        | ✔                                             |
|           | Voltar à loja                     | ✔                                             |                                          |                                               |
|           | Reduzir inventário                |                                               |                                          | ✔                                             |
|           | URL de sucesso                    | ✔                                             |                                          |                                               |
|           | URL de pagamento recusado         | ✔                                             |                                          |                                               |
|           | URL de pagamento pendente         | ✔                                             |                                          |                                               |
|           | Modo binário                      | ✔                                             | ✔                                        | ✔                                             |
|           | Descontos por compra com **MP**   | ✔                                             | ✔                                        | ✔                                             |
|           | Comissão por compra com **MP**    | ✔                                             | ✔                                        | ✔                                             |


#### **1. Configuração básica**

Ative o checkout quando quiser usá-lo como uma opção de pagamento na sua loja virtual, selecione as formas de pagamento disponíveis para seus clientes e defina o número máximo de vezes em que eles podem parcelar.

![Configuração básica](/images/woocommerce/br_woo_basico.png)

Como você viu no gráfico de comparação, os checkouts têm algumas configurações avançadas em comum e outras configurações do que cada uma oferece:

- Opções por compra com MP

  - Você poderá configurar descontos e tarifas para seus compradores cada vez que pagarem com o Mercado Pago na sua loja virtual.

 ![Desconto e comissão](/images/woocommerce/br_woo_comdesc.png)

- Modo binário

  - Algumas empresas, devido à sua lógica de negócios, podem precisar de um processo instantâneo de aprovação ou rejeição de pagamentos na experiência de compra, ou seja, evitar a instância de pagamento pendente.
  - Para operar dessa forma, você pode ativar o **modo binário** nas configurações avançadas e, assim, definir a aprovação ou rejeição de cada pagamento instantaneamente. Se você desativar o modo binário, poderá ter cobranças pendentes que estaremos analisando com nossa ferramenta de prevenção contra fraudes.

Revise os ajustes avançados próprios de cada checkout para não deixar nada pelo caminho:

Checkout básico para todos os meios de pagamento

1. Experiência de pagamento
  - Define como será a experiência de pagamento que seus clientes terão: se eles deixarão seu site para pagar. "Redirect" os levará para fora de sua loja para pagar no nosso portal de pagamento. A opção Modal abrirá o formulário de pagamento em sua loja virtual, sem sair dela para concluir o processo de compra.

2. Voltar à loja
  - Aqui você poderá escolher se quer que seus compradores voltem para a sua loja. Se este for o caso, os levaremos diretamente quando o pagamento for concluído.  

3. URLs configuráveis apenas no checkout básico
  - de sucesso: Informe seus compradores cada vez que um pagamento for aprovado, levando-os a uma página que informe o resultado. É uma boa prática já que assim, você os passará confiança sobre a transação que acabam de fazer. A URL que você inserir neste campo cumprirá essa função.
  - de pagamento recusado: Igual que el punto anterior, pero para cuando las cosas no salen del todo bien. Crea una página que sirva para informar a tus compradores cuando un pago es rechazado y cuéntale qué pasos puede seguir en adelante. En este campo podrás insertarla.  
  - de pagamento pendente: Insira a URL de uma página onde você informa seus compradores que têm um pago pendente o que isso significa: que o pago ainda não está confirmado. Você vai melhorar a experiência de compra sempre que der as informações corretas e manter seus compradores a par do processo.

Checkout personalizado para pagamentos com cartão de crédito

* Cupons de desconto
  - Alguns comércios podem querer trabalhar com cupons de desconto. Se este é o seu caso, ative de forma simples esta opção, selecionando ‘Sim’ no campo de configuração:  

![Desconto Mercado Pago no checkout](/images/woocommerce/br_woo_cupon.png)

Checkout personalizado para pagos en efectivo

* Reduzir inventário
  - Ative esta opção para reduzir seu estoque durante a criação de um pedido,  independentemente do cliente concluir ou não a compra. Desative esta opção para reduzi-lo somente quando os pagamentos estiverem aprovados.


#### **2. Teste o módulo**

Faça testes até ter certeza de que está tudo em ordem.

* Simule pagamentos como se você fosse um dos seus clientes comprando no site.
* Certifique-se de que o fluxo funcione corretamente e que seja fácil de usar.
* Viu que está tudo em ordem? Desactive o modo de testes e comece a receber pagamentos reais!

Você poderá ativar ou desativar este modo por aqui:

![Modo Sandbox](/images/woocommerce/br_woo_sandbox.png)

> Por padrão, desativamos o Produção. Ative o Produção quando tiver a conta homologada e verifique se o fluxo de compra e o recebimento dos pagamentos de teste funcionam bem.

#### **3. Ir a producción (‘Go live!’)**

Ative o modo Produção somente quando estiver pronto para vender. Você poderá fazer isso por aqui:

![Modo Produção](/images/woocommerce/br_woo_produccion.png)

Antes começar a cobrar, precisamos que você passe pelo processo de homologação, onde pediremos que você preencha um formulário com informações sobre sua empresa.

> Confira os [requisitos para ir a produção](https://www.mercadopago.com.br/developers/pt/guides/payments/api/goto-production/).

Já fez isso? Então, você poderá ativar o “Produção” pelo painel de configuração do Mercado Pago.

**Pronto!** Agora, você poderá maximizar sua conversão ou a dos seus clientes com a experiência de compra on-line do Mercado Pago.
