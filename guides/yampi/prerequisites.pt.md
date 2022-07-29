# Pré-requisitos

Para poder realizar a integração do Mercado Pago com a Yampi, é preciso atender aos requisitos abaixo.

| Requisitos | Descrição | Especificações | 
|---|---|---|
| Base de dados | Conjuntos de arquivos relacionados entre si com registros sobre pessoas, lugares ou coisas. | MySql 5.6 ou superior (Oracle ou Percona) |
| Conta de vendedor Mercado Pago | Para realizar vendas, é preciso uma conta de vendedor no Mercado Pago. Caso não a tenha, [clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para criar.| Conta de vendedor no Mercado Pago |
| Cópia de segurança da sua loja **(recomendado)** | Cópia de todas as informações da sua loja a fim de garantir uma versão sem qualquer alteração caso seja necessário. | Aconselhamos que você faça uma cópia de segurança da loja online antes de fazer qualquer alteração. Ao finalizar a cópia, exclua todos os arquivos relacionados à versão anterior do módulo. |
| Credenciais | As [credenciais](/developers/pt/guides/additional-content/credentials/credentials) são códigos de identificação com os quais o Mercado Pago identifica e reconhece que a sua loja está conectada a sua conta Mercado Pago e, dessa forma, garantem que os pagamentos realizados sejam recebidos corretamente na sua conta do Mercado Pago. | Existem credenciais de testes e de produção e é sempre necessário preencher as duas durante a configuração da integração. Para realizar testes e garantir o funcionamento da integração, serão necessárias as **credenciais de teste** e, após esta etapa, você precisará das **credenciais de produção** para receber pagamentos reais. |
| Loja na Yampi | Plataforma de e-commerce focada em aprimorar os processos de compra e venda online. [Clique aqui](https://www.yampi.com.br/) para mais informações. | - |
| Servidor Web | Software responsável por aceitar pedidos em HTTP de clientes, geralmente os navegadores, e servi-los com respostas em HTTP | Apache 2.x, Nginx 1.7.x |
| Sistema operacional | Sistema responsável pelo gerenciamento do hardware do computador. | Linux x86, Windows x86-64 e MacOS x86-64 |

Se todos os pré-requisitos forem atendidos, você poderá instalar o checkout do Mercado Pago na plataforma da Yampi.

> PREV_STEP_CARD_PT
>
> Página inicial
>
> Retorne a página inicial da documentação da PrestaShop.
>
> [Página inicial](/developers/pt/docs/prestashop/landing)

> NEXT_STEP_CARD_PT
>
> Configuração da integração
>
> Integre o Mercado Pago para começar a receber pagamento em sua loja da Yampi.
>
> [Configurar a integração](/developers/pt/docs/yampi/integration)