'use strict';

SwaggerUi.Views.BearerButton = Backbone.View.extend({ // TODO: append this to global SwaggerUi

  events:{
    'click #apply_bearer' : 'applyBearer'
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

  applyBearer: function(){
    var key = encodeURIComponent($('#input_bearer_'+this.model.name)[0].value);
    if (key && key.trim() != "") {
        var apiKeyAuth = new SwaggerClient.ApiKeyAuthorization("Authorization", "Bearer " + key, "header");
        window.swaggerUi.api.clientAuthorizations.add(this.model.name, apiKeyAuth);
        log("added Bearer :" + key + " in header");
    }
  },

  template: function(){
    return Handlebars.templates.bearer_button_view;
  }

});