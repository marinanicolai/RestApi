import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import withListLoading from "./components/WithListLoading";
import { PostRequest } from "./components/PostRequest";
import { PostRequestHooks } from "./components/PostRequestHooks";
import { PostRequestErrorHandling } from "./components/PostRequestErrorHandling";
import { PostRequestSetHeaders } from "./components/PostRequestSetHeaders";
function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.github.com/users/marinanicolai/repos`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(repos => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <div className="App">
      <div className="container">
        <h1>My Repositories</h1>
      </div>
      <div className="repo-container">
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <div>
        <h3 className="p-3 text-center">React HTTP POST Requests with Fetch</h3>
        <PostRequest />
        <PostRequestHooks />
        <PostRequestErrorHandling />
        <PostRequestSetHeaders />
      </div>
      <footer>
        <div className="footer">
          Built{" "}
          <span role="img" aria-label="love">
            💚
          </span>{" "}
          with by Marina Nicolai
        </div>
      </footer>
    </div>
  );
}
export default App;
