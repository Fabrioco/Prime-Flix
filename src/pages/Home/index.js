import { useEffect,useState } from "react";
import api from '../../services/api'
//URL da Api: https://api.themoviedb.org/3/movie/now_playing?api_key=d990f125e042de6239b35dc9f8a09a89&language=pt-BR

function Home(){
    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: 'd990f125e042de6239b35dc9f8a09a89',
                    language: 'pt-BR',
                    page: '1'
                }
            })

            console.log(response.data.results)
        }

        loadFilmes();

    },[])

    return(
        <div>
            <h1>Bem vindo ao Home</h1>
        </div>
    )
}

export default Home;