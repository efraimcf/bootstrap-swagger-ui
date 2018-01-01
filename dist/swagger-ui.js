/**
 * swagger-ui - Swagger UI is a dependency-free collection of HTML, JavaScript, and CSS assets that dynamically generate beautiful documentation from a Swagger-compliant API
 * @version v2.1.1-M2
 * @link http://swagger.io
 * @license Apache 2.0
 */
(function(){this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["apikey_button_view"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"auth_button\" id=\"apikey_button\">\n    <!--img class=\"auth_icon\" alt=\"apply api key\" src=\"images/apikey.jpeg\"-->\n</div>\n<div class=\"auth_container\" id=\"apikey_container\">\n  <div class=\"key_input_container\">\n    <div class=\"auth_label\">"
    + escapeExpression(((helper = (helper = helpers.keyName || (depth0 != null ? depth0.keyName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"keyName","hash":{},"data":data}) : helper)))
    + "</div>\n    <input placeholder=\"api_key\" class=\"auth_input\" id=\"input_apiKey_entry\" name=\"apiKey\" type=\"text\"/>\n    <div class=\"auth_submit\"><a class=\"auth_submit_button\" id=\"apply_api_key\" href=\"#\">apply</a></div>\n  </div>\n</div>";
},"useData":true});
this["Handlebars"]["templates"]["basic_auth_button_view"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"auth_button\" id=\"basic_auth_button\"><img class=\"auth_icon\" src=\"images/password.jpeg\"></div>\n<div class=\"auth_container\" id=\"basic_auth_container\">\n  <div class=\"key_input_container\">\n    <div class=\"auth_label\">Username</div>\n    <input placeholder=\"username\" class=\"auth_input\" id=\"input_username\" name=\"username\" type=\"text\"/>\n    <div class=\"auth_label\">Password</div>\n    <input placeholder=\"password\" class=\"auth_input\" id=\"input_password\" name=\"password\" type=\"password\"/>\n    <div class=\"auth_submit\"><a class=\"auth_submit_button\" id=\"apply_basic_auth\" href=\"#\">apply</a></div>\n  </div>\n</div>\n";
  },"useData":true});
this["Handlebars"]["templates"]["content_type"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.produces : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "	<option value=\"";
  stack1 = lambda(depth0, depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">";
  stack1 = lambda(depth0, depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</option>\n";
},"4":function(depth0,helpers,partials,data) {
  return "  <option value=\"application/json\">application/json</option>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<label for=\"contentType\"></label>\n<select name=\"contentType\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.produces : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</select>\n";
},"useData":true});
'use strict';


$(function () {

  // Helper function for vertically aligning DOM elements
  // http://www.seodenver.com/simple-vertical-align-plugin-for-jquery/
  $.fn.vAlign = function () {
    return this.each(function () {
      var ah = $(this).height();
      var ph = $(this).parent().height();
      var mh = (ph - ah) / 2;
      $(this).css('margin-top', mh);
    });
  };

  $.fn.stretchFormtasticInputWidthToParent = function () {
    return this.each(function () {
      var p_width = $(this).closest("form").innerWidth();
      var p_padding = parseInt($(this).closest("form").css('padding-left'), 10) + parseInt($(this).closest('form').css('padding-right'), 10);
      var this_padding = parseInt($(this).css('padding-left'), 10) + parseInt($(this).css('padding-right'), 10);
      $(this).css('width', p_width - p_padding - this_padding);
    });
  };

  $('form.formtastic li.string input, form.formtastic textarea').stretchFormtasticInputWidthToParent();

  // Vertically center these paragraphs
  // Parent may need a min-height for this to work..
  $('ul.downplayed li div.content p').vAlign();

  // When a sandbox form is submitted..
  $("form.sandbox").submit(function () {

    var error_free = true;

    // Cycle through the forms required inputs
    $(this).find("input.required").each(function () {

      // Remove any existing error styles from the input
      $(this).removeClass('is-invalid');

      // Tack the error style on if the input is empty..
      if ($(this).val() === '') {
        $(this).addClass('is-invalid');
        $(this).wiggle();
        error_free = false;
      }

    });

    return error_free;
  });

});

function clippyCopiedCallback() {
  $('#api_key_copied').fadeIn().delay(1000).fadeOut();

  // var b = $("#clippy_tooltip_" + a);
  // b.length != 0 && (b.attr("title", "copied!").trigger("tipsy.reload"), setTimeout(function() {
  //   b.attr("title", "copy to clipboard")
  // },
  // 500))
}

// Logging function that accounts for browsers that don't have window.console
function log() {
  log.history = log.history || [];
  log.history.push(arguments);
  if (this.console) {
    console.log(Array.prototype.slice.call(arguments)[0]);
  }
}

// Handle browsers that do console incorrectly (IE9 and below, see http://stackoverflow.com/a/5539378/7913)
if (Function.prototype.bind && console && typeof console.log === "object") {
  [
    "log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"
  ].forEach(function (method) {
      console[method] = this.bind(console[method], console);
    }, Function.prototype.call);
}

window.Docs = {

  shebang: function () {

    // If shebang has an operation nickname in it..
    // e.g. /docs/#!/words/get_search
    var fragments = $.param.fragment().split('/');
    fragments.shift(); // get rid of the bang

    switch (fragments.length) {
      case 1:
        break;
      case 2:
        var target = '#resources_nav [data-resource] [data-endpoint=' + fragments[0] + '_' + fragments[1] + ']',
          n = $('#swagger_sidebar').find(target),
          attr = n.attr('data-selected');

        if (typeof attr == typeof undefined) {
          n.trigger("click");
        }
        break;
    }

  }

};

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
    } else {
        return 'badge-info';
    }
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
this["Handlebars"]["templates"]["main"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "                <div class=\"card-body\">\n                    <h5 class=\"card-title\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h5>\n                    <p class=\"card-text\">";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.description : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</p>  \n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.email : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.basePath : depth0), "||", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.version : stack1), {"name":"ifCond","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                </div>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                        <p class=\"card-text\">\n                            <strong>Contact</strong>: <a href=\"mailto:"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.email : stack1), depth0))
    + "?subject="
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.title : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.email : stack1), depth0))
    + "</a>\n                        </p>\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "                        <p class=\"card-text\">\n                            <span class=\"text-muted text-uppercase\">\n                                ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.basePath : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                                ";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.basePath : depth0), "&&", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.version : stack1), {"name":"ifCond","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.version : stack1), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                            </span>\n                        </p>\n";
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<small>Base URL:</small> "
    + escapeExpression(((helper = (helper = helpers.basePath || (depth0 != null ? depth0.basePath : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"basePath","hash":{},"data":data}) : helper)));
},"7":function(depth0,helpers,partials,data) {
  return " &nbsp;|&nbsp; ";
  },"9":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<small>api version:</small> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.version : stack1), depth0));
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"swagger_sidebar\" class=\"col-12 col-lg-3\">\n    <div class=\"row bg-light\">\n        <div class=\"col-12 pt-3\">\n            <div class=\"auth_main_container\"></div>\n            <button data-close type=\"button\" class=\"close d-sm-block d-lg-none\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <div class=\"form-group\">\n                <label for=\"input_baseUrl\">URL</label>\n                <input type=\"text\" autocorrect=\"off\" class=\"form-control\" id=\"input_baseUrl\" placeholder=\"http://example.com/api\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"input_apiKey\">Token</label>\n                <div class=\"input-group\">\n                  <input type=\"text\" autocorrect=\"off\" class=\"form-control\" id=\"input_apiKey\" placeholder=\"Enter api key or token\">\n                  <div class=\"input-group-append\">\n                    <button data-add-scope id=\"explore\" class=\"btn btn-secondary\" type=\"button\"><i class=\"fa fa-arrow-right\"></i></button>\n                  </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"sticky-top mb-3\">\n        <div id=\"sticky_nav\" class=\"pt-2 pb-2\">\n            <div class=\"row\">\n                <div data-navigator>\n                    <!-- TODO: Keep this?\n                        <div data-resource=\"\" label=\"Tools\" class=\"d-sm-block d-lg-none\">\n                            <div class=\"item\" data-tg-switch=\"\">Swagger resource <span class=\"status\"></span></div>\n                        </div>\n                    -->\n                    <div id=\"resources_nav\" data-children=\".parent_menu\"></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card bg-light\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.info : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n    </div>\n</div>\n\n<div id=\"resources_container\" class=\"col-12 col-lg-9\">\n    <div id=\"resources\" class=\"samples-collapsed\"></div>\n</div>\n";
},"useData":true});
this["Handlebars"]["templates"]["operation"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "badge-secondary";
  },"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helpers.methodBadgeClass || (depth0 && depth0.methodBadgeClass) || helperMissing).call(depth0, (depth0 != null ? depth0.method : depth0), {"name":"methodBadgeClass","hash":{},"data":data})));
  },"5":function(depth0,helpers,partials,data) {
  return "                    <h6>Warning: Deprecated</h6>\n";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                    <div class=\"markdown action-summary\">";
  stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"9":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                        <h6>Parameters</h6>\n                        <div data-content class=\"operation-params card card-body pb-1 bg-light mb-3\" id=\"parm-"
    + escapeExpression(((helper = (helper = helpers.parentId || (depth0 != null ? depth0.parentId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"parentId","hash":{},"data":data}) : helper)))
    + "_"
    + escapeExpression(((helper = (helper = helpers.nickname || (depth0 != null ? depth0.nickname : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"nickname","hash":{},"data":data}) : helper)))
    + "\"></div>\n";
},"11":function(depth0,helpers,partials,data) {
  return "                                <button type=\"button\" class=\"api-ic ic-off float-right btn btn-outline-secondary text-uppercase\">Oauth</button>\n";
  },"13":function(depth0,helpers,partials,data) {
  return "                            <div class=\"response-content-type card card-body pb-3 bg-light mb-3\"/>\n";
  },"15":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                        <h6 class=\"pt-3\" data-control>\n                            Responses\n                        </h6>\n\n                        <div data-content class=\"responses-wrapper table-responsive\" id=\"response-"
    + escapeExpression(((helper = (helper = helpers.parentId || (depth0 != null ? depth0.parentId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"parentId","hash":{},"data":data}) : helper)))
    + "_"
    + escapeExpression(((helper = (helper = helpers.nickname || (depth0 != null ? depth0.nickname : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"nickname","hash":{},"data":data}) : helper)))
    + "\">\n                            <table class=\"table\">\n                                <tbody class=\"operation-status\">\n                                </tbody>\n                            </table>\n                        </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing, buffer = "<div class=\"operations\">\n    <div class=\""
    + escapeExpression(((helper = (helper = helpers.method || (depth0 != null ? depth0.method : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"method","hash":{},"data":data}) : helper)))
    + " operation\" id=\""
    + escapeExpression(((helper = (helper = helpers.parentId || (depth0 != null ? depth0.parentId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"parentId","hash":{},"data":data}) : helper)))
    + "_"
    + escapeExpression(((helper = (helper = helpers.nickname || (depth0 != null ? depth0.nickname : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"nickname","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"row\">\n            <div class=\"content col-lg-6 pt-3 pb-3\">\n                <div class=\"heading mb-3\">\n                    <div class=\"d-flex align-items-center\">\n                        <div class=\"mr-auto\">\n                            <a class=\"opperation_link\" href=\"#!/"
    + escapeExpression(((helper = (helper = helpers.encodedParentId || (depth0 != null ? depth0.encodedParentId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"encodedParentId","hash":{},"data":data}) : helper)))
    + "/"
    + escapeExpression(((helper = (helper = helpers.nickname || (depth0 != null ? depth0.nickname : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"nickname","hash":{},"data":data}) : helper)))
    + "\"><h2 class=\"operation-title\">"
    + escapeExpression(((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"summary","hash":{},"data":data}) : helper)))
    + "</h2></a>\n                        </div>\n                        <a href=\"javascript:;\" class=\"toggle-samples text-nowrap text-muted\">\n                            <small class=\"text\">Show Samples</small> <i class=\"fa fa-code\"></i>\n                        </a>\n                    </div>\n                    <h4>\n                        <span class=\"http_method badge ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.deprecated : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">"
    + escapeExpression(((helper = (helper = helpers.method || (depth0 != null ? depth0.method : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"method","hash":{},"data":data}) : helper)))
    + "</span>\n                        <span class=\"path text-muted\">"
    + escapeExpression(((helper = (helper = helpers.path || (depth0 != null ? depth0.path : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"path","hash":{},"data":data}) : helper)))
    + "</span>\n                    </h4>\n                </div>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.deprecated : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.description : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n\n                <form accept-charset=\"UTF-8\" class=\"sandbox\">\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.parameters : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                    <h6 data-control>Test this endpoint</h6>\n\n                    <div id=\"test-"
    + escapeExpression(((helper = (helper = helpers.parentId || (depth0 != null ? depth0.parentId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"parentId","hash":{},"data":data}) : helper)))
    + "_"
    + escapeExpression(((helper = (helper = helpers.nickname || (depth0 != null ? depth0.nickname : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"nickname","hash":{},"data":data}) : helper)))
    + "\">\n                        <div class=\"sandbox_header mb-5\" data-content>\n                            <input class=\"submit btn btn-primary text-uppercase\" name=\"commit\" type=\"submit\" value=\"Try\"\n                                   data-toggle=\"modal\" data-target=\"#get_clients-modal-request\">\n\n";
  stack1 = ((helper = (helper = helpers.oauth || (depth0 != null ? depth0.oauth : depth0)) != null ? helper : helperMissing),(options={"name":"oauth","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.oauth) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  buffer += "                        </div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.type : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                    </div>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.responseMessages : depth0), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                </form>\n            </div>\n            <div class=\"samples col-lg-6 pt-3 pb-3 bg-secondary\">\n                <span class=\"model-signature\"></span>\n            </div>\n        </div>\n\n\n        <div class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" id=\"modal-"
    + escapeExpression(((helper = (helper = helpers.parentId || (depth0 != null ? depth0.parentId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"parentId","hash":{},"data":data}) : helper)))
    + "_"
    + escapeExpression(((helper = (helper = helpers.nickname || (depth0 != null ? depth0.nickname : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"nickname","hash":{},"data":data}) : helper)))
    + "\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title text-center\">\n                            "
    + escapeExpression(((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"summary","hash":{},"data":data}) : helper)))
    + " <span class=\"http_method badge ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.deprecated : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">"
    + escapeExpression(((helper = (helper = helpers.method || (depth0 != null ? depth0.method : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"method","hash":{},"data":data}) : helper)))
    + "</span>\n                        </h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <i class=\"fa fa-times\"></i>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        <div class=\"response\">\n                            <small class=\"text-uppercase\">Request URL</small>\n                            <div class=\"mt-2 mb-3 request_url\"></div>\n\n                            <small class=\"text-uppercase\">Response Body</small>\n                            <div class=\"mt-2 mb-3 response_body\"></div>\n\n                            <small class=\"text-uppercase\">Response Code</small>\n                            <div class=\"mt-2 mb-3 response_code\"></div>\n\n                            <small class=\"text-uppercase\">Response Headers</small>\n                            <div class=\"mt-2 response_headers\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <hr class=\"m-0\"/>\n</div>";
},"useData":true});
this["Handlebars"]["templates"]["param_list"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " multiple=\"multiple\"";
  },"3":function(depth0,helpers,partials,data) {
  return "";
},"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0['default'] : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  return "                    <option selected=\"\" value=\"></option>\n";
  },"8":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isDefault : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.program(11, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"9":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <option selected=\"\" value=\""
    + escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + " (default)</option>\n";
},"11":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <option value=\""
    + escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"13":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <small><pre class=\"mb-0 mr-2\"><code class=\"code-signature hljs rounded\">"
    + escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"type","hash":{},"data":data}) : helper)))
    + "</code></pre></small>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<div class=\"form-group row\">\n    <label class=\"param-property text-nowrap col-lg-2 text-lg-right col-form-label\">\n        "
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + ":</br>\n        <small class=\"text-muted\"><em>("
    + escapeExpression(lambda((depth0 != null ? depth0['in'] : depth0), depth0))
    + ")</em></small>\n    </label>\n    <div class=\"param-property col-lg-10\" data-label=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n        <select ";
  stack1 = ((helpers.isArray || (depth0 && depth0.isArray) || helperMissing).call(depth0, depth0, {"name":"isArray","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += " class=\"parameter form-control\" name=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.required : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.allowableValues : depth0)) != null ? stack1.descriptiveValues : stack1), {"name":"each","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </select>\n        <div class=\"small-description media mt-2\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.type : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            <div class=\"media-body\">\n                <small class=\"text-muted\">"
    + escapeExpression(lambda((depth0 != null ? depth0.description : depth0), depth0))
    + "</small>\n            </div>\n        </div>\n    </div>\n</div>\n\n";
},"useData":true});
this["Handlebars"]["templates"]["param_readonly_required"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <textarea class=\"body-textarea form-control\" readonly placeholder=\"(required)\" name=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\"  data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" rows=\"3\">"
    + escapeExpression(((helper = (helper = helpers['default'] || (depth0 != null ? depth0['default'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"default","hash":{},"data":data}) : helper)))
    + "</textarea>\n            <div class=\"parameter-content-type\"/>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0['default'] : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                "
    + escapeExpression(((helper = (helper = helpers['default'] || (depth0 != null ? depth0['default'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"default","hash":{},"data":data}) : helper)))
    + "\n";
},"6":function(depth0,helpers,partials,data) {
  return "                (empty)\n";
  },"8":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <small><pre class=\"mb-0 mr-2\"><code class=\"code-signature hljs rounded\">"
    + escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"type","hash":{},"data":data}) : helper)))
    + "</code></pre></small>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<div class=\"form-group row\">\n    <label class=\"param-property text-nowrap col-lg-2 text-lg-right col-form-label\">\n        "
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + ":</br>\n        <small class=\"text-muted\"><em>("
    + escapeExpression(lambda((depth0 != null ? depth0['in'] : depth0), depth0))
    + ")</em></small>\n    </label>\n    <div class=\"param-property col-lg-10\" data-label=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isBody : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        <div class=\"small-description media mt-2\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.type : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            <div class=\"media-body\">\n                <small class=\"text-muted\">"
    + escapeExpression(lambda((depth0 != null ? depth0.description : depth0), depth0))
    + "</small>\n            </div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});
this["Handlebars"]["templates"]["param_readonly"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <textarea class=\"body-textarea form-control\" readonly name=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" rows=\"3\">"
    + escapeExpression(((helper = (helper = helpers['default'] || (depth0 != null ? depth0['default'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"default","hash":{},"data":data}) : helper)))
    + "</textarea>\n            <div class=\"parameter-content-type\"/>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0['default'] : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                "
    + escapeExpression(((helper = (helper = helpers['default'] || (depth0 != null ? depth0['default'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"default","hash":{},"data":data}) : helper)))
    + "\n";
},"6":function(depth0,helpers,partials,data) {
  return "                (empty)\n";
  },"8":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <small><pre class=\"mb-0 mr-2\"><code class=\"code-signature hljs rounded\">"
    + escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"type","hash":{},"data":data}) : helper)))
    + "</code></pre></small>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<div class=\"form-group row\">\n    <label class=\"param-property text-nowrap col-lg-2 text-lg-right col-form-label\">\n        "
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + ":</br>\n        <small class=\"text-muted\"><em>("
    + escapeExpression(lambda((depth0 != null ? depth0['in'] : depth0), depth0))
    + ")</em></small>\n    </label>\n    <div class=\"param-property col-lg-10\" data-label=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isBody : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        <div class=\"small-description media mt-2\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.type : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            <div class=\"media-body\">\n                <small class=\"text-muted\">"
    + escapeExpression(lambda((depth0 != null ? depth0.description : depth0), depth0))
    + "</small>\n            </div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});
this["Handlebars"]["templates"]["param_required"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isFile : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <input class=\"form-control required\" type=\"file\" name=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\"/>\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0['default'] : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <div class=\"editor_holder\"></div>\n                    <textarea class=\"body-textarea form-control required\" placeholder=\"(required)\" name=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" rows=\"3\">"
    + escapeExpression(((helper = (helper = helpers['default'] || (depth0 != null ? depth0['default'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"default","hash":{},"data":data}) : helper)))
    + "</textarea>\n                    <div class=\"parameter-content-type\"/>\n";
},"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <textarea class=\"body-textarea form-control required\" placeholder=\"(required)\" name=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" rows=\"3\"></textarea>\n                    <div class=\"editor_holder\"></div>\n                    <br/>\n                    <div class=\"parameter-content-type\"/>\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isFile : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.program(12, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <input class=\"parameter form-control required\" type=\"file\" name=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\"/>\n";
},"12":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0['default'] : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.program(15, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"13":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <input class=\"parameter form-control required\" minlength=\"1\" name=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"(required)\" type=\""
    + escapeExpression(((helper = (helper = helpers.inputType || (depth0 != null ? depth0.inputType : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"inputType","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers['default'] || (depth0 != null ? depth0['default'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"default","hash":{},"data":data}) : helper)))
    + "\" />\n";
},"15":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <input class=\"parameter form-control required\" minlength=\"1\" name=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"(required)\" type=\""
    + escapeExpression(((helper = (helper = helpers.inputType || (depth0 != null ? depth0.inputType : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"inputType","hash":{},"data":data}) : helper)))
    + "\" value=\"\" />\n";
},"17":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <small><pre class=\"mb-0 mr-2\"><code class=\"code-signature hljs rounded\">"
    + escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"type","hash":{},"data":data}) : helper)))
    + "</code></pre></small>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<div class=\"form-group row\">\n    <label class=\"param-property text-nowrap col-lg-2 text-lg-right col-form-label\">\n        "
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + ":</br>\n        <small class=\"text-muted\"><em>("
    + escapeExpression(lambda((depth0 != null ? depth0['in'] : depth0), depth0))
    + ")</em></small>\n    </label>\n    <div class=\"param-property col-lg-10\" data-label=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isBody : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        <div class=\"small-description media mt-2\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.type : depth0), {"name":"if","hash":{},"fn":this.program(17, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            <div class=\"media-body\">\n                <small class=\"text-muted\">"
    + escapeExpression(lambda((depth0 != null ? depth0.description : depth0), depth0))
    + "</small>\n            </div>\n        </div>\n    </div>\n</div>\n\n";
},"useData":true});
this["Handlebars"]["templates"]["param"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isFile : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            <div class=\"small-description\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.type : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                <div class=\"markdown\">"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\n            </div>\n";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <input class=\"form-control\" type=\"file\" name=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\"/>\n                <div class=\"parameter-content-type\"/>\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0['default'] : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <div class=\"editor_holder\"></div>\n                    <textarea class=\"body-textarea form-control\" name=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" rows=\"3\" placeholder=\""
    + escapeExpression(((helper = (helper = helpers['default'] || (depth0 != null ? depth0['default'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"default","hash":{},"data":data}) : helper)))
    + "\"></textarea>\n                    <div class=\"parameter-content-type\"/>\n";
},"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <textarea class=\"body-textarea form-control\" name=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" rows=\"3\"></textarea>\n                    <div class=\"editor_holder\"></div>\n                    <div class=\"parameter-content-type\"/>\n";
},"9":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <code class=\"code-signature\">"
    + escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"type","hash":{},"data":data}) : helper)))
    + "</code>\n";
},"11":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isFile : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.program(14, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            <div class=\"small-description media mt-2\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.type : depth0), {"name":"if","hash":{},"fn":this.program(19, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                <div class=\"media-body\">\n                    <small class=\"text-muted\">"
    + escapeExpression(lambda((depth0 != null ? depth0.description : depth0), depth0))
    + "</small>\n                </div>\n            </div>\n";
},"12":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <label class=\"btn btn-primary\" for=\"my-file-selector\">\n                    <input id=\"my-file-selector\" type=\"file\" style=\"display:none;\" name=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n                    Choose file\n                </label>\n                <div class=\"parameter-content-type\"/>\n";
},"14":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0['default'] : depth0), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.program(17, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"15":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <input class=\"parameter form-control\" minlength=\"0\" name=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" type=\""
    + escapeExpression(((helper = (helper = helpers.inputType || (depth0 != null ? depth0.inputType : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"inputType","hash":{},"data":data}) : helper)))
    + "\" value=\"\" placeholder=\""
    + escapeExpression(((helper = (helper = helpers['default'] || (depth0 != null ? depth0['default'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"default","hash":{},"data":data}) : helper)))
    + "\"/>\n";
},"17":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <input class=\"parameter form-control\" minlength=\"0\" name=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" type=\""
    + escapeExpression(((helper = (helper = helpers.inputType || (depth0 != null ? depth0.inputType : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"inputType","hash":{},"data":data}) : helper)))
    + "\" value=\"\" placeholder=\"\"/>\n";
},"19":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <small><pre class=\"mb-0 mr-2\"><code class=\"code-signature hljs rounded\">"
    + escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"type","hash":{},"data":data}) : helper)))
    + "</code></pre></small>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<div class=\"form-group row\">\n    <label class=\"param-property text-nowrap col-lg-2 text-lg-right col-form-label\">\n        "
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + ":</br>\n        <small class=\"text-muted\"><em>("
    + escapeExpression(lambda((depth0 != null ? depth0['in'] : depth0), depth0))
    + ")</em></small>\n    </label>\n    <div class=\"param-property col-lg-10\" data-label=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isBody : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(11, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n</div>";
},"useData":true});
this["Handlebars"]["templates"]["parameter_content_type"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.consumes : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "                    <option value=\"";
  stack1 = lambda(depth0, depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">";
  stack1 = lambda(depth0, depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</option>\n";
},"4":function(depth0,helpers,partials,data) {
  return "                <option value=\"application/json\">application/json</option>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"media\">\n    <label class=\"align-self-center mb-0 mr-3\" for=\"parameterContentType\">Content type:</label>\n    <div class=\"media-body\">\n        <select class=\"parameter form-control form-control-sm\" name=\"parameterContentType\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.consumes : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </select>\n    </div>\n</div>";
},"useData":true});
this["Handlebars"]["templates"]["resource"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class='endpoints' id='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "_endpoint_list'>\n</div>";
},"useData":true});
this["Handlebars"]["templates"]["response_content_type"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.produces : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "                    <option value=\"";
  stack1 = lambda(depth0, depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">";
  stack1 = lambda(depth0, depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</option>\n";
},"4":function(depth0,helpers,partials,data) {
  return "                <option value=\"application/json\">application/json</option>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"media\">\n    <label class=\"align-self-center mb-0 mr-3\" for=\"responseContentType\">Response Type:</label>\n    <div class=\"media-body\">\n        <select class=\"parameter form-control form-control-sm\" name=\"responseContentType\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.produces : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </select>\n    </div>\n</div>";
},"useData":true});
this["Handlebars"]["templates"]["sidebar_header"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "active";
  },"3":function(depth0,helpers,partials,data) {
  return "show";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<a class=\"nav-link ";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.nmbr : depth0), "==", 0, {"name":"ifCond","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += " collapsed text-capitalize\" href=\"#collapse_"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "\" data-toggle=\"collapse\" data-parent=\"#resources_nav\">"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</a>\n<div class=\"collapse ";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.nmbr : depth0), "==", 0, {"name":"ifCond","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " pl-3\" id=\"collapse_"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "\" role=\"tabpanel\">\n    <nav class=\"nav flex-column sub_menu\"></nav>\n</div>";
},"useData":true});
this["Handlebars"]["templates"]["sidebar_item"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"summary","hash":{},"data":data}) : helper)))
    + "\n";
},"useData":true});
this["Handlebars"]["templates"]["signature"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "    <h6 class=\"schema-title text-white text-uppercase mt-3 mb-3\" data-control data-toggle=\"collapse\" data-target=\"#schema-"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"type","hash":{},"data":data}) : helper)))
    + " Schema</h6>\n    <div data-content class=\"collapse show row hljs\" id=\"schema-"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"description col-12\">\n            ";
  stack1 = ((helper = (helper = helpers.signature || (depth0 != null ? depth0.signature : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"signature","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n        </div>\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<h6 class=\"sample-title text-white text-uppercase collapsed mb-3 d-none\" data-control data-toggle=\"collapse\" data-target=\"#sample-"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"type","hash":{},"data":data}) : helper)))
    + " Sample</h6>\n<div data-content class=\"collapse row hljs d-none\" id=\"sample-"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"snippet col-12\">\n        <pre><code>"
    + escapeExpression(((helper = (helper = helpers.sampleJSON || (depth0 != null ? depth0.sampleJSON : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sampleJSON","hash":{},"data":data}) : helper)))
    + "</code></pre>\n    </div>\n</div>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.signature : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
this["Handlebars"]["templates"]["status_code"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<td style=\"width: 20px;\"><strong>"
    + escapeExpression(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"code","hash":{},"data":data}) : helper)))
    + "</strong></td>\n<td>";
  stack1 = ((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</td>\n";
},"useData":true});
'use strict';

window.SwaggerUi = Backbone.Router.extend({

  dom_id: 'swagger_ui',

  // Attributes
  options: null,
  api: null,
  headerView: null,
  mainView: null,

  // SwaggerUi accepts all the same options as SwaggerApi
  initialize: function(options) {
    options = options || {};

    // Allow dom_id to be overridden
    if (options.dom_id) {
      this.dom_id = options.dom_id;
      delete options.dom_id;
    }

    if (!options.supportedSubmitMethods){
      options.supportedSubmitMethods = [
        'get',
        'put',
        'post',
        'delete',
        'head',
        'options',
        'patch'
      ];
    }

    if (typeof options.oauth2RedirectUrl === 'string') {
      window.oAuthRedirectUrl = options.redirectUrl;
    }

    // Create an empty div which contains the dom_id
    if (! $('#' + this.dom_id).length){
      $('body').append('<div id="' + this.dom_id + '"></div>') ;
    }

    this.options = options;

    // set marked options
    marked.setOptions({gfm: true});

    // Set the callbacks
    var that = this;
    this.options.success = function() { return that.render(); };
    this.options.progress = function(d) { return that.showMessage(d); };
    this.options.failure = function(d) { return that.onLoadFailure(d); };

    // Create view to handle the header inputs
    //this.headerView = new SwaggerUi.Views.HeaderView({el: $('#header')});

    // Event handler for when the baseUrl/apiKey is entered by user
    /*
    this.headerView.on('update-swagger-ui', function(data) {
      return that.updateSwaggerUi(data);
    });
    */
    //JSon Editor custom theming
    JSONEditor.defaults.iconlibs.swagger = JSONEditor.AbstractIconLib.extend({
      mapping: {
        collapse: 'collapse',
        expand: 'expand'
      },
      icon_prefix: 'swagger-'
    });
  },

  // Set an option after initializing
  setOption: function(option, value) {
    this.options[option] = value;
  },

  // Get the value of a previously set option
  getOption: function(option) {
    return this.options[option];
  },

  // Event handler for when url/key is received from user
  updateSwaggerUi: function(data){
    this.options.url = data.url;
    this.options.apiKey = data.apiKey;
    this.load();
  },

  // Create an api and render
  load: function(){

    // Initialize the API object
    if (this.mainView) {
      this.mainView.undelegateEvents();
      this.mainView.clear();
    }

    var url = this.options.url;
    if (url && url.indexOf('http') !== 0) {
      url = this.buildUrl(window.location.href.toString(), url);
    }

    this.options.url = url;

    this.api = new SwaggerClient(this.options);

  },

  // collapse all sections
  collapseAll: function(){
    Docs.collapseEndpointListForResource('');
  },

  // list operations for all sections
  listAll: function(){
    Docs.collapseOperationsForResource('');
  },

  // expand operations for all sections
  expandAll: function(){
    Docs.expandOperationsForResource('');
  },

  // This is bound to success handler for SwaggerApi
  //  so it gets called when SwaggerApi completes loading
  render: function(){
    this.showMessage('Finished Loading Resource Information. Rendering Swagger UI...');
    this.mainView = new SwaggerUi.Views.MainView({
      model: this.api,
      el: $('#' + this.dom_id),
      swaggerOptions: this.options,
      router: this
    }).render();
    this.showMessage();
    switch (this.options.docExpansion) {
      case 'full':
        this.expandAll(); break;
      case 'list':
        this.listAll(); break;
      default:
        break;
    }
    this.renderGFM();

    if (this.options.onComplete){
      this.options.onComplete(this.api, this);
    }

    var that= this;

    // Event handler for when the baseUrl/apiKey is entered by user
    this.mainView.on('update-swagger-ui', function(data) {
      return that.updateSwaggerUi(data);
    });

    setTimeout(Docs.shebang.bind(this), 100);
  },

  buildUrl: function(base, url){
    if (url.indexOf('/') === 0) {
      var parts = base.split('/');
      base = parts[0] + '//' + parts[2];
      return base + url;
    } else {
      var endOfPath = base.length;

      if (base.indexOf('?') > -1){
        endOfPath = Math.min(endOfPath, base.indexOf('?'));
      }

      if (base.indexOf('#') > -1){
        endOfPath = Math.min(endOfPath, base.indexOf('#'));
      }

      base = base.substring(0, endOfPath);

      if (base.indexOf('/', base.length - 1 ) !== -1){
        return base + url;
      }

      return base + '/' + url;
    }
  },

  // Shows message on topbar of the ui
  showMessage: function(data){
    if (data === undefined) {
      data = '';
    }
    $('#message-bar').removeClass('message-fail');
    $('#message-bar').addClass('message-success');
    $('#message-bar').html(data);
  },

  // shows message in red
  onLoadFailure: function(data){
    if (data === undefined) {
      data = '';
    }
    $('#message-bar').removeClass('message-success');
    $('#message-bar').addClass('message-fail');

    var val = $('#message-bar').html(data);

    if (this.options.onFailure) {
      this.options.onFailure(data);
    }

    return val;
  },

  // Renders GFM for elements with 'markdown' class
  renderGFM: function(){
    $('.markdown').each(function(){
      $(this).html(marked($(this).html()));
    });
  }

});

window.SwaggerUi.Views = {};

// don't break backward compatibility with previous versions and warn users to upgrade their code
(function(){
  window.authorizations = {
    add: function() {
      warn('Using window.authorizations is deprecated. Please use SwaggerUi.api.clientAuthorizations.add().');

      if (typeof window.swaggerUi === 'undefined') {
        throw new TypeError('window.swaggerUi is not defined');
      }

      if (window.swaggerUi instanceof SwaggerUi) {
        window.swaggerUi.api.clientAuthorizations.add.apply(window.swaggerUi.api.clientAuthorizations, arguments);
      }
    }
  };

  window.ApiKeyAuthorization = function() {
    warn('window.ApiKeyAuthorization is deprecated. Please use SwaggerClient.ApiKeyAuthorization.');
    SwaggerClient.ApiKeyAuthorization.apply(window, arguments);
  };

  window.PasswordAuthorization = function() {
    warn('window.PasswordAuthorization is deprecated. Please use SwaggerClient.PasswordAuthorization.');
    SwaggerClient.PasswordAuthorization.apply(window, arguments);
  };

  function warn(message) {
    if ('console' in window && typeof window.console.warn === 'function') {
      console.warn(message);
    }
  }
})();


// UMD
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['b'], function (b) {
            return (root.SwaggerUi = factory(b));
        });
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory(require('b'));
    } else {
        // Browser globals
        root.SwaggerUi = factory(root.b);
    }
}(this, function () {
    return SwaggerUi;
}));
'use strict';

SwaggerUi.Views.ApiKeyButton = Backbone.View.extend({ // TODO: append this to global SwaggerUi

  events:{
    'click #apikey_button' : 'toggleApiKeyContainer',
    'click #apply_api_key' : 'applyApiKey'
  },

  initialize: function(opts){
    this.options = opts || {};
    this.router = this.options.router;
  },

  render: function(){
    var template = this.template();
    $(this.el).html(template(this.model));

    return this;
  },


  applyApiKey: function(){
    var keyAuth = new SwaggerClient.ApiKeyAuthorization(
      this.model.name,
      $('#input_apiKey_entry').val(),
      this.model.in
    );
    this.router.api.clientAuthorizations.add(this.model.name, keyAuth);
    this.router.load();
    $('#apikey_container').show();
  },

  toggleApiKeyContainer: function(){
    if ($('#apikey_container').length) {

      var elem = $('#apikey_container').first();

      if (elem.is(':visible')){
        elem.hide();
      } else {

        // hide others
        $('.auth_container').hide();
        elem.show();
      }
    }
  },

  template: function(){
    return Handlebars.templates.apikey_button_view;
  }

});
'use strict';

SwaggerUi.Views.BasicAuthButton = Backbone.View.extend({


  initialize: function (opts) {
    this.options = opts || {};
    this.router = this.options.router;
  },

  render: function(){
    var template = this.template();
    $(this.el).html(template(this.model));

    return this;
  },

  events: {
    'click #basic_auth_button' : 'togglePasswordContainer',
    'click #apply_basic_auth' : 'applyPassword'
  },

  applyPassword: function(){
    var username = $('.input_username').val();
    var password = $('.input_password').val();
    var basicAuth = new SwaggerClient.PasswordAuthorization('basic', username, password);
    this.router.api.clientAuthorizations.add(this.model.type, basicAuth);
    this.router.load();
    $('#basic_auth_container').hide();
  },

  togglePasswordContainer: function(){
    if ($('#basic_auth_container').length) {
      var elem = $('#basic_auth_container').show();
      if (elem.is(':visible')){
        elem.slideUp();
      } else {
        // hide others
        $('.auth_container').hide();
        elem.show();
      }
    }
  },

  template: function(){
    return Handlebars.templates.basic_auth_button_view;
  }

});
'use strict';

SwaggerUi.Views.ContentTypeView = Backbone.View.extend({
  initialize: function() {},

  render: function(){
    $(this.el).html(Handlebars.templates.content_type(this.model));

    $('label[for=contentType]', $(this.el)).text('Response Content Type');

    return this;
  }
});
'use strict';

SwaggerUi.Views.HeaderView = Backbone.View.extend({
  events: {
    'click #show-pet-store-icon'    : 'showPetStore',
    'click #show-wordnik-dev-icon'  : 'showWordnikDev',
    'click #explore'                : 'showCustom',
    'keyup #input_baseUrl'          : 'showCustomOnKeyup',
    'keyup #input_apiKey'           : 'showCustomOnKeyup'
  },

  initialize: function(){},

  showPetStore: function(){
    this.trigger('update-swagger-ui', {
      url:'http://petstore.swagger.io/v2/swagger.json'
    });
  },

  showWordnikDev: function(){
    this.trigger('update-swagger-ui', {
      url: 'http://api.wordnik.com/v4/resources.json'
    });
  },

  showCustomOnKeyup: function(e){
    if (e.keyCode === 13) {
      this.showCustom();
    }
  },

  showCustom: function(e){
    if (e) {
      e.preventDefault();
    }

    this.trigger('update-swagger-ui', {
      url: $('#input_baseUrl').val(),
      apiKey: $('#input_apiKey').val()
    });
  },

  update: function(url, apiKey, trigger){
    if (trigger === undefined) {
      trigger = false;
    }

    $('#input_baseUrl').val(url);

    $('#input_apiKey').val(apiKey);
    if (trigger) {
      this.trigger('update-swagger-ui', {url:url});
    }
  }
});

'use strict';

SwaggerUi.Views.MainView = Backbone.View.extend({

  events: {
    // 'click .mobile-nav, [data-navigator]': 'clickSidebarNav',
    'click [data-resource]': 'clickResource',
    // 'click [data-tg-switch]': 'toggleToken',
    // 'click [data-close]': 'closeToken',
    'click #explore' : 'showCustom'
  },

  apisSorter: {
    alpha: function (a, b) {
      return a.name.localeCompare(b.name);
    }
  },
  operationsSorters: {
    alpha: function (a, b) {
      return a.path.localeCompare(b.path);
    },
    method: function (a, b) {
      return a.method.localeCompare(b.method);
    }
  },
  initialize: function (opts) {
    var sorterOption, sorterFn, key, value;
    opts = opts || {};

    this.router = opts.router;

    // Sort APIs
    if (opts.swaggerOptions.apisSorter) {
      sorterOption = opts.swaggerOptions.apisSorter;
      if (_.isFunction(sorterOption)) {
        sorterFn = sorterOption;
      } else {
        sorterFn = this.apisSorter[sorterOption];
      }
      if (_.isFunction(sorterFn)) {
        this.model.apisArray.sort(sorterFn);
      }
    }
    // Sort operations of each API
    if (opts.swaggerOptions.operationsSorter) {
      sorterOption = opts.swaggerOptions.operationsSorter;
      if (_.isFunction(sorterOption)) {
        sorterFn = sorterOption;
      } else {
        sorterFn = this.operationsSorters[sorterOption];
      }
      if (_.isFunction(sorterFn)) {
        for (key in this.model.apisArray) {
          this.model.apisArray[key].operationsArray.sort(sorterFn);
        }
      }
    }

    // set up the UI for input
    this.model.auths = [];

    for (key in this.model.securityDefinitions) {
      value = this.model.securityDefinitions[key];

      this.model.auths.push({
        name: key,
        type: value.type,
        value: value
      });
    }

    if (this.model.swaggerVersion === '2.0') {
      if ('validatorUrl' in opts.swaggerOptions) {

        // Validator URL specified explicitly
        this.model.validatorUrl = opts.swaggerOptions.validatorUrl;

      } else if (this.model.url.indexOf('localhost') > 0) {

        // Localhost override
        this.model.validatorUrl = null;

      } else {

        // Default validator
        this.model.validatorUrl = window.location.protocol + '//online.swagger.io/validator';
      }
    }
    // JSonEditor requires type='object' to be present on defined types, we add it if it's missing
    // is there any valid case were it should not be added ?
    var def;
    for(def in this.model.definitions){
      if (!this.model.definitions[def].type){
        this.model.definitions[def].type = 'object';
      }
    }
  },

  render: function () {
    if (this.model.securityDefinitions) {
      for (var name in this.model.securityDefinitions) {
        var auth = this.model.securityDefinitions[name];
        var button;

        if (auth.type === 'apiKey' && $('#apikey_button').length === 0) {
          button = new SwaggerUi.Views.ApiKeyButton({model: auth, router: this.router}).render().el;
          $('.auth_main_container').append(button);
        }

        if (auth.type === 'basicAuth' && $('#basic_auth_button').length === 0) {
          button = new SwaggerUi.Views.BasicAuthButton({model: auth, router: this.router}).render().el;
          $('.auth_main_container').append(button);
        }
      }
    }

    // Render the outer container for resources
    $(this.el).html(Handlebars.templates.main(this.model));

    // Render each resource

    var resources = {};
    var counter = 0;
    for (var i = 0; i < this.model.apisArray.length; i++) {
      var resource = this.model.apisArray[i];
      var id = resource.name;
      while (typeof resources[id] !== 'undefined') {
        id = id + '_' + counter;
        counter += 1;
      }
      resource.id = id;
      resources[id] = resource;
      resource.nmbr = i;

      this.addResource(resource, this.model.auths);
      this.addSidebarHeader(resource, i);
    }

    $('.propWrap').hover(function onHover() {
      $('.optionsWrapper', $(this)).show();
    }, function offhover() {
      $('.optionsWrapper', $(this)).hide();
    });

    if (window.location.hash.length === 0 ) {
      var n = $(this.el).find("#resources_nav [data-resource]").first();
      n.trigger("click");
      $(window).scrollTop(0)
    }

    return this;
  },

  addResource: function (resource, auths) {
    // Render a resource and add it to resources li
    resource.id = resource.id.replace(/\s/g, '_');

    // Make all definitions available at the root of the resource so that they can
    // be loaded by the JSonEditor
    resource.definitions = this.model.definitions;
    var resourceView = new SwaggerUi.Views.ResourceView({
      model: resource,
      router: this.router,
      tagName: 'div',
      id: 'resource_' + resource.id,
      className: 'resource',
      auths: auths,
      swaggerOptions: this.options.swaggerOptions
    });
    $('#resources').append(resourceView.render().el);
  },

  addSidebarToken: function (resource, i) {
    resource.id = resource.id.replace(/\s/g, '_');
    var sidebarView = new SwaggerUi.Views.SidebarHeaderView({
      model: resource,
      tagName: 'div',
      className: function () {
        return i == 0 ? 'active' : ''
      },
      attributes: {
        "data-resource": 'resource_' + resource.name,
        "label": resource.name
      },
      router: this.router,
      swaggerOptions: this.options.swaggerOptions
    });
    $('#token-generator', $(this.el)).append(sidebarView.render().el);
  },


  addSidebarHeader: function (resource, i) {
    resource.id = resource.id.replace(/\s/g, '_');
    var sidebarView = new SwaggerUi.Views.SidebarHeaderView({
      model: resource,
      tagName: 'nav',
      className: 'nav flex-column parent_menu',
      // className: function () {
      //   return i == 0 ? 'nav flex-column' : 'nav flex-column'
      // },
      attributes: {
        // "id": 'resource_' + resource.name,
        "data-resource": 'resource_' + resource.name,
        "label": resource.name
      },
      router: this.router,
      swaggerOptions: this.options.swaggerOptions
    });
    $('#resources_nav', $(this.el)).append(sidebarView.render().el);
  },

  clear: function () {
    $(this.el).html('');
  },

  // clickSidebarNav: function (e) {
  //   $('#sticky-top').toggleClass("nav-open")
  // },

  clickResource: function (e) {
    if (!$(e.target).is(".item")) {
      var n = $(e.target).find(".item").first();
      $('#sticky-top').find("[data-resource].active").removeClass("active");
      $(e.target).find("[data-resource]").first().addClass("active");
      n.trigger("click")
    }
  },

  // toggleToken: function (e) {
  //   var t = $(".token-generator"),
  //     tg = $("[data-tg-switch]");

  //   t.toggleClass("hide");
  //   t.hasClass("hide") ? tg.removeClass("active") : tg.addClass("active");
  //   t.parents("#sticky-top").trigger("mobile_nav:update")
  // },

  // closeToken: function (e) {
  //   var t = $(".token-generator"),
  //     tg = $("[data-tg-switch]");

  //   t.addClass("hide");
  //   tg.removeClass("active");
  //   t.parents("#sticky-top").trigger("mobile_nav:update")
  // },

  // openToken: function (e) {
  //   var t = $(".token-generator"),
  //     tg = $("[data-tg-switch]");

  //   t.removeClass("hide");
  //   tg.removeClass("active");
  //   t.parents("#sticky-top").trigger("mobile_nav:update")
  // },

  showCustom: function(e){
    if (e) {
      e.preventDefault();
    }
    this.trigger('update-swagger-ui', {
      url: $('#input_baseUrl').val(),
      apiKey: $('#input_apiKey').val()
    });
  }
});

'use strict';

SwaggerUi.Views.OperationView = Backbone.View.extend({
  invocationUrl: null,

  events: {
    'submit .sandbox': 'submitOperation',
    'click .submit': 'submitOperation',
    'click .toggle-samples': 'toggleSamples',
    'click .opperation_link': 'scrollLink'
  },

  initialize: function (opts) {
    opts = opts || {};
    this.router = opts.router;
    this.auths = opts.auths;
    this.parentId = this.model.parentId;
    this.nickname = this.model.nickname;
    this.model.encodedParentId = encodeURIComponent(this.parentId);
    return this;
  },

  // Note: copied from CoffeeScript compiled file
  // TODO: redactor
  render: function () {
    var a, auth, auths, code, contentTypeModel, isMethodSubmissionSupported, k, key, l, len, len1, len2, len3, len4, m, modelAuths, n, o, p, param, q, ref, ref1, ref2, ref3, ref4, ref5, responseContentTypeView, responseSignatureView, schema, schemaObj, scopeIndex, signatureModel, statusCode, successResponse, type, v, value;
    isMethodSubmissionSupported = jQuery.inArray(this.model.method, this.model.supportedSubmitMethods()) >= 0;
    if (!isMethodSubmissionSupported) {
      this.model.isReadOnly = true;
    }
    this.model.description = this.model.description || this.model.notes;
    this.model.oauth = null;

    modelAuths = this.model.authorizations || this.model.security;

    if (modelAuths) {
      if (Array.isArray(modelAuths)) {
        for (l = 0, len = modelAuths.length; l < len; l++) {
          auths = modelAuths[l];
          for (key in auths) {
            auth = auths[key];
            for (a in this.auths) {
              auth = this.auths[a];
              if (auth.type === 'oauth2') {
                this.model.oauth = {};
                this.model.oauth.scopes = [];
                ref1 = auth.value.scopes;
                for (k in ref1) {
                  v = ref1[k];
                  scopeIndex = auths[key].indexOf(k);
                  if (scopeIndex >= 0) {
                    o = {
                      scope: k,
                      description: v
                    };
                    this.model.oauth.scopes.push(o);
                  }
                }
              }
            }
          }
        }
      } else {
        for (k in modelAuths) {
          v = modelAuths[k];
          if (k === 'oauth2') {
            if (this.model.oauth === null) {
              this.model.oauth = {};
            }
            if (this.model.oauth.scopes === void 0) {
              this.model.oauth.scopes = [];
            }
            for (m = 0, len1 = v.length; m < len1; m++) {
              o = v[m];
              this.model.oauth.scopes.push(o);
            }
          }
        }
      }
    }

    if (typeof this.model.responses !== 'undefined') {
      this.model.responseMessages = [];
      ref2 = this.model.responses;
      for (code in ref2) {
        value = ref2[code];
        schema = null;
        schemaObj = this.model.responses[code].schema;
        if (schemaObj && schemaObj.$ref) {
          schema = schemaObj.$ref;
          if (schema.indexOf('#/definitions/') === 0) {
            schema = schema.substring('#/definitions/'.length);
          }
        }
        this.model.responseMessages.push({
          code: code,
          message: value.description,
          responseModel: schema
        });
      }
    }
    if (typeof this.model.responseMessages === 'undefined') {
      this.model.responseMessages = [];
    }
    signatureModel = null;
    if (this.model.successResponse) {
      successResponse = this.model.successResponse;
      for (key in successResponse) {
        value = successResponse[key];
        this.model.successCode = key;
        if (typeof value === 'object' && typeof value.createJSONSample === 'function') {
          signatureModel = {
            sampleJSON: JSON.stringify(value.createJSONSample(), void 0, 2),
            isParam: false,
            signature: value.getMockSignature(),
            type: "Response",
            id: this.parentId + '_' + this.nickname + '_succes'
          };
        }
      }
    } else if (this.model.responseClassSignature && this.model.responseClassSignature !== 'string') {
      signatureModel = {
        sampleJSON: this.model.responseSampleJSON,
        isParam: false,
        signature: this.model.responseClassSignature,
        type: "Response",
        id: this.parentId + '_' + this.nickname
      };
    }

    contentTypeModel = {
      isParam: false
    };
    contentTypeModel.consumes = this.model.consumes;
    contentTypeModel.produces = this.model.produces;

    $(this.el).html(Handlebars.templates.operation(this.model));

    ref4 = this.model.parameters;
    for (p = 0, len3 = ref4.length; p < len3; p++) {
      param = ref4[p];
      this.addParameter(param, contentTypeModel.consumes);
      if (param.paramType === 'body' || param.in === 'body') {
        this.addBodyModel(param)
      }
    }
    if (signatureModel) {
      responseSignatureView = new SwaggerUi.Views.SignatureView({
        model: signatureModel,
        router: this.router,
        tagName: 'div',
        type: "Response",
        id: this.parentId + '_' + this.nickname + '_response'
      });
      $('.model-signature', $(this.el)).append(responseSignatureView.render().el);
    } else {
      this.model.responseClassSignature = 'string';
      $('.model-signature', $(this.el)).append(this.model.type);
    }

    ref3 = this.model.parameters;
    for (n = 0, len2 = ref3.length; n < len2; n++) {
      param = ref3[n];
      type = param.type || param.dataType || '';
      if (typeof type === 'undefined') {
        schema = param.schema;
        if (schema && schema.$ref) {
          ref = schema.$ref;
          if (ref.indexOf('#/definitions/') === 0) {
            type = ref.substring('#/definitions/'.length);
          } else {
            type = ref;
          }
        }
      }
      if (type && type.toLowerCase() === 'file') {
        if (!contentTypeModel.consumes) {
          contentTypeModel.consumes = 'multipart/form-data';
        }
      }
      param.type = type;
    }
    responseContentTypeView = new SwaggerUi.Views.ResponseContentTypeView({
      model: contentTypeModel,
      router: this.router
    });

    $('.response-content-type', $(this.el)).append(responseContentTypeView.render().el);

    ref5 = this.model.responseMessages;
    for (q = 0, len4 = ref5.length; q < len4; q++) {
      statusCode = ref5[q];
      this.addStatusCode(statusCode);
    }

    return this;
  },

  addBodyModel: function (param) {
    if (param.type === 'file') return;

    var bodySample = {
      sampleJSON: param.sampleJSON,
      isParam: true,
      signature: param.signature,
      type: "Body",
      id: this.parentId + '_' + this.nickname + '_body'
    };
    var signatureView = new SwaggerUi.Views.SignatureView({model: bodySample, tagName: 'div'});
    $('.model-signature', $(this.el)).append(signatureView.render().el);
  },


  addParameter: function (param, consumes) {
    // Render a parameter
    param.consumes = consumes;
    // Copy this param JSON spec so that it will be available for JsonEditor
    if(param.schema){
      $.extend(true, param.schema, this.model.definitions[param.type]);
      param.schema.definitions = this.model.definitions;
      // This is required for JsonEditor to display the root properly
      if(!param.schema.type){
        param.schema.type = 'object';
      }
      // This is the title that will be used by JsonEditor for the root
      // Since we already display the parameter's name in the Parameter column
      // We set this to space, we can't set it to null or space otherwise JsonEditor
      // will replace it with the text "root" which won't look good on screen
      if(!param.schema.title){
        param.schema.title = ' ';
      }
    }
    var paramView = new SwaggerUi.Views.ParameterView({
      model: param,
      tagName: 'div',
      className: 'parameter-item',
      readOnly: this.model.isReadOnly,
      swaggerOptions: this.options.swaggerOptions
  });
    $('.operation-params', $(this.el)).append(paramView.render().el);
  },

  addStatusCode: function (statusCode) {
    // Render status codes
    var statusCodeView = new SwaggerUi.Views.StatusCodeView({
      model: statusCode,
      tagName: 'tr',
      router: this.router
    });
    $('.operation-status', $(this.el)).append(statusCodeView.render().el);
  },

  // Note: copied from CoffeeScript compiled file
  // TODO: redactor
  submitOperation: function (e) {
    var error_free, form, isFileUpload, l, len, len1, len2, m, map, n, o, opts, ref1, ref2, ref3, val;
    if (e !== null) {
      e.preventDefault();
    }
    form = $('.sandbox', $(this.el));
    error_free = true;
    form.find('input.required:visible').each(function () {
      $(this).removeClass('is-invalid');
      if (jQuery.trim($(this).val()) === '') {
        $(this).addClass('is-invalid');
        $(this).wiggle({
          callback: (function (_this) {
            return function () {
              $(_this).focus();
            };
          })(this)
        });
        error_free = false;
      }
    });
    form.find('textarea.required').each(function () {
      $(this).removeClass('is-invalid');
      if (jQuery.trim($(this).val()) === '') {
        $(this).addClass('is-invalid');
        $(this).wiggle({
          callback: (function (_this) {
            return function () {
              return $(_this).focus();
            };
          })(this)
        });
        error_free = false;
      }
    });
    if (error_free) {
      map = {};
      opts = {
        parent: this
      };
      isFileUpload = false;
      ref1 = form.find('input');
      for (l = 0, len = ref1.length; l < len; l++) {
        o = ref1[l];
        if ((o.value !== null) && jQuery.trim(o.value).length > 0) {
          map[o.name] = o.value;
        }
        if (o.type === 'file') {
          map[o.name] = o.files[0];
          isFileUpload = true;
        }
      }
      ref2 = form.find('textarea');
      for (m = 0, len1 = ref2.length; m < len1; m++) {
        o = ref2[m];
        if ((o.value !== null) && jQuery.trim(o.value).length > 0) {
          map[o.name] = o.value;
        }
      }
      ref3 = form.find('select');
      for (n = 0, len2 = ref3.length; n < len2; n++) {
        o = ref3[n];
        val = this.getSelectedValue(o);
        if ((val !== null) && jQuery.trim(val).length > 0) {
          map[o.name] = val;
        }
      }
      var pi;
      for(pi = 0; pi < this.model.parameters.length; pi++){
        var p = this.model.parameters[pi];
        if( p.jsonEditor && p.jsonEditor.isEnabled()){
          var json = p.jsonEditor.getValue();
          map[p.name] = JSON.stringify(json);
        }
      }
      opts.responseContentType = $('div select[name=responseContentType]', $(this.el)).val();
      opts.requestContentType = $('div select[name=parameterContentType]', $(this.el)).val();
      $(".submit", $(this.el)).button("loading");
      if (isFileUpload) {
        return this.handleFileUpload(map, form);
      } else {
        return this.model['do'](map, opts, this.showCompleteStatus, this.showErrorStatus, this);
      }
    }
  },

  success: function (response, parent) {
    parent.showCompleteStatus(response);
  },

  // Note: This is compiled code
  // TODO: Refactor
  handleFileUpload: function (map, form) {
    var bodyParam, el, headerParams, l, len, len1, len2, len3, m, n, o, p, param, params, ref1, ref2, ref3, ref4;
    ref1 = form.serializeArray();
    for (l = 0, len = ref1.length; l < len; l++) {
      o = ref1[l];
      if ((o.value !== null) && jQuery.trim(o.value).length > 0) {
        map[o.name] = o.value;
      }
    }
    bodyParam = new FormData();
    params = 0;
    ref2 = this.model.parameters;
    for (m = 0, len1 = ref2.length; m < len1; m++) {
      param = ref2[m];
      if (param.paramType === 'form' || param['in'] === 'formData') {
        if (param.type.toLowerCase() !== 'file' && map[param.name] !== void 0) {
          bodyParam.append(param.name, map[param.name]);
        }
      }
    }
    headerParams = {};
    ref3 = this.model.parameters;
    for (n = 0, len2 = ref3.length; n < len2; n++) {
      param = ref3[n];
      if (param.paramType === 'header') {
        headerParams[param.name] = map[param.name];
      }
    }
    ref4 = form.find('input[type~="file"]');
    for (p = 0, len3 = ref4.length; p < len3; p++) {
      el = ref4[p];
      if (typeof el.files[0] !== 'undefined') {
        bodyParam.append($(el).attr('name'), el.files[0]);
        params += 1;
      }
    }
    this.invocationUrl = this.model.supportHeaderParams() ? (headerParams = this.model.getHeaderParams(map), delete headerParams['Content-Type'], this.model.urlify(map, false)) : this.model.urlify(map, true);
    $('.request_url', $(this.el)).html('<pre></pre>');
    $('.request_url pre', $(this.el)).text(this.invocationUrl);

    var clientAuths = window.swaggerUi.api.clientAuthorizations;
    if (typeof clientAuths !== 'undefined' && typeof(clientAuths.authz) !== 'undefined') {
      _.forEach(clientAuths.authz, function(auth, key) {
        if (auth.type == 'header') {
          headerParams[auth.name] = auth.value;
        }
      });
    }

    // TODO: don't use jQuery. Use SwaggerJS for handling the call.
    var obj = {
      type: this.model.method,
      url: this.invocationUrl,
      headers: headerParams,
      data: bodyParam,
      dataType: 'json',
      contentType: false,
      processData: false,
      error: (function (_this) {
        return function (data) {
          return _this.showErrorStatus(_this.wrap(data), _this);
        };
      })(this),
      success: (function (_this) {
        return function (data) {
          return _this.showResponse(data, _this);
        };
      })(this),
      complete: (function (_this) {
        return function (data) {
          return _this.showCompleteStatus(_this.wrap(data), _this);
        };
      })(this)
    };
    jQuery.ajax(obj);
    return false;
    // end of file-upload nastiness
  },
  // wraps a jquery response as a shred response

  wrap: function (data) {
    var h, headerArray, headers, i, l, len, o;
    headers = {};
    headerArray = data.getAllResponseHeaders().split('\r');
    for (l = 0, len = headerArray.length; l < len; l++) {
      i = headerArray[l];
      h = i.match(/^([^:]*?):(.*)$/);
      if (!h) {
        h = [];
      }
      h.shift();
      if (h[0] !== void 0 && h[1] !== void 0) {
        headers[h[0].trim()] = h[1].trim();
      }
    }
    o = {};
    o.content = {};
    o.content.data = data.responseText;
    o.headers = headers;
    o.request = {};
    o.request.url = this.invocationUrl;
    o.status = data.status;
    return o;
  },

  getSelectedValue: function (select) {
    if (!select.multiple) {
      return select.value;
    } else {
      var options = [];
      for (var l = 0, len = select.options.length; l < len; l++) {
        var opt = select.options[l];
        if (opt.selected) {
          options.push(opt.value);
        }
      }
      if (options.length > 0) {
        return options;
      } else {
        return null;
      }
    }
  },

  // Show response from server
  showResponse: function (response) {
    var prettyJson = JSON.stringify(response, null, '\t').replace(/\n/g, '<br>');
    $('.response_body', $(this.el)).html(_.escape(prettyJson));
  },

  // Show error from server
  showErrorStatus: function (data, parent) {
    $('#modal-' + parent.parentId + '_' + parent.nickname).modal();
    parent.showStatus(data);
  },

  // show the status codes
  showCompleteStatus: function (data, parent) {
    $('#modal-' + parent.parentId + '_' + parent.nickname).modal();
    parent.showStatus(data);
  },

  // Adapted from http://stackoverflow.com/a/2893259/454004
  // Note: directly ported from CoffeeScript
  // TODO: Cleanup CoffeeScript artifacts
  formatXml: function (xml) {
    var contexp, fn, formatted, indent, l, lastType, len, lines, ln, pad, reg, transitions, wsexp;
    reg = /(>)(<)(\/*)/g;
    wsexp = /[ ]*(.*)[ ]+\n/g;
    contexp = /(<.+>)(.+\n)/g;
    xml = xml.replace(reg, '$1\n$2$3').replace(wsexp, '$1\n').replace(contexp, '$1\n$2');
    pad = 0;
    formatted = '';
    lines = xml.split('\n');
    indent = 0;
    lastType = 'other';
    transitions = {
      'single->single': 0,
      'single->closing': -1,
      'single->opening': 0,
      'single->other': 0,
      'closing->single': 0,
      'closing->closing': -1,
      'closing->opening': 0,
      'closing->other': 0,
      'opening->single': 1,
      'opening->closing': 0,
      'opening->opening': 1,
      'opening->other': 1,
      'other->single': 0,
      'other->closing': -1,
      'other->opening': 0,
      'other->other': 0
    };
    fn = function (ln) {
      var fromTo, j, key, padding, type, types, value;
      types = {
        single: Boolean(ln.match(/<.+\/>/)),
        closing: Boolean(ln.match(/<\/.+>/)),
        opening: Boolean(ln.match(/<[^!?].*>/))
      };
      type = ((function () {
        var results;
        results = [];
        for (key in types) {
          value = types[key];
          if (value) {
            results.push(key);
          }
        }
        return results;
      })())[0];
      type = type === void 0 ? 'other' : type;
      fromTo = lastType + '->' + type;
      lastType = type;
      padding = '';
      indent += transitions[fromTo];
      padding = ((function () {
        var m, ref1, results;
        results = [];
        for (j = m = 0, ref1 = indent; 0 <= ref1 ? m < ref1 : m > ref1; j = 0 <= ref1 ? ++m : --m) {
          results.push('  ');
        }
        return results;
      })()).join('');
      if (fromTo === 'opening->closing') {
        formatted = formatted.substr(0, formatted.length - 1) + ln + '\n';
      } else {
        formatted += padding + ln + '\n';
      }
    };
    for (l = 0, len = lines.length; l < len; l++) {
      ln = lines[l];
      fn(ln);
    }
    return formatted;
  },

  // puts the response data in UI
  showStatus: function (response) {
    var url, content;
    if (response.content === undefined) {
      content = response.data;
      url = response.url;
    } else {
      content = response.content.data;
      url = response.request.url;
    }
    var headers = response.headers;

    // if server is nice, and sends content-type back, we can use it
    var contentType = null;
    if (headers) {
      contentType = headers['Content-Type'] || headers['content-type'];
      if (contentType) {
        contentType = contentType.split(';')[0].trim();
      }
    }
    $('.response_body', $(this.el)).removeClass('json');
    $('.response_body', $(this.el)).removeClass('xml');

    var supportsAudioPlayback = function (contentType) {
      var audioElement = document.createElement('audio');
      return !!(audioElement.canPlayType && audioElement.canPlayType(contentType).replace(/no/, ''));
    };

    var pre;
    var code;
    if (!content) {
      code = $('<code class="rounded" />').text('no content');
      pre = $('<pre class="json" />').append(code);

      // JSON
    } else if (contentType === 'application/json' || /\+json$/.test(contentType)) {
      var json = null;
      try {
        json = JSON.stringify(JSON.parse(content), null, '  ');
      } catch (_error) {
        json = 'can\'t parse JSON.  Raw result:\n\n' + content;
      }
      code = $('<code class="rounded" />').text(json);
      pre = $('<pre class="json" />').append(code);

      // XML
    } else if (contentType === 'application/xml' || /\+xml$/.test(contentType)) {
      code = $('<code class="rounded" />').text(this.formatXml(content));
      pre = $('<pre class="xml" />').append(code);

      // HTML
    } else if (contentType === 'text/html') {
      code = $('<code class="rounded" />').html(_.escape(content));
      pre = $('<pre class="html" />').append(code);

      // Plain Text
    } else if (/text\/plain/.test(contentType)) {
      code = $('<code class="rounded" />').text(content);
      pre = $('<pre class="plain" />').append(code);


      // Image
    } else if (/^image\//.test(contentType)) {
      pre = $('<img>').attr('src', url);

      // Audio
    } else if (/^audio\//.test(contentType) && supportsAudioPlayback(contentType)) {
      pre = $('<audio controls>').append($('<source>').attr('src', url).attr('type', contentType));

      // Download
    } else if (headers['Content-Disposition'].test(/attachment/) ||
      headers['content-disposition'].test(/attachment/) ||
      headers['Content-Description'].test(/File Transfer/) ||
      headers['content-description'].test(/File Transfer/)) {

      if ('Blob' in window) {
        var type = contentType || 'text/html';
        var blob = new Blob([content], {type: type});
        var a = document.createElement('a');
        var href = window.URL.createObjectURL(blob);
        var fileName = response.url.substr(response.url.lastIndexOf('/') + 1);
        var download = [type, fileName, href].join(':');

        a.setAttribute('href', href);
        a.setAttribute('download', download);
        a.innerText = 'Download ' + fileName;

        pre = $('<div/>').append(a);
      } else {
        pre = $('<pre class="json" />').append('Download headers detected but your browser does not support downloading binary via XHR (Blob).');
      }

      // Location header based redirect download
    } else if (headers.location || headers.Location) {
      window.location = response.url;

      // Anything else (CORS)
    } else {
      code = $('<code class="rounded" />').text(content);
      pre = $('<pre class="json" />').append(code);
    }

    var response_body = pre;
    $('.request_url', $(this.el)).html('<pre><code class="hljs rounded"></code></pre>');
    $('.request_url pre code', $(this.el)).text(url);
    $('.response_code', $(this.el)).html('<pre><code class="hljs rounded">' + response.status + '</code></pre>');
    $('.response_body', $(this.el)).html(response_body);
    // $('.response_headers', $(this.el)).html('<pre><code class="rounded">' + _.escape(JSON.stringify(response.headers, null, '  ')).replace(/\n/g, '<br>') + '</code></pre>');
    $('.response_headers', $(this.el)).html('<pre><code class="rounded json">' + JSON.stringify(response.headers, null, '  ') + '</code></pre>');
    $('.response', $(this.el)).slideDown();
    $('.response_throbber', $(this.el)).hide();
    var response_body_el = $('.response_body pre code', $(this.el))[0],
        response_headers_el = $('.response_headers pre code', $(this.el))[0];

    $(".submit", $(this.el)).button("reset");

    // only highlight the response if response is less than threshold, default state is highlight response
    var opts = this.options.swaggerOptions;
    if (opts.highlightSizeThreshold && response.data.length > opts.highlightSizeThreshold) {
      return response_body_el;
    } else {
      hljs.highlightBlock(response_body_el);
      hljs.highlightBlock(response_headers_el);
      return
    }
  },

  scrollLink: function (e) {
    function o(e) {
      if ("self" === e) {
        var n = $(window).scrollTop();
        return $(window).scrollTop(n)
      }

      return $(window).scrollTop(e)
    }

    var n = $(e.currentTarget),
        t = n.parents(".endpoint").first().offset().top;
    o(t);
  },

  toggleSamples: function (e) {
    function o(t) {
      if ("self" === t) {
        var n = $(window).scrollTop();
        return $(window).scrollTop(n)
      }
      return $(window).scrollTop(t)
    }

    var r = $("#resources"),
        n = $(e.currentTarget);
       // operation = n.parents(".operation");

    r.find(".content").toggleClass("col-lg-8 col-lg-6");
    r.find(".samples").toggleClass("col-lg-4 col-lg-6");
    r.find(".samples .model-signature").toggleClass("d-none")

    r.toggleClass("samples-collapsed");
    n.find('.text').text("Hide Samples");
    r.hasClass("samples-collapsed") && n.find('.text').text("Show Samples");

    // setTimeout(function () {
      var t = n.parents(".endpoint").first().offset().top;
      // r.removeClass("is-collapsing");
      // o(t)
      o(t)
    // }, 500)
  },


});

'use strict';

SwaggerUi.Views.ParameterContentTypeView = Backbone.View.extend({
  initialize: function  () {},

  render: function(){
    $(this.el).html(Handlebars.templates.parameter_content_type(this.model));

    //$('label[for=parameterContentType]', $(this.el)).text('Parameter content type:');

    return this;
  }

});
'use strict';
/*
 * [TODO] defaultProperties is not take in the required properties into consideration, this implementation respects the specs of JSON Editor v0.7.22
  {
   {
     "type": "object",
     "properties": {
     "name": {"type": "string"},
     "age": {"type": "integer"}
   },
   defaultProperties": ["name"]
  }
 */
function setDefaultProperties(obj) {
  if (obj instanceof Object) {
    for (var k in obj){
      if(obj.hasOwnProperty("type") && obj.type == "object") {
        obj.defaultProperties = obj.required ? obj.required : [];
      }
      // recursive call to setDefaultProperties
      setDefaultProperties( obj[k] );
    }
  } else {
    // not an Object, break the recursion.
  };
}

SwaggerUi.Views.ParameterView = Backbone.View.extend({
  initialize: function(){
    Handlebars.registerHelper('isArray', function(param, opts) {
      if (param.type.toLowerCase() === 'array' || param.allowMultiple) {
        opts.fn(this);
      } else {
        opts.inverse(this);
      }
    });
  },

  render: function() {
    var type = this.model.type || this.model.dataType;

    if (typeof type === 'undefined') {
      var schema = this.model.schema;
      if (schema && schema.$ref) {
        var ref = schema.$ref;
        if (ref.indexOf('#/definitions/') === 0) {
          type = ref.substring('#/definitions/'.length);
        } else {
          type = ref;
        }
      }
    }

    this.model.type = type;
    this.model.paramType = this.model.in || this.model.paramType;
    this.model.isBody = this.model.paramType === 'body' || this.model.in === 'body';
    this.model.isFile = type && type.toLowerCase() === 'file';
    this.model.default = (this.model.default || this.model.defaultValue);

    if(this.model.format === 'password') {
        this.model.inputType = 'password';
    } else {
        this.model.inputType = 'text';
    }

    if (this.model.allowableValues) {
      this.model.isList = true;
    }

    var template = this.template();
    $(this.el).html(template(this.model));

    var signatureModel = {
      sampleJSON: this.model.sampleJSON,
      isParam: true,
      signature: this.model.signature,
      defaultRendering: this.model.defaultRendering
    };

    var isParam = false;

    if( this.options.swaggerOptions.jsonEditor && this.model.isBody && this.model.schema){
      var jsonEditorOptions = this.options.swaggerOptions.jsonEditorOptions;
      var $self = $(this.el);
      if (jsonEditorOptions && jsonEditorOptions.noDefaultProperties) setDefaultProperties(this.model.schema);
      this.model.jsonEditor =
        /* global JSONEditor */
          new JSONEditor($('.editor_holder', $self)[0],
              {schema: this.model.schema, startval : this.model.default,
                ajax:true,
                disable_properties:jsonEditorOptions && jsonEditorOptions.disableProperties,
                disable_edit_json:jsonEditorOptions && jsonEditorOptions.disableEditJson,
                remove_empty_properties:jsonEditorOptions && jsonEditorOptions.removeEmptyProperties,
                iconlib: 'swagger' });
      // This is so that the signature can send back the sample to the json editor
      // TODO: SignatureView should expose an event "onSampleClicked" instead
      signatureModel.jsonEditor = this.model.jsonEditor;
      $('.body-textarea', $self).hide();
      $('.editor_holder', $self).show();
      $('.parameter-content-type', $self)
        .change(function(e){
          if(e.target.value === 'application/xml'){
            $('.body-textarea', $self).show();
            $('.editor_holder', $self).hide();
            this.model.jsonEditor.disable();
          }
          else {
            $('.body-textarea', $self).hide();
            $('.editor_holder', $self).show();
            this.model.jsonEditor.enable();
          }
        });
    }

    if (this.model.isBody) {
      isParam = true;
    }

    var contentTypeModel = {
      isParam: isParam
    };

    contentTypeModel.consumes = this.model.consumes;

    if (isParam) {
      var parameterContentTypeView = new SwaggerUi.Views.ParameterContentTypeView({model: contentTypeModel});
      $('.parameter-content-type', $(this.el)).append(parameterContentTypeView.render().el);
    }

    else {
      var responseContentTypeView = new SwaggerUi.Views.ResponseContentTypeView({model: contentTypeModel});
      $('.response-content-type', $(this.el)).append(responseContentTypeView.render().el);
    }

    return this;
  },

  // Return an appropriate template based on if the parameter is a list, readonly, required
  template: function(){
    if (this.model.isList) {
      return Handlebars.templates.param_list;
    } else {
      if (this.options.readOnly) {
        if (this.model.required) {
          return Handlebars.templates.param_readonly_required;
        } else {
          return Handlebars.templates.param_readonly;
        }
      } else {
        if (this.model.required) {
          return Handlebars.templates.param_required;
        } else {
          return Handlebars.templates.param;
        }
      }
    }
  }
});
'use strict';

SwaggerUi.Views.ResourceView = Backbone.View.extend({
  initialize: function (opts) {
    opts = opts || {};
    this.router = opts.router;
    this.auths = opts.auths;
    if ('' === this.model.description) {
      this.model.description = null;
    }
    if (this.model.description) {
      this.model.summary = this.model.description;
    }
  },

  render: function () {
    var methods = {};


    $(this.el).html(Handlebars.templates.resource(this.model));
    // Render each operation
    for (var i = 0; i < this.model.operationsArray.length; i++) {
      var operation = this.model.operationsArray[i];
      var counter = 0;
      var id = operation.nickname;

      while (typeof methods[id] !== 'undefined') {
        id = id + '_' + counter;
        counter += 1;
      }

      methods[id] = operation;

      operation.nickname = id;
      operation.parentId = this.model.id;
      operation.definitions = this.model.definitions; // make Json Schema available for JSonEditor in this operation

      this.addOperation(operation);
    }

    return this;
  },

  addOperation: function (operation) {

    operation.number = this.number;

    // Render an operation and add it to operations li
    var operationView = new SwaggerUi.Views.OperationView({
      model: operation,
      router: this.router,
      tagName: 'div',
      className: 'endpoint',
      swaggerOptions: this.options.swaggerOptions,
      auths: this.auths
    });

    $('.endpoints', $(this.el)).append(operationView.render().el);

    this.number++;

  },

  // Generic Event handler (`Docs` is global)


  callDocs: function (fnName, e) {
    e.preventDefault();
    Docs[fnName](e.currentTarget.getAttribute('data-id'));
  }
});
'use strict';

SwaggerUi.Views.ResponseContentTypeView = Backbone.View.extend({
  initialize: function(){},

  render: function(){
    $(this.el).html(Handlebars.templates.response_content_type(this.model));

    //$('label[for=responseContentType]', $(this.el)).text('Response Content Type');

    return this;
  }
});
'use strict';

SwaggerUi.Views.SidebarHeaderView = Backbone.View.extend({
  initialize: function (opts) {
    this.options = opts || {};
    this.router = this.options.router;
  },

  events: {
    'click [data-endpoint]': 'clickSidebarItem'
  },

  render: function () {
    $(this.el).html(Handlebars.templates.sidebar_header(this.model));

    for (var i = 0; i < this.model.operationsArray.length; i++) {
      var item = this.model.operationsArray[i].operation;
      item.nickname = this.model.operationsArray[i].nickname;
      item.parentId = this.model.operation.parentId;
      this.addSidebarItem(item, i);
    }

    return this;
  },

  addSidebarItem: function (item, i) {
    var sidebarItemView = new SwaggerUi.Views.SidebarItemView({
      model: item,
      tagName: 'a',
      className : 'nav-link item',
      attributes: {
          "href": '#!/'+item.parentId+'/'+item.nickname,
          "onClick": 'return false',
          "data-endpoint": item.parentId + '_' + item.nickname
      },
      router: this.router,
      swaggerOptions: this.options.swaggerOptions
    });
    $('.sub_menu', $(this.el)).append(sidebarItemView.render().el);
  },

  clickSidebarItem: function (e) {
    var elem = $(e.target);
    var eln = $("#" + elem.attr("data-endpoint"));

    if (elem.is(".item")) {
      scroll(elem.attr("data-endpoint"));
      setSelected(elem);
      updateUrl(elem.attr("href"))
      // updateUrl(eln.find(".path a").first().attr("href"))
    }

    /* scroll */
    function scroll(elem) {
      var i = $("#sticky_nav").outerHeight();
      var r = $("#" + elem).offset().top - i - 10;
      matchMedia() && (r = $("#" + elem).offset().top - 10);
      scrollT(r)
    }

    /* set selected value and select operation (class) */
    function setSelected(element) {
      {
        var nav = $("#sticky_nav [data-navigator]");
        $("#" + element.attr("data-endpoint"))
      }
      nav.find("[data-selected]").removeClass("active");
      nav.find("[data-selected]").removeAttr("data-selected");
      element.addClass("active");
      element.attr("data-selected", "");
      $("#sticky_nav").find("[data-selected-value]").html(element.text())
    }

    /* update navigation */
    function updateUrl(element) {
      history.pushState && history.pushState(null, null, element)
    }

    function matchMedia() {
      return true;
      // return window.matchMedia("(min-width: 992px)").matches;
    }

    function scrollT(e) {
      if ("self" === e) {
        var n = $(window).scrollTop();
        return $(window).scrollTop(n)
      }

      return $(window).scrollTop(e)
    }
  }

});
'use strict';

SwaggerUi.Views.SidebarItemView = Backbone.View.extend({

  initialize: function (opts) {
    this.options = opts || {};
    this.router = this.options.router;
  },

  render: function () {
    $(this.el).html(Handlebars.templates.sidebar_item(this.model));
    return this;
  }

});
'use strict';

SwaggerUi.Views.SignatureView = Backbone.View.extend({
  events: {
    'mousedown .snippet': 'snippetToTextArea'
  },

  initialize: function () {
  },

  render: function () {
    $(this.el).html(Handlebars.templates.signature(this.model));
    this.isParam = this.model.isParam;
    return this;
  },

  // handler for snippet to text area
  snippetToTextArea: function (e) {
    if (this.isParam) {
      if (e) {
        e.preventDefault();
      }

      var textArea = $('textarea', $(this.el.parentNode.parentNode.parentNode));
      if ($.trim(textArea.val()) === '') {
        textArea.val(this.model.sampleJSON);
         // TODO move this code outside of the view and expose an event instead
         if( this.model.jsonEditor && this.model.jsonEditor.isEnabled()){
            this.model.jsonEditor.setValue(JSON.parse(this.model.sampleJSON));
         }
      }
    }
  }
});
'use strict';

SwaggerUi.Views.StatusCodeView = Backbone.View.extend({
  initialize: function (opts) {
    this.options = opts || {};
    this.router = this.options.router;
  },

  render: function(){
    $(this.el).html(Handlebars.templates.status_code(this.model));

    if (this.router.api.models.hasOwnProperty(this.model.responseModel)) {
      var responseModel = {
        sampleJSON: JSON.stringify(this.router.api.models[this.model.responseModel].createJSONSample(), null, 2),
        isParam: false,
        signature: this.router.api.models[this.model.responseModel].getMockSignature(),
      };

      var responseModelView = new SwaggerUi.Views.SignatureView({model: responseModel, tagName: 'div'});
      $('.model-signature', this.$el).append(responseModelView.render().el);
    } else {
      $('.model-signature', this.$el).html('');
    }
    return this;
  }
});}).call(this);