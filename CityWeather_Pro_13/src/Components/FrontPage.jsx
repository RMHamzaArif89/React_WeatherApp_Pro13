import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import axios from 'axios'
import './frontPage.css'
function FrontPage() {
    let [val, setVal] = useState('')
    let [city, setCity] = useState('faisalabad')
    let [data, setData] = useState(null)
    // let [cName, setCityName] = useState('')
    // let [Humidity, setHumidity] = useState('')
    // let [temprature, setTemprature] = useState('')
    // let [windSpeed, setWindSpeed] = useState()




  






    let searchFunc=()=>{
        setCity(val)
    }

// console.log(data)



    useEffect(() => {

        let FetchApi = async () => {
            let apiKey = "7ec3a998927ddf63c5954a9b67cbf00a";
            let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
    
            const res = await axios.get(apiUrl + city + `&appid=${apiKey}`)
            setData(res.data)
    
          
        }

        FetchApi()
        

    }, [city,val])
    return (
        <>
            <div className='front-container'>

                <div className="heading">
                    <div className="heading-text">
                        Check Weather
                    </div>
                </div>
                <div className="con">
                    <div className="input">
                        <input type="text " className="inp" title="text" value={val} placeholder="Enter City Name" onChange={(e) => { setVal(e.target.value) }} />
                        <i className="search"><IoSearch onClick={searchFunc}/></i>
                        <div className="inp-text"></div>

                    </div>


               {data?<>
               <div className="tempreture">
                        <div className="img"><img className={''} src="" alt="" /></div>



                        <div className="tem">{data.main.temp}C</div>
                        <div className="c-name">{data.name}</div>



                        <div className="det">
                            <div className="humadity"><img className="data" src="/images/humidity.png" alt="" />
                                <div className="text">
                                    <div className="percentage">{data.main.humidity}</div>
                                    <div className="text">Humidity</div>
                                </div>
                            </div>

                        <div className="w-speed"><img className="data" src="/images/wind.png" alt="" />
                           <div className="text">
                           <div className="speed">{data.wind.speed}km/h</div>
                            <div className="text">Wind Speed</div>
                           </div>
                        </div> 
                        </div>
                    </div>
               </>:'data not found invalid city'}
                </div>
            </div>
            <div />
            <div />
        </>
    )
}

export default FrontPage
