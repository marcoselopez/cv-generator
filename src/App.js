import { useState } from "react";
import AuthContext from "./components/auth/AuthContext";
import Router from "./routes/Router";


function App() {

  const [errors, setErrors] = useState({});
  const [curriculum, setCurriculum] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    profession: "",
    location: "",
    phone: "",
    email: "",
    address: "",
    description: "",
    github: "",
    linkedin: "",
    portfolio: "",
    educations: [],
    education: {        
      educationDegree: "",
      institutionName: "",
      educationStartingDate: "",
      educationEndingDate: ""
    },
    experiences: [],
    experience: {
      experiencePosition: "",
      companyName: "",
      jobStartingDate: "",
      jobEndingDate: "",
      jobDescription: ""
    },
    skills: ""
  });

  return (
    <AuthContext.Provider value={{
      errors,
      setErrors,
      curriculum,
      setCurriculum
    }}>
      <div className="App">
        <Router />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
