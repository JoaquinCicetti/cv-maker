import React from "react";
import Profile from "./resources/profile.png";
import {
  FaUserGraduate as UniversityIcon,
  FaInfo as ContactIcon,
  FaPhoneAlt as PhoneIcon,
  FaEnvelope as MailIcon,
  FaLinkedin as LinkedInIcon,
  FaSkype as SkypeIcon,
  FaClock as TimezoneIcon,
  FaGlobeAmericas as NationalityIcon
} from "react-icons/fa";
import { GoVerified as ServicesIcon } from "react-icons/go";
import "./App.scss";

const data = {
  name: "paula mangiaterra",
  title: "Translator EN>SP",
  mail: "mangiaterra.p.s@gmail.com",
  phone: "+54 3413782797",
  linkedIn: "https://www.linkedin.com/",
  skype: {
    invite: "https://join.skype.com/invite/APEX81drOmgD",
    user: "Pauli Mangiaterra"
  },
  location: "Rosario, Argentina",
  timezone: "Buenos Aires (GMT-3)",
  nationality: "Argentinian"
};

function App() {
  return (
    <div className="App">
      <header className="header">
        <p className="name">{data.name}</p>
        <p className="title">{data.title}</p>
        <img className="image" alt="profile" src={Profile} />
      </header>

      <div className="container-fluid pt-4">
        <div className="row align-items-center how-it-works">
          <div className="col-2 text-center bottom">
            <div className="circle">
              <ContactIcon />
            </div>
          </div>
          <div className="col-10 contact">
            <h5>Informacion de contacto</h5>
            <p>
              <PhoneIcon />
              <a
                href={`tel:${data.phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.phone}
              </a>
            </p>
            <p>
              <MailIcon />
              <a
                href={`mailto:${data.mail}?subject=Contact!&body=Hi Paula.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.mail}
              </a>
            </p>
            <div className="row">
              <div className="col-6">
                <p>
                  <LinkedInIcon />
                  <span>{data.linkedIn}</span>
                </p>
              </div>
              <div className="col-6">
                <p>
                  <NationalityIcon />
                  <span>{data.nationality}</span>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <a
                  href={`${data.skype.invite}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SkypeIcon />
                  <span>{data.skype.user}</span>
                </a>
              </div>
              <div className="col-6">
                <p>
                  <TimezoneIcon />
                  <span>{data.timezone}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!--path between 1-2--> */}
        <div className="row timeline">
          <div className="col-2">
            <div className="corner top-right"></div>
          </div>
          <div className="col-8">
            <hr />
          </div>
          <div className="col-2">
            <div className="corner left-bottom"></div>
          </div>
        </div>
        {/* <!--second section--> */}
        <div className="row align-items-center justify-content-end how-it-works">
          <div className="col-8 text-right">
            <h5>Services</h5>
            <p>
              🚬 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et,
              posuere interdum lectus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna,
              iaculis in ligula et, posuere interdum lectus. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed porttitor gravida
              aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum
              lectus.
            </p>
          </div>
          <div className="col-2 text-center full">
            <div className="circle">
              <ServicesIcon />
            </div>
          </div>
        </div>
        {/* <!--path between 2-3--> */}
        <div className="row timeline">
          <div className="col-2">
            <div className="corner right-bottom"></div>
          </div>
          <div className="col-8">
            <hr />
          </div>
          <div className="col-2">
            <div className="corner top-left"></div>
          </div>
        </div>
        {/* <!--third section--> */}
        <div className="row align-items-center how-it-works">
          <div className="col-2 text-center full ml-1" >
            <div className="circle">
              <UniversityIcon />
            </div>
          </div>
          <div className="col-8">
            <h5>Now with Pug and Sass</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et,
              posuere interdum lectus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna,
              iaculis in ligula et, posuere interdum lectus.
            </p>
          </div>
        </div>
        {/* <!--path between 3-last--> */}
        <div className="row timeline">
          <div className="col-2">
            <div className="corner top-right"></div>
          </div>
          <div className="col-4">
            <hr />
          </div>

        </div>
      </div>
    </div>
    // </section>
  );
}

export default App;
