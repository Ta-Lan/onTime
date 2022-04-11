/**
 * @file :
 * @author :
 * @date :
 */

(function ($, CONFIG, window) {
    var ENV = CONFIG.ENV;
    var MSG = CONFIG.MSG;
    var CONSTANT = CONFIG.CONSTANT;
    var SERVER_CODE = CONFIG.SERVER_CODE;
    var SERVER_PATH = CONFIG.SERVER_PATH;
    var HTML = CONFIG.HTML;
    var page = {
        els: {
            $commentList : null,
        },
        data: {},
        init: function init() {
            var self = this;
            self.els.$commentList = $('#comment-list');
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
            var self = this;
            var feedNumber = M.data.param("feedNumber");
            console.log(feedNumber);x
            $.sendHttp({
                path : SERVER_PATH.FEED_DETAIL,
                data : {
                    feedNumber : feedNumber
                },
                succ : function succ(data){
                    $("div.feed-title").html(data.feedTitle);
                    $("div.feed-content").html(data.feedContent);
                    $("div.feed-writer").html(data.feedWriter);
                    $("div.feed-write-date").html(data.feedRegisterDate);
                    // 아직 파일 관련 처리 x
                },
                error : function errir(data){
                    console.log(data);
                }
            });
            $.sendHttp({
                path : SERVER_PATH.FEED_COMMENT_DETAIL,
                data : {
                    feedNumber : "FEED100021"
                },
                succ : function succ(data){
                    console.log(data);
                    for ( var i = 0; i < data.list.length ; i++){
                        $(self.els.$commentList).append(HTML.FEED_COMMENT_HTML);
                        console.log(data.list[0].nickname);
                        $("div.comment-writer:eq("+i+")").html(data.list[i].nickname);
                        $("div.comment-write-date:eq("+i+")").html(data.list[i].feedCommentsRegisterDate);
                        $("li.comment-content:eq("+i+")").html(data.list[i].feedCommentsContent)
                    }
                }
            })
        },
        initEvent: function initEvent() {
            // Dom Event 바인딩

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