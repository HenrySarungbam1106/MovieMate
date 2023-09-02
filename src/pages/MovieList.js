
import { Card } from "../component"
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({apiPath}) => {
const {data: movies} = useFetch(apiPath);
  // useEffect(() => {
  //   async function fetchFilms() {
  //     const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=30bdeba8faf6e2ce0f0b8d6c3418b253");
  //     const json = await response.json();
  //     setMovies(json.results);
  //   }
  //   fetchFilms()
  // }, [])

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap ">
        {movies.map((movie) => (
          <Card key = {movie.id} movie = {movie} />
        ))}
        </div>      
      </section>
    </main>
  )
}
