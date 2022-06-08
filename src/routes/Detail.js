
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import {useState} from 'react';

function Detail() {
  const [meta, setMeta] = useState([]);


  const { id } = useParams();
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();

        console.log(json.data.movie);
        setMeta(json.data.movie);
}
        
  useEffect(() => {
    getMovie();
  }, []);


    return (
      <div>
        <h1>Detail</h1>
        <img src={meta.medium_cover_image} alt={meta.title}/>
        <h1> {meta.title}</h1>

        <p>{meta.discription}</p>

        
        <div> {`Rating: ${meta.rating}`} </div>
        <ul>{meta.genres && meta.genres.map(g => <li key={g}>{g}</li>)}</ul>
        </div>
        )
}

export default Detail;