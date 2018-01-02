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
    'click #apply_basic_auth' : 'applyPassword'
  },

  applyPassword: function(){
    var username = $('#input_username').val();
    var password = $('#input_password').val();
    var basicAuth = new SwaggerClient.PasswordAuthorization('basic', username, password);
    this.router.api.clientAuthorizations.add(this.model.type, basicAuth);
    this.router.load();
  },

  template: function(){
    return Handlebars.templates.basic_auth_button_view;
  }

});