function showPaymentFields() {
    const paymentMethod = document.getElementById("payment-method").value;
    const paymentDetails = document.getElementById("payment-details");
    paymentDetails.innerHTML = ""; // Clear previous fields

    if (paymentMethod === "upi") {
        document.body.style.backgroundColor = "#FEFFFF";
        paymentDetails.innerHTML = `
            <label for="upi-id">Enter UPI ID:</label>
            <input type="text" id="upi-id" placeholder="e.g., yourname@upi">
            <button id="submit-btn">Submit</button>
            <img src="upi.jpg" alt="UPI Payment" style="width: 100%; max-width: 400px; margin-bottom: 20px; display: block; margin:auto"> 

<Style>
            
 #submit-btn {
 height: 45px;
 width: 15%;
background-color: #4CAF50;
 color: white;
 border: none;
 border-radius: 4px;
font-size: 16px;
 cursor: pointer;
transition: background-color 0.3s;
margin: 50px;
}
           
#upi-id{
padding: 5px;
font-size: 16px;
height: 30px;
width: 30%;
}

</style>

        `;
    } else if (paymentMethod === "bank") {
        document.body.style.backgroundColor = "#AACDB9";
        paymentDetails.innerHTML = `
            <label for="bank-account">Account Number:</label>
            <input type="text" id="bank-account" placeholder="1234567890" maxlength="14">
            <label for="ifsc-code">IFSC Code:</label>
            <input type="text" id="ifsc-code" placeholder="SBIN0001234" maxlength="11">
            <button id="submit-btn">Submit</button>

            <img src="bank.jpg" alt="bankPayment" style="width: 100%; max-width: 400px; height: 100%; margin-bottom: 20px; display: block; margin:auto"> 
            


<style>

#bank-account , #ifsc-code {
height: 35px;
width: 30%;

}


#submit-btn {
 height: 45px;
    width: 20%;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin: 50px;
}

input {
padding: 5px;
font-size: 16px;
}

</style>




        `;
    } else if (paymentMethod === "cod") {
        document.body.style.backgroundColor = "#FEFFFF";
        paymentDetails.innerHTML = `
            <p>Cash on Delivery selected. No additional information required.</p>
            <img src="cod.jpg" alt="codPayment" style="width: 100%; max-width: 400px; margin-bottom: 20px; display: block; margin:auto"> 
        `;
    } else if (paymentMethod === "credit"){
        document.body.style.background = "linear-gradient(151deg, rgba(21,24,28,1) 0%, rgba(6,37,62,1) 100%)";
        paymentDetails.innerHTML = `
            <div class="pageWrap">

  <div class="card" id="card">
    <button class="cancel-btn" id="cancel-btn"><i class="fa-solid fa-circle-xmark"></i></button>
    <button class="flip-btn" id="flip-btn"><i class="fa-solid fa-arrow-rotate-right"></i></button>
    <div class="cardfront">
      <i class="fa-solid fa-wifi"></i>
      <i class="credit fa-brands fa-cc-credit"></i>
      <div class="Debit">Credit</div>
      <div class="chip"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 55 45">
          <defs>
            <style>
              .cls-1 {
                fill: #3f3c3a;
              }

              .cls-1,
              .cls-2 {
                stroke-width: 0px;
              }

              .cls-2 {
                fill: #c7b299;
              }
            </style>
          </defs>
          <rect class="cls-1" width="55" height="45" rx="4.89" ry="4.89" />
          <g>
            <g>
              <path class="cls-2" d="M17.97,2.85v6.83c0,.95-.77,1.72-1.72,1.72H2.61c-.95,0-1.72-.77-1.72-1.72v-3.92C.88,3.2,2.95,1.13,5.51,1.13h10.73c.95,0,1.72.77,1.72,1.72Z" />
              <rect class="cls-2" x=".88" y="12.22" width="17.08" height="10.28" rx="1.72" ry="1.72" />
            </g>
            <rect class="cls-2" x=".88" y="23.32" width="17.08" height="10.28" rx="1.72" ry="1.72" />
            <path class="cls-2" d="M16.24,34.41H2.61c-.95,0-1.72.77-1.72,1.72v3.92c0,2.56,2.07,4.63,4.63,4.63h10.73c.95,0,1.72-.77,1.72-1.72v-6.83c0-.95-.77-1.72-1.72-1.72Z" />
            <path class="cls-2" d="M49.57,1.13h-29.15c-.95,0-1.72.77-1.72,1.72v40.11c0,.95.77,1.72,1.72,1.72h14.11c.95,0,1.72-.77,1.72-1.72V13.98c0-1.42,1.15-2.58,2.58-2.58h13.78c.83,0,1.51-.68,1.51-1.51v-4.22c0-2.51-2.04-4.55-4.55-4.55Z" />
            <rect class="cls-2" x="37.03" y="12.22" width="17.08" height="10.28" rx="1.72" ry="1.72" />
            <rect class="cls-2" x="37.03" y="23.32" width="17.08" height="10.28" rx="1.72" ry="1.72" />
            <path class="cls-2" d="M52.39,34.41h-13.63c-.95,0-1.72.77-1.72,1.72v6.83c0,.95.77,1.72,1.72,1.72h10.73c2.56,0,4.63-2.07,4.63-4.63v-3.92c0-.95-.77-1.72-1.72-1.72Z" />
          </g>
        </svg></div>
      <div class="card-section" id="account-number-display">1234 5678 9012 3456</div>
      <div class="card-section" id="name-display">John Doe</div>
    </div>
    <div class="cardback">
      <div class="card-section" id="sort-code-display">12-34-56</div>
      <div class="expiry-date-display-wrap"><span>exp<br>end</span>
        <div class="card-section" id="expiry-date-display">12/24</div>
      </div>
      <div class="card-section" id="ccv-display">123</div>
      <div class="strip"></div>
    </div>
  </div>
  <div class="inputs">
    <label for="name">Name</label>
    <input type="text" id="name">
    <label for="account-number">Account Number</label>
    <input type="text" id="account-number" maxlength="19">

    <label for="sort-code">Sort Code</label>
    <input type="text" id="sort-code" maxlength="8">
    <div class="dateCCV">
      <div class="date">
        <label for="expiry-month">Expiry MM/YY</label>
        <br>
        <input type="text" id="expiry-month" maxlength="2">

        <label for="expiry-year">/</label>
        <input type="text" id="expiry-year" maxlength="2">
      </div>
      <div class="CCV">
        <label for="ccv">CCV</label>
        <br>
        <input type="text" id="ccv" maxlength="3">
      </div>
    </div>

    <button class="submit-btn" id="submit-btn">Submit</button>
  </div>
</div>
<div class="focus-border" id="focus-border"></div>

<style>

:root {
  --backgroundcolor: #15181;
}
html {
  margin:0;
  padding:0;
  min-height:100vh;
  background: linear-gradient(151deg, rgba(21,24,28,1) 0%, rgba(6,37,62,1) 100%);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  
}
.pageWrap {
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-flow:wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0;
  column-gap: 80px;
  row-gap: 25px;
  font-weight: 400;
  letter-spacing: 0.1rem;
  padding: 30px 0;
  color: white;
  perspective: 1500px;
}
.title {
  flex: 0 0 100%;
  text-align:center;
  max-height:6em;
}
h1 {
  padding:0;
  margin:0;
  font-size: 3em;
}
h2 {
    padding:0;
  margin:0;
  font-size: 1em;
  font-weight:200;
}
.card {
  position: relative;
  width: 40vw;
  height: 25vw;
  max-width:400px;
    max-height:250px;
  font-size: min(2vw, 20.5px);
  color: white;
  transition: all 0.2s ease;
  transform-style: preserve-3d;
}
.flip {
  transform:rotateY(180deg);
  padding:0;
  margin:0;
}
.cardfront {
  position: absolute;
  padding: 1em;
  height:100%;
  width:100%;
  border-radius: 1em;
    background: #10E5BC;
  );
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  backface-visibility:hidden;
  box-sizing: border-box;
 }
.Debit {
  position: absolute;
  transform:rotate(-90deg);
  right:0em;
  top:2em;
  font-size:0.7em;
}
#sort-code-display {
  position: absolute;
  top:6em;
}
.expiry-date-display-wrap {
  position: absolute;
  bottom:4em;
  font-size:0.6em;
  display:flex;
  align-items: center;
  justify-content: center;
  gap:1em;
}
#ccv-display {
  width:5em;
  background:#CECECE;
  position: absolute;
  top:5em;
  right:1em;
  font-style: italic;
  font-size:0.7em;
  padding:0.4em;
  text-align:right;
  color:gray;
  
}
#expiry-date-display {
  font-size:1.5em;
}

.strip {
  position: absolute;
  top:1em;
  left:0;
  width:100%;
  margin:0;
  height:2.2em;
  Background-color:#4F4F4F;
  
}
.fa-wifi {
  position: absolute;
}
.cardback {
  transform:rotateY(180deg);
  backface-visibility:hidden;
  height:100%;
  width:100%;
  border-radius: 1em;
  padding: 1em;
  position: absolute;
    background: #10E5BC;
  );
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
}
.credit {
  position: absolute;
  right: 0.5em;
  Bottom: 0.5em;
  font-size: 2.5em;
}
.chip {
  position: absolute;
  left: 2em;
  top: 50%;
  transform: translateY(-50%);
}
svg {
  width:2.5em;
  margin:0;
}

.card-section {
  width: fit-content;
  margin: 0.5em 0;
}
#account-number-display {
  font-size: 1.3em;
  margin: 1.2em auto;
  
}
#name-display {
  position: absolute;
  left:2em;
  bottom:1em;
}

.focus-border {
  position: absolute;
  border: 0.1em solid white;
  border-radius: 0.3em;
  transition: all 0.3s ease;
  pointer-events: none;
  opacity: 0;
  padding: 0.4em;
  transform: translateX(-0.4em) translateY(-0.4em);
}

.inputs {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.inputs label {
  margin: 0px 0;
  font-size: 12px;
}

.inputs input {
  background: none;
  margin-bottom: 40px;
  padding: 5px 10px 10px 10px;
  border: none;
  border-bottom: 2px solid white;
  font-size: 16px;
  transition: transform 0.3s ease;
  color: white;
  font-weight: 200;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
}
input:focus-visible {
  outline: none;
}
.date input {
  width: 30px;
  text-align: center;
}
.CCV input {
  width: 60px;
  text-align: center;
}
.dateCCV {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#ccv,
#expiry-year,
#expiry-month {
  font-size: 1rem;
  font-weight: 400;
}

.submit-btn {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #1e5799;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #7db9e8;
}

.card.submitted {
  transform: scale(1.2);
  transition: all 0.5s ease;
}
.card.submitted.flip {
  transform: scale(1.2) rotateY(180deg);
  transition: all 0.5s ease;
}
.inputs.submitted {
  transform: scale(0);
  display: none;
  transition: all 2s ease;
}
.cancel-btn {
  position:absolute;
  left:-1.5em;
  top:-1.5em;
  font-size:1.5em;
  display:none;
  text-align:center;
  border:none;
  background:none;
  color:white;
}
.flip-btn {
  position:absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  font-size:3em;
  text-align:center;
  border:none;
  background:none;
  color:white;
  opacity:0;
  z-index:5;
  transition: all 0.2s ease;
}
.flip-btn:hover {
  opacity:0.3;
  transition: all 0.2s ease;
}
.show {
  display:block;
}
@media only screen and (max-width: 900px) {
  body {
    flex-direction: column;
  }
}
.blur {
  filter: blur(6px) brightness(0.7);
  transition: all 0.2s;
}


</style>


`


    } else if (paymentMethod === "rupay") {
        document.body.style.background = "linear-gradient(151deg, rgba(21,24,28,1) 0%, rgba(6,37,62,1) 100%)";
        paymentDetails.innerHTML = `
            <div class="pageWrap">

  <div class="card" id="card">
    <button class="cancel-btn" id="cancel-btn"><i class="fa-solid fa-circle-xmark"></i></button>
    <button class="flip-btn" id="flip-btn"><i class="fa-solid fa-arrow-rotate-right"></i></button>
    <div class="cardfront">
      <i class="fa-solid fa-wifi"></i>
      <i class="credit fa-brands fa-cc-credit"></i>
      <div class="Debit">Debit</div>
      <div class="chip"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 55 45">
          <defs>
            <style>
              .cls-1 {
                fill: #3f3c3a;
              }

              .cls-1,
              .cls-2 {
                stroke-width: 0px;
              }

              .cls-2 {
                fill: #c7b299;
              }
            </style>
          </defs>
          <rect class="cls-1" width="55" height="45" rx="4.89" ry="4.89" />
          <g>
            <g>
              <path class="cls-2" d="M17.97,2.85v6.83c0,.95-.77,1.72-1.72,1.72H2.61c-.95,0-1.72-.77-1.72-1.72v-3.92C.88,3.2,2.95,1.13,5.51,1.13h10.73c.95,0,1.72.77,1.72,1.72Z" />
              <rect class="cls-2" x=".88" y="12.22" width="17.08" height="10.28" rx="1.72" ry="1.72" />
            </g>
            <rect class="cls-2" x=".88" y="23.32" width="17.08" height="10.28" rx="1.72" ry="1.72" />
            <path class="cls-2" d="M16.24,34.41H2.61c-.95,0-1.72.77-1.72,1.72v3.92c0,2.56,2.07,4.63,4.63,4.63h10.73c.95,0,1.72-.77,1.72-1.72v-6.83c0-.95-.77-1.72-1.72-1.72Z" />
            <path class="cls-2" d="M49.57,1.13h-29.15c-.95,0-1.72.77-1.72,1.72v40.11c0,.95.77,1.72,1.72,1.72h14.11c.95,0,1.72-.77,1.72-1.72V13.98c0-1.42,1.15-2.58,2.58-2.58h13.78c.83,0,1.51-.68,1.51-1.51v-4.22c0-2.51-2.04-4.55-4.55-4.55Z" />
            <rect class="cls-2" x="37.03" y="12.22" width="17.08" height="10.28" rx="1.72" ry="1.72" />
            <rect class="cls-2" x="37.03" y="23.32" width="17.08" height="10.28" rx="1.72" ry="1.72" />
            <path class="cls-2" d="M52.39,34.41h-13.63c-.95,0-1.72.77-1.72,1.72v6.83c0,.95.77,1.72,1.72,1.72h10.73c2.56,0,4.63-2.07,4.63-4.63v-3.92c0-.95-.77-1.72-1.72-1.72Z" />
          </g>
        </svg></div>
      <div class="card-section" id="account-number-display">1234 5678 9012 3456</div>
      <div class="card-section" id="name-display">John Doe</div>
    </div>
    <div class="cardback">
      <div class="card-section" id="sort-code-display">12-34-56</div>
      <div class="expiry-date-display-wrap"><span>exp<br>end</span>
        <div class="card-section" id="expiry-date-display">12/24</div>
      </div>
      <div class="card-section" id="ccv-display">123</div>
      <div class="strip"></div>
    </div>
  </div>
  <div class="inputs">
    <label for="name">Name</label>
    <input type="text" id="name">
    <label for="account-number">Account Number</label>
    <input type="text" id="account-number" maxlength="19">

    <label for="sort-code">Sort Code</label>
    <input type="text" id="sort-code" maxlength="8">
    <div class="dateCCV">
      <div class="date">
        <label for="expiry-month">Expiry MM/YY</label>
        <br>
        <input type="text" id="expiry-month" maxlength="2">

        <label for="expiry-year">/</label>
        <input type="text" id="expiry-year" maxlength="2">
      </div>
      <div class="CCV">
        <label for="ccv">CCV</label>
        <br>
        <input type="text" id="ccv" maxlength="3">
      </div>
    </div>

    <button class="submit-btn" id="submit-btn">Submit</button>
  </div>
</div>
<div class="focus-border" id="focus-border"></div>

<style>

:root {
  --backgroundcolor: #15181;
}
html {
  margin:0;
  padding:0;
  min-height:100vh;
  background: linear-gradient(151deg, rgba(21,24,28,1) 0%, rgba(6,37,62,1) 100%);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  
}
.pageWrap {
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-flow:wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0;
  column-gap: 80px;
  row-gap: 25px;
  font-weight: 400;
  letter-spacing: 0.1rem;
  padding: 30px 0;
  color: white;
  perspective: 1500px;
}
.title {
  flex: 0 0 100%;
  text-align:center;
  max-height:6em;
}
h1 {
  padding:0;
  margin:0;
  font-size: 3em;
}
h2 {
    padding:0;
  margin:0;
  font-size: 1em;
  font-weight:200;
}
.card {
  position: relative;
  width: 40vw;
  height: 25vw;
  max-width:400px;
    max-height:250px;
  font-size: min(2vw, 20.5px);
  color: white;
  transition: all 0.2s ease;
  transform-style: preserve-3d;
}
.flip {
  transform:rotateY(180deg);
  padding:0;
  margin:0;
}
.cardfront {
  position: absolute;
  padding: 1em;
  height:100%;
  width:100%;
  border-radius: 1em;
    background: #10E5BC;
  );
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  backface-visibility:hidden;
  box-sizing: border-box;
 }
.Debit {
  position: absolute;
  transform:rotate(-90deg);
  right:0em;
  top:2em;
  font-size:0.7em;
}
#sort-code-display {
  position: absolute;
  top:6em;
}
.expiry-date-display-wrap {
  position: absolute;
  bottom:4em;
  font-size:0.6em;
  display:flex;
  align-items: center;
  justify-content: center;
  gap:1em;
}
#ccv-display {
  width:5em;
  background:#CECECE;
  position: absolute;
  top:5em;
  right:1em;
  font-style: italic;
  font-size:0.7em;
  padding:0.4em;
  text-align:right;
  color:gray;
  
}
#expiry-date-display {
  font-size:1.5em;
}

.strip {
  position: absolute;
  top:1em;
  left:0;
  width:100%;
  margin:0;
  height:2.2em;
  Background-color:#4F4F4F;
  
}
.fa-wifi {
  position: absolute;
}
.cardback {
  transform:rotateY(180deg);
  backface-visibility:hidden;
  height:100%;
  width:100%;
  border-radius: 1em;
  padding: 1em;
  position: absolute;
    background: #10E5BC;
  );
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
}
.credit {
  position: absolute;
  right: 0.5em;
  Bottom: 0.5em;
  font-size: 2.5em;
}
.chip {
  position: absolute;
  left: 2em;
  top: 50%;
  transform: translateY(-50%);
}
svg {
  width:2.5em;
  margin:0;
}

.card-section {
  width: fit-content;
  margin: 0.5em 0;
}
#account-number-display {
  font-size: 1.3em;
  margin: 1.2em auto;
  
}
#name-display {
  position: absolute;
  left:2em;
  bottom:1em;
}

.focus-border {
  position: absolute;
  border: 0.1em solid white;
  border-radius: 0.3em;
  transition: all 0.3s ease;
  pointer-events: none;
  opacity: 0;
  padding: 0.4em;
  transform: translateX(-0.4em) translateY(-0.4em);
}

.inputs {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.inputs label {
  margin: 0px 0;
  font-size: 12px;
}

.inputs input {
  background: none;
  margin-bottom: 40px;
  padding: 5px 10px 10px 10px;
  border: none;
  border-bottom: 2px solid white;
  font-size: 16px;
  transition: transform 0.3s ease;
  color: white;
  font-weight: 200;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
}
input:focus-visible {
  outline: none;
}
.date input {
  width: 30px;
  text-align: center;
}
.CCV input {
  width: 60px;
  text-align: center;
}
.dateCCV {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#ccv,
#expiry-year,
#expiry-month {
  font-size: 1rem;
  font-weight: 400;
}

.submit-btn {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #1e5799;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #7db9e8;
}

.card.submitted {
  transform: scale(1.2);
  transition: all 0.5s ease;
}
.card.submitted.flip {
  transform: scale(1.2) rotateY(180deg);
  transition: all 0.5s ease;
}
.inputs.submitted {
  transform: scale(0);
  display: none;
  transition: all 2s ease;
}
.cancel-btn {
  position:absolute;
  left:-1.5em;
  top:-1.5em;
  font-size:1.5em;
  display:none;
  text-align:center;
  border:none;
  background:none;
  color:white;
}
.flip-btn {
  position:absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  font-size:3em;
  text-align:center;
  border:none;
  background:none;
  color:white;
  opacity:0;
  z-index:5;
  transition: all 0.2s ease;
}
.flip-btn:hover {
  opacity:0.3;
  transition: all 0.2s ease;
}
.show {
  display:block;
}
@media only screen and (max-width: 900px) {
  body {
    flex-direction: column;
  }
}
.blur {
  filter: blur(6px) brightness(0.7);
  transition: all 0.2s;
}


</style>


`
const accountNumberInput = document.getElementById("account-number");
const sortCodeInput = document.getElementById("sort-code");
const expiryMonthInput = document.getElementById("expiry-month");
const expiryYearInput = document.getElementById("expiry-year");
const nameInput = document.getElementById("name");
const ccvInput = document.getElementById("ccv");
const accountNumberDisplay = document.getElementById("account-number-display");
const sortCodeDisplay = document.getElementById("sort-code-display");
const expiryDateDisplay = document.getElementById("expiry-date-display");
const nameDisplay = document.getElementById("name-display");
const ccvDisplay = document.getElementById("ccv-display");
const focusBorder = document.getElementById("focus-border");
const submitBtn = document.getElementById("submit-btn");
const cancelBtn = document.getElementById("cancel-btn");
const flipbtn = document.getElementById("flip-btn");
const card = document.getElementById("card");
const titles = document.getElementById("titles");
const inputs = document.querySelectorAll(".inputs");

function updateCard() {
  accountNumberDisplay.textContent =
    accountNumberInput.value || "1234 5678 9012 3456";
  sortCodeDisplay.textContent = sortCodeInput.value || "12-34-56";
  const month = expiryMonthInput.value.padStart(2, "0");
  const year = expiryYearInput.value.padStart(2, "0");
  expiryDateDisplay.textContent = `${month}/${year}`;
  nameDisplay.textContent = nameInput.value || "John Doe";
  ccvDisplay.textContent = ccvInput.value || "123";
}

function formatAccountNumber() {
  let value = accountNumberInput.value.replace(/\s+/g, "");
  const formattedValue = value.match(/.{1,4}/g)?.join(" ") || value;
  accountNumberInput.value = formattedValue;
}

function formatSortCode() {
  let value = sortCodeInput.value.replace(/-/g, "");
  const formattedValue = value.match(/.{1,2}/g)?.join("-") || value;
  sortCodeInput.value = formattedValue;
}

function getTransformMatrix(element) {
  const matrix = window.getComputedStyle(element).transform;
  if (matrix === "none") {
    return new DOMMatrix();
  }
  return new DOMMatrix(matrix);
}

function updateFocusBorder() {
  let target;
  if (document.activeElement.id === "account-number") {
    target = accountNumberDisplay;
  } else if (document.activeElement.id === "sort-code") {
    target = sortCodeDisplay;
  } else if (
    document.activeElement.id === "expiry-month" ||
    document.activeElement.id === "expiry-year"
  ) {
    target = expiryDateDisplay;
  } else if (document.activeElement.id === "name") {
    target = nameDisplay;
  } else if (document.activeElement.id === "ccv") {
    target = ccvDisplay;
  }

  if (!target) return;

  const rect = target.getBoundingClientRect();
  const transformMatrix = getTransformMatrix(target);

  const transformedTop = rect.top + window.scrollY;
  const transformedLeft = rect.left + window.scrollX;

  // Apply the transformation matrix to the position
  const transformedPosition = transformMatrix.transformPoint(
    new DOMPoint(transformedLeft, transformedTop)
  );

  focusBorder.style.opacity = "1";
  focusBorder.style.width = `${rect.width}px`;
  focusBorder.style.height = `${rect.height}px`;
  focusBorder.style.top = `${transformedPosition.y}px`;
  focusBorder.style.left = `${transformedPosition.x}px`;
}

function focusInput(event) {
  // Add the flip class immediately to start the flip animation
  if (
    event.target.id === "expiry-month" ||
    event.target.id === "expiry-year" ||
    event.target.id === "ccv" ||
    event.target.id === "sort-code"
  ) {
    card.classList.add("flip");
    // Delay the updateFocusBorder function to run after the flip animation
    setTimeout(updateFocusBorder, 300); // Delay matches the duration of the flip animation
  } else {
    setTimeout(updateFocusBorder, 300); // Delay matches the duration of the flip
  }
}

function blurInput(event) {
  focusBorder.style.opacity = "0";
  if (
    event.target.id === "expiry-month" ||
    event.target.id === "expiry-year" ||
    event.target.id === "ccv" ||
    event.target.id === "sort-code"
  ) {
    card.classList.remove("flip");
  }
}
function flipfun() {
  card.classList.toggle("flip");
}
function handleSubmit() {
  card.classList.add("submitted");
  cancelBtn.classList.add("show");
  cancelBtn.classList.add("show");
  titles.classList.add("blur");
  inputs.forEach((input) => input.classList.add("blur"));
}

function cancelSubmit() {
  card.classList.remove("submitted");
  cancelBtn.classList.remove("show");
  titles.classList.remove("blur");
  inputs.forEach((input) => input.classList.remove("blur"));
}

// Event listeners
accountNumberInput.addEventListener("input", () => {
  formatAccountNumber();
  updateCard();
});
sortCodeInput.addEventListener("input", () => {
  formatSortCode();
  updateCard();
});
expiryMonthInput.addEventListener("input", updateCard);
expiryYearInput.addEventListener("input", updateCard);
nameInput.addEventListener("input", updateCard);
ccvInput.addEventListener("input", updateCard);

accountNumberInput.addEventListener("focus", focusInput);
sortCodeInput.addEventListener("focus", focusInput);
expiryMonthInput.addEventListener("focus", focusInput);
expiryYearInput.addEventListener("focus", focusInput);
nameInput.addEventListener("focus", focusInput);
ccvInput.addEventListener("focus", focusInput);
window.addEventListener("resize", focusInput);
accountNumberInput.addEventListener("blur", blurInput);
sortCodeInput.addEventListener("blur", blurInput);
expiryMonthInput.addEventListener("blur", blurInput);
expiryYearInput.addEventListener("blur", blurInput);
nameInput.addEventListener("blur", blurInput);
ccvInput.addEventListener("blur", blurInput);

submitBtn.addEventListener("click", handleSubmit);
cancelBtn.addEventListener("click", cancelSubmit);
flipbtn.addEventListener("click", flipfun);




        ;
    } else {
        paymentDetails.innerHTML = `<p class="placeholder-text">Please select a payment method to view details.</p>`;
    }
}


 // Coordinates for the cursor
 const coords = { x: 0, y: 0 };
 const circles = document.querySelectorAll(".circle");

 // Colors for the circles
 const colors = [
   "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e", "#ec805d",
   "#e36e5c", "#df685c", "#d5585c", "#d1525c", "#c5415d", "#c03b5d",
   "#b22c5e", "#ac265e", "#9c155f", "#950f5f", "#830060", "#7c0060",
   "#680060", "#60005f", "#48005f", "#3d005e"
 ];

 // Assign colors and initial position to each circle
 circles.forEach(function (circle, index) {
   circle.x = 0;
   circle.y = 0;
   circle.style.backgroundColor = colors[index % colors.length];
 });

 // Update the coordinates when the mouse moves
 window.addEventListener("mousemove", function (e) {
   coords.x = e.clientX;
   coords.y = e.clientY;
 });

 // Animation function to move the circles
 function animateCircles() {
   let x = coords.x;
   let y = coords.y;

   circles.forEach(function (circle, index) {
     // Update the position and scale of each circle
     circle.style.left = x - 12 + "px";
     circle.style.top = y - 12 + "px";
     circle.style.scale = (circles.length - index) / circles.length;

     circle.x = x;
     circle.y = y;

     // Get the next circle in the sequence
     const nextCircle = circles[index + 1] || circles[0];
     x += (nextCircle.x - x) * 0.15;
     y += (nextCircle.y - y) * 0.15;
   });

   // Repeat the animation
   requestAnimationFrame(animateCircles);
 }

 // Start the animation
 animateCircles();
