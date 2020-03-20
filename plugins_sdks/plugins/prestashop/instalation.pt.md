# Instale o Mercado Pago para PrestaShop 1.6 & 1.7
<br/>

Instale o Mercado Pago automaticamente pelo marketplace na PrestaShop ou manualmente, importando um arquivo .zip no seu diretório vía FTP.

> NOTE
>
> Nota
>
> A instalação do nosso módulo não afeta a velocidade da sua loja.

## Requisitos de instalação

Revise os requisitos de instalação e siga as etapas que indicamos. A instalação do módulo leva poucos minutos!

| Requisitos                    | Detalhes                                                                  	                |
|-------------------------------|-----------------------------------------------------------------------------------------------|
| Versão        	            | Prestashop 1.6.x - 1.7.x                                                                      |
| Ambiente                    	| LAMP (Linux, Apache, MySQL, and PHP) ou LNMP stack                                            |
| Sistema                     	| Linux x86, Windows x86-64                                                        	            |
| Servidor Web                	| Apache 2.x, Nginx 1.7.x                                                               	    |
| Versão PHP                 	| PHP 5.6 até 7.1 para PrestaShop 1.6 <br> PHP 5.6 ou superior para PrestaShop 1.7              |
| Base de dados               	| MySQL 5.6 ou superior (Oracle ou Percona)                               	                    |
| Dependência de extensões    	| PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (para Webservices API)         |
| Configuração adicional        | safe_mode off * memory_limite maior que 256MB (512MB recomendado)                             |
| SSL                         	| Certificado SSL  	                                                                            |

> WARNING
>
> Importante
>
> Você pode usar o protocolo HTTP no modo "Sandbox" e não fazer transações reais. Quando for a Produção, você deve ter um **certificado SSL** para oferecer **navegação segura** e proteger seus dados e os dos seus clientes. Depois, a rota de acesso para a sua loja virtual responderá ao **protocolo HTTPS**.

## Instalação automática

Instale o Mercado Pago para PrestaShop automaticamente seguindo estas etapas na seção "Personalizar" do seu administrador:

1. Vá ao Catálogo de Módulos e procure por "Mercado Pago" entre as ofertas dos módulos.
2. Clique em Instalar e procure-o na seção "Gerenciador de módulos".
3. Ative-o para começar a configurar o módulo na sua loja.

**Excelente! Você verá o módulo instalado na seção Personalizar do seu painel de administração**

## Instalação manual

Instale o módulo seguindo estas etapas:

1. [Baixe o arquivo .zip](https://github.com/mercadopago/cart-prestashop-7/archive/master.zip) diretamente do nosso Github ou do [diretório](https://addons.prestashop.com/es/pago-tarjeta-carteras-digitales/23962-mercado-pago.html) de módulos do PrestaShop.
2. Vá à seção "Module Manager", na seção "Personalizar" do seu administrador.
3. Clique no botão Enviar um módulo no canto superior direito.
4. Selecione ou arraste o arquivo Mercadopago.zip baixado anteriormente.
5. Pronto! O módulo do Mercado Pago será instalado na sua loja online.

**Verifique se tudo correu bem no seu painel do PrestaShop. Você verá o módulo entre os plugins instalados. Ative-o para prosseguir para a integração da sua conta e as etapas de configuração.**

## Manutenção

Aconselhamos que você faça uma cópia de segurança da loja on-line antes de fazer qualquer alteração. Ao ter esta cópia pronta, exclua todos os arquivos relacionados à versão anterior do módulo. 

A seguir, execute as etapas de uma nova instalação para atualizar sua loja com a última versão disponível do módulo. 

> Mantenha o módulo sempre atualizado com a última versão.

## Versão 4.1.0 - Tudo o que você precisa saber

Estas são as melhorias técnicas que você encontrará em nossa versão mais recente:

**Break Change**
- Nesta versão, você deve colar o public_key de sandbox e de produção para poder vender. Antes de atualizar o plugin, ative o modo de manutenção e faça alguns testes para verificar se tudo ocorreu como esperado.

**Fixes:**
- Corrigimos o layout mobile para o Mercado Pago Checkout.
- Corrigimos a criação do pedido, permitindo que a função recupere o valor da customer_secure_key.

**Melhorias:** 
- Agora, o Checkout do Mercado Pago funciona através de um modal: seus clientes podem concluir a compra sem sair do site.
- Refatoramos a tela de configuração do plugin.
- Refatoramos a estrutura de código do plugin.
- Unimos as versões do plugin para PS1.6 e PS1.7.

**Adicionamos:**
- Novas traduções para o Chile e Uruguai.
- Checkout Personalizado com:
 - Modo Binário.
 - Desconto por pagar com o Mercado Pago.
- Ticket Checkout com:
 - Selecione os meios de pagamento disponíveis.
 - Escolha a data de validade.
 - Desconto por pagar com o Mercado Pago.

**Suspendemos temporariamente alguns recursos da versão 4.1.0 do plugin:**
- Mercado Envios.
- Cupons de desconto.
- Calculadora de parcelas.

> NOTE
>
> Nota
>
> A atualização do plugin leva apenas alguns minutos! A nova versão não afeta a velocidade de carregamento da sua loja ou o tempo de processamento dos pagamentos.

### Próximo passo

> LEFT_BUTTON_REQUIRED_PT
>
> Integrar Mercado Pago no PrestaShop
>
> Conecte sua conta do Mercado Pago ao módulo e capture os pagamentos que você receber pelas suas vendas on-line.
>
> 
> [Integrar](https://www.mercadopago.com.ar/developers/pt/plugins_sdks/plugins/prestashop/integration/)