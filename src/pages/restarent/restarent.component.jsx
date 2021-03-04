import React from 'react';
import RESTARENT_DATA from './restarent-page.data.js';
//embedding collection preview to restarentpage component
import RestarentPreview from '../../components/restarent-preview/restarent-preview.component'

//class component as we need to deal with data/state
class RestarentPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collections:RESTARENT_DATA
        }
    }
  
    render(){
        const {collections} = this.state;
        return (<div className="restarent-page">
                {
                    collections.map(({id, ...otherCollectionsProps}) => (
                        <RestarentPreview key={id} {...otherCollectionsProps}/>
                    ))
                }
            </div>
            )
    }
}

export default RestarentPage;
