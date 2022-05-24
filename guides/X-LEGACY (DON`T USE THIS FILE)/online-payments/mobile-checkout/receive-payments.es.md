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

![Esquema de creación de pagos en plataformas móviles Mercado Pago](/images/mobile-sdk-schema.png)

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
```csharp
using MercadoPago.Config;
MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";
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
```csharp
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Id = "1234",
            Title = "Blue shirt",
            Quantity = 10,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = [FAKER][COMMERCE][PRICE]m,
        },
    },
    Payer = new PreferencePayerRequest
    {
        Email = "john@yourdomain.com",
    },
};
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);

```
```python
preference_data = {
    "title": "Blue shirt",
    "quantity": 1,
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
    ----[mla, mlb, mlu, mco, mlc, mpe]----
    "identification": {
      "type": "DNI",
      "number": "123456789"
    },
    ------------
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


### 1. Crea un botón de pago

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
      android:onClick='startMercadoPagoCheckout'/>

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
5. En el siguiente paso estarás trabajando sobre el evento asociado al click botón (startMercadoPagoCheckout).
===

import UIKit
import MercadoPagoSDK

class MainViewController: UIViewController {
@IBOutlet weak var payButton: UIButton!
@IBOutlet weak var paymentResult: UITextField!

override func viewDidLoad() {
  super.viewDidLoad()

  self.payButton.addTarget(self,
    action: #selector(MainViewController.startMercadoPagoCheckout),
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
5. En el siguiente paso estarás trabajando sobre el evento asociado al click botón (startMercadoPagoCheckout).
===

@import MercadoPagoSDK;

@interface MainExamplesViewController()
@property (weak, nonatomic) IBOutlet UIButton *button;
@property (weak, nonatomic) IBOutlet UILabel *label;

@end
@implementation MainExamplesViewController

- (void)viewDidLoad {
[super viewDidLoad];

[_button addTarget:self action:@selector(startMercadoPagoCheckout:)
forControlEvents:UIControlEventTouchUpInside];
}
@end
```

]]]

### 2. ¡Inicia el Checkout!

Una vez creada la preferencia de pago y definido un evento a partir del cual comenzar el flujo de pago, estás en condiciones de iniciar nuestro Checkout con el siguiente código:

[[[

```android
===
Para iniciar el checkout debes usar el método **startPayment** pasando como parámetros el contexto de Android y un RequestCode que es el número con el que identificarás la respuesta del checkout en el método **onActivityResult**.
===

private static final int REQUEST_CODE = 1;

private void startMercadoPagoCheckout(final String checkoutPreferenceId) {
  new MercadoPagoCheckout.Builder("ENV_PUBLIC_KEY", checkoutPreferenceId).build()
                    .startPayment(MainActivity.this, REQUEST_CODE);
}
```
```swift
@IBAction func startMercadoPagoCheckout(_ sender: Any) {
    MercadoPagoCheckout.init(builder: MercadoPagoCheckoutBuilder.init(publicKey: "ENV_PUBLIC_KEY", preferenceId: checkoutPreferenceId))
    .start(navigationController: self.navigationController!)
}
```
```objective-c
- (IBAction)startMercadoPagoCheckout:(id)sender {
  MercadoPagoCheckout *checkout = [[MercadoPagoCheckout alloc] initWithBuilder:[[MercadoPagoCheckoutBuilder alloc] initWithPublicKey:@"ENV_PUBLIC_KEY" preferenceId:@"PREFERENCE_ID"]];
  [checkout startWithNavigationController:self.navigationController lifeCycleProtocol:nil];
}
```

]]]


### 3. Obtén la respuesta

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
===
Utiliza el RequestCode que enviaste en **startPayment** para obtener el resultado del checkout en **onActivityResult**.
===
@Override
protected void onActivityResult(final int requestCode, final int resultCode, final Intent data) {
    if (requestCode == REQUEST_CODE) {
        if (resultCode == MercadoPagoCheckout.PAYMENT_RESULT_CODE) {
            final Payment payment = (Payment) data.getSerializableExtra(MercadoPagoCheckout.EXTRA_PAYMENT_RESULT);
            ((TextView) findViewById(R.id.mp_results)).setText("Resultado del pago: " + payment.getStatus());
            //Done!
        } else if (resultCode == RESULT_CANCELED) {
            if (data != null && data.getExtras() != null
                && data.getExtras().containsKey(MercadoPagoCheckout.EXTRA_ERROR)) {
                final MercadoPagoError mercadoPagoError =
                    (MercadoPagoError) data.getSerializableExtra(MercadoPagoCheckout.EXTRA_ERROR);
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
===
Para obtener una respuesta de pago se deberá implementar el protocolo **PXLifeCycleProtocol** y pasarlo como argumento al momento de inicializar el checkout. Los métodos que se deben implementar del protocolo son **finishCheckout** y **cancelCheckout** como se muestra en el siguiente ejemplo. Al implementar este protocolo el integrador es responsable de finalizar el flujo de checkout, en este ejemplo de implementación al finalizar se ejecuta un **popToRootViewController**.
===
@IBAction func startMercadoPagoCheckout(_ sender: Any) {
    MercadoPagoCheckout.init(builder: MercadoPagoCheckoutBuilder.init(publicKey: "ENV_PUBLIC_KEY", preferenceId: checkoutPreferenceId))
    .start(navigationController: self.navigationController!, lifeCycleProtocol: self)
}

func finishCheckout() -> ((_ payment: PXResult?) -> Void)? {
    return  ({ (_ payment: PXResult?) in
        print(payment)
        self.navigationController?.popToRootViewController(animated: false)
    })
}

func cancelCheckout() -> (() -> Void)? {
    return {
        self.navigationController?.popToRootViewController(animated: true)
    }
}
```
```objective-c
===
Para obtener una respuesta de pago se deberá implementar el protocolo **PXLifeCycleProtocol** y pasarlo como argumento al momento de inicializar el checkout. Los métodos que se deben implementar del protocolo son **finishCheckout** y **cancelCheckout** como se muestra en el siguiente ejemplo. Al implementar este protocolo el integrador es responsable de finalizar el flujo de checkout, en este ejemplo de implementación al finalizar se ejecuta un **popToRootViewController**.
===
- (IBAction)startMercadoPagoCheckout:(id)sender {
  MercadoPagoCheckout *checkout = [[MercadoPagoCheckout alloc] initWithBuilder:[[MercadoPagoCheckoutBuilder alloc] initWithPublicKey:@"ENV_PUBLIC_KEY" preferenceId:@"PREFERENCE_ID"]];
  [checkout startWithNavigationController:self.navigationController lifeCycleProtocol:self];
}

-(void (^ _Nullable)(void))cancelCheckout {
    return ^ {
        [self.navigationController popToRootViewControllerAnimated:YES];
    };
}

- (void (^)(id<PXResult> _Nullable))finishCheckout {
    return nil;
}
```

]]]

### Activa las notificaciones de pagos

Las notificaciones son la forma automática de enterarte de tus nuevos pagos y las actualizaciones de sus estados. Esto te permitirá administrar tu _stock_ y mantener tu sistema sincronizado.

Visita la sección [Notificaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/ipn/introduction) para conocer más sobre esto.

### Previene pagos rechazados

Un pago puede ser rechazado porque el emisor del medio de pago detecta un problema o porque no se cumple con los requisitos de seguridad necesarios.

Evita pagos rechazados con nuestras recomendaciones y [mejora la aprobación de tus pagos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/payment-rejections).

### Prueba la integración

Prueba tu integración antes de salir a producción, a fin de verificar el funcionamiento y realizar los ajustes que necesites.

Para ello debes usar usuario y tarjetas de prueba, visita la sección [Pruebas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/mobile-checkout/testing) para más información.

### Próximos pasos

- Visita la sección [Personalización](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/mobile-checkout/personalization) para adecuar el flujo de pago a tus necesidades.
