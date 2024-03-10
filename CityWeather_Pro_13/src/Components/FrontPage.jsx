import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import axios from 'axios'
import './frontPage.css'
function FrontPage() {
    let[val,setVal]=useState()
    let[data,setData]=useState()
    

    let FetchApi=async()=>{
       let apiKey = "7ec3a998927ddf63c5954a9b67cbf00a";
        let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
        let city='faisalabad'
        const res= await axios.get(apiUrl + city + `&appid=${apiKey}`)
        setData(res.data)

    }
    useEffect(()=>{
       FetchApi()
    },[])
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
                        <input type="text " className="inp" title="text" value={val} placeholder="Enter City Name" onChange={()=>{setVal(val)}} />
                        <i className="search"><IoSearch onClick={searchFunc}/></i>
                        <div className="inp-text"></div>

                    </div>


                    <div className="tempreture">
                        <div className="img"><img className="img-icon" src="" alt="" /></div>



                        <div className="tem"></div>
                        <div className="c-name"></div>



                        <div className="det">
                            <div className="humadity"><img className="data" src="/images/humidity.png" alt="" /></div>
                            <div className="percentage"></div>
                            <div className="text">Humidity</div>
                        </div>
                        <div className="w-speed"><img className="data" src="/images/wind.png" alt="" /></div>
                        <div className="speed"></div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
            <div />
            <div />
        </>
    )
}

export default FrontPage
