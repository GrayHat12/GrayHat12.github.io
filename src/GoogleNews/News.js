import Article from './Article';
const request = require('request');

class GrayNews {
    search = '';
    madeReq = false;
    reqerr = null;
    lnk = "https://news.google.com/search?q=";
    code = '';
    out = [];
    constructor(search) {
        this.search = search;
        this.lnk = "https://news.google.com/search?q=" + encodeURI(this.search);
    }

    getSource() {
        if (this.madeReq != null)
            return this.lnk;
        else
            return -1;
    }

    getRequestError() {
        if (this.reqerr == null)
            return null;
        else
            return this.reqerr;
    }

    async makeRequest() {
        var options = {
            method: 'GET',
            url: 'https://cors-grayhat.herokuapp.com/' + this.lnk,
            headers: {
                'Origin': 'https://news.google.com/',
                'Referer': 'https://news.google.com/'
            }
        };
        request(options, (error, response, body) => {
            if (error) {
                this.reqerr = error;
                this.madeReq = false;
                return false;
            }
            this.code = body;
            this.madeReq = true;
        });
    }

    getArticles() {
        var indent = '<div class=\"NiLAwe y6IFtc R7GTQ keNKEd j7vNaf nID9nc\">';
        var endent = '</article>';
        this.out = [];
        while (this.code.indexOf(indent) !== -1) {
            this.code = this.code.substring(this.code.indexOf(indent));
            this.out.push(new Article(this.code.substring(0, this.code.indexOf(endent))));
            this.code = this.code.substring(this.code.indexOf(endent));
        }
        return this.out;
    }
}

export default GrayNews;