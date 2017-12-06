Aquí hay algunos tips para ayudar con el desarrollo y mantenimiento del proyecto. 

## Clonar para desarrollo:

Ir a `wp-content/plugins` bajo tu desarrollo de la instalación de Wordpress y clonar el repositorio utilizando el siguiente comando:

```bash
git clone git@github.com:mercadopago/cart-wp-commerce.git wpecomm-mercado-pago-module
```

## Actualizar la Wiki

### Clonando

```bash
git clone git@github.com:mercadopago/cart-wp-commerce.wiki.git
```

### Árbol de directorio y archivos

```
├── English
├── _Footer.md
├── Home.md
├── images
├── Portugues
└── Espanol

```

Los directorios `English`, `Portugues`, y `Español` contienen docummentación específica para cada lenguaje. 
Es posible generar nuevos archivos en cada directorio de la siguiente forma: 

```
Click en English/New-Wiki-Page.md
```

Esto generará una página de Wiki con el mismo nombre de `New Wiki Page`.

Para imágenes deberíamos utilizar las `imágenes` del directorio y utilizar la siguiente sintaxis para linkear cada imagen en el contenido:

```
[[/images/image-name.png|Alt text]]
```
