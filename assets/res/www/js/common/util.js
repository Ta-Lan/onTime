/**
 * 공통적으로 사용할 Util 함수들을 정의한다.
 **/

(function () {

    var module = {};

    /*
     * 값이 존재하지 않으면 특정 값으로 정의한다.
     */
    var isEmptyStr = module.isEmptyStr = function isEmptyStr(obj, str) {
        var resultStr = str || "";
        if (isEmpty(obj)) { //값이 존재하지 않으면 사용자가 정의한 스트링으로 대처
            return resultStr;
        } else { //값이 존재하면 해당 값으로
            return obj;
        }
    }

    /*
     * html 내의 찾고자 하는 Tag가 존재하는지 확인한다.
     * param : 찾고자하는 tag의 class형태 및 id형태
     *         예제: class를 찾고자하면 ".class"명 / id로 찾고자하면 "#id"명
     */
    var isHtmlTag = module.isHtmlTag = function isHtmlTag(tag) {
        if ($(tag).length > 0) {
            return true;
        } else {
            return false;
        }
    }
    /**
     * @function
     * 한자리 수일경우 앞에 0을 붙여 두자리 문자열로 반환
     * @param {string | integer} num
     * @return {string | integer} 결과 값
     */
    var digitNum = module.digitNum = function digitNum(num) {
        var num = parseInt(num);
        if (num < 10) {
            num = "0" + num;
        }
        return num;
    }
    /**
     * @function
     * 규약한 format에 맞추어 날짜 정보 반환 : YYYY.MM.DD
     * @param {string} dateStr
     * @return {string} 변환한 시간 정보 반환
     */
    var getFormatDateStr = module.getFormatDateStr = function getFormatDateStr(dateStr, format) {
        var resultDate = "";
        if (isEmpty(dateStr)) {
            resultDate = "";
        } else {
            //str YYYYMMDD
            var length = dateStr.length;
            if (isEmpty(format)) {
                resultDate = dateStr;
                return resultDate;
            }
            if (length > 6) {
                if (length > 8) {
                    if (length > 12) {
                        resultDate = digitNum(dateStr.substr(0, 4)) + format + digitNum(dateStr.substr(4, 2)) + format + digitNum(dateStr.substr(6, 2)) + " " + digitNum(dateStr.substr(8, 2)) + ":" + digitNum(dateStr.substr(10, 2)) + ":" + digitNum(dateStr.substr(12, 2));
                    } else {
                        resultDate = digitNum(dateStr.substr(0, 4)) + format + digitNum(dateStr.substr(4, 2)) + format + digitNum(dateStr.substr(6, 2)) + " " + digitNum(dateStr.substr(8, 2)) + ":" + digitNum(dateStr.substr(10, 2));
                    }
                } else {
                    resultDate = digitNum(dateStr.substr(0, 4)) + format + digitNum(dateStr.substr(4, 2)) + format + digitNum(dateStr.substr(6, 2));
                }
            } else {
                resultDate = digitNum(dateStr.substr(0, 4)) + format + digitNum(dateStr.substr(4, 2));
            }
        }
        return resultDate;
    }

    /**
     * @function
     * 규약한 format에 맞추어 날짜 정보 반환 : YYYY년 MM월 DD일 hh시 mm분
     * @param {string} dateStr
     * @return {string} 변환한 시간 정보 반환
     */
    var getFormatDateTimeStr = module.getFormatDateTimeStr = function getFormatDateTimeStr(dateStr) {
        //str YYYYMMDDhhmm
        var result = "";
        if (!isEmpty(dateStr)) {
            if (dateStr.length > 8) {
                result = digitNum(dateStr.substr(0, 4)) + "년 " + digitNum(dateStr.substr(4, 2)) + "월 " + digitNum(dateStr.substr(6, 2)) + "일 " + digitNum(dateStr.substr(8, 2)) + "시 " + digitNum(dateStr.substr(10, 2)) + "분";
            } else {
                result = digitNum(dateStr.substr(0, 4)) + "년 " + digitNum(dateStr.substr(4, 2)) + "월 " + digitNum(dateStr.substr(6, 2)) + "일";
            }
        }
        return result;
    }

    /*
     * JSON array에서 특정 값이 존재하는지 확인 함수
     * param [array] : 찾고자하는 json array
     * param [key]   : 찾고자하는  key값
     * param [value]   : 찾고자하는  value값
     * return : 값존재하면 true , 존재하지 않으면 false
     */
    var jsonArrayChk = module.jsonArrayChk = function jsonArrayChk(array, key, value) {
        var result = false;
        var isArray = array;
        if (isEmpty(isArray)) {
            isArray = [];
        }
        $.each(isArray, function (idx, row) {
            if (isArray[idx][key] == value) {
                result = true;
                return false;
            } else {
                result = false;
            }
        });
        return result;
    }
    /*
     * JSON array에서 특정 값이 존재하면 해당 값 반환
     * param [array] : 찾고자하는 json array
     * param [key]   : 찾고자하는  key값
     * param [value]   : 찾고자하는  value값
     * return : 값존재하면 해당 array위치의 json반환 , 존재하지 않으면 false
     */
    var jsonArraySelect = module.jsonArraySelect = function jsonArraySelect(array, key, value) {
        var result = false;
        $.each(array, function (idx, row) {
            if (array[idx][key] == value) {
                result = array[idx];
                return false;
            } else {
                result = false;
            }
        });
        return result;
    }
    /*
     * JSON array에서 특정 값이 존재하면 해당 값들 배열로 담아서 반환
     * param [array] : 찾고자하는 json array
     * param [key]   : 찾고자하는  key값
     * param [value]   : 찾고자하는  value값
     * return : 값존재하면 해당 array위치의 json반환 , 존재하지 않으면 빈값
     */
    var getJsonArrayChk = module.getJsonArrayChk = function getJsonArrayChk(array, key, value) {
        var result = new Array();
        $.each(array, function (idx, row) {
            if (array[idx][key] == value) {
                result.push(array[idx]);
            }
        });
        return result;
    }
    //현재의 날짜와 전달 받은 날짜의 차이가 특정 시간 이내인지...체크하는 함수
    var timeCheck = module.timeCheck = function timeCheck(dt, checkTime) {
        var min = 60 * 1000;
        var c = new Date()
        var d = new Date(dt);
        var minsAgo = Math.floor((c - d) / (min));
        var result = false;
        if (minsAgo < 60 * checkTime) { // 12시간 이내인 경우
            result = true;
        } else {
            result = false;
        }
        return result;
    }

    //input 입력 글자수 제한
    var maxLengthCheck = module.maxLengthCheck = function maxLengthCheck(tagThis) {
        if (tagThis.value.length > tagThis.maxLength) {
            MPopup.instance(tagThis.maxLength + ' 자 이상 입력하실 수 없습니다.');
            tagThis.value = tagThis.value.slice(0, tagThis.maxLength);

        }
    }

    /**
     * 숫자만 입력
     * @param id (input #id)
     * @returns
     */
    var onKeyupNum = module.onKeyupNum = function onKeyupNum(id) {
        //    var this_id = document.getElementById(id);

        id.on("keyup", function (event) {
            event = event || window.event;
            var _val = this.value.trim();
            this.value = extractNumber(_val);
        });
    }

    /**
     * 숫자만 추출
     * @param str
     * @returns
     */
    var extractNumber = module.extractNumber = function extractNumber(str) {
        try {
            return str.replace(/[^0-9]/g, '');
        } catch (e) {
            return str;
        }
    };
    /**
     * password rule
     * @param str
     * @returns boolean
     * 1. At least one digit [0-9]
     * 2. At least one lowercase character [a-z]
     * 3. At least one uppercase character [A-Z]
     * 4. At least one special character [!@#$%^&*=.+-]
     * */
    var isCorrectPasswordRule = module.isCorrectPasswordRule = function (str) {
        if (str == null) {
            str = "";
        }
        console.log(str);// 1        2,3                4
        var _str = /^(?=.+[0-9])(?=.+[a-zA-Z])(?=.+[!@#$%^&*=.+-]){8,}/.test(str);
        console.log(_str);
        return _str;
    };

    /**
     * password 와 repassword 가 같은지 확인
     * @param {string} pass
     * @param {string} repass
     * */
    var confirmPasswordAndRePassword = module.confirmPasswordAndRePassword = function (pass, repass, /*callbackFunction*/) {
        var password = pass.trim();
        if (isCorrectPasswordRule(password) == false) {
            return alert('비밀번호는 숫자,영문,특수문자를 포함한 8자 이상이어야합니다.');
        }
        var rePassword = repass.trim();
        if (password != rePassword) {
            return alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
        }
        //callbackFunction();
    }
    /**
     * @param {string} dateStr yyyyMMdd
     * @return boolean
     * 유효한 날자형식인지 검증
     * */
    var isBirthday = module.isBirthday = function isBirthday(year, month, day) {
        var year = year;//Number(dateStr.substr(0, 4));
        var month = month;//Number(dateStr.substr(4, 2));
        var day = day;//Number(dateStr.substr(6, 2));
        var today = new Date();
        var yearNow = today.getFullYear();
        //if (year.length + month.length + day.length <= 8) {
            if (1900 > year || year > yearNow) {
                return false;
            } else if (month < 1 || month > 12) {
                return false;
            } else if (day < 1 || day > 31) {
                return false;
            } else if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
                return false;
            } else if (month == 2) {
                var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
                if (day > 29 || (day == 29 && !isleap)) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }
        //} else {
        //    return false;
        //}
    }
    /**
     * 입력값이 유효한 휴대폰 번호인지 검사
     * @param {string} cellphoneStr
     * 길이가 11
     * 휴대폰번호의 시작은 010,011,016,017,018,019
     * */
    var isCellphone = module.isCellphone = function isCellphone(cellphoneStr) {
        console.log(cellphoneStr);
        if (cellphoneStr.length != 11) {
            return false
        }
        var result = /^01[016789]/.test(cellphoneStr);
        return result;
    }


    
    window.__util__ = module;


})();