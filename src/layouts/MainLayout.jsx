// import { Outlet } from "react-router-dom";
// import Navbar from "../../pages/shared/Navbar";
// import Footer from "../../pages/shared/Footer";

// function MainLayout() {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </>
//   );
// }

// export default MainLayout;


import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../pages/shared/Navbar";
import Footer from "../../pages/shared/Footer";

function MainLayout() {
  // Define the userType state
  const [userType, setUserType] = useState("user"); // Default to "user"

  // Function to toggle userType for demonstration purposes
  const toggleUserType = () => {
    setUserType((prevType) => (prevType === "user" ? "provider" : "user"));
  };

  return (
    <>
      <button onClick={toggleUserType}>
        User Type (Current: {userType})
      </button>
      <Navbar userType={userType} />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;