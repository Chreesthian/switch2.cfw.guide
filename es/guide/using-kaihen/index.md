---
title: Usar kaiHEN
---

# Usar kaiHEN

kaiHEN te permite abrir el menú de homebrew e iniciar aplicaciones homebrew mientras se está ejecutando.

## Iniciar kaiHEN

kaiHEN permanece activo hasta que se reinicia la consola.

1. Inicia **Civilization VII**.
2. En el menú principal, selecciona **Cargar partida**.
3. Espera a que el payload persistente inicie kaiHEN.
4. Cierra Civilization VII con normalidad.

Si el payload no se ejecuta, reinicia la consola por completo y vuelve a intentarlo.

## Abrir el lanzador de homebrew

1. Mantén pulsado **R** mientras inicias cualquier juego nativo de Switch 2.
2. En el primer inicio con R pulsada, kaiHEN solo registra la política de firma del juego. El juego debería iniciarse con normalidad.
3. Cierra el juego y vuelve a mantener pulsado **R** mientras lo inicias de nuevo.
4. El segundo inicio con R pulsada debería abrir hbmenu.

Si no se abre hbmenu, cierra el juego y prueba otro inicio con R pulsada. Mantén activo el payload de Civilization VII antes del inicio con R pulsada.

## Iniciar homebrew

Coloca las aplicaciones homebrew de Switch 2 en la carpeta `/switch/` de la tarjeta microSD. Cada aplicación necesita un archivo `.nro`.

En hbmenu:

1. Ve a la carpeta **switch**.
2. Selecciona una aplicación homebrew.
3. Pulsa **A** para iniciarla.

También puedes usar OunceShell desde `/switch/ounceshell/ounceshell.nro` para explorar y gestionar archivos.

## Usar OunceShell

OunceShell es un gestor de archivos para la Switch 2 que te permite explorar y gestionar los archivos de la tarjeta microSD. También puedes crear un servidor FTP para transferir archivos entre la consola y un ordenador.

## Reiniciar o salir

Cerrar una aplicación con normalidad te devuelve a hbmenu o al entorno del juego. Vuelve a abrir hbmenu con el método de inicio con R pulsada mientras kaiHEN siga ejecutándose.

Cuando se reinicie la consola, vuelve a cargar el exploit para activar kaiHEN y recuperar el acceso a homebrew.
