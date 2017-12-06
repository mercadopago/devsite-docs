Aqui estão algumas dicas para ajudar no desenvolvimento e manutenção desse projeto.

## Clonando para desenvolvimento:

Vá para `wp-content/plugins` na sua instalação de desenvolvimento do WordPress e clone este repositório usando o seguinte comando:

```bash
git clone git@github.com:mercadopago/cart-woocommerce.git woocommerce-mercadopago
```

## Atualizando a Wiki

### Clonando

```bash
git clone git@github.com:mercadopago/cart-woocommerce.wiki.git
```

### Árvore de diretórios e arquivos

```
├── English
├── _Footer.md
├── Home.md
├── images
├── Portugues
└── Espanol

```

Os diretórios `English`, `Portugues`, e `Espanol` contém documentações específicas para cada linguagem.

É possível gerar novos arquivos em cada diretório da seguinte maneira:

```
touch Portugues/Nova-Pagina-Wiki.md
```

Isto irá criar uma nova página wiki com o nome `Nova Pagina Wiki`.

Para as imagens, devemos usar o diretório `images` e usar a seguinte sintaxe para ligar cada imagem ao conteúdo:

```
[[/images/image-name.png|Alt text]]
```
