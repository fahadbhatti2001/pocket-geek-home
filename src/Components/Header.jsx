import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Header = (props) => {

  const { headerData } = props

  let [ headerLinks, setHeaderLinks ] = useState(headerData);

  return (
    <nav className="px-6 py-4 border-4 border-t-0 border-primary-3">
        <div className="w-full flex justify-between items-center">
            <img src="/images/pgh-logo.svg" className="" />
            <div className="md:flex hidden items-center gap-4">
              <div className="flex justify-center gap-12">
                {
                  headerLinks.map((e, i) => (
                    <Link key={i} to={e.path} className={"font-medium text-gray-500 " + e.cstStyle}>{e.name}</Link>
                  ))
                }
              </div>
              <span className="h-8 w-px bg-gray-300"></span>
              <img src="/images/drop.png" className="w-10" />
            </div>
        </div>
    </nav>
  )
}
