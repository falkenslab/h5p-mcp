---
title: Crear paquetes
sidebar_label: Crear paquetes
---

# Crear paquetes

Pides una actividad con tus palabras; el agente escribe el contenido, consulta los campos del tipo de contenido con `list_h5p_types` y crea el paquete con `build_h5p`. Obtienes dos archivos en la carpeta que elijas: el `.h5p` para subir y un `.preview.html` para abrir en el navegador y revisar las preguntas antes de que nadie las vea.

## Los tipos de contenido

| Tipo de contenido | Para qué sirve |
| --- | --- |
| 🔘 Opción múltiple (`H5P.MultiChoice` 1.16) | Una pregunta con varias respuestas, una o más correctas |
| ✔️ Verdadero/falso (`H5P.TrueFalse` 1.8) | Una afirmación que el alumno marca como verdadera o falsa |
| ✏️ Rellenar huecos (`H5P.Blanks` 1.14) | Frases con huecos en los que el alumno escribe |
| 🧲 Arrastrar palabras (`H5P.DragText` 1.10) | Un texto con palabras que el alumno arrastra a su sitio |
| 🃏 Dialog Cards (`H5P.Dialogcards` 1.9) | Tarjetas con una pregunta delante y su respuesta detrás |
| 📇 Flashcards (`H5P.Flashcards` 1.7) | Tarjetas cuya respuesta escribe el alumno |
| 📝 Question Set (`H5P.QuestionSet` 1.21) | Un cuestionario de preguntas de opción múltiple, verdadero/falso, huecos y arrastrar palabras |
| 🖼️ Course Presentation (`H5P.CoursePresentation` 1.27) | Diapositivas con texto, cualquiera de las preguntas anteriores y Dialog Cards |

Un paquete lleva solo su contenido, no el código de H5P: se reproduce en un sitio que tenga ese tipo de contenido instalado en esa versión, como un Moodle con estos tipos (Moodle 5 los instala desde el H5P Hub; un administrador puede verlos en Administración del sitio > H5P > Gestionar tipos de contenido H5P). Si el sitio tiene otra versión, el paquete no se despliega.

## Qué se comprueba

Antes de escribir nada, el contenido se comprueba con las reglas que aplica un sitio al desplegar un paquete, así que lo que ves en la vista previa es lo que ven los alumnos:

- cada campo obligatorio está, con el tipo de valor correcto y dentro de sus límites;
- el texto con formato usa solo las etiquetas HTML que ese campo permite (nada de scripts, ni más estilos que la alineación); el resto del texto se muestra tal cual se escribió;
- lo que necesita cada tipo: una pregunta de opción múltiple tiene al menos dos respuestas y una correcta, un hueco o una palabra que arrastrar va entre asteriscos (`*París*`), una tarjeta tiene sus dos caras, una presentación tiene alguna diapositiva.

Si algo está mal, no se escribe nada y el agente recibe la lista de lo que debe corregir, campo a campo.

## Idiomas

Los botones y mensajes (Comprobar, Intentar de nuevo, Mostrar solución…) salen en el idioma del paquete, de las traducciones de cada tipo de contenido, disponibles en unos cincuenta idiomas. Si un tipo no tiene traducción para el idioma que pides, se quedan en inglés y el agente te lo dice. Una excepción: Flashcards 1.7 muestra siempre su contador de tarjetas (`Card 1 / 2`) en inglés, porque su reproductor no toma ese texto del paquete.

## Todavía no

- Imágenes, audio y vídeo en un paquete.
- Subirlo: en Moodle, la extensión moodle-teacher crea la actividad H5P con el paquete.
- Otros tipos de contenido (Interactive Video llegará más adelante).

## Leer un paquete

`read_h5p` devuelve lo que contiene un `.h5p` local, con la misma forma que recibe `build_h5p`: pide al agente que revise un paquete, o que lo cambie y lo vuelva a crear. También lee paquetes que traen dentro el código de H5P (solo su contenido).
