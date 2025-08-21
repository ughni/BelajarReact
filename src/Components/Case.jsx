import { useEffect, useRef, useState } from "react";

export function LatihanUseeffect() {

  const [search, setSearch] = useState("avengers");
  const [filems, setFilms] = useState();
  const inputRef = useRef(null)
  const omdmApi = async () => {
    const filem = await fetch(`http://www.omdbapi.com/?apikey=3b68268d&s=${search}`);
    const dataFilm = await filem.json();
    const data = dataFilm.Search;
    setFilms(data);
  };

  useEffect(() => {
    inputRef.current.focus()
  },[])

  useEffect(() => {
    omdmApi();
  }, [search]);

  return (
    <>
      <div className="flex flex-col  items-center mt-10">
        <input type="text" ref={inputRef} placeholder="Cari Film" onChange={(e) => setSearch(e.target.value)} value={search} className="mt-4 px-2 py-1 border rounded" />
        <div className="flex flex-wrap">
          {filems && filems.length > 0 ? (
            filems.map((film, index) => (
              <div key={film.imdbID || index} className="m-2 p-2 border rounded w-40">
                <img src={film.Poster} alt={film.Title} className="w-full h-40 object-cover mb-2" />
                <p className="text-center font-bold">{film.Title}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Tidak ada data Film</p>
          )}
        </div>
      </div>
    </>
  );
}
