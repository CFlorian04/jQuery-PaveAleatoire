
HTMLElement.prototype.hide = function() {
    this.style.visibility = 'hidden';  
    return this;
}

HTMLElement.prototype.show = function() {
    this.style.visibility = 'visible';  
    return this;
}

var taille = 0;
var code = "";

function attribution() {
	//Attribue les valeurs du tableau aléatoirement entre les cases du pavé
	var alea;
	var tableau = ["0","1","2","3","4","5","6","7","8","9"," "," "]
	$('table#pave tr td').each(
		function(index) {
			$(this).removeClass();
			$(this).css("color","black");

			console.log(tableau);

			alea = Math.floor(Math.random() * (12-index));
			$(this).text(tableau[alea]);
			
			if(tableau[alea] == " ") {$(this).addClass("verrouillé")}
			else { $(this).addClass("déverrouillé") }

			tableau.splice(alea,1);
			
	});
}

function code_clear() {
	code = "";
	taille = 0;
	$("p.erreur").hide();
	$('#envoyer').prop("disabled",true);
	$('table#code tr td input').val(code);
}


$(
	function() {
	
		attribution();

		//Affiche le code dans le texte en dessous
		$('table#pave tr td.déverrouillé').click(
			function(){
				taille++;

				if(taille<=4)
				{
					$("p#erreur").hide();
					code += $(this).text();

					$(this).css("color","green");
					$('table#code tr td input').val(code);

					if(taille == 4)
					{
						$('#envoyer').prop("disabled",false);
					}

				}
				else
				{
					$("p.erreur").show().text("Le code ne peut contenir que 4 chiffres");
				}

		});



		$('#relancer').click(
			function() {
				code_clear();
				attribution();
			
		});
	}
);