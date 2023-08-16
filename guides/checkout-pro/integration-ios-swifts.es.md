# Integrar Checkout Pro para iOS con Swift

> WARNING
>
> Importante
>
> Antes de comenzar a integrar Checkout Pro para Mobile, deberás contar con una preferencia creada en tu backend. Si aún no lo has hecho, ve a [Creación de preferencia](/developers/es/docs/checkout-pro/common-initialization).

Safari View Controller integra todo Safari dentro de su aplicación usando un controlador de vista opaco. Es decir, no puede diseñarlo, no puede interactuar con él y no puede extraer ningún dato privado de él. Como resultado, **SFSafariViewController** puede aprovechar los datos web seguros del usuario.

En este paso vamos a instalar y configurar las dependencias necesarias para implementar **SFSafariViewController** en tu proyecto desarrollado en Swift. 

> CLIENT_SIDE
>
> h2
>
> Instalación de SFSafariViewController

SFSafariViewController no forma parte del [UIKit](https://developer.apple.com/documentation/uikit) por lo que, para usarlo, **deberás importar Safari Services Framework** que contiene los servicios necesarios para integrar comportamientos de Safari en tu aplicación iOS.

> Asegúrate de que el framework SafariServices esté agregado a tu proyecto. Si aún no lo tienes, dirígete a "Build Phases" y agrégalo en "Link Binary With Libraries".

Para instalarlo, ve al archivo en donde desees utilizar Safari View Controlles e importa la biblioteca SafariServices.

```Main.swift
import SafariServices
```

Al trabajar con SFSafariViewController, puedes abrir la URL de preferencia con sólo enviar la URL o agregando algunos ajustes de configuración. A continuación, te mostramos algunos ejemplos de referencia para la implementación de SFSafariViewController.

[[[
```SwiftUI
import SwiftUI
import SafariServices

struct ContentView: View {
    var body: some View {
        VStack {
            Button("Open Preference" ) {
                if let url = URL(string:"YOUR-URL-PREFERENCE")
                {
                    if let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene {
                        if let rootViewController = windowScene.windows.first?.rootViewController {
                            let safariVC = SFSafariViewController(url: url)
                            rootViewController.present(safariVC, animated: true, completion: nil)
                        }
                    }
                    
                }
                
            }
        }
        .padding()
    }

}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
```

```UIKit
import SafariServices
import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        let button = UIButton()
        button.setTitle("Open Preference", for: .normal)
        button.backgroundColor = .systemBlue
        view.addSubview(button)
        button.frame = CGRect(x: 100, y: 100, width: 200, height: 50)
        button.layer.cornerRadius = 25
        button.addTarget(self, action: #selector(openSafariViewController)  , for: .touchDown)
    }
    
    @objc func openSafariViewController(_ sender: Any) {
        if let url = URL(string: "YOUR-URL-PREFERENCE") {
            let safariViewController = SFSafariViewController(url: url)
            present(safariViewController, animated: true, completion: nil)
        }
    }

}
```
]]]

> CLIENT_SIDE
>
> h2
>
> Cómo volver a tu App 

Los **Deep Links**, también conocidos como enlaces profundos, son una forma poderosa de permitir la navegación directa a pantallas o secciones específicas de una aplicación móvil. 

### Crear un Deep Link
Desde nuestro checkout es posible configurar Deep Links para volver a tu aplicación ya sea haciendo click en un link de “Volver” o de forma automática al terminar todo un flujo de pago exitoso, para luego ser redirigido a tu App.
Para esto debemos agregar en la creación de la preferencia de pago las propiedades `back_urls` y `auto_return` según corresponda.

Para conocer más, puedes acceder a la documentación de [URLs de retorno](/developers/es/docs/checkout-pro/checkout-customization/user-interface/redirection).
