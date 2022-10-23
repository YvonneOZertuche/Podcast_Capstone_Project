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
    <br  />
    <br  />
    <br  />
    <h1>Listened</h1>
      {!listenedPodcast ? (
        <div>No podcasts to display</div>

      ) : (
        listenedPodcast.map(podcastObj => {
          return (
            <>
            <div className="podcast changes">
              <img key={podcastObj.id} src={podcastObj.image} alt='' />;
              <figure>
                <figcaption>{podcastObj.podcastName}:</figcaption>
                <audio controls src={podcastObj.audioLink}></audio>
              </figure>
              <p>{podcastObj.notes}</p>
              <br  />
              <br  />
              <button
                className='font-serif px-4 py-2 text-sm text-white duration-150 bg-red-600 rounded-md hover:bg-red-700 active:shadow-l'
                onClick={() => deletePodcast(podcastObj.id)}>
                Delete
              </button>{' '}
              </div>
              <br  />
              <br  />
             
              <button
                onClick={() => updatePodcast(podcastObj.id)}
                className='font-serifpx-4 py-2 text-sm text-white duration-150 bg-red-600 rounded-md hover:bg-red-700 active:shadow-l'>
                Update
              </button>
              {isUpdate ? <Update id={podcastObj.id} /> : ''}
             
            </>
          )
        })
      )}
    </>
  )
}

export default Listened