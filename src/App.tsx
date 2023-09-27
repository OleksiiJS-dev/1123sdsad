import lambos from "./pages/lambo1.jpg"
import "./Appcss.css";
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
// carousel import carousel cars
import lamboscar1 from "./carousel/lambo-car-1.jpg"
import lamboscar2 from "./carousel/lambo-car-2.jpg"
import lamboscar3 from "./carousel/lambo-car-3.jpg"
import lamboscar34 from "./carousel/lambo-dalabaeb.avif"
import Header from "./COMPONENTS/SnoopDOgg";
function App() {
  

  return (
    <>
    <Header>I HAVE DOWN SYNDEOME ADN AUTISM</Header>
    <h1>I HAVE DOWN SYNDEOME ADN AUTISM</h1>
      <div className={`padding`}>
        <p>DOLBOEb</p>
        <img className={"carboy"} src={lambos} alt='logo'></img>
        {/* <img src={"../public/lambo2"}></img> */}
        <><button>press me</button></>
      </div>
      <div className={"autodeploy"}>
        start
      </div>
      <div className={"autodeploy2"}>
        start
      </div>

      LAMBO ESLI CHE
      <div className={"next1lvl21000"}>
        <div className={"lamboslist"}>
          <div className={"lambo-container"}>
            <img className={"lamboimage"} src={lambos} alt="@@@" />
            <p>LAMBO 1 - 90000$</p>
            <p>rate 5 stars</p>
            <p><button>buy</button></p>
            <p><button>sell</button></p>
          </div>
          <div className={"lambo-container"}>
            <img className={"lamboimage"} src={lambos} alt="@@@" />
            <p>LAMBO 2 - 90000$</p>
            <p>rate 5 stars</p>
            <p><button>buy</button></p>
            <p><button>sell</button></p>
          </div>
          <div className={"lambo-container"}>
            <img className={"lamboimage"} src={lambos} alt="@@@" />
            <p>LAMBO 3 - 90000$</p>
            <p>rate 5 stars</p>
            <p><button>buy</button></p>
            <p><button>sell</button></p>
          </div>
          <div className={"lambo-container"}>
            <img className={"lamboimage"} src={lambos} alt="@@@" />
            <p>LAMBO 4 - 90000$</p>
            <p>rate 5 stars</p>
            <p><button>buy</button></p>
            <p><button>sell</button></p>
          </div>
        </div>

      </div>

      SLIDER
      <div>
        {/* carousel */}
        <Carousel 
        // axis="vertical"
        autoFocus={true}
        infiniteLoop={true}
        >
          <div>
            <img src={lamboscar1} alt="alt" />
            <p>Get behind the wheel of luxury with our Lamborghini wallpapers. From chrome accents to sleek body lines, these backgrounds will make your device roar with elegance.</p>
          </div>
          <div>
            <img src={lamboscar2} alt="alt" />
            <p>Choose from a curated selection of Lamborghini car wallpapers for your mobile and desktop screens. Always free on Unsplash.</p>
          </div>
          <div>
            <img src={lamboscar3} alt="alt" />
            <p>Choose from a curated selection of Lamborghini car wallpapers for your mobile and desktop screens. Always free on Unsplash.</p>

          </div>
          <div>
          <img src={lamboscar34} alt="alt" />
          {/* <img src={"./carousel/lambo-dalabaeb.avif"} alt="alt" /> */}
            <p>Choose from a curated selection of Lamborghini car wallpapers for your mobile and desktop screens. Always free on Unsplash.</p>
          </div>
        </Carousel>
      </div>
      // <Header>Hello WORLDS!</Header>
    </>
    
  );
}

export default App;
