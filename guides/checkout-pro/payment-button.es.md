# Botón de pago

Después de integrar Checkout Pro, es posible definir y personalizar la interfaz que se muestra al usuario, incluido el modo de entrada a la pantalla de checkout.

Por defecto, Checkout Pro se abre con un botón de pago direccionando al usuario para completar la compra, sin embargo, también es posible personalizar un botón que permita abrir el checkout desde cualquier elemento deseado en el sitio web, sin mostrar necesariamente el botón de pago para el comprador.

Además, Checkout Pro también se puede abrir automáticamente, sin ninguna acción por parte del comprador.

## Apertura de botón personalizado

La apertura con botón personalizado se realiza a través del método `open`, que permite abrir el Checkout desde cualquier elemento del sitio web, sin que necesariamente se muestre el botón de pago al comprador.

Para configurar la apertura con un botón personalizado, agrega el siguiente código HTML directamente en su proyecto.

[[[
```html
<!DOCTYPE html>
<html>
<head>
	<script src="https://sdk.mercadopago.com/js/v2"></script>
</head>
<body>
	<script>
    // Agregar credenciales de SDK
		const mp = new MercadoPago('PUBLIC_KEY', {
		    locale: 'pt-BR'
		});
		const checkout = mp.checkout({
		  preference: {
		      id: 'YOUR_PREFERENCE_ID' // Indica el ID de preferencia
		  }
		});
	</script>	 	 
	<div class="cho-container">
      <li>
      <label for="radio">Botão open-radio: </label>
      <input type="radio" id="checkout-open-radio" onclick="checkout.open()">
       </li>


	</div>
</body>
</html>
```
]]]

## Apertura automática

La apertura automática se realiza a través del parámetro `autoOpen` en las opciones de inicio de pago. Este parámetro permitirá a los compradores interactuar con un botón o cualquier otro elemento para abrir el checkout.

Para configurar la apertura automática, agrega el siguiente código directamente en su proyecto.

[[[
```html
<!DOCTYPE html>
<html>
<head>
	<script src="https://sdk.mercadopago.com/js/v2"></script>
</head>
<body>
	<script>
    // Agregar credenciales de SDK
		const mp = new MercadoPago('PUBLIC_KEY', {
		    locale: 'pt-BR'
		});
		const checkout = mp.checkout({
		  preference: {
		      id: 'YOUR_PREFERENCE_ID' // Indica el ID de preferencia
		  },
		  autoOpen: true, // Habilita la apertura automática de Checkout Pro
		});	
	</script>	 	 
	<div class="cho-container"></div>
</body>
</html>
```
]]]
