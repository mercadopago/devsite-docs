# Recibir Pagos

> WARNING
> 
> Pre-requisitos
>
> * Esta guía asume que ya has seguido los pasos de la sección introducción de la documentación para la instalación del SDK.

Esta guía te ayudará a integrar el componente visual de pago de Mercado Pago en tu aplicación. Este componente maneja la selección del medio de pago, la recolección de datos del medio de pago del usuario y la comunicación del resultado de pago.

#### La integración consta de dos etapas:
- Integración en tu servidor: en esta etapa obtendras la información del pago.
- Integración en tu aplicación: en esta etapa configurarás el componente visual.

![imagen](https://secure.mlstatic.com/developers/site/cloud/assets/Uploads/Basic-Checkout.png)

## Configura tu servidor

Para poder iniciar el flujo de pago, necesitas obtener la información sobre el producto o servicio a pagar. 

Esta entidad es la preferencia de pago y contiene: 

1. Descripción y monto.
2. Información de tu comprador (Email, nombre, dirección, etc).
3. Medios de pago que aceptas.
4. ID de referencia de tu sistema.

```php 
  ===
  Para crear una preferencia de pago debes [instalar el SDK de Mercado Pago](https://github.com/mercadopago/sdk-php) y configurar tus [credenciales](https://www.mercadopago.com/mla/account/credentials?type=basic).
  ===
  <?php  
    MercadoPago\SDK::configure(['ACCESS_TOKEN' => ENV_ACCESS_TOKEN]); 
  ?>
```

Luego, deberás agregar los atributos de tu preferencia de pago:

```php
  <?php
    $preference_data = array(
      "items" => array(
        array(
          "title" => "[FAKER][COMMERCE][PRODUCT_NAME]",
          "quantity" => 1,
          "currency_id" => "ARS",
          "unit_price" => [FAKER][COMMERCE][PRICE],
          "description" => ""
        )
      ),
      "payer" => array(
        "email" => "[FAKER][INTERNET][FREE_EMAIL]"
      )
    );

    $preference = $mp->create_preference($preference_data);
  ?>
```

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
    "email": "[FAKER][INTERNET][FREE_EMAIL]",
    "date_created": "2015-06-02T12:58:41.425-04:00",
    "phone": {
      "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
      "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
    },
    "identification": {
      "type": "DNI", // Available ID types at https://api.mercadopago.com/v1/identification_types
      "number": "123456789"
    },
    "address": {
      "street_name": "[FAKER][ADDRESS][STREET_NAME]",
      "street_number": [FAKER][ADDRESS][BUILDING_NUMBER],
      "zip_code": "[FAKER][ADDRESS][ZIP_CODE]"
    } 
  },
  ...
}
```

## Integra el flujo de pago de Mercado Pago en tu aplicación

### 1. Conecta tu aplicación con tu servidor

En el SDK te ofrecemos una clase llamada **CustomServer** para que la conexión con tu servidor sea más sencilla. El método `createPreference` hace un POST y envía como cuerpo del mensaje el mapa que hayas definido (`preferenceMap`). Indícanos tu URL base (https://api.tunombre.com) y la URI (/create_preference) donde esperas los datos para crear la preferencia.

CustomServer se encargará de transformar la respuesta de tu servicio (que debe tener la misma estructura que la de Mercado Pago) en un objeto **CheckoutPreference**, cuyo ID es el punto de entrada a nuestro checkout.

Crea la preferencia en tu servidor desde tu aplicación con el siguiente código:

[[[

```android
public void submit(View view) {
// Crea un mapa con los datos de la compra y el mail de tu cliente.
Map<String, Object> preferenceMap = new HashMap<>();
preferenceMap.put("item_id", "1");
preferenceMap.put("amount", new BigDecimal(10));
preferenceMap.put("currency_id", "ARS");
preferenceMap.put("payer_email", "customermail@test.com");

final Activity activity = this;
LayoutUtil.showProgressLayout(activity);
CustomServer.createCheckoutPreference(activity, "https://api.tunombre.com", "/create_preference", preferenceMap, new Callback<CheckoutPreference>() {
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
        let preferenceBody : [String : Any] = ["item_id" : "id", "quantity" : 1]

        CustomServer.createCheckoutPreference(url: "https://your-base-URL.com/", uri: "your_create_preference_URI", bodyInfo: preferenceBody as NSDictionary, success: { (checkoutPrefernece) in
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
                                       @"payerEmail" : @"cusomermail@test.com" };


    [CustomServer createCheckoutPreferenceWithUrl:@"“https://api.tunombre.com“" uri:@"/create_preference" bodyInfo:preferenceBody success:^(CheckoutPreference * checkoutPreference) {
        [self startMercadoPagoCheckoutWithCheckoutPreference: checkoutPreference];

    } failure:^(NSError * error) {
        // Ups, something went wrong
    }];
```

]]]

### 2. Crea un botón de pago

A modo de ejemplo proponemos que inicies el flujo de Mercado Pago desde un botón.

[[[

```xml
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
```Objective-c
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
.setPublicKey(publicKey).setCheckoutPreference(checkoutPreference)
.startForPayment();
}
```
```swift
===
El flujo de nuestro checkout esta basado en **NavigationController**. Si tu aplicación esta basada también en NavigationControllers podes iniciar el flujo de Checkout utilizando el NavigationController de tu aplicación, sino puedes crear uno, iniciar el Checkout sobre él y luego presentarlo.
===
public func startMercadoPagoCheckout(_ checkoutPreference CheckoutPreference) {
let publicKey = "TEST-ad365c37-8012-4014-84f5-6c895b3f8e0a"

let checkout = MercadoPagoCheckout(publicKey: publicKey, accessToken: nil, checkoutPreference: checkoutPreference,
navigationController: self.navigationController!)

checkout.start()
}
```
```Objective-c
===
El flujo de nuestro checkout esta basado en **NavigationController**. Si tu aplicación esta basada también en NavigationControllers podes iniciar el flujo de Checkout utilizando el NavigationController de tu aplicación, sino puedes crear uno, iniciar el Checkout sobre él y luego presentarlo.
===
-(void)startMercadoPagoCheckout:(CheckoutPreference *)checkoutPreference {
    MercadoPagoCheckout *checkout = [[MercadoPagoCheckout alloc] initWithPublicKey: TEST_PUBLIC_KEY checkoutPreference:checkoutPreference discount:nil navigationController:self.navigationController];
    [checkout start];
}
```

]]]


### 4. Obtén la respuesta

El SDK devolverá siempre un resultado del pago.

Si hubo algún error insalvable o el usuario abandonó el flujo, devolverá un objeto que representa el error para que puedas entender qué pasó.

Estos son los atributos más importantes del pago:

- id: Identificador del pago.
- status: [Estados del pago.](https://www.mercadopago.com.ar/developers/es/api-docs/custom-checkout/webhooks/payment-status/)
- payment\_method\_id: Identificador del medio de pago que eligió tu usuario.
- payment\_type\_id: Tipo de medio elegido.
- card: Objeto que identifica la tarjeta de tu usuario.
- issuer_id: Identificador del banco de la tarjeta que eligió tu usuario.
- installments: Cantidad de cuotas elegidas.


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
```Objective-c
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

Puedes cambiar los colores de la interfaz gráfica del flujo de pago, como así también hacer más oscura la fuente utilizando la clase DecorationPreference. Esto lo puedes lograr con el siguiente código:

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
.setPublicKey(publicKey)
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

let publicKey = "TEST-ad365c37-8012-4014-84f5-6c895b3f8e0a"

let checkout = MercadoPagoCheckout(publicKey: publicKey, accessToken: nil, checkoutPreference: checkoutPreference,
navigationController: self.navigationController!)

checkout.start()
}
```
```Objective-c
DecorationPreference *decorationPreference = [[DecorationPreference alloc] initWithBaseColor:[UIColor fromHex:@"#CA254D"]];
[decorationPreference enableDarkFont];
[MercadoPagoCheckout setDecorationPreference:decorationPreference];

-(void)startMercadoPagoCheckout:(CheckoutPreference *)checkoutPreference {
    MercadoPagoCheckout *checkout = [[MercadoPagoCheckout alloc] initWithPublicKey: TEST_PUBLIC_KEY checkoutPreference:checkoutPreference discount:nil navigationController:self.navigationController];
    [checkout start];
}
```

]]]

El SDK permite setear el color en el formato hexadecimal, es decir por ejemplo **setBaseColor("#060d72");**.

## Activa las notificaciones de pagos

Las notificaciones son la forma automática de enterarte de tus nuevos pagos y las actualizaciones de sus estados.

Esto te permitirá administrar tu stock y mantener tu sistema sincronizado.

Visita la sección [Notificaciones](../../notifications/ipn.es.md) para conocer más sobre esto.

## Prueba la integración

Prueba tu integración antes de salir a producción, a fin de verificar el funcionamiento y realizar los ajustes que necesites.

Para ello debes usar usuario y tarjetas de prueba.

Visita la sección [Probando](./testing.es.md) para más información.

### Próximos pasos

- Visita la sección [Personalización](./personalization.es.md) para adecuar el flujo de pago a tus necesidades.
