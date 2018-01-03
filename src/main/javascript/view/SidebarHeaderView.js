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
    }

    /* scroll */
    function scroll(elem) {
      r = $("#" + elem).offset().top;
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

    function scrollT(e) {
      if ("self" === e) {
        var n = $(window).scrollTop();
        return $(window).scrollTop(n)
      }

      return $(window).scrollTop(e)
    }
  }

});