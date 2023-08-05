import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

// TODO: Lanjut bikin landing page
function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
