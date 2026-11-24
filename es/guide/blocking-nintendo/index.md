---
title: "Bloquear Nintendo"
---

# Bloquear Nintendo

Para evitar que Nintendo te incluya en la lista negra y perder el acceso a homebrew, es muy importante mantener tu consola desconectada de los servicios en línea de Nintendo en todo momento. Esto se debe a la «FunctionBlackList» de Nintendo.

La forma más segura de evitar la lista negra sería simplemente mantener la consola desconectada de cualquier red; sin embargo, para ejecutar homebrew en la Switch 2, es necesario enviar un payload desde otro dispositivo de la misma red local. Por lo tanto, debemos encontrar la forma de tener acceso a la red sin que la consola se conecte a los servidores de Nintendo.

### FunctionBlackList

La FunctionBlackList es un sistema implementado por Nintendo que incluye en la lista negra los puntos de entrada que se usan para explotar la consola cuando esta se conecta a sus servicios en línea. Esta lista se puede actualizar sin reiniciar ni actualizar el firmware de la consola.

Si tu consola se conecta a los servidores de Nintendo después del **12 de noviembre de 2026**, se incluirá en la lista negra y perderás la capacidad de usar homebrew.

Por suerte, hay formas de impedir que tu consola se conecte a los servidores de Nintendo, como usar métodos de bloqueo basados en DNS, como 90DNS.

### ¿Qué es 90DNS?

90DNS es un servicio <Definition term="DNS">Un DNS (Domain Name System o sistema de nombres de dominio) es un sistema que traduce nombres de dominio legibles por humanos a direcciones IP.</Definition> personalizado diseñado para bloquear los servidores de Nintendo y proteger tu consola de ser incluida en la lista negra. Redirige las peticiones a los servidores de Nintendo a una dirección inexistente, lo que impide de forma efectiva cualquier comunicación con los servicios en línea de Nintendo.

Lamentablemente, algunos proveedores de servicios de Internet (ISP) interceptan las peticiones DNS, lo que puede eludir el método de bloqueo de 90DNS. Esto significa que, incluso si has configurado 90DNS correctamente, es posible que tu consola siga pudiendo acceder a los servidores de Nintendo.

## Probar 90DNS

Una forma sencilla de comprobar si 90DNS funciona es intentar aplicar la configuración de DNS en un dispositivo secundario y visitar una página de prueba ([90dns.test](http://90dns.test)). Si la página carga correctamente, indica que el bloqueo de DNS funciona como se espera.

1. Conecta tu dispositivo secundario a la red que tienes previsto usar con tu Nintendo Switch 2.
1. Abre la configuración de red de tu dispositivo secundario.
1. Busca la opción **Configuración de DNS** en la configuración de red.
1. Configura el DNS primario y el secundario con las direcciones indicadas a continuación, según el <Definition term="orden de proximidad">Por ejemplo, si vives en Europa, configurarías el DNS primario con el servidor francés.</Definition> correspondiente a tu ubicación.
    - `207.246.121.77` (EE. UU.)
    - `163.172.141.219` (Francia)
1. Guarda la configuración de DNS y vuelve a conectarte a la red.
1. Abre un navegador web en el dispositivo secundario y visita [http://90dns.test](http://90dns.test) para comprobar que el bloqueo de DNS funciona correctamente.

Si todo ha ido bien, deberías ver un mensaje que dice «You are successfully connected to 90DNS. Happy hacking!».

Si no ves este mensaje, el bloqueo de DNS no está funcionando correctamente y no es seguro usar 90DNS en tu consola. Puede que necesites configurar una red aislada específicamente para tu consola; sin embargo, eso queda fuera del alcance de esta guía.

## Acceder a la configuración de red

::: warning

Si usas el **Modo avión** para bloquear el acceso a Wi-Fi, asegúrate de que las redes registradas estén desactivadas o fuera de alcance.

:::

Una vez confirmado que 90DNS funciona, ya podemos aplicar la configuración de DNS a nuestra Nintendo Switch 2.

Al conectarnos a una nueva red, introduciremos intencionadamente una contraseña incorrecta para impedir que la consola se conecte a internet antes de poder configurar los ajustes de DNS.

1. En tu Nintendo Switch 2, ve a **Configuración de la consola** → **Internet** → **Configuración de Internet**.
1. Elimina o edita cualquier conexión de red existente, incluidas las cableadas.
    - Para editar una red existente, selecciónala y elige **Cambiar configuración** antes de pasar a [la siguiente sección](#configurar-los-ajustes-de-dns-e-ipv6).
1. Selecciona una red con contraseña a la que quieras conectarte.
    - Para usar una red sin contraseña, elige la opción **Configuración manual** e introduce el nombre de la red manualmente antes de pasar a [la siguiente sección](#configurar-los-ajustes-de-dns-e-ipv6).
1. Introduce una contraseña incorrecta de al menos 8 caracteres y pulsa **Aceptar**.
1. Cuando falle la conexión, pulsa **Aceptar** para cerrar el mensaje de error y **Cerrar** para ocultar los detalles del error.
1. Cuando se te pida que vuelvas a introducir la contraseña, elige **Ver configuración**.

## Configurar los ajustes de DNS e IPv6

1. Desactiva **Conexión IPv6**.
1. Cambia **Configuración de DNS** a **Manual**.
1. Introduce las direcciones de DNS primario y secundario indicadas a continuación, según el <Definition term="orden de proximidad">Por ejemplo, si vives en Europa, configurarías el DNS primario con el servidor francés.</Definition> correspondiente a tu ubicación.
    - `207.246.121.77` (EE. UU.)
    - `163.172.141.219` (Francia)
1. Comprueba de nuevo que has <Definition term="desactivado IPv6">Si estás familiarizado con el hackeo de Switch, ¡esta es una opción nueva en la Switch 2!</Definition>.
1. Guarda la configuración, pero **no** te conectes a la red todavía.
1. Reinicia la consola para actualizar la caché de DNS.

Ahora que la configuración de DNS está aplicada y la consola se ha reiniciado, deberías poder conectarte a la red de forma segura.
