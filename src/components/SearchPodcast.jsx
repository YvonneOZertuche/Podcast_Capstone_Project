import React, { useState } from 'react'
import axios from 'axios'

const { Client } = require('podcast-api')

const SearchPodcast = () => {
  const [searchInput, setSearchInput] = useState()
  const [searchResults, setSearchResults] = useState([])

  // const dispatch = useDispatch() //initializing hook

  const saveToFollowing = podcastObj => {
    let newPodcast = {
      episodeName: podcastObj.podcast.title_original,
      podcastName: podcastObj.podcast.title_original,
      image: podcastObj.image,
      audioLink: podcastObj.audio,
      wantToFollow: true,
      listenedTo: false,
      notes: podcastObj.description_original
    }
    axios.post('/api/v1/following/', newPodcast, {
      headers: { authorization: `bearer ${localStorage.token}` }
    })
    console.log(newPodcast)
    // dispatch(addToFollowing(podcastObj)) //lowercase -> action   CAP -> type
  }
  const saveToListened = podcastObj => {
    let newPodcast = {
      episodeName: podcastObj.podcast.title_original,
      podcastName: podcastObj.podcast.title_original,
      image: podcastObj.image,
      audioLink: podcastObj.audio,
      wantToFollow: true,
      listenedTo: false,
      notes: podcastObj.description_original
    }
    axios.post('/api/v1/listened', newPodcast, {
      headers: { authorization: `bearer ${localStorage.token}` }
    })
    console.log(newPodcast)
  }

  const handleInput = () => {
    const client = Client({ apiKey: '5631722333164e85ba9baaa0c517ca49' })

    client
      .search({
        q: searchInput,
        sort_by_date: 0,
        type: 'episode',
        len_min: 3,
        len_max:60
      })
      .then(response => {
        // Get response json data here
        console.log(response.data)
        setSearchResults(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
    console.log(searchInput)
  }

  return (
    <>
      <div className=' Input mx-auto relative'>
        <div className='mt-20 grid grid-cols-1'>
          <div className='place-self-center'>
            <input
              className='text-red-600 italic w-80 text-center font-serif rounded'
              onChange={e => setSearchInput(e.target.value)}
              type='text'
              placeholder='Search for a Podcast Episode'
            />
          </div>
          {''}
          <div className='place-self-center p-0'>
            <button
              className='focus:outline-none focus:ring focus:ring-yellow-900 m-5 mb-10 rounded border font-serif border-red-600 bg-red-600 py-2 px-5 font-bold text-white hover:bg-red-800'
              onClick={handleInput}
              type='submit'
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {!searchResults ? (
        <div>
          <h1>Nothing to Display.</h1>
        </div>
      ) : (
        searchResults.map(podcastObj => {
          return (
            <>
              <div className='m-10 ml-10  gap-4 columns-2 border-double border-2 border-red-600 border-spacing-px self-center justify-center'>
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
                    className='focus:outline-none focus:ring focus:ring-yellow-900 m-20 ml-3 pl-3 justify-center font-serif border-red-700 bg-red-600 py-2 px-5 font-bold text-white'
                    onClick={() => saveToFollowing(podcastObj)} >
                    Save to Following
                  </button>
                </button>

                
                  <button type='button' >
                    <button 
                    className='focus:outline-none focus:ring focus:ring-yellow-900 ml-3 pl-3 justify-center font-serif border-red-700 bg-red-600 py-2 px-5 font-bold text-white'
                    onClick={() => saveToListened(podcastObj)}>
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
export default SearchPodcast
