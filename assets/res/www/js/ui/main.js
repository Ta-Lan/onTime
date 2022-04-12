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
            $feedList: null,
        },
        data: {},
        init: function init() {
            var self = this;
            self.els.$feedList = $('#feed-list');

            $.sendHttp({
                path: SERVER_PATH.FEED_LIST,
                data: {
                    lastFeedNumber: '0',
                    cnt: '8'
                },
                succ: function (data) {
                    for (var i = 0; i < data.list.length; i++) {
                        console.log(data.list[i]);
                        self.addFeedList(data.list[i], i);
                    }
                }
            });

        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
        },
        initEvent: function initEvent() {
            // Dom Event 바인딩
            $('#main-request-box').on('click', 'li', function () {
                var category = $(this).attr('id');
                console.log(category);
                $.movePage({
                    url: "/www/html/pro/requestList.html",
                    param: {
                        category: category
                    }
                })
            });
            $('#feed-list').on('click', 'li', function () {
                var feedNumber = $(this).attr('id');
                console.log(feedNumber);
                $.movePage({
                    url: "/www/html/pro/feedDetail.html",
                    param: {
                        feedNumber: feedNumber
                    }
                });
            });
        },
        addFeedList: function addFeedList(feedData, idx) {
            $("strong.ellipsis_1:eq(" + idx + ")").html(feedData.feedTitle);
            $("p.ellipsis_1:eq(" + idx + ")").html(feedData.feedContent);
            $("li.feed-li:eq(" + idx + ")").attr('id', feedData.feedNumber);
            if (feedData.filePath === null){
                $("div.thumbnail:eq(" + idx + ")").html("<img src='/res/www/img/profile-image.png'/>");
            }else{
                $("div.thumbnail:eq(" + idx + ")").html("<img src='" +feedData.filePath +feedData.storeFileName +"'/>");
            }
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