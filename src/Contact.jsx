import React from "react";
import './Contact.css';
// import { useState } from "react";
// import userEvent from "@testing-library/user-event";



// function formValidation(){
// 	const[fullname, setFullName] = useState('');
// 	const[email, setEmail] = useState('');
// 	const[phone, setPhone] = useState('');
// 	const[message, setMessage] = useState('');
// }

const Contact=()=>{
	return(
		<>
		

		<div class="form-main">
	<div class="main-wrapper">
	  <h2 class="form-head">Contact From</h2>
	  <form class="form-wrapper">
		<div class="form-card">
		  <input
		//   onChange={(e)=>setFullName(e.target.value)}
			class="form-input"
			type="text"
			name="full_name"
			required="required"
			
			
		  />

		  <label class="form-label" for="full_name">Full Name</label>
		  
		</div>	

		<div class="form-card">
		  <input
		//    onChange={(e)=>setEmail(e.target.value)}
			class="form-input"
			type="email"
			name="email"
			required="required"
		  />
		  <label class="form-label" for="email">Email</label>
		</div>

		<div class="form-card">
		  <input
		//    onChange={(e)=>setPhone(e.target.value)}
			class="form-input"
			type="number"
			name="phone_number"
			required="required"
		  />
		  <label class="form-label" for="phone_number">Phone number</label>
		</div>

		<div class="form-card">
		  <textarea
		//    onChange={(e)=>setMessage(e.target.value)}
			class="form-textarea"
			maxlength="420"
			rows="3"
			name="phone_number"
			required="required"
		  ></textarea>
		  <label class="form-textarea-label" for="phone_number"
			>Address</label>
		  
		</div>
		<div class="btn-wrap">
		  <button> Submit </button>
		</div>
	  </form>
	</div>
  </div>
		
		
		
		</>
	)
}

export default Contact;



