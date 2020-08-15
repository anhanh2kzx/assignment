import React from 'react'
import PropTypes from 'prop-types'

const Topbar = props => {
  return (
    <div>
      <div className="header-main">
        <div className="logo-w3-agile">
          <h1><a href="index.html">Pooled</a></h1>
        </div>
        <div className="w3layouts-left">
          {/*search-box*/}
          <div className="w3-search-box">
            <form action="#" method="post">
              <input type="text" placeholder="Search..." required />
              <input type="submit" defaultValue />
            </form>
          </div>{/*//end-search-box*/}
          <div className="clearfix"> </div>
        </div>
        <div className="w3layouts-right">
          <div className="profile_details_left">{/*notifications of menu start */}
            <ul className="nofitications-dropdown">
              <li className="dropdown head-dpdn">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-envelope" /><span className="badge">3</span></a>
                <ul className="dropdown-menu">
                  <li>
                    <div className="notification_header">
                      <h3>You have 3 new messages</h3>
                    </div>
                  </li>
                  <li><a href="#">
                    <div className="user_img"><img src="images/in11.jpg" alt="" /></div>
                    <div className="notification_desc">
                      <p>Lorem ipsum dolor</p>
                      <p><span>1 hour ago</span></p>
                    </div>
                    <div className="clearfix" />
                  </a></li>
                  <li className="odd"><a href="#">
                    <div className="user_img"><img src="images/in10.jpg" alt="" /></div>
                    <div className="notification_desc">
                      <p>Lorem ipsum dolor </p>
                      <p><span>1 hour ago</span></p>
                    </div>
                    <div className="clearfix" />
                  </a></li>
                  <li><a href="#">
                    <div className="user_img"><img src="images/in9.jpg" alt="" /></div>
                    <div className="notification_desc">
                      <p>Lorem ipsum dolor</p>
                      <p><span>1 hour ago</span></p>
                    </div>
                    <div className="clearfix" />
                  </a></li>
                  <li>
                    <div className="notification_bottom">
                      <a href="#">See all messages</a>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown head-dpdn">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-bell" /><span className="badge blue">3</span></a>
                <ul className="dropdown-menu">
                  <li>
                    <div className="notification_header">
                      <h3>You have 3 new notification</h3>
                    </div>
                  </li>
                  <li><a href="#">
                    <div className="user_img"><img src="images/in8.jpg" alt="" /></div>
                    <div className="notification_desc">
                      <p>Lorem ipsum dolor</p>
                      <p><span>1 hour ago</span></p>
                    </div>
                    <div className="clearfix" />
                  </a></li>
                  <li className="odd"><a href="#">
                    <div className="user_img"><img src="images/in6.jpg" alt="" /></div>
                    <div className="notification_desc">
                      <p>Lorem ipsum dolor</p>
                      <p><span>1 hour ago</span></p>
                    </div>
                    <div className="clearfix" />
                  </a></li>
                  <li><a href="#">
                    <div className="user_img"><img src="images/in7.jpg" alt="" /></div>
                    <div className="notification_desc">
                      <p>Lorem ipsum dolor</p>
                      <p><span>1 hour ago</span></p>
                    </div>
                    <div className="clearfix" />
                  </a></li>
                  <li>
                    <div className="notification_bottom">
                      <a href="#">See all notifications</a>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown head-dpdn">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-tasks" /><span className="badge blue1">9</span></a>
                <ul className="dropdown-menu">
                  <li>
                    <div className="notification_header">
                      <h3>You have 8 pending task</h3>
                    </div>
                  </li>
                  <li><a href="#">
                    <div className="task-info">
                      <span className="task-desc">Database update</span><span className="percentage">40%</span>
                      <div className="clearfix" />
                    </div>
                    <div className="progress progress-striped active">
                      <div className="bar yellow" style={{ width: '40%' }} />
                    </div>
                  </a></li>
                  <li><a href="#">
                    <div className="task-info">
                      <span className="task-desc">Dashboard done</span><span className="percentage">90%</span>
                      <div className="clearfix" />
                    </div>
                    <div className="progress progress-striped active">
                      <div className="bar green" style={{ width: '90%' }} />
                    </div>
                  </a></li>
                  <li><a href="#">
                    <div className="task-info">
                      <span className="task-desc">Mobile App</span><span className="percentage">33%</span>
                      <div className="clearfix" />
                    </div>
                    <div className="progress progress-striped active">
                      <div className="bar red" style={{ width: '33%' }} />
                    </div>
                  </a></li>
                  <li><a href="#">
                    <div className="task-info">
                      <span className="task-desc">Issues fixed</span><span className="percentage">80%</span>
                      <div className="clearfix" />
                    </div>
                    <div className="progress progress-striped active">
                      <div className="bar  blue" style={{ width: '80%' }} />
                    </div>
                  </a></li>
                  <li>
                    <div className="notification_bottom">
                      <a href="#">See all pending tasks</a>
                    </div>
                  </li>
                </ul>
              </li>
              <div className="clearfix"> </div>
            </ul>
            <div className="clearfix"> </div>
          </div>
          {/*notification menu end */}
          <div className="clearfix"> </div>
        </div>
        <div className="profile_details w3l">
          <ul>
            <li className="dropdown profile_details_drop">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <div className="profile_img">
                  <span className="prfil-img"><img src="images/in4.jpg" alt="" /> </span>
                  <div className="user-name">
                    <p>Malorum</p>
                    <span>Administrator</span>
                  </div>
                  <i className="fa fa-angle-down" />
                  <i className="fa fa-angle-up" />
                  <div className="clearfix" />
                </div>
              </a>
              <ul className="dropdown-menu drp-mnu">
                <li> <a href="#"><i className="fa fa-cog" /> Settings</a> </li>
                <li> <a href="#"><i className="fa fa-user" /> Profile</a> </li>
                <li> <a href="#"><i className="fa fa-sign-out" /> Logout</a> </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  )
}

Topbar.propTypes = {

}

export default Topbar
