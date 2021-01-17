import React from 'react';

const Map: React.FC = () => {
  
  return (
    <div>
        <iframe
            width="100%"
            height="500"
            style={{marginTop:"80px", marginBottom: "80px"}}
            title="Google Map"
            frameBorder="0" 
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBLQsey6LeTAx0CUK8zCyRXlD8LCvJAwsY
                &q=Dasoli,Opava" 
            allowFullScreen>
        </iframe>
    </div>
  )
}

export default Map
