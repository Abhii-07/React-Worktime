import React, { useEffect,useState } from "react";
import styles from "./Form.module.css"

const Form = () => {

    const [form,setForm] = useState({
      username : "",
      email : "",
      password : "",
      age : 0,
    });

    const handleChange = (e) => {
        let {type,name,value,checked} = e.target;
        if(type === "checkbox"){
          setForm({
            ...form,
            [name]:checked,
        });
        }
        else{
          setForm({
            ...form,
            [name]:value,
        });
        }
       
    };

    useEffect(() => {
        console.log(form)
    },[form])
 
  return (
    <div className={styles.display}>
      <h1>Form</h1>

      <form id="inputForm"  >
        <label className={styles.formSpace}>
          <h3>Username :</h3> 
          <input 
          className={styles.inputTag}
          type="text"
           name="username" 
           value = {form.name} 
           onChange={handleChange} 
           required />
        </label>
        <br />

        <label  className={styles.formSpace}>
          <h3>Email :</h3>  
          <input
          className={styles.inputTag} 
          type="email" 
          name="email" 
          onChange={handleChange} 
          value = {form.email} required />
        </label>
        <br />

        <label  className={styles.formSpace}>
          <h3>Password : </h3>
          <input
          className={styles.inputTag} 
          type="Password" 
          name="password" 
          onChange={handleChange} 
          value = {form.password} required />
        </label>
        <br />

        
        <label  className={styles.formSpace}>
         <h3>Age</h3>
          <input 
          className={styles.inputTag}
          type="number" 
          name="age" 
          onChange={handleChange} 
          value = {form.age} required />
        </label>
        <input 
        type="checkbox" 
        name="isIndian" 
        checked ={form.isIndian} 
        onChange = {handleChange}/>
        <label><h2>Is Indian :</h2> </label>
        <br />
 
        {/* <label>
          Department
          <select name="dept"  required>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="OP">Operations</option>
            <option value="S&M">Sales & Marketing</option>
          </select>
        </label> */}
        {/* <br /> */}


        {/* <label>
          Married
          <input type="checkbox" name="marry"  />
        </label> */}
        {/* <br /> */}
        <input type="submit" id="btn" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
