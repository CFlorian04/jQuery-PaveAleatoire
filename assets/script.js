

HTMLElement.prototype.hide = function() {
    this.style.visibility = 'hidden';  
    return this;
}

HTMLElement.prototype.show = function() {
    this.style.visibility = 'visible';  
    return this;
}


let tableau = ["0","1","2","3","4","5","6","7","8","9","/","/","/","/","/","/"]

$(
	function() {
	
		var alea;
		$('table#pave tr td').each(
			function(index) {
				alea = Math.floor(Math.random() * (15-index));
				console.log(tableau);
				console.log("alea : " + alea + " / index : " + (15-index));
				
				$(this).text(tableau[alea])
				

				if(tableau[alea] == "/") {$(this).addClass("verrouillé")}
				else { $(this).addClass("déverrouillé") }

				tableau.splice(alea,1);
				
		});

		//Affiche le code dans le texte en dessous
		var taille = 0;
		var code ="";
		$('table#pave tr td.déverrouillé').click(
			function(){
				console.log($(this).text());
				taille++;

				if(taille<=4)
				{
					$("p#erreur").hide();
					code += $(this).text();

					$(this).css("color","red");
					$('table#code tr td input').val(code);
				}
				else
				{

					$("p.erreur").show().text("Le code ne peut faire que 4 caractères");
				}


		});
	}
);