---
sites_supported:
    - mla
    - mlb
    - mlm
    - mco
    - mlc
    - mpe
---
# Recibir pagos

> WARNING
>
> Pre-requisitos
>
> * Esta guía asume que ya has seguido los pasos de la sección introducción de la documentación para la instalación del SDK.

Esta guía te ayudará a integrar el componente visual de pago de Mercado Pago en tu aplicación. Este componente maneja la selección del medio de pago, la recolección de datos del medio de pago del usuario y la comunicación del resultado de pago.

#### La integración consta de dos etapas:

- Integración en tu servidor: en esta etapa obtendrás la información del pago.
- Integración en tu aplicación: en esta etapa configurarás el componente visual.

![scheme](/images/mobile-sdk-schema.png)

1. Crea la preferencia de pago desde tu servidor en los servidores de Mercado Pago.
2. Inicia el _Checkout_ en tu aplicación, utilizando el id de la preferencia.
3. El _Checkout_ realizará el pago en los servidores de Mercado Pago.
4. Suscríbete a las notificaciones para enterarte de tus nuevos pagos y las actualizaciones de sus estados.

## Configura tu servidor

Para poder iniciar el flujo de pago, necesitas obtener la información sobre el producto o servicio a pagar.

Esta entidad es la preferencia de pago y contiene:

1. Descripción y monto.
2. Información de tu comprador (_Email_, nombre, dirección, etc).
3. Medios de pago que aceptas.
4. _ID_ de referencia de tu sistema.

[[[
```php
<?php  
  require ('mercadopago.php');
  MercadoPago\SDK::configure(['ACCESS_TOKEN' => 'ENV_ACCESS_TOKEN']);
?>
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");
```
```node
var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCES_TOKEN')
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")
```
]]]

Luego, deberás agregar los atributos de tu preferencia de pago:

[[[
```php
<?php
  $preference = new MercadoPago\Preference();

  $item = new MercadoPago\Item();
  $item->title = "Blue shirt";
  $item->quantity = 10;
  $item->currency_id = "[FAKER][CURRENCY][ACRONYM]";
  $item->unit_price = [FAKER][COMMERCE][PRICE];

  $payer = new MercadoPago\Payer();
  $payer->email = "test_user_19653727@testuser.com";

  $preference->items = array($item);
  $preference->payer = $payer;
  $preference->save();
?>
```
```java

Preference preference = new Preference();

Item item = new Item();
item.setId("1234")
    .setTitle("Blue shirt")
    .setQuantity(10)
    .setCategoryId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) [FAKER][COMMERCE][PRICE]);

Payer payer = new Payer();
payer.setEmail("john@yourdomain.com");

preference.setPayer(payer);
preference.appendItem(item);
preference.save();

```
```javascript
var preference = {}

var item = {
  title: 'Blue shirt',
  quantity: 10,
  currency_id: '[FAKER][CURRENCY][ACRONYM]',
  unit_price: [FAKER][COMMERCE][PRICE]
}

var payer = {
  email: "demo@mail.com"
}

preference.items = [item]
preference.payer = payer

mercadopago.preferences.create(preference).then(function (data) {
   // Do Stuff...
 }).catch(function (error) {
   // Do Stuff...
 });
```
```ruby
preference_data = {
  items: [
    {
      title: 'Blue shirt',
      quantity: 10,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: [FAKER][COMMERCE][PRICE]
    }
  ],
  payer: {
    email: 'john@yourdomain.com'
  }
}

preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]
```
```python
preference_data = {
    "title": "Blue shirt",
    "quantity": 10,
    "currency_id": "[FAKER][CURRENCY][ACRONYM]",
    "unit_price": [FAKER][COMMERCE][PRICE],
    "payer": {
        "email": "john@yourdomain.com"
    }
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
]]]

### Contenido de la preferencia

Mientras más información nos envíes, mejor será la aprobación de los pagos y la experiencia de tus usuarios.

#### Payer

Es requerido el envío del `email` de tu comprador.

```json
{
   ...,
  "payer": {
    "name": "[FAKER][NAME][FIRST_NAME]",
    "surname": "[FAKER][NAME][LAST_NAME]",
    "email": "john@yourdomain.com",
    "date_created": "2015-06-02T12:58:41.425-04:00",
    "phone": {
      "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
      "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
    },
    "identification": {
      "type": "DNI",
      "number": "123456789"
    },
    "address": {
      "street_name": "[FAKER][ADDRESS][STREET_NAME]",
      "street_number": 7304,
      "zip_code": "[FAKER][ADDRESS][ZIP_CODE]"
    }
  },
  ...
}
```

## Integra el flujo de pago de Mercado Pago en tu aplicación

### 1. Conecta tu aplicación con tu servidor

En el SDK te ofrecemos una clase llamada **CustomServer** para que la conexión con tu servidor sea más sencilla. El método `createPreference` hace un _POST_ y envía como cuerpo del mensaje un mapa que puedes definir para recibir información extra (`preferenceMap`). Indícanos tu URL base (https://your-base-url.com) y la URI (/your-create-preference-uri) donde esperas los datos para crear la preferencia.

_CustomServer_ se encargará de transformar la respuesta de tu servicio (que debe tener la misma estructura que la de Mercado Pago) en un objeto **CheckoutPreference**, cuyo _ID_ es el punto de entrada a nuestro _checkout_.

Crea la preferencia en tu servidor desde tu aplicación con el siguiente código:

[[[

```android
public void submit(View view) {
// Create a map with payment’s details.
Map<String, Object> preferenceMap = new HashMap<>();
preferenceMap.put("item_id", "1");
preferenceMap.put("amount", new BigDecimal(10));
preferenceMap.put("currency_id", "[FAKER][CURRENCY][ACRONYM]");
preferenceMap.put("payer_email", "john@yourdomain.com");

final Activity activity = this;
LayoutUtil.showProgressLayout(activity);
CustomServer.createCheckoutPreference(activity, "https://your-base-url.com", "/your-create-preference-uri", preferenceMap, new Callback<CheckoutPreference>() {
@Override
public void success(CheckoutPreference checkoutPreference) {
startMercadoPagoCheckout(checkoutPreference);
LayoutUtil.showRegularLayout(activity);
}

@Override
public void failure(ApiException apiException) {
// Ups, something went wrong
}
});
}
```
```swift
        let preferenceBody : [String : Any] = ["item_id" : "id", "quantity" : 3]

        CustomServer.createCheckoutPreference(url: "https://your-base-url.com/", uri: "your-create-preference-uri", bodyInfo: preferenceBody as NSDictionary, success: { (checkoutPrefernece) in
            startMercadoPagoCheckout(checkoutPreference)
        }) { (error) in
            // Handle error
        }
```
```Objective-c
    NSDictionary *preferenceBody = @{
                                     @"amount" : @10,
                                     @"itemId" : @29334,
                                     @"customerId" : @207,
                                     @"payerEmail" : @"john@yourdomain.com" };


    [CustomServer createCheckoutPreferenceWithUrl:@"https://your-base-url.com" uri:@"/your-create-preference-uri" bodyInfo:preferenceBody success:^(CheckoutPreference * checkoutPreference) {
        [self startMercadoPagoCheckoutWithCheckoutPreference: checkoutPreference];

    } failure:^(NSError * error) {
        // Ups, something went wrong
    }];
```

]]]

### 2. Crea un botón de pago

A modo de ejemplo proponemos que inicies el flujo de Mercado Pago desde un botón.

[[[

```android
===
1. Crea un Activity para insertar el botón (**MainActivity**, por ejemplo).  
2. Agrega un campo de texto para mostrar el resultado del pago.
3. Pega el siguiente código de ejemplo en **res/layout/activity_main.xml**.
===

<FrameLayout xmlns:android='http://schemas.android.com/apk/res/android'
xmlns:tools='http://schemas.android.com/tools'
android:layout_width='match_parent'
android:layout_height='match_parent'
android:paddingLeft='@dimen/activity_horizontal_margin'
android:paddingRight='@dimen/activity_horizontal_margin'
android:paddingTop='@dimen/activity_vertical_margin'
android:paddingBottom='@dimen/activity_vertical_margin'
android:orientation='vertical'
tools:context='.MainActivity'>
<include layout="@layout/mpsdk_view_progress_bar"/>
<LinearLayout
android:id="@+id/mpsdkRegularLayout"
android:layout_width="match_parent"
android:layout_height="match_parent"
android:orientation="vertical">

<Button
android:layout_width='match_parent'
android:layout_height='50dp'
android:layout_marginTop='25dp'
android:gravity='center'
android:text='Pagar $10'
android:onClick='submit'/>

<TextView
android:layout_width='match_parent'
android:layout_height='wrap_content'
android:id='@+id/mp_results'
android:paddingTop='50dp'/>
</LinearLayout>
</FrameLayout>
```
```swift
===
1. Crea un ViewController para insertar el botón (**MainViewController**, por ejemplo).
2. Inserta un botón en el **.xib** correspondiente.
3. Agrega un campo de texto para mostrar el resultado del pago.
4. Pega el siguiente código de ejemplo en tu clase **MainViewController.swift**.
5. En el siguiente paso estarás trabajando sobre el evento asociado al click botón (startCheckout).
===

import UIKit
import MercadoPagoSDK

class MainViewController: UIViewController {
@IBOutlet weak var payButton: UIButton!
@IBOutlet weak var paymentResult: UITextField!

override func viewDidLoad() {
super.viewDidLoad()

self.payButton.addTarget(self,
action: #selector(MainViewController.startCheckout),
for: .touchUpInside)
}
}
```   
```objective-c
===
1. Crea un ViewController para insertar el botón (**MainViewController**, por ejemplo).
2.  Inserta un botón en el .xib correspondiente.
3. Agrega un campo de texto (en nuestro caso lo llamamos paymentResult) para mostrar el resultado del pago.
4. Pega el siguiente código de ejemplo en tu clase **MainViewController.c**.
5. En el siguiente paso estarás trabajando sobre el evento asociado al click botón (startCheckout).
===

@import MercadoPagoSDK;

@interface MainExamplesViewController()
@property (weak, nonatomic) IBOutlet UIButton *button;
@property (weak, nonatomic) IBOutlet UILabel *label;

@end
@implementation MainExamplesViewController

- (void)viewDidLoad {
[super viewDidLoad];

[_button addTarget:self action:@selector(startCheckout:)
forControlEvents:UIControlEventTouchUpInside];
}
@end
```

]]]

### 3. ¡Inicia el Checkout!

Una vez creada la preferencia de pago y definido un evento a partir del cual comenzar el flujo de pago, estás en condiciones de iniciar nuestro Checkout con el siguiente código:

[[[

```android
private void startMercadoPagoCheckout(CheckoutPreference checkoutPreference) {
new MercadoPagoCheckout.Builder()
.setActivity(activity)
.setPublicKey("ENV_PUBLIC_KEY").setCheckoutPreference(checkoutPreference)
.startForPayment();
}
```
```swift
===
El flujo de nuestro checkout esta basado en **NavigationController**. Si tu aplicación esta basada también en NavigationControllers podes iniciar el flujo de Checkout utilizando el NavigationController de tu aplicación, sino puedes crear uno, iniciar el Checkout sobre él y luego presentarlo.
===

public func startMercadoPagoCheckout(_ checkoutPreference CheckoutPreference) {

  let checkout = MercadoPagoCheckout(publicKey: "ENV_PUBLIC_KEY", accessToken: nil, checkoutPreference: checkoutPreference,
  navigationController: self.navigationController!)

  checkout.start()
}
```
```objective-c
===
El flujo de nuestro checkout esta basado en **NavigationController**. Si tu aplicación esta basada también en NavigationControllers podes iniciar el flujo de Checkout utilizando el NavigationController de tu aplicación, sino puedes crear uno, iniciar el Checkout sobre él y luego presentarlo.
===

-(void)startMercadoPagoCheckout:(CheckoutPreference *)checkoutPreference {
    MercadoPagoCheckout *checkout = [[MercadoPagoCheckout alloc] initWithPublicKey: "ENV_PUBLIC_KEY" checkoutPreference:checkoutPreference discount:nil navigationController:self.navigationController];
    [checkout start];
}
```

]]]


### 4. Obtén la respuesta

El SDK devolverá siempre un resultado del pago.

Si hubo algún error insalvable o el usuario abandonó el flujo, devolverá un objeto que representa el error para que puedas entender qué pasó.

Estos son los atributos más importantes del pago:

- id: Identificador del pago.
- status: Estados del pago.
- payment\_method\_id: Identificador del medio de pago que eligió tu usuario.
- payment\_type\_id: Tipo de medio elegido.
- card: Objeto que identifica la tarjeta de tu usuario.
- issuer_id: Identificador del banco de la tarjeta que eligió tu usuario.
- installments: Cantidad de cuotas elegidas.

Los posibles estados de un pago son:

![payment-status](/images/payments-status-transitions-diagram.png)


Podrás obtener la respuesta con el siguiente código:

[[[

```android
@Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == MercadoPagoCheckout.CHECKOUT_REQUEST_CODE) {
            if (resultCode == MercadoPagoCheckout.PAYMENT_RESULT_CODE) {
                Payment payment = JsonUtil.getInstance().fromJson(data.getStringExtra("payment"), Payment.class);
                ((TextView) findViewById(R.id.mp_results)).setText("Resultado del pago: " + payment.getStatus());
                //Done!
            } else if (resultCode == RESULT_CANCELED) {
                if (data != null && data.getStringExtra("mercadoPagoError") != null) {
                    MercadoPagoError mercadoPagoError = JsonUtil.getInstance().fromJson(data.getStringExtra("mercadoPagoError"), MercadoPagoError.class);
                    ((TextView) findViewById(R.id.mp_results)).setText("Error: " +  mercadoPagoError.getMessage());
                    //Resolve error in checkout
                } else {
                    //Resolve canceled checkout
                }
            }
        }
    }
```      
```swift
MercadoPagoCheckout.setPaymentCallback { (payment) in
self.payment = payment
}

checkout.setCallbackCancel {
   // Resolved cancel checkout
   self.navigationController?.popToRootViewController(animated: true)
}
```
```objective-c
[MercadoPagoCheckout setPaymentCallbackWithPaymentCallback:^(Payment * payment) {
self.payment = payment
}];

[self.checkout setCallbackCancelWithCallback:^{
	// Resolved cancel checkout
  [self.navigationController popToRootViewControllerAnimated:YES];
}];
```

]]]

### Configura tu color

Puedes cambiar los colores de la interfaz gráfica del flujo de pago, como así también hacer más oscura la fuente utilizando la clase _DecorationPreference_. Esto lo puedes lograr con el siguiente código:

[[[

```android
private void startMercadoPagoCheckout(CheckoutPreference checkoutPreference) {
DecorationPreference decorationPreference = new DecorationPreference.Builder()
.setBaseColor(ContextCompat.getColor(context, R.color.your_color))
.enableDarkFont() //Optional
.build();

new MercadoPagoCheckout.Builder()
.setActivity(activity)
.setDecorationPreference(decorationPreference)
.setPublicKey("ENV_PUBLIC_KEY")
.setCheckoutPreference(checkoutPreference)
.startForPayment();
}
```
```swift
public func startMercadoPagoCheckout(_ checkoutPreference CheckoutPreference) {
    let decorationPreference: DecorationPreference = DecorationPreference()
    decorationPreference.setBaseColor(color: UIColor.purple)
    decorationPreference.enableDarkFont()
    MercadoPagoCheckout.setDecorationPreference(decorationPreference)

    let checkout = MercadoPagoCheckout(publicKey: "ENV_PUBLIC_KEY", accessToken: nil, checkoutPreference: checkoutPreference,
    navigationController: self.navigationController!)

    checkout.start()
}
```
```objective-c
DecorationPreference *decorationPreference = [[DecorationPreference alloc] initWithBaseColor:[UIColor fromHex:@"#CA254D"]];
[decorationPreference enableDarkFont];
[MercadoPagoCheckout setDecorationPreference:decorationPreference];

-(void)startMercadoPagoCheckout:(CheckoutPreference *)checkoutPreference {
    MercadoPagoCheckout *checkout = [[MercadoPagoCheckout alloc] initWithPublicKey: "ENV_PUBLIC_KEY" checkoutPreference:checkoutPreference discount:nil navigationController:self.navigationController];
    [checkout start];
}
```

]]]

El SDK permite configurar el color en formato hexadecimal, es decir por ejemplo **setBaseColor("#060d72");**.

## Activa las notificaciones de pagos

Las notificaciones son la forma automática de enterarte de tus nuevos pagos y las actualizaciones de sus estados. Esto te permitirá administrar tu _stock_ y mantener tu sistema sincronizado.

Visita la sección [Notificaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/ipn/introduction) para conocer más sobre esto.

## Prueba la integración

Prueba tu integración antes de salir a producción, a fin de verificar el funcionamiento y realizar los ajustes que necesites.

Para ello debes usar usuario y tarjetas de prueba, visita la sección [Probando](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/mobile-checkout/testing) para más información.

### Próximos pasos

- Visita la sección [Personalización](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/mobile-checkout/v3/personalization) para adecuar el flujo de pago a tus necesidades.
- Para obtener información sobre como hacer pruebas, dirígete a la sección [Probando integración](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/mobile-checkout/v3/testing).

