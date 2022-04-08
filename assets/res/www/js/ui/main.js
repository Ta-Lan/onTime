/**
 * @file : main.js
 * @author : ParkDoYoung
 * @date : 22.4.8
 */

(function ($, CONFIG, window) {
    var ENV = CONFIG.ENV;
    var MSG = CONFIG.MSG;
    var CONSTANT = CONFIG.CONSTANT;
    var SERVER_CODE = CONFIG.SERVER_CODE;
    var SERVER_PATH = CONFIG.SERVER_PATH;
    var page = {
        els: {
            $feedList : null,
        },
        data: {},
        init: function init() {
            var self = this;
            self.els.$feedList = $('#feed-list');

            $.sendHttp({
                path : SERVER_PATH.FEED_LIST,
                data : {
                    lastFeedNumber: '0',
                    cnt: '8'
                },
                succ : function(data){
                    for (var i=0 ; i<data.list.length(); i++){
                        self.addFeedList(data.list.get(i),i);
                    }
                    console.log(data);
                }
            });

        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
        },
        initEvent: function initEvent() {
            // Dom Event 바인딩
        },
        addFeedList: function addFeedList(feedData,idx){
            $("div.feed-list:eq("+idx+")").html(feedData.feedTitle);
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