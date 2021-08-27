import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./Pages";
import { links } from "./util/consts";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {links
          .filter((link) => link.text !== "Home")
          .map((link) => {
            const { id, url, page } = link;
            return (
              <Route key={id} path={url}>
                {page}
              </Route>
            );
          })}
      </Switch>
    </>
  );
}

export default App;
