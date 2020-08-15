import React from 'react'
import PropTypes from 'prop-types'

const Dashboard = ({products}) => {
    return (
        <div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a> <i className="fa fa-angle-right" /></li>
        </ol>
        {/*four-grids here*/}
        <div className="four-grids">
          <div className="col-md-3 four-grid">
            <div className="four-agileits">
              <div className="icon">
                <i className="glyphicon glyphicon-user" aria-hidden="true" />
              </div>
              <div className="four-text">
                <h3>Tổng sản phẩm</h3>
                <h4> {products.length}</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3 four-grid">
            <div className="four-agileinfo">
              <div className="icon">
                <i className="glyphicon glyphicon-list-alt" aria-hidden="true" />
              </div>
              <div className="four-text">
                <h3>Clients</h3>
                <h4>15,520</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3 four-grid">
            <div className="four-w3ls">
              <div className="icon">
                <i className="glyphicon glyphicon-folder-open" aria-hidden="true" />
              </div>
              <div className="four-text">
                <h3>Projects</h3>
                <h4>12,430</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3 four-grid">
            <div className="four-wthree">
              <div className="icon">
                <i className="glyphicon glyphicon-briefcase" aria-hidden="true" />
              </div>
              <div className="four-text">
                <h3>Old Projects</h3>
                <h4>14,430</h4>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
      
    )
}

Dashboard.propTypes = {

}

export default Dashboard
