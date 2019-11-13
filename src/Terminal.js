import React from 'react';
import Terminal from 'react-console-emulator';

class Germinal extends React.Component {
    constructor(props)
    {
        super(props);
        this.terminal = React.createRef();
    }

    commands = {
        echo: {
            description: 'Echo a passed string.',
            usage: 'echo <string>',
            fn: function () {
                return `${Array.from(arguments).join(' ')}`
            }
        },
        resume: {
            description: 'Download my resume.',
            usage: 'resume',
            fn: () => { window.open('https://grayhat12.github.io/shared/RahulSingh.pdf', '_blank') }
        },
        compiler: {
            description: 'Open the Gray Compiler in a new page',
            usage: 'compiler',
            fn: () => { window.open('https://grayhat12.github.io/compiler/', '_blank') }
        },
        github: {
            description: 'Opens my Github Profile Page',
            usage: 'github',
            fn: () => { window.open('https://github.com/GrayHat12', '_blank') }
        },
        about: {
            description: 'Know about ME',
            usage: 'about',
            fn: function () {
                return 'I\'m GrayHat\nI Love to code\nDon\'t expect much frontend from my part.\nI\'m good at backend though\nCurrently a student at Sharda University but am open to Paid Projects\nContact me at < grayhathacks10@gmail.com >\nI specialize in :\n1. > Web Scraping\n2. > Web Development (Reactjs)\n3. > App Development\n4. > Desktop App Development\n5. Bot Development'
            }
        },
        donate: {
            description: 'Donate ME',
            usage: 'donate',
            fn: () => { window.open('https://www.instamojo.com/@grayhat/', '_blank') }
        },
        facebook: {
            description: 'Facebook Page',
            usage: 'facebook',
            fn: () => { window.open('https://www.facebook.com/grayhathacks/', '_blank') }
        },
        twitter: {
            description: 'Facebook Page',
            usage: 'facebook',
            fn: () => { window.open('https://twitter.com/gray_rahul', '_blank') }
        },
        instagram: {
            description: 'Facebook Page',
            usage: 'facebook',
            fn: () => { window.open('https://www.instagram.com/gray_._hat/', '_blank') }
        },
        linkedin: {
            description: 'Facebook Page',
            usage: 'facebook',
            fn: () => { window.open('https://www.linkedin.com/in/grayhat', '_blank') }
        },
        old: {
            description: 'Check out the previous version',
            usage: 'old',
            fn: () => { window.open('https://grayhat12.github.io/old/index.html') }
        },
        /*news: {
            description: 'Google News Scraper',
            usage: 'news <topic>',
            terminal: this.terminal,
            fn: async function () {
                var search=Array.from(arguments).join(' ');
                var ob = new GrayNews(search);
                await ob.makeRequest();
                var articles = ob.getArticles();
                console.log(articles);
                //var out = '';
                const terminal = this.terminal.current;
                terminal.pushToStdout(articles[0].getTitle());
                return 'Processing..';
            }
        }*/
    }

    render() {
        return (
            <Terminal
                ref={this.terminal}
                commands={this.commands}
                welcomeMessage={'Welcome to the Gray terminal! - Germinal\nUse `help` for help menu'}
                promptLabel={'gray@Site:~$'}
                errorText='Invalid Command. Please use help'
                autoFocus
            />
        );
    }
}

export default Germinal;