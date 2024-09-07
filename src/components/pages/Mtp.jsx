import data from '../../data.json'

import '../../styles/mtp.css'
import GavelIcon from '@mui/icons-material/Gavel';
import { ArrowDropDown } from '@mui/icons-material';
import { useState } from 'react';
import { ArrowDropUp } from '@mui/icons-material';
import PeopleIcon from '@mui/icons-material/People';
// import { People } from '@mui/icons-material';
import { componentDitMount } from '../Utils.js';

export default function Mtp() {
  const [isOpenOfficer, setIsOpenOfficer] = useState(false)
  const [isOpenStu, setIsOpenStu] = useState(false)

  function handleOpenOfficer() {
    setIsOpenOfficer(!isOpenOfficer)
  }

  function handleOpenStu() {
    setIsOpenStu(!isOpenStu)
  }

  function getFirstName(str) {
    return str.split(' ').slice(0, 1).join(" ")
  }

  const officerMemCount = data[0].officers.length
  const stuMemCount = data[0].students.length

  componentDitMount()

  return (
    <div className='mtp --margin-bottom'>
      <div className="container">

        <div className="mtp__title-wrapper">
          <h1 className='mtp__title --title-fs'>Meet The Peeps</h1>
          <span className='mtp__desc'>Officers/Students of DIT 1-5 2024</span>
        </div>
        <div className="mtp__student-btn-wrapper">

          <div className="mtp__btn-student-wrapper">
            <a onClick={handleOpenOfficer} className='mtp__btn-title'>
              <div className="mtp__title-icon-wrapper --gen-fs"><GavelIcon /> <span className='--gen-fs'>Officers <span className='mtp__mem-count'>{`(${officerMemCount} ${officerMemCount <= 1 ? "member" : "members"})`}</span></span></div>
              {isOpenOfficer ? <ArrowDropUp /> : <ArrowDropDown />}
            </a>
            <div className={`mtp__officers ${isOpenOfficer ? "--open" : ""}`}>
              {data[0].officers && data[0].officers.map(item => {
                return (
                  <a key={item.id} href={item.fbLink} target='_blank'>
                    <div key={item.id} className="mtp__student-wrapper">
                      <div className="mtp__img-wrapper">
                        <img loading='lazy' className="mtp__image --gen-fs" src={item.image} alt={`${getFirstName(item.name)}'s photo`} />
                      </div>
                      <div className="mtp__student-desc">
                        <p className='mtp__student-name --gen-fs'>{item.name}</p>
                        <p className='mtp__student-pos --gen-fs'>{item.pos}</p>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
          <div className="mtp__btn-student-wrapper">
            <a onClick={handleOpenStu} className='mtp__btn-title'>
              <div className="mtp__title-icon-wrapper"><PeopleIcon /> <span className='--gen-fs'>Students <span className='mtp__mem-count'>{`(${stuMemCount} ${stuMemCount <= 1 ? "member" : "members"})`}</span></span></div>
              {isOpenStu ? <ArrowDropUp /> : <ArrowDropDown />}
            </a>
            <div className={`mtp__officers ${isOpenStu ? "--open" : ""}`}>
              {data[0].students && data[0].students.map(item => {
                return (
                  <div key={item.id} className="mtp__student-wrapper">
                    <div className="mtp__img-wrapper">
                      <img loading='lazy' className="mtp__image" src={item.image} alt={`${getFirstName(item.name)}'s photo`} />
                    </div>
                    <div className="mtp__student-desc">
                      <p className='mtp__student-name --gen-fs'>{item.name}</p>
                      <p className='mtp__student-pos --gen-fs'>{item.pos}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}
