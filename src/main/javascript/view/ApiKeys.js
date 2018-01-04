'use strict';

SwaggerUi.Views.ApiKeys = Backbone.View.extend({ // TODO: append this to global SwaggerUi

  events:{
    'click #apply_apikeys' : 'applyApiKeys'
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

  applyApiKeys: function(){
    for (var i = 0; i < this.model.length; i++) {
      var key = encodeURIComponent($('#input_apiKey_'+this.model[i].name)[0].value);
      if (key && key.trim() != "") {
          var apiKeyAuth = new SwaggerClient.ApiKeyAuthorization(this.model[i].name, key, this.model[i].in);
          window.swaggerUi.api.clientAuthorizations.add(this.model[i].name, apiKeyAuth);
          log("added " + this.model[i].name + ":" + key + " in " + this.model[i].in);
      }
    }
  },

  template: function(){
    return Handlebars.templates.apikeys;
  }

});