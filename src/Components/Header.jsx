import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Header = (props) => {

  const { headerData } = props

  let [ headerLinks, setHeaderLinks ] = useState(headerData);

  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-md bg-white relative flex items-center w-full justify-between px-6 py-4">
        <div className="px-6 w-full flex flex-wrap items-center justify-between">
          <img src="/images/pgh-logo.svg" className="" />
          <div className="flex items-center">
            <button className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentY" aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
                <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" ></path>
              </svg>
            </button>
          </div>
          <div className="navbar-collapse collapse grow items-center gap-4" id="navbarSupportedContentY">
            <div className="navbar-nav ml-auto gap-8 lg:flex lg:flex-row justify-end">
              {
                headerLinks.map((e, i) => (
                  <div key={i} className="nav-item">
                    <Link to={e.path} className={"font-medium text-gray-500 nav-link block py-2 " + e.cstStyle}>{e.name}</Link>
                  </div>
                ))
              }
            </div>
            <div className="lg:flex items-center gap-4 hidden">
              <span className="h-8 w-px bg-gray-300"></span>
              <img src="/images/drop.png" className="w-10" />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
