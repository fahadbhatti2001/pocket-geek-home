import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="w-full py-6 px-8 bg-primary-1 mb-2">
        <div className="w-full flex justify-between items-center">
          <img src="/images/assurant-footer-logo.png" alt="" className="" />
          <div className="flex items-center gap-6">
            <img src="/images/ssl-logo.jpg" alt="" className="" />
            <img src="/images/pci-logo.jpg" alt="" className="" />
          </div>
        </div>
        <div className="w-full flex md:flex-row flex-col-reverse justify-between items-center text-white mt-4 gap-4">
          <p className="text-xs font-medium">
            © 2022 Assurant, Inc. All rights reserved.
          </p>
          <div className="text-sm flex justify-center md:gap-6 gap-2">
            <a href="" className="underline">Support Details</a>
            <a href="" className="underline">Privacy Policy</a>
            <a href="" className="underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </>
  )
}
