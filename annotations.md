## Implementing Smooth Scrolling

Para dirigirnos a una sección especifica de una pagina, usamos el elemento `a`

```html
<li><a class="main-nav-link" href="#meals">Meals</a></li>
```

Por defecto, tenemos el href en `#`, que esto nos llevara al top de la pagina

Sin embargo, si le ponemos un nombre, por ejemplo `#meals`, nos llevara al elemento que tenga el id `meals`

El `href` nos puede servir para llevarnos a secciones especificas de una pagina, a otros documentos html, o a otras paginas completamente diferentes

---

Para implementar el smooth scrolling, hay dos formas

```css
html {
  scroll-behavior: smooth;
}
```

Una es desde la etiqueta html, y esto servirá en navegadores modernos como en chrome
Pero en otros algo distintos como Firefox y Safari, no sera suficiente

## Implementing a Sticky Navigation Bar

Para implementar que un elemento se quede en un punto fijo, usamos `position: fixed`

```css
.sticky {
  position: fixed;
  top: 0;
  height: 8rem;
}
```

Lo que hace, es que fija un elemento en una posición especifica, se saca del flujo del documento y se pega al viewport

Y sin importar si scrolleamos, el elemento seguirá en la misma posición que le definamos

También, es importante tener tanto una posición como una altura definida

---

Lo demás, cuando el header tenga esa posición y se mueva afuera del flow, quedara un espacio vació, que debemos rellenar

```css
.sticky .section-hero {
  margin-top: 9.6rem;
}
```

Pero SOLO debemos rellenarlo, cuando exista esa clase, asi que lo que usamos es mover esa clase al `body`, asi cuando exista, le pondremos ese margin top

> [!IMPORTANT]
> Ver js>script.js

```js
if (!ent.isIntersecting) {
  document.body.classList.add("sticky");
}

if (ent.isIntersecting) {
  document.body.classList.remove("sticky");
}
```

Y accedemos de esta forma al body desde js, `document.body`

## Browser Support and Fixing Flexbox Gap in Safari

Torra cosa que debemos ver, ya que estamos en la fase final del proyecto, es que este funcione en los navegadores mas importantes, o sea

**Edge, Firefox, Chrome y Safari**

### scrollHeight

Es una propiedad solo de elementos con scroll (no del window).
Devuelve la altura total del contenido interno, incluyendo lo que no se ve porque está fuera del área visible (overflow).

### backdrop-filter

Esta prop, añade un blur a nuestro elemento, lo mismo que el filter en las img, solo que esto es para los elementos generales

Hace blur todo lo que esta detrás del elemento

> [!NOTE]
> Investigar propiedad `appearance`, nos permite modificar la apariencia de nuestros form

Ahora, en muchos navegadores no todas las propiedades serán compatibles, para ello tenemos una pagina [canIUse](https://caniuse.com/)

En donde nos dice en que navegadores puede no ser aplicable ciertas propiedades, u ocupemos ponerle el prefijo `-webkit-` que es para la compatibilidad en diferentes navegadores, por ejemplo

```css
.main-nav {
  -webkit-backdrop-filter: blur(10px);
}
```

## Testing Performance With Lighthouse

Es una herramienta que podemos usar para mejorar la calidad de nuestras paginas

Una vez la corramos nos dará las sugerencias para mejorar el rendimiento y calidad de nuestra pagina en general, aunque siempre lo mas acertado es hacerlo en production también

### Payloads

File size in terms of kbs

## Adding Favicon and Meta Description

### meta-description

Es una description breve que es recomendable añadir en algunos navegadores, es un breve resumen del contenido de nuestro sitio, y es el texto que aparecerá tanto en google como en otros motores de búsqueda

### Metadata

Es básicamente information que escribe otra information

En este caso, esto es lo que aparecerá cuando busquemos la pagina

```html
<meta
  name="description"
  content="Omnifood is an AI-powered food subscription that will make you eat healthy again, 365 days per year. It's tailored to your personal tastes and nutritional needs."
/>
```

Para hacer que nuestro icono sea compatible en diferentes dispositivos, usamos estas propiedades

## Favicon

Es preferible dejarlos arriba de los css, debido a que usan `link`, es mejor que todo sea uniforme

```html
<link rel="icon" href="img/favicon-192.png" type="image/x-icon" />
<link rel="apple-touch-icon" href="img/apple-touch-icon.png" />
<link rel="manifest" href="manifest.webmanifest" />
```

## Image Optimizations

Nuestras imágenes, deberían ser el doble del size del que se despliega en la pagina <= Image part section

En las high density screens se ocupan 2px para desplegar 1px en el design

Otra manera de optimizar imágenes, es usando estos atributos, que sirven definiéndome al navegador que fuente de imagen le sale mejor usar

```html
<picture>
  <source srcset="img/hero.webp" type="image/webp" />
  <source srcset="img/hero-min.png" type="image/png" />

  <img
    src="img/hero.webp"
    class="hero-img"
    alt="Woman enjoying food, meals in storage container, and food bowls on a table"
  />
</picture>
```

Para hacer un deploy a netlify, solo es necesario mover los archivos de la carpeta ahi

## Making the Form Work With Netlify Forms

## Recomendaciones finales

Recrear diseños de otros componentes, layouts que me gusten, twitter o Tesla interface for example

- Advanced CSS, Sass, Jamstack
