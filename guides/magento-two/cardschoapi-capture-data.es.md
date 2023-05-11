# Captura de datos del cliente en el formulario de pago

Esta función permite capturar documentos de clientes a partir de un campo adicional en el formulario de pago. Si la tienda aún no captura estos datos, simplemente seleccione la opción **Enable** en **Capture document identification**. 

La activación de esta funcionalidad proporciona la inserción automática del CPF del cliente en el formulario de pago, optimizando la experiencia de llenado de datos.

![Capture data](/images/magento-two/captura_de_dados.gif)


> ADVERTENCIA
>
> Importante
>
> Nuestro módulo intentará capturar la información del campo `vat_id` de tu tienda. Si no lo encuentra, sobrescribirá su configuración, ya que este es un valor obligatorio para el pago.