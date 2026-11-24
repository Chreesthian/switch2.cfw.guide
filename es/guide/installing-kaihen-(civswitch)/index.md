---
title: Instalar kaiHEN (CivSwitch)
---

# Instalar kaiHEN (CivSwitch)

CivSwitchFS-kaiHEN amplía el cargador CivSwitch anterior con más capacidades, incluido el acceso al sistema de archivos, y se integra con kaiHEN para ofrecer compatibilidad con homebrew. Es *semi-untethered*, lo que significa que se puede activar sin un ordenador y permanecerá activo hasta que se reinicie la consola.

Este proceso es experimental y puede dañar la consola de forma permanente. Es especialmente importante no reiniciar ni cerrar Civilization VII mientras el payload se está ejecutando.

::: danger

Antes de continuar, lee la [información sobre el riesgo de brick](https://github.com/s8n/CivSwitchFS-kaiHEN/blob/slop/BRICK_RISKS.md). Si no te sientes cómodo con esto, deberías esperar a una versión más madura.

- Varias personas han informado de que este exploit ha dejado su consola inutilizada (brick).
- Nunca reinicies ni cierres Civilization VII mientras el payload se esté ejecutando.
- Si una línea del registro empieza por `STATE IS UNSAFE`, fuerza un reinicio manteniendo pulsado el botón de encendido durante 15 segundos.
- Si el registro indica `STATE IS UNKNOWN`, se produce un fallo o no hay resultado, asume lo peor y fuerza un reinicio antes de volver a intentarlo.
- Usa esto solo con el firmware 23.0.1. El proyecto original solo ha probado firmware exFAT; FAT32 debería funcionar, pero está menos probado.

:::

## Requisitos

- Una Switch 2 con el firmware **23.0.1**
- Civilization VII v1.0.0
- El [CivSwitch Remote JS Loader](https://github.com/Gezine/CivSwitch) ejecutándose en la consola
- [Node.js 20](https://nodejs.org/) o posterior y [npm](https://www.npmjs.com) en el ordenador
- Una tarjeta microSD FAT32 o exFAT
    - Se requiere una actualización del sistema para admitir exFAT. Si no has completado la actualización, debes usar FAT32.
- Una conexión de red que no permita a la consola acceder a los servidores de Nintendo ([Bloquear Nintendo](/es/guide/blocking-nintendo/))

## Preparar el ordenador

Clona la rama `slop`, porque la rama de desarrollo activa del repositorio no es `main`:

```sh
git clone --branch slop --single-branch https://github.com/s8n/CivSwitchFS-kaiHEN.git
cd CivSwitchFS-kaiHEN
npm install
```

Mantén disponible esta carpeta del repositorio y actualízala cada vez que se actualice el proyecto.

## Preparar la tarjeta microSD

1. Inserta la tarjeta microSD en el ordenador.
1. Formatea la tarjeta microSD como FAT32 o exFAT, según el estado de la actualización del sistema.
1. Descarga el último archivo `.zip` de [CivSwitchFS-kaiHEN](https://github.com/s8n/CivSwitchFS-kaiHEN/releases/latest)

Extrae el contenido del ZIP en la raíz de la tarjeta microSD y expúlsala de forma segura. La tarjeta debería contener:

```text
/hbmenu.nro
/kaihen/bin/bootstrap.bin
/kaihen/bin/ro/main
/kaihen/bin/hen/main
/kaihen/bin/game/main
/switch/ounceshell/ounceshell.nro
```

Inserta la tarjeta microSD en la consola antes de empezar.

## Iniciar el instalador de persistencia

1. Abre Civilization VII.
2. En el menú principal, selecciona **Cargar partida**.
3. Espera a que la consola de CivSwitch muestre `Awaiting payload`.
4. Busca la dirección IP actual de la Switch 2 en la configuración de red de la consola.
5. En el ordenador, ejecuta este comando desde la carpeta del repositorio clonado:

```sh
npm run persist:chain -- <console-ip>
```

Sustituye `<console-ip>` por la dirección IP de la consola. No incluyas los signos de menor y mayor que.

Espera a que termine la configuración de la partida guardada. Normalmente tarda alrededor de un minuto.

::: warning

No cierres Civilization VII, no inicies otra aplicación ni reinicies la consola durante la instalación. Si la consola falla o el instalador se queda bloqueado, sigue las [instrucciones sobre el riesgo de brick](https://github.com/s8n/CivSwitchFS-kaiHEN/blob/slop/BRICK_RISKS.md) antes de volver a intentarlo.

:::

Cuando el instalador termine correctamente, cierra Civilization VII con normalidad. Cada vez que inicies Civilization VII → **Cargar partida**, se obtendrán privilegios del sistema de archivos y kaiHEN se ejecutará automáticamente.

## Iniciar kaiHEN

1. Inicia Civilization VII y selecciona **Cargar partida**.
1. Espera a que el payload termine y kaiHEN se ejecute.
    - Si no se ejecuta, reinicia la consola y vuelve a intentarlo.
1. Cierra Civilization VII con normalidad.

Ahora nuestro entorno homebrew debería estar instalado, y puedes empezar a usar kaiHEN para ejecutar aplicaciones homebrew en tu Switch 2.
