# Probando la Integración

Es muy importante que antes de salir a producción realices pruebas del flujo de pagos, verificando que las configuraciones que realizaste a nivel de preferencia se reflejen efectivamente en el checkout. 
Debes verificar que:

+ La información del bien o servicio a pagar es correcta
+ Se reconoce la cuenta del cliente, porque envías el email
+ Ofreces la formas de pago que deseas
+ Tu cliente es redireccionado correctamente luego de finalizado el pago
+ Se realiza la división del pago correctamente entre tu cuenta marketplace  y la del vendedor

## ¿Cómo realizar las pruebas?

### Crea usuarios de prueba

Para simular el proceso de pago de punta a punta debes crear 3 usuarios de prueba: **marketplace**, **vendedor** y **comprador**.

Debes efectuar la siguiente llamada a la API para crear cada uno de los usuarios.

Utiliza el dato *site_id* para indicar el país donde quieres realizar las pruebas. Argentina: **MLA**, Brasil: **MLB**, México: **MLM**, Venezuela: **MLV**, Chile: **MLC**, Uruguay: **MLU**, Perú: **MPE** y Colombia: **MCO**.

##### Request
```curl 
# Get access token
AT=`curl -s -X POST -H 'content-type: application/x-www-form-urlencoded' 'https://api.mercadopago.com/oauth/token' -d 'grant_type=client_credentials' -d 'client_id=CLIENT_ID' -d 'client_secret=CLIENT_SECRET' | grep -o '"access_token":"[^"]*"' | sed -n 's/.*"access_token":"\(.*\)"/\1/p'`

curl -X POST \
-H "Content-Type: application/json" \
"https://api.mercadopago.com/users/test_user?access_token=$AT" \
-d '{"site_id":"MLA"}'
```
##### Response
```curl
{
    "id": 123456,
    "nickname": "TT123456",
    "password": "qatest123456",
    "site_status": "active",
    "email": "test_user_123456@testuser.com"
}
```

### Tarjetas de prueba

| País 		| Visa 				 | Mastercard        | American Express |
| ---- 		| ---- 				 | ----------        | ---------------- |
| Argentina  	| 4509 9535 6623 3704|5031 7557 3453 0604|3711 803032 57522 |
| Brasil  	| 4235 6477 2802 5682|5031 4332 1540 6351|3753 651535 56885 |
| Chile   	| 4168 8188 4444 7115|5416 7526 0258 2580|3757 781744 61804 |
| Colombia  	| 4013 5406 8274 6260|5254 1336 7440 3564|3743 781877 55283 |
| México  	| 4075 5957 1648 3764|5474 9254 3267 0366|no disponible     |
| Perú    	| 4009 1753 3280 6176|no disponible      |no disponible     |
| Uruguay  	| 4014 6823 8753 2428|5808 8877 7464 1586|no disponible     |
| Venezuela  	| 4966 3823 3110 9310|5177 0761 6430 0010|no disponible     |





### Realiza las pruebas correspondientes

El proceso completo para probar el checkout es el siguiente:

1. Inicia sesión de Mercado Pago con la cuenta del **marketplace** y genera un APP\_ID con todas sus configuraciones y la URL para enviarle al **vendedor** para que vincule su cuenta.
2. Inicia sesión de Mercado Pago con el **vendedor** y vincula la cuenta al marketplace, ingresando en la url configurada.
3. Verifica que has registrados las credenciales del vendedor en el marketplace.
3. Efectúa un pago de prueba. Puedes enviar el mail del **comprador** en la preferencia de pago, o probar el flujo como *invitado*. El email del comprador va a ser requerido al finalizar la compra.
4. Completa los datos del formulario, ingresando los dígitos de una tarjeta de prueba. En fecha de expiración debes ingresar cualquier fecha posterior a la actual y en código de seguridad 3 dígitos.
5. En el nombre del titular de la tarjeta debes ingresar el prefijo correspondiente a lo que quieras probar:  
    * **APRO**: Pago aprobado  
    * **CONT**: Pago pendiente  
    * **CALL**: Rechazo llamar para autorizar  
    * **FUND**: Rechazo por monto insuficiente  
    * **SECU**: Rechazo por código de seguridad  
    * **EXPI**: Rechazo por fecha de expiración  
    * **FORM**: Rechazo por error en formulario  
    * **OTHE**: Rechazo general
6. Valida, en caso de reintento, que se lleven a cabo correctamente.
7. Verifica que la notificación te ha llegado correctamente
8. Verifica que la división del pago entre las cuentas del **marketplace** y la del **vendedor** se ha realizado en forma correca
8. Realiza la devolución de un pago acreditado

