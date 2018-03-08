import React from 'react';

export default class EtuSivu extends React.Component {
  render() {
    return (
		<div class="card">
		  <div class="card-body">
		   <h3>Henkilöt</h3>
		  <table class="table table-bordered">
		    <thead>
		      <tr>
					<th scope="row" colspan="3">Nimi</th>
					<th scope="row" colspan="3">Osoite</th>
					<th scope="row">Toiminnot</th>
			 </tr>
		    </thead>
		    <tbody>
			<tr>
			<td><input type="text" class="form-control" id="henkilotHaeNimellä" placeholder="Nimi"/></td><td><a href="index.html"><img src="img/jarjestysylos.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td><td><a href="index.html"><img src="img/jarjestysalas.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
			<td><input type="text" class="form-control" id="henkilotHaeOsoitteella" placeholder="Osoite"/></td><td><a href="index.html"><img src="img/jarjestysylos.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td><td><a href="index.html"><img src="img/jarjestysalas.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
			
	
			<td></td>
		    </tr>
			<tr>
			<td colspan="3" onclick="datahaku.naytaHenkilonTiedot(1);"><a href="index.html">Matti Meikäläinen</a></td>
			<td colspan="3">Avaruusrakettikatu 1000, Kuu</td>
			<td><a href="isannoitsija-ilmoitukset.html"><img src="img/ilmoitukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="asetukset.html"><img src="img/asetukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
		    </tr>
			<tr class="isannoitsijaHenkilotHenkilo" id="isannoitsijaHenkilotHenkilo1">
			<td colspan="7" class="bg-secondary" id="isannoitsijaHenkilotHenkilotd1">
			
			</td>
		    </tr>
			<tr>
			<td colspan="3" onclick="datahaku.naytaHenkilonTiedot(2);"><a href="index.html">Maija Meikäläinen</a> <img src="img/hallitus.svg" class="img-fluid" alt="[H]" height="20" width="20"/></td>
			<td colspan="3">Avaruusrakettikatu 1000, Kuu</td>
			<td><a href="isannoitsija-ilmoitukset.html"><img src="img/ilmoitukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="asetukset.html"><img src="img/asetukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
		    </tr>
			<tr class="isannoitsijaHenkilotHenkilo" id="isannoitsijaHenkilotHenkilo2">
			<td colspan="7" class="bg-secondary" id="isannoitsijaHenkilotHenkilotd2">
			
			</td>
		    </tr>
			<tr>
			<td colspan="3" onclick="datahaku.naytaHenkilonTiedot(3);"><a href="index.html">Teppo Testaaja</a></td>
			<td colspan="3">Testaajakatu 4 c 56</td>
			<td><a href="isannoitsija-ilmoitukset.html"><img src="img/ilmoitukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="asetukset.html"><img src="img/asetukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
		    </tr>
			<tr class="isannoitsijaHenkilotHenkilo" id="isannoitsijaHenkilotHenkilo3">
			<td colspan="7" class="bg-secondary" id="isannoitsijaHenkilotHenkilotd3">
			
			</td>
		    </tr>
			<tr>
			<td colspan="3" onclick="datahaku.naytaHenkilonTiedot(4);"><a href="index.html">Matti Meikäläinen</a></td>
			<td colspan="3">Avaruusrakettikatu 1000, Kuu</td>
			<td><a href="isannoitsija-ilmoitukset.html"><img src="img/ilmoitukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="asetukset.html"><img src="img/asetukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
		    </tr>
			<tr class="isannoitsijaHenkilotHenkilo" id="isannoitsijaHenkilotHenkilo4">
			<td colspan="7" class="bg-secondary" id="isannoitsijaHenkilotHenkilotd4">
			
			</td>
		    </tr>
			<tr>
			<td colspan="3" onclick="datahaku.naytaHenkilonTiedot(5);"><a href="index.html">Maija Meikäläinen</a></td>
			<td colspan="3">Avaruusrakettikatu 1000, Kuu</td>
			<td><a href="isannoitsija-ilmoitukset.html"><img src="img/ilmoitukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="asetukset.html"><img src="img/asetukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
		    </tr>
			<tr class="isannoitsijaHenkilotHenkilo" id="isannoitsijaHenkilotHenkilo5">
			<td colspan="7" class="bg-secondary" id="isannoitsijaHenkilotHenkilotd5">
			
			</td>
		    </tr>
			<tr>
			<td colspan="3" onclick="datahaku.naytaHenkilonTiedot(6);"><a href="index.html">Teppo Testaaja</a> <img src="img/hallitus.svg" class="img-fluid" alt="[H]" height="20" width="20"/></td>
			<td colspan="3">Testaajakatu 4 c 56</td>
			<td><a href="isannoitsija-ilmoitukset.html"><img src="img/ilmoitukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="asetukset.html"><img src="img/asetukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
		     </tr>
			<tr class="isannoitsijaHenkilotHenkilo" id="isannoitsijaHenkilotHenkilo6">
			<td colspan="7" class="bg-secondary" id="isannoitsijaHenkilotHenkilotd6">
			
			</td>
		    </tr>
			<tr>
			<td colspan="3" onclick="datahaku.naytaHenkilonTiedot(7);"><a href="index.html">Matti Meikäläinen</a></td>
			<td colspan="3">Avaruusrakettikatu 1000, Kuu</td>
			<td><a href="isannoitsija-ilmoitukset.html"><img src="img/ilmoitukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="asetukset.html"><img src="img/asetukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
		    </tr>
			<tr class="isannoitsijaHenkilotHenkilo" id="isannoitsijaHenkilotHenkilo7">
			<td colspan="7" class="bg-secondary" id="isannoitsijaHenkilotHenkilotd7">
			
			</td>
		    </tr>
			<tr>
			<td colspan="3" onclick="datahaku.naytaHenkilonTiedot(8);"><a href="index.html">Maija Meikäläinen</a></td>
			<td colspan="3">Avaruusrakettikatu 1000, Kuu</td>
			<td><a href="isannoitsija-ilmoitukset.html"><img src="img/ilmoitukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="asetukset.html"><img src="img/asetukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
		    </tr>
			<tr class="isannoitsijaHenkilotHenkilo" id="isannoitsijaHenkilotHenkilo8">
			<td colspan="7" class="bg-secondary" id="isannoitsijaHenkilotHenkilotd8">
			
			</td>
		    </tr>
			<tr>
			<td colspan="3" onclick="datahaku.naytaHenkilonTiedot(9);"><a href="index.html">Teppo Testaaja</a></td>
			<td colspan="3">Testaajakatu 4 c 56</td>
			<td><a href="isannoitsija-ilmoitukset.html"><img src="img/ilmoitukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="asetukset.html"><img src="img/asetukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
		    </tr>
			<tr class="isannoitsijaHenkilotHenkilo" id="isannoitsijaHenkilotHenkilo9">
			<td colspan="7" class="bg-secondary" id="isannoitsijaHenkilotHenkilotd9">
			
			</td>
		    </tr>
			<tr>
			<td colspan="3" onclick="datahaku.naytaHenkilonTiedot(10);"><a href="index.html">Matti Meikäläinen</a><img src="img/hallitus.svg" class="img-fluid" alt="[H]" height="20" width="20"/></td>
			<td colspan="3">Avaruusrakettikatu 1000, Kuu</td>
			<td><a href="isannoitsija-ilmoitukset.html"><img src="img/ilmoitukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="asetukset.html"><img src="img/asetukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
		    </tr>
			<tr class="isannoitsijaHenkilotHenkilo" id="isannoitsijaHenkilotHenkilo10">
			<td colspan="7" class="bg-secondary" id="isannoitsijaHenkilotHenkilotd10">
			
			</td>
		    </tr>
			<tr>
			<td colspan="3" onclick="datahaku.naytaHenkilonTiedot(11);"><a href="index.html">Maija Meikäläinen</a></td>
			<td colspan="3">Avaruusrakettikatu 1000, Kuu</td>
			<td><a href="isannoitsija-ilmoitukset.html"><img src="img/ilmoitukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="asetukset.html"><img src="img/asetukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
		    </tr>
			<tr class="isannoitsijaHenkilotHenkilo" id="isannoitsijaHenkilotHenkilo11">
			<td colspan="7" class="bg-secondary" id="isannoitsijaHenkilotHenkilotd11">
			
			</td>
		    </tr>
			<tr>
			<td colspan="3" onclick="datahaku.naytaHenkilonTiedot(12);"><a href="index.html">Teppo Testaaja</a></td>
			<td colspan="3">Testaajakatu 4 c 56</td>
			<td><a href="isannoitsija-ilmoitukset.html"><img src="img/ilmoitukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="asetukset.html"><img src="img/asetukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
		    </tr>
			<tr class="isannoitsijaHenkilotHenkilo" id="isannoitsijaHenkilotHenkilo12">
			<td colspan="7" class="bg-secondary" id="isannoitsijaHenkilotHenkilotd12">
			
			</td>
		    </tr>
			
			
		    </tbody>
		  </table>
		  </div>
		</div>
    );
  }
}
