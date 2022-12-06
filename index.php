<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Que Hacer - Lista</title>
</head>
<body class="light">
    <button id="changeTheme"><svg class="darkIcon" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" ><path d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"/></svg></button>
    <div class="principal">
        <h1>Que hacer</h1>
        <ul>
            <li id="all">Todas</li>
            <li id="active">Activas</li>
            <li id="completed">Completadas</li>
        </ul>
        <div class="busqueda">
            <input type="text" id="inputUser">
            <button id="add">Añadir</button>
        </div>
        <div class="todos" id="principalTODO">
        </div>
    </div>
    <footer id="footerM" class="lightFooter">
            <h4>&copy Matias Mollo - 2021</h4>
            <a href="https://matiasmollo.herokuapp.com"><h4>Volver al portfolio</h4></a>
    </footer>   
</body>
</html>
<script src="index.js" type="module"></script>