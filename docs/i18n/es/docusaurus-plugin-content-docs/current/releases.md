---
title: Versiones
sidebar_label: Versiones
---

# Versiones

## 0.1.0

25 de octubre de 2026. La primera versión: el agente crea paquetes H5P listos para subir y los vuelve a leer.

- `list_h5p_types` lista los ocho tipos de contenido (opción múltiple, verdadero/falso, rellenar huecos, arrastrar palabras, Dialog Cards, Flashcards, Question Set y Course Presentation) con la versión que necesita el sitio, y da los campos de cada uno.
- `build_h5p` comprueba el contenido con las reglas que aplica un sitio al desplegar un paquete y lo rechaza diciendo qué corregir, o escribe el `.h5p` y una página de vista previa para revisarlo. Los botones y mensajes salen en el idioma del paquete.
- `read_h5p` devuelve el contenido de un paquete, para revisarlo o cambiarlo y volver a crearlo.

Todavía no: imágenes, audio y vídeo en un paquete.
