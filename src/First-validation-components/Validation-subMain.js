import React from "react";

const SubMainForm = () => {






  return (
    <>
      <div className="main-outer">
        <div className="form-box">
          <form action="" autoFill={"off"}>
            <div>
              <label htmlFor="userName">First Name</label>
              <input
                type={"text"}
                name={"userFName"}
                placeholder={"enter first name  "}
                value={""}
              />
            </div>
            <div>
              <label htmlFor="userName">Last Name</label>
              <input
                type={"text"}
                name={"userLName"}
                placeholder={"enter last name "}
                value={""}
              />
            </div>
            <div>
              <label htmlFor="userName">Email id </label>
              <input
                type={"email"}
                name={"userEmail"}
                placeholder={"enter emailxx.com "}
                value={""}
              />
            </div>
            <div>
              <label htmlFor="userName">password</label>
              <input
                type={"password"}
                name={"password"}
                placeholder={"******"}
                value={""}
              />
            </div>
            <div>
              <button type={"submit"} className="form-btn">Submit</button>
            </div>
          </form>
        </div>
        <div className="from-box2"></div>
      </div>
    </>
  );
};

export default SubMainForm;
