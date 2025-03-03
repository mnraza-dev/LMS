import React from "react";
import { Button } from "./components/ui/button";
import { Login } from "./pages/Login";

const App = () => {
  return (
    <div className="flex  items-center justify-center h-screen space-y-4">
      {" "}
      '>
      <Button variant="default" size={"lg"}>
        Let's build LMS App
      </Button>
      <Login />
    </div>
  );
};

export default App;
