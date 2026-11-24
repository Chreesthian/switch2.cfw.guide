---
layout: home
title: "Guía de Switch 2"

hero:
  name: "Guía de Switch 2"
  text: "La guía completa para homebrew"
  actions:
    - theme: brand
      text: Primeros pasos
      link: ./guide/get-started/
---

# ¿Qué es el homebrew?

Las aplicaciones homebrew son software no licenciado creado para sistemas cerrados como la Nintendo Switch 2. Estas aplicaciones pueden incluir utilidades, ports, juegos personalizados, emuladores y otro software que Nintendo no admite oficialmente.

Puedes ejecutar homebrew de forma gratuita en consolas Nintendo Switch 2 con la versión de firmware **23.0.1**. Necesitarás un punto de entrada compatible y una tarjeta microSD. Aunque la Switch 2 requiere una tarjeta microSD «Express» para almacenar juegos, las aplicaciones homebrew se pueden guardar en una tarjeta microSD estándar.

# Puntos de entrada compatibles

Los siguientes juegos se pueden usar como punto de entrada para homebrew:

- **Civilization VII** (v1.0.0)
- **SmileBasic 4** (v4.4.9)
- **Seedsow Lullaby** (v1.1.0)

Las versiones de demostración de estos juegos también son compatibles.

# FunctionBlackList (SuperNag)

Si tu consola se ha conectado a los servidores de Nintendo después del 12 de noviembre de 2026, ya no podrás usar homebrew.

La FunctionBlackList es una función que permite a Nintendo bloquear de forma remota ciertas versiones de juegos en la Nintendo Switch 2. Esto puede impedir que se inicie homebrew a través de los puntos de entrada afectados. Al conectar tu consola a internet, te arriesgas a perder el acceso a estos puntos de entrada, ya que Nintendo los incluye en la lista negra.

Para evitar que esto te afecte, se recomienda **mantener tu consola desconectada de internet** si tienes intención de usar homebrew. Soluciones DNS como [90DNS](https://gitlab.com/a/90dns) pueden bloquear el acceso a internet; sin embargo, algunos proveedores de servicios de Internet (ISP) pueden interceptar estas peticiones DNS, lo que hará que este método no sea efectivo. Usa otro dispositivo para comprobar si 90DNS funciona correctamente antes de depender de él en tu consola Switch 2. Puede que merezca la pena crear una red aislada con un punto de acceso dedicado a tu consola Switch 2.

# Riesgo de daños

Activar homebrew requiere usar un exploit del «FS» (sistema de archivos). Aunque este exploit proporciona un mayor nivel de acceso al sistema, existe un riesgo pequeño pero muy real de **inutilizar tu consola de forma permanente** (brick), es decir, que quede «tan útil como un ladrillo».

Al usar homebrew, aceptas este riesgo. Tú y solo tú eres responsable de cualquier daño que pueda sufrir tu consola como consecuencia de ejecutar homebrew.
