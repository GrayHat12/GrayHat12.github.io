class Article {
    article = '';
    constructor(article) {
        this.article = article;
        this.getAuthor = this.getAuthor.bind(this);
        this.getClass1 = this.getClass1.bind(this);
        this.getClass2 = this.getClass2.bind(this);
        this.getImage = this.getImage.bind(this);
        this.getPublishedAt = this.getPublishedAt.bind(this);
        this.getShortDesc = this.getShortDesc.bind(this);
        this.getTitle = this.getTitle.bind(this);
        this.getUrl = this.getUrl.bind(this);
    }
    getTitle() {
        var ident = 'class=\"DY5T1d\" >';
        var endit = '</a>';
        var si = this.article.indexOf(ident);
        if (si === -1) {
            return 'NOT FOUND';
        }
        si += ident.length;
        var ei = (this.article.substring(si)).indexOf(endit);
        if (ei === -1) {
            return this.article.substring(si) + 'END NOT FOUND';
        }
        ei += si;
        return this.article.substring(si, ei);
    }

    getAuthor() {
        var identifier = "wEwyrc";
        var start = false;
        var start2 = false;
        var si = -1;
        var ei = -1;
        var i = 0;
        while (i < this.article.length - identifier.length) {
            if (this.article.substring(i, i + identifier.length) === identifier) {
                start = true;
            }
            if (start === true && this.article.charAt(i) === '>' && this.article.charAt(i + 1) !== '<') {
                si = i + 1;
                start2 = true;
            }
            if (start2 === true && this.article.charAt(i) === '<') {
                ei = i - 1;
                break;
            }
            i += 1;
        }
        return this.article.substring(si, ei + 1);
    }

    getClass1() {
        var idnt = 'class=\"DY5T1d\" >';
        var si = this.article.indexOf(idnt) + idnt.length;
        var tmp1 = this.article.substring(si);
        var ei = this.article.substring(si).indexOf('</a>');
        return tmp1.substring(0, ei);
    }

    getClass2() {
        var idnt = 'class=\"xBbh9\">';
        var si = this.article.indexOf(idnt) + idnt.length;
        var tmp1 = this.article.substring(si);
        var ei = this.article.substring(si).indexOf('</span');
        return tmp1.substring(0, ei);
    }

    getShortDesc() {
        var out = this.getClass1() + ' . ' + this.getClass2();
        out = unescape(out);
        return out;
    }

    getImage() {
        var ident = 'src=\"';
        var endnt = '\"';
        var art = this.article.substring(this.article.indexOf(ident) + ident.length);
        return art.substring(0, art.indexOf(endnt));
    }

    getUrl() {
        var url = "\"https://news.google.com";
        var identifier = "./articles/";
        var si = -1;
        var ei = -1;
        var i = 0;
        while (i < this.article.length - identifier.length) {
            if (this.article.substring(i, i + identifier.length) === identifier) {
                si = i - 1;
            }
            else if (i > si && si > -1 && this.article.charAt(i) == '\"') {
                ei = i;
                break;
            }
            i += 1;
        }
        return url + this.article.substring(si + 2, ei) + "\"";
    }

    getPublishedAt() {
        var snip = this.article.substring(this.article.indexOf('datetime=\"'));
        snip = snip.substring(snip.indexOf('>'));
        return snip.substring(0, snip.indexOf('<'));
    }
}

export default Article;