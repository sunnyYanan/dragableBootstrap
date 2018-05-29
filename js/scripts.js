htmlstr = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <meta http-equiv=\"content-type\" content=\"text\/html; charset=UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <meta charset=\"utf-8\">\r\n  <title></title>\r\n  <link href=\"..\/lib\/bootstrap\/dist\/css\/bootstrap.css\" rel=\"stylesheet\">\r\n  <link href=\"..\/lib\/inspinia_admin-v1.8\/css\/plugins\/datapicker\/datepicker3.css\" rel=\"stylesheet\">\r\n  <link href=\"..\/lib\/inspinia_admin-v1.8\/font-awesome\/css\/font-awesome.css\" rel=\"stylesheet\">\r\n  <link href=\"..\/lib\/inspinia_admin-v1.8\/css\/plugins\/steps\/jquery.steps.css\" rel=\"stylesheet\">\r\n  <link href=\"..\/lib\/inspinia_admin-v1.8\/css\/plugins\/summernote\/summernote.css\" rel=\"stylesheet\">\r\n  <link href=\"..\/lib\/inspinia_admin-v1.8\/css\/plugins\/summernote\/summernote-bs3.css\" rel=\"stylesheet\">\r\n  <link href=\"..\/lib\/inspinia_admin-v1.8\/css\/plugins\/dataTables\/dataTables.bootstrap.css\" rel=\"stylesheet\">\r\n  <link href=\"..\/lib\/inspinia_admin-v1.8\/css\/plugins\/dataTables\/dataTables.responsive.css\" rel=\"stylesheet\">\r\n  <script src=\"..\/js\/html5shiv.js\"><\/script>\r\n  <script src=\"..\/lib\/jquery\/dist\/jquery.min.js\"><\/script>\r\n  <script src=\"..\/lib\/inspinia_admin-v1.8\/js\/jquery-2.1.1.js\"><\/script>\r\n  <script src=\"..\/js\/jquery-ui.js\"><\/script>\r\n  <script src=\"..\/js\/jquery.htmlClean.js\"><\/script>\r\n  <script src=\"..\/lib\/bootstrap\/dist\/js\/bootstrap.min.js\"><\/script>\r\n  <script src=\"..\/lib\/inspinia_admin-v1.8\/js\/plugins\/datapicker\/bootstrap-datepicker.js\"><\/script>\r\n  <script src=\"..\/lib\/inspinia_admin-v1.8\/js\/plugins\/staps\/jquery.steps.min.js\"><\/script>\r\n  <script src=\"..\/lib\/inspinia_admin-v1.8\/js\/plugins\/summernote\/summernote.min.js\"><\/script>\r\n  <script src=\"..\/lib\/inspinia_admin-v1.8\/js\/plugins\/dataTables\/jquery.dataTables.js\"><\/script>\r\n  <script src=\"..\/lib\/inspinia_admin-v1.8\/js\/plugins\/dataTables\/dataTables.bootstrap.js\"><\/script>\r\n  <script src=\"..\/lib\/inspinia_admin-v1.8\/js\/plugins\/dataTables\/dataTables.responsive.js\"><\/script>\r\n<\/head>\r\n<body>\r\n"
datePicker = "$('#data .input-group.date').datepicker({\r\n        todayBtn: \"linked\",\r\n        keyboardNavigation: false,\r\n        forceParse: false,\r\n        calendarWeeks: true,\r\n        autoclose: true\r\n    });\r\n"
textEditor = "$('.summernote').summernote();\r\n";
dataTables = " $('.dataTables-example').dataTable({\r\n        responsive: true,\r\n       destroy: true,\r\n  });";
dataTable = "<table class=\"table table-striped table-bordered table-hover dataTables-example\" >\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Rendering engine</th>\r\n                        <th>Browser</th>\r\n                        <th>Platform(s)</th>\r\n                        <th>Engine version</th>\r\n                        <th>CSS grade</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr class=\"gradeX\">\r\n                        <td>Trident</td>\r\n                        <td>Internet                             Explorer 4.0                         </td>\r\n                        <td>Win 95+</td>\r\n                        <td class=\"center\">4</td>\r\n                        <td class=\"center\">X</td>\r\n                    </tr>\r\n                    <tr class=\"gradeC\">\r\n                        <td>Trident</td>\r\n                        <td>Internet                             Explorer 5.0                         </td>\r\n                        <td>Win 95+</td>\r\n                        <td class=\"center\">5</td>\r\n                        <td class=\"center\">C</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Trident</td>\r\n                        <td>Internet                             Explorer 5.5                         </td>\r\n                        <td>Win 95+</td>\r\n                        <td class=\"center\">5.5</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Trident</td>\r\n                        <td>Internet                             Explorer 6                         </td>\r\n                        <td>Win 98+</td>\r\n                        <td class=\"center\">6</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Trident</td>\r\n                        <td>Internet Explorer 7</td>\r\n                        <td>Win XP SP2+</td>\r\n                        <td class=\"center\">7</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Trident</td>\r\n                        <td>AOL browser (AOL desktop)</td>\r\n                        <td>Win XP</td>\r\n                        <td class=\"center\">6</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Gecko</td>\r\n                        <td>Firefox 1.0</td>\r\n                        <td>Win 98+ / OSX.2+</td>\r\n                        <td class=\"center\">1.7</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Gecko</td>\r\n                        <td>Firefox 1.5</td>\r\n                        <td>Win 98+ / OSX.2+</td>\r\n                        <td class=\"center\">1.8</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Gecko</td>\r\n                        <td>Firefox 2.0</td>\r\n                        <td>Win 98+ / OSX.2+</td>\r\n                        <td class=\"center\">1.8</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Gecko</td>\r\n                        <td>Firefox 3.0</td>\r\n                        <td>Win 2k+ / OSX.3+</td>\r\n                        <td class=\"center\">1.9</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Gecko</td>\r\n                        <td>Camino 1.0</td>\r\n                        <td>OSX.2+</td>\r\n                        <td class=\"center\">1.8</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Gecko</td>\r\n                        <td>Camino 1.5</td>\r\n                        <td>OSX.3+</td>\r\n                        <td class=\"center\">1.8</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Gecko</td>\r\n                        <td>Netscape 7.2</td>\r\n                        <td>Win 95+ / Mac OS 8.6-9.2</td>\r\n                        <td class=\"center\">1.7</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Gecko</td>\r\n                        <td>Netscape Browser 8</td>\r\n                        <td>Win 98SE+</td>\r\n                        <td class=\"center\">1.7</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Gecko</td>\r\n                        <td>Netscape Navigator 9</td>\r\n                        <td>Win 98+ / OSX.2+</td>\r\n                        <td class=\"center\">1.8</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Gecko</td>\r\n                        <td>Mozilla 1.0</td>\r\n                        <td>Win 95+ / OSX.1+</td>\r\n                        <td class=\"center\">1</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Gecko</td>\r\n                        <td>Mozilla 1.1</td>\r\n                        <td>Win 95+ / OSX.1+</td>\r\n                        <td class=\"center\">1.1</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Gecko</td>\r\n                        <td>Mozilla 1.2</td>\r\n                        <td>Win 95+ / OSX.1+</td>\r\n                        <td class=\"center\">1.2</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Gecko</td>\r\n                        <td>Mozilla 1.3</td>\r\n                        <td>Win 95+ / OSX.1+</td>\r\n                        <td class=\"center\">1.3</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Gecko</td>\r\n                        <td>Mozilla 1.4</td>\r\n                        <td>Win 95+ / OSX.1+</td>\r\n                        <td class=\"center\">1.4</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Gecko</td>\r\n                        <td>Mozilla 1.5</td>\r\n                        <td>Win 95+ / OSX.1+</td>\r\n                        <td class=\"center\">1.5</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Gecko</td>\r\n                        <td>Mozilla 1.6</td>\r\n                        <td>Win 95+ / OSX.1+</td>\r\n                        <td class=\"center\">1.6</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Gecko</td>\r\n                        <td>Mozilla 1.7</td>\r\n                        <td>Win 98+ / OSX.1+</td>\r\n                        <td class=\"center\">1.7</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Gecko</td>\r\n                        <td>Mozilla 1.8</td>\r\n                        <td>Win 98+ / OSX.1+</td>\r\n                        <td class=\"center\">1.8</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Gecko</td>\r\n                        <td>Seamonkey 1.1</td>\r\n                        <td>Win 98+ / OSX.2+</td>\r\n                        <td class=\"center\">1.8</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Gecko</td>\r\n                        <td>Epiphany 2.20</td>\r\n                        <td>Gnome</td>\r\n                        <td class=\"center\">1.8</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Webkit</td>\r\n                        <td>Safari 1.2</td>\r\n                        <td>OSX.3</td>\r\n                        <td class=\"center\">125.5</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Webkit</td>\r\n                        <td>Safari 1.3</td>\r\n                        <td>OSX.3</td>\r\n                        <td class=\"center\">312.8</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Webkit</td>\r\n                        <td>Safari 2.0</td>\r\n                        <td>OSX.4+</td>\r\n                        <td class=\"center\">419.3</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Webkit</td>\r\n                        <td>Safari 3.0</td>\r\n                        <td>OSX.4+</td>\r\n                        <td class=\"center\">522.1</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Webkit</td>\r\n                        <td>OmniWeb 5.5</td>\r\n                        <td>OSX.4+</td>\r\n                        <td class=\"center\">420</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Webkit</td>\r\n                        <td>iPod Touch / iPhone</td>\r\n                        <td>iPod</td>\r\n                        <td class=\"center\">420.1</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Webkit</td>\r\n                        <td>S60</td>\r\n                        <td>S60</td>\r\n                        <td class=\"center\">413</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Presto</td>\r\n                        <td>Opera 7.0</td>\r\n                        <td>Win 95+ / OSX.1+</td>\r\n                        <td class=\"center\">-</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Presto</td>\r\n                        <td>Opera 7.5</td>\r\n                        <td>Win 95+ / OSX.2+</td>\r\n                        <td class=\"center\">-</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Presto</td>\r\n                        <td>Opera 8.0</td>\r\n                        <td>Win 95+ / OSX.2+</td>\r\n                        <td class=\"center\">-</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Presto</td>\r\n                        <td>Opera 8.5</td>\r\n                        <td>Win 95+ / OSX.2+</td>\r\n                        <td class=\"center\">-</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Presto</td>\r\n                        <td>Opera 9.0</td>\r\n                        <td>Win 95+ / OSX.3+</td>\r\n                        <td class=\"center\">-</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Presto</td>\r\n                        <td>Opera 9.2</td>\r\n                        <td>Win 88+ / OSX.3+</td>\r\n                        <td class=\"center\">-</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Presto</td>\r\n                        <td>Opera 9.5</td>\r\n                        <td>Win 88+ / OSX.3+</td>\r\n                        <td class=\"center\">-</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Presto</td>\r\n                        <td>Opera for Wii</td>\r\n                        <td>Wii</td>\r\n                        <td class=\"center\">-</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Presto</td>\r\n                        <td>Nokia N800</td>\r\n                        <td>N800</td>\r\n                        <td class=\"center\">-</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Presto</td>\r\n                        <td>Nintendo DS browser</td>\r\n                        <td>Nintendo DS</td>\r\n                        <td class=\"center\">8.5</td>\r\n                        <td class=\"center\">C/A<sup>1</sup></td>\r\n                    </tr>\r\n                    <tr class=\"gradeC\">\r\n                        <td>KHTML</td>\r\n                        <td>Konqureror 3.1</td>\r\n                        <td>KDE 3.1</td>\r\n                        <td class=\"center\">3.1</td>\r\n                        <td class=\"center\">C</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>KHTML</td>\r\n                        <td>Konqureror 3.3</td>\r\n                        <td>KDE 3.3</td>\r\n                        <td class=\"center\">3.3</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>KHTML</td>\r\n                        <td>Konqureror 3.5</td>\r\n                        <td>KDE 3.5</td>\r\n                        <td class=\"center\">3.5</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeX\">\r\n                        <td>Tasman</td>\r\n                        <td>Internet Explorer 4.5</td>\r\n                        <td>Mac OS 8-9</td>\r\n                        <td class=\"center\">-</td>\r\n                        <td class=\"center\">X</td>\r\n                    </tr>\r\n                    <tr class=\"gradeC\">\r\n                        <td>Tasman</td>\r\n                        <td>Internet Explorer 5.1</td>\r\n                        <td>Mac OS 7.6-9</td>\r\n                        <td class=\"center\">1</td>\r\n                        <td class=\"center\">C</td>\r\n                    </tr>\r\n                    <tr class=\"gradeC\">\r\n                        <td>Tasman</td>\r\n                        <td>Internet Explorer 5.2</td>\r\n                        <td>Mac OS 8-X</td>\r\n                        <td class=\"center\">1</td>\r\n                        <td class=\"center\">C</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Misc</td>\r\n                        <td>NetFront 3.1</td>\r\n                        <td>Embedded devices</td>\r\n                        <td class=\"center\">-</td>\r\n                        <td class=\"center\">C</td>\r\n                    </tr>\r\n                    <tr class=\"gradeA\">\r\n                        <td>Misc</td>\r\n                        <td>NetFront 3.4</td>\r\n                        <td>Embedded devices</td>\r\n                        <td class=\"center\">-</td>\r\n                        <td class=\"center\">A</td>\r\n                    </tr>\r\n                    <tr class=\"gradeX\">\r\n                        <td>Misc</td>\r\n                        <td>Dillo 0.8</td>\r\n                        <td>Embedded devices</td>\r\n                        <td class=\"center\">-</td>\r\n                        <td class=\"center\">X</td>\r\n                    </tr>\r\n                    <tr class=\"gradeX\">\r\n                        <td>Misc</td>\r\n                        <td>Links</td>\r\n                        <td>Text only</td>\r\n                        <td class=\"center\">-</td>\r\n                        <td class=\"center\">X</td>\r\n                    </tr>\r\n                    <tr class=\"gradeX\">\r\n                        <td>Misc</td>\r\n                        <td>Lynx</td>\r\n                        <td>Text only</td>\r\n                        <td class=\"center\">-</td>\r\n                        <td class=\"center\">X</td>\r\n                    </tr>\r\n                    <tr class=\"gradeC\">\r\n                        <td>Misc</td>\r\n                        <td>IE Mobile</td>\r\n                        <td>Windows Mobile 6</td>\r\n                        <td class=\"center\">-</td>\r\n                        <td class=\"center\">C</td>\r\n                    </tr>\r\n                    <tr class=\"gradeC\">\r\n                        <td>Misc</td>\r\n                        <td>PSP browser</td>\r\n                        <td>PSP</td>\r\n                        <td class=\"center\">-</td>\r\n                        <td class=\"center\">C</td>\r\n                    </tr>\r\n                    <tr class=\"gradeU\">\r\n                        <td>Other browsers</td>\r\n                        <td>All others</td>\r\n                        <td>-</td>\r\n                        <td class=\"center\">-</td>\r\n                        <td class=\"center\">U</td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr>\r\n                        <th>Rendering engine<\/th>\r\n                        <th>Browser<\/th>\r\n                        <th>Platform(s)<\/th>\r\n                        <th>Engine version<\/th>\r\n                        <th>CSS grade<\/th>\r\n                    <\/tr>\r\n                    <\/tfoot>\r\n                    <\/table>";
function handleSaveLayout() {
    var e = $(".demo").html();
    if (e != window.demoHtml) {
        saveLayout();
        window.demoHtml = e
    }
}

function handleJsIds() {
    handleModalIds();
    handleAccordionIds();
    handleCarouselIds();
    handleTabsIds();
    handleDatePicker();
    // handleWizard();
    handleTextEditor();
    // handleDataTable();
}

function handleDataTable() {
  $('.dataTables-example').dataTable({
        responsive: true,
       destroy: true,
  });
}

function handleTextEditor() {
  $('.summernote').summernote();
}

// function handleWizard() {
//   $('#example-basic').steps({
//     headerTag: "h3",
//     bodyTag: "section",
//     transitionEffect: "slideLeft",
//     autoFocus: true
// });
// }

function handleDatePicker() {
    $('#data .input-group.date').datepicker({
        todayBtn: "linked",
        keyboardNavigation: false,
        forceParse: false,
        calendarWeeks: true,
        autoclose: true
    });
}

function handleAccordionIds() {
    var e = $(".demo #myAccordion");
    var t = randomNumber();
    var n = "panel-" + t;
    var r;
    e.attr("id", n);
    e.find(".panel").each(function(e, t) {
        r = "panel-element-" + randomNumber();
        $(t).find(".panel-title").each(function(e, t) {
            $(t).attr("data-parent", "#" + n);
            $(t).attr("href", "#" + r)
        });
        $(t).find(".panel-collapse").each(function(e, t) {
            $(t).attr("id", r)
        })
    })
}

function handleCarouselIds() {
    var e = $(".demo #myCarousel");
    var t = randomNumber();
    var n = "carousel-" + t;
    e.attr("id", n);
    e.find(".carousel-indicators li").each(function(e, t) {
        $(t).attr("data-target", "#" + n)
    });
    e.find(".left").attr("href", "#" + n);
    e.find(".right").attr("href", "#" + n)
}

function handleModalIds() {
    var e = $(".demo #myModalLink");
    var t = randomNumber();
    var n = "modal-container-" + t;
    var r = "modal-" + t;
    e.attr("id", r);
    e.attr("href", "#" + n);
    e.next().attr("id", n)
}

function handleTabsIds() {
    var e = $(".demo #myTabs");
    var t = randomNumber();
    var n = "tabs-" + t;
    e.attr("id", n);
    e.find(".tab-pane").each(function(e, t) {
        var n = $(t).attr("id");
        var r = "panel-" + randomNumber();
        $(t).attr("id", r);
        $(t).parent().parent().find("a[href=#" + n + "]").attr("href", "#" + r)
    })
}

function randomNumber() {
    return randomFromInterval(1, 1e6)
}

function randomFromInterval(e, t) {
    return Math.floor(Math.random() * (t - e + 1) + e)
}

function gridSystemGenerator() {
    $(".lyrow .preview input").bind("keyup", function() {
        var e = 0;
        var t = "";
        var n = false;
        var r = $(this).val().split(" ", 12);
        $.each(r, function(r, i) {
            if (!n) {
                if (parseInt(i) <= 0) n = true;
                e = e + parseInt(i);
                t += '<div class="col-md-' + i + ' column"></div>'
            }
        });
        if (e == 12 && !n) {
            $(this).parent().next().children().html(t);
            $(this).parent().prev().show()
        } else {
            $(this).parent().prev().hide()
        }
    })
}

function configurationElm(e, t) {
    $(".demo").delegate(".configuration > a", "click", function(e) {
        e.preventDefault();
        var t = $(this).parent().next().next().children();
        $(this).toggleClass("active");
        t.toggleClass($(this).attr("rel"))
    });
    $(".demo").delegate(".configuration #addAttr a", "click", function(e) {
        e.preventDefault();
        var t = $(this).parent().parent().next().next().children();
        if (t.attr($(this).attr("addAttr"))) {
            t.removeAttr($(this).attr("addAttr"));
        } else {
            t.attr($(this).attr("addAttr"), '');
        }
    });
    $(".demo").delegate(".configuration .dropdown-menu a", "click", function(e) {
        e.preventDefault();
        var t = $(this).parent().parent();
        var n = t.parent().parent().next().next().children();
        t.find("li").removeClass("active");
        $(this).parent().addClass("active");
        var r = "";
        t.find("a").each(function() {
            r += $(this).attr("rel") + " "
        });
        t.parent().removeClass("open");
        n.removeClass(r);
        n.addClass($(this).attr("rel"))
    })
}

function removeElm() {
    $(".demo").delegate(".remove", "click", function(e) {
        e.preventDefault();
        $(this).parent().remove();
        if (!$(".demo .lyrow").length > 0) {
            clearDemo()
        }
    })
}

function clearDemo() {
    $(".demo").empty()
}

function removeMenuClasses() {
    $("#menu-layoutit li button").removeClass("active")
}

function changeStructure(e, t) {
    $("#download-layout ." + e).removeClass(e).addClass(t)
}

function cleanHtml(e) {
    $(e).parent().append($(e).children().html())
}
function downloadClick(obj) {
    downloadLayoutSrc();
    // obj = obj+"?html="+$("#download-layout").html();
    // alert(obj);
    // alert($("#downloadId").attr("href"));
    // $("#downloadId").attr("href",obj);

    // Application["htmlOriValue"] = $("#download-layout").html();
    // alert(Application["htmlOriValue"]);
    window.localStorage.htmlOriValue = htmlstr+$("#download-layout").html()+"\r\n<\/body>\r\n<\/html>";
    window.localStorage.jsOriValue = "";
    if(window.localStorage.htmlOriValue.indexOf("fa-calendar") >= 0) {
    	window.localStorage.jsOriValue += datePicker;
    }
    if(window.localStorage.htmlOriValue.indexOf("class=\"summernote\"") >= 0) {
    	window.localStorage.jsOriValue += textEditor;
    }
    
    if(window.localStorage.htmlOriValue.indexOf("dataTables-example") >= 0) {
    	window.localStorage.jsOriValue += dataTables;
    }
    // alert(window.localStorage.htmlOriValue);
    // alert("Setup");
    // alert($("#downloadId").attr("href"));
    // window.open("page/download.html");

}
function downloadLayoutSrc() {
    var e = "";
    $("#download-layout").children().html($(".demo").html());
    var t = $("#download-layout").children();
    t.find(".preview, .configuration, .drag, .remove").remove();
    t.find(".lyrow").addClass("removeClean");
    t.find(".box-element").addClass("removeClean");
    t.find(".lyrow .lyrow .lyrow .lyrow .lyrow .removeClean").each(function() {
        cleanHtml(this)
    });
    t.find(".lyrow .lyrow .lyrow .lyrow .removeClean").each(function() {
        cleanHtml(this)
    });
    t.find(".lyrow .lyrow .lyrow .removeClean").each(function() {
        cleanHtml(this)
    });
    t.find(".lyrow .lyrow .removeClean").each(function() {
        cleanHtml(this)
    });
    t.find(".lyrow .removeClean").each(function() {
        cleanHtml(this)
    });
    t.find(".removeClean").each(function() {
        cleanHtml(this)
    });
    t.find(".removeClean").remove();
    $("#download-layout .column").removeClass("ui-sortable");
    $("#download-layout .row-fluid").removeClass("clearfix").children().removeClass("column");


    t.find(".note-editor").remove();
    // t.find(".dataTables_wrapper").parent().parent().innerHTML = "dddd";
    // t.find(".dataTables_wrapper").remove();
    // t.find(".dataTables_wrapper").innerHTML = "ddd";
    // alert(t.find(".dataTables-example").parent().children().first().html());
    t.find(".dataTables-example").parent().children().first().remove();
	t.find(".dataTables-example").parent().children().last().remove();

	t.find(".dataTables-example").parent().append(dataTable);

	t.find(".dataTables-example").parent().children().first().remove();

    if ($("#download-layout .container").length > 0) {
        changeStructure("row-fluid", "row")
    }

    formatSrc = $.htmlClean($("#download-layout").html(), {
        format: true,
        allowedAttributes: [
            ["id"],
            ["class"],
            ["data-toggle"],
            ["data-target"],
            ["data-parent"],
            ["role"],
            ["data-dismiss"],
            ["aria-labelledby"],
            ["aria-hidden"],
            ["data-slide-to"],
            ["data-slide"]
        ]
    });
    
    $("#download-layout").html(formatSrc);
    // $("#downloadModal textarea").empty();
    // $("#downloadModal textarea").val(formatSrc);
    // var myCodeMirror = CodeMirror.fromTextArea($("#downloadModal textarea")[0]);
}
var currentDocument = null;
var timerSave = 2e3;
var demoHtml = $(".demo").html();
$(window).resize(function() {
    $("body").css("min-height", $(window).height() - 90);
    $(".demo").css("min-height", $(window).height() - 160)
});
$(document).ready(function() {
    $("body").css("min-height", $(window).height() - 90);
    $(".demo").css("min-height", $(window).height() - 160);
    $(".demo, .demo .column").sortable({
        connectWith: ".column",
        opacity: .35,
        handle: ".drag"
    });
    $(".sidebar-nav .lyrow").draggable({
        connectToSortable: ".demo",
        helper: "clone",
        handle: ".drag",
        drag: function(e, t) {
            t.helper.width(400)
        },
        stop: function(e, t) {
            $(".demo .column").sortable({
                opacity: .35,
                connectWith: ".column"
            })
        }
    });
    $(".sidebar-nav .box").draggable({
        connectToSortable: ".column",
        helper: "clone",
        handle: ".drag",
        drag: function(e, t) {
            t.helper.width(400)
        },
        stop: function() {
            handleJsIds()
        }
    });
    $(".sidebar-nav .dataTable").draggable({
        connectToSortable: ".column",
        helper: "clone",
        handle: ".drag",
        drag: function(e, t) {
            t.helper.width(400)
        },
        stop: function() {
            handleDataTable()
        }
    });

    $("[data-target=#downloadModal]").click(function(e) {
        e.preventDefault();
        downloadLayoutSrc()
    });
    $("#download").click(function() {
        downloadLayout();
        return false
    });
    $("#downloadhtml").click(function() {
        downloadHtmlLayout();
        return false
    });
    $("#edit").click(function() {
        $("body").removeClass("devpreview sourcepreview");
        $("body").addClass("edit");
        removeMenuClasses();
        $(this).addClass("active");
        return false
    });
    $("#clear").click(function(e) {
        e.preventDefault();
        clearDemo()
    });
    $("#devpreview").click(function() {
        $("body").removeClass("edit sourcepreview");
        $("body").addClass("devpreview");
        removeMenuClasses();
        $(this).addClass("active");
        return false
    });
    $("#sourcepreview").click(function() {
        $("body").removeClass("edit");
        $("body").addClass("devpreview sourcepreview");
        removeMenuClasses();
        $(this).addClass("active");
        return false
    });
    $(".nav-header").click(function() {
        $(".sidebar-nav .boxes, .sidebar-nav .rows").hide();
        $(this).next().slideDown()
    });
    removeElm();
    configurationElm();
    gridSystemGenerator();
    setInterval(function() {
        handleSaveLayout()
    }, timerSave)
})