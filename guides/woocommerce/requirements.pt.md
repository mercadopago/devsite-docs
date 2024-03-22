# Pré-requisitos

Para usar a integração do Mercado Pago com WooCommerce em um site WordPress, é preciso atender aos requisitos abaixo.

> NOTE
>
> Nota
>
> Acesse a nossa [página de Primeiros passos](/developers/pt/docs/getting-started) para encontrar as informações necessárias para começar a integrar as soluções Mercado Pago.

| Requisitos | Descrição | Especificações |
|---|---|---|
| Ambiente | Serviço de hospedagem | MySQL, PHP ou serviço equivalente que admite a instalação do WordPress. |
| Aplicação | As aplicações são as diferentes integrações contidas em uma ou mais lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de ter tudo organizado e manter um controle que facilite a gestão. Veja [Suas integrações](/developers/pt/docs/woocommerce/additional-content/your-integrations/introduction) para mais informações sobre como criar uma aplicação. | N/A |
| Base de dados | Conjuntos de arquivos relacionados entre si com registros sobre pessoas, lugares ou coisas. | MySQL 5.6 o superior (Oracle o Percona), MariaDB 10.0 o superior.  |
| Configuraçãoes adicionais | Ajustes recomendados para uma melhor performance e funcionamento adequado do WooCommerce e ao módulo do Mercado Pago. | [Modo seguro](https://wordpress.org/plugins/safe-mode/) off* [memory_limit](https://docs.woocommerce.com/document/increasing-the-wordpress-memory-limit/) superior a 256 MB (recomenda-se 512 MB).|
| Conta de vendedor Mercado Pago | Para realizar vendas, é preciso uma conta de vendedor no Mercado Pago. Caso não a tenha, [clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para criar.| Conta de vendedor no Mercado Pago |
| Cópia de segurança da sua loja **(recomendado)** | Cópia de todas as informações da sua loja a fim de garantir uma versão sem qualquer alteração caso seja necessário. | Aconselhamos que você faça uma cópia de segurança da loja online antes de fazer qualquer alteração. Ao finalizar a cópia, exclua todos os arquivos relacionados à versão anterior do plugin. |
| Credenciais | As [credenciais](/developers/pt/docs/woocommerce/additional-content/your-integrations/credentials) são códigos de identificação com os quais o Mercado Pago identifica e reconhece que a sua loja está conectada a sua conta Mercado Pago e, dessa forma, garantem que os pagamentos realizados sejam recebidos corretamente na sua conta do Mercado Pago. | Existem credenciais de testes e de produção e é sempre necessário preencher as duas durante a configuração da integração. Para realizar testes e garantir o funcionamento da integração, serão necessárias as **credenciais de teste** e, após esta etapa, você precisará das **credenciais de produção** para receber pagamentos reais. |
| Dependência de extensões | Extensões dão novas habilidades ao PHP, complementando com mais funções. | PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (para Webservices API).|
| Plugin do Mercado Pago | Acesse sua conta [Wordpress](https://wordpress.com/) e, no Painel da sua conta, clique em **Plugins > Adicionar Novo**. Utilize e barra de pesquisa à direita para procurar por "Mercado Pago" e, após localizar o plugin **Mercado Pago Payments for WooCommerce**, clique em **Instalar agora**. Após a conclusão da instalação, clique no botão **Ativar**.| Caso você tenha problemas durante a instalação do módulo e precise entrar em contato com nosso suporte, é possível que você seja solicitado a realizar a [instalação de forma manual](/developers/pt/docs/woocommerce/how-tos/install-module-manually). Mantenha o plugin sempre atualizado com a última versão para garantir a segurança dos dados e o funcionamento da integração. |
| Servidor Web | Software responsável por aceitar pedidos em HTTP de clientes, geralmente os navegadores, e servi-los com respostas em HTTP | Apache 2.x, Nginx 1.7.x |
| Sistema operacional | Sistema responsável pelo gerenciamento do hardware do computador. | Linux x86, Windows x86-64 |
| SSL | Protocolo que permite estabelecer comunicações seguras na Internet para atividades como navegação, e-mail e outras transferências de dados. | Certificado SSL |
| Versão PHP | PHP é uma linguagem de programação amplamente usada para desenvolvimento de aplicações web. Para mais informações, [clique aqui](https://www.php.net/). | PHP 7.x |
| WooCommerce | WordPress plugin que permite criar dados virtuais a partir de código aberto. [Clique aqui](https://woocommerce.com/es-es/woocommerce-features/) para obter mais informações. | Versão necessária: 5.9.x ou superior. Testado até 7.1.x |
| WordPress | Ferramenta on-line para criação de sites, sites e blogs. [Clique aqui](https://es.wordpress.org/) para criar sua conta. | Versão de instalação necessária: 5.6.x ou superior. Testado até 6.1.x |