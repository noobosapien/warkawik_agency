import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";

const render = async (component) => {
  const container = document.createElement("div");
  await act(() => document.body.replaceChildren(container));
  await act(() => ReactDOM.createRoot(container).render(component));
};

export { render };
