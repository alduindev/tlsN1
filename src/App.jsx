import { BrowserRouter } from "react-router-dom";
import RouterMain from "./routes/RouterMain";

export default function App() {
  return (
    <BrowserRouter basename="/tlsN1">
      <RouterMain />
    </BrowserRouter>
  );
}
