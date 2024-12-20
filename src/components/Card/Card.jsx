import { Link } from "react-router-dom";

export default function Card({ id, name, status, species, gender, origin, image, onClose, onAddFavorite, showRemoveButton }) {
   return (
     
      <div>
    <button onClick={() =>{
      console.log("Cerrando tarjeta con ID:", id);
      onClose(id)
    }}>X</button>
    
         <h2>{name} </h2>
         <h2>{status} </h2>
         <h2>{species} </h2>
                   {/* Botón para agregar a favoritos */}
                   <button style={{ display: 'block', backgroundColor: 'lightblue', color: 'black' }}
                   
                   onClick={() => {
                     console.log("Botón 'Agregar a Favoritos' presionado", {
                        id,
                        name,
                        status,
                        species,
                        gender,
                        origin,
                        image,
                     }); // Verifica los datos enviados
                     onAddFavorite({ id, name, status, species, gender, origin, image });
                  }}
               >
                  agregar personaje favorito
          </button>

                {/* Botón "Eliminar de Favoritos" que solo se muestra si showRemoveButton es true */}

                  {showRemoveButton && (
                     <button onClick={()=>alert(`Eliminar favorito: ${name}`)}>Eliminar Favorito</button>
                  )}
         <h2>{gender} </h2>
         <h2>{origin.name} </h2>
         <img src={image} alt={name} /> 

         {/* Botón Detail */}
         <Link to={`/detail/${id}`}>
            <button style={{ backgroundColor: 'orange', color: 'white', marginTop: '10px' }}>
               Detail
            </button>
         </Link>
      </div>
   );
}
