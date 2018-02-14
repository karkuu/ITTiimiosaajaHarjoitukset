class lottoPallo
{
	constructor(lottoPallonNumero)
	{
		this.palloNumero = lottoPallonNumero; // Lottopalloon maalataan haluttu numero
    }
}

class lottoPalloTehdas
{
    constructor(tilausLkm)
	{
        var i;
		var pallukkaLaatikko = []; // Otetaan varastosta uusi laatikko palloille
		for (i=0;i<tilausLkm;i++) 
		{
			pallukkaLaatikko.push(new lottoPallo(i+1)); // Lottopallonmaalauskoneesta tilattu pallo pakataan laatikkoon
		}	
        return pallukkaLaatikko; // Toimitetaan pallot tilaajalle
    }
}

class lottoKone
{
    constructor(pallojaKoneeseen)
	{
		this.koneessaOlevatPallot = new lottoPalloTehdas(pallojaKoneeseen); // Tilataan palloja tehtaalta ja t‰ytet‰‰n kone niill‰
    }
	sekoitaPalloja()
	{
		// Myll‰t‰‰n palloja ahkerasti
		for (var i = this.koneessaOlevatPallot.length - 1; i > 0; i--) 
		{
			var j = Math.floor(Math.random() * (i + 1));
			var temp = this.koneessaOlevatPallot[i];
			this.koneessaOlevatPallot[i] = this.koneessaOlevatPallot[j];
			this.koneessaOlevatPallot[j] = temp;
		}
		// Lopetetaan pallojen myll‰‰minen
	}
	poimiPalloKoneesta()
	{
		var lottoPalloImuri; // Koneessa oleva imuri, joka poimii yksitt‰isen pallon
		var sattuma = Math.floor(Math.random()*this.koneessaOlevatPallot.length); // Korkeammat voimat valitsevat pallon
		
		lottoPalloImuri = this.koneessaOlevatPallot[sattuma]; // Yksitt‰inen pallo imaistaan imuriin
		this.koneessaOlevatPallot.splice(sattuma,1); // Pallo poistuu koneen rummusta
		
		return lottoPalloImuri; // Kone sylk‰isee imutetun pallon pihalle
	}
}

class lottoArvonta extends lottoKone // Lottoarvonta jossa k‰ytet‰‰n VIRALLISTA lottokonetta
{
    constructor(pallojenMaara,arvottavatNumerot,arvottavatLisanumerot)
	{
		super(pallojenMaara); // Paljonko palloja tungetaan lottoKoneeseen
		this.pallojenMaara = pallojenMaara;
		this.arvottavatNumerot = arvottavatNumerot; // Montako varsinaista numeroa arvotaan arvonnassa
        this.arvottavatLisanumerot = arvottavatLisanumerot; // Montako lis‰numeroa arvotaan arvonnassa
		this.numerot = []; // Laari varsinaisille numeroille
		this.lisanumerot = []; // Laari lis‰numeroille
    }
    arvoPalloja()
	{
		var i;
		
		// Varmistetaan ennen arvonnan aloittamista, ett‰ laarit ovat tyhji‰
		this.numerot = []; 
		this.lisanumerot = [];
		
		// Virallinenvalvoja tarkistaa, ett‰ koneessa on oikea m‰‰r‰ palloja
		if(this.koneessaOlevatPallot.length < this.pallojenMaara) { alert("VIRHE #572 - Koneeseen ei ole vaihdettu uusia palloja!!! Kutsu uudetPallotKoneeseen()"); }
		
		for (i=0;i<this.arvottavatNumerot;i++) // Arvotaan haluttu m‰‰r‰ varsinaisia numeroita
		{
			this.numerot.push(this.poimiPalloKoneesta()); // Poimittu pallo siirret‰‰n omaan laariinsa
		}
		for (i=0;i<this.arvottavatLisanumerot;i++) // Arvotaan haluttu m‰‰r‰ lis‰numeroita
		{
			this.lisanumerot.push(this.poimiPalloKoneesta()); // Poimittu pallo siirret‰‰n omaan laariinsa
		}
		
    }
	uudetPallotKoneeseen()
	{
		this.koneessaOlevatPallot = []; // Tyhjennet‰‰n lottoKone aikaisemmista palloista
		this.koneessaOlevatPallot = new lottoPalloTehdas(this.pallojenMaara); // Pistet‰‰n uudet pallot koneeseen
	}
	jarjesteltyRivi(jarjesteltavaRivi)
	{
		var rivi = jarjesteltavaRivi.split(',');
		return rivi.sort(function(a, b){return a-b});	
	}
	numerotToString()
	{
		var numerot = "";
		for (var i=0;i<this.numerot.length;i++)
		{
			numerot += this.numerot[i].palloNumero + ","; 
		}
		return numerot.substr(0,numerot.length-1);
	}
	lisanumerotToString()
	{
		var numerot = "";
		for (var i=0;i<this.lisanumerot.length;i++)
		{
			numerot += this.lisanumerot[i].palloNumero + ",";
		}
		return numerot.substr(0,numerot.length-1);
	}
}

class lottoRivi
{
    constructor(lottoPallojenMaara)
	{
		this.lottoPallojenMaara = lottoPallojenMaara;
	}
	luoLottoRuudukko(kohdeSivulla,ruudukonNimi)
	{
		var i,ii;
		var ruudukko = "<table border=1 id=\""+ruudukonNimi+"\">";
			
		for (i=0; i<this.lottoPallojenMaara;)
		{
			ruudukko += "<tr>";
			for (ii=0; ii<6;ii++)
			{
				if(i<this.lottoPallojenMaara)
				{
				i++;
				ruudukko += "<td>"+i+"<input type=\"checkbox\" id=\""+ruudukonNimi+"checbox"+i+"\"></td>";
				
				}
				
			}			
			ruudukko += "</tr>";
		
		}
		ruudukko += "</table>";
		document.getElementById(kohdeSivulla).innerHTML = ruudukko;
	}	
	haeNumerotRuudukosta(ruudukonNimi)
	{
	var i = 1;
	var valitutnumerot = [];
	
	while (document.getElementById("lottoruudukkochecbox"+i) != null)
	{
		if (document.getElementById("lottoruudukkochecbox"+i).checked == true)
		{
		valitutnumerot.push(i);
		}
		i++;
	}
	
	return valitutnumerot;
	
	
	}
}



























