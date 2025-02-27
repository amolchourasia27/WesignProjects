import React from 'react'

function Card() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm">
                    <div className="row">
                        <div className="col">
                        <img className="img-fluid rounded" src="https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3 style={{fontFamily:"Hind Vadodara, sans-serif",textAlign:"center"}}>BreakFast</h3>
                        </div>
                    </div>
                </div>
                
                <div className="col-sm">
                <div className="row">
                        <div className="col">
                        <img className="img-fluid rounded" src="https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3 style={{fontFamily:"Hind Vadodara, sans-serif",textAlign:"center"}}>Lunch</h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                <div className="row">
                        <div className="col">
                        <img className="img-fluid rounded" src="https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3 style={{fontFamily:"Hind Vadodara, sans-serif",textAlign:"center"}}>Dinner</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card;
