import Card from './Card';

export default function Cards({ characters, onClose  }) { 
   return (
      <div>
         {characters.map((character)=>{
            return(
               <Card
               key={character.id}
               id={character.id} 
               name ={character.name}
               status={character.status}
               species={character.species}
               image={character.image}
               origin={character.origin.name}
               onClose={onClose}
               />
            )
         })}
      </div>
   )
}
