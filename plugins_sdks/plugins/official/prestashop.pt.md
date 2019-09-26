# Prestashop 1.7


### Mercado Pago Module (Prestashop 1.7.x)

## Introdução

Como você pode imaginar, um site sem um processador de pagamento nada mais é do que um catálogo on-line. Seus clientes poderão ver seus produtos, mas não poderão pagar por eles.

> Somos parceiros oficiais da Prestashop, um sistema gerenciador de conteúdo com o qual você pode criar lojas virtuais sob medida.

Pense grande. Instale o Mercado Pago no Prestashop e leve suas vendas (ou as dos seus clientes) a outro nível com a melhor experiência de compra:

* Ofereça **promoções** e venda parcelado com o melhor **financiamento** possível
* Principais **meios de pagamento** de cada país onde operamos
* **Compre em um clique:** lembramos os dados dos seus clientes, eles só informam o código de segurança do cartão
* **Pagamento como visitante:** não excluímos ninguém, não é necessário que seus clientes abram uma conta no Mercado Pago
* **Estorno** de pagamentos
* **Cancelamento** de pagamentos pendentes
* Recuse ou aceite pagamentos **automaticamente**

> **Você é desenvolvedor?** Este manual também foi pensado para que você faça a instalação, integração e configuração mais rapidamente.

> **Você é parceiro do Mercado Pago?** Não esqueça de inserir seu Sponsor_ID, assim podemos identificar todas as suas transações e saberemos quantas vendas a sua conta processa.

## Requisitos de Instalação

A nível técnico, sua versão do Prestashop deve atender estes requisitos:

|                            | Detalhes                                                                                       |
|----------------------------|------------------------------------------------------------------------------------------------|
| Versões suportadas         | Prestashop 1.7.x                                                                               |
| Ambiente                   | LAMP (Linux, Apache, MySQL, and PHP) ó LNMP stack                                              |
| Sistema                    | Linux x86, Windows x86-64                                                                      |
| Servidor Web               | Apache 2.x,  Nginx 1.7.x                                                                       |
| Versão do PHP              | PHP 5.6, 5.5 y 5.4                                                                             |
| Banco de Dados             | MySQL 5.6 (Oracle o Percona)                                                                   |
| Dependência de Extensões   | PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (for Webservices API)           |
| Configurações adicionais   | safe_mode off * memory_limite mayor que 256MB (512MB recomendado)                              |
| SSL                        | Es un requisito que tenga un certificado SSL                                                   |

¡La instalación de nuestro módulo no afecta la velocidad de tu tienda!

> Você pode usar o protocolo HTTP no modo "Teste" e não fazer transações reais. Quando for a Produção, você deve ter um **certificado SSL** para oferecer **navegação segura** e proteger seus dados e os dos seus clientes. Depois, a rota de acesso para a sua loja virtual responderá ao **protocolo HTTPS**.

## Instalação

1) Baixe o arquivo mercadopago.zip em nosso Github.

> NOTE
>
> [DOWNLOAD](https://github.com/mercadopago/cart-prestashop-6/blob/master/mercadopago.zip)
>
> [Módulo Mercado Pago para Prestashop 1.7](https://github.com/mercadopago/cart-prestashop-6/blob/master/mercadopago.zip)

2) Acesse o painel administrativo do Prestashop em **Módulos** -> **Módulos e Serviços**, clicar no botão **"Enviar um Módulo"** e selecionar o arquivo **mercadopago.zip** baixado anteriormente.

3) Muito bem! O módulo do Mercado Pago foi instalado com sucesso.

## Integração

Você não precisa de conhecimentos de design ou programação para ativar o Mercado Pago na sua loja Prestashop. Depois que o módulo estiver instalado, siga estas etapas para integrar:

1. Crie uma [conta de vendedor](https://www.mercadopago.com.br/registration-company?confirmation_url=https%3A%2F%2Fwww.mercadopago.com.ar%2Fcomo-cobrar) no Mercado Pago, caso ainda não tenha uma.
2. Obtenha suas [credenciais](https://www.mercadopago.com.br/developers/pt/guides/localization/credentials) e as insira nos campos correspondentes para integrar o módulo à sua conta.
3. Configure suas preferências de pagamento e outros ajustes avançados.
4. Homologue sua conta para [ir a Produção](https://www.mercadopago.com.br/developers/pt/guides/payments/api/goto-production/) e receba pagamentos reais.

## Receber Pagamentos

Configure o básico de cada checkout e faça com que seu cliente conclua a compra de forma rápida, fácil e segura:

> Checkout Básico: aceita todos os meios de pagamento.

Quanto melhor for a experiência, mais conversões você terá! Siga estas etapas para configurar cada checkout do Mercado Pago:

#### **1. Configuração básica**

Crie suas preferências de pagamento:

- Insira sua marca ou o nome da sua loja para as NF-e que enviamos aos seus clientes para cada compra.
- Selecione a qual categoria seus produtos pertencem.
- Selecione os [meios de pagamento disponíveis](https://www.mercadopago.com.br/developers/pt/guides/localization/payment-methods/) para seus clientes conforme o país onde você opera e o tipo de checkout que você está configurando.
- Estabeleça o número máximo de vezes que poderão parcelar.
- Vencimentos de pagamentos com boleto e na lotérica: estabeleça em quantos dias os pagamentos do checkout personalizado vencerão.

![Configuração básica](/images/prestashop/br_basico.png)

#### **2. Configuração avançada**

Personalize a experiência de compra com os ajustes avançados que correspondam a cada tipo de checkout:

- Seus clientes retornam à sua loja sempre que terminarem uma compra.
- Modo binário para aceitar e recusar pagamentos de forma automática, pulando as instâncias de cobranças em revisão.
- Tempo máximo dos links de pagamento com as preferências de compra dos seus clientes que abandonam o processo de compra no meio do caminho.
- Cupons de desconto.
- Quando reduzir o estoque no checkout personalizado de pagamentos com boleto e na lotérica.
- Selecione a porcentagem de desconto que aplicará para os clientes que quiserem pagar à vista.

![Configuração avançada](/images/prestashop/br_avanzado.png)

#### **3. Teste o módulo**

Faça testes:

- Simule pagamentos como se você fosse um dos seus clientes comprando no site.
- Certifique-se de que o fluxo funcione corretamente e seja fácil de usar.
- Viu que está tudo em ordem? Desative o modo de testes e comece a receber pagamentos reais!


![Testar loja](/images/prestashop/br_testear.png)

> Por padrão, deixamos este modo ativo. Desative-o quando tiver a conta homologada e vá para Produção somente depois de verificar se o fluxo de compra funciona e se os pagamentos de teste foram processados.

#### **4. Ir para produção (‘Go live!’)**

Antes de começar a cobrar, precisamos que você passe pelo processo de homologação. Nele, pediremos que você preencha um formulário com informações relacionadas ao seu negócio.

> Confira os [requisitos para ir a produção.](https://www.mercadopago.com.br/developers/pt/guides/payments/api/goto-production/)

Já fez isso? Então, você pode passar rapidamente de "Testes" para "Produção" no painel de configuração do Mercado Pago.

![Começar a vender](/images/prestashop/br_vender.png)

**E pronto!** Agora, você poderá maximizar sua conversão ou a dos seus clientes com a experiência de compra on-line do Mercado Pago.
