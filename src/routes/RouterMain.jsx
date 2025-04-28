import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import RouterHomeOut from "./out/RouterHomeOut";

export default function RouterMain() {
  return (
    <Suspense fallback={null}>
      <Routes>

        <Route path="/*" element={<RouterHomeOut />} />
      </Routes>
    </Suspense>
  );
}
