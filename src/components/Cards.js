import React from "react";

export default function Cards() {
  return (
    <>
      <div>
        <div className="card" style={{ width: "20rem" }}>
          <img src="https://tse2.mm.bing.net/th?id=OIP.RNZWGX6DGAbU7l3uEmb9gQHaFE&pid=Api&P=0&h=1800" className="card-img-top" alt="..." />
          <div className='conatiner' style={{justifyItems:'center'}}><p className="card-text">
             This is a Cart
            </p></div>
          <div className="card-body">
            <div class='container' style={{display:'flex'}}>
            <select class="form-select" style={{paddingRight:'10%',marginRight:'10%'}} aria-label="Default select example">
              
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <select class="form-select" aria-label="Default select example">
              
              <option selected value="Half">Half</option>
              <option value="Full">Full</option>
              
            </select>
            <div class='container'>Total Price</div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}
