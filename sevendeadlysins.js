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
		natsume.textContent = "Nul vous ne connaisez pas l'anime , vous avez eu ";
	}
	else if (res.textContent == 5){
		natsume.textContent = "Bof vous etes moyen , vous avez eu ";
	}
	else if (res.textContent > 5){
		natsume.textContent = "Felicitation vous connaisez bien The Seven Deadly Sins ! Vous avez eu ";
	}
	dix.textContent = " /10";
	reste.textContent = " N'hesitez pas à aller essayer notre qcm sur One Piece juste en dessous 👇 ";
	
}
audioPlayer();
function audioPlayer(){
	var currentSong = 0;
	$("#audioPlayer")[0].src = $("#playlist li a") [0];
	$("#audioPlayer")[0].play();
	$("#playlist li a").click(function(e){
		e.preventDefault();
		$("#audioPlayer")[0].src = this;
		$("#audioPlayer")[0].play();
		$("#playlist li").removeClass("current-song");
		currentSong = $(this).parent().index();
		$(this).parent().addClass("current-song");
		});
				
	$("#audioPlayer")[0].addEventListener("ended",function(){
	currentSong++;
	if(currentSong == $("#playlist li a").length)
						currentSong = 0;
	$("#playlist li").removeClass("current-song");
	$("#playlist li:eq("+currentSong+")").addClass("current-song");
	$("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
	$("#audioPlayer")[0].play();
	});
}