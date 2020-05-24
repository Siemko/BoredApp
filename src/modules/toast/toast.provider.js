import * as React from "react";
import { Toast } from "./toast.component";

export const ToastContext = React.createContext({
  showToast: () => {
    throw new Error("Wrap it up with ToastProvider...");
  },
});

const { Provider } = ToastContext;

const defaultInitialState = { visible: false, text: "" };

export function ToastProvider({ children }) {
  const [{ visible, text }, setState] = React.useReducer(
    (s, a) => ({ ...s, ...a }),
    defaultInitialState,
  );

  console.log(visible);

  const contextValue = React.useMemo(
    () => ({
      showToast(text) {
        setState({ visible: true, text });
      },
      hideToast() {
        setState({ visible: false });
      },
    }),
    [],
  );

  React.useEffect(() => {
    let timeout = setTimeout(contextValue.hideToast, 5000);
    return () => clearTimeout(timeout);
  }, [contextValue, visible]);

  return (
    <Provider value={contextValue}>
      {children}
      <Toast visible={visible} text={text} />
    </Provider>
  );
}
