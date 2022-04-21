# Añadir checkout

Una vez que hayas creado la preferencia en tu backend, deberás instalar el SDK de frontend de Mercado Pago en tu proyecto para agregar el botón Checkout Pro.

La instalación se realiza en dos pasos: agregar el SDK de Mercado Pago al proyecto con tus credenciales configuradas e iniciar el checkout desde el ID de preferencia generado previamente.

1. Para incluir el SDK de Mercado Pago.js V2, agrega el siguiente código al HTML del proyecto.

[[[
```html
<html>
<head>
	<title>Pagar Versão Modal</title>
</head>

<body>
	<div class="cho-container"></div>
	//Adicione o SDK MercadoPago.js/v2
		<script src="https://sdk.mercadopago.com/js/v2"></script>
```
]]]
		
2. Tras agregar el SDK de Mercado Pago.js V2, configura las credenciales del SDK e inicia tu checkout con el ID de la preferencia creada anteriormente y el identificador del elemento donde se debe mostrar el botón de pago, como se muestra en el siguiente ejemplo.

[[[
```html
<script>
			//Adicione as credenciais de sua conta Mercado Pago junto ao SDK
			const mp = new MercadoPago('YOUR_PUBLIC_KEY', {
			    locale: 'pt-BR'
			});
			const checkout = mp.checkout({
			   preference: {
			       id: 'YOUR_PREFERENCE_ID' // Indica el ID de la preferencia
			   },
			   render: {
			       container: '.cho-container', // Clase CSS para renderizar el botón de pago
			       label: 'Pagar', // Cambiar el texto del botón de pago (opcional)
			    }
			});
	</script>	 	 
	
</body>
</html>
```
]]]

En el ejemplo anterior, se mostrará un botón de pago y será responsable de abrir Checkout Pro. Si desea personalizar la forma en que se abre el checkout, consulta la sección Esquema de apertura.

> WARNING
>
> Importante
>
> Para probar el checkout, debes acceder a él a través de otro navegador o cerrar sesión en tu cuenta de Mercado Pago. Esto se debe a que estar conectado a la misma cuenta responsable de crear el formulario de pago hace que sea imposible probar el flujo de pago y garantizar su funcionamiento.

> PREV_STEP_CARD_ES
>
> Crear preferencias
>
> Vea cómo crear conjuntos de información sobre un producto y/o servicio.
>
> [Crear preferencias](/developers/es/docs/checkout-pro/create-preference)

> NEXT_STEP_CARD_ES
>
> Vigencia de preferencia 
>
> Aprenda a establecer el período de validez para una determinada preferencia de pago.
>
> [Vigencia de preferencia](/developers/es/docs/checkout-pro/checkout-customization/preferences/term-of-preference)