/**
 * @file : definition.js 상수 값을 모아두는 공통 JS
 * @author :
 * @date :
 */
(function (window, M) {
    var module = {};
    var IS_DEV = true; // true = 소담씨 노트북, false = 목업서버

<<<<<<< HEAD
=======
<<<<<<< HEAD
    var IS_DEV = false; // true = 소담씨 노트북, false = 목업서버
=======
<<<<<<< HEAD
    var IS_DEV = true; //true->OT false->MS
=======
    var IS_DEV = false; // true = 소담씨 노트북, false = 목업서버
>>>>>>> 55d55524065aa7b09fde4d52eafcb1fc087fcd67
>>>>>>> suhyun
>>>>>>> d929d5d3ddd28a3c27582cad76b8d47dc692ba5a
    var IS_PROD = !IS_DEV;


    // 앱 환경변수 값
    var ENV = module.ENV = {
        IS_DEV: IS_DEV, // 개발 모드 여부
<<<<<<< HEAD
        SERVER_NAME: IS_PROD ? "MS_SERVER" : "OT_SERVER" //바라볼 서버 이름 (Manifest.xml에 설정되어있는 이름)
=======
<<<<<<< HEAD
        SERVER_NAME: IS_PROD ? "MU_SERVER" : "OT_SERVER" //바라볼 서버 이름 (Manifest.xml에 설정되어있는 이름)
=======
<<<<<<< HEAD
        SERVER_NAME: IS_PROD ? "MS_SERVER" : "OT_SERVER" //바라볼 서버 이름 (Manifest.xml에 설정되어있는 이름)
=======
        SERVER_NAME: IS_PROD ? "MU_SERVER" : "OT_SERVER" //바라볼 서버 이름 (Manifest.xml에 설정되어있는 이름)
>>>>>>> 55d55524065aa7b09fde4d52eafcb1fc087fcd67
>>>>>>> suhyun
>>>>>>> d929d5d3ddd28a3c27582cad76b8d47dc692ba5a
        , UPLOAD_URL: IS_PROD ? "http://192.168.0.56:8888/" : "http://192.168.0.56:8888/"
        , INDICATOR: true //서버통신시 indicator 여부
    };

    //서버 전문 요청 목록
    var SERVER_PATH = module.SERVER_PATH = {
        LOGIN: "api/people/login", //로그인
        DUPLICATE1: "api/people/duplicate1", //아이디 중복 체크
        DUPLICATE2: "api/people/duplicate2", //이메일 중복 체크
        DUPLICATE3: "api/people/duplicate3", //닉네임 중복 체크
        JOIN: "api/people/join", //회원가입
        JOIN_WITH_IMAGE: "api/people/joinWithImage", //회원가입
        FIND_ID: "api/people/findId", //아이디 찾기
        FIND: "api/people/find", //비밀번호 변경 전 개인정보 확인
        PASSWORD: "api/people/password", //비밀번호 변경
        OUT: "api/people/out", //회원 탈퇴
        INFO: "api/people/info", //회원 정보 조회
        UPDATE: "api/people/update", //회원 정보 수정
        UPDATE_INTRO: "api/people/updateIntro",//회원 소개 수정
        CHECK_PASSWORD: "api/people/chkPwd", //회원 비밀번호 확인
        PRO_REGIST: "api/pro/regist",
        SEARCH_LICENSE: "api/pro/searchLicense",
        


        //Pro
        PRO_INFO:"api/pro/info",
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> 55d55524065aa7b09fde4d52eafcb1fc087fcd67
>>>>>>> suhyun
>>>>>>> d929d5d3ddd28a3c27582cad76b8d47dc692ba5a
        //request
        REQUEST_WRITE: "api/request/write", // request 글쓰기
        REQUEST_LIST: "api/request/list", // request list
        REQUEST_DETAIL: "api/request/detail",
<<<<<<< HEAD
=======

        //estimate
        ESTIMATE_REGIST: "api/estimate/regist",
        ESTIMATE_LIST: "api/estimate/list",
        ESTIMATE_DETAIL: "api/estimate/detail",
        ESTIMATE_MATCHED: "api/estimate/matched",
>>>>>>> suhyun

        //messagewe
        GET_MESSAGE: "api/message/info", // message info
        SET_MESSAGE: "api/message/send", // send message
        GET_MESSAGE_LIST: "api/message/list",

        //feed
        FEED_REGIST: "api/feed/regist", //피드 등록
        FEED_UPDATE: "api/feed/update", //피드 업데이트
        FEED_LIST: "api/feed/list", //피드 리스트
        FEED_DETAIL: "api/feed/detail", //피드 디테일
        FEED_DELETE: "api/feed/delete", //피드 삭제
        FEED_UPDATE_WITH_IMAGE: "api/feed/updateWithImage",
        FEED_WRITE_WITH_IMAGE: "api/feed/registWithImage",
        FEED_COMMENT_REGIST: "api/feed/commentsRegist", //피드 댓글 작성
        FEED_COMMENT_DETAIL: "api/feed/commentsDetail", //피드 댓글 조회
        FEED_COMMENT_DELETE: "api/feed/commentsDelete", //피드 댓글 삭제
        FEED_LIST_BY_WRITER: "api/feed/listByWriter", //피드 작성자별 리스트

        //estimate
        ESTIMATE_REGIST: "api/estimate/regist", //견적서 등록
        ESTIMATE_LIST: "api/estimate/list",
        ESTIMATE_DETAIL: "api/estimate/detail",
        ESTIMATE_MATCH: "api/estimate/matched",

    };

    var SERVER_CODE = module.SERVER_CODE = {
        SUCC: '0000', // 성공시
    }

    // 상수 키 값
    var CONSTANT = module.CONSTANT = {
        AUTO_LOGIN_AUTH: 'AUTO_LOGIN_AUTH'
    }

    // 메시지 문자열 상수
    var MSG = module.MSG = {
        INDICATOR_MSG: "통신중..." //서버통신시 default indicator_msg
        , DEFAULT_ERROR_MSG: "네트워크 통신 중 오류가 발생했습니다."
    };

    // html default form
    var HTML = module.HTML = {
        FEED_COMMENT_HTML: "<ul>\n" +
            "                    <li>\n" +
            "                        <div class=\"comment-writer-info\">\n" +
            "                            <div class=\"comment-writer\">" +
            // "                               김people" +
            "                               </div>\n" +
            "                            <div class=\"comment-write-date\"><span class=\"delete-comment\">X</span></div>\n" +
            "                        </div>\n" +
            "                    </li>\n" +
            "                    <li class='comment-content'>\n" +
            // "                        게시글 잘 보고 갑니다. 제 블로그 놀러오셔서 자격증 정보 알아가세요.\n" +
            "                    </li>\n" +
            "                </ul>",
        MESSAGE_LIST: "<li class=\"chat-container-box\">\n" +
            "                        <div class=\"chat-box-top\">\n" +
            "                            <div class=\"chat-people-info\">\n" +
            "                                <div>\n" +
            "                                    <img src=\"../../img/profile-image.png\">\n" +
            "                                </div>\n" +
            "                                <div class=\"chat-people-info-detail\">\n" +
            "                                   <div class=\"chat-people-sender\">" +
            // "                                       김pro
            "                                   </div>\n" +
            "                                   <div class=\"chat-people-category\">" +
            // "                                                   방송댄스 레슨 | 경기도 부천시
            "                                   </div>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"chat-box-bottom\">\n" +
            "                            <div class=\"chat-box-content\">\n" +
            "                                <div class=\"chat-box-text\">\n" +
            // "                                안녕하세요. 올려주신 요청서에 대한 견적서 보냅니다! 1:1 또는 소규모로 레슨 진행하고 있습니다. 편안하게 문의 주세요.\n" +
            "                                </div>\n" +
            "                                <div class=\"chat-box-badge\">  \n" +
            "                                    N\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "<div class='is-estimate-box'>" +
            "                            <div class=\"divider\"></div>\n" +
            "                            <div class=\"chat-box-price\">\n" +
            "                                <img src=\"../../img/icon-money.png\"/>\n" +
            // "                                시간당 20000원\n" +
            "                            </div>\n" +
            "                            </div>" +
            "                        </div>\n" +
            "                    </li>",
        MESSAGE_ESTIMATE: "<div class=\"s-message-bubble bubble\">\n" +
            "                            <div class=\"chat-profile\">\n" +
            "                                <img src=\"../../img/profile-image.png\"/>\n" +
            "                            </div>\n" +
            "                            <div class=\"sender-message-box\">\n" +
            "                                <div class=\"message-title\">\n" +
            "                                    <img src=\"../../img/icon-money.png\"/>\n" +
            "                                    견적서가 도착했습니다.\n" +
            "                                </div>\n" +
            "                                <div class=\"message-subtitle\">\n" +
            "                                    <span>김소담</span> 고객님 안녕하세요. 요청서에 따른 예상 금액입니다.\n" +
            "                                </div>\n" +
            "                                <div class=\"divider\"></div>\n" +
            "                                <div class=\"service-info\">\n" +
            "                                    <span class=\"service\">서비스</span>\n" +
            "                                    <span class=\"service-name\">방송댄스 레슨</span>\n" +
            "                                </div>\n" +
            "                                <div class=\"price-info\">\n" +
            "                                    <span class=\"price\">예상금액</span>\n" +
            "                                    <span class=\"price-value\">시간 당 20,000원</span>\n" +
            "                                </div>\n" +
            "                                <div class=\"divider\"></div>\n" +
            "                                <div class=\"guide\">\n" +
            "                                    <div class=\"guide-icon\">\n" +
            "                                        <img src=\"../../img/ico-noti.png\">\n" +
            "                                    </div>\n" +
            "                                    <div class=\"guide-text\">\n" +
            "                                        견적금액에 대해 궁금한 점을 채팅으로 물어보세요!\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                                <div class=\"message-foot\">\n" +
            "                                    <button class=\"estimate-btn\">\n" +
            "                                        <!--detailEstimate이동-->\n" +
            "                                        견적서 상세보기 <img src=\"../../img/ico-arrow-white.png\">\n" +
            "                                    </button>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                            <div class=\"message-status\">\n" +
            "                                <p class=\"message-time\">\n" +
            "                                    <span>" +
            // "                                       오전 10:49" +
        "                                       </span>\n" +
            "                                </p>\n" +
            "                            </div>\n" +
            "                        </div>",
        MESSAGE_RECEIVE: "<div class=\"s-message-bubble bubble\">\n" +
            "                            <div class=\"chat-profile\">\n" +
            "                                <img src=\"../../img/profile-image.png\"/>\n" +
            "                            </div>\n" +
            "                            <div class=\"sender-message-box\">\n" +
            // "                                안녕못해요?안녕못해요?안녕못해요?안녕못해요?안녕못해요?안녕못해요?안녕못해요?안녕못해요?안녕못해요?안녕못해요?안녕못해요?안녕못해요?\n" +
            "                            </div>\n" +
            "                            <div class=\"message-status\">\n" +
            "                                <p class=\"message-time\">\n" +
            "                                    <span>" +
            // "                                       오전 10:50" +
            "                                   </span>\n" +
            "                                </p>\n" +
            "                            </div>\n" +
            "                        </div>",
        MESSAGE_SEND: "<div class=\"r-message-bubble bubble\">\n" +
            "                            <div class=\"receiver-message-box\">\n" +
            // "                                안녕못해요? 혹시 죄송한데 실례가 되지 않으면 집에 보내주시겠어요?\n" +
            "                            </div>\n" +
            "                            <div class=\"message-status\">\n" +
            "                                <p class=\"message-time\">\n" +
            "                                    <span>" +
            // "                               오전 10:49" +
            "                                   </span>\n" +
            "                                </p>\n" +
            "                            </div>\n" +
            "                        </div>",
        MESSAGE_DATE: "<div class=\"chat-room-messages\">\n" +
            "                    <div class=\"chat-date\">2022년 03월 31일</div>\n" +
            "                </div>",
    };

    window.__config__ = module;
})(window, M);