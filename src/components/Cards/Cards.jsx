import Card from '../Card/Card';
import {useDispatch} from 'react-redux'
import {addFav} from '../../redux/actions'

export default function Cards({ characters, onClose  }) { 


const dispatch = useDispatch();

// Función manejadora para agregar un personaje a favoritos
const handleAddFavorite =(character)=>{
   console.log("Despachando acción ADD_FAV con:", character); // Debug antes de despachar
   dispatch(addFav(character))
}

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
               onAddFavorite={handleAddFavorite}
               />
            )
         })}
      </div>
   )
}
