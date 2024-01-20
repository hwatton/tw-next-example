'use client'

import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { CustomButton } from "../UI/customButtons";

function AddColour(){

    //ok, add the data to the database on click next.
    //make a get colour screen
    

    const [color, setColor] = useState("#aabbcc");
    return <div>
    <div>add a colour </div>
    <HexColorPicker color={color} onChange={setColor} />
    <p>{color}</p>
    <CustomButton value={'bizarre placeholder value'}/>
    </div>

}

export default AddColour
