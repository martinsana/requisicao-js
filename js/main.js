var users = document.getElementById("usuarios");
var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
	var requisicao = new XMLHttpRequest();
	requisicao.open('GET', 'http://jsonplaceholder.typicode.com/users');
	requisicao.onload = function() {
		var dados = JSON.parse(requisicao.responseText);
		showData(dados); 
	};
	requisicao.send();
}, {once : true});

function showData(dadosUsuarios) {
	for (i = 0; i <= dadosUsuarios.length; i++) {
		$('#usuarios').append("<tr><td>"	+  dadosUsuarios[i].name 	 + 
				" </td><td>"+  dadosUsuarios[i].username +  
				"</td><td>"	+  dadosUsuarios[i].email 	 +  
				"</td></tr></br>" );
	}  
} 

