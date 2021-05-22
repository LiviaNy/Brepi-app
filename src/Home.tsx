import {useState, useEffect} from "react"

export interface HomeProps {
 
}
 
const Home: React.FC<HomeProps> =() => {

useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?page=3&per_page=6")
    .then(res => res.json())
    .then(data => {
        const beerArray:any = []
        const beerNames:any=[]
        const beerData:any =[]
        for(let i:number = 0; i < data.length; i++) {
            beerArray.push(data[i].image_url)
            beerNames.push(data[i].name)
            beerData.push(data[i].description)
        }
        
        setBeers(beerArray)
        setBeerNames(beerNames)
        setBeerData(beerData)
    })
},[]) 

    const [beers, setBeers] = useState([])
    const [beerNames, setBeerNames] = useState([])
    const [beerData, setBeerData] = useState([])
const handleClick = () => {

    console.log("Clicked")
}    
return ( 
    <div className="home">
        <div className="images" onClick={handleClick}>
            <div className="beer">
            <img src={beers[0]} alt="" />
            <p>{beerNames[0]}</p>
            </div>
            <div className="beer">
            <img src={beers[1]} alt="" />
            <p>{beerNames[1]}</p>
            </div>
            <div className="beer">
            <img src={beers[2]} alt="" />
            <p>{beerNames[2]}</p>
            </div>
            <div className="beer">
            <img src={beers[3]} alt="" />
            <p>{beerNames[3]}</p>
            </div>
            <div className="beer">
            <img src={beers[4]} alt="" />
            <p>{beerNames[4]}</p>
            </div>
            <div className="beer">
            <img src={beers[5]} alt="" />
            <p>{beerNames[5]}</p>
            </div>
        </div>
    </div>
     );
}
 
export default Home