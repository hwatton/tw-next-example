'use client'

import {  Carousel, Typography, Button } from "@material-tailwind/react"

const themeCols = {
    "light": {
card: 'white',
desktop: 'rgb(240,240,200)',
text: 'black'
},
"dark" :{
    card: 'black',
    desktop: 'rgb(50,74,60)',
    text: 'white'
}
}



function FlexComponent() {

  const baseClass = "bg-white shadow-gray-200 rounded-lg "
  const theme = "light"
  const cardstyle= {
    backgroundColor: themeCols[theme].card,
    color: themeCols[theme].text,
  }

  const KarenSell = () =>{
    return (
    <div style={{backgroundColor: themeCols[theme].desktop}} className="rounded-xl h-full w-auto inline-flex overflow-x-auto gap-4">
        <div style={cardstyle} className="relative h-full w-80">Some stuff</div>
        <div style={cardstyle} className="relative h-full w-80">Some stuff</div>
        <div style={cardstyle} className="relative h-full w-80">Some stuff</div>
    </div>
    )
}

    return (
    <div style={{backgroundColor: themeCols[theme].desktop}} className={"h-full w-full content-center"}>
    <div className={"grid grid-cols-1 bg-transparent sm:grid-cols-4 xl:grid-cols-5 gap-2 p-2 md:gap-4 md:p-4 h-full w-full}"}>
   
   <div style={cardstyle} className={baseClass + "sm:col-span-2 md:hidden lg:block lg:col-span-2"}>card</div>
   <div style={cardstyle} className={baseClass + "hidden md:block md:col-span-4 lg:hidden"}><KarenSell/></div>
   <div style={cardstyle} className={baseClass +  "hidden sm:block sm:col-span-2 md:hidden lg:block lg:col-span-1"}>card</div>
   <div style={cardstyle} className={baseClass + "hidden lg:block"}>card</div>
   <div style={cardstyle} className={baseClass + "hidden xl:block row-span-2"}>card</div>
   <div style={cardstyle} className={baseClass +"sm:col-span-4"}><div className={"wd-full h-full m-2 bg-stone-400 rounded-lg"}></div></div>
   <div style={cardstyle} className={baseClass +"hidden "}>
    
   </div>

   </div>
    </div>
    )

}

export default FlexComponent