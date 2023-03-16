import React, { useState } from "react";

const SubMainForm = () => {
  const [formData, setNewFormData] = useState({
    userFName: " ",
    userLName: " ",
    userEmailId: " ",
    userPassword: " ",
  });

  const OnFName = (event) => {
    event.preventDefault();
    // console.log(event.target.value)
    const name = event.target.name;
    const value = event.target.value;
   setNewFormData((preValue) =>{
    if(name === "userFName"){
     return{
      userFName: value,
      userLName: preValue.userLName,
      userEmailId: preValue.userEmailId,
      userPassword:preValue.userPassword,
     }
    } else if(name === "userLName"){
      return{
       userFName: preValue.userFName,
       userLName: value,
       userEmailId: preValue.userEmailId,
       userPassword:preValue.userPassword,
      }
     } else if(name === "userEmailId"){
      return{
       userFName: preValue.userFName,
       userLName: preValue.userLName,
       userEmailId: value,
       userPassword:preValue.userPassword,
      }
     }else if(name === "userPassword"){
      return{
       userFName: preValue.userFName,
       userLName: preValue.userLName,
       userEmailId: preValue.userEmailId,
       userPassword:value,
      }
     }
   })
  };

  const OnSubmit = ( event) =>{
    event.preventDefault()
    
  }

  return (
    <>
      <div className="main-outer">
        <div className="form-box">
          <form action="" autoComplete="off" onSubmit={OnSubmit}>
            <div>
              <label htmlFor="userName">First Name</label>
              <input
                type={"text"}
                name={"userFName"}
                placeholder={"enter first name  "}
                value={formData.userFName}
                onChange={OnFName}
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="userName">Last Name</label>
              <input
                type={"text"}
                name={"userLName"}
                placeholder={"enter last name "}
                value={formData.userLName}
                onChange={OnFName}
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="userName">Email id </label>
              <input
                type={"email"}
                name={"userEmailId"}
                placeholder={"enter emailxx.com "}
                value={formData.userEmailId}
                onChange={OnFName}
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="userName">password</label>
              <input
                type={"password"}
                name={"userPassword"}
                placeholder={"******"}
                value={formData.userPassword}
                onChange={OnFName}
                autoComplete={"off"}
              />
            </div>
            <div>
              <button type={"submit"} className="form-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="from-box2"></div>
      </div>
    </>
  );
};

export default SubMainForm;
