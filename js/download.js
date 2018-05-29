$(document).ready(function() {
    // alert($('#download-layout').html());
    // var pare = window.opener;
    // // alert(pare);
    // if (pare != null) {
    //     var what = pare.document.getElementById("download-layout");
    //     alert(what);
    //     if (what != null) {
    //         alert(what.value);
    //     }
    // }
    // var html_ori = getQueryString("html");

    // // HTML EDITOR
    var html_box = document.querySelector('#code-html');
    html_box.value = (window.localStorage["htmlOriValue"]);
    //替换图片地址
    html_box.value = html_box.value.replace(/img\//g,"../img\/");

    // window.localStorage["jsOriValue"] = "";

    // if(html_box.value.indexOf("DataTables")>=0) {
    //     window.localStorage["jsOriValue"] += "$('.dataTables-example').dataTable({\r\n  responsive: true,\r\n  destroy: true,\r\n  });"
    // }
    // // alert(html_ori);

    var js_box = document.querySelector('#code-js');
    js_box.value = window.localStorage["jsOriValue"];
    
});


window.onload = function() {
// alert(window.opener);
    var receiver = document.getElementById('sandboxed').contentWindow;
    var domain = "*";
    // 基础模板
    var base_tpl = "<html>\n\t" +
        "<head>\n\t\t" +
        "</head>\n\t" +
        "<body>\n\t\n\t" +
        "</body>\n" +
        "</html>";

    var prepareSource = function() {
        var html = html_editor.getValue(),
            css = css_editor.getValue(),
            js = js_editor.getValue(),
            src = '';
        // HTML

        if (html) {
            var patternBodyTag = /<body([^>]*)>/im;
            var array_matches_body_tag = patternBodyTag.exec(html);
            if (array_matches_body_tag) {
                src = base_tpl.replace('<body>', '<body ' + array_matches_body_tag[1] + '>');
            }
            var patternBody = /<body[^>]*>((.|[\n\r])*)<\/body>/im
            var array_matches_body = patternBody.exec(html);
            var patternHead = /<head[^>]*>((.|[\n\r])*)<\/head>/im
            var array_matches_head = patternHead.exec(html);
            if (array_matches_body && array_matches_head) {
                src = src.replace('</body>', array_matches_body[1] + '</body>');
                if (array_matches_head) {
                    src = src.replace('</head>', array_matches_head[1] + '</head>');
                }
            } else {
                src = base_tpl.replace('</body>', html + '</body>');
            }
        } else {
            src = base_tpl.replace('</body>', html + '</body>');
        }


        // CSS
        css = '<style>' + css + '</style>';
        src = src.replace('</head>', css + '</head>');

        // Javascript
        js = '<script>' + js + '<\/script>';
        src = src.replace('</body>', js + '</body>');

        return src;
    };
    // CM OPTIONS
    var cm_opt = {
        mode: 'text/html',
        gutter: true,
        lineNumbers: true,
        autoCloseBrackets: true,
        autoCloseTags: true
    };

    // HTML EDITOR
    var html_box = document.querySelector('#code-html');
    var html_editor = CodeMirror.fromTextArea(html_box, cm_opt);


    html_editor.on('change', function(inst, changes) {
        send_data = prepareSource();
        var data = {};
        data['source'] = send_data;
        data['action'] = "renderSource";
        text = JSON.stringify(data)
        receiver.postMessage(text, domain);
    });


    // CSS EDITOR
    cm_opt.mode = 'css';
    var css_box = document.querySelector('#code-css');
    var css_editor = CodeMirror.fromTextArea(css_box, cm_opt);


    css_editor.on('change', function(inst, changes) {
        send_data = prepareSource();
        var data = {};
        data['source'] = send_data;
        data['action'] = "renderSource";
        text = JSON.stringify(data)
        receiver.postMessage(text, domain);
    });

    // JAVASCRIPT EDITOR
    cm_opt.mode = 'javascript';
    var js_box = document.querySelector('#code-js');
    var js_editor = CodeMirror.fromTextArea(js_box, cm_opt);


    js_editor.on('change', function(inst, changes) {
        send_data = prepareSource();
        var data = {};
        data['source'] = send_data;
        data['action'] = "renderSource";
        text = JSON.stringify(data)
        receiver.postMessage(text, domain);
    });
    send_data = prepareSource();
    var data = {};
    data['source'] = send_data;
    data['action'] = "renderSource";
    text = JSON.stringify(data)
    receiver.postMessage(text, domain);
}

function getQueryString(e,name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function maximizeCur(e, type) {
    
    var curTypeObject = $("#"+type+"Div");

    var e = window.event || e;
    var o = e.srcElement || e.target;//current object
    console.log(curTypeObject.siblings());

    if(o.innerHTML == "还原该窗口") {
        curTypeObject.siblings().fadeIn();
        o.innerHTML="最大化该窗口";
        curTypeObject.removeClass("col-md-12");
        curTypeObject.addClass("col-md-4");
        // curTypeObject.siblings().css('display', 'block');
        
        // curTypeObject.siblings().addClass("col-md-4");
    }else {
        curTypeObject.siblings().fadeOut();
        o.innerHTML="还原该窗口";
        curTypeObject.removeClass("col-md-4");
        curTypeObject.addClass("col-md-12");
        
        // curTypeObject.siblings().css('display', 'none');
        // curTypeObject.siblings().removeClass("col-md-4");


    }
    

}

function fileDownload() {

}