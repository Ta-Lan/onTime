/**
 * @file : proInfo.js
 * @author : ParkDoYoung
 * @date : 22.4.10
 */

(function ($, CONFIG, window) {
    var ENV = CONFIG.ENV;
    var MSG = CONFIG.MSG;
    var CONSTANT = CONFIG.CONSTANT;
    var SERVER_CODE = CONFIG.SERVER_CODE;
    var SERVER_PATH = CONFIG.SERVER_PATH;
    var page = {
        els: {
            $goPeople: null,
        },
        data: {},
        init: function init() {
            var self = this;
            self.els.$goPeople = $('#go-people');
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
            var self = this;
            self.els.$feedList = $('#feed-list');

            $.sendHttp({
                path: SERVER_PATH.FEED_LIST_BY_WRITER,
                data: {
                    lastFeedNumber: '0',
                    cnt: '8'
                },
                succ: function (data) {
                    for (var i = 0; i < data.list.length; i++) {
                        self.addFeedList(data.list[i], i);
                    }
                }
            });
        },
        initEvent: function initEvent() {
            // Dom Event 바인딩
            var self = this;
            $(self.els.$goPeople).on('click', function () {
                $.movePage({
                    url: "/www/html/people/peopleInfo.html",
                    actionType: "NO_HISTORY"
                })
            });
        },
        addFeedList: function addFeedList(feedData, idx) {
            $("strong.ellipsis_1:eq(" + idx + ")").html(feedData.feedTitle);
            $("p.ellipsis_1:eq(" + idx + ")").html(feedData.feedContent);
            $("li.feed-li:eq(" + idx + ")").attr('id', feedData.feedNumber);
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
    M.onRestore(function () {
        pageFunc.initView();
    });
})(jQuery, M, __page__, window);