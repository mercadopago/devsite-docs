# Sucursales y Cajas

Las **sucursales** y **cajas** son importantes para recibir pagos presenciales con QR. Te permiten crear tu tienda y asignar sus puntos de venta.

![Cajas y Sucursales](/images/mobile/stores_pos.es.png)

## Sucursales

Es una **tienda física** en la que tus clientes pueden adquirir tus productos o servicios. Puedes tener varias sucursales en una misma cuenta.

### Beneficios

Los beneficios de crear sucursales son:

- **Lograr trazabilidad**. Cada pago quedará asociado a una sucursal y al momento de obtener tus reportes de conciliación será valioso para identificar transacciones por sucursal.
- **Visibilidad en mapas de sucursales**. Las sucursales creadas aparecen en el mapa de las app de Mercado Pago o Mercado Libre a medida que vayan teniendo pagos. De esta manera, dan visibilidad a todos los clientes sobre la existencia de la tienda.
- **Aportar una mejor organización de las cajas**.

### Crear una sucursal

Para crear una sucursal tienes que declarar su nombre, horarios de trabajo, ubicación y alguna referencia que lo identifique.

Accede a [Crear sucursal](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/stores/_users_user_id_stores/post) en nuestra Referencia de API para crear una sucursal. Allí encontrarás toda la información que necesitas.

> WARNING
>
> Importante
>
> 1. Debes conocer tu `country_id` del país donde te encuentres en [nuestra API de países](https://api.mercadolibre.com/countries).
> 2. El `state_name` debe coincidir con los **estados** según [el país en cuestión](https://api.mercadolibre.com/countries/$country_id).
> 3. El `city_name` debe coincidir con las **ciudades** según [sus estados](https://api.mercadolibre.com/states/$state_id).

## Cajas

Es un **punto de venta** que existe en una sucursal o tienda física. Cada caja tendrá vinculado un código QR unívoco.

### Crear una caja

Al tener creadas tus sucursales, puedes crear tus cajas. Ten en cuenta lo siguiente:

| Término | Descripción |
| --- | --- |
| `EXTERNAL_STORE_ID` | Vincula la caja con la sucursal. Es un campo requerido y es el mismo `external_id` de la Sucursal previamente creada. |
| `EXTERNAL_ID` | Identifica unívocamente cada caja. Es requerido y no se puede modificar, tampoco repetir en una misma cuenta de Mercado Pago. También lo puedes encontrar como `EXTERNAL_POS_ID`. |

Accede a [Crear caja](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/pos/_pos/post) en nuestra Referencia de API para crear una caja. Allí encontrarás toda la información que necesitas.

> NOTE
>
> Nota
>
> Una vez creada la caja, podrás ver en el `Response` los links a distintos entregables del QR, junto con otros datos relevantes de la caja.

