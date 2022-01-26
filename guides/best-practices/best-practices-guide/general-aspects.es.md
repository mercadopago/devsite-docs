# Aspectos generales de tu checkout

Conoce los componentes principales de un checkout y cómo optimizarlos para ofrecerle una mejor experiencia a tus usuarios y generar más conversiones.

## Segmenta tu contenido

Utiliza **títulos** para agrupar temáticamente los datos requeridos e informar al usuario sobre la sección en la que se encuentra, y los **subtítulos** para contextualizar o explicar qué acción se debe realizar. También, puedes agregar textos **explicativos** que profundicen una información cuando sea necesario. 

![aspectos generales - segmenta tu contenido](/images/best-practices-guide/EspAspectosGeneralesSegmentaTuContenido.png)

Los títulos ayudan a la escaneabilidad y los subtítulos permiten que el usuario tenga más información y, en consecuencia, se sienta más seguro.

## Optimiza tus formularios

Los **formularios** son conjuntos de inputs relacionados entre sí y con un objetivo en común (ejemplo: datos personales). A su vez, los **inputs** son campos donde se completa y edita la información requerida. Estos deben tener un orden lógico dentro del formulario y se deben diferenciar los opcionales de los obligatorios. Además, deben ser lo suficientemente largos para que el usuario vea la información ingresada y pueda revisar y editar fácilmente.

Para facilitar el llenado de datos y no cansar al usuario:

* Utiliza pocos inputs por formulario.
* Elimina todo pedido de información que no sea indispensable para el proceso de compra o se pueda inferir mediante un dato previo. 
* No seas redundante y pide cada dato una sola vez, siempre que sea posible.

![es aspectos generales optimizatusformularios dos&don't](/images/best-practices-guide/ESPAspectosGeneralesOptimizaTusFormulariosDoDont.png)

## Agrega elementos a tus inputs que guíen al usuario:

### Labels y placeholders

Las **labels** son los nombres de cada input e indican qué dato se debe ingresar allí. Deben permanecer siempre visibles para que el usuario pueda escanear y completar más rápido el formulario, ya que se usan de guía y evitan el esfuerzo de recordar. 

A su vez, los **placeholders** son los textos de relleno de cada input que ejemplifican o explican el dato a ingresar. Aprovecha esta instancia para colocar ejemplos de formato o accionables. Cuando el cursor se ubica en el input o se completa el dato, el placeholder desaparece. Por eso, evita utilizar placeholders como labels para que el usuario no deba esforzarse por recordar qué dato va en cada input o deba borrar lo ingresado si quiere confirmarlo.

Tanto las labels como los placeholder deben ser cortos, directos y claros para evitar que el usuario cometa errores. 

![es labels y placeholders dos&don't](/images/best-practices-guide/EspAspectosGeneralesLabelsPlaceholdersDoDont.png)

### Helpers y tooltips

Los **helpers** son textos explicativos que se colocan debajo de los inputs y permiten dar información adicional acerca de qué es o por qué se pide cierto dato. Utilízalos para justificar datos sensibles o dar información relevante sobre el campo.

Por su parte, los **tooltips** son notificaciones emergentes que ofrecen un nivel adicional de información cuando el helper no es suficiente. Utilízalos para agregar definiciones, información adicional extendida o accionables a través de links.

![es helpers y tooltips dos&don't](/images/best-practices-guide/EspAspectosGeneralesHelpersTooltip.png)

### Mensajes de éxito y error

Los **mensajes de éxito o error** validan la información ingresada en los inputs. Para hacer énfasis, se pueden poner en color verde los de éxito y en rojo los de error. 

Coloca mensajes de éxito solo si es necesario una confirmación o el dato ingresado agrega valor (ejemplo: envío gratuito o descuento). En caso de error, es importante que se aclare el mismo y se oriente al usuario hacia una solución para que no vuelva a fallar y se frustre. Si el input tiene un helper, éste debe ser reemplazado por el mensaje de error.

![es Mensajes de éxito y error](/images/best-practices-guide/EspAspectosGeneralesMsjErrorDoDont.png)

## Agrega accionables claros

Los **call to action** (CTAs) permiten realizar las acciones principales y secundarias de una pantalla y pueden aplicarse con diferentes estilos (botones, íconos o links) según su jerarquía y en diferentes lugares (cards, tootltips, etc). Algunos consejos:

* Usa colores contrastantes para que destaquen y contrasten con el fondo.
* Procura que sean claros y directos para dar contexto.
* Utiliza botones para las acciones principales y escríbelas en el tiempo verbal infinitivo para que no dé lugar a ambigüedades.
* Agrega links para acciones secundarias que añadan contexto y procura que sea un texto autoexplicativo que haga referencia hacia dónde redirige el mismo.

![es Agrega accionables claros](/images/best-practices-guide/EspAspectosGeneralesAccionablesClaros.png)

El CTA debe dejar clara la acción y qué sucederá al hacer clic en él.

## Ofrece opciones y destaca sus ventajas

El usuario debe elegir entre diferentes opciones a lo largo de todo el proceso de pago (tipo de envío, formas de pago, número de cuotas, etc) y la conversión puede variar según diferentes factores y el contexto de cada uno. 

Por eso, ofrece opciones que incluyan diferentes variables posibles y ordénalas de forma descendente, teniendo en cuenta las más usadas o beneficiosas para tus clientes. Sin embargo, no ofrezcas un número ilimitado de opciones, solo las más comunes porque, de lo contrario, puedes confundir y entorpecer el proceso de selección. 

Puedes utilizar radio buttons cuando sean pocas opciones y solo se pueda elegir una de ellas, dropdowns cuando sean varias opciones y no quieras ocupar tanto espacio de pantalla o cards cuando sean opciones visuales, entre otras. Además, puedes agregar las propuestas de valor más destacadas en cada opción para ayudar a que el usuario tenga más información para tomar una decisión.

![es Ofrece opciones do&don't](/images/best-practices-guide/EspAspectosGeneralesOfreceOpcionesDoDont.png)

## Saltea pasos innecesarios

Evita pedir datos repetidos, que puedan ser inferidos o no sean necesarios para finalizar la compra. Para eso, aprovecha las instancias de pedido de datos obligatorios y obtén información que vayas a necesitar más adelante.

Por ejemplo, utiliza la información personal y de envío para tomar los datos de facturación y no sumar un formulario extra que ralentice el proceso de pago.

![es Saltea pasos innecesarios](/images/best-practices-guide/EspAspectosGeneralesSalteaPasosInnecesarios.png)

Simplifica y acorta el proceso de carga de datos con checkboxes que infieran información de pasos previos o desplieguen un formulario en caso de que el usuario quiera cargar información diferente.

## Da visibilidad durante el proceso y permite revisar la compra antes de confirmar

Si bien la mayoría de los usuarios revisan su compra al final, se sienten más seguros si pueden ir controlando lo que van haciendo durante todo el proceso. Para eso, puedes agregar un **componente de resumen fijo** o un acceso directo al carrito de compras que muestre el precio total a pagar según las acciones que se van realizando (ejemplo: cupón de descuento, costo de envío, etc). 

<p align="center">
<img src="https://http2.mlstatic.com/storage/dx-devsite/docs-assets/images/best-practices-guide/EspAspectosGeneralesVisibilidadDelProceso.gif?v=3.46.1-rc-6">
</p>

Puedes agregar un componente de resumen que permanezca durante todo el proceso y muestre las acciones realizadas con el total a pagar. De esta forma, el usuario siempre tiene visibilidad y control sobre el precio final.

Además, antes de finalizar la compra, permite que tus usuarios puedan revisar todo el proceso y el precio final. Para esto, agrega una **página de confirmación** o revisión, previo a realizar el pago.

En esta página, incluye un resumen de todas las decisiones tomadas e información cargada y el detalle del total a pagar. Es importante, dar la posibilidad de editar cualquiera de los datos desde allí, sin la necesidad de volver a los pasos previos.

<p align="center">
<img src="https://http2.mlstatic.com/storage/dx-devsite/docs-assets/images/best-practices-guide/EspAspectosGeneralesConfirmaTuCompra.gif?v=3.46.1-rc-6">
</p>

Permitir la edición en una instancia previa a confirmar la compra, facilita la escaneabilidad y ayuda a que la edición de datos incorrectos sea más rápido y sin necesidad de volver atrás.

> PREV_STEP_CARD_ES
>
> Buenas prácticas de UX para checkouts
>
> Una introducción la a guía pensada para desarrolladores, sellers y agencias.
>
> [Introducción](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/best-practices-guide/introduction)

> NEXT_STEP_CARD_ES
>
> Crea un checkout ágil
>
> Sigue los pasos para crear un checkout fácil de recorrer y entender.
>
> [Crear un checkout ágil](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/best-practices-guide/create-a-fast-checkout)
