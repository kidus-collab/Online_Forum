import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import {
  Post,
  Register,
  Login,
  Profile,
  Home,
  EmailRegister,
} from "./Pages/export";
import { threads } from "./Models/Thread";

//import { JsxElement } from 'typescript';

function App() {
  //const renderHome = (props: any) => <Home {...props} />;
  return (
    <Suspense fallback={<div>Loading.....</div>}>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/categorythreads/:id`} element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/emailregister" element={<EmailRegister />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Suspense>
  );
}

export default App;
