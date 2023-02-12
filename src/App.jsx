import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home, Claim } from "@/Components"

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/claim" element={<Claim/>} />
      </Routes>
    </>
  )
}
