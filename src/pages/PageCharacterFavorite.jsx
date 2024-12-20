import React from 'react';
import { useSelector } from 'react-redux'; // Hook para acceder al estado de Redux
import Card from '../components/Card/Card'; // Importa tu componente Card

const PageCharacterFavorite = () => {
   // Accedemos al estado global de Redux
   const myFavorites = useSelector((state) => state.myFavorites);

   return (
      <div>
         <h1>Mis Personajes Favoritos</h1>
         {myFavorites.length === 0 ? (
            <p>No tienes personajes favoritos aún.</p>
         ) : (
            <div>
               {/* Mapeamos y renderizamos cada personaje */}
               {myFavorites.map((character) => (
                  <Card
                     key={character.id}
                     id={character.id}
                     name={character.name}
                     status={character.status}
                     species={character.species}
                     gender={character.gender}
                     origin={character.origin}
                     image={character.image}
                     onClose={() => console.log('Cerrar tarjeta favorita')}
                     showRemoveButton={true} // Aquí mostramos el botón extra
                  />
               ))}
            </div>
         )}
      </div>
   );
};

export default PageCharacterFavorite;
