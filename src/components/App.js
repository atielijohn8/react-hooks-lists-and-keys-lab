import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import user from "../data/user";

// This is the main App component that renders the entire application 
function App() {
  return (
    <div>
       {/* Navigation bar at the top containing home, about and projects */}
       
      <NavBar />

      {/* Home section displaying a user's name, city, and favorite color */}
      <Home username={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
      <ProjectList projects={user.projects} />
    </div>
  );
}

export default App;