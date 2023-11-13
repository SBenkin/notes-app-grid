import "./App.css";
// type User = {
//   id: number;
//   username: string;
//   password: string;
//   role: string;
// };
const Login = () => {
  return (
    <>
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Registration Form</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <form>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope"></i>
                  </span>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Re-type Password"
                    required
                  />
                </div>
                <div className="row clearfix">
                  <div className="input_field radio_option">
                    <input type="radio" name="radiogroup1" id="rd1" />
                    <label htmlFor="rd1">Shopkeeper</label>
                    <input type="radio" name="radiogroup1" id="rd2" />
                    <label htmlFor="rd2">Customer</label>
                  </div>
                </div>
                <input className="button" type="submit" value="Register" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
