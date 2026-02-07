# Leggiamo. Read texts written by me.

## Decap CMS

Para crear y modificar los textos desde el CMS:

1. Abre `https://tu-dominio/admin/`.
2. Inicia sesión con GitHub.
3. Crea o edita entradas dentro de la colección **Textos**.

### Configuración necesaria

El CMS usa el backend de GitHub con OAuth. Debes configurar estas variables de entorno en el entorno de despliegue:

- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`
- `SITE_URL` (por ejemplo `https://adechlien.blog`)

En desarrollo local puedes activar el backend local (`local_backend: true`) y levantar el servidor de Decap:

```bash
npx decap-server
```

En producción, deja `local_backend: false` para que el CMS use GitHub OAuth.
