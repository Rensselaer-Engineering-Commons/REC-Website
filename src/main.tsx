import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Root, Verified } from "./templates/templates.ts";

import { Home, About, Contact, Login, Profile, Projects, Students, Workshops, Error } from "./pages/pages.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' errorElement={<Error />} element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/verified" errorElement={<Error />} element={<Verified />}>
          <Route path="students" element={<Students />} />
          <Route path="workshops" element={<Workshops />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode >,
)
