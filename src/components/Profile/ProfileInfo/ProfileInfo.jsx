import React from 'react';
import mod_css from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
      <div className={mod_css.profile_info}>
          <div>
              <img src='https://i.pinimg.com/originals/a5/02/74/a502748f1f97c53a9447200eb8c6fdfa.jpg'/>
          </div>
          <div className={mod_css.description_block}>
              ava+description
          </div>
      </div>
  );
}

export default ProfileInfo;
