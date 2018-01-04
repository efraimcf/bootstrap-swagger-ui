'use strict';

SwaggerUi.Views.BasicAuthButton = Backbone.View.extend({

  events:{
    'click #apply_basic_auth' : 'applyPassword'
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

  applyPassword: function(){
    var username = $('#input_username').val();
    var password = $('#input_password').val();
    var basicAuth = new SwaggerClient.PasswordAuthorization('basic', username, password);
    window.swaggerUi.api.clientAuthorizations.add('basic', basicAuth);
    log("added passwordAuth");
  },

  template: function(){
    return Handlebars.templates.basic_auth_button_view;
  }

});