nombre = 0;


function calcDivs(N) {
    var liste = [ ];
    for (var d=1; d<=N/2; d++) { if(N%d==0) { liste.push(d);};};
		if (liste.length > 0) {
			return liste;
		} else {
			return "aucune";
		}
}

function lire(dansQqchose){
	return document.getElementById(dansQqchose).value;
}

function écrire(qqchose,dansQqchose){
	document.getElementById(dansQqchose).innerHTML = qqchose;
}

function Raz() {
        nombre = Math.ceil(Math.random()*50)*2+1;
        écrire(nombre,"nb");
        écrire(nombre,"nb2");
        écrire(calcDivs(nombre),"divs");
        document.getElementById("choixDiv").value = 1;
        écrire(joueur.fontcolor(col[joueur]),"player");
        écrire(joueur.fontcolor(col[joueur]),"j1");
        dessiner(nombre);
}


function dessiner(N) {
	var d = lire("choixDiv");
	var texte = "";
	if (d>0 && d<N && N%d==0){
		texte = "On peut ranger les ";
	} else {
		texte = "On ne peut pas ranger les ";
	}
	texte += N + " pièces ";
	texte += d + " par " + d + ":<br/><br/>";
	for(var lettre = 1;lettre<=N;lettre++){
		texte += " ⛂";
		if (lettre%d == 0 && N%d==0 && d>0 && d<N) {
			texte += "<br/>";
		}
	}
	écrire(texte,"sou");
	document.getElementById("JeanPierre").value = "Je veux retirer "+d+" pièce(s) du coffre !";
}

//quelques variables globales

joueur = "Jabuse";
autre = { "Jabuse": "Barbegrise", "Barbegrise": "Jabuse" };
col = { "Jabuse": "blue", "Barbegrise": "gray" };


function jouer() {
  if (nombre>1) {	
    var diviseur = lire("choixDiv");
    if (nombre%diviseur==0 && diviseur>0 && diviseur<nombre) {
        nombre -= diviseur;
        écrire(nombre,"nb");
        écrire(nombre,"nb2");
        écrire(calcDivs(nombre),"divs");
        joueur = autre[joueur];	//chacun son tour
        écrire(joueur.fontcolor(col[joueur]),"player");
        écrire(joueur.fontcolor(col[joueur]),"j1");
        document.getElementById("choixDiv").value = 1;
    } else {
        alert("tricheur : "+diviseur+" n'est pas un diviseur propre de "+nombre);
    }
    dessiner(nombre);
  }
}
function ranger(){
	
} 
