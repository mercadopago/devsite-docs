# Realizar uma compra de teste

Nesta documentação, mostraremos o passo a passo de como realizar uma compra de teste na sua integração do Checkout Pro.

## Criar o pagamento

1. Faça login no site do Mercado Pago usando o nome de usuário e a senha da **conta de teste do vendedor** que você criou anteriormente.
2. Crie um novo aplicativo para uma integração do Checkout Pro. Nele, obtenha as **credenciais de produção** (`access_token`) **do usuário de teste do vendedor**.
3. Em sua integração, utilize o `access_token` que você acabou de obter na Preferência da sua integração. Lembre-se de que deve ser o `access_token` das **credenciais de produção da conta de teste do vendedor**.
4. Inicialize seu checkout usando o valor `id` da preferência que você criou durante a integração do Checkout Pro. Você pode encontrar mais informações sobre os parâmetros de resposta acessando a documentação da API [Criar preferência](/developers/pt/reference/preferences/_checkout_preferences/post).

> WARNING
>
> Importante
>
> Se a sua integração usar um [Esquema de abertura direto](//developers/pt/docs/checkout-pro/checkout-customization/user-interface/opening-schema#bookmark_esquema_de_abertura_direto), você precisará inicializar seu checkout usando o valor `init_point` encontrado na resposta. Você pode encontrar mais informações sobre os parâmetros de resposta acessando a documentação da API [Criar preferência](/developers/pt/reference/preferences/_checkout_preferences/post).

## Realizar o pagamento

1. Faça login no site do Mercado Pago usando o nome de usuário e a senha da **conta de teste do comprador**. Recomendamos fazer isso em um navegador no modo "Navegação anônima".
2. Vá para o site onde você integrou o Checkout Pro e clique no botão de compra do Mercado Pago que você renderizou anteriormente.
3. Por fim, siga as instruções do Checkout Pro e faça uma compra de teste usando a **conta de teste do comprador**. Para isso, forneça dados dos [Cartões de teste](/developers/pt/docs/checkout-pro/integration-test/prerequisites/test-cards) ----[mla, mlb, mpe, mco, mlu, mlc]----e um documento de identificação com nove dígitos------------. Lembre que você pode simular diferentes resultados de compra usando diferentes cartões de teste.