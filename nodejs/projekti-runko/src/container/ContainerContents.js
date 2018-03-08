import React from 'react';

import EtuSivu from './components/EtuSivu';
import IsannoitsijaIlmoitukset from './components/IsannoitsijaIlmoitukset';
import IsannoitsijaHenkilot from './components/IsannoitsijaHenkilot';
import IsannoitsijaEtuSivu from './components/IsannoitsijaEtuSivu';
import Ilmoitukset from './components/Ilmoitukset';


export default class ContainerContents extends React.Component
{
	naytaSivu = (sivu) => 
	{
		const Sivu = sivu;
		if (Sivu === 1)
		{
			return <EtuSivu/>;
		}
		
		else if (Sivu === 2)
		{
			return <Ilmoitukset/>;
		}
		else if (Sivu === 3)
		{
			return <IsannoitsijaHenkilot/>;
		}
		else if (Sivu === 4)
		{
			return <IsannoitsijaIlmoitukset/>;
		}
		else if (Sivu === 5)
		{
			return <IsannoitsijaEtuSivu/>;
		}
	  
	  
	}
		
  render() {

    return (    
	<div>
		
		  {this.naytaSivu(2)}
	
	</div>	  
    );
  }
}
