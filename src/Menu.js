import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import SettingsIcon from '@material-ui/icons/Settings';
import ContactsIcon from '@material-ui/icons/Contacts';
import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import React from 'react';
import { FloatingMenu, MainButton, ChildButton } from 'react-floating-button-menu';

class Menu extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <FloatingMenu
                slideSpeed={500}
                direction="down"
                spacing={8}
                isOpen={this.state.isOpen}
            >
                <MainButton iconResting={<MenuIcon style={{ fontSize: 20 }} nativeColor="black" />}
                    iconActive={<MenuOpenIcon style={{ fontSize: 20 }} nativeColor="black" />}
                    backgroundColor="black"
                    onClick={() => this.setState({ isOpen: !this.state.isOpen })}
                    size={56}
                />
                <ChildButton
                    icon={<HomeIcon style={{ fontSize: 20 }} nativeColor="black" />}
                    backgroundColor="white"
                    size={40}
                    onClick={() => console.log('First button clicked')}
                />
                <ChildButton
                    icon={<InfoIcon style={{ fontSize: 20 }} nativeColor="black" />}
                    backgroundColor="white"
                    size={40}
                    onClick={() => console.log('First button clicked')}
                />
                <ChildButton
                    icon={<PictureAsPdfIcon style={{ fontSize: 20 }} nativeColor="black" />}
                    backgroundColor="white"
                    size={40}
                    onClick={() => console.log('First button clicked')}
                />
                <ChildButton
                    icon={<SettingsIcon style={{ fontSize: 20 }} nativeColor="black" />}
                    backgroundColor="white"
                    size={40}
                    onClick={() => console.log('First button clicked')}
                />
                <ChildButton
                    icon={<ContactsIcon style={{ fontSize: 20 }} nativeColor="black" />}
                    backgroundColor="white"
                    size={40}
                    onClick={() => console.log('First button clicked')}
                />
                <ChildButton
                    icon={<CodeIcon style={{ fontSize: 20 }} nativeColor="black" />}
                    backgroundColor="white"
                    size={40}
                    onClick={() => console.log('First button clicked')}
                />
                <ChildButton
                    icon={<GitHubIcon style={{ fontSize: 20 }} nativeColor="black" />}
                    backgroundColor="white"
                    size={40}
                    onClick={() => console.log('First button clicked')}
                />
            </FloatingMenu>
        );
    }
}

export default Menu;