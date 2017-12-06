Here are some tips to help with the development and maintenance of this project.

## Cloning for development:

Go to `wp-content/plugins` under your development WordPress installation and clone this repository using the follow command:

```bash
git clone git@github.com:mercadopago/cart-woocommerce.git woocommerce-mercadopago
```

## Updating the Wiki

### Cloning

```bash
git clone git@github.com:mercadopago/cart-woocommerce.wiki.git
```

### Directory tree and files

```
├── English
├── _Footer.md
├── Home.md
├── images
├── Portugues
└── Espanol

```

The directories `English`, `Portugues`, and `Espanol` contains specific documentation for each language.

It's possible generate new files into each directory in the follow way:

```
touch English/New-Wiki-Page.md
```

This will generate a wiki page with the name of `New Wiki Page`.

For images we should use the `images` directory and use the follow syntax to link each image into the content:

```
[[/images/image-name.png|Alt text]]
```
