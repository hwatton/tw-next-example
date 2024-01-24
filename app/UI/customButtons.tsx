"use client"

import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { sendColour } from "../data/sendColour";


interface CustomButtonProps  {
    colour: string;
}



export const CustomButton = ({colour}:CustomButtonProps)=> {

    function clickHandle(): void {
      
            console.log(colour)
       
        }

        const buttonStyle =  "align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"


    return  <form action={sendColour}>
        <input type="text" name={"colour"} value={colour} style={{display: 'none'}}/>
     <Button
      className="mt-6 block lg:w-400 md:w-300 sm:w-100 select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      style={{backgroundColor: colour}}
      type="submit"
      placeholder={""}
      data-ripple-light="true">
      {`Add ${colour}`}
    </Button>
    </form>
}