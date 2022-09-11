var taille = 0;
var code = "";


//Attribue les valeurs du tableau aléatoirement entre les cases du pavé
function attribution() {
	var alea;
	var tableau = ["0","1","2","3","4","5","6","7","8","9"," "," "]
	$('table#pave tr td').each(
		function(index) {
			

			alea = Math.floor(Math.random() * (12-index));
			$(this).text(tableau[alea]);
			
			if(tableau[alea] == " ") {$(this).addClass("verrouillé")}
			else { $(this).addClass("déverrouillé") }

			tableau.splice(alea,1);
			
	});
}

//Supprime le code et reinitialise les variables et attributs des objets
function code_clear() {
	$('table#pave tr td').removeClass();
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

					code += $(this).text();
					$('table#code tr td input').val(code);

					if(taille == 4) 
					{ 
						$('#envoyer').prop("disabled",false); 
					}
				}
				else
				{
					$("p.erreur").css('visibility','visible').text("Le code ne peut contenir que 4 chiffres.");
				}
		});


		$('#relancer').click(
			function() {
				
				code_clear();
				attribution();
			
		});


		$("#envoyer").click(
			function() {

			if($("#nom").val() != "" && $("#prenom").val() != "")
			{
				$("p.erreur").css('visibility','hidden')
				//Envoyer le Formulaire
				alert('La connexion a été effectué !')
				
			}
			else
			{
				$("p.erreur").css('visibility','visible').text("Tous les champs ne sont pas remplis.");
			}
				
		});

		$('#pave td').mouseover(function(){
			$(this).css("text-decoration", "underline");
		  });

		$('#pave td').mouseout(function(){
			$(this).css("text-decoration", "");
		});

	}
);