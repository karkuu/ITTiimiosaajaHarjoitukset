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
	/*jarjestleRiviToString(jarjesteltavaRivi)
	{
		var numerot = "";
		var rivi = jarjesteltavaRivi.split(',');
		for (var i=0;i<this.numerot.length;i++)
		{
			numerot += rivi.palloNumero + ","; 
		}
		return numerot.substr(0,numerot.length-1);
		
	}*/
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
    constructor(lottoPallojenMaara,valittujaNumeroitaMax)
	{
		this.lottoPallojenMaara = lottoPallojenMaara;
		this.valittujaNumeroitaMax = valittujaNumeroitaMax;
		this.valittujaNumeroita = 0;
		this.kohdeSivulla = "";
		this.ruudukonNimi = "";
		this.olionNimi = "";
	}
	luoLottoRuudukko(kohdeSivulla,ruudukonNimi,olionNimi)
	{
		var i,ii;
		this.kohdeSivulla = kohdeSivulla;
		this.ruudukonNimi = ruudukonNimi;
		this.olionNimi = olionNimi;
	
		var ruudukko = "<table border=1 id=\""+ruudukonNimi+"\">";
			
		for (i=0; i<this.lottoPallojenMaara;)
		{
			ruudukko += "<tr>";
			for (ii=0; ii<6;ii++)
			{
				if(i<this.lottoPallojenMaara)
				{
				i++;
				ruudukko += "<td>"+i+"<input type=\"checkbox\" id=\""+ruudukonNimi+"checbox"+i+"\" onclick=\""+olionNimi+"."+ruudukonNimi+"checboxclick("+i+");\"></td>";
				
				}
				
			}			
			ruudukko += "</tr>";
		
		}
		ruudukko += "</table>";
		document.getElementById(kohdeSivulla).innerHTML = ruudukko;
	}
	luoTarkistettuRivi(omarivi,numerot,lisanumerot,kohde)
	{
		if (this.valittujaNumeroitaMax != this.valittujaNumeroita)
		{
			alert("V‰‰r‰ m‰‰r‰ valittuja numeroita! LottoKonekin osaa yhteenlaskun paremmin kuin sin‰!"); 
		}
		
		else 
		{
		document.getElementById(kohde).innerHTML = omarivi+numerot+lisanumerot+kohde;
		}
	}
	
	
	
	
	haeNumerotRuudukosta(ruudukonNimi)
	{
	var i = 1;
	var valitutnumerot = [];
	
	while (document.getElementById(this.ruudukonNimi+"checbox"+i) != null)
	{
		if (document.getElementById(this.ruudukonNimi+"checbox"+i).checked == true)
		{
		valitutnumerot.push(i);
		}
		i++;
	}	
	return valitutnumerot;	
	}
	lottoruudukkochecboxclick(ruudunNumero)
	{
		var i;
		
		if (document.getElementById(this.ruudukonNimi+"checbox"+ruudunNumero).checked == true)
		{
			this.valittujaNumeroita++;
			//alert(this.valittujaNumeroitaMax);
			
			
			if (this.valittujaNumeroitaMax == this.valittujaNumeroita)
			{
				for (i=1;i<this.lottoPallojenMaara;i++)
				{
					if (document.getElementById(this.ruudukonNimi+"checbox"+i).checked == false)
					{
						document.getElementById(this.ruudukonNimi+"checbox"+i).disabled = true;
					}
				
				}
			}
		}
		else if (document.getElementById(this.ruudukonNimi+"checbox"+ruudunNumero).checked == false)
		{
			this.valittujaNumeroita--;

			if (this.valittujaNumeroitaMax > this.valittujaNumeroita)
			{
				for (i=1;i<this.lottoPallojenMaara;i++)
				{
	
					document.getElementById(this.ruudukonNimi+"checbox"+i).disabled = false;
					
				
				}
			}
		}

	}
}



























