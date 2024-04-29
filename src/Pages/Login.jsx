import React, { useState, useEffect } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate, Navigate } from "react-router-dom";
import { loginUserSuccess } from "../../redux/slice";
import { loginUserFailure } from "../../redux/slice";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state=>state.login.isLoggedIn)
  useEffect(() => {
    // If user is already logged in, redirect to home page
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);
  const [formdata, setFormdata] = useState({
    user: "mohit123",
    pwd: "abc123",
    isVisible: true,
  });

  const handlerChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormdata((prevFormdata) => ({
      ...prevFormdata,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3500/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: formdata.user,
          pwd: formdata.pwd,
        }),
      });
      if (!response.ok) {
        // If login fails due to unauthorized access, show error message
        setError("Unauthorized");
        setLoading(false);
      } 
      if(response.ok) {
        // If login is successful, set loginSuccess to true and redirect to "/home"
        setLoginSuccess(true);
        navigate("/home")
        const data = await response.json();
        const { roles, accessToken, defaultHomePage, homePageFileID } = data;
        console.log(data);
        dispatch(loginUserSuccess({ roles, accessToken, defaultHomePage, homePageFileID }));
      }
    } catch (error) {
      console.log(error);
      setLoading(false); // Set loading to false on error
    }
  };


  return (
    <main className="w-auto h-[98vh] mx-auto my-auto">
      <nav className="lg:pt-[20px] md:pt-7 pt-3 md:pl-[35px] pl-7 lg:pl-24">
        <img
          src="/assets/imags.png"
          className="w-[226px] 2xl:w-72"
          alt="logo"
        />
      </nav>
      <section className="flex justify-evenly items-center max-md:flex-wrap max-lg:flex-wrap max-xl:flex-wrap lg:px-3 px-3 w-full lg:-mt-24">
        {loginSuccess ? (
          <div>
            <h1></h1>
            <p className="w-96 h-8 px-4 ml-6 border-2 border-green-300 rounded-xl bg-green-300 text-green-950 flex items-center justify-start ">
              Welcome! You Are Authorized
            </p>
          </div>
        ) : (
          <form
            onSubmit={handlerSubmit}
            className="left-sec basis-[30%] lg:pr-[90px] md:pr-[0] sm:pr-[0] px-20"
          >
            <h1 className="text-4xl self-start max-sm:text-4xl md:mt-[70px] mt-5 pl-4 mb-2">
              Login
            </h1>
            <div className="flex flex-col justify-center items-center gap-[20px] px-2 md:pl-[15px] max-md:flex-wrap]">
              <input
                onChange={handlerChange}
                value={formdata.user}
                name="user"
                className="text-2xl w-[350px] rounded-md border-2 px-2 py-2 2xl:w-[25rem]"
                type="text"
                placeholder="Email"
              />
              <input
                onChange={handlerChange}
                value={formdata.pwd}
                name="pwd"
                className="text-2xl w-[350px] rounded-md border-2 px-2 py-2 2xl:w-[25rem]"
                type="password" // Change type to "password"
                placeholder="Password"
              />
              <span className="-mt-[52px]">
                <AiOutlineEyeInvisible
                  fill="#AFB2BF"
                  className="relative left-[135px] bottom-[5px]"
                />
              </span>
              <div className="flex gap-[1.5rem] 2xl:gap-[3.1rem] whitespace-nowrap">
                <span>
                  <label className="w-full flex">
                    <div className="mr-[10px]">
                      <input
                        type="checkbox"
                        name="isVisible"
                        id="isVisible"
                        checked={formdata.isVisible}
                      />
                    </div>
                    <p className="md:pr-[9px] whitespace-nowrap">
                      Keep Me Logged In
                    </p>
                  </label>
                </span>
                <br />
                <span className="flex whitespace-nowrap">
                  Forgot Password ?
                </span>
              </div>
              <button
                className="bg-blue-600 w-[350px] text-white px-6 py-3 rounded-lg text-xl 2xl:w-[25rem]"
                type="submit"
              >
                {loading ? <div>Loading...</div> : <> LOGIN</>}
              </button>
              <p className="text-center text-[0.9rem] max-md:hidden max-lg:visible">
                By logging up, you agree to our{" "}
                <span className="text-blue-500">Terms of Service</span> and{" "}
                <span className="text-blue-500">Privacy Policy</span>
              </p>
            </div>
            {error && (
              <p className="w-96 h-8 px-4 ml-6 border-2 border-red-300 rounded-xl bg-red-300 text-red-950 flex items-center justify-start ">
                {error}
              </p>
            )}
          </form>
        )}

        <div className="bg-gray-300 lg:w-[0.1rem] lg:h-[26rem] 2xl:h-[34rem]"></div>
        <div
          className={`right-sec mt-[2rem] object-contain basis-[70%] lg:px-0 max-sm:mx-auto 2xl:mt-20 max-lg:px-10 max-sm:flex-wrap`}
        >
          <h2
            className={`md:text-3xl max-sm:text-[1.3rem] text-xs lg:text-3xl mb-3 lg:ml-auto leading-10 2xl:text-[2.3rem] 2xl:ml-auto text-center ml-auto whitespace-no-wrap`}
          >
            Data Visualized, Decisions Amplified
          </h2>
          <img
            src="/assets/Data-report.png"
            alt="dataReport"
            className="lg:h-[30rem] h-[16rem] lg:w-[80%] object-contain m-auto md:my-4 md:mx-auto 2xl:w-[70%] 2xl:h-[60vh]"
          />
          <p className="text-center max-md:hidden lg:visible object-contain px-24 lg:text-sm 2xl:text-lg 2xl:px-[16rem]">
            Lorem ipsum dolor , commodi. Repellendus vero, sapiente architecto
            debitis voluptas minus deserunt ea consequuntur. Qui maiores laborum
            perferendis libero voluptatibus repellendus voluptate
          </p>
        </div>
      </section>
      <footer className="flex justify-center md:justify-end m-auto">
        <img
          src="/assets/logo.png"
          className="md:w-52 w-[30%]"
          alt="footerlogo"
        />
      </footer>
    </main>
  );
}
