# Instala Mercado Pago para PrestaShop 1.6 & 1.7


Instala el módulo de Mercado Pago de forma automática, a través del marketplace o desde tu panel de PrestaShop. 

> NOTE
>
> Nota
>
> La instalación de nuestro módulo no afecta la velocidad de tu tienda.

## Requisitos de instalación

Es importante que revises los requerimientos para poder instalar nuestro módulo. Luego sigue los pasos que te indicamos. ¡Sólo te llevará unos minutos!

| Requisitos                    | Detalles                                                                  	                |
|-------------------------------|-----------------------------------------------------------------------------------------------|
| Versiones        	            | Prestashop 1.6.x - 1.7.x                                                                      |
| Ambiente                    	| LAMP (Linux, Apache, MySQL, and PHP) o LNMP stack                                             |
| Sistema                     	| Linux x86, Windows x86-64                                                        	            |
| Servidor Web                	| Apache 2.x, Nginx 1.7.x                                                               	    |
| Versión PHP                 	| PHP 5.6 hasta 7.1 para PrestaShop 1.6 <br> PHP 5.6 o superior para PrestaShop 1.7             |
| Base de datos               	| MySQL 5.6 o superior (Oracle o Percona)                                  	                    |
| Dependencias de extensiones 	| PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (para Webservices API)         |
| Configuraciones adicionales   | safe_mode off * memory_limite mayor que 256MB (512MB recomendado)                             |
| SSL                         	| Certificado SSL  	                                                                            |

> WARNING
>
> Importante
>
> Puedes usar el protocolo HTTP mientras estés en modo "Pruebas" y no estés haciendo transacciones reales. Cuando vayas a Producción debes tener un **certificado SSL** para ofrecer una **navegación segura** que proteja tus datos y los de tus clientes. Una vez que lo tengas, la ruta de acceso a tu tienda online responderá al **protocolo HTTPS**.

## Instalación automática

Instala Mercado Pago para PrestaShop de forma automática siguiendo estos pasos desde la sección "Personalizar" en tu administrador:

1. Ve a Catálogo de Módulos y busca "Mercado Pago" entre la oferta de módulos.
2. Haz clic en Instalar y luego búscalo en la sección "Module Manager". 
3. Actívalo para empezar a configurar el módulo en tu tienda.

**¡Excelente! Verás el módulo instalado en la sección Personalizar de tu panel de administración.**

## Instalación manual

Instala el módulo siguiendo estos pasos:

1. [Descarga el archivo .zip](https://github.com/mercadopago/cart-prestashop-7/raw/master/mercadopago.zip) directo de nuestro Github o desde el [directorio](https://addons.prestashop.com/es/pago-tarjeta-carteras-digitales/23962-mercado-pago.html) de módulos de PrestaShop.
2. Ve a la sección "Module Manager" en la sección "Personalizar" de tu administrador.
3. Haz clic en el botón Subir un Módulo en el extremo superior derecho.
4. Seleccione o arrastre el archivo mercadopago.zip descargado anteriormente.
5. ¡Y listo! El módulo de Mercado Pago se instalará en tu tienda online.

**Revisa que todo haya salido bien desde tu escritorio de PrestaShop. Verás el módulo entre tus Plugins instalados. Actívalo para pasar a la integración de tu cuenta y los pasos de configuración.**

## Mantenimiento

Te aconsejamos hacer una copia de seguridad de tu página antes de efectuar cualquier cambio. Una vez lista la copia, elimina todos los archivos relacionados a la versión anterior del módulo. 

Luego ejecuta los pasos de una nueva instalación para actualizar tu página con la última versión del módulo de Mercado Pago disponible. 

> Mantén el módulo actualizado siempre en la última versión. 

<span></span>

> NOTE
>
> Nota
>
> ¡Actualizar el plugin solo te llevará unos minutos! La nueva versión no afecta la velocidad de carga de tu página ni el tiempo de procesamiento de los pagos.

### Próximo paso

> LEFT_BUTTON_REQUIRED_ES
>
> Integrar Mercado Pago en PrestaShop
>
> Conecta tu cuenta de Mercado Pago al módulo y captura los pagos que recibas por tus ventas online.
>
> 
> [Integrar](https://www.mercadopago.com.ar/developers/es/guides/plugins/prestashop/integration/)