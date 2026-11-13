# 🎄 Navidad en Familia • Intercambio & Cena

Página estática pensada para dispositivos móviles para organizar el intercambio de regalos y la cena navideña familiar.

## 📁 Estructura del Proyecto

* **`index.html`**: Estructura visual, estilos (Tailwind CSS) e interactividad (buscador, pestañas y vista responsiva).
* **`data.js`**: El archivo que editarás para actualizar participantes, tallas, deseos y asignaciones de la cena.

---

## 🚀 Cómo conectar con Cloudflare Pages

1. **Sube este proyecto a un repositorio privado de GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: setup inicial navidad familiar"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

2. **En Cloudflare Pages:**
   * Entra a tu panel de **Cloudflare** > **Workers & Pages**.
   * Haz clic en **Create application** > pestaña **Pages** > **Connect to Git**.
   * Selecciona tu repositorio de GitHub.
   * En **Build settings**:
     * **Framework preset**: `None`
     * **Build command**: *(dejar en blanco)*
     * **Build output directory**: `/` *(dejar raíz)*
   * Haz clic en **Save and Deploy**.

¡Listo! Te dará tu enlace gratuito tipo `https://tu-proyecto.pages.dev` y cada cambio que subas a GitHub se actualizará automáticamente en segundos.
