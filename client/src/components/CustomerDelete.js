import React from 'react';

class CustomerDelete extends React.Component{
    deleCustomer(id){
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }
    render(){
        return(
            <button onClick={(e)=>{this.deleCustomer(this.props.id)}}>삭제</button>
        )
    }
}

export default CustomerDelete;