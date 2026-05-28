# Portafolio Henry Flores

Sitio web personal y academico para publicar en GitHub Pages. Presenta el perfil de Henry Flores, proyectos desarrollados en Cibertec y una seccion de descargas para compartir archivos Word y PDF con companeros de grupo.

## Estructura del proyecto

```text
/
|-- index.html
|-- css/
|   `-- styles.css
|-- js/
|   `-- main.js
|-- assets/
|   |-- img/
|   `-- docs/
|       |-- algoritmos/
|       |-- arquitectura-web/
|       |-- habilidades-profesionales/
|       `-- efsrt/
`-- README.md
```

## Como agregar archivos PDF o Word

1. Copia el archivo en la carpeta del curso correspondiente dentro de `assets/docs/`.
2. Usa nombres simples, sin espacios y en minusculas. Ejemplo: `proyecto-algoritmos.pdf`.
3. Abre `index.html` y actualiza el atributo `href` del boton de descarga.
4. Manten el atributo `download` para que el navegador descargue el archivo.

Ejemplo:

```html
<a href="assets/docs/algoritmos/proyecto-algoritmos.pdf" download>Descargar PDF</a>
```

## Cursos incluidos

- 5358 Algoritmos y Estructura de Datos
- 5367 Arquitectura de Entornos Web
- 5398 Desarrollo de Habilidades Profesionales III
- 5589 Experiencia Formativa en Situacion Real de Trabajo

## Como publicar en GitHub Pages

1. Sube este proyecto al repositorio `henry2026`.
2. En GitHub, entra a `Settings`.
3. Abre la seccion `Pages`.
4. En `Build and deployment`, selecciona `Deploy from a branch`.
5. Elige la rama `main` y la carpeta `/root`.
6. Guarda los cambios y espera a que GitHub genere la URL del sitio.

## Tecnologias usadas

- HTML5 semantico
- CSS3 responsive
- JavaScript sin frameworks
- GitHub Pages

El sitio funciona abriendo `index.html` directamente en el navegador y tambien publicado en GitHub Pages.
