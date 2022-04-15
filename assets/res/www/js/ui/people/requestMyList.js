/**
 * @file : requestMyList.js
 * @author : suhyun
 * @date : 2022.04.15
 */

 (function ($, CONFIG, window) {
    var ENV = CONFIG.ENV;
    var MSG = CONFIG.MSG;
    var CONSTANT = CONFIG.CONSTANT;
    var SERVER_CODE = CONFIG.SERVER_CODE;
    var SERVER_PATH = CONFIG.SERVER_PATH;
    var page = {
        els: {
            $category: null,
            $requestList: null,
        },
        data: {},
        init: function init() {
            var self = this;
            self.els.$requestList = $('#request-list');
            self.els.$category.val(M.data.param("category"));
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
            var self = this;
            $.sendHttp({
                path: SERVER_PATH.REQUEST_MYLIST,
                data:{},
                succ: function(data){
                    console.log(data);
                    for(var i = 0; i < data.list.length; i++){
                        self.showRequestList(data, i);
                    }
                },
                error: function(data, status){
                    alert("ERROR");
                }
            })
        },
        initEvent: function initEvent() {
            // Dom Event 바인딩
            var self = this;
        },
        showRequestList: function showRequestList(data, i){
            $("div#requst-list").html(" ");
            $("#request-list").append(HTML.REQUEST_LIST);
            $("li.div-card:eq("+i+")").attr('id', data.list[i].requestNumber);
            $("h3.card-title:eq("+i+")").html(data.list[i].requestTitle);
            $("p.card-day:eq("+i+")").html(data.list[i].requestDate);
            $("span.people-id:eq("+i+")").html(data.list[i].nickname);
            $("p.request-title:eq("+i+")").html(data.list[i].requestTitle);
        }
    };
    window.__page__ = page;
})(jQuery, __config__, window);

(function ($, M, pageFunc, window) {

    M.onReady(function () {
        pageFunc.init();
        pageFunc.initView();
        pageFunc.initEvent();
    });

})(jQuery, M, __page__, window);