import { TSpell } from "../datacomponent/page";

interface SpellCardProps {
    spell : TSpell
}

interface SpellCardSkeletonProps {
    name?: string;
    description?: string
}

export const SpellCardSkeleton = ({name, description}: SpellCardSkeletonProps) => {
    return <div className={'flex flex-wrap pt-[20px] justify-center place-content-evenly'}>
    {[...Array(10)].map(() =>{
return (
<div className={"bg-slate-300 p-2 w-[140px] border-2 border-red-200 h-[250px]"}>
  <p>{name ? name : " "}</p>
  <br />
  <p className={"line-clamp-5"}>{description? description :" "}</p>
</div>
);
    })}
    </div>

}

export const SpellCard = ({spell}: SpellCardProps) => {
  
return <SpellCardSkeleton name={spell.name} description={spell.description}/>
  
}