# Gestionar Access Token
 
Actualmente existen diferentes formas en las que un **_Access token_** y sus **_temporary grants_** creados se pueden deshabilitar e invalidar para autorizar solicitudes de recursos protegidos o para cambiarlos por nuevos tokens.

A continuación, tienes una lista detallada sobre cada una de estas maneras en las que estos permisos pueden ser deshabilitados.

* **Expiración**: después del tiempo establecido en el momento de la creación, el token caduca automáticamente y no se puede obtener.
* **Cambio de contraseña de usuario**: existen flujos de cambio de contraseña en los que el vendedor puede revocar todas tus credenciales, incluidos los tokens asociados y las _temporary grants_.
* **Revocación de la autorización**: revocar una autorización entre el vendedor y la aplicación desencadena la eliminación de todos los tokens y _temporary grants_ asociados a ellos.
* **Lavado de credenciales por fraude**: es posible que el departamento de Seguridad de la Información y Prevención de Fraudes realice una actualización completa de las credenciales de un usuario. Esto desencadena la eliminación de todos los tokens y _temporary grants_ asociados al vendedor en cuestión.
* **Limpieza de sesión de usuario**: activa la actualización de todos los tokens de vendedores y _temporary grants_.
* **Eliminación de la aplicación**: cuando se elimina una aplicación, se eliminan todos los tokens y _temporary grants_ que le pertenecen.

Puedes recibir notificaciones Webhooks cada vez que un vendedor autorice o desautorice tu aplicación. Para configurarlas, consulta la documentación de [Webhooks](/developers/es/docs/checkout-pro/additional-content/your-integrations/notifications/webhooks).