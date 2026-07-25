Inventario de flujos principales 
SIN USUARIO LOGUEADO
1. Global feed: usuario logueado/no logueado ve la lista general de articulos  ALTO | ALTO | API-E2E
2. Ingreso a articulo: Usuario no registrado ingresa al home -> lista de articulos publicados -> accede a articulo ALTO | ALTO | API-E2E
3. Registro de usuario: Usuario no registrado ingresa al home -> sign up -> usuario logueado ALTO | ALTO | API-E2E
4. Usuario se loguea: Usuario registrado logra sign in exitoso ALTO | ALTO | API-E2E
5. Usuario no logueado ve your feed MEDIO | BAJO | API
6. Usuario no logueado publica un articulo ALTO | BAJO | API

USUARIO LOGUEADO
5. Your feed: usuario logueado ve articulos de users que sigue ALTO | ALTO | API-E2E
6. Publicar articulo: Usuario logueado publica un nuevo articulo de manera exitosa ALTO | ALTO | API-E2E
7. Usuario edita un articulo publicado MEDIO | MEDIO | API
8. Ususario elimina un articulo publicado ALTO | MEDIO | API
9. Usuario ve listado de todos sus articulos publicados MEDIO | MEDIO | API
10. Usuario ve listado de articulos favoritos (likeados) MEDIO | MEDIO | API
11. Logout: Usuario logueado ingresa a settings y se desloguea exitosamente ALTO | MEDIO | API-E2E
12. Actualizar settings: usuario logueado modifica sus settings de manera exitosa y estos quedan guardados MEDIO | MEDIO | API-E2E
13. Usuario puede likear un articulo MEDIO | MEDIO | API-E2E
14. Usuario puede comentar un articulo MEDIO | MEDIO | API-E2E
15. Usuario puede seguir a un autor MEDIO | ALTO | API-E2E


(Asumiendo que) muchos de los usuarios de medium buscan informacion puntual, sin necesidad de querer publicar, sino que son usuarios transitorios, se prioriza validar los flujos para usuarios no registrados, con prioridad alta. 