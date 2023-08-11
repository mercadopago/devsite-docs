# Gestión de catálogos

La gestión de catálogo se realiza a través de de API REST, con las que podrás realizar las siguientes funcionalidades:

* Realizar la carga masiva de catálogo para múltiples tiendas.
* Verificar que el proceso de carga del catálogo haya sido exitoso.
* Actualizar el status de un ítem a través de su SKU.

El proceso de carga del catálogo se da de forma asíncrona. 

> Recomendamos **monitorear siempre el proceso de carga del catálogo a través del endpoint** ya que,  incluso obteniendo una respuesta positiva al utilizar la carga del catálogo, esta es la forma más segura de verificar que el proceso finalizó correctamente.
