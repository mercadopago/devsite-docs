#Prestashop 1.7


###Mercado Pago Module (Prestashop 1.7.x)

* [Introdução](#bookmark_introdução)
* [Requisitos de Instalação](#bookmark_requisitos_de_instalação)
* [Instalação](#bookmark_instalação)
* [Integração](#bookmark_integração)
* [Receber Pagamentos](#bookmark_receber_pagamentos)

##Introdução

Como imaginarás, una página web sin un procesador de pagos no es más que un catálogo en línea. Tus clientes podrán ver tus productos pero no podrán pagarte por ellos. 

> Somos partners oficiales de Prestashop, un gestor de contenidos con el que puedes crear tiendas online a tu medida.

Piensa en grande. Instala la pasarela de pagos de Mercado Pago en Prestashop y lleva tus ventas a otro nivel con la mejor experiencia de compra:

* Haz **promociones** y vende en cuotas con la mejor **financiación** posible
* Libera el dinero de tus ventas al instante.
* Elige el **checkout** que quieras ofrecer a tus clientes.
* **Medios de pago** principales de cada país en el que operamos.
* **Compra con un clic:** recordamos los datos de tus clientes, ellos solo ingresan el código de seguridad de su tarjeta
* **Pago como invitado:** no hace falta que tus clientes abran una cuenta en Mercado Pago
* **Devolución** de pagos 
* **Cancelación** de pagos pendientes
* Rechaza o acepta pagos **de forma automática**

> **¿Eres desarrollador?** Esta guía también está pensada para que hagas más rápido tu trabajo de instalación, integración y configuración.

> **¿Eres partner de Mercado Pago?** No olvides ingresar tu Sponsor_ID, así identificamos todas tus transacciones y sabemos cuántas ventas procesa tu cuenta. 

##Requisitos de Instalação

A nivel técnico, tu versión de Prestashop debe cumplir con estos requisitos: 

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

>Puedes usar el protocolo HTTP mientras estés en modo ‘Pruebas’ y no estés haciendo transacciones reales. Cuando vayas a Producción debes tener un **certificado SSL** para ofrecer una **navegación segura** y proteger tus datos y los de tus clientes. Una vez que lo tengas, la ruta de acceso a tu tienda online responderá al **protocolo HTTPS**.

##Instalação

1) Baixe o arquivo mercadopago.zip em nosso Github.

> NOTE
>
> [DOWNLOAD](https://github.com/mercadopago/cart-prestashop-6/blob/master/mercadopago.zip)
>
> [Módulo Mercado Pago para Prestashop 1.7](https://github.com/mercadopago/cart-prestashop-6/blob/master/mercadopago.zip)

2) Acesse o painel administrativo do Prestashop em **Módulos** -> **Módulos e Serviços**, clicar no botão **"Enviar um Módulo"** e selecionar o arquivo **mercadopago.zip** baixado anteriormente.

3) Muito bem! O módulo do Mercado Pago foi instalado com sucesso.

##Integração

No necesitas saber diseñar o programar para activar Mercado Pago en tu tienda de Prestashop. Una vez instalado el módulo, esto es lo que debes hacer:

1. Crea una cuenta vendedor en Mercado Pago si todavía no tienes una.
2. Obtén tus [credenciales](https://www.mercadopago.com.ar/developers/es/guides/localization/credentials) y pégalas en los campos correspondientes para integrar el módulo con tu cuenta.
3. Configura tus preferencias de pago y otros ajustes avanzados.
4. Homologa tu cuenta para [ir a Producción](https://www.mercadopago.com.ar/developers/es/guides/payments/api/goto-production/) y recibir pagos reales.

##Receber Pagamentos

Configura lo básico del checkout y haz que tu cliente termine su compra de forma rápida, fácil y segura:

> Checkout Básico: acepta pagos con tarjetas de crédito o débito, dinero en cuenta de Mercado Pago y dinero en efectivo.

Cuanto mejor sea la experiencia, ¡más conversiones! Sigue estos pasos para configurar el plugin de Mercado Pago:

####**1. Configuração básica**

Crea tus preferencias de pago:

- Ingresa tu marca o el nombre de tu tienda para las facturas que enviemos a tus clientes por cada compra.
- Selecciona a qué categoría pertenecen tus productos.
- Elige los [medios de pago disponibles](https://www.mercadopago.com.ar/developers/es/guides/localization/payment-methods/) para tus clientes según el país en el que operes y el tipo de checkout que estés configurando. 
- Establece el máximo de cuotas en el que podrán pagarte.
- Vencimientos de pagos en efectivo: establece en cuántos días caducarán los pagos del checkout personalizado.  

![Configuração básica](/images/prestashop/br_basico.png)

####**2. Configuração avançada**

Personaliza la experiencia de compra con los ajustes avanzados que correspondan a cada tipo de checkout:

- Que tus clientes vuelvan a tu tienda cada vez que terminen una compra.
- Aceptar y rechazar pagos de forma automática, saltando las instancias de cobros en revisión con el modo binario.
- Tiempo máximo de los links de pago con las preferencias de compra de tus clientes que dejan el proceso de compra a mitad de camino.
- Cupones de descuento
- Cuándo reducir el inventario en el checkout personalizado de pagos en efectivo

![Configuração avanzada](/images/prestashop/br_avanzado.png)

####**3. Teste o módulo**

Haz pruebas:

- Simula pagos como si fueras uno de tus clientes comprando en el sitio.
- Asegúrate de que el flujo funcione correctamente y sea fácil de usar. 
- ¿Ves que todo va bien? Desactiva el modo pruebas y ¡empieza a recibir pagos reales! 

![Testar loja](/images/prestashop/br_testear.png)

> Por defecto, te dejamos este modo activo. Desactívalo cuando tengas la cuenta homologada y ve a Producción solo cuando hayas comprobado que el flujo de compra funciona y que los pagos de prueba fueron procesados. 

####**4. Ir para produção (‘Go live!’)**

Antes de salir a cobrar, necesitamos que pases por el proceso de homologación. En él te pediremos que completes un formulario con información relacionada a tu negocio. 

> Consulta los [requisitos para ir a producción.](https://www.mercadopago.com.ar/developers/es/guides/payments/api/goto-production/)

¿Ya lo hiciste? Entonces podrás pasar rápidamente de ‘Pruebas’ a ‘Producción’ desde el panel de configuración de Mercado Pago. 

![Começar a vender](/images/prestashop/br_vender.png)

**¡Y listo!** Ahora podrás maximizar tu conversión o la de tus clientes con la experiencia de compra online de Mercado Pago. 