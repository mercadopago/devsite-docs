# Instala Mercado Pago en WooCommerce
<br/>

Instala el módulo de Mercado Pago en WooCommerce de forma automática, desde tu panel de WordPress, o de forma manual, importando un .zip en tu directorio vía FTP.

> La instalación de nuestro módulo no afecta la velocidad de tu tienda.

## Requisitos de instalación

Revisa los requisitos de instalación y sigue los pasos que te indicamos ¡solo te llevará unos minutos instalar el módulo! 

| Requisitos                    | Detalles                                                                  	                |
|-------------------------------|-----------------------------------------------------------------------------------------------|
| WordPress        	            | Requerido 4.9.10 o superior. Probado hasta 5.5.1                                              |
| WooCommerce      	            | Requerido 3.x o superior. Probado hasta 4.4.1                                                 |
| Ambiente                    	| LAMP (Linux, Apache, MySQL, and PHP)                                                    	    |
| Sistema                     	| Linux x86, Windows x86-64                                                        	            |
| Servidor Web                	| Apache 2.x, Nginx 1.7.x                                                               	    |
| Versión PHP                 	| PHP 5.6, 5.5 y 5.4                                        	                                |
| Base de datos               	| MySql 5.6 o superior (Oracle o Percona), MariaDB 10.0 o superior         	                    |
| Dependencias de extensiones 	| PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (para Webservices API)         |
| Configuraciones adicionales   | safe_mode off * memory_limit mayor que 256MB (512MB recomendado)                              |
| SSL                         	| Certificado SSL  	                                                                            |

> WARNING
>
> Importante
>
> Puedes usar el protocolo HTTP mientras estés en modo ‘Pruebas’ y no estés haciendo transacciones reales. Cuando vayas a Producción debes tener un **certificado SSL** para ofrecer una **navegación segura** que proteja tus datos y los de tus clientes. Una vez que lo tengas, la ruta de acceso a tu tienda online responderá al **protocolo HTTPS**.

## Instalación automática

De forma automática, desde la sección ‘Plugins’ de WordPress

Sigue estos pasos para la instalación:

1) Ve a **Añadir** nuevo y busca “WooCommerce Mercado Pago” entre la oferta de módulos de WordPress.

2) Haz clic en Instalar y luego búscalo en la sección “Plugins Instalados”. 

3) Actívalo para empezar a configurar el módulo en tu tienda.

¡Excelente! verás el módulo instalado en la sección Plugins de tu panel de administración. Actívalo para poder hacer las configuraciones necesarias en tu tienda.

## Instalación manual

De forma manual, instala el módulo siguiendo estos pasos:

1) Descarga el archivo .zip directo de nuestro Github o desde el directorio de módulos de WordPress.
                    
> NOTE
>
> [Descargar](https://github.com/mercadopago/cart-woocommerce/archive/master.zip)
>
> [Módulo de Mercado Pago para WooCommerce](https://github.com/mercadopago/cart-woocommerce/archive/master.zip)

2) Descomprime la carpeta descargada y cambia el nombre a ‘woocommerce-mercadopago’.

3) Conéctate a tu servidor web y copia el archivo ‘woocommerce-mercadopago’ en tu directorio de WordPress, dentro de la carpeta ‘Plugins’.

¡Y listo! El módulo de Mercado Pago se instalará en tu tienda online.

Revisa que todo haya salido bien desde tu escritorio de WordPress. Verás el módulo entre tus *Plugins instalados*. Actívalo para pasar a la integración de tu cuenta y los pasos de configuración. 

Cuando actives el plugin, WordPress te llevará a los *Ajustes* de WooCommerce y, de allí, a la sección *Payments*, donde tendrás a mano los [tipos de checkout](https://www.mercadopago.com.ar/developers/es/guides/plugins/woocommerce/introduction/#bookmark_tipos_de_checkout) que ofrecemos para tu tienda online: Checkout Pro y Checkout Personalizado.

> NOTE
>
> Nota
>
> Todos nuestros módulos cuentan con una licencia de código abierto. ¿Quieres participar en su construcción? [Sugiere mejoras y ediciones](https://github.com/mercadopago/cart-woocommerce) en Github.

## Mantenimiento

Te aconsejamos hacer una **copia de seguridad de la tienda online** antes de efectuar cualquier cambio. Una vez lista la copia, elimina todos los archivos relacionados a la versión anterior del módulo. 

Luego ejecuta los pasos de una **nueva instalación** para actualizar tu tienda con la última versión del módulo disponible.

> Mantén el módulo actualizado siempre en la última versión.

<span></span>
> GIT
>
> Mira nuestras actualizaciones en GitHub
>
> Consulte GitHub para obtener detalles sobre las [últimas actualizaciones productivas](https://github.com/mercadopago/cart-woocommerce/blob/master/CHANGELOG.md).

---

### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Integrar Mercado Pago en WooCommerce
>
> Conecta tu cuenta de Mercado Pago al módulo y captura los pagos que recibas por tus ventas online.
>
> 
> [Integrar](https://www.mercadopago.com.ar/developers/es/guides/plugins/woocommerce/integration/)