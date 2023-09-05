import { useEffect, useState } from "react"

export default function Sobre() {

    const [dados,setDados] = useState([])


    useEffect(() => {
        fetch( "https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => setDados(data.results))
        .catch((error) => console.log(error))
    })
  return (
    <div>
        <h1>Library</h1>
        <div className="flexbox">
            {
                dados.map(characters => (
                    <div key={characters.id} className='cards'>
                        <h1 className="tittle">{characters.name}</h1>
                        <img src={characters.image} className='img'></img>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
