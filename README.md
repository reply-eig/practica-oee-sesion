# practica-oee-sesion
En este proyecto se crea una pequeña aplicación en la que un usuario se puede registrar y/o iniciar sesión si ya está registrado.

Una vez realizado esto, se mostrará por pantalla un listado de usuarios dados de alta mostrando el nombre y el correo.

##BACKEND

Tras el clonado del repositorio, la manera de abrir el proyecto que he utilizado ha sido habrir el POM con InteliJ. También se puede importar el proyecto como un proyecto "Maven" en Eclipse. Para el almacenamiento se ha utilizado una BBDD en memoria que arrancará junto con la aplicación (H2). 

##FRONTEND

Desde el directorio ejecutamos los siguientes comandos:

`npm install`

`ng serve -o`

##FUNCIONAMIENTO DE LA APLICACION

Una vez arrancada la aplicación nos llevará a una pantalla de registro para que podamos crear un nuevo usuario. TRas ello, iniciaremos sesión con el usuario que acabamos de crear. Con esta autenticación se nos mostrará un listado de usuarios dados de alta en sistema.

En el menú tendremos la posibilidad de dar de alta a nuevos usuarios, por lo que se nos mostrará una ventana de registro para poder darlo de alta. Esto refrescará el listado de usuarios que muestra añadiendo el nuevo que se acaba de dar de alta.
