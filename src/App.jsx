import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import ApiProvider from "./context/ApiProvider";
import GlobalProvider from "./context/services/GlobalProvider";

// TODO: Lanjut bikin landing page
function App() {
  return (
    <>
      <ApiProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ApiProvider>
    </>
  );
}

export default App;
