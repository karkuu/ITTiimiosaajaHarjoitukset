"use strict";
class Peli
{
	constructor()
	{
		this.pelaaja;
		this.kuula;
		this.palikat = [];
		this.peliAloitettu = -1;
		this.kuulaSuunta = 1;
		this.mailaOsumaKohta = 0;
		this.currentKey = '';
		this.pistelaskuri = 0;
		this.elamat = 3;
		this.vaikeusaste = 0;
		this.vaikeusasteLisa = 0.02; // 0.1 - 0.03
		this.pelaajaMailaKayryys = 20; // Isompiluku = helpompi
		this.palikoitaRiviin = 14;
		this.palikoitaPystyyn = 10;
		this.kentanLeveys = 700;
		this.kentanKeskikohta = this.kentanLeveys/2;
		this.melanLeveys = 70;
		this.luoObjektit();
			
		setInterval(function(){ peli.siirraObjekteja(); }, 5);
		
		document.addEventListener('keydown', (event) => {
			const keyName = event.key;
			const keyNumber = event.keyCode;
			this.peliAloitettu = 1;
			if (keyName == 'd' || keyNumber == 39)
			{
				this.currentKey = 'd';
			}
			else if (keyName == 'a' || keyNumber == 37)
			{
				this.currentKey = 'a';
			}
			else if (keyName == 'u')
			{
				this.uusiPeli();
			}
			else
			{
				this.currentKey = '';
			}
		});
    }
	
	luoObjektit()
	{
		var i = 0;
		var ii = 0;
		var iii = 0;
		var objektit = "";
		this.peliAloitettu = 0;
		var tools = new Tools();
		
		objektit +="<div class=\"container\" id=\"container\">";
		objektit +="<div id=\"pelaaja\"></div>";
		
		for (i=0;i<(this.palikoitaPystyyn*this.palikoitaRiviin);i++) // Html palikat
		{
			objektit += "<div id=\"vihu"+i+"\" class=\"palikat\" style=\"left:0;top:0;\"></div>";
		}
		
		objektit += "</div><div id=\"kuula\"></div><div id=\"pisteet\"></div><div id=\"elamat\"></div></div>";
		
		document.getElementById("peli").innerHTML = objektit;
		document.getElementById("container").style.width = this.kentanLeveys+"px";
		document.getElementById("pelaaja").style.width = this.melanLeveys+"px";
		document.getElementById("elamat").style.left = this.kentanLeveys-70+"px";			
		document.getElementById("pisteet").innerHTML = this.pistelaskuri;
		document.getElementById("elamat").innerHTML = this.elamat;
			
		this.pelaaja = new Pelaaja(this.kentanKeskikohta-this.melanLeveys/2,470,"pelaaja");
		this.kuula = new Kuula(this.kentanKeskikohta-10/2,450,"kuula");
		
		for (i=0;i<this.palikoitaRiviin;i++)
		{
			for (ii=0;ii<this.palikoitaPystyyn;ii++)
			{		
				this.palikat.push(new Palikka(50*i,20*ii,"vihu"+iii));
				this.palikat[iii].setColor(tools.uusiSatunnainenVari());
				iii++;
			}	
		}
	}
	uusiPeli()
	{
		this.vaikeusaste = 0;
		this.peliAloitettu = 0;
		this.pistelaskuri = 0;
		this.elamat = 3;
		this.pelaaja.setXY(this.kentanKeskikohta-this.melanLeveys/2,470);
		this.kuula.setXY(this.kentanKeskikohta-10/2,450);
		document.getElementById("pisteet").innerHTML = this.pistelaskuri;
		document.getElementById("elamat").innerHTML = this.elamat;
		this.luoObjektit();
	}
	siirraObjekteja()
	{
		var i;
		var tools = new Tools();
		
		if (this.peliAloitettu == 1)
		{
			for (i=0; i <this.palikat.length;i++)
			{
				if(this.kuula.getY() > 540)
				{
					this.elamat = this.elamat-1;
					
					if (this.elamat == -1)
					{
						alert("Peli loppui!\nPisteesi: "+this.pistelaskuri);
						this.uusiPeli();
						break;
					}
					
					document.getElementById("elamat").innerHTML = this.elamat;
					this.peliAloitettu = 0;
					this.pelaaja.setXY(this.kentanKeskikohta-this.melanLeveys/2,470);
					this.kuula.setXY(this.kentanKeskikohta-10/2,450);
				}
				if(this.kuula.getY() < 1)
				{
					this.kuulaSuunta = 1;
				}
				if (tools.intersectRect(tools.rectVals(this.kuula),tools.rectVals(this.palikat[i])) == true && document.getElementById("vihu"+i).style.display != "none")
				{
					this.pistelaskuri = this.pistelaskuri +1;
					this.vaikeusaste = this.vaikeusaste + this.vaikeusasteLisa;
					document.getElementById("pisteet").innerHTML = this.pistelaskuri;
					document.getElementById("vihu"+i).style.display = "none";
					this.kuulaSuunta = 1;
					break;
					
				}
				if (tools.intersectRect(tools.rectVals(this.kuula), tools.rectVals(this.pelaaja)) == true)
				{
					this.mailaOsumaKohta = (this.kuula.getX() - this.pelaaja.getX() - this.pelaaja.getW()/2 + this.kuula.getW()/2)/this.pelaajaMailaKayryys;
					this.kuulaSuunta = 0;
				}		
			}
			if(this.kuula.getX() > this.kentanLeveys-this.kuula.getW())
				{
					this.mailaOsumaKohta = -this.mailaOsumaKohta;
				}
				if(this.kuula.getX() < 1)
				{
					this.mailaOsumaKohta = -this.mailaOsumaKohta;
				}
			if (this.kuulaSuunta == 0)
			{
				this.kuula.setXY(this.kuula.getX()+this.mailaOsumaKohta,this.kuula.getY()-(1+this.vaikeusaste));
			}
			else
			{
				this.kuula.setXY(this.kuula.getX()+this.mailaOsumaKohta,this.kuula.getY()+(1+this.vaikeusaste));
			}	
			if (this.currentKey == 'd' && this.pelaaja.getX() < this.kentanLeveys-this.pelaaja.getW())
			{
				this.pelaaja.setXY(this.pelaaja.getX()+1,this.pelaaja.getY());
			}
			if (this.currentKey == 'a' && this.pelaaja.getX() > 0)
			{
				this.pelaaja.setXY(this.pelaaja.getX()-1,this.pelaaja.getY());
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
