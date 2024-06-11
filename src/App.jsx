import "./App.css";
import {
  BrowserRouter,
  HashRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { Home } from "./pages/home/Home";
import OfferPage from "./pages/OfferPage/OfferPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            index
            element={<Navigate to="/home" />}
          />
          <Route
            path="/"
            element={<Home />}
          />
          <Route
          path="offerpage"
          element={<OfferPage/>}
        />
          <Route
          path="/home"
          element={<Home />}
        />
          <Route
            path="*"
            element={<Home />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// <Home />
// <BoxSection />
// <PoweredSection />
// <BlocksSection />
// <SpaceChat />
