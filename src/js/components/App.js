import { useEffect } from "react";
import { useDataAPI } from "../logic/fetchData.js";
import { Error } from "./Error.js";
import { Header } from "./Header.js";
import { Loader } from "./Loader.js";
import { User } from "./User.js";

import { useSearchParams } from "react-router-dom";

export const App = () => {
  const [search, setSearch] = useSearchParams();
  let [{ data, isLoading, isError }, doFetch] = useDataAPI("");

  useEffect(() => {
    const query = search.get("query");

    if (query) {
      doFetch(`https://api.github.com/users/${query}`);
    } else if (query === "") {
      setSearch({});
    }
  }, [search, setSearch, doFetch]);

  function handleSubmit(searchTerm) {
    setSearch({ query: searchTerm });
  }

  return (
    <>
      <Header handleFormSubmit={handleSubmit} />
      <main>
        {isError ? <Error text="Something went wrong..." /> : null}
        {isLoading ? <Loader text="Loading" /> : null}
        {data ? <User data={data} /> : null}
      </main>
    </>
  );
};
