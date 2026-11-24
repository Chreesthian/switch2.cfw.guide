---
title: Preparar CivSwitch
---

# Preparar CivSwitch

CivSwitch utiliza el cartucho de juego Civilization VII v1.0.0 para obtener ejecución de código <Definition term="userland">Las aplicaciones userland no tienen acceso total al sistema, pero pueden ejecutar código dentro de su entorno limitado.</Definition> en la Nintendo Switch 2.

Esta sección explica cómo preparar y flashear una Raspberry Pi Pico para que pueda enviar el payload de CivSwitch. Necesitarás:

- Una Raspberry Pi Pico 1 o Pico 2 compatible.
- Un cable USB compatible con la transmisión de datos.
- Un ordenador con Windows, macOS o Linux.
- Un cartucho de juego Civilization VII v1.0.0.

::: tip

Sigue las instrucciones de [Bloquear Nintendo](/es/guide/blocking-nintendo/) antes de conectar la consola a internet. Una red mal configurada puede provocar que Nintendo bloquee el juego.

:::

## Descargar el firmware

Descarga la última [versión de CivSwitch](https://github.com/Gezine/CivSwitch/releases/latest) y extrae el archivo ZIP.

Elige el firmware UF2 que corresponda tanto a tu placa Pico como al idioma de entrada de tu consola:

| Placa | Inglés (EE. UU.) | Japonés |
|------|--------------|----------|
| Raspberry Pi Pico 1 / RP2040 | `civ7-pico1.uf2` | `civ7-pico1-jis.uf2` |
| Raspberry Pi Pico 2 / RP2350 | `civ7-pico2.uf2` | `civ7-pico2-jis.uf2` |

No uses el firmware JIS a menos que la Switch esté configurada con una distribución de teclado JIS.

## Flashear la Pico

1. Desconecta la Pico de todos los dispositivos.
2. Mantén pulsado el botón **BOOTSEL** de la Pico.
3. Conecta la Pico al ordenador con un cable USB de datos mientras sigues manteniendo pulsado **BOOTSEL**.
4. Suelta **BOOTSEL** cuando aparezca una unidad extraíble llamada `RPI-RP2` o `RP2350`.
5. Copia el archivo `.uf2` seleccionado en esa unidad.
6. La unidad se desconectará y la Pico se reiniciará automáticamente.

La Pico ya está lista para actuar como teclado USB y macro de mando.

## Configurar la consola

Antes de usar CivSwitch:

1. Configura el **Idioma del sistema** en **Inglés (EE. UU.)**.
2. En **Configuración de la consola → Mandos y accesorios**, configura **Cambiar la distribución del teclado USB** en **Inglés (EE. UU.)**.
3. Asegúrate de que la consola esté conectada a una red con los servidores de Nintendo bloqueados por [90DNS](https://gitlab.com/a/90dns).
4. Inserta el cartucho de Civilization VII v1.0.0 e inicia el juego.

El idioma y la distribución del teclado se pueden restaurar después de instalar el disparador persistente al arranque.

## Enviar el payload inicial

1. En el menú principal de Civilization VII, selecciona **Multijugador**.
2. Selecciona **Inalámbrica**.
3. Crea una sala y conviértete en anfitrión.
4. Abre la pantalla de **Chat** de la sala y coloca el foco en el cuadro de texto del chat.
5. En el modo televisor, conecta la Pico flasheada a la consola.
6. Espera a que se ilumine el LED de la Pico. La macro comienza poco después del arranque y escribe el payload automáticamente.

El payload tarda unos 20 minutos en escribirse. No desconectes la Pico ni interactúes con el campo de chat mientras se está ejecutando.

Cuando termine, debería aparecer Remote JS Loader en la consola y ponerse a escuchar en el puerto TCP `9026`.

## Instalar el disparador persistente al arranque

El payload inicial solo está activo mientras se ejecuta la sesión del cargador. Instalar el disparador permite que se ejecute de nuevo después de reiniciar.

En un ordenador, clona el repositorio de CivSwitch e instala las dependencias necesarias de Node.js:

```sh
git clone https://github.com/Gezine/CivSwitch.git
cd CivSwitch/installer-creator
npm install
```

Busca la dirección IP de la Switch 2 en la configuración de red de la consola y ejecuta:

```sh
python install.py <console-ip>
```

El script sube e instala el payload predeterminado de Remote JS Loader. Espera hasta que muestre `INSTALL DONE`.

::: warning

No cierres ni interrumpas `install.py` hasta que finalice la instalación.

:::

Después de la instalación:

1. Reinicia la consola.
2. Inicia Civilization VII.
3. En el menú principal, selecciona **Cargar partida**.
4. El disparador de arranque iniciará el payload automáticamente.

El disparador se ejecutará cada vez que uses **Cargar partida** después de reiniciar.
