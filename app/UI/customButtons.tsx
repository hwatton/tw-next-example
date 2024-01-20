"use client"

import { Button } from "@material-tailwind/react";
import { useState } from "react";


interface CustomButtonProps  {
    value: string;
}

const redButton = "align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-900 text-white shadow-md shadow-red-900/10 hover:shadow-lg hover:shadow-red-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
const grayButton = "align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"



export const CustomButton = ({value}:CustomButtonProps)=> {

    const [buttonColour, setButtonColour] = useState<string>('gray')

    function clickHandle(): void {
        if (buttonColour === 'gray') {
            setButtonColour('red')
        } else {
            setButtonColour('gray')
        }
        }

    return <Button 
    onClick={(e:React.MouseEvent)=> clickHandle()}
    placeholder={"buttonPlaceholder"}  
    type="button"
    data-ripple-light="true"
    className={buttonColour === 'red' ? redButton : grayButton}
    >Button</Button>
}