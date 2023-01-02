# Pré-requisitos

Para usar a integração do Mercado Pago com WooCommerce em um site WordPress, é preciso atender aos requisitos abaixo.

| Requisitos | Especificações |
|---|---|
| Aplicação | As aplicações são as diferentes integrações contidas em uma ou mais lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de ter tudo organizado e manter um controle que facilite a gestão. Veja [Dashboard](/developers/pt/docs/woocommerce/additional-content/dashboard/introduction) para mais informações sobre como criar uma aplicação. |
| Conta do vendedor Mercado Pago | Para realizar vendas, é preciso uma conta de vendedor no Mercado Pago. Caso não a tenha, [clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para criar. |
| Credenciais | As [credenciais](/developers/pt/guides/additional-content/credentials/credentials) são códigos de identificação com os quais o Mercado Pago identifica e reconhece que a sua loja está conectada a sua conta Mercado Pago e, dessa forma, garantem que os pagamentos realizados sejam recebidos corretamente na sua conta do Mercado Pago. Para receber os pagamentos reais, você precisará de **credenciais de produção**. Para testar e garantir que a integração funcione, serão necessárias **credenciais de teste**. |
| WordPress | Ferramenta on-line para criação de sites, sites e blogs. [Clique aqui](https://es.wordpress.org/) para criar sua conta. Versão de instalação necessária: 5.6.x ou superior. Testado até 6.1.x |
| WooCommerce | WordPress Plugin que permite criar dados virtuais a partir de código aberto. [Clique aqui](https://woocommerce.com/es-es/woocommerce-features/) para obter mais informações. Versão necessária: 5.9.x ou superior. Testado até 7.1.x |
| Ambiente | MySQL, PHP ou serviço equivalente que admite a instalação do WordPress. |
| Sistema operacional | Linux x86, Windows x86-64 |
| Servidor web | Apache 2.x, Nginx 1.7.x |
| Versão PHP | PHP 7.x |
| Base de dados | MySQL 5.6 o superior (Oracle o Percona), MariaDB 10.0 o superior. |
| Dependência de extensões | Brindan novas habilidades em PHP, adicionando mais funções. Extensões: PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (para Webservices API). |
| Configurações adicionais | Recomendadas para uma melhor entrega e funcionamento correto do plugin Wordpress, WooCommerce e Mercado Pago: [modo seguro](https://wordpress.org/plugins/safe-mode/) off* [memory_limit](https://docs.woocommerce.com/document/increasing-the-wordpress-memory-limit/) superior a 256 MB (recomenda-se 512 MB). |
| SSL | Contar com um certificado SSL. |
| Cópia de segurança (recomendado) | Recomendamos fazer uma cópia de segurança de la tienda online antes de realizar a troca mais rápida. Ao finalizar a cópia, elimine todos os arquivos relacionados com a versão anterior do módulo. |

