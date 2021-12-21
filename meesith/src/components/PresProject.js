import React from "react";
import {useState} from "react";
import "./PresProject.css" 

const PresProject = () => {
    const [showLongVersion, setShowLongVersion] = useState(false);

    const display = (e) => {
        e.preventDefault();
				setShowLongVersion(!showLongVersion)
				console.log(showLongVersion)
    }
    return (
        <div className="txt">
            <p className="txtshort">
								L’amour peut être si frustrant !<br></br>
								<br></br>
                Votre fantasme est branché biotech alors que vous êtes certifié Bio ?<br></br>
                Il est monogame alors que vous êtes polyamoureuse ?<br></br>
                Sa sapiosexualité la fait passer à côté de vos plus belles qualités ?<br></br>
                Iel souhaite s’exiler sur Tatooine pour élever des banthas, alors que vous rêvez de vivre dans les plus hauts étages de Galactic City à Coruscant ?<br></br>
								<br></br>
                Grâce à d’exceptionnelles avancées permises par les midi-chloriens, MeeSith a LA solution idéale à vous proposer pour un futur full love, siths & robots :
            </p>
            <p className={showLongVersion ? "txtlong" : "txthidden"}>
								<br></br>Cloner votre Sith, Jedi ou alien favori et le programmer afin qu’iel corresponde à vos désirs les plus fous !<br></br>
								<br></br>
                En bonus, parce que nous vous aimons et souhaitons répandre l’Amour parfait à travers l’infini et l’au-delà, MeeSith vous propose un service unique :<br></br>
								<br></br>
                Tester un ou plusieurs exemplaires de votre choix durant une période maximale de 10 jours, au sein d’un dôme reproduisant les caractéristiques de votre planète favorite.</p>
            <button onClick={display}>
								{showLongVersion ? "Réduire" : "En savoir plus"} 
            </button>
        </div>
    )
}

export default PresProject