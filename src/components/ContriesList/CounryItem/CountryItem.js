import { useState } from 'react'
import { FaHeartbeat, FaFileMedical } from 'react-icons/fa'
import { GiDeathSkull } from 'react-icons/gi'
import Modal from '../../Modal/Modal';
import './countryItem.css'

const CountryItem = ({ country, index }) => {
   const [modalActive, setModalActive] = useState(false)

   return (
     <div>
        <div className='covid-item' onClick={() => setModalActive(true)}>
           <h3 className='covid-item-index'>{index + 1}</h3>
           <h3 className='covid-item-country'>{country.Country}</h3>
           <h3 className='covid-item-totalConfirmed'>{country.TotalConfirmed}</h3>
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
           <h1 className='modal-country'>{country.Country}</h1>
           <div className='modal-information'>
              <p className='modal-covid-totalInfo'> <FaHeartbeat /> Total Confirmed <span>{country.TotalConfirmed}</span></p>
              <p className='modal-covid-totalInfo'> <GiDeathSkull /> Total Death <span>{country.TotalConfirmed}</span></p>
              <p className='modal-covid-totalInfo'> <FaFileMedical /> TotalRecovered <span>{country.TotalRecovered}</span></p>
           </div>
           <button className='button' onClick={() => setModalActive(false)}>OK</button>
        </Modal>
     </div>
   );
}

export default CountryItem;
