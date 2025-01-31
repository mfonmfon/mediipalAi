import React from 'react'
import DoctorOnboardingSStyle from '../../signup/doctoronboarding/DoctorOnboarding.module.css'
const DoctorOnboarding = () => {
  return (
    <div className={DoctorOnboardingSStyle.doctoronboardingContainer}>
    
      <div className={DoctorOnboardingSStyle.doctoronboardingContent}>
        <form className={DoctorOnboardingSStyle.doctoronboardingForm}>
        <span className={DoctorOnboardingSStyle.doctoronboardingFirstFormTitle}>Let get to now  you</span>
          <div className={DoctorOnboardingSStyle.doctoronboardingFirstFormContent}>
            <div>
              <label>First Name</label>
              <input 
              type='first name'
              placeholder='Enter ...'
              name='first name'
              required
              />
            </div>

            <div>
              <label>Last Name</label>
              <input 
              type='last name'
              placeholder='Enter ...'
              name='last name'
              required
              />
            </div>


            <div>
              <label>Email</label>
              <input 
              type='email'
              placeholder='Enter...'
              name='email'
              required
              />
            </div>


          
          </div>

          <div className={DoctorOnboardingSStyle.doctoronboardingSecondFormContent}>

          <div>
              <label>Password</label>
              <input 
              type='password'
              placeholder='Enter...'
              name='password'
              required
              />
            </div>

            <div>
              <label>Phone Number</label>
              <input 
              type='phone number'
              placeholder='Enter...'
              name='phone number'
              required
              />
            </div>
            
            <div>
              <label>Feild of Specialty</label>
              <input  
              type='dropdown'
              placeholder='Enter...'
              name='feild of specialty'
              required
              />
            </div>

            <div>
              <label>Licence</label>
              <input 
              type='file'
              placeholder='Select File...'
              name='licence'
              required
              />
            </div>


            <div>
              <button className={DoctorOnboardingSStyle.onboardingButton} type='submit'>Confirm</button>
            </div>

          </div>

        </form>

      </div>
      
    </div>
  )
}

export default DoctorOnboarding
