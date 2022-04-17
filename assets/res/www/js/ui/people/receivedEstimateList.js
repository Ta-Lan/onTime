/**
 * @file : receivedEstimateList.js
 * @author : suhyun
 * @date : 2022.04.17
 */

 (function ($, CONFIG, window) {
    var ENV = CONFIG.ENV;
    var MSG = CONFIG.MSG;
    var CONSTANT = CONFIG.CONSTANT;
    var SERVER_CODE = CONFIG.SERVER_CODE;
    var SERVER_PATH = CONFIG.SERVER_PATH;
    var page = {
        els: {
            $requestStatus: null,
            $requestContent: null,
            $requestDate: null,
            $myRequest: null,
            $requestNumber: null,

        },
        data: {},
        init: function init() {
            var self = this;
            self.els.$requestStatus = $('#request-status');
            self.els.$requestContent = $('#request-content');
            self.els.$requestDate = $('#request-date');
            self.els.$myRequest = $('#my-request');
            self.els.$requestNumber = M.data.param("requestNumber");
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
            var self = this;
            var status = '';
            //위에 정보 띄울 거
            $.sendHttp({
                path: SERVER_PATH.REQUEST_DETAIL,
                data:{
                    requestNumber: self.els.$requestNumber
                },
                succ: function(data){
                    console.log(data);
                    if(data.requestStatus == 1){
                        status = '요청 마감';
                    }
                    else{
                        status = '요청 진행중';
                    }
                    self.els.$requestStatus.text(status);
                    self.els.$requestContent.text(data.requestContent);
                    self.els.$requestDate.text(data.requestDate);
                }

            })
            //밑에 목록 띄울 거
            $.sendHttp({
                path: SERVER_PATH.ESTIMATE_LIST,
                data:{
                    requestNumber: requestNumber
                },
                succ: function(data){
                    console.log(data);
                    for(var i = 0; i < data.list.length; i++){
                    //사진 고수닉네임 친절점수 리뷰갯수 견적서이름
                        self.showEstiamteList(data, i);
                    }
                },
                error: function(data, status){
                    alert("견적서 리스트를 불러오는 데 실패하였습니다.");
                }
            })
        },
        initEvent: function initEvent() {
            // Dom Event 바인딩
            var self = this;
            self.els.$myRequest.on('click', function(){
                $.movePage({
                    url:"/www/html/people/requestDetail.html",
                    param:{
                        requestNumber: self.els.$requestNumber
                    }
                });
            });
        },
        showEstiamteList: function showEstiamteList(data, i){
            
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