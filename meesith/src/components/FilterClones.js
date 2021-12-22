import React from 'react'
import "./FilterClones.css"


function FilterClones() {
    return (
        <div className='Filter'>

            <div className='FilterHeigth'>
                <select name="pets" id="">
                    <option value="">Selectionnez votre taille</option>
                    <option value="dog">...</option>
                    <option value="cat">...</option>
                    
                </select>
            </div>

            <div className='FilterMass'>
                <select name="pets" id="">
                    <option value="">Selectionnez votre poids</option>
                    <option value="dog">...</option>
                    <option value="cat">...</option>
                    
                </select>
            </div>

            <div className='FilterSpecies'>
                <select name="pets" id="">
                    <option value="">Selectionnez votre genre</option>
                    <option value="dog">Humain</option>
                    <option value="cat">Droid</option>
                    <option value="dog">wookiee</option>
                    <option value="cat">rodian</option>
                </select>
            </div>

        </div>
    )
}

export default FilterClones
