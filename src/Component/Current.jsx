import React from "react";

const Current = ({ currentWeather, location}) => {
    return (
        <div className="countainer  mt-5">
            <h3 className=" text-primary-emphasis ">Current weather of :{location.name},{location.region},{location.country}</h3>
            <div className="row ">

                {/* COL-1 */}
                <div className="col-3">
                    <div className="card bg-info text-primary-emphasis   bg-opacity-50" >
                        <div className="card-body ">
                            <h6 className="card-title">{currentWeather.condition.text}</h6>
                        </div>
                    </div>
                </div>

                {/* COL-2 */} 
                <div className="col-3">
                    <div className="card bg-info text-primary-emphasis bg-opacity-50" >
                        <div className="card-body">
                            <h5 className="card-title"> Temp in C*:{currentWeather.temp_c}</h5>
                        </div>
                    </div>
                </div>

                {/* COL-3 */}
                <div className="col-3">
                    <div className="card bg-info text-primary-emphasis   bg-opacity-50" >
                        <div className="card-body">
                            <h5 className="card-title">Temp in F*:{currentWeather.temp_f}</h5>
                        </div>
                    </div>
                </div>

                {/* COL-4 */}
                <div className="col-3">
                    <div className="card bg-info text-primary-emphasis bg-opacity-50" >
                        <div className="card-body">
                            <h5 className="card-title">Humidity:{currentWeather.humidity}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Current;