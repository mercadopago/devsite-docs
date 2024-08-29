# What is the Platform ID?

The `PLATFORM_ID` is information used to identify the official partner platforms of Mercado Pago.

Its application involves including the ID provided by the Partners team in the header of payment requests, using the `x-platform-id` field.

Example via header:

```curl
--header 'x-platform-id: (PLATFORM_ID provided by the Partners team)'
```

## Prerequisite

Before obtaining your `PLATFORM_ID`, you need to request it from the Partners team and wait for the approval of your solution. Once approved, the `PLATFORM_ID` will be created and provided so you can include the corresponding ID in your integration.