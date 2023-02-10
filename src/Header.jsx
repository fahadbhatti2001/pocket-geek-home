import React from 'react'

export default function Header() {
  return (
    <nav className="px-6 py-4 border-4 border-t-0 border-[#8D34FF]">
        <div className="w-full flex justify-between items-center">
            <img src="/images/pgh-logo.svg" className="" />
            <div className="md:flex hidden items-center gap-4">
              <div className="flex justify-center gap-12">
                  <p className="font-medium text-gray-500">Home</p>
                  <p className="font-medium text-gray-500">Account</p>
                  <p className="font-medium text-gray-500">My Device</p>
                  <p className="font-medium text-gray-500">Tech Services</p>
                  <p className="font-medium text-primary-1">File a Claim</p>
              </div>
              <span className="h-8 w-px bg-gray-300"></span>
            </div>
        </div>
    </nav>
  )
}
