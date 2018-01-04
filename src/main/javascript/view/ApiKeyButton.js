'use strict';

SwaggerUi.Views.ApiKeyButton = Backbone.View.extend({ // TODO: append this to global SwaggerUi

  events:{
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
    var key = encodeURIComponent($('#input_apiKey_'+this.model.name)[0].value);
    if (key && key.trim() != "") {
        var apiKeyAuth = new SwaggerClient.ApiKeyAuthorization(this.model.name, key, this.model.in);
        window.swaggerUi.api.clientAuthorizations.add(this.model.name, apiKeyAuth);
        log("added " + this.model.name + ":" + key + " in " + this.model.in);
    }
  },

  template: function(){
    return Handlebars.templates.apikey_button_view;
  }

});