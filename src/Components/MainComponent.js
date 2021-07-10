import react, { Component } from 'react';
import HomeComponent from './HomeComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

class MainComponent extends Component {

    render() {
          return (
            <div>
                
                <HeaderComponent />
                <HomeComponent />
                <FooterComponent />
            </div>


          )  


    }


}
export default MainComponent;