const BASE_API = 'https://pokeapi.co/api/v2/'

export async function getPokemon(id){
   try {
      
      const response = await fetch(`${BASE_API}pokemon/${id}/`)
      const data = await response.json()
      return data
   } catch (error) {
      return "error" ;
   }

}
export async function getSpecies(id){

   try {
      const response = await fetch(`${BASE_API}pokemon-species/${id}/`)
      const data = await response.json()
      return data
      
   } catch (error) {
      return "hubo un error al obtener el pokemon"
   }
 
 }
