import React from 'react'

export default function Modal () {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <>
      <br />
      <button
        className='rounded ml-3 pl-3 justify-center font-sans bg-sky-600 py-2 px-5  text-white shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
        type='button'
        onClick={() => setShowModal(true)}
      >
        Notes
      </button>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start  p-5 border-b border-solid border-slate-200 rounded-t'>
                  <h3 className='text-3xl text-sky-800 font-bold'>Notes</h3>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={() => setShowModal(false)}
                  >
                    <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'></span>
                  </button>
                </div>
                <div>
                  {/* <label
                    for='message'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
                  >
                    Your message
                  </label> */}
                  <textarea
                    id='message'
                    rows='4'
                    class='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder=""
                  ></textarea>

                  {/* <p class='mt-5'>
                    This textarea bar component is part of a larger, open-source
                    library of Tailwind CSS components. Learn more by going to
                    the official{' '}
                    <a
                      class='text-blue-600 hover:underline'
                      href='#'
                      target='_blank'
                    >
                      Flowbite Documentation
                    </a>
                    .
                  </p> */}
                  <script src='https://unpkg.com/flowbite@1.4.0/dist/flowbite.js'></script>
                </div>
                <div className='relative p-6 flex-auto'>
                  <p className='my-4 text-slate-500 text-lg leading-relaxed'></p>
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                  <button
                    className='text-sky-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className='bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  )
}
