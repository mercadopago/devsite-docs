# Administración
 
Actualmente existen diferentes formas en las que los **access tokens** y las **temporal grants** creadas se pueden deshabilitar e invalidar para autorizar solicitudes de recursos protegidos o para cambiarlos por nuevos tokens.
 
* **Expiración**: después del tiempo establecido en el momento de la creación, el token caduca automáticamente y no se puede obtener.
* **Cambio de contraseña de usuario**: existen flujos de cambio de contraseña en los que el vendedor puede revocar todas tus credenciales, incluidos los tokens asociados y las temporal grants.
* **Revocación de la autorización**: revocar una autorización entre el vendedor y la aplicación desencadena la eliminación de todos los tokens y temporal grants asociados con ellos.
* **Lavado de credenciales por fraude**: es posible que el departamento de Seguridad de la información y prevención de fraudes realice una actualización completa de las credenciales de un usuario. Esto desencadena la eliminación de todos los tokens y temporal grants asociados con el vendedor en cuestión.
* **Limpieza de sesión de usuario**: activa la actualización de todos los tokens de vendedores y temporal grants.
* **Eliminación de la aplicación**: cuando se elimina una aplicación, se eliminan todos los tokens y temporal grants que le pertenecen.
 
Puedes recibir notificaciones de webhook cada vez que un vendedor autorice o desautorice tu aplicación. Para configurarlos, lee [Tus aplicaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/dashboard/applications) a través del Dashboard.
 
> NEXT_STEP_CARD_ES
>
> Recursos adicionales
>
> Accede a videos tutoriales y a las APIs.
>
> [Recursos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/security/oauth/resources)