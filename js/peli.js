"use strict";
class Peli
{
	constructor()
	{
		this.pelaaja;
		this.palikat = [];
		this.luoObjektit();
		
		
		document.addEventListener('keypress', (event) => {
		const keyName = event.key;

		if (keyName == 'd' && this.pelaaja.getX() < 440)
		{
			this.pelaaja.setXY(this.pelaaja.getX()+4,this.pelaaja.getY());
		}
		if (keyName == 'a' && this.pelaaja.getX() > 0)
		{
			this.pelaaja.setXY(this.pelaaja.getX()-4,this.pelaaja.getY());
		}
		});
    }
	
	luoObjektit()
	{
		var i = 0;
		var ii = 0;
		var iii = 0;
		var objektit = "";
		
		var tools = new Tools();
		
		objektit +="<div class=\"container\">";
		objektit +="<div id=\"pelaaja\"></div><div id=\"kuula\"></div>";
		
		for (i=0;i<100;i++) // Html palikat
		{
			objektit += "<div id=\"vihu"+i+"\" class=\"palikat\" style=\"left:0;top:0;\"></div>";
		}
		
		objektit += "</div>";
		
		document.getElementById("peli").innerHTML = objektit;
		
		
		this.pelaaja = new Pelaaja(220,470,"pelaaja");
		this.kuula = new Kuula(245,450,"kuula");
	
		
		for (i=0;i<10;i++)
		{
			for (ii=0;ii<10;ii++)
			{		
				this.palikat.push(new Palikka(50*i,20*ii,"vihu"+iii));
				this.palikat[iii].setColor(tools.uusiSatunnainenVari());
				iii++;
			}	
		
		}
	}
	
	siirraObjekteja()
	{
		this.kuula.setXY(this.kuula.getX(),this.kuula.getY()-2);
		
	}
	
	
}
class Tools
{
	constructor(){}
	uusiSatunnainenVari() // Copy pasta (https://stackoverflow.com/questions/1484506/random-color-generator)
	{
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++)
		{
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
}



class Objekti
{
	constructor(x,y,elementtiID)
	{
		this.x = x;
		this.y = y;
		this.elementtiID = elementtiID;
		this.setXY(x,y);
	}
	setXY(x,y)
	{
		this.x = x;
		this.y = y;
		document.getElementById(this.elementtiID).style.left = x+"px";
		document.getElementById(this.elementtiID).style.top = y+"px";
	}
	getX()
	{
		return this.x;
	}
	getY()
	{
		return this.y;
	}
	setColor(vari)
	{
		document.getElementById(this.elementtiID).style.backgroundColor = vari;
	}	
}

class Pelaaja extends Objekti
{
	constructor(x,y,elementtiID)
	{
		super(x,y,elementtiID);
    }
	
	
}

class Kuula extends Objekti
{
	constructor(x,y,elementtiID)
	{
		super(x,y,elementtiID);
    }
	
	
}

class Palikka extends Objekti
{
	constructor(x,y,elementtiID)
	{
		super(x,y,elementtiID);
		

    }	
}
