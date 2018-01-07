'use strict';

Handlebars.registerHelper('sanitize', function(html) {
    // Strip the script tags from the html, and return it as a Handlebars.SafeString
    html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    return new Handlebars.SafeString(html);
});

Handlebars.registerHelper('methodBadgeClass', function(method) {
    if(method == 'post') {
        return 'badge-success';
    } else if(method == 'put') {
        return 'badge-warning';
    } else if(method == 'get') {
        return 'badge-primary';
    } else if(method == 'delete') {
        return 'badge-danger';
    } else if(method == 'patch') {
        return 'badge-info';
    } else {
        return 'badge-secondary';
    }
});

Handlebars.registerHelper('showAuth', function(obj) {
    var types = [];
    for (var name in obj) {
        var auth = obj[name];
        types.push(auth.type);  
    }
    return (types.includes('http') || types.includes('apiKey')) ? '' : 'd-none';
});

Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '!=':
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '!==':
            return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
});

Handlebars.registerHelper('conditions', function (options) {
    var data = this;
    data.__check_conditions = true;
    return options.fn(this);
});


Handlebars.registerHelper('next', function(conditional, options) {
  if(conditional && this.__check_conditions) {
      this.__check_conditions = false;
      return options.fn(this);
  } else {
      return options.inverse(this);
  }
});