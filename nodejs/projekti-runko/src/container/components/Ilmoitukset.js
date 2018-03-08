import React from 'react';

export default class EtuSivu extends React.Component {
  render() {
    return (
		<div class="card">
		  <div class="card-body">
			<h3>Uudet ilmoitukset</h3>
		<table class="table table-bordered">
		  <thead>
		    <tr>
         <th>Ilmoitus</th>
         <th>Päivämäärä</th>
         <th colspan="3">Ilmoittaja</th>
         <th colspan="3">Ilmoitus</th>
         <th>Toiminnot</th>
		    </tr>
		  </thead>
		  <tbody>
        <tr>
          <td></td>
          <td></td>
          <td><input type="text" class="form-control" id="ilmoitusHaeNimellä" placeholder="Nimi" /></td>
          <td><a href="index.html"><img src="img/jarjestysylos.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
          <td><a href="index.html"><img src="img/jarjestysalas.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
          <td><input type="text" class="form-control" id="ilmoitusHaeTyyppi" placeholder="Ilmoitus" /></td>
          <td><a href="index.html"><img src="img/jarjestysylos.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
          <td><a href="index.html"><img src="img/jarjestysalas.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
          <td></td>
        </tr>
		     <tr>
          <td><a href="index.html" onclick="datahaku.naytaIlmoituksenTiedotAsukas(1);">Kissa katolla apua</a></td>
          <td>15.2.2018 09:15</td>
          <td colspan="3">Taavetti Tompainen</td>
          <td colspan="3">Muu palaute</td>
          <td><a href="index.html"><img src="img/ilmoitukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a>
              <a href="index.html"><img src="img/asetukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a>
          </td>
		     </tr>
		     <tr>
          <td href="#" onclick="datahaku.naytaIlmoituksenTiedotAsukas(2);"><a href="index.html">Hana tippuu vieläkin!</a></td>
          <td>14.2.2018 19:52</td>
          <td colspan="3">Katti Matikainen</td>
          <td colspan="3">Reklamaatio</td>
          <td><a href="index.html"><img src="img/ilmoitukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a>
            <a href="index.html"><img src="img/asetukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
        </tr>
		     <tr>
          <td href="#" onclick="datahaku.naytaIlmoituksenTiedotAsukas(3);"><a href="index.html">Naapuri bilettää taas</a></td>
          <td>13.2.2018 23:15</td>
          <td colspan="3">Pekka Töpöhäntä</td>
          <td colspan="3">Häiriöilmoitus</td>
          <td><a href="index.html"><img src="img/ilmoitukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a>
            <a href="index.html"><img src="img/asetukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
		     </tr>
		     <tr>
          <td href="#" onclick="datahaku.naytaIlmoituksenTiedotAsukas(4);"><a href="index.html">Autopaikasta</a></td>
          <td>10.2.2018 09:15</td>
          <td colspan="3">Taavetti Tompainen</td>
          <td colspan="3">Muu palaute</td>
          <td><a href="index.html"><img src="img/ilmoitukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a>
            <a href="index.html"><img src="img/asetukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
		     </tr>
		     <tr>
          <td href="#" onclick="datahaku.naytaIlmoituksenTiedotAsukas(5);"><a href="index.html">Naapuri bilettää</a></td>
          <td>06.2.2018 00:15</td>
          <td colspan="3">Pekka Töpöhäntä</td>
          <td colspan="3">Häiriöilmoitus</td>
          <td><a href="index.html"><img src="img/ilmoitukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a>
            <a href="index.html"><img src="img/asetukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
		     </tr>
		  </tbody>
		</table>

   <h3>Kuitatut ilmoitukset</h3>
   <table class="table table-bordered" id="oldElements">
     <thead class="thead-light">
       <tr>
         <th>Ilmoitus</th>
         <th>Päivämäärä</th>
         <th colspan="3">Ilmoittaja</th>
         <th colspan="3">Ilmoitus</th>
         <th>Kuittaus</th>
		    </tr>
		  </thead>
		  <tbody>
       <tr>
         <td></td>
         <td></td>
         <td><input type="text" class="form-control" id="ilmoitusHaeNimellä" placeholder="Nimi" /></td>
         <td><a href="index.html"><img src="img/jarjestysylos.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
         <td><a href="index.html"><img src="img/jarjestysalas.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
         <td><input type="text" class="form-control" id="ilmoitusHaeTyyppi" placeholder="Ilmoitus" /></td>
         <td><a href="index.html"><img src="img/jarjestysylos.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
         <td><a href="index.html"><img src="img/jarjestysalas.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
         <td></td>
       </tr>
		    <tr>
         <td href="#" onclick="datahaku.naytaIlmoituksenTiedotAsukas(6);"><a href="index.html">Kuka tohelo kolas...</a></td>
         <td>05.2.2018 11:12</td>
         <td colspan="3">Janne Holopainen</td>
         <td colspan="3">Muu palaute</td>
         <td>Kuitattu 06.02.2018 10:00 - Isännöitsijä Jonne</td>
		    </tr>
		    <tr>
         <td href="#" onclick="datahaku.naytaIlmoituksenTiedotAsukas(7);"><a href="index.html">Naapuri juhliii</a></td>
         <td>01.2.2018 00:30</td>
         <td colspan="3">Pekka Töpöhäntä</td>
         <td colspan="3">Häiriöilmoitus</td>
         <td>Kuitattu 02.02.2018 09:15 - Isännöitsijä Jonne</td>
		    </tr>
		  </tbody>
   </table>
		<a href="index.html">Lisää ilmoituksia...</a>
		<br/><br/>
		  </div>
		</div>
    );
  }
}
