function open_win(url_add){
    window.open(url_add, 'orderDetail', 'width=300, height=200, menubar=yes, status=no, location=no, toolbar=no, scrollbars=yes, resize=no');
}

var _validFileExtensions = [".jpg", ".jpeg", ".bmp", ".gif", ".png"];

function validateUpload(oForm){
    var arrInputs = oForm.getElementsByTagName("input");
    for (var i = 0; i < arrInputs.length; i++){
        var oInput = arrInputs[i];
        if(oInput.type == "file"){
            var sFileName = oInput.value();
            if(sFileName.length > 0) {
                var blnValid = false;
                for (var j = 0; j < _validFileExtensions; j++) {
                    var sCurExtensions = _validFileExtensions[j];
                    if (sFileName.substr(sFileName.length - sCurExtensions.length, sCurExtensions.length).toLowerCase() == sCurExtensions.toLowerCase()) {
                        blnValid = true;
                        break;
                    }
                }
                if (!blnValid) {
                    alert("Файл " + sFileName + " имеет недопустимы формат, разрешены следующие форматы: " + _validFileExtensions.join(", "));
                    return false;
                }
            }else if(confirm("Вы хотите продолжить без изображения?")) {
                return true;
            }else {
                return false;
            }
        }
    }
    return true;
}