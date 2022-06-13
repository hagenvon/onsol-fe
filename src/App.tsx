import React from "react";
import { Wallet } from "./WalletProvider";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "./views/LandingPage";
import { TutorialPage } from "./views/TutorialPage";
import { EditPage } from "./views/EditPage";
import { PreviewPage } from "./views/PreviewPage";
import { MantineProvider } from "@mantine/core";
import { lightTheme } from "./theme";
import { tutorialSteps } from "./components/tutorial/tutorial.steps";
import { Provider } from "react-redux";
import { store } from "./store";
import { editSteps } from "./components/edit/edit.steps";

function App() {
  const tutorialRoutes = tutorialSteps.map((it) => {
    const Element = it.component;
    return <Route path={it.path} key={it.path} element={<Element />} />;
  });

  const editRoutes = editSteps.map((it) => {
    const Element = it.component;
    return <Route path={it.path} key={it.path} element={<Element />} />;
  });

  return (
    <Provider store={store}>
      <MantineProvider theme={lightTheme}>
        <Wallet>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/tutorial" element={<TutorialPage />}>
                {tutorialRoutes}
                <Route
                  path=""
                  element={<Navigate replace to={tutorialSteps[0].path} />}
                />
              </Route>
              <Route path="/edit" element={<EditPage />}>
                {editRoutes}
                <Route
                  path=""
                  element={<Navigate replace to={editSteps[0].path} />}
                />
              </Route>
              <Route path="/preview" element={<PreviewPage />} />
            </Routes>
          </BrowserRouter>
        </Wallet>
      </MantineProvider>
    </Provider>
  );
}

export default App;
