Estos son algunos consejos para ayudar con el desarrollo y mantenimiento de este proyecto.

## Clonación para el desarrollo:

Vaya a `wp-content/plugins` en su instalación de desarrollo de WordPress y clona este repositorio usando el siguiente comando:

```bash
git clone git@github.com:mercadopago/cart-woocommerce.git woocommerce-mercadopago
```

## Actualización de la Wiki

### Clonación

```bash
git clone git@github.com:mercadopago/cart-woocommerce.wiki.git
```

### Árbol de directorios y archivos

```
├── English
├── _Footer.md
├── Home.md
├── images
├── Portugues
└── Espanol

```

Los directorios `English`,` Portugues` y `Espanol` contienen documentación específica para cada idioma.

Es posible generar nuevos archivos en cada directorio con la siguiente manera:

```
touch English/Nueva-Pagina-Wiki.md
```

This will generate a wiki page with the name of `Nueva Pagina Wiki`.

Para las imágenes debemos usar el directorio `images` y usar la siguiente sintaxis para vincular cada imagen en el contenido:

```
[[/images/image-name.png|Alt text]]
```
