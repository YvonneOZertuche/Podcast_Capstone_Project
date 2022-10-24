import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Update from '../components/UpdateListened'

const Listened = () => {
  const [listenedPodcast, setListenedPodcast] = useState([])
  const [triggerRefresh, setTriggerRefresh] = useState()
  const [isUpdate, setIsUpdate] = useState(false)
  const [podcastId, setPodcastId] = useState("")

  useEffect(() => {
    const heardPodcast = async () => {
      try {
        let response = await axios.get('api/v1/listened', {
          headers: { authorization: `bearer ${localStorage.token}` }
        })
        // let result = await response.json()
        setListenedPodcast(response.data)
        // console.log(listenedPodcast)
      } catch (error) {
        console.log(error)
      }
    }
    heardPodcast()
    //eslint-disable-next-line
  }, [triggerRefresh])

  console.log(listenedPodcast)

  const deletePodcast = id => {
    axios.delete(`api/v1/listened/${id}`)
    setTriggerRefresh(!triggerRefresh)
    console.log(id)
  }
  const updatePodcast = (id) => {
    setPodcastId(id)
    console.log(id)
    console.log(podcastId)
    setIsUpdate(true)
  }

  return (
    <>
    
    
    <h1 className='text-sky-700 font-sans mt-3'>Podcasts You've Listened To</h1>
      {!listenedPodcast ? (
        <div>No podcasts to display</div>

      ) : (
        listenedPodcast.map(podcastObj => {
          return (
            <>
            <div className='m-10 ml-10  gap-4 columns-2 border-double border-2 border-sky-600 border-spacing-px justify-center'>
              <img key={podcastObj.id} src={podcastObj.image} alt='' className='m-y-0 border-2 border-sky-500'/>
              <figure>
                <figcaption>{podcastObj.podcastName}:</figcaption>
                <audio controls src={podcastObj.audioLink}></audio>
              </figure>
              {/* <p>{podcastObj.notes}</p> */}
              <br  />
              <br  />
              <button
                className='rounded ml-3 pl-3 justify-center font-sans border-sky-700 bg-sky-600 py-2 px-5  text-white'
                onClick={() => deletePodcast(podcastObj.id)}>
                Delete
              </button>{' '}
              <button
                onClick={() => updatePodcast(podcastObj.id)}
                className='rounded ml-3 pl-3 justify-center font-sans border-sky-700 bg-sky-600 py-2 px-5  text-white'>
                Add Notes
              </button>
               </div>
              {isUpdate ? <Update id={podcastObj.id} /> : ''}
             
            </>
          )
        })
      )}
    </>
  )
}

export default Listened