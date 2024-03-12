import axios from "axios";
import { useEffect, useState } from "react";
import CardsGrid from "./components/CardsGrid";
import PaginateButton from "./components/PaginateButton";

function App() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const photosPerPage = 6;
  let lastIndex = photosPerPage * page;
  let firstIndex = lastIndex - photosPerPage;

  const baseUrl = `https://jsonplaceholder.typicode.com`;
  const getPhotos = async () => {
    try {
      const res = await axios.get(`${baseUrl}/photos?_limit=100`);
      setPhotos(res?.data);
    } catch (err) {
      throw new Error(err?.message);
    }
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      getPhotos();
    },2000);

    return () => { //clean up function....
      clearTimeout(timerId);
    }
  }, []);
  return (
    <>
      <CardsGrid
        photos={photos}
        lastIndex={lastIndex}
        firstIndex={firstIndex}
      />
      <PaginateButton page={page}
        setPage={setPage}
        photosPerPage={photosPerPage}
        photos={photos}
      />
    </>
  );
}

export default App;
