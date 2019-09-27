---
sites_supported:
  - mla
  - mlb
  - mlv
  - mco
  - mlm
  - global

---

# Integración avanzada

## Recibe notificaciones de tus órdenes

Las [notificaciones IPN](https://www.mercadopago.com.ar/developers/es/guides/notifications/ipn/) (Instant Payment Notification) son la **forma automática de aviso de la creación de nuevas órdenes y las actualizaciones de sus estados**. Por ejemplo si fueron aprobados, rechazados o si se encuentran pendientes.

Implementa IPN de `merchant_order` junto con una búsqueda de la orden por `external_reference` como método de contigencia.

## Devoluciones de tus pagos

Las devoluciones suceden cuando el pago se realizó pero el vendedor decide anularlo total o parcialmente.
Puedes encontrar toda la información en la [sección Devoluciones y cancelaciones](https://www.mercadopago.com.ar/developers/es/guides/manage-account/cancellations-and-refunds).

> WARNING
> 
> Nota
> 
> Ten en cuenta que para pagos presenciales, solo puedes efectuar devoluciones pero no cancelaciones.

## Genera reportes de tus ventas

Integra los [reportes de conciliación de Mercado Pago](https://www.mercadopago.com.ar/developers/es/guides/manage-account/reconciliation-reports/) con tu sistema para conciliar tus ventas y conocer los movimientos de tu cuenta.

## Prueba y valida tu integración

Detallamos todos los casos necesarios que debes probar para validar que tu sistema esté integrado correctamente con Mercado Pago. 
Puedes encontrar todos los casos en la sección de Pruebas.

### Próximos pasos

<div>  
<a href="https://www.mercadopago.com.ar/developers/es/guides/instore-payments/qr-payments/integration-test/" style="text-decoration:none;color:inherit">
<blockquote class="next-step-card next-step-card-right">
<p class="card-note-title">Prueba tu integración<span class="card-status-tag card-status-tag-recommended">RECOMENDADO</span></p>
 <p>Realiza los casos de uso más frecuentes para validar tu integración.</p>
</blockquote>
</a>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>