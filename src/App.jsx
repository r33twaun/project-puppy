import { useState } from 'react'
import './App.css'
import PuppyDetails from './comp/PuppyDetails'
import SinglePuppy from './comp/SinglePuppy'

function App() {
  const [showPupInfo, setShowPupInfo] = useState(false)
  const [singlePupInfo, setSinglePupInfo] = useState(``)


  return (
    <>
      {
        showPupInfo ? (
          <SinglePuppy
            singlePupInfo={singlePupInfo}
            setShowPupInfo={setShowPupInfo}
          />) : (
          <PuppyDetails
            setShowPupInfo={setShowPupInfo}
            setSinglePupInfo={setSinglePupInfo} />)
      }
    </>
  )
}

export default App
