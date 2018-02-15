"use strict";
class Peli
{
	constructor()
	{
		this.pelaaja;
		this.kuula;
		this.palikat = [];
		this.luoObjektit();
		this.peliAloitettu = 0;
		this.kuulaSuunta = 0;
		this.mailaOsumaKohta = 0;
			
		setInterval(function(){ peli.siirraObjekteja(); }, 5);
		
		document.addEventListener('keypress', (event) => {
		const keyName = event.key;
		this.peliAloitettu = 1;
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
		objektit +="<div id=\"pelaaja\"></div>";
		
		for (i=0;i<100;i++) // Html palikat
		{
			objektit += "<div id=\"vihu"+i+"\" class=\"palikat\" style=\"left:0;top:0;\"></div>";
		}
		
		objektit += "</div><div id=\"kuula\"></div>";
		
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
		var i;
		//var osuma = false;
		var tools = new Tools();
		
		if (this.peliAloitettu == 1)
		{
			for (i=0; i <this.palikat.length;i++)
			{
				if(this.kuula.getY() > 500)
				{
					this.peliAloitettu = 0;
					this.pelaaja.setXY(220,470);
					this.kuula.setXY(245,450);
				}
				if(this.kuula.getY() < 1)
				{
					this.kuulaSuunta = 1;
				}
				if (tools.intersectRect(tools.rectVals(this.kuula),tools.rectVals(this.palikat[i])) == true && document.getElementById("vihu"+i).style.display != "none")
				{
					document.getElementById("vihu"+i).style.display = "none";
					this.kuulaSuunta = 1;
					break;
					
				}
				if (tools.intersectRect(tools.rectVals(this.kuula), tools.rectVals(this.pelaaja)) == true)
				{
					this.mailaOsumaKohta = (this.kuula.getX() - this.pelaaja.getX() - this.pelaaja.getW()/2 + this.kuula.getW()/2)/40;
					this.kuulaSuunta = 0;
				}		
			}
			if(this.kuula.getX() > 490)
				{
					this.mailaOsumaKohta = -this.mailaOsumaKohta;
				}
				if(this.kuula.getX() < 1)
				{
					this.mailaOsumaKohta = -this.mailaOsumaKohta;
				}
			if (this.kuulaSuunta == 0)
			{
				this.kuula.setXY(this.kuula.getX()+this.mailaOsumaKohta,this.kuula.getY()-1);
			}
			else
			{
				this.kuula.setXY(this.kuula.getX()+this.mailaOsumaKohta,this.kuula.getY()+1);
			}	
		}	
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
	
	intersectRect(r1, r2)
	{
		return !(r2.left > r1.right || r2.right < r1.left || r2.top > r1.bottom || r2.bottom < r1.top);
	}
	rectVals(laatikko)
	{
		var loota = {left:0,top:0,right:0,bottom:0};
		loota.left = laatikko.getX();
		loota.top = laatikko.getY();
		loota.right = laatikko.getX()+laatikko.getW();
		loota.bottom = laatikko.getY()+laatikko.getH();
		return loota;
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
	getH()
	{
		return document.getElementById(this.elementtiID).clientHeight;
	}
	getW()
	{
		return document.getElementById(this.elementtiID).clientWidth;
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
