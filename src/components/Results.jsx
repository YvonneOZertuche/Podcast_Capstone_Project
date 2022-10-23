import React  from 'react'


  const Results = () => {

  return (
    <>
      {/* <div className=' Input mx-auto relative'>
        <div className='mt-20 grid grid-cols-1'>
          <div className='place-self-center'>
            <input
              className='text-red-600 italic w-80 text-center font-sans rounded'
              onChange={e => setSearchInput(e.target.value)}
              type='text'
              placeholder='Search for a Podcast Episode'
            />
          </div>
          {''}
          <div className='place-self-center p-0'>
            <button
              className='focus:outline-none focus:ring focus:ring-white-900 m-5 mb-10 rounded border font-sans border-red-600 bg-red-600 py-2 px-5 font-bold text-white hover:bg-red-800'
              onClick={handleInput}
              type='submit'
            >
              Search
            </button>
          </div>
        </div>
      </div> */}

      {!searchResults ? (
        <div>
          <h1>Nothing to Display.</h1>
        </div>
      ) : (
        searchResults.map(podcastObj => {
          return (
            <>
              <div className='m-10 ml-10  gap-4 columns-2 border-double border-2 border-red-600 border-spacing-px   justify-center'>
                <img
                  className='m-y-0 border-2 border-red-600'
                  key={podcastObj.id}
                  src={podcastObj.image}
                  alt=''
                />
                {/* // className='mt-2.5 m-10 border grid-cols-2 grid-rows 2 gap-2' */}

                {/* <figure>
                  <figcaption>
                    {podcastObj.podcastName}:
                  </figcaption>
                  <audio controls src={podcastObj.audioLink}></audio>
                </figure> */}

                <button type='button'>
                  <button
                    className='rounded focus:outline-none focus:ring focus:ring-white-900 m-20 ml-3 pl-3 justify-center font-sans border-red-700 bg-red-600 py-2 px-5  text-white'
                    onClick={() => saveToFollowing(podcastObj)}
                  >
                    Save to Following
                  </button>
                </button>

                <button type='button'>
                  <button
                    className='roundedfocus:outline-none focus:ring focus:ring-white-900 ml-3 pl-3 justify-center font-sans border-red-700 bg-red-600 py-2 px-5  text-white'
                    onClick={() => saveToListened(podcastObj)}
                  >
                    Save to Listened
                  </button>
                </button>
              </div>
            </>
          )
        })
      )}
    </>
  )
}
export default Results

