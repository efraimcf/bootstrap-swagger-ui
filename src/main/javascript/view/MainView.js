'use strict';

SwaggerUi.Views.MainView = Backbone.View.extend({

  events: {
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
    // Render the outer container for resources
    $(this.el).html(Handlebars.templates.main(this.model));

    // Add Auth Options
    var apiKeys = [];
    if (this.model.securityDefinitions) {
      for (var name in this.model.securityDefinitions) {
        var auth = this.model.securityDefinitions[name];
        var button;

        if (auth.type === 'apiKey') {
          apiKeys.push(auth);
        }

        if (auth.type === 'http') {
          if(auth.scheme === 'basic'){
            button = new SwaggerUi.Views.BasicAuthButton({model: auth, router: this.router}).render().el;
          } else {
            button = new SwaggerUi.Views.BearerButton({model: auth, router: this.router}).render().el;
          }
          $('#auth_options', $(this.el)).append(button);
        }
      }
    }
    this.addApiKeys(apiKeys);

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

    return this;
  },

  addApiKeys: function (apikeys) {
    if(apikeys.length > 0){
      var button;
      if(apikeys.length == 1){
        var auth = apikeys[0];
        button = new SwaggerUi.Views.ApiKeyButton({model: auth, router: this.router}).render().el;
      } else {
        button = new SwaggerUi.Views.ApiKeys({model: apikeys, router: this.router}).render().el;
      }
      $('#auth_options', $(this.el)).append(button);
    }
  },

  addResource: function (resource, auths) {
    // Render a resource and add it to resources li
    resource.id = resource.id.replace(/\s/g, '_');
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

  addSidebarHeader: function (resource, i) {
    resource.id = resource.id.replace(/\s/g, '_');
    var sidebarView = new SwaggerUi.Views.SidebarHeaderView({
      model: resource,
      tagName: 'nav',
      className: 'nav flex-column parent_menu',
      attributes: {
        "label": resource.name
      },
      router: this.router,
      swaggerOptions: this.options.swaggerOptions
    });
    $('#resources_nav', $(this.el)).append(sidebarView.render().el);
  },

  clear: function () {
    $(this.el).html('');
  }
});
