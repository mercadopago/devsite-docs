# Integra el flujo de pago de Mercado Pago en tu aplicación

## 1. Crea un botón de pago

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

## 2. ¡Inicia el Checkout!

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

## 3. Obtén la respuesta

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

## Activa las notificaciones de pagos

Las notificaciones son la forma automática de enterarte de tus nuevos pagos y las actualizaciones de sus estados. Esto te permitirá administrar tu _stock_ y mantener tu sistema sincronizado.

Visita la sección [Notificaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/ipn/introduction) para conocer más sobre esto.

## Previene pagos rechazados

Un pago puede ser rechazado porque el emisor del medio de pago detecta un problema o porque no se cumple con los requisitos de seguridad necesarios.

Evita pagos rechazados con nuestras recomendaciones y [mejora la aprobación de tus pagos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/payment-rejections).

## Prueba la integración

Prueba tu integración antes de salir a producción, a fin de verificar el funcionamiento y realizar los ajustes que necesites.

Para ello debes usar usuario y tarjetas de prueba, visita la sección [Pruebas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/mobile-checkout/testing) para más información.

## Próximos pasos

- Visita la sección [Personalización](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/mobile-checkout/personalization) para adecuar el flujo de pago a tus necesidades.
