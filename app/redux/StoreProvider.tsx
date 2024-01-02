"use client";
import { Provider } from "react-redux";
import { STORE } from "./store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // const storeRef = useRef<AppStore>();
  // if (!storeRef.current) {
  //   // Create the store instance the first time this renders
  //   storeRef.current = STORE();
  //   storeRef.current.dispatch(noteSlice.);
  // }

  return <Provider store={STORE}>{children}</Provider>;
}
