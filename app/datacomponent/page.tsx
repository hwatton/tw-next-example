import { SpellCard } from "../UI/spellCard";

export type TSpell = {
  name: string,
  description: string,
  id: string
}
 
async function getHPStuff () {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch('https://hp-api.onrender.com/api/spells', {cache: 'no-store'})
  const hpStuff = res.json()
 
    return hpStuff

  
}
 
export default async function DataComponent() {

  const hpStuff = await  getHPStuff()

//add some async slow down code here or in get HPStuff
  
  return (
    <main >
      <div className={'flex flex-wrap pt-[20px] justify-center place-content-evenly'}>
      {hpStuff.map((spell: TSpell) =>{
return <SpellCard spell={spell}/> 
})}
      </div>
    </main>
  )
}