import React, { Suspense } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import { projects } from "./constants/projects";
import Start from "./views/Start";

function App() {
  return (
    <Suspense fallback={() => <div>loading...</div>}>
      <Switch>
        {projects.map((p) => (
          <Route
            key={`route-${p.path}`}
            path={p.path}
            component={p.component}
          />
        ))}
        <Route path="/" component={Start} />
      </Switch>
    </Suspense>
  );
}

export default App;
