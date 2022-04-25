# Pré-requisitos da integração
 
Para poder realizar a integração do Mercado Pago com a PrestaShop, é preciso atender aos requisitos abaixo.
 
| Requisitos | Descrição | Especificações |
|---|---|---|
| Conta de vendedor Mercado Pago | Para realizar vendas, é preciso uma conta de vendedor no Mercado Pago. Caso não a tenha, [clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para criar.| Conta de vendedor no Mercado Pago |
| PrestaShop | Plataforma de e-commerce com software de código aberto, que permite a qualquer usuário criar e desenvolver um site comercial. [Clique aqui](https://www.prestashop.com/pt/) para mais informações. | Requerido 1.6.x ou superior. |
| Credenciais | As [credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/credentials/credentials) são senhas únicas com as quais identificamos uma integração na sua conta e servem para capturar pagamentos em lojas virtuais e outras aplicações de forma segura. | Para realizar testes e garantir o funcionamento da integração, serão necessárias as **credenciais de teste**. Após esta etapa, você precisará das **credenciais de produção** para receber pagamentos reais. |
| Ambiente | Serviço de hospedagem | AMP (Linux, Apache, MySQL, and PHP) ou LNMP stack. |
| Sistema operacional | Sistema responsável pelo gerenciamento do hardware do computador. | Linux x86, Windows x86-64 |
| Servidor Web | Software responsável por aceitar pedidos em HTTP de clientes, geralmente os navegadores, e servi-los com respostas em HTTP | Apache 2.x, Nginx 1.7.x |
| Versão PHP | PHP é uma linguagem de programação amplamente usada para desenvolvimento de aplicações web. Para mais informações, [clique aqui](https://www.php.net/). | PHP 5.6 até 7.1 para PrestaShop 1.6 <br> PHP 5.6 ou superior para PrestaShop 1.7 |
| Base de dados | Conjuntos de arquivos relacionados entre si com registros sobre pessoas, lugares ou coisas. | MySql 5.6 ou superior (Oracle ou Percona) |
| Dependência de extensões | Extensões dão novas habilidades ao PHP, complementando com mais funções. | PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (para Webservices API) |
| Configuração adicional | Ajustes recomendados para uma melhor performance e funcionamento adequado do PrestaShop e ao plugin do Mercado Pago. | safe_mode off * memory_limite maior que 256MB (512MB recomendado) |
| SSL | Protocolo que permite estabelecer comunicações seguras na Internet para atividades como navegação, e-mail, e outras transferências de dados. | Certificado SSL |
| Cópia de segurança da sua loja **(recomendado)** | Cópia de todas as informações da sua loja a fim de garantir uma versão sem qualquer alteração caso seja necessário. | Aconselhamos que você faça uma cópia de segurança da loja online antes de fazer qualquer alteração. Ao finalizar a cópia, exclua todos os arquivos relacionados à versão anterior do plugin. |
 
Se todos os pré-requisitos forem atendidos, você poderá instalar o plugin do Mercado Pago na plataforma da PrestaShop.
 
