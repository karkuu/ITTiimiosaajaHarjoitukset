"use strict";
class arvaaNumero
{
	constructor(suurinnumero,kohde)
	{
		this.suurinnumero = suurinnumero; // Suurin satunnainen numero
		this.kohde = kohde;
		this.arvattavanumero = -1;
		
		this.lisaaElementitSivulle();
    }
	
	arvoNumero()
	{
		this.arvattavanumero = Math.floor(Math.random()*this.suurinnumero);
	}
	arvaaNumeroa()
	{
		
	}
	lisaaElementitSivulle()
	{
		var sisalto = "<table border=1><tr><td id=\"piilotusboxi\"></td></tr><tr><td id=\"teksti\"></td></tr><tr><td id=\"arvausboxi\"><input type=\"textfield\" id=\"arvaustxt\" maxlength=\"3\"></td></tr><tr><td id=\"nappiboxi\"><input type=\"button\" value=\"Arvaa!\" id=\"arvausbutton\" onclick=\"arvausbuttonpress();\"></td></tr><table>";
		
		document.getElementById(this.kohde).innerHTML = sisalto;
	}
}