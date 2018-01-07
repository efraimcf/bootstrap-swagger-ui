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
    } else if(this.model.type === 'integer') {
      this.model.inputType = 'number';
    } else if(this.model.format === 'email') {
      this.model.inputType = 'email';
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

  template: function(){
    return Handlebars.templates.param;
  }
});