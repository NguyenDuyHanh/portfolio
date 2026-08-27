import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/Home/index.jsx";
import Welcome from "./pages/Welcome.jsx";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      {/* Welcome overlay */}
      {showWelcome && (
        <Welcome visible={showWelcome} onFinish={() => setShowWelcome(false)} />
      )}
      <Routes>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
