# 🌐 CV Profesional – Carlos Barrios

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Ready-green?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

> Sitio web del currículum vitae de **Carlos Barrios**, Analista QA especializado en automatización de pruebas, APIs REST y calidad de software en entornos financieros.

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [🤖 Chatbot QA Assistant](#-chatbot-qa-assistant)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Instalación y Despliegue](#-instalación-y-despliegue)
- [Personalización](#-personalización)
- [Seguridad](#-seguridad)
- [Contacto](#-contacto)
- [Licencia](#-licencia)

---

## 📖 Descripción

Este proyecto es un sitio web estático y responsive diseñado para presentar el currículum vitae profesional de Carlos Barrios. El diseño está optimizado para ofrecer una experiencia de usuario fluida, con una estética moderna y profesional que destaca las habilidades técnicas y experiencia en QA.

### Objetivos del Proyecto

- ✅ Presentar información profesional de forma clara y accesible
- ✅ Facilitar el contacto directo a través de múltiples canales
- ✅ Proporcionar descarga rápida del CV en formato PDF
- ✅ Garantizar accesibilidad y compatibilidad con dispositivos móviles

---

## ✨ Características

| Característica | Descripción |
|:--------------:|:-----------|
| 🎨 **Diseño Moderno** | Interfaz limpia con estética profesional |
| 📱 **Responsive** | Adaptado para móviles, tablets y escritorio |
| 🎯 **Accesibilidad** | Cumple con estándares de accesibilidad web |
| ⚡ **Rendimiento** | Carga rápida sin dependencias pesadas |
| 🔗 **SEO Optimizado** | Metadatos para compartir en redes sociales |
| 💬 **Contacto Directo** | Botón flotante de WhatsApp integrado |
| 📄 **PDF Descargable** | CV completo disponible para descargar |
| 🌈 **Paleta Corporativa** | Colores personalizables mediante variables CSS |

### Secciones del CV

1. **Sobre Mí** – Presentación personal y resumen profesional
2. **Experiencia** – Historial laboral detallado
3. **Herramientas** – Stack tecnológico y competencias
4. **Proyectos** – Portafolio de proyectos relevantes
5. **Contacto** – Información de contacto y redes sociales

---

## 🤖 Chatbot QA Assistant

El sitio incluye un **chatbot inteligente** integrado que responde preguntas sobre la experiencia y habilidades de Carlos Barrios.

### Características del Chatbot

| Característica | Descripción |
|:--------------:|:-----------|
| 🤖 **IA Integrada** | Conectado a OpenAI (GPT-4o-mini) para respuestas inteligentes |
| 🔒 **Seguridad Robusta** | Rate limiting, sanitización de entrada y validación de respuestas |
| 📝 **Historial** | Mantiene contexto de la conversación |
| ⚡ **Quick Replies** | Respuestas rápidas predefinidas según contexto |
| 🌐 **Modo Híbrido** | Funciona con API o respuestas locales (fallback automático) |
| 📱 **Responsive** | Diseño adaptado para todos los dispositivos |
| 🎨 **UI Optimizada** | Ventana más ancha (480px) y menos alta (500px) para mejor UX |
| ✅ **Botón Cerrar** | Siempre accesible con z-index elevado |

### Arquitectura de Seguridad

El chatbot implementa múltiples capas de seguridad:

- **Rate Limiting (Frontend):** 30 requests/minuto por usuario
- **Validación de Entrada:** Bloquea patrones peligrosos (XSS, inyección de código)
- **Sanitización de HTML:** Previene ataques XSS
- **Validación de Respuestas:** Filtra contenido peligroso del backend
- **CSP Headers:** Content Security Policy configurado en `index.html`

### Configuración

El chatbot se configura en [`chatbot.js`](chatbot.js:8):

```javascript
const CHATBOT_CONFIG = {
  // URL de tu backend API - Backend desplegado en CapRover
  apiEndpoint: 'https://carlos-bot-api.site.revelarte.studio/api/chat',
  
  // API key del cliente (configurada en el backend)
  clientApiKey: '***REMOVED***',
  
  // Configuración de la petición
  apiConfig: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  },
  
  // Timeout para la petición (ms)
  timeout: 15000,
  
  // Modo de operación: 'api' (con backend) o 'local' (respuestas locales)
  mode: 'auto'  // 'auto' intenta API, fallback a local si falla
};
```

### Mejoras Recientes

- ✅ Corrección del error `CHBOT_CONFIG` → `CHATBOT_CONFIG`
- ✅ Agregado de `z-index: 1003` al botón de cerrar para asegurar accesibilidad
- ✅ Ajuste de dimensiones: más ancho (420px-480px) y menos alto (500px-55vh)
- ✅ Mejora de UX en chats largos

### Documentación de Seguridad

Para más información sobre la seguridad del chatbot, consulta:

- 📖 [Guía de Seguridad del Chatbot](CHATBOT_SECURITY_GUIDE.md)
- 📖 [Guía del Backend](CHATBOT_BACKEND_GUIDE.md)

---

## 📁 Estructura del Proyecto

```
rodascaar/
│
├── index.html                    # Página principal del CV
├── styles.css                    # Estilos personalizados
├── chatbot.css                   # Estilos del chatbot
├── chatbot.js                    # Lógica del chatbot (seguro)
├── chatbot-secure.js             # Versión alternativa con proxy server
├── profile.webp                  # Imagen de perfil optimizada
├── cv_Carlos_Barrios.pdf         # CV en formato PDF
├── README.md                     # Documentación del proyecto
├── CHATBOT_SECURITY_GUIDE.md     # Guía de seguridad del chatbot
├── CHATBOT_BACKEND_GUIDE.md      # Guía del backend del chatbot
├── .env.local.example            # Ejemplo de variables de entorno
├── proxy-server.js               # Servidor proxy (opcional, para desarrollo)
└── proxy-package.json             # Dependencias del proxy server
```

### Descripción de Archivos

| Archivo | Descripción |
|:-------:|:-----------|
| `index.html` | Estructura HTML semántica del sitio con CSP headers |
| `styles.css` | Hoja de estilos con variables CSS personalizables |
| `chatbot.css` | Estilos específicos del chatbot |
| `chatbot.js` | Lógica del chatbot con seguridad integrada |
| `chatbot-secure.js` | Versión alternativa con proxy server |
| `profile.webp` | Imagen de perfil en formato WebP optimizado |
| `cv_Carlos_Barrios.pdf` | Documento PDF del CV completo |
| `CHATBOT_SECURITY_GUIDE.md` | Guía completa de seguridad del chatbot |
| `CHATBOT_BACKEND_GUIDE.md` | Documentación del backend de CapRover |
| `proxy-server.js` | Servidor proxy para desarrollo local (opcional) |

---

## 🛠️ Tecnologías Utilizadas

### Frontend

- **HTML5** – Estructura semántica del contenido
- **CSS3** – Estilos y diseño responsive
- **Variables CSS** – Gestión de colores corporativos
- **WebP** – Formato de imagen optimizado

### Herramientas

- **Tailwind CSS** – Framework de utilidades CSS (referencia de diseño)
- **FontAwesome** – Iconos vectoriales (CDN)

---

## 🚀 Instalación y Despliegue

### Requisitos Previos

- Un navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere servidor ni dependencias adicionales

### Instalación Local

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/rodascaar/rodascaar-1.git
   ```

2. **Navega al directorio del proyecto:**

   ```bash
   cd rodascaar-1
   ```

3. **Abre el archivo `index.html` en tu navegador:**

   - Doble clic en `index.html`, o
   - Arrastra el archivo a tu navegador, o
   - Usa un servidor local (opcional):

     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (con npx)
     npx serve
     ```

### Despliegue en GitHub Pages

1. Sube el código a tu repositorio de GitHub
2. Ve a **Settings** > **Pages**
3. Selecciona la rama `main` o `master`
4. Guarda los cambios
5. Tu sitio estará disponible en `https://username.github.io/repository-name`

---

## 🎨 Personalización

### Colores Corporativos

Los colores principales se definen como variables CSS en [`styles.css`](styles.css:1):

```css
:root {
    --primary-blue: #0A66C2;    /* Azul corporativo */
    --secondary-orange: #F5993D; /* Naranja de acento */
    --text-dark: #1a1a1a;        /* Texto principal */
    --text-light: #666666;       /* Texto secundario */
    --bg-light: #f8f9fa;         /* Fondo claro */
}
```

### Modificar Información Personal

Edita el archivo [`index.html`](index.html:1) para actualizar:

- Datos de contacto (email, teléfono, LinkedIn)
- Información de experiencia laboral
- Lista de herramientas y tecnologías
- Proyectos realizados
- Sección "Sobre mí"

### Reemplazar Imagen de Perfil

1. Reemplaza el archivo `profile.webp` con tu imagen
2. Asegúrate de que la imagen esté optimizada (formato WebP recomendado)
3. Mantén el nombre del archivo o actualiza la referencia en `index.html`

---

## 🔒 Seguridad

Este proyecto implementa múltiples capas de seguridad para proteger contra vulnerabilidades comunes en aplicaciones web.

### Medidas de Seguridad Implementadas

#### Frontend (GitHub Pages)

| Medida | Descripción |
|:-------:|:-----------|
| 🛡️ **CSP Headers** | Content Security Policy para prevenir XSS |
| 🔒 **Rate Limiting** | 30 requests/minuto por usuario |
| ✅ **Validación de Entrada** | Bloquea patrones peligrosos |
| 🧹 **Sanitización de HTML** | Previene inyección de código |
| 🔍 **Validación de Respuestas** | Filtra contenido del backend |

#### Backend (CapRover)

| Medida | Descripción |
|:-------:|:-----------|
| 🚦 **Rate Limiting** | Por IP y por tokens |
| 🛡️ **Input Sanitizer** | Detección de inyección de prompts |
| 🔓 **Jailbreak Detector** | Previene ataques de jailbreaking |
| 🔐 **System Prompt Protection** | Protege el prompt del sistema |

### Documentación de Seguridad

Para más detalles sobre la seguridad del chatbot:

- 📖 [Guía de Seguridad del Chatbot](CHATBOT_SECURITY_GUIDE.md)
- 📖 [Guía del Backend](CHATBOT_BACKEND_GUIDE.md)

### Buenas Prácticas

1. **Nunca exponer API keys sensibles** en el frontend
2. **Usar HTTPS** en todas las conexiones
3. **Implementar rate limiting** en múltiples capas
4. **Validar y sanitizar** todas las entradas
5. **Configurar CSP** correctamente
6. **Monitorear logs** de seguridad regularmente
7. **Rotar credenciales** periódicamente

---

## 📬 Contacto

**Carlos Barrios**  
Analista QA – Automatización de Pruebas

| Canal | Enlace |
|:-----:|:-------|
| 📧 Email | [carlosbarriosr@proton.me](mailto:carlosbarriosr@proton.me) |
| 🔗 LinkedIn | [linkedin.com/in/rodascaar](https://www.linkedin.com/in/rodascaar/) |
| 💬 WhatsApp | [Contactar por WhatsApp](https://wa.me/595XXXXXXXXX) |

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**.

```
MIT License

Copyright (c) 2025 Carlos Barrios

Se concede permiso, de forma gratuita, a cualquier persona que obtenga una copia
de este software y archivos de documentación asociados (el "Software"), para
tratar en el Software sin restricción, incluyendo sin limitación los derechos
de uso, copia, modificación, fusión, publicación, distribución, sublicencia y/o
venta de copias del Software, y para permitir a las personas a quienes se les
proporcione el Software a hacerlo, sujeto a las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas
las copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O
IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE COMERCIABILIDAD,
IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS
AUTORES O TITULARES DEL COPYRIGHT SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN,
DAÑOS U OTRA RESPONSABILIDAD, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O DE
OTRO MODO, QUE SURJA DE, FUERA DE O EN CONEXIÓN CON EL SOFTWARE O EL USO U
OTRO TRATO EN EL SOFTWARE.
```

---

<div align="center">

**Hecho con ❤️ por [Carlos Barrios](https://www.linkedin.com/in/rodascaar/)**

[⬆ Volver al inicio](#-cv-profesional--carlos-barrios)

</div>
