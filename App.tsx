import React from 'react'
import {MomentumFile} from "./momentum";
import {FinalVelocityFile} from "./final_velocity";
import {FinalDisplacementFile} from "./final_displacement";
import {AtwoodMachineFile} from "./atwoodmachine";
import {InclinedMassFile} from "./inclined_mass";
import {TopOfPageFile} from "./top_of_page";

function App() {
    return (
    <div>
        <TopOfPageFile />
        <FinalVelocityFile />
        <FinalDisplacementFile />
        <MomentumFile />
        <AtwoodMachineFile />
        <InclinedMassFile />
    </div>

  )
}

export default App
