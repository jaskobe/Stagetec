$(function(){var n=function(){return this};n.prototype={init:function(){this.renderTab(),this.bindEvent()},renderTab:function(){$(".stagetec-tab-menu.menu .item").tab(),$(".tab-menu.menu .item").tab()},bindEvent:function(){this.viewMore()},viewMore:function(){var n=$(".view-more");n.click(function(){var n=$(this);n.siblings(".board-card-wrap").addClass("show-more"),n.hide()})}},(new n).init()});