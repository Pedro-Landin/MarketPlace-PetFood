import GoogleMapReact from 'google-map-react';
import Marker from '../marker';
import './styles.css';

const Map = () => {
    return (
       <div className="container-map">
           <GoogleMapReact
             //Parametros que o google maps vai utilizar para inicializar o mapa
               bootstrapURLKeys={{ key: 'AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek'}}
              // center={{
               // lat:  -23.561684,
               // lng: -46.625378
              // }}
               defualtZoom={15}
           >
             <Marker lat={-23.561684} lng={-46.625378} />           
        </GoogleMapReact>
       </div>
    );
};

export default Map;