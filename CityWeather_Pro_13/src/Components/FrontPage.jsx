import React from 'react'
import './frontPage.css'
function FrontPage() {
    return (
        <>
            <div className='front-container'>

                <div class="heading">
                    <div class="heading-text">
                        Check Weather
                    </div>
                </div>
                <div class="con">
                    <div class="input">
                        <input type="text " class="inp" title="text" placeholder="Enter City Name" />
                        <i class="bi bi-search search"></i>
                        <div class="inp-text"></div>

                    </div>


                    <div class="tempreture">
                        <div class="img"><img class="img-icon" src="" alt="" /></div>



                        <div class="tem"></div>
                        <div class="c-name"></div>



                        <div class="det">
                            <div class="humadity"><img class="data" src="/images/humidity.png" alt="" /></div>
                            <div class="percentage"></div>
                            <div class="text">Humidity</div>
                        </div>
                        <div class="w-speed"><img class="data" src="/images/wind.png" alt="" /></div>
                        <div class="speed"></div>
                        <div class="text">Wind Speed</div>
                    </div>
                </div>
            </div>
            <div />
            <div />
        </>
    )
}

export default FrontPage
