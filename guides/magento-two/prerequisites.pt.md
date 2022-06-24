# Pré-requisitos da inegração

Para usar a integração do Mercado Pago com o Magento 2 em sua loja, você deve atender aos requisitos descritos na tabela abaixo.

> WARNING 
> 
> Mantenha seu plugin atualizado para não perder vendas
> </br>
> Em outubro de 2022, as versões do plugin Mercado Pago anteriores a 3.5.0 serão descontinuadas e deixarão de funcionar. Além disso, em abril as bandeiras de cartões de crédito aplicaram mudanças internacionais nas transações.  
> </br>
> **Mantenha sua loja sempre atualizada com a versão mais recente.**

| Requisitos  | Descrição | Especificações |
| --- | --- | --- |
| Ambiente | Serviço de hospedagem | LAMP (Linux, Apache, MySQL e PHP)<br/>Pilha LNMP |
| Base de dados | Conjuntos de arquivos relacionados entre si com registros sobre pessoas, lugares ou coisas. | MySQL 5.6 (MariaDB e Percona) |
| Configuração adicional | Ajustes recomendados para uma melhor performance e funcionamento adequado da Magento 2 e ao módulo do Mercado Pago. | Memória mínima de 2 GB de RAM |
| Conta de vendedor Mercado Pago | Para realizar vendas, é preciso uma conta de vendedor no Mercado Pago. Caso não a tenha, [clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para criar.| Conta de vendedor no Mercado Pago |
| Credenciais | As [credenciais](/developers/pt/guides/additional-content/credentials/credentials) são senhas únicas com as quais identificamos uma integração na sua conta e servem para capturar pagamentos em lojas virtuais e outras aplicações de forma segura. | Para realizar testes e garantir o funcionamento da integração, serão necessárias as **credenciais de teste**. Após esta etapa, você precisará das **credenciais de produção** para receber pagamentos reais. |
| Dependências de extensões | Extensões dão novas habilidades ao PHP, complementando com mais funções. | bc-math (apenas Magento Commerce)<br/>curl<br/>gd, ImageMagick 6.3.7 (ou posterior) ou ambos<br/>intl<br/>bstring<br/>mcrypt<br/>hash<br/>openssl<br/>PDO / MySQL<br/>SimpleXML<br/>sabão<br/>xml <br/>xsl<br/>zip<br/> |
| Magento | Plataforma de e-commerce 100% personalizável que se integra perfeitamente com as principais tecnologias do mercado, podendo ser implantada em qualquer ambiente. [Clique aqui](https://business.adobe.com/br/products/magento/magento-commerce.html) para mais informações.| Requerido 2.x |
| Servidor Web | Software responsável por aceitar pedidos em HTTP de clientes, geralmente os navegadores, e servi-los com respostas em HTTP | Apache 2.x<br/>Nginx 1.7.x |
| Sistema operacional | Sistema responsável pelo gerenciamento do hardware do computador. | Linux x86-64 |
| SSL | Protocolo que permite estabelecer comunicações seguras na Internet para atividades como navegação, e-mail, e outras transferências de dados. | É necessário ter um certificado SSL e que a forma de pagamento esteja disponibilizada em uma página HTTPS. Durante os testes em modo Sandbox, você poderá executar os testes em HTTP. |
| Versão PHP | PHP é uma linguagem de programação amplamente usada para desenvolvimento de aplicações web. Para mais informações, [clique aqui](https://www.php.net/). | 5.6.x<br/>7.0.2<br/>7.0.6–7.0.x (para PHP 7 apenas | json<br/>iconv) <br/> |

> Este módulo está configurado para suportar os padrões do Magento 2. Recomendamos que você não utilize plugins ou módulos que alterem as características e operação do padrão do Magento para evitar possíveis erros no módulo ou que ele pare de funcionar.

Se todos os pré-requisitos forem atendidos, você poderá instalar o pluguin do Mercado Pago na plataforma da Magento 2.

> PREV_STEP_CARD_PT
>
> Página inicial
>
> Retorne a página inicial da documentação da Magento 2.
>
> [Página inicial](/developers/pt/docs/magento-two/landing)

> NEXT_STEP_CARD_PT
>
> Instalação do pluguin
>
> Conheça as formas de instalação do plugin do Mercado Pago na plataforma Magento 2.
>
> [Instalação do plugin](/developers/pt/docs/magento-two/installation)