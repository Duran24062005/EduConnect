# EduConnect Frontend

El frontend de EduConnect es la interfaz de usuario de la plataforma educativa integral que conecta a estudiantes, maestros y padres con las funcionalidades clave de la aplicación. Este proyecto está diseñado para ser accesible, intuitivo y fácil de mantener, permitiendo que los estudiantes de [Nombre de la Escuela] participen en su desarrollo y adquieran experiencia en diseño y desarrollo web.

## Objetivo del Frontend

El objetivo del frontend de EduConnect es proporcionar una interfaz de usuario amigable y funcional que facilite la interacción con las funcionalidades del backend. Además, se busca que este proyecto sirva como una herramienta educativa para que los estudiantes aprendan y apliquen conocimientos en HTML, CSS, JavaScript y PHP, contribuyendo al desarrollo de la aplicación y obteniendo experiencia práctica.

## Estructura del Proyecto

El frontend está estructurado para mantener un código organizado y modular, facilitando la colaboración y el mantenimiento.

```
educonnect-frontend/
├── assets/
│   ├── css/
│   │   ├── main.css         # Estilos principales de la aplicación
│   │   ├── responsive.css   # Estilos para diseños responsivos
│   ├── js/
│   │   ├── main.js          # Lógica principal en JavaScript
│   │   ├── api.js           # Manejo de llamadas API al backend
│   │   ├── validation.js    # Validaciones de formularios
│   ├── images/              # Imágenes utilizadas en la aplicación
│   ├── fonts/               # Tipografías personalizadas
├── views/
│   ├── index.php            # Página principal
│   ├── login.php            # Página de inicio de sesión
│   ├── dashboard.php        # Panel de control para usuarios autenticados
│   ├── student_profile.php  # Perfil de estudiante
│   ├── teacher_portal.php   # Portal de maestros
│   ├── parent_portal.php    # Portal de padres
├── includes/
│   ├── header.php           # Cabecera común en todas las páginas
│   ├── footer.php           # Pie de página común en todas las páginas
│   ├── navbar.php           # Barra de navegación
│   ├── db.php               # Conexión a la base de datos
│   ├── auth.php             # Manejo de autenticación
├── .gitignore               # Archivos y carpetas ignoradas por Git
└── LICENSE                  # Licencia del proyecto
```

## Instalación y Configuración

### Prerrequisitos

- **Servidor Web**: Apache (recomendado, puedes usar XAMPP)
- **PHP**: Versión 7.4+
- **Base de Datos**: MySQL (compatible con XAMPP)
- **Git**: Para control de versiones

### Configuración del Entorno de Desarrollo

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/educonnect-frontend.git
   cd educonnect-frontend
   ```

2. **Configurar el servidor web**:
   - Si estás utilizando XAMPP, coloca el proyecto en la carpeta `htdocs`:

     ```bash
     mv educonnect-frontend /c/xampp/htdocs/
     ```

3. **Configurar la base de datos**:
   - Crea una base de datos MySQL llamada `educonnect`.
   - Importa el archivo SQL proporcionado en `database/educonnect.sql` para configurar las tablas necesarias:

     ```bash
     mysql -u tu-usuario -p educonnect < database/educonnect.sql
     ```

4. **Configurar las variables de entorno**:
   - Edita el archivo `includes/db.php` para configurar la conexión a la base de datos:

     ```php
     $host = 'localhost';
     $db = 'educonnect';
     $user = 'tu-usuario';
     $pass = 'tu-contraseña';
     ```
  
5. **Iniciar el servidor**:
   - Abre XAMPP y enciende Apache y MySQL.
   - Accede a la aplicación desde tu navegador en `http://localhost/educonnect-frontend`.

## Cómo Contribuir

Este proyecto está abierto a contribuciones, especialmente para estudiantes de [Nombre de la Escuela]. Aquí te indicamos cómo puedes empezar:

1. **Fork el repositorio** y clona tu fork:

   ```bash
   git clone https://github.com/tu-usuario/educonnect-frontend.git
   cd educonnect-frontend
   ```

2. **Crea una nueva rama** para tu contribución:

   ```bash
   git checkout -b nombre-de-la-rama
   ```

3. **Realiza tus cambios**:
   - Asegúrate de seguir las buenas prácticas de HTML, CSS y JavaScript.
   - Prueba tus cambios en diferentes navegadores para asegurar compatibilidad.

4. **Haz commit y push** de tus cambios:

   ```bash
   git commit -m "Descripción de tu cambio"
   git push origin nombre-de-la-rama
   ```

5. **Crea un pull request** desde tu fork hacia el repositorio principal.

## Testing

Se recomienda probar la aplicación en varios navegadores y dispositivos para asegurar que la interfaz sea responsiva y funcional. Además, asegúrate de que todos los formularios estén debidamente validados tanto en el frontend (JavaScript) como en el backend (PHP).

## Mejores Prácticas

- **Separación de Preocupaciones**: Mantén el HTML, CSS, y JavaScript separados en sus respectivos archivos.
- **Desarrollo Responsivo**: Usa media queries y flexbox para garantizar que la aplicación sea accesible desde dispositivos móviles.
- **Seguridad**: Asegura que todas las entradas de usuarios estén validadas y sanitizadas para evitar vulnerabilidades como SQL Injection y XSS.

## Licencia

Este proyecto está bajo la [Licencia que elijas]. Consulta el archivo `LICENSE` para más detalles.

