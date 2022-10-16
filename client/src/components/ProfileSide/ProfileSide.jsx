import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import FollowersCard from '../FollowersCard/FollowersCard'
import "./ProfileSide.css"

function ProfileSide() {
  return (
    <div className="ProfileSide">
      <LogoSearch/>
      <ProfileCard location="homepage"/>
      <FollowersCard/>
    </div>
  )
}

export default ProfileSide