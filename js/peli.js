"use strict";
class Peli
{
	constructor()
	{
		this.viholliset = [];
		this.luoObjektit();
    }
	
	luoObjektit()
	{
		var i = 0;
		var ii = 0;
		var iii = 0;
		var objektit = "";
		
		objektit +="<div class=\"container\">";
		objektit +="<div id=\"pelaaja\"></div>";
		
		for (i=0;i<40;i++)
		{
			objektit += "<div id=\"vihu"+i+"\" class=\"vihollinen\" style=\"left:0;top:0;\"></div>";
			this.viholliset.push(new Vihollinen(0,0,"vihu"+i));

			
		}
		
		objektit += "</div>";
		
		document.getElementById("peli").innerHTML = objektit;
		
		for (i=0;i<40;i++)
		{
			for (i=0;i<40;i++)
			{		
				this.viholliset[i].setXY(30+30*i,5);
				iii++;
			}	
		
		}
	}
	
}

class Objekti
{
	constructor(x,y,elementtiID)
	{
		this.x = x;
		this.y = y;
		this.elementtiID = elementtiID;	
		
		//alert(this.elementtiID);

    }
	setXY(x,y)
	{
		this.x = x;
		this.y = y;
		document.getElementById(this.elementtiID).style.left = x+"px";
		document.getElementById(this.elementtiID).style.top = y+"px";
	}
	
	
}

class Pelaaja extends Objekti
{
	constructor()
	{
		super();
    }
	
	
}

class Ammus extends Objekti
{
	constructor()
	{
		super();
    }
	
	
}

class Vihollinen extends Objekti
{
	constructor(x,y,elementtiID)
	{
		super(x,y,elementtiID);
		

    }	
}
