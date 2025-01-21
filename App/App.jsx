import "./_base.scss";
import "./_reset.scss";
import "./_vars.scss";
import "./_section-cart.scss"
import Title from "../Title/Title";
import Cart from "../Cart/Cart";


function App() {
  return (
    
            <section className="section-cart">
              <header className="section-cart_header">
                  <div className="container">
            <Title />
           
          </div>
              </header>
              <div className="section-cart_body">
                <div className="conyainer"></div>
                <Cart /> 
               
              </div>
       
        
       
      </section>
    
  );
}

export default App;
