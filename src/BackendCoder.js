import React from 'react';
import Typical from 'react-typical';

class Backend extends React.Component
{
    state = {
        message : ['Hello',1000,'I\'m GrayHat...',1200,'I work as a Backend Coder and Web Scraper.',1500,
    'They\'re my favorite actually',800,'So you\'re finally here...',500,'Check out the console below',500,'Tell me what you want',
    1000,'Use The Help menu',500,'😀 Good Luck',1500]
    };
    render()
    {
        return(
            <Typical
            steps={this.state.message}
            loop={Infinity}
            wrapper="p"
            className={'caca'}
            />
        );
    }
}

export default Backend;