'use strict';

SwaggerUi.Views.SidebarHeaderView = Backbone.View.extend({
  initialize: function (opts) {
    this.options = opts || {};
    this.router = this.options.router;
  },

  events: {
  },

  render: function () {

    this.model.nickname = this.model.operationsArray[0].nickname;
    this.model.parentId = this.model.operation.parentId;

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
          "href": '#'+item.parentId + '_' + item.nickname
      },
      router: this.router,
      swaggerOptions: this.options.swaggerOptions
    });
    $('.sub_menu', $(this.el)).append(sidebarItemView.render().el);
  }
});