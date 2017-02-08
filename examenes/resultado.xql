xquery version "3.0";
declare option exist:serialize "method=html5 media-type=text/html";
<html>
<head>
    
    <link rel="stylesheet" type="text/css" href="$shared/resources/css/bootstrap-3.0.3.min.css"/>
    <link rel="stylesheet" type="text/css" href="resources/css/style.css"/>
    <script type="text/javascript" src="$shared/resources/scripts/jquery/jquery-1.7.1.min.js"/>
        <script type="text/javascript" src="$shared/resources/scripts/loadsource.js"/>
        <script type="text/javascript" src="$shared/resources/scripts/bootstrap-3.0.3.min.js"/>
        
</head>
<body id="body">
<nav class="navbar navbar-default" role="navigation">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"/>
                    <span class="icon-bar"/>
                    <span class="icon-bar"/>
                </button>
                <a data-template="config:app-title" class="navbar-brand" href="./index.html">Examenes</a>
            </div>
            <div class="navbar-collapse collapse" id="navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li class="dropdown" id="about">
                        <a href="../examenes/index.html">Inicio</a>
                    </li>
                    <li class="dropdown" id="about">
                        <a href="../examenes/examen.html">Realizar Prueba</a>
                    </li>
                    <li class="dropdown" id="about">
                        <a href="../examenes/contacto.html">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    <div id="content" class="container">
    <div class="row">
        <div class="col-md-8">
            <div class="page-header">
                <h1>Tú calificación</h1>
                <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Pregunta</th>
                                <th>Resultado</th>
                            </tr>
                        </thead>
                        <tbody>
                    <!-- Coge las respuestas del usuario y las compara con las correctas y lo saca en una tabla -->
                {
                        for $parameter in request:get-parameter-names()
                        let $answer := doc('preguntes.xml')/preguntes/pregunta[@id=$parameter]
                        return 
                            if (request:get-parameter($parameter, '') = $answer/respuesta) then (
                            <tr class="success"><td>{$answer/text}</td><td align="center">
                            <span class="glyphicon glyphicon-thumbs-up"></span></td></tr>
                        ) else (
                            <tr class="danger"><td>{$answer/text}</td><td align="center">
                            <span class="glyphicon glyphicon-thumbs-down"></span></td></tr>
                        )
                    }
                    </tbody>
                    </table>
                    <h1>Output usuario vs original</h1>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Pregunta</th>
                                <th>Resultado Usuario</th>
                                <th>Resultado Correcto</th>
                            </tr>
                        </thead>
                        <tbody>
                    <!-- Coge las respuestas del usuario y las respuestas correctas en una tabla -->
                {
                      for $parameter in request:get-parameter-names()
                        let $answer := doc('preguntes.xml')/preguntes/pregunta[@id=$parameter]
                        return
                            <tr><td>{$answer/text}</td>
                            <td>{request:get-parameter($parameter, '')}</td>
                            <td>{$answer/respuesta}</td></tr>
                            
                    }
                    </tbody>
                    </table>
                    <!-- Intento de aplicar estilo xsl al return xml, pero sin éxito -->
                    <xml-stylesheet type="text/xsl" href="correction.xsl"/>
                        <preguntes>
                    {
                        
                    for $questions in request:get-parameter-names()
                    let $answer := doc('preguntes.xml')/preguntes/pregunta[@id=$questions]
                    return <pregunta>
                        <text>{$answer/text}</text>
                        <respuesta>{request:get-parameter($questions, '')}</respuesta>
                        </pregunta>
                        
                        
                        
}
                        </preguntes>
                        
                        
            <div class="row">
                <div class="col-md-6">
                    <p>.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
            <div id="content" class="container"/>
        <footer align="center">
                Copyright © PEO Pruebas de Examen Online 2017
        </footer>
        </div>
    </body>
</html>
