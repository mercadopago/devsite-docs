# Magento - Mercado Pago Module (v1.4.x to 1.9.x)

* [Caracteristicas](#features)
* [Requerimientos](#requirements)
* [Versiones soportadas](#available_versions)
* [Feedback](#feedback)


Módulo para Magento que integra Mercado Pago como un metodo de pago en tu e-commerce. 
   Proporciona la funcionalidad para procesar pagos online utilizando la API de MercadoPago. 

<a name="features"></a>
## Caracteristicas ##

Opciones de pago para tu negocio:

Ofrecemos dos metodos de pago que facilitan el procesamiento seguro de pagos por cualquier persona en cualquier lugar.


###Checkout Basico

Ideal para usuarios que buscan estar en produccion rapido y facilmente.

* Integracion web mas simple.
* Experiencia de compra limitada — puedes mostrar el checkout como una ventana, un link, un modal o un iframe. 
- Almacenar tarjetas para un pago rapido. 
- Acepta pagos en efectivo, transferencias bancarias y dinero en cuenta ademas de las tarjetas de debito y credito. 
- Acepta cupones de descuento de mercadopago.

*Disponible para Argentina, Brasil, Chile, Colombia, Mexico, Peru, Uruguay y Venezuela*

###Checkout Personalizado

Oferce un checkout completamente personalizado para tu negocio mediante nuestro API de Pagos.

- Control completo de la experiencia de pagos
- Almacenar tarjetas par aun pago rapido.
- Acepta pagos en efectivo, transferencias bancarias y dinero en cuenta ademas de las tarjetas de debito y credito. 
- Acepta cupones de descuento de mercadopago. 
* Aceptar pagos con 2 medios <sup>*</sup> 

*Disponible para Argentina, Brasil, Chile, Colombia, Mexico, Peru y Venezuela*




###Compatibilidad con extensiones OSC

Esta caracteristica permite una facil integracion con dos de los mas usadas extensiones para pagos del mercado.
* [Inovarti OSC](http://onestepcheckout.com.br)
* Idcheckoutvm




###Integra Mercado Envios

Esta caracteristica permite configurar e integrar MercadoEnvios como otra opcion de envios para tus clientes.
Incluye la habilidad de imprimir las etiquetas directamente desde el Panel de Administracion de Magento.

*Disponible para Argentina, Brasil y Mexico solo con Checkout basico*



###Pagos Recurrentes<sup>*</sup>

Esta caracteristica integra la funciondad de "perfiles recurrentes" de Magento con la funcionalidad de "Pagos Recurrentes" de MercadoPago.

Los productos comprados con esta modalidad de pago pueden ser productos simples y productos virtuales.

Con este medio de pago los usuarios autorizan a Mercado Pago a realizar pagos recurrentes.

Despues de realizar un pago el usuario peude cancelar pausar o reiniciar un pago recurrente (Esta funcionalidad puede ser activada/desactivada desde la configuracion del plugin).


###Devoluciones y Cancelaciones entre Mercado Pago y Magento

Esta caracteristica sincroniza ordenes entre Mercado Pago y Magento.

Las devoluciones y/o cancelaciones hechas desde Magento son sincronizadas en Mercado Pago y vice versa.

Esta caracteristica puede ser activada/desactivada dentro del panel de administracion de Magento.



###Pagina de exito configurable

Esta caracteristica permite configurar la pagina de exito a la cual Magento redirecciona a un usuario una vez finalizado un pago con MercadoPago.
Dentro del panel de administracion puedes seleccionar entre una pagina de exito de Mercado Pago o una pagina estandar de Magento.



###Calculadora de Cuotas<sup>*</sup>

Esta caracteristica permite agregar una calculador de cuotas dentro las paginas magento esto puede ser activado/desactivado desde el panel de administracion de Magento.

El calculador puede ser visualizado dentro de un producto, carrito o ambas paginas.
El usuario puede usar la calculadora de cuotas para ver las opciones disponibles para pagar y calcular el monto final a pagar.

*Disponible para Argentina, Brasil, Chile, Colombia, Mexico, Peru, Uruguay y Venezuela*



###Pagos con dos medios en un checkout personalizado<sup>*</sup>

Esta caracteristica permite a un usuario dividir un pago usando dos diferentes tarjetas.

 
 
###Status Update Cron between Magento and MercadoPago<sup>*</sup>

Esta función permite verificar y actualizar los estados de las ordenes de Magento, dependiendo de su estado en MercadoPago
En el admin, puede definir el periodo de ejecucion y limitar las ordenens a evaluar mediante una ventana de tiempo.
 

<sup>*</sup>*Solo para v1.6.x to 1.9.x*



<a name="requirements"></a>
## Requerimientos: ##

**Sistema Operativo**

<ul>
<li>Linux x86-64</li>
</ul>

**Servidor Web**

<ul>
<li>Apache 2.x</li>
<li>Nginx 1.7.x</li>
</ul>

**Base de Datos**

<ul><li>MySQL 5.6 (Oracle o Percona)</li></ul>

**PHP**

<ul>
<li>PHP 5.4.x</li>
<li>PHP 5.5.x</li>
</ul>
  **Extensiones requeridas:**

  PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl

**Certificado SSL**

Es un requisito contar con un certificado SSL y el formulario de pagos debe estar bajo un protocolo https.
Durante el modo sandbox puedes operar sobre http pero para la homologacion necesitaras adquirir el certificado en caso no lo tengas.

<a name="available_versions"></a>
## Versiones Disponibles ##
<table>
  <thead>
    <tr>
      <th>Version del Plugin</th>
      <th>Estado</th>
      <th>Versiones Compatibls</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/mercadopago/cart-magento/tree/master/1.4.x-1.5.x">v1.4.x - 1.5.x</a><sup>**</sup></td>
      <td>Deprecado </td>
      <td>Community Edition 1.4.x - 1.5.x<br />Enterprise Edition 1.9.x - 1.10.x</td>
    </tr>
    <tr>
      <td><a href="https://github.com/mercadopago/cart-magento/tree/master/1.6.x-1.9.x">v1.6.x - v1.9.x</a><sup>**</sup></td>
      <td>Stable (Version Actual)</td>
      <td>Community Edition 1.6.x - 1.9.x<br />Enterprise Edition 1.11.x - 1.14.x</td>
    </tr>
  </tbody>
</table>

<sup>**</sup>Click en los links sobre las instruccioes en la instalacion y configuracion del modulo.

<a name="Feedback"></a>
## Feedback ##

Queremos conocer tu opinion, por favor responde el siguiente formulario.

* [Portuguese](http://goo.gl/forms/2n5jWHaQbfEtdy0E2)
* [Spanish](http://goo.gl/forms/A9bm8WuqTIZ89MI22)