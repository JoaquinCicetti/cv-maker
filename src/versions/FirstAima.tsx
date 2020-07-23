import React from 'react'

import {
  FaUserGraduate as UniversityIcon,
  FaInfo as ContactIcon,
  FaPhoneAlt as PhoneIcon,
  FaEnvelope as MailIcon,
  FaLinkedin as LinkedInIcon,
  FaSkype as SkypeIcon,
  FaClock as TimezoneIcon,
  FaGlobeAmericas as NationalityIcon,
  FaQuoteLeft as QuotesIcon
} from 'react-icons/fa'
import { MdWork as WorkIcon, MdComputer as SoftwareIcon } from 'react-icons/md'
import { GoVerified as ServicesIcon } from 'react-icons/go'
import { FiArrowRight as ArrowIcon } from 'react-icons/fi'

import './FirstAima.scss'

// images
import Aati from 'resources/img/aati-logo.png'
import Aima from 'resources/img/logo.png'

// data
import { paula } from 'resources/data'

function FirstAima () {
  const { ProfileImage, ...data } = paula
  return (
    <div>
      <header className='header'>
        <img className='image' alt='profile' src={ProfileImage} />
        <div className='contact'>
          <p>
            <PhoneIcon />
            <a
              href={`tel:${data.phone.number}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {data.phone.label}
            </a>
          </p>
          <p>
            <MailIcon />
            <a
              href={`mailto:${data.mail[0]}?subject=Contact!&body=Hi Paula.`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {data.mail[0]}
            </a>
          </p>
          <p>
            <LinkedInIcon />
            <a
              href={data.linkedIn.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>{data.linkedIn.label}</span>
            </a>
          </p>
          <p>
            <TimezoneIcon />
            <span>{data.timezone}</span>
          </p>
        </div>
      </header>
      <div className='basic'>
        <p className='name'>{data.name}</p>
        <span className='title'>EN {<ArrowIcon />} ES {data.title}</span>
      </div>
      <div className='col'>
        <div className='row align-items-center how-it-works'>
          <div className='col-2 text-center bottom' style={{ marginLeft: 2 }}>
            <div className='circle'>
              <QuotesIcon />
            </div>
          </div>

          <div className='col-8 pt-3'>
            <p className='abstract'>
              {data.abstract}
            </p>
          </div>

        </div>
      </div>
      <div className='col'>
        <div className='row timeline'>
          <div className='col-2'>
            <div className='corner top-right' />
          </div>
          <div className='col-8 p-0'>
            <hr />
          </div>
          <div className='col-2'>
            <div className='corner left-bottom' />
          </div>
        </div>
        {/* <!--second section--> */}
        <div className='row align-items-center justify-content-end how-it-works'>
          <div className='col-8 p-0 m-0 d-flex justify-content-between'>
            <div className='col-6'>
              <h5>Services</h5>
              <ul>
                {data.services.map(service => {
                  return <li key={`service-${service}`}>{service}</li>
                })}
              </ul>
            </div>
            <div className='col-6'>
              <h5>Specializations</h5>
              <ul>
                {data.specializations.map(specialization => {
                  return (
                    <li key={`specialization-${specialization}`}>
                      {specialization}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className='col-2 text-center full'>
            <div className='circle'>
              <ServicesIcon />
            </div>
          </div>
        </div>
        {/* <!--path between 2-3--> */}
        <div className='row timeline'>
          <div className='col-2'>
            <div className='corner right-bottom' />
          </div>
          <div className='col-8'>
            <hr />
          </div>
          <div className='col-2'>
            <div className='corner top-left' />
          </div>
        </div>
        <div className='row align-items-center how-it-works'>
          <div className='col-2 text-center full' style={{ marginLeft: 3 }}>
            <div className='circle'>
              <UniversityIcon />
            </div>
          </div>
          <div className='col-8 p-0'>
            <h5>Education</h5>
            <ul className='pl-0'>
              {data.education.map(({ title, description }, i) => {
                return (
                  <li key={`education-${i}`}>
                    <b>{title}</b>
                    <p>{description}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className='row timeline'>
          <div className='col-2'>
            <div className='corner top-right' />
          </div>
          <div className='col-8 p-0'>
            <hr />
          </div>
          <div className='col-2'>
            <div className='corner left-bottom' />
          </div>
        </div>
        {/* <!--fouth section--> */}
        <div className='row align-items-center justify-content-end how-it-works'>
          <div className='col-8  p-0 d-flex'>
            <div className='col-6'>
              <h5>Work experience</h5>
              <ul className='pl-0'>
                {data.experience.map(({ title, description }, i) => {
                  return (
                    <li key={`experience-${i}`}>
                      <b>{title}</b>
                      <p>{description}</p>
                    </li>
                  )
                })}
                <li>
                  <b>
                    <a
                      href={data.linkedIn.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      LinkedIn profile
                    </a>
                  </b>
                </li>
              </ul>
            </div>
            <div className='col-6'>
              <h5>Membership</h5>
              <img src={Aati} alt='aati' width={110} />
            </div>
          </div>
          <div className='col-2 text-center full'>
            <div className='circle'>
              <WorkIcon />
            </div>
          </div>
        </div>
        {/* <!--path between 4-5--> */}
        <div className='row timeline'>
          <div className='col-2'>
            <div className='corner right-bottom' />
          </div>
          <div className='col-8 p-0'>
            <hr />
          </div>
          <div className='col-2'>
            <div className='corner top-left' />
          </div>
        </div>
        {/* <!--fifth section--> */}
        <div className='row align-items-center how-it-works'>
          <div className='col-2 text-center full' style={{ marginLeft: 3 }}>
            <div className='circle'>
              <SoftwareIcon />
            </div>
          </div>
          <div className='col-8 p-0'>
            <h5>Software</h5>
            <ul className='pl-0'>
              {data.software.map(({ title, description }, i) => {
                return (
                  <li key={`software-${i}`}>
                    <b>{title}</b>
                    <p>{description}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        {/* <!-- end--> */}
        <div className='row timeline'>
          <div className='col-2'>
            <div className='corner top-right' />
          </div>
          <div className='col-8 p-0'>
            <hr />
          </div>
          <img src={Aima} alt='logo' className='logo' />
        </div>
      </div>
    </div>
    // </section>
  )
}

export default FirstAima
