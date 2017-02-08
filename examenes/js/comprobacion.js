	function gestionarXml(dadesXml){
	var xmlDoc = dadesXml.responseXML;
	/* Preguntas texto */
    document.getElementById("pregunta").innerHTML = xmlDoc.getElementsByTagName("text")[0].childNodes[0].nodeValue;
    document.getElementById("pregunta1").innerHTML = xmlDoc.getElementsByTagName("text")[1].childNodes[0].nodeValue;
    document.getElementById("pregunta2").innerHTML = xmlDoc.getElementsByTagName("text")[8].childNodes[0].nodeValue;
    document.getElementById("pregunta3").innerHTML = xmlDoc.getElementsByTagName("text")[9].childNodes[0].nodeValue;
    document.getElementById("pregunta4").innerHTML = xmlDoc.getElementsByTagName("text")[17].childNodes[0].nodeValue;
    document.getElementById("pregunta5").innerHTML = xmlDoc.getElementsByTagName("text")[18].childNodes[0].nodeValue;
    document.getElementById("pregunta6").innerHTML = xmlDoc.getElementsByTagName("text")[25].childNodes[0].nodeValue;
    document.getElementById("pregunta7").innerHTML = xmlDoc.getElementsByTagName("text")[26].childNodes[0].nodeValue;
    document.getElementById("pregunta8").innerHTML = xmlDoc.getElementsByTagName("text")[34].childNodes[0].nodeValue;
    document.getElementById("pregunta9").innerHTML = xmlDoc.getElementsByTagName("text")[35].childNodes[0].nodeValue;
    
    
    /* Cargar name en formulario HTML tipo text */
    document.getElementsByTagName("input")[0].setAttribute('name', xmlDoc.getElementsByTagName("pregunta")[0].getAttribute("id"));
    document.getElementsByTagName("input")[1].setAttribute('name', xmlDoc.getElementsByTagName("pregunta")[1].getAttribute("id"));
    
    /* Cargar name en formulario HTML tipo select */
    document.getElementsByTagName("select")[0].setAttribute('name', xmlDoc.getElementsByTagName("pregunta")[8].getAttribute("id"));
    document.getElementsByTagName("select")[1].setAttribute('name', xmlDoc.getElementsByTagName("pregunta")[9].getAttribute("id"));
    
	/* Cargar name en formulario HTML tipo select multiple */
    document.getElementsByTagName("select")[2].setAttribute('name', xmlDoc.getElementsByTagName("pregunta")[17].getAttribute("id"));
    document.getElementsByTagName("select")[3].setAttribute('name', xmlDoc.getElementsByTagName("pregunta")[18].getAttribute("id"));
    
    /* Cargar name en formulario HTML tipo radio */
    document.getElementsByTagName("fieldset")[0].setAttribute('name', xmlDoc.getElementsByTagName("pregunta")[25].getAttribute("id"));
    document.getElementsByTagName("fieldset")[1].setAttribute('name', xmlDoc.getElementsByTagName("pregunta")[26].getAttribute("id"));
    
    /* Cargar name en formulario HTML tipo checkbox */
    document.getElementsByTagName("fieldset")[2].setAttribute('name', xmlDoc.getElementsByTagName("pregunta")[34].getAttribute("id"));
    document.getElementsByTagName("fieldset")[3].setAttribute('name', xmlDoc.getElementsByTagName("pregunta")[35].getAttribute("id"));
 
    /* Cargar opciones primer select */
	var idpregunta = xmlDoc.getElementsByTagName("pregunta")[8].getAttribute("id");
    var select = document.getElementsByTagName("select")[0];
    var nopciones = xmlDoc.getElementById(idpregunta).getElementsByTagName("opcio").length; //cuantas opciones hay en el XML 
    //Bucle para rellenar todas las opciones de select
     for (i = 0; i < nopciones; i++) { 
        var option = document.createElement("option");
        option.text = xmlDoc.getElementById(idpregunta).getElementsByTagName("opcio")[i].childNodes[0].nodeValue;
        option.value=i;
        select.options.add(option);  
}

    /* Cargar opciones segundo select */
	var idpregunta = xmlDoc.getElementsByTagName("pregunta")[9].getAttribute("id");
    var select = document.getElementsByTagName("select")[1];
    var nopciones = xmlDoc.getElementById(idpregunta).getElementsByTagName("opcio").length; //cuantas opciones hay en el XML 
    //Bucle para rellenar todas las opciones de select
     for (i = 0; i < nopciones; i++) { 
        var option = document.createElement("option");
        option.text = xmlDoc.getElementById(idpregunta).getElementsByTagName("opcio")[i].childNodes[0].nodeValue;
        option.value=i;
        select.options.add(option);  
}

    /* Cargar opciones primer select multiple */
	var idpregunta = xmlDoc.getElementsByTagName("pregunta")[17].getAttribute("id");
    var select = document.getElementsByTagName("select")[2];
    var nopciones = xmlDoc.getElementById(idpregunta).getElementsByTagName("opcio").length; //cuantas opciones hay en el XML 
    //Bucle para rellenar todas las opciones de select
     for (i = 0; i < nopciones; i++) { 
        var option = document.createElement("option");
        option.text = xmlDoc.getElementById(idpregunta).getElementsByTagName("opcio")[i].childNodes[0].nodeValue;
        option.value=i;
        select.options.add(option);  
}

    /* Cargar opciones segundo select multiple */
	var idpregunta = xmlDoc.getElementsByTagName("pregunta")[18].getAttribute("id");
    var select = document.getElementsByTagName("select")[3];
    var nopciones = xmlDoc.getElementById(idpregunta).getElementsByTagName("opcio").length; //cuantas opciones hay en el XML 
    //Bucle para rellenar todas las opciones de select
     for (i = 0; i < nopciones; i++) { 
        var option = document.createElement("option");
        option.text = xmlDoc.getElementById(idpregunta).getElementsByTagName("opcio")[i].childNodes[0].nodeValue;
        option.value=i;
        select.options.add(option);  
}
    /* Cargar opciones primer radio marca la última opcion para evitar campos vacios */
    var idpregunta = xmlDoc.getElementsByTagName("pregunta")[25].getAttribute("id");
    var checkbox=document.getElementById("radio1");
    var nopciones = xmlDoc.getElementById(idpregunta).getElementsByTagName("opcio").length;
    for (i = 0; i < nopciones; i++) { 
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = xmlDoc.getElementById(idpregunta).getElementsByTagName("opcio")[i].childNodes[0].nodeValue;
        label.setAttribute("for", "color_"+i);
        input.type="radio";
        input.value=i;
        input.name=idpregunta
        input.checked = true;
        checkbox.appendChild(input);
        checkbox.appendChild(label);
        checkbox.appendChild(document.createElement("br"));
        
 }  
    /* Cargar opciones segundo radio marca la última opcion para evitar campos vacios */
    var idpregunta = xmlDoc.getElementsByTagName("pregunta")[26].getAttribute("id");
    var checkbox=document.getElementById("radio2");
    var nopciones = xmlDoc.getElementById(idpregunta).getElementsByTagName("opcio").length;
    for (i = 0; i < nopciones; i++) { 
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = xmlDoc.getElementById(idpregunta).getElementsByTagName("opcio")[i].childNodes[0].nodeValue;
        label.setAttribute("for", "color_"+i);
        input.type="radio";
        input.value=i;
        input.name=idpregunta;
        input.checked = true;
        checkbox.appendChild(input);
        checkbox.appendChild(label);
        checkbox.appendChild(document.createElement("br"));
 } 

    /* Cargar opciones primer checkbox marca la última opcion para evitar campos vacios */
    var idpregunta = xmlDoc.getElementsByTagName("pregunta")[34].getAttribute("id");
    var checkbox=document.getElementById("checkbox1");
    var nopciones = xmlDoc.getElementById(idpregunta).getElementsByTagName("opcio").length;
    for (i = 0; i < nopciones; i++) { 
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = xmlDoc.getElementById(idpregunta).getElementsByTagName("opcio")[i].childNodes[0].nodeValue;
        label.setAttribute("for", "color_"+i);
        input.type="checkbox";
        input.value=i;
        input.name=idpregunta;
        if(i == 0){
         input.checked = true;   
        }
        checkbox.appendChild(input);
        checkbox.appendChild(label);
        checkbox.appendChild(document.createElement("br"));
        
 }  
    /* Cargar opciones segundo checkbox marca la última opcion para evitar campos vacios */
    var idpregunta = xmlDoc.getElementsByTagName("pregunta")[35].getAttribute("id");
    var checkbox=document.getElementById("checkbox2");
    var nopciones = xmlDoc.getElementById(idpregunta).getElementsByTagName("opcio").length;
    for (i = 0; i < nopciones; i++) { 
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = xmlDoc.getElementById(idpregunta).getElementsByTagName("opcio")[i].childNodes[0].nodeValue;
        label.setAttribute("for", "color_"+i);
        input.type="checkbox";
        input.value=i;
        input.name=idpregunta;
        if(i == 0){
         input.checked = true;   
        }
        checkbox.appendChild(input);
        checkbox.appendChild(label);
        checkbox.appendChild(document.createElement("br"));
 }

    
}
	 
	window.onload = function(){
	 
	 var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
	  gestionarXml(this);
	 }
	};
	xhttp.open("GET", "preguntas.xql", true);
	xhttp.send();
	}