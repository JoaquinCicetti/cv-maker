import React from "react";

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
import { MdWork as WorkIcon, MdComputer as SoftwareIcon } from "react-icons/md";
import { GoVerified as ServicesIcon } from "react-icons/go";
import "./App.scss";

// images
import Aati from "./img/aati-logo.png";
import Aima from "./img/logo.png";

// data
import { data, ProfileImage } from "./data/pau";

function App() {
  return (
    <div className="App">
      <header className="header">
        <p className="name">{data.name}</p>
        <div className="d-flex align-items-center justify-content-between">
          <span className="title">{data.title}</span>
          <img className="image" alt="profile" src={ProfileImage} />
        </div>
      </header>

      <div className="col">
        <div className="row align-items-center how-it-works ">
          <div className="col-2 text-center full" style={{ marginLeft: 3 }}>
            <div className="circle">
              <ContactIcon />
            </div>
          </div>
          <div className="col-8  p-0 contact pt-4 mt-4">
            <h5>Contact information</h5>
            <p>
              <PhoneIcon />
              <a
                href={`tel:${data.phone.number}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.phone.label}
              </a>
            </p>
            <div className="row">
              <div className="col-6">
                <p>
                  <MailIcon />
                  <a
                    href={`mailto:${data.mail[0]}?subject=Contact!&body=Hi Paula.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.mail[0]}
                  </a>
                </p>
              </div>
              <div className="col-6">
                <p>
                  <LinkedInIcon />
                  <a
                    href={data.linkedIn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{data.linkedIn.label}</span>
                  </a>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <p>
                  <MailIcon />
                  <a
                    href={`mailto:${data.mail[1]}?subject=Contact!&body=Hi Paula.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.mail[1]}
                  </a>
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
                  <span>{data.skype.label}</span>
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
          <div className="col-8 p-0" >
            <hr />
          </div>
          <div className="col-2">
            <div className="corner left-bottom"></div>
          </div>
        </div>
        {/* <!--second section--> */}
        <div className="row align-items-center justify-content-end how-it-works">
          <div className="col-8  p-0 d-flex justify-content-between">
            <div className="col-6">
              <h5>Services</h5>
              <ul>
                {data.services.map(service => {
                  return <li key={`service-${service}`}>{service}</li>;
                })}
              </ul>
            </div>
            <div className="col-6">
              <h5>Specializations</h5>
              <ul>
                {data.specializations.map(specialization => {
                  return (
                    <li key={`specialization-${specialization}`}>
                      {specialization}
                    </li>
                  );
                })}
              </ul>
            </div>
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
          <div className="col-8" p-0>
            <hr />
          </div>
          <div className="col-2">
            <div className="corner top-left"></div>
          </div>
        </div>
        {/* <!--third section--> */}
        <div className="row align-items-center how-it-works">
          <div className="col-2 text-center full" style={{ marginLeft: 3 }}>
            <div className="circle">
              <UniversityIcon />
            </div>
          </div>
          <div className="col-8" p-0>
            <h5>Education</h5>
            <ul className="pl-0">
              {data.education.map(({ title, description }, i) => {
                return (
                  <li key={`education-${i}`}>
                    <b>{title}</b>
                    <p>{description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* <!--path between 3-4--> */}
        <div className="row timeline">
          <div className="col-2">
            <div className="corner top-right"></div>
          </div>
          <div className="col-8" p-0>
            <hr />
          </div>
          <div className="col-2">
            <div className="corner left-bottom"></div>
          </div>
        </div>
        {/* <!--fouth section--> */}
        <div className="row align-items-center justify-content-end how-it-works">
          <div className="col-8  p-0 d-flex">
            <div className="col-6">
              <h5>Work experience</h5>
              <ul className="pl-0">
                {data.experience.map(({ title, description }, i) => {
                  return (
                    <li key={`experience-${i}`}>
                      <b>{title}</b>
                      <p>{description}</p>
                    </li>
                  );
                })}
                <li>
                  <b>
                    <a
                      href={data.linkedIn.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn profile
                    </a>
                  </b>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <h5>Membership</h5>
              <img src={Aati} alt="aati" width={110} />
            </div>
          </div>
          <div className="col-2 text-center full">
            <div className="circle">
              <WorkIcon />
            </div>
          </div>
        </div>
        {/* <!--path between 4-5--> */}
        <div className="row timeline">
          <div className="col-2">
            <div className="corner right-bottom"></div>
          </div>
          <div className="col-8" p-0>
            <hr />
          </div>
          <div className="col-2">
            <div className="corner top-left"></div>
          </div>
        </div>
        {/* <!--fifth section--> */}
        <div className="row align-items-center how-it-works">
          <div className="col-2 text-center full" style={{ marginLeft: 3 }}>
            <div className="circle">
              <SoftwareIcon />
            </div>
          </div>
          <div className="col-8" p-0>
            <h5>Software</h5>
            <ul className="pl-0">
              {data.software.map(({ title, description }, i) => {
                return (
                  <li key={`software-${i}`}>
                    <b>{title}</b>
                    <p>{description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* <!-- end--> */}
        <div className="row timeline">
          <div className="col-2">
            <div className="corner top-right"></div>
          </div>
          <div className="col-8" p-0>
            <hr />
          </div>
          <img src={Aima} alt={"logo"} className="logo" />
        </div>
      </div>
    </div>
    // </section>
  );
}

export default App;
