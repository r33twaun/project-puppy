
const SinglePuppy = ({singlePupInfo, setShowPupInfo}) => {
    return (
        <>
        <h1>Puppy Information</h1>
        <h2>{singlePupInfo.name}</h2>
        <p>If you want to place your bets the ID# is {singlePupInfo.id}.
        Their breed is {singlePupInfo.breed}. Their status at the moment is on the {singlePupInfo.status}.</p>
        <button onClick={()=>{setShowPupInfo(false)}}>Return</button>
        </>
    )
   
}

export default SinglePuppy