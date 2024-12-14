import { useState } from "react";

export default function SearchBar({onSearch}) {

      const [id, setId] = useState("");

      const handleChange = (event) =>{
         const value = event.target.value;

         setId(value);
         console.log("Valor actual del estado id:", value);
      }

   return (
      <div>
         <input 
         type='search'
         value={id}
         onChange={handleChange}
         />
        <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
