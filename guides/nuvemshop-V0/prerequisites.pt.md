# Pré-requisitos

Para poder realizar a integração do Mercado Pago com a Nuvemshop, é preciso atender aos requisitos abaixo.

| Requisitos | Descrição | Especificações |
|---|---|---|
| Aplicação | As aplicações são as diferentes integrações contidas em uma ou mais lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de ter tudo organizado e manter um controle que facilite a gestão. Veja [Dashboard](/developers/pt/docs/nuvemshop/additional-content/dashboard/introduction) para mais informações sobre como criar uma aplicação. | N/A |
| Ambiente | Serviço de hospedagem | AMP (Linux, Apache, MySQL, and PHP) ou LNMP stack. |
| Base de dados | Conjuntos de arquivos relacionados entre si com registros sobre pessoas, lugares ou coisas. | MySql 5.6 ou superior (Oracle ou Percona) |
| Configuração adicional | Ajustes recomendados para uma melhor performance e funcionamento adequado do Nuvemshop e ao plugin do Mercado Pago. | safe_mode off * memory_limite maior que 256MB (512MB recomendado) |
| Conta de vendedor Mercado Pago | Para realizar vendas, é preciso uma conta de vendedor no Mercado Pago. Caso não a tenha, [clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para criar.| Conta de vendedor no Mercado Pago |
| Cópia de segurança da sua loja **(recomendado)** | Cópia de todas as informações da sua loja a fim de garantir uma versão sem qualquer alteração caso seja necessário. | Aconselhamos que você faça uma cópia de segurança da loja online antes de fazer qualquer alteração. Ao finalizar a cópia, exclua todos os arquivos relacionados à versão anterior do módulo. |
| Credenciais | As [credenciais](/developers/pt/docs/nuvemshop/additional-content/credentials) são códigos de identificação com os quais o Mercado Pago identifica e reconhece que a sua loja está conectada a sua conta Mercado Pago e, dessa forma, garantem que os pagamentos realizados sejam recebidos corretamente na sua conta do Mercado Pago. | Existem credenciais de testes e de produção e é sempre necessário preencher as duas durante a configuração da integração. Para realizar testes e garantir o funcionamento da integração, serão necessárias as **credenciais de teste** e, após esta etapa, você precisará das **credenciais de produção** para receber pagamentos reais. |
| Dependência de extensões | Extensões dão novas habilidades ao PHP, complementando com mais funções. | PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (para Webservices API) |
| Plugin do Mercado Pago | Mantenha o plugin sempre atualizado com a última versão para garantir a segurança dos dados e o funcionamento da integração. | Para mais informações sobre como instalar o plugin, acesse a seção de [Configuração da integração](/developers/pt/docs/nuvemshop-V0/integration) |
| Nuvemshop | É uma plataforma e-commerce para sua loja virtual que permite processar pagamentos através do Mercado Pago. [Clique aqui](https://www.nuvemshop.com.br/) para mais informações. | Requerido 1.6.x ou superior. |
| Servidor Web | Software responsável por aceitar pedidos em HTTP de clientes, geralmente os navegadores, e servi-los com respostas em HTTP | Apache 2.x, Nginx 1.7.x |
| Sistema operacional | Sistema responsável pelo gerenciamento do hardware do computador. | Linux x86, Windows x86-64 |
| SSL | Protocolo que permite estabelecer comunicações seguras na Internet para atividades como navegação, e-mail, e outras transferências de dados. | Certificado SSL |
| Versão PHP | PHP é uma linguagem de programação amplamente usada para desenvolvimento de aplicações web. Para mais informações, [clique aqui](https://www.php.net/). | PHP 5.6 até 7.1 para PrestaShop 1.6 <br> PHP 5.6 ou superior |

Se todos os pré-requisitos forem atendidos, você poderá utilizar o plugin do Mercado Pago na plataforma da Nuvemshop.