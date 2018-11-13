import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component{
    render(){
        let business = this.props.businesses.map(business => {
            return <Business key={business.id} business={business} />
        })

        return(
            <div className="BusinessList">
                {business}
            </div>
        );
    }
}

export default BusinessList;