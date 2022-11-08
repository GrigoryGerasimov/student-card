import { useRoutes } from "react-router-dom";
import { routes } from "./routes.jsx";
import { withReduxHooks } from "./components/common/form/hoc/withReduxHooks.jsx";

const App = () => withReduxHooks(useRoutes(routes));

export default App;
