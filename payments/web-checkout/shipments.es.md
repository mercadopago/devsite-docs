# Mercado Envíos

Implementa la logística de tu negocio con Mercado Envíos.

Te damos todo resuelto: Recibe el pago del producto y del envío en la misma operación. Sólo tienes que imprimir la etiqueta de Mercado Envíos y despachar el paquete en el correo.

Te protegemos frente a chargebacks o pérdidas en el correo, sin necesidad de que tengas que presentar documentación.


## Cómo funciona

La siguiente documentación te permitirá ofrecer en el checkout de Mercado Pago una opción de envío y que el cliente pague el costo del envío junto con el pago del producto.

Te recomendamos integrar la calculadora de costos de envíos en tu checkout.


## Cómo implementarlo


### Paso 1: Activa tu cuenta para utilizar Mercado Envíos
[Activa tu cuenta](http://shipping.mercadopago.com.ar/optin/doOptin?execution=e1s1&goUrl=&buttonText=) cargando tu dirección. La misma debe ser la dirección de despacho y será utilizada para calcular el costo del envío.

### Paso 2: Agrega Mercado Envíos a tu checkout
Agrega las dimensiones y peso de tus productos en la preferencia de pago.

```
{
    ...
    "shipments": {
        "mode": "me2",
        "dimensions": "30x30x30,500"
    }
    ...
}
```
> NOTE
>
> Nota
>
> El formato de las dimensiones
```alto x ancho x largo (centímetros), peso (gramos)```
> Si indicas mal las dimensiones y no coinciden con el paquete físico, el carrier podría no admitir el envío. En caso de que te admitan el paquete, te descontaremos de tu cuenta la diferencia automáticamente.

#### Retiro por sucursal
Puedes ofrecer la posibilidad de retirar el producto por tu local, indicandole al comprador dónde y cuándo debe retirarlo. Para esto, debes incluir:

```
{
    ...
    "shipments": {
        "mode": "me2",
        "dimensions": "30x30x30,500",
        "local_pickup": true
    }
    ...
}
```

#### Ofrece envíos gratis

Debes indicar el medio de envío que vas a ofrecer de manera gratuita. El monto del mismo te será debitado de tu cuenta al momento de recibir un pago.

```
{
    ...
    "shipments": {
        "mode": "me2",
        "dimensions": "30x30x30,500",
        "free_methods": [
            {
                "id": 73328
            }
        ]
    }
    ...
}
```

Consulta los id de [medio de envío](https://api.mercadolibre.com/sites/MLA/shipping_methods?marketplace=NONE) disponibles.


#### Integralo en el Checkout

Un ejemplo de Checkout con MercadoEnvíos queda de la siguiente manera:

[[[
```php
<?php
  require_once ('mercadopago.php');

  $mp = new MP('CLIENT_ID', 'CLIENT_SECRET');

  $preference_data = array(
  	"items" => array(
  		array(
  			"title" => "Multicolor kite",
  			"quantity" => 1,
  			"currency_id" => "ARS", // Available currencies at: https://api.mercadopago.com/currencies
  			"unit_price" => 10.00
  		)
  	),
  	"shipments" => array(
  		"mode" => "me2",
  		"dimensions" => "30x30x30,500",
  		"local_pickup" => true,
  		"free_methods" => array(
  			array(
  				"id" => 73328
  			)
  		),
  		"default_shipping_method" => 73328,
  		"zip_code" => "5700"
  	)
  );

  $preference = $mp->create_preference($preference_data);
?>
```
```java
MP mp = new MP("CLIENT_ID", "CLIENT_SECRET");

	String preferenceData = "{'items':"+
		"[{"+
			"'title':'Multicolor kite',"+
			"'quantity':1,"+
			"'currency_id':'MXN',"+ // Available currencies at: https://api.mercadopago.com/currencies
			"'unit_price':10.0"+
		"}],"+
		"'shipments':{"+
			"'mode':'me2',"+
			"'dimensions':'30x30x30,500',"+
			"'local_pickup':true,"+
			"'free_methods':["+
				"{'id':501245}"+
			"],"+
			"'default_shipping_method':501245,"+
			"'zip_code':'22615'"+
		"}"+
	"}";

	JSONObject preference = mp.createPreference(preferenceData);

	String initPoint = preference.getJSONObject("response").getString("init_point");
```
```csharp
<%@ Page Language="c#" %>
<%@ Import Namespace="mercadopago" %>
<%@ Import Namespace="System.Collections" %>

<%
	MP mp = new MP("CLIENT_ID", "CLIENT_SECRET");
	
	String preferenceData = "{\"items\":"+
		"[{"+
			"\"title\":\"Multicolor kite\","+
			"\"quantity\":1,"+
			"\"currency_id\":\"MXN\","+ <%-- Available currencies at: https://api.mercadopago.com/currencies --%>
			"\"unit_price\":10.0"+
		"}],"+
		"\"shipments\":{"+
			"\"mode\":\"me2\","+
			"\"dimensions\":\"30x30x30,500\","+
			"\"local_pickup\":true,"+
			"\"free_methods\":["+
				"{\"id\":501245}"+
			"],"+
			"\"default_shipping_method\":501245,"+
			"\"zip_code\":\"22615\""+
		"}"+
	"}";

	Hashtable preference = mp.createPreference(preferenceData);    
%>
```
```javascript
exports.run = function (req, res) {
    var mp = new MP ("CLIENT_ID", "CLIENT_SECRET");

    var preference = {
        "items": [
            {
                "title": "Multicolor kite",
                "quantity": 1,
                "currency_id": "MXN", // Available currencies at: https://api.mercadopago.com/currencies
                "unit_price": 10.0
            }
        ],
        "shipments": {
            "mode": "me2",
            "dimensions": "30x30x30,500",
            "local_pickup": true,
            "free_methods": [
                {"id": 501245}
            ],
            "default_shipping_method": 501245,
            "zip_code": "22615"
        }
    };

    mp.createPreference (preference, function (err, data){
        if (err) {
            res.send (err);
        } else {
            res.render ("button", {"preference": data});
        }
    });
};
```
```ruby
mp = MercadoPago.new('CLIENT_ID', 'CLIENT_SECRET')
		preferenceData = {
			"items" => [
				[
					"title"=>"Multicolor kite",
					"quantity"=>1,
					"unit_price"=>10.0,
					"currency_id"=>"MXN" # Available currencies at: https://api.mercadopago.com/currencies
				]
			],
			"shipments" => [
				"mode" => "me2",
				"dimensions"=>"30x30x30,500",
				"local_pickup" => true,
				"free_methods" => [
					[
						"id" => 501245
					]
				],
				"default_shipping_method" => 501245,
				"zip_code" => "22615"
			]
		}
		preference = mp.create_preference(preferenceData)
```
```python
preference = {
		"items": [
			{
				"title": "Multicolor kite",
				"quantity": 1,
				"currency_id": "MXN", # Available currencies at: https://api.mercadopago.com/currencies
				"unit_price": 10.0
			}
		],
		"shipments": {
			"mode": "me2",
			"dimensions": "30x30x30,500",
			"local_pickup": true,
			"free_methods": [
				{"id": 501245}
			],
			"default_shipping_method": 501245,
			"zip_code": "22615"
		}
	}
	mp = mercadopago.MP("CLIENT_ID", "CLIENT_SECRET")

	preferenceResult = mp.create_preference(preference)

	url = preferenceResult["response"]["init_point"]
```
]]]

```html

<!DOCTYPE html>
<html>
	<head>
		<title>Pay</title>
	</head>
	<body>
		<a href="<?php echo $preference['response']['init_point']; ?>">Pay</a>
	</body>
</html>
```



### Paso 3: Mejora la experiencia con la calculadora de cuotas

Te damos la posibilidad de pre-calcular el costo y los tiempos de envío para que tus compradores puedan verlo previo al checkout.

Para poder realizar el cálculo debes enviar:

* `dimensions`: Es el tamaño del producto que quieres enviar, el formato es: alto x ancho x largo (centímetros), peso (gramos). Consulta los valores admitidos por OCA.

* `zip_code`: Es el código postal de tu comprador.

* `item_price`: Es el precio del producto que vas a enviar. Si son múltiples productos, indicá el precio total.

* `free_method` (opcional): Puedes ofrecer envío gratis, esto te permite generar más ventas. Sólo debes indicarnos el medio de envío que vas a ofrecer como gratis. Luego, el monto del mismo te será debitado de tu cuenta al momento de recibir un pago. 


### Paso 4: Imprimí la etiqueta

Cada vez que recibas un pago, te llegará un e-mail con un botón para imprimir la etiqueta. 
También puedes ver los [pagos pendientes de impresión]() desde tu cuenta de Mercado Pago.

En una caja incluye todo lo que vendiste. Pega la etiqueta en el paquete y despáchalo. No tendrás que pagarle nada al carrier porque las etiquetas de MercadoEnvíos estarán pagas con el dinero que pagó tu comprador para el envío.

### Paso 5: Seguimiento
Utiliza nuestras herramientas para hacer el seguimiento.
Tanto en el listado de cobros, como a través de nuestras APIs vas a poder realizar el seguimiento de tus envíos.

Adicionalmente te podemos avisar cuando un envío esté listo para despachar mediante [notificaciones](../notification/ipn.es.md) que se envían desde los servidores de MercadoPago a los tuyos. Esto te permitirá administrar tu stock y conocer el estado de los pagos y envíos.
 
