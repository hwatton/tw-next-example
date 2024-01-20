import { SpellCardSkeleton } from "../UI/spellCard"

 const Loading = () =>{
    return  <main >
    <div className={'flex flex-wrap pt-[20px] justify-center place-content-evenly'}>
    {[...Array(10)].map(() =>{
return <SpellCardSkeleton /> 
})}
    </div>
  </main>
}

export default Loading