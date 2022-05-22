import 'bulma/css/bulma.min.css';
import mountains from "./assets/pic.png"


const App =  () => {

  return (
    
<div class="hero is-fullheight is-dark">
<div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-8 is-offset-2">
      
      <h1 class="title has-text-white is-family-primary has-text-white is-uppercase "> Sherpa life </h1>
      <p class="subtitle has-text-white is-secondary is-italic is-size-6 "> "The more that you read, the more things you will know, the more that you learn, the more places you’ll go.”– Dr. Seuss
</p>
     
      <hr></hr> 
      <div class="box">
      
      <div> <figure class="image is-2by1">
      <img src={mountains} alt= "mountains"></img>
     </figure> </div>
      

<div>
<button class="button is-medium is-black is-normal is-responsive is-fullwidth is-outlined">
  LOGIN
</button>
</div>
<div>
<button class="button is-medium is-black is-normal is-responsive is-fullwidth is-outlined">
SIGN UP 
</button>
</div>

</div>


      </div>
    </div>
  </div>


</div>
    
    
        
)
}

  






export default App;



















