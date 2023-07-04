import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="leftLogo">DivyaSocial</div>
      </div>

      <div className="topbarCenter">
        <div className="Search">
          <SearchIcon />
          <input placeholder="Search for Friends, groups or videos"  className="searchInput"/>
        </div>
      </div>

      <div className="topbarRight"></div>
      <div className="topbarLinks">
        <span className="topbarLink">Homepage</span>
        <span className="topbarLink">Timeline</span>
      </div>
      <div className="topbarIcon">
        <div className="iconItem">
          <PersonIcon />
          <span className="iconBadge">1</span>
        </div>
        <div className="iconItem">
          <ChatIcon />
          <span className="iconBadge">1</span>
        </div>
        <div className="iconItem">
          <NotificationsIcon />
          <span className="iconBadge">1</span>
        </div>
      </div>
    </div>
  )
}

export default Topbar