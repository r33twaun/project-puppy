import { useEffect, useState } from "react"

const PuppyDetails = () => {
    const [playas, setPlayas] = useState([])
    useEffect(() => {
        const getPuppyDetails = async () => {
            try {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players/`)
                const results = await response.json()
                const playas = results.data.players
                setPlayas(playas)
                console.log(playas)
            }
            catch (error) {
                console.log(error)
            }
        }; getPuppyDetails();
    }, [])
    return (
        <>
        <div className="flexwrap">
            {playas.map((pup)=>{
                return <div className="pupinfo">
                    <img src={pup.imageUrl} alt="picture of a puppy"/> 
                    <h2 key={pup.name}>{pup.name}</h2>
                </div>
            })}
        </div>
        </>
    )
}

export default PuppyDetails