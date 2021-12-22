import React from 'react'

function FilterClones() {
    return (
        <div className='Filter'>

            <div className='FilterHeigth'>
                <select name="pets" id="">
                    <option value="">Selectioné votre tailles</option>
                    <option value="dog">...</option>
                    <option value="cat">...</option>
                    
                </select>
            </div>

            <div className='FilterMass'>
                <select name="pets" id="">
                    <option value="">Selectioné votre poids</option>
                    <option value="dog">...</option>
                    <option value="cat">...</option>
                    
                </select>
            </div>

            <div className='FilterSpecies'>
                <select name="pets" id="">
                    <option value="">Selectioné votre genre</option>
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
