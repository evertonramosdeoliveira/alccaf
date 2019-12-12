/** * @name CreditTag * @version 0.1.0 * @description Credit tag for open source projects * @author
Peter Butcher (PButcher) <pbutcher93[at]gmail[dot]com> **/
function CreditTag(data) {
    // Credit tag version
    this.version = '0.1.0';
    // User data object
    this.data = data;
    // Credit tag positioning
    this.position = {
        ...data.position
    };
    // Credit tag accounts
    this.accounts = {
        ...data.accounts
    };
    // Icon colour
    this.iconColour = data.colour;
    // Root attachment
    this.root = document.createElement('div');
    this
        .root
        .setAttribute('class', this.data.el);
    // Service URLs

    // Account URLs
    this.accountURLs = {};
    Object
        .keys(this.accounts)
        .forEach((el, i, arr) => {
            this.accountURLs[el] = this.URLs[el] + this.accounts[el];
        });
    // Twitter and Github SVGs

    // Add stylesheet
    var style = document.createElement('style');
    (style.styleSheet)
        ? (style.styleSheet.cssText = this.css)
        : (style.appendChild(document.createTextNode(this.css)));
    document
        .getElementsByTagName('head')[0]
        .appendChild(style);
    Object.assign(this.root.style, {
        ...this.position
    });
    // Add buttons
    Object
        .keys(this.accountURLs)
        .forEach((el, i, arr) => {
            var button = document.createElement('a');
            button.setAttribute('href', this.accountURLs[el]);
            button.setAttribute('target', '_blank');
            button.innerHTML = this.SVGs[el][this.iconColour];
            this
                .root
                .appendChild(button);
        });
}
/** * @name CreditTag.attach * @description Attaches credit tag to DOM * @author PButcher **/
CreditTag.prototype.attach = function () {
    document
        .body
        .appendChild(this.root);
}
new CreditTag({
    'el': 'creditTag',
    'colour': 'white',
    'opacity': 0.75,
    'position': {
        'bottom': '20px',
        'left': '20px'
    },
    'accounts': {
        'twitter': 'pwsbutcher',
        'github': 'pbutcher'
    }
}).attach();