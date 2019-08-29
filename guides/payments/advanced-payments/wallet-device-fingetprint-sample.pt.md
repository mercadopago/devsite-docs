---
  indexable: false
---

# Fingerprint

#### Exemplo completo de fingerprint para enviar à API DeviceSessions

```json
{
  "fingerprint": {
    "os": "iOS",
    "system_version": "8.3",
    "ram": 18446744071562067968,
    "disk_space": 498876809216,
    "model": "MacBookPro9,2",
    "free_disk_space": 328918237184,
    "vendor_ids": [
      {
        "name": "vendor_id",
        "value": "C2508642-79CF-44E4-A205-284A4F4DE04C"
      },
      {
        "name": "uuid",
        "value": "AB28738B-8DC2-4EC2-B514-3ACF330482B6"
      }
    ],
    "vendor_specific_attributes": {
      "feature_flash": false,
      "can_make_phone_calls": false,
      "can_send_sms": false,
      "video_camera_available": true,
      "cpu_count": 4,
      "simulator": true,
      "device_languaje": "en",
      "device_idiom": "Phone",
      "platform": "x86_64",
      "device_name": "iPhone Simulator",
      "device_family": 4,
      "retina_display_capable": true,
      "feature_camera": false,
      "device_model": "iPhone Simulator",
      "feature_front_camera": false
    },
    "resolution": "375x667"
  }
}
```

#### Exemplo de impressão digital usando SDK

É possível obter a impressão digital de um dispositivo móvel através do Mercado Pago sdk.

Dispositivos [Android](https://github.com/mercadopago/px-android)
```curl
new Device(context);
```

Dispositivos [IOS](https://github.com/mercadopago/px-ios)
```curl
Device()
```