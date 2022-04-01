# Instalação via Composer

Para instalar o plugin Mercado Pago no Magento 2 via Composer, você deve seguir estes passos:

1. Em seu terminal, execute este comando para baixar o plugin Magento 2 com o Composer:

```
composer require mercadopago/magento2-plugin:3.*
```

2. Em seguida, execute este comando para atualizar a lista de plugins Magento:

```
bin/magento setup:upgrade
```

3. Agora você deve executar este comando para limpar o cache do Magento:

```
bin/magento cache:clean
```

4. Quando a loja estiver em **modo produção**, será necessário gerar novamente os arquivos `estáticos`. Você pode fazer desta maneira:

```
bin/magento setup:static-content:deploy
```

Caso você enfrente problemas de permissão de pasta ao acessar a loja, será necessário renovar as permissões da seguinte forma:

```
chmod 777 -R var/ pub/ generated/
```

Pronto! Você instalou com sucesso o plugin Mercado Pago para Magento 2.