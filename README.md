### Star-Cafe - Frontend

Este repositorio contiene la interfaz de usuario para Star-Cafe, donde los clientes pueden explorar el menú, consultar precios actualizados y contactarse fácilmente por WhatsApp. La aplicación también incluye funcionalidad para un administrador, quien puede iniciar sesión para gestionar los productos y actualizar precios a través de una API propia.

---

### Tecnologías Utilizadas

- **React**: Librería de JavaScript para construir interfaces de usuario.
- **Vite**: Empaquetador rápido con soporte de HMR para desarrollo.
- **Axios**: Para realizar solicitudes HTTP a la API de productos y precios.
- **ESLint**: Configuración de reglas para asegurar la calidad del código.
- **React Router**: Para la navegación entre páginas.

---

### Instalación y Uso

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/LukeLabruna/starcafe-front
   cd cafeteria-frontend
   ```

2. **Instala las dependencias**:

   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**:

   ```bash
   npm run dev
   ```

---

### Backend

La aplicación se conecta con un backend desarrollado específicamente para este proyecto. El backend maneja la base de datos de productos, usuarios administradores y validaciones para gestionar precios.

- **Repositorio**: [https://github.com/LukeLabruna/starcafe-back](#)
- **Deploy Backend**: [https://starcafe-back.vercel.app/](#)

---

### Deploy

La aplicación está desplegada en línea para facilitar el acceso de los clientes y el administrador. No es necesario instalar dependencias localmente para probar su funcionamiento.

- **Deploy Frontend**: [https://starcafe.com.ar/](#)

---

### Características

- **Menú Interactivo**: Los clientes pueden explorar el menú de la cafetería con precios actualizados.
- **Contacto por WhatsApp**: Un botón directo permite a los clientes enviar mensajes al WhatsApp de la cafetería para realizar pedidos o consultas.
- **Gestión de Precios**: Los usuarios administradores pueden iniciar sesión para actualizar los precios del menú.
- **Autenticación de Usuario**: Validación de usuario administrador para acceder a las funciones de gestión.

---

### Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Genera los archivos listos para producción.
- `npm run lint`: Ejecuta ESLint para mantener el código limpio.

---

© 2024 - Star-Cafe & Luke Labruna