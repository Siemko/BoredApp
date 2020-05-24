import { useContext } from "react";
import { ToastContext } from "./toast.provider";

export default function useToast() {
  return useContext(ToastContext);
}
