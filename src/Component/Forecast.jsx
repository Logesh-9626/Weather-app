import React from "react";


const Forecast = ({ forecastWeather, location }) => {

    return (
       
            
        <body>
            
        
        <div className="container text-primary-emphasis  ">
            <h3 className="text-white text-center text-primary-emphasis" > Forecast Weather of:{location.name},{location.region},{location.country}</h3>
            {forecastWeather.forecastday.map((data, index) => {
                return (
                    <div className="accordion accordion-flush mt-3     "
                        id="accordionFlushExample">
                        <div className="accordion-item   bg-info text-primary-emphasis  text-white bg-opacity-80   ">
                            <h2 className="accordion-header   ">
                                <button className="accordion-button collapsed  bg-info " type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#${index}`}
                                    aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                    <div className="d-flex flex-row justify-content-between mb-2 ">
                                        <div className= "p-3 fw-bold">DAY:{data.date}</div>
                                        <div className="p-2 fw-bold">{data.day.condition.text}</div>
                                        <div className="p-2 fw-bold "><img src={data.day.condition.icon} style={{width:"70%",height:"90%"}} /> </div>
                                        <div className="p-2 fw-bold"><h6>MAX temp:{data.day.maxtemp_c}</h6></div>
                                    </div>
                                </button>
                            </h2>
                            <div id={`${index}`}
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="className accordion-body">
                                    {data.hour.map((data) => {
                                        return (
                                            <> 
                                            <h6> Date&Time:{data.time} / Temp:{data.temp_c}"</h6>
                                            <div className="progress" role="progressbar"
                                            aria-label="Default striped example" 
                                            aria-valuenow="10" 
                                            aria-valuemin="0" 
                                            aria-valuemax="100">
                                               <div className="progress-bar progress-bar-striped" style={{ width: `${data.temp_c}%`}}></div>
                                           </div>
                                           </>  
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                  
                )
            })}
        </div>

        </body>
    )
}
export default Forecast;