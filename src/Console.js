import React from 'react';

class Gonsole extends React.Component
{

    state={
        value : 'gray@Site:~$ ',
        prompt: 'gray@Site:~$ '
    }

    constructor()
    {
        super();
        this.keyPress = this.keyPress.bind(this);
    }

    keyPress(event)
    {
        if(event.keyCode===13)//enter
        {
            var reply='reply';
            this.setState({
                value: this.state.value+'\n'+reply+'\n'+this.state.prompt
            });
        }
        else
        {
            this.setState({
                value: this.state.value+String.fromCharCode(event.keyCode) 
            });
        }
        event.preventDefault();
    }

    render()
    {
        return(
            <textarea
            color="#111"
            onKeyDown={this.keyPress}
            value={this.state.value}
            autoFocus="true"
            />
        );
    }
}

export default Gonsole;