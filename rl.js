//Fonction qui vérifie les réponses
function test(nom,n) {
  var rep=true;
  for (i=0; i<n; i++) { 
   if (nom[i].value==1 && nom[i].checked==false) rep=false;
   if (nom[i].value==0 && nom[i].checked==true) rep=false;
  }
  return rep;
 }
 
 
//Fonction qui calcule les points


var reste = document.getElementById("reste");
var dix = document.getElementById("10");
var natsume = document.getElementById("text");
var res = document.getElementById("resultat");
var bouton = document.getElementById("bouton");
bouton.addEventListener("click",calculer);
function calculer(){
	var nombredequestions = 10;
	var question
	var score = 0;
	for (var j =1; j < nombredequestions + 1; j++) {
		question = document.getElementsByName("q"+j);
		for (var i =0; i < question.length;i++){
			if (question[i].checked){
					score= score+ Number(question[i].value);
			}
		}
	}
	res.textContent = score.toString();
	if (res.textContent <5){
		natsume.textContent = "Nul vous ne connaisez pas ce jeu vidéo , vous avez eu ";
	}
	else if (res.textContent == 5){
		natsume.textContent = "Bof vous etes moyen , vous avez eu ";
	}
	else if (res.textContent > 5){
		natsume.textContent = "Felicitation vous connaisez bien Rocket League ! Vous avez eu ";
	}
	dix.textContent = " /10";
	reste.textContent = " N'hesitez pas à aller essayer notre qcm sur Valorant juste en dessous 👇 ";
	
}