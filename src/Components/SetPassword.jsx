import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { AiFillEye } from 'react-icons/ai';


import "./login.css";
const Login = () => {
    const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    navigate('/blogs')
  };


  return (
    <React.Fragment>
        <nav className="">
        <div className="nav row">
        <div className="col-12">
            <a className="navbar-brand" href="#">
              <div className="PPLogo">
                <div>
                  <svg width="25" height="30" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.419 0.944812C15.3451 0.366646 16.5197 0.366647 17.4458 0.944814L30.5204 9.10723C31.3567 9.62931 31.8649 10.5456 31.8649 11.5314V26.4686C31.8649 27.4544 31.3567 28.3707 30.5204 28.8928L17.4458 37.0552C16.5197 37.6334 15.3451 37.6334 14.419 37.0552L1.3444 28.8928C0.50813 28.3707 0 27.4544 0 26.4686V11.5314C0 10.5456 0.508131 9.62931 1.3444 9.10723L14.419 0.944812Z" fill="#444BAB"></path><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="38"><path d="M14.419 0.944812C15.3451 0.366646 16.5197 0.366647 17.4458 0.944814L30.5204 9.10723C31.3567 9.62931 31.8649 10.5456 31.8649 11.5314V26.4686C31.8649 27.4544 31.3567 28.3707 30.5204 28.8928L17.4458 37.0552C16.5197 37.6334 15.3451 37.6334 14.419 37.0552L1.3444 28.8928C0.50813 28.3707 0 27.4544 0 26.4686V11.5314C0 10.5456 0.508131 9.62931 1.3444 9.10723L14.419 0.944812Z" fill="#C4C4C4"></path></mask><g mask="url(#mask0)"><rect x="6.82275" y="18.0845" width="2.85781" height="17.6381" fill="white"></rect><mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="10" y="11" width="7" height="4"><rect x="16.2534" y="11.4314" width="2.85781" height="5.71563" transform="rotate(90 16.2534 11.4314)" fill="#CD6767"></rect></mask><g mask="url(#mask1)"><path d="M10.5378 14.2892C10.5378 13.9139 10.6117 13.5423 10.7553 13.1956C10.8989 12.8488 11.1095 12.5338 11.3748 12.2684C11.6402 12.0031 11.9552 11.7926 12.302 11.6489C12.6487 11.5053 13.0203 11.4314 13.3956 11.4314L13.3956 14.2892L10.5378 14.2892Z" fill="white"></path></g><mask id="mask2" mask-type="alpha" maskUnits="userSpaceOnUse" x="15" y="11" width="7" height="4"><rect x="21.3347" y="11.4314" width="2.85781" height="5.71563" rx="0.178613" transform="rotate(90 21.3347 11.4314)" fill="#CD6767"></rect></mask><g mask="url(#mask2)"><path d="M15.7977 14.2892C15.6991 14.2892 15.6185 14.2091 15.6247 14.1107C15.668 13.4179 15.9624 12.7621 16.4561 12.2684C16.9921 11.7325 17.719 11.4314 18.4769 11.4314C19.2348 11.4314 19.9617 11.7325 20.4977 12.2684C20.9914 12.7621 21.2858 13.4179 21.3291 14.1107C21.3353 14.2091 21.2547 14.2892 21.1561 14.2892L18.4769 14.2892L15.7977 14.2892Z" fill="white"></path></g><path d="M17.495 22.0142C17.5936 22.0142 17.6736 22.0941 17.6736 22.1928L17.6736 24.6934C17.6736 24.792 17.5936 24.872 17.495 24.872L9.68063 24.872L9.68063 22.0142L17.495 22.0142Z" fill="white"></path><path d="M21.344 25.7205L18.4862 25.7205L18.4862 19.0225C18.4862 18.9238 18.5661 18.8438 18.6648 18.8438L21.1654 18.8438C21.264 18.8438 21.344 18.9238 21.344 19.0225L21.344 25.7205Z" fill="white"></path><path d="M10.5288 14.2888L13.3866 14.2888L13.3866 20.9868C13.3866 21.0855 13.3067 21.1654 13.208 21.1654L10.7074 21.1654C10.6088 21.1654 10.5288 21.0855 10.5288 20.9868L10.5288 14.2888Z" fill="white"></path><path d="M22.1836 15.1377L22.1836 17.9955L14.4139 17.9955C14.3153 17.9955 14.2353 17.9155 14.2353 17.8169L14.2353 15.3163C14.2353 15.2177 14.3153 15.1377 14.4139 15.1377L22.1836 15.1377Z" fill="white"></path><path d="M18.4861 25.7205L18.4861 28.5783L10.5378 28.5783L10.5378 25.8991C10.5378 25.8004 10.6178 25.7205 10.7164 25.7205L18.4861 25.7205Z" fill="white"></path><rect x="18.4414" y="11.4314" width="2.85781" height="5.04583" transform="rotate(90 18.4414 11.4314)" fill="white"></rect><mask id="mask3" mask-type="alpha" maskUnits="userSpaceOnUse" x="22" y="15" width="4" height="6"><rect x="25.041" y="20.8528" width="2.85781" height="5.71563" transform="rotate(-180 25.041 20.8528)" fill="#CD6767"></rect></mask><g mask="url(#mask3)"><path d="M22.1832 15.1372C22.9411 15.1372 23.668 15.4382 24.204 15.9742C24.7399 16.5101 25.041 17.237 25.041 17.995L22.1832 17.995L22.1832 15.1372Z" fill="white"></path></g><mask id="mask4" mask-type="alpha" maskUnits="userSpaceOnUse" x="22" y="20" width="4" height="6"><rect x="25.0503" y="25.9424" width="2.85781" height="5.71563" rx="0.178613" transform="rotate(-180 25.0503 25.9424)" fill="#CD6767"></rect></mask><g mask="url(#mask4)"><path d="M22.1925 20.4054C22.1925 20.3067 22.2725 20.2262 22.371 20.2323C23.0638 20.2757 23.7195 20.5701 24.2133 21.0638C24.7492 21.5997 25.0503 22.3266 25.0503 23.0846C25.0503 23.8425 24.7492 24.5694 24.2133 25.1053C23.7195 25.5991 23.0638 25.8935 22.371 25.9368C22.2725 25.943 22.1925 25.8624 22.1925 25.7638L22.1925 23.0846L22.1925 20.4054Z" fill="white"></path></g><rect x="25.0503" y="23.0852" width="2.85781" height="5.09048" transform="rotate(-180 25.0503 23.0852)" fill="white"></rect><path d="M10.5376 28.5779H13.3954L13.3954 37.5085C13.3954 37.6072 13.3154 37.6872 13.2168 37.6872H10.7162C10.6176 37.6872 10.5376 37.6072 10.5376 37.5085L10.5376 28.5779Z" fill="white"></path><mask id="mask5" mask-type="alpha" maskUnits="userSpaceOnUse" x="6" y="15" width="4" height="6"><rect x="6.82275" y="15.2271" width="2.85781" height="5.71563" rx="0.178613" fill="#CD6767"></rect></mask><g mask="url(#mask5)"><circle cx="9.68057" cy="18.0849" r="2.85781" fill="white"></circle></g><mask id="mask6" mask-type="alpha" maskUnits="userSpaceOnUse" x="18" y="25" width="4" height="4"><rect x="18.4861" y="28.5779" width="2.85781" height="2.85781" transform="rotate(-90 18.4861 28.5779)" fill="#CD6767"></rect></mask><g mask="url(#mask6)"><path d="M21.3343 25.7206C21.3343 26.0958 21.2604 26.4675 21.1167 26.8142C20.9731 27.1609 20.7626 27.476 20.4972 27.7413C20.2319 28.0067 19.9168 28.2172 19.5701 28.3608C19.2234 28.5044 18.8518 28.5784 18.4765 28.5784L18.4765 25.7206L21.3343 25.7206Z" fill="white"></path></g></g></svg>
                </div>
                <h3 className="PPNameHeader">Programming Pathshala</h3>
              </div>
            </a>
          </div>
        </div>
        </nav>

      <div className="login container">
        <form className="login-card" action="" onSubmit={submitHandler}>
          <h3>Set Password</h3>
          <label htmlFor="setpassword" className='setpassword'>Set Password</label>
          <input type="password" id='setpassword' required />
          <label htmlFor="confirmpassword" className='confirmpassword'>Confirm Password</label>
          <input type="password" id='confirmpassword' required />
          <button type="submit" className="setPass">
            Sign Up
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login