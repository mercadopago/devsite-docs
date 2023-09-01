# Personalización

> WARNING
>
> Pre-requisitos
>
> *  Esta guía asume que ya has seguido los pasos de la sección introducción y recibiendo pagos de la documentación para la instalación del SDK y la integración por defecto, junto con la creación de la preferencia de pago.

## Personaliza tu preferencia de pago

De ser necesario, al momento de crear la preferencia de pago en tu servidor puedes especificar restricciones como exclusiones de medios o tipos de pago específicos y establecer la cantidad de cuotas máximas o por _default_.

#### Excluir Medios de Pago

Puedes especificar los tipos de medio de pago que no quieras soportar (Efectivo, Tarjetas de Crédito o Débito) excluyéndolos en la creación de la _Checkout Preference_.

En el contenido de la preferencia de pago puedes agregar los medios de pago o tipos de medio que no quieras soportar.

*Excluir un tipo de medio de pago específico:*


```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
    "excluded_payment_types":[
        {"id":"ticket"}
    ]
  },
  ...
}
```

*Excluir más de un tipo de medio de pago:*


```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
    "excluded_payment_types":[
        {"id":"ticket"},
        {"id":"atm"},
        {"id":"debit_card"}
    ]
  },
  ...
}
```

O incluso puedes determinar qué medios de pago específicos (Visa, Mastercard, etc) quieres excluir del _checkout_:

*Excluir un medio de pago específico:*


```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
    "excluded_payment_methods":[
        {"id":"visa"}
    ]
  },
  ...
}
```

*Excluir más de un medio de pago:*


```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
    "excluded_payment_methods":[
        {"id":"visa"},
        {"id":"master"}
    ]
  },
  ...
}
```

#### Personalizar Cuotas

Puedes precisar la cantidad máxima de cuotas que quieres soportar para tus medios de pago:


```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
  	 "excluded_payment_methods": [
  	   ...
  	 ],
  	 "excluded_payment_types": [
  	   ...
  	 ],
    "installments": 1
  },
  ...
}
```

O también establecer una cantidad de cuotas por _default_ que se seleccionará automáticamente, si es que existe para el medio de pago seleccionado por el usuario. De lo contrario, se le mostrará la pantalla de cuotas para que él elija:




```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
  	 "excluded_payment_methods": [
  	   ...
  	 ],
  	 "excluded_payment_types": [
  	   ...
  	 ],
    "default_installments": 3
  },
  ...
}
```

## Personaliza el flujo de pago

La Configuración Avanzada permite personalizar y configurar el flujo para que puedas lograr la mejor experiencia de pago.

Para incorporar en el _Checkout_ las opciones configuradas en la clase `AdvancedConfiguration` deberás agregar una instancia de la misma en el inicio del _Checkout_, como se muestra en el siguiente código:

[[[

```android
===
Como se observa en el ejemplo, puedes ocultar el botón de "Promociones" con el método **disableBankDeals** para aquellos casos en lo que solo solicites pagos en una cuota.
===
final AdvancedConfiguration advancedConfiguration =
    new AdvancedConfiguration.Builder().setBankDealsEnabled(false).build();
new MercadoPagoCheckout
    .Builder("ENV_PUBLIC_KEY", checkoutPreferenceId)
    .setAdvancedConfiguration(advancedConfiguration).build()
    .startPayment(CheckoutExampleActivity.this, REQUEST_CODE);
```
```swift
===
Como se observa en el ejemplo, puedes ocultar el botón de "Promociones" configurando **bankDealsEnabled = false** para aquellos casos en lo que solo solicites pagos en una cuota.
===
let builder = MercadoPagoCheckoutBuilder.init(publicKey: "ENV_PUBLIC_KEY", preferenceId: checkoutPreferenceId)
let config = PXAdvancedConfiguration()
config.bankDealsEnabled = false
builder.setAdvancedConfiguration(config: config)
let checkout = MercadoPagoCheckout.init(builder: builder)
checkout.start(navigationController: self.navigationController!)
```
```objective-c
===
Como se observa en el ejemplo, puedes ocultar el botón de "Promociones" configurando **bankDealsEnabled = NO** para aquellos casos en lo que solo solicites pagos en una cuota.
===
MercadoPagoCheckoutBuilder *builder = [[MercadoPagoCheckoutBuilder alloc] initWithPublicKey:@"ENV_PUBLIC_KEY" preferenceId:@"PREFERENCE_ID"];

PXAdvancedConfiguration *config =  [[PXAdvancedConfiguration alloc] init];
[config setBankDealsEnabled:NO];

[builder setAdvancedConfigurationWithConfig:config];

MercadoPagoCheckout *checkout = [[MercadoPagoCheckout alloc] initWithBuilder:builder];

[checkout startWithNavigationController:self.navigationController lifeCycleProtocol:nil];
```

]]]

Como se observa en el ejemplo, puedes ocultar el botón de "Promociones" con el método disableBankDeals para aquellos casos en lo que solo solicites pagos en una cuota.


### Configura tu color

Puedes cambiar los colores de la interfaz gráfica del flujo de pago con el siguiente código:

[[[
```android
===
En tu archivo **colors.xml** deberás hacer referencia a los colores que quieras cambiar del checkout y setearlos con tus propios colores.
===
<!-- Color principal -->
<color name="ui_components_android_color_primary">@color/your_color</color>

<!-- Color de la Toolbar -->
<color name="px_toolbar_text">@color/your_color</color>

<!-- Color de la Status Bar -->
<color name="ui_components_android_color_primary_dark">@color/your_color</color>

<!-- Color primario del Spinner-->
<color name="ui_components_spinner_primary_color">@color/your_color</color>

<!-- Color secundario del Spinner -->
<color name="ui_components_spinner_secondary_color">@color/your_color</color>

<!-- Color de fondo del Spinner -->
<color name="px_background_loading">@color/your_color</color>

<!-- Color de los iconos de los medios de pago -->
<color name="px_paymentMethodTint">@color/your_color</color>

<!-- Color de los inputs -->
<color name="px_input">@color/your_color</color>
```
```swift
@IBAction func startMercadoPagoCheckout(_ sender: Any) {
    let builder = MercadoPagoCheckoutBuilder.init(publicKey: "ENV_PUBLIC_KEY", preferenceId: checkoutPreferenceId)
    let config = PXAdvancedConfiguration()
    builder.setAdvancedConfiguration(config: config)
    builder.setColor(checkoutColor: .green)
    let checkout = MercadoPagoCheckout.init(builder: builder)
    checkout.start(navigationController: self.navigationController!)
}
```
```objective-c
MercadoPagoCheckoutBuilder *builder = [[MercadoPagoCheckoutBuilder alloc] initWithPublicKey:@"ENV_PUBLIC_KEY" preferenceId:@"PREFERENCE_ID"];

[builder setColorWithCheckoutColor:[UIColor greenColor]];

MercadoPagoCheckout *checkout = [[MercadoPagoCheckout alloc] initWithBuilder:builder];

[checkout startWithNavigationController:self.navigationController lifeCycleProtocol:nil];
```

]]]
