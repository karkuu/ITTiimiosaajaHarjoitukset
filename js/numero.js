"use strict";
class arvaaNumero
{
	constructor(suurinnumero,kohde, omaNimi)
	{
		this.suurinnumero = suurinnumero; // Suurin satunnainen numero
		this.kohde = kohde;
		this.omaNimi = omaNimi;
		this.arvattavanumero = 500;
		this.arvauksia = 0;
		
		this.lisaaElementitSivulle();
		this.arvoNumero();
    }
	
	arvoNumero()
	{
		this.arvattavanumero = Math.floor(Math.random()*this.suurinnumero);
		document.getElementById("piilotusboxi").innerHTML = this.arvattavanumero;
	}
	arvausbuttonpress()
	{
		var ilmoitustxt = "";
		this.arvauksia++;		
		
		if (document.getElementById("arvaustxt").value == this.arvattavanumero)
		{
			document.getElementById("teksti").innerHTML = "Oikein<br>Arvauksia: "+this.arvauksia;
			document.getElementById('piilotusboxi').style.backgroundColor = 'white';
		}
		else
		{
			if (this.arvattavanumero/document.getElementById("arvaustxt").value > 1.25 || this.arvattavanumero/document.getElementById("arvaustxt").value < 0.83333333)
			{
				ilmoitustxt += "paljon ";
			}
			if (this.arvattavanumero/document.getElementById("arvaustxt").value < 1)
			{
				ilmoitustxt += "pienempi";
			}
			else if (this.arvattavanumero/document.getElementById("arvaustxt").value > 1)
			{
				ilmoitustxt += "suurempi";
			}
			document.getElementById("teksti").innerHTML = "Väärin! Luku on "+ilmoitustxt+"<br>Arvauksia: "+this.arvauksia;
		}
	}
	lisaaElementitSivulle()
	{
		var sisalto = "<table border=1><tr><td id=\"piilotusboxi\"></td></tr><tr><td id=\"teksti\"></td></tr><tr><td id=\"arvausboxi\"><input type=\"textfield\" id=\"arvaustxt\" maxlength=\"3\"></td></tr><tr><td id=\"nappiboxi\"><input type=\"button\" value=\"Arvaa!\" id=\"arvausbutton\" onclick=\""+this.omaNimi+".arvausbuttonpress();\"></td></tr><table>";

		document.getElementById(this.kohde).innerHTML = sisalto;
	}
}

