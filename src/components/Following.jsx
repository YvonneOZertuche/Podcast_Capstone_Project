import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Update from './UpdateFollowing'

const Following = () => {
  const [followedPodcast, setFollowedPodcast] = useState([])
  const [triggerRefresh, setTriggerRefresh] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)
  const [podcastId, setPodcastId] = useState('')

  useEffect(() => {
    const followPodcast = async () => {
      try {
        let response = await axios.get('api/v1/following', {
          headers: { authorization: `bearer ${localStorage.token}` }
        })
        // let result = await response.json()
        setFollowedPodcast(response.data)
        // console.log(followedPodcast)
      } catch (error) {
        console.log(error)
      }
    }
    followPodcast()
  }, [triggerRefresh])

  console.log(followedPodcast)

  const deletePodcast = id => {
    axios.delete(`api/v1/following/${id}`)
    setTriggerRefresh(!triggerRefresh)
    console.log(id)
  }

  const handleUpdate = id => {
    setPodcastId(id)
    console.log(id)
    console.log(podcastId)
    setIsUpdate(true)
  }
  return (
    <>
      {isUpdate ? <Update id={podcastId} /> : ''}

      <h1 className='text-red-700 font-sans mt-3'>Podcasts You're Following</h1>
        {!followedPodcast ? (
          <di>
          <h1>Not following any podcasts.</h1>
          </di>
        ) : (
          
          followedPodcast.map(podcastObj => {
            return (
              <>
                 <div className='m-10 ml-10  gap-4 columns-2 border-double border-2 border-red-700 border-spacing-px justify-center'>
                      <img key={podcastObj.id} src={podcastObj.image} alt='' className='m-y-0 border-2 border-red-500'/>
                      <figure>
                        <figcaption>{podcastObj.podcastName}:</figcaption>
                        <audio controls src={podcastObj.audioLink}></audio>
                      </figure>
                      <br />
                      <br />
                      <button
                        className='active:bg-sky-700 rounded ml-3 pl-3 justify-center font-sans bg-red-600 py-2 px-5  text-white'
                        onClick={() => deletePodcast(podcastObj.id)}
                      >
                        Delete
                      </button>{' '}
                      <button
                        className='rounded ml-3 pl-3 justify-center font-sans bg-red-600 py-2 px-5  text-white'
                        onClick={() => handleUpdate(podcastObj.id)}
                      >
                        Add Notes
                      </button>
                      <div>{podcastObj.notes}</div>
                 </div>
                 {isUpdate ? <Update id={podcastObj.id} /> : ''}

              </>
            )
          })
        )}
      
    </>
  )
}

export default Following
