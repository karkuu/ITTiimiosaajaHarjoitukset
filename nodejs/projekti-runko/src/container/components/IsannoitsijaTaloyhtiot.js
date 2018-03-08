import React from 'react';

export default class EtuSivu extends React.Component {
  render() {
    return (
		<div class="card">
		  <div class="card-body">
		   <h3>Talonyhtiöt</h3>
		  <table class="table table-bordered">
		    <thead>
		      <tr>
					<th scope="row"></th>
					<th scope="row" colspan="3">Yhtiön nimi</th>
					<th scope="row" colspan="3">Osoite</th>
					<th scope="row">Toiminnot</th>
			 </tr>
		    </thead>
		    <tbody>
			<tr>
			<th scope="row"><a href="index.html"><img src="img/sort.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></th>
			<td><input type="text" class="form-control" id="yhtiotHaeYhtionNimellä" placeholder="Yhtiön nimi"/></td><td><a href="index.html"><img src="img/jarjestysylos.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td><td><a href="index.html"><img src="img/jarjestysalas.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
			<td><input type="text" class="form-control" id="yhtiotHaeOsoitteella" placeholder="Osoite"/></td><td><a href="index.html"><img src="img/jarjestysylos.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td><td><a href="index.html"><img src="img/jarjestysalas.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
			
	
			<td></td>
		    </tr>
			<tr>
			<th scope="row">*</th>
			<td colspan="3" onclick="datahaku.naytaYhtionTiedot(1);"><a href="index.html">As. Oy Avaruusraketti</a></td>
			<td colspan="3">Avaruusrakettikatu 1000, Kuu</td>
			<td><a href="isannoitsija-henkilot.html"><img src="img/hallitus.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="isannoitsija-henkilot.html"><img src="img/henkilot.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="isannoitsija-ilmoitukset.html"><img src="img/ilmoitukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="asetukset.html"><img src="img/asetukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
		    </tr>
			<tr class="isannoitsijaYhtiotYhtio" id="isannoitsijaYhtiotYhtio1">
			<td colspan="8" class="bg-secondary" id="isannoitsijaYhtiotYhtiotd1">
			
			</td>
		    </tr>
			<tr>
			<th scope="row">*</th>
			<td colspan="3" onclick="datahaku.naytaYhtionTiedot(2);"><a href="index.html">As. Oy Tienmutka</a></td>
			<td colspan="3">Mutka 10</td>
			<td><a href="isannoitsija-henkilot.html"><img src="img/hallitus.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="isannoitsija-henkilot.html"><img src="img/henkilot.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="isannoitsija-ilmoitukset.html"><img src="img/ilmoitukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="asetukset.html"><img src="img/asetukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
		    </tr>
			<tr class="isannoitsijaYhtiotYhtio" id="isannoitsijaYhtiotYhtio2">
			<td colspan="8" class="bg-secondary" id="isannoitsijaYhtiotYhtiotd2">
			
			</td>
		    </tr>
			<tr>
			<th scope="row"></th>
			<td colspan="3" onclick="datahaku.naytaYhtionTiedot(3);"><a href="index.html">As. Oy Umpikuja</a></td>
			<td colspan="3">Huitsinnevada 100</td>
			<td><a href="isannoitsija-henkilot.html"><img src="img/hallitus.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="isannoitsija-henkilot.html"><img src="img/henkilot.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="isannoitsija-ilmoitukset.html"><img src="img/ilmoitukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="asetukset.html"><img src="img/asetukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
		    </tr>
			<tr class="isannoitsijaYhtiotYhtio" id="isannoitsijaYhtiotYhtio3">
			<td colspan="8" class="bg-secondary" id="isannoitsijaYhtiotYhtiotd3">
			
			</td>
		    </tr>
			<tr>
			<th scope="row"></th>
			<td colspan="3" onclick="datahaku.naytaYhtionTiedot(4);"><a href="index.html">As. Oy Maailman paras talonyhtiö</a></td>
			<td colspan="3">Utopiakatu 7</td>
			<td colspan="3"><a href="isannoitsija-henkilot.html"><img src="img/hallitus.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="isannoitsija-henkilot.html"><img src="img/henkilot.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="isannoitsija-ilmoitukset.html"><img src="img/ilmoitukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="asetukset.html"><img src="img/asetukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
		    </tr>
			<tr class="isannoitsijaYhtiotYhtio" id="isannoitsijaYhtiotYhtio4">
			<td colspan="8" class="bg-secondary" id="isannoitsijaYhtiotYhtiotd4">
			</td>
		    </tr>
			<tr>
			<th scope="row"></th>
			<td colspan="3" onclick="datahaku.naytaYhtionTiedot(5);"><a href="index.html">As. Oy Valtionmajoitus</a></td>
			<td colspan="3">Linnakatu 19</td>
			<td><a href="isannoitsija-henkilot.html"><img src="img/hallitus.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="isannoitsija-henkilot.html"><img src="img/henkilot.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="isannoitsija-ilmoitukset.html"><img src="img/ilmoitukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="asetukset.html"><img src="img/asetukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
		    </tr>
			<tr class="isannoitsijaYhtiotYhtio" id="isannoitsijaYhtiotYhtio5">
			<td colspan="8" class="bg-secondary" id="isannoitsijaYhtiotYhtiotd5">
			
			</td>
		    </tr>
		    </tbody>
		  </table>
		  </div>
		</div>
    );
  }
}
