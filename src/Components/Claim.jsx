import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPen, faLocationDot, faInfoCircle, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import {Header, Footer} from '@/Components'

const headerLinks = [

  {
    name: "FAQs", path: "/", cstStyle: "text-primary-1"
  },
  {
    name: "Contact Us ", path: "/", cstStyle: "text-primary-1"
  },
  {
    name: "File a Claim", path: "/claim", cstStyle: "text-primary-1"
  },
]

export const Claim = () => {
  
  let [ step, setStep ] = useState(1)

  return (
    <>
      <Header headerData={headerLinks} />
        <div className="bg-primary-1 py-6 xl:px-32 lg:px-16 md:px-8 sm:px-6 px-4">
            <h1 className="text-2xl font-medium text-white">
                File a Claim
            </h1>
        </div>
        <div className="flex justify-center xl:px-40 lg:px-20 md:px-10 sm:px-6 px-4 bg-primary-4">
          <div className="container py-8 md:px-12 ">
            <div className="grid grid-cols-12 gap-6 w-full">
              <div className="md:col-span-8 col-span-12 md:order-1 order-2 bg-white rounded shadow">
                {
                  step == 1 || step == 2 || step == 3 || step == 4 ? 
                  <div className="p-4 bg-gray-50 rounded-t shadow">
                    <h1 className="font-bold text-gray-700">
                      Incident Information
                    </h1>
                    <div className="flex justify-between items-center my-2 w-full">
                      <p className="text-xs font-medium text-gray-500">
                        Step {step} of 4
                      </p>
                      <p className="text-xs font-medium text-gray-500">
                        Next: Service Options
                      </p>
                    </div>
                    <div className="flex justify-between gap-0 pb-4">
                      <div className="flex">
                        <div className={ step == 1 ? "w-7 h-7 border-2 border-primary-1 rounded-full flex justify-center items-center" : "rounded-full flex justify-center items-center"}>
                            <span className="w-5 h-5 rounded-full bg-gray-400">
                              <div className={ 
                                step == 1 ? "h-full w-full flex justify-center items-center bg-white border-2 border-gray-400 rounded-full"
                                : "h-full w-full flex justify-center items-center bg-green-600 border-2 border-green-600 rounded-full"
                                }>
                                <FontAwesomeIcon icon={faCheck} className="text-white" />
                              </div>
                            </span>
                        </div>
                      </div>
                      <div className="flex w-full">
                        <div className="w-full flex items-center">
                            <div className="w-full h-1 bg-gray-200"></div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className={ step == 2 ? "w-7 h-7 border-2 border-primary-1 rounded-full flex justify-center items-center" : "rounded-full flex justify-center items-center"}>
                            <span className="w-5 h-5 rounded-full bg-gray-400">
                              <div className={ 
                                step == 1 ? "h-full w-full flex justify-center items-center bg-white border-2 border-gray-400 rounded-full" 
                                : step == 2 ? "h-full w-full flex justify-center items-center bg-white border-2 border-gray-400 rounded-full"
                                : "h-full w-full flex justify-center items-center bg-green-600 border-2 border-green-600 rounded-full"
                                }>
                                <FontAwesomeIcon icon={faCheck} className="text-white" />
                              </div>
                            </span>
                        </div>
                      </div>
                      <div className="flex w-full">
                        <div className="w-full flex items-center">
                            <div className="w-full h-1 bg-gray-200"></div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className={ step == 3 ? "w-7 h-7 border-2 border-primary-1 rounded-full flex justify-center items-center" : "rounded-full flex justify-center items-center"}>
                            <span className="w-5 h-5 rounded-full bg-gray-400">
                              <div className={ 
                                step == 1 ? "h-full w-full flex justify-center items-center bg-white border-2 border-gray-400 rounded-full" 
                                : step == 2 ? "h-full w-full flex justify-center items-center bg-white border-2 border-gray-400 rounded-full"
                                : step == 3 ? "h-full w-full flex justify-center items-center bg-white border-2 border-gray-400 rounded-full"
                                : "h-full w-full flex justify-center items-center bg-green-600 border-2 border-green-600 rounded-full"
                                }>
                                <FontAwesomeIcon icon={faCheck} className="text-white" />
                              </div>
                            </span>
                        </div>
                      </div>
                      <div className="flex w-full">
                        <div className="w-full flex items-center">
                            <div className="w-full h-1 bg-gray-200"></div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className={ step == 4 ? "w-7 h-7 border-2 border-primary-1 rounded-full flex justify-center items-center" : "rounded-full flex justify-center items-center"}>
                            <span className="w-5 h-5 rounded-full bg-gray-400">
                              <div className={ 
                                step == 1 ? "h-full w-full flex justify-center items-center bg-white border-2 border-gray-400 rounded-full" 
                                : step == 2 ? "h-full w-full flex justify-center items-center bg-white border-2 border-gray-400 rounded-full"
                                : step == 3 ? "h-full w-full flex justify-center items-center bg-white border-2 border-gray-400 rounded-full"
                                : step == 4 ? "h-full w-full flex justify-center items-center bg-white border-2 border-gray-400 rounded-full"
                                : "h-full w-full flex justify-center items-center bg-green-600 border-2 border-green-600 rounded-full"
                                }>
                                <FontAwesomeIcon icon={faCheck} className="text-white" />
                              </div>
                            </span>
                        </div>
                      </div>                
                    </div>
                  </div>
                  : null
                }
                {
                  step == 1 ?
                  <div className="p-4">
                    <h1 className="text-sm mb-4 font-bold text-gray-700">
                      Please tell us what happened
                    </h1>
                    <div className="flex flex-col gap-1 mb-4">
                      <label htmlFor="indidentDate" className="text-xs font-bold text-gray-400">Date of indident</label>
                      <input className="md:w-2/3 w-full px-2 p-1.5 rounded border-2 border-gray-400 text-gray-500 font-medium" id="indidentDate" type="date" />
                    </div>
                    <div className="flex flex-col gap-1 mb-4">
                      <label htmlFor="indidentDate" className="text-xs font-bold text-gray-400">Describe the issue or reason for your request</label>
                      <textarea className="md:w-2/3 w-full h-24 resize-none overflow-auto px-2 p-1.5 rounded border-2 border-gray-400 text-gray-500 font-medium" id="indidentDate" type="date" />
                    </div>
                    <div className="flex flex-col gap-1 mb-4">
                      <label className="text-xs font-bold text-gray-400">Select the reason for your claim/request</label>
                      <select className="md:w-2/3 w-full px-2 p-1.5 rounded border-2 border-gray-400 text-gray-500 font-medium" id="">
                        <option value="" hidden>Select Reason</option>
                        <option value="reason1">Reason 1</option>
                        <option value="reason2">Reason 2</option>
                        <option value="reason3">Reason 3</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-2 my-6">
                      <input type="checkbox" className="w-4 h-4 accent-primary-1" id="" />
                      <label className="text-xs font-medium text-gray-500">I agree to the <span className="text-primary-1">Terms of Use</span> and acknowledge that I have reviewed the Fraud Notice</label>
                    </div>
                    <div className="flex justify-between w-full mb-2">
                      <button className="py-1.5 px-5 border-2 border-primary-1 text-sm font-bold text-primary-1 bg-blue-50 rounded" type="button" >Back</button>
                      <button onClick={() => setStep(step + 1)} className="py-1.5 px-5 border-2 border-primary-1 text-sm font-bold text-white bg-primary-1 rounded" type="button" >Next</button>
                    </div>
                  </div>
                  : step == 2 ? 
                  <div className="p-4">
                    <h1 className="text-sm mb-4 font-bold text-gray-700">
                      Select how you would like your product to be serviced
                    </h1>
                    <div className="flex md:flex-row flex-col gap-4 p-4 bg-blue-50 rounded mb-6">
                      <div className="">
                        <FontAwesomeIcon icon={faLocationDot} className="text-gray-400 w-8 h-8" />
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <p className="text-xs">
                          Service option(s) are for your prouct located at:
                        </p>
                        <p className="text-xs py-1 font-bold text-gray-600">
                          1155 Ponce Deleon Long address name Ave. Atlanta GA, 12345
                        </p>
                        <span className="h-px w-full bg-gray-300"></span>
                        <p className="text-xs py-2">
                          Not your product location? <a href="#" className="text-primary-1 font-medium underline">Enter a new address</a>
                        </p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
                      <button className="text-left col-span-1 flex flex-col gap-2 rounded-lg border-2 shadow focus:border-primary-1 p-4">
                        <div className="flex items-center gap-2">
                          <img src="/images/E-reader.png" className="w-10 h-10" />
                          <h1 className="text-sm font-bold">
                            Mail In Repair
                          </h1>
                        </div>
                        <p className="text-xs font-medium w-full text-gray-500 h-16">
                          If your claim is approved we will send you a shipping label so you can send us your defective device for repair
                        </p>
                        <div className="flex justify-between w-full">
                          <p className="text-xs font-bold text-gray-600">Deductible</p>
                          <p className="text-xs font-bold text-gray-600">$89.00</p>
                        </div>
                      </button>
                      <button className="text-left col-span-1 flex flex-col gap-2 rounded-lg border-2 shadow focus:border-primary-1 p-4">
                        <div className="flex items-center gap-2">
                          <img src="/images/e-readers.png" className="w-10 h-10" />
                          <h1 className="text-sm font-bold">
                            In Store Repair
                          </h1>
                        </div>
                        <p className="text-xs font-medium w-full text-gray-500 h-16">
                          You will be given a choice of which repair facility to take your device
                        </p>
                        <div className="flex justify-between w-full">
                          <p className="text-xs font-bold text-gray-600">Deductible</p>
                          <p className="text-xs font-bold text-gray-600">$89.00</p>
                        </div>
                      </button>
                      <button className="text-left col-span-1 flex flex-col gap-2 rounded-lg border-2 shadow focus:border-primary-1 p-4">
                        <div className="flex items-center gap-2">
                          <img src="/images/Smart-speakers.png" className="w-10 h-10" />
                          <h1 className="text-sm font-bold">
                            Refurbishment
                          </h1>
                        </div>
                        <p className="text-xs font-medium w-full text-gray-500 h-16">
                          We'll reimburse you quickly and conveniently
                        </p>
                      </button>
                    </div>
                    <div className="flex justify-between w-full mb-2">
                      <button onClick={() => setStep(step - 1)} className="py-1.5 px-5 border-2 border-primary-1 text-sm font-bold text-primary-1 bg-blue-50 rounded" type="button" >Back</button>
                      <button onClick={() => setStep(step + 1)} className="py-1.5 px-5 border-2 border-primary-1 text-sm font-bold text-white bg-primary-1 rounded" type="button" >Next</button>
                    </div>
                  </div>
                  : step == 3 ? 
                  <div className="p-4">
                    <h1 className="text-sm mb-4 font-bold text-gray-700">
                      Mail in Repair
                    </h1>
                    <p className="text-sm text-gray-600">
                      Once your device is repaired it will be shipped to the address provided below via <span className="text-primary-1">standard shipping</span> (1 business day)
                    </p>
                    <div className="flex items-center gap-4 my-4">
                      <div className="flex items-center gap-1">
                        <input type="radio" name="address" className="accent-primary-1 w-4 h-4" />
                        <label className="text-sm" htmlFor="">Same as policy</label>
                      </div>
                      <div className="flex items-center gap-1">
                        <input type="radio" name="address" className="accent-primary-1 w-4 h-4" />
                        <label className="text-sm" htmlFor="">New Address</label>
                      </div>
                    </div>
                    <div className="mb-6">
                      <p className="text-sm font-bold text-gray-700">
                        Steve Smith
                      </p>
                      <p className="text-sm font-medium text-gray-500">
                        123 Main Street
                      </p>
                      <p className="text-sm font-medium text-gray-500">
                        Adanta, Georga 30031
                      </p>
                      <p className="text-sm font-medium text-gray-500">
                        United States
                      </p>
                      <p className="text-sm font-medium text-gray-500">
                        steve.smith@gmail.com
                      </p>
                    </div>
                    <div className="flex justify-between w-full mb-2">
                      <button onClick={() => setStep(step - 1)} className="py-1.5 px-5 border-2 border-primary-1 text-sm font-bold text-primary-1 bg-blue-50 rounded" type="button" >Back</button>
                      <button onClick={() => setStep(step + 1)} className="py-1.5 px-5 border-2 border-primary-1 text-sm font-bold text-white bg-primary-1 rounded" type="button" >Next</button>
                    </div>
                  </div>
                  : step == 4 ? 
                  <div className="p-4">
                      <div className="mb-4">
                        <div className="w-full">
                          <div className="flex justify-between items-center py-3">
                            <p className="text-sm font-bold text-gray-600">Claim Details</p>
                            <div className="flex items-center gap-1 text-primary-1">
                              <FontAwesomeIcon icon={faPen} className="text-xs" />
                              <p className="text-sm font-bold">Edit</p>
                            </div>
                          </div>
                          <hr /> 
                        </div>
                        <div className="w-full">
                          <div className="flex justify-between items-center py-3">
                            <p className="text-xs font-medium text-gray-500">Date of incident</p>
                            <p className="text-xs font-medium text-gray-500">12/15/2021</p>
                          </div>
                          <hr />
                        </div>
                        <div className="w-full">
                          <div className="flex justify-between items-center py-3">
                            <p className="text-xs font-medium text-gray-500">Reason for claim</p>
                            <p className="text-xs font-medium text-gray-500">Not functioning properly</p>
                          </div>
                          <hr />
                        </div>
                        <div className="w-full">
                          <div className="flex justify-between items-center py-3">
                            <p className="text-xs font-medium text-gray-500">Description</p>
                            <p className="text-xs font-medium text-gray-500">Loerm ipsum is typed here</p>
                          </div>
                          <hr />
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="w-full">
                          <div className="flex md:flex-row flex-col justify-between items-center py-2">
                            <p className="text-sm font-bold text-gray-600">Fulfillment information</p>
                            <p className="text-sm font-bold text-primary-1">Need a Different Repair Option</p>
                          </div>
                        </div>
                        <div className="w-full">
                          <div className="flex justify-between items-center py-3">
                            <p className="text-xs font-bold text-gray-500">Send To Us</p>
                          </div>
                          <hr />
                        </div>
                        <div className="w-full">
                          <div className="flex justify-between items-center py-3">
                            <p className="text-xs font-medium text-gray-500">Delivery Address</p>
                            <p className="text-xs font-medium text-gray-500">2 Cherry Road</p>
                          </div>
                          <hr />
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="w-full">
                          <div className="flex justify-between items-center py-3">
                            <p className="text-sm font-bold text-gray-600">Personal Information</p>
                            <div className="flex items-center gap-1 text-primary-1">
                              <FontAwesomeIcon icon={faPen} className="text-xs" />
                              <p className="text-sm font-bold">Edit</p>
                            </div>
                          </div>
                          <hr /> 
                        </div>
                        <div className="w-full">
                          <div className="flex justify-between items-center py-3">
                            <p className="text-xs font-medium text-gray-500">Full Name</p>
                            <p className="text-xs font-medium text-gray-500">Steve Smith</p>
                          </div>
                          <hr />
                        </div>
                        <div className="w-full">
                          <div className="flex justify-between items-center py-3">
                            <p className="text-xs font-medium text-gray-500">Address</p>
                            <p className="text-xs font-medium text-gray-500">123 Main Street</p>
                          </div>
                          <hr />
                        </div>
                        <div className="w-full">
                          <div className="flex justify-between items-center py-3">
                            <p className="text-xs font-medium text-gray-500">Email Address</p>
                            <p className="text-xs font-medium text-gray-500">steve.smith@gmail.com</p>
                          </div>
                          <hr />
                        </div>
                        <div className="w-full">
                          <div className="flex justify-between items-center py-3">
                            <p className="text-xs font-medium text-gray-500">Contact Number</p>
                            <p className="text-xs font-medium text-gray-500">(770) 5123-155</p>
                          </div>
                          <hr />
                        </div>
                      </div>
                    <div className="flex justify-between w-full mb-2">
                      <button onClick={() => setStep(step - 1)} className="py-1.5 px-5 border-2 border-primary-1 text-sm font-bold text-primary-1 bg-blue-50 rounded" type="button" >Back</button>
                      <button onClick={() => setStep(step + 1)} className="py-1.5 px-5 border-2 border-primary-1 text-sm font-bold text-white bg-primary-1 rounded" type="button" >Submit</button>
                    </div>
                  </div>
                  : <div className="p-4">
                      <h1 className="text-sm mb-4 font-bold text-gray-700">
                        Claim number: DX543271RD5
                      </h1>
                      <p className="text-sm font-medium text-gray-600">
                        Your claim has been submitted and we are just checking the last few details. If your claim is approved, we will send you a shipping label so you can send us your defective device for repair. <br /> <br /> We will be back in the touch within 1-2 working days with your claim decision in the meantime you can check the status of your claim on your dashboard
                      </p>
                      <div className="w-full">
                        <div className="flex items-center gap-2 py-2">
                          <p className="text-sm font-bold text-gray-600">Deductible Fee</p>
                          <FontAwesomeIcon icon={faCircleInfo} className="text-gray-300" />
                        </div>
                        <hr />
                      </div>
                      <div className="py-6">
                        <div className="flex justify-center gap-4">
                          <div className="flex">
                            <div className="rounded-full flex justify-center items-center">
                                <span className="w-5 h-5 rounded-full bg-gray-400">
                                  <div className="h-full w-full flex justify-center items-center bg-green-600 border-2 border-green-600 rounded-full">
                                    <FontAwesomeIcon icon={faCheck} className="text-white" />
                                  </div>
                                </span>
                            </div>
                          </div>
                          <h1 className="font-medium text-gray-700">
                            Thank you - your payment details have been confirmed
                          </h1>
                        </div>
                        <div className="flex justify-center my-4">
                          <img src="/images/payment.PNG" />
                        </div>
                        <p className="text-xs text-gray-600">
                          In that event you are unable to successfully submit your deductible payment <span className="text-primary-1 underline">please contact us</span>
                        </p>
                      </div>
                      <div className="mb-4">
                        <div className="w-full">
                          <div className="flex justify-between items-center py-3">
                            <p className="text-sm font-bold text-gray-600">Claim Details</p>
                          </div>
                          <hr /> 
                        </div>
                        <div className="w-full">
                          <div className="flex justify-between items-center py-3">
                            <p className="text-xs font-medium text-gray-500">Date of incident</p>
                            <p className="text-xs font-medium text-gray-500">12/15/2021</p>
                          </div>
                          <hr />
                        </div>
                        <div className="w-full">
                          <div className="flex justify-between items-center py-3">
                            <p className="text-xs font-medium text-gray-500">Reason for claim</p>
                            <p className="text-xs font-medium text-gray-500">My phone is not functioning properly</p>
                          </div>
                          <hr />
                        </div>
                        <div className="w-full">
                          <div className="flex justify-between items-center py-3">
                            <p className="text-xs font-medium text-gray-500">Description</p>
                            <p className="text-xs font-medium text-gray-500">Loerm ipsum is typed here</p>
                          </div>
                          <hr />
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="w-full">
                          <div className="flex md:flex-row flex-col justify-between items-center py-2">
                            <p className="text-sm font-bold text-gray-600">Fulfillment information</p>
                            <p className="text-sm font-bold text-primary-1">Need a Different Repair Option</p>
                          </div>
                        </div>
                        <div className="w-full">
                          <div className="flex justify-between items-center py-3">
                            <p className="text-xs font-bold text-gray-500">Send To Us</p>
                          </div>
                          <hr />
                        </div>
                        <div className="w-full">
                          <div className="flex justify-between items-center py-3">
                            <p className="text-xs font-medium text-gray-500">Delivery Address</p>
                            <p className="text-xs font-medium text-gray-500">2 Cherry Road</p>
                          </div>
                          <hr />
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="w-full">
                          <div className="flex justify-between items-center py-3">
                            <p className="text-sm font-bold text-gray-600">Personal Information</p>
                            <div className="flex items-center gap-1 text-primary-1">
                              <FontAwesomeIcon icon={faPen} className="text-xs" />
                              <p className="text-sm font-bold">Edit</p>
                            </div>
                          </div>
                          <hr /> 
                        </div>
                        <div className="w-full">
                          <div className="flex justify-between items-center py-3">
                            <p className="text-xs font-medium text-gray-500">Full Name</p>
                            <p className="text-xs font-medium text-gray-500">Steve Smith</p>
                          </div>
                          <hr />
                        </div>
                        <div className="w-full">
                          <div className="flex justify-between items-center py-3">
                            <p className="text-xs font-medium text-gray-500">Address</p>
                            <p className="text-xs font-medium text-gray-500">123 Main Street</p>
                          </div>
                          <hr />
                        </div>
                        <div className="w-full">
                          <div className="flex justify-between items-center py-3">
                            <p className="text-xs font-medium text-gray-500">Email Address</p>
                            <p className="text-xs font-medium text-gray-500">steve.smith@gmail.com</p>
                          </div>
                          <hr />
                        </div>
                        <div className="w-full">
                          <div className="flex justify-between items-center py-3">
                            <p className="text-xs font-medium text-gray-500">Contact Number</p>
                            <p className="text-xs font-medium text-gray-500">(770) 5123-155</p>
                          </div>
                          <hr />
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="w-full">
                          <div className="flex justify-between items-center py-2">
                            <p className="text-sm font-bold text-gray-600">Claim History</p>
                          </div>
                        </div>
                        <div className="w-full">
                          <div className="flex gap-4 py-3">
                            <div className="rounded-full flex justify-center">
                                <span className="w-4 h-4 rounded-full bg-gray-400">
                                  <div className="h-full w-full flex justify-center items-center bg-primary-1 border-prbg-primary-1 rounded-full">
                                    <FontAwesomeIcon icon={faCheck} className="text-white" />
                                  </div>
                                </span>
                            </div>
                            <div className="">
                              <p className="text-xs font-bold text-gray-500 mb-1">Claim Submitted</p>
                              <p className="text-xs font-medium text-gray-500">Date Reported: August end, 2019</p>
                            </div>
                          </div>
                          <hr />
                        </div>
                      </div>
                      <div className="mb-4">
                        <button className="mx-4 px-6 py-2 text-sm font-bold text-white bg-primary-1 rounded" type="button">
                          Go to Claim Dashboard
                        </button>
                      </div>
                  </div>
                }
              </div>
              <div className="md:col-span-4 col-span-12 md:order-2 order-1">
                <div className="p-4 bg-white rounded shadow">
                  <div className="flex items-center gap-2 px-2 mb-2">
                    <img src="/images/shopping.png" className="w-14 h-14" />
                    <div className="">
                      <h1 className="font-bold">Diane's Macbook</h1>
                      <h1 className="text-gray-600 font-medium">MacBook Pro</h1>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between items-center py-3">
                      <p className="text-xs font-medium text-gray-500">Policy Number</p>
                      <p className="text-xs font-bold text-gray-600">0973-041-0588-100214</p>
                    </div>
                    <hr /> 
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between items-center py-3">
                      <p className="text-xs font-medium text-gray-500">Serial Number</p>
                      <p className="text-xs font-bold text-gray-600">983837210377777365</p>
                    </div>
                    <hr /> 
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between items-center py-3">
                      <p className="text-xs font-medium text-gray-500">Policy Start Date</p>
                      <p className="text-xs font-bold text-gray-600">08/03/2019</p>
                    </div>
                    <hr /> 
                  </div>
                  <div className="w-full mb-2">
                    <div className="flex justify-between items-center py-3">
                      <p className="text-xs font-medium text-gray-500">Policy End Date</p>
                      <p className="text-xs font-bold text-gray-600">08/03/2023</p>
                    </div>
                    <hr /> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
    </>
  )
}

// w-7 h-7 border-2 border-black