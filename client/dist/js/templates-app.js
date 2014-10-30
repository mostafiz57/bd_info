angular.module('templates-app', ['map/add.tpl.html', 'map/map.tpl.html', 'report/report.tpl.html']);

angular.module("map/add.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("map/add.tpl.html",
    "<div id=\"{{handler}}\" class=\"modal fade\">\n" +
    "    <div class=\"modal-dialog\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n" +
    "                <h4 class=\"modal-title\">{{header}}</h4>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "\n" +
    "                <p class=\"text-warning\">{{body}}</p>\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "\n" +
    "                <p class=\"text-left\">{{footer}}</p>\n" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" data-ng-click=\"callbackbuttonright(); $event.stopPropagation()\">Launch Alert</button>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("map/map.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("map/map.tpl.html",
    "<div id=\"main-map\" class=\"container-fluid user\"   >\n" +
    "    <div class=\"row head\" style=\"height:100px\">\n" +
    "      <div class=\"new-paper-btn\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "\n" +
    "                <div class=\"col-sm-2\">\n" +
    "                    <button class=\"btn btn-primary btn-lg\" ng-click='showModel()'>\n" +
    "                        <i class=\"fa fa-plus\"></i>\n" +
    "                        New paper\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                  <label class=\"control-label\">\n" +
    "                    Publication Type\n" +
    "                  </label>\n" +
    "\n" +
    "                   <select class=\"form-control search-select\" ng-name=\"publicationType\">\n" +
    "                    <option value=\"0\">Please select publiction</option>\n" +
    "                      <option ng-repeat=\"ps in PublicatonStatus\" value=\"{{ps}}\"> {{ps}}</option>\n" +
    "                   </select>\n" +
    "                  \n" +
    "                </div>\n" +
    "\n" +
    "              \n" +
    "\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                  <label class=\"control-label\">\n" +
    "                     Paper type\n" +
    "                </label>\n" +
    "                 <select  class=\"form-control search-select\" data-ng-model=\"tp\" ng-name=\"paperType\">\n" +
    "                    <option value=\"0\">Please Select Type</option>\n" +
    "                     <option ng-repeat=\"t in PaperType\" value=\"{{t}}\">{{t}}</option>\n" +
    "                </select>\n" +
    "\n" +
    "\n" +
    "\n" +
    "              </div>\n" +
    "\n" +
    "                <div class=\"col-sm-3\">\n" +
    "\n" +
    "                  <label class=\"control-label\">\n" +
    "                    Language\n" +
    "                    </label>\n" +
    "                 <select  class=\"form-control search-select\"  ng-name=\"language\">\n" +
    "                    <option value=\"0\">Please Select Language</option>\n" +
    "                     <option ng-repeat=\"l in Language\" value=\"{{l}}\">{{l}}</option>\n" +
    "                </select>\n" +
    "              </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "      </div>\n" +
    "        \n" +
    "    </div>\n" +
    "\n" +
    "    <!-- start: News paper Table -->\n" +
    "    <div class=\"row\">\n" +
    "\n" +
    "\n" +
    "<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n" +
    "  <div class=\"modal-dialog\">\n" +
    "    <div class=\"modal-content\">\n" +
    "      <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "        <h4 class=\"modal-title\" style=\"text-align:center\">{{modalTitle}}</h4>\n" +
    "      </div>\n" +
    "      <div class=\"modal-body\">\n" +
    "\n" +
    "       \n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "               <form novalidate id=\"newspaperForm\"  class=\"form-horizontal\" name=\"formPaper\">\n" +
    "                <input type=\"hidden\" name=\"paperID\" value=\"{{deafualtForm.paper_id}}\"/>\n" +
    "\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"col-sm-3 control-label\" for=\"paper-type\">\n" +
    "                        Paper type\n" +
    "                    </label>\n" +
    "\n" +
    "                    <div class=\"col-sm-8\">\n" +
    "                         <select id=\"PaperType\" class=\"form-control search-select\" ng-model =\"deafualtForm.PaperType\" ng-name=\"paperType\">\n" +
    "                            <option value=\"NA\">Please Select Type</option>\n" +
    "                             <option ng-repeat=\"t in PaperType\" value=\"{{t}}\">{{t}}</option>\n" +
    "                        </select>\n" +
    "\n" +
    "                    </div>\n" +
    "                   \n" +
    "               </div>\n" +
    "\n" +
    "               <div class=\"form-group\">\n" +
    "                   \n" +
    "                        <label class=\"col-sm-3 control-label\" for=\"rank\">\n" +
    "                        Rank\n" +
    "                        </label>\n" +
    "\n" +
    "                        <div class=\"col-sm-3\">\n" +
    "                        <input type=\"text\" ng-pattern=\"/[0-9]/\"  class=\"form-control\" ng-model=\"deafualtForm.rank\" ng-name=\"pRank\" >\n" +
    "                        </div>\n" +
    "\n" +
    "                        <label class=\"col-sm-2 control-label\" for=\"hotlist\">\n" +
    "                            Hot list\n" +
    "                        </label>\n" +
    "                        <input type=\"checkbox\" class=\"flat-green\" checked=\"checked\" value=\"2\" ng-model =\"deafualtForm.isHotlisted\" ng-name = \"pHotlisted\">\n" +
    "                    \n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"col-sm-3 control-label\" for=\"language\">\n" +
    "                        Language <span class=\"symbol required\"></span>\n" +
    "                    </label>\n" +
    "\n" +
    "                    <div class=\"col-sm-8\">\n" +
    "                        <select  id=\"PaperLanguage\" class=\"form-control search-select\" ng-model =\"deafualtForm.laguage\" ng-name=\"language\">\n" +
    "                            <option value=\"\">Please Select Language</option>\n" +
    "                             <option ng-repeat=\"l in Language\">{{l}}</option>\n" +
    "                        </select>\n" +
    "                    </div>\n" +
    "                    \n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"col-sm-3 control-label\" for=\"publication-status\">\n" +
    "                      Publication status\n" +
    "                    </label>\n" +
    "\n" +
    "                    <div class=\"col-sm-8\">\n" +
    "                        <select id=\"publicatonStatus\" class=\"form-control search-select\" ng-model =\"deafualtForm.status\" ng-name=\"p-status\">\n" +
    "                            <option value=\"\">Please Select Publication Status</option>\n" +
    "                             <option ng-repeat=\"s in PublicatonStatus\" >{{s}}</option>\n" +
    "                        </select>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"form-group\">\n" +
    "\n" +
    "                  <label class=\"col-sm-3 control-label\" for=\"name\">\n" +
    "                    Name\n" +
    "                  </label>\n" +
    "                 \n" +
    "                    <div class=\"col-sm-8\">\n" +
    "                        <input type=\"text\" id=\"name\" placeholder=\"Please Enter Name\"  class=\"form-control\" ng-model=\"deafualtForm.name\" ng-name=\"name\" required>\n" +
    "\n" +
    "                           <span class=\"error-message\" ng-show=\"!formPaper.name.hasFocus &&  formPaper.name.$error.required\">This field is required.</span>\n" +
    "\n" +
    "                    </div>\n" +
    "                    \n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"form-group\">\n" +
    "\n" +
    "                  <label class=\"col-sm-3 control-label\" for=\"url\">\n" +
    "                    Url\n" +
    "                  </label>\n" +
    "                 \n" +
    "                    <div class=\"col-sm-8\">\n" +
    "                        <input type=\"url\" placeholder=\"Please Enter Url\"  class=\"form-control\" ng-model=\"deafualtForm.url\" ng-name=\"pUrl\"  required >\n" +
    "                    </div>\n" +
    "                    \n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"form-group\">\n" +
    "\n" +
    "                  <label class=\"col-sm-3 control-label\" for=\"editor\">\n" +
    "                    Editor\n" +
    "                  </label>\n" +
    "                 \n" +
    "                    <div class=\"col-sm-8\">\n" +
    "                        <input type=\"text\" placeholder=\"Please Enter editor\"  class=\"form-control\" ng-model=\"deafualtForm.editor\" ng-name=\"pEditor\" >\n" +
    "                    </div>\n" +
    "                    \n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"form-group\">\n" +
    "\n" +
    "                  <label class=\"col-sm-3 control-label\" for=\"startingDate\">\n" +
    "                    Starting Date\n" +
    "                  </label>\n" +
    "                 \n" +
    "                    <div class=\"col-sm-8\">\n" +
    "                        <div class='input-group date' id =\"stDate\" data-date-format=\"mm/dd/yyyy\"  ng-model=\"deafualtForm.sdate\">\n" +
    "                          <input id = \"sDate\" type='text' class=\"form-control\"  ng-model=\"deafualtForm.stDate\" ng-name=\"pStDate\" />\n" +
    "                           <span class=\"input-group-addon\" style=\"cursor:pointer\"><span class=\"glyphicon glyphicon-calendar\"></span>\n" +
    "                        </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    \n" +
    "                </div>\n" +
    "                \n" +
    "            </div>\n" +
    "              \n" +
    "          </div>\n" +
    "          \n" +
    "      </div>\n" +
    "      <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"  >Close</button>\n" +
    "        <button ng-disabled=\"formPaper.$invalid\" type=\"button\" class=\"btn btn-primary\" ng-click=addPaper(deafualtForm)>{{textSaveBtn}} </button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "        <div class=\"col-md-12\">\n" +
    "                <div class=\"panel-body\" >\n" +
    "                    <table class=\"table table-striped table-bordered table-hover table-full-width\" id=\"sample_1\" >\n" +
    "                        <thead>\n" +
    "                            <tr>\n" +
    "                                 <th style=\"display:none\" > id</th>\n" +
    "                                <th>Paper Name</th>\n" +
    "                                <th>Language</th>\n" +
    "                                <th>Publication Type</th>\n" +
    "                                <th>Url</th>\n" +
    "                                <th style=\"text-align:center\">Starting Date</th>\n" +
    "                                <th style=\"text-align:center\">Action</th>\n" +
    "                            </tr>\n" +
    "                        </thead>\n" +
    "                        <tbody >\n" +
    "                            <tr   ng-repeat=\"p in newsPapers\">\n" +
    "                             <td style=\"display:none\" > {{p.paper_id}} </td>\n" +
    "                             <td> {{p.paper_name}} </td>\n" +
    "                             <td> {{p.paper_language}} </td>\n" +
    "                             <td> {{p.publication_status}} </td>\n" +
    "                             <td> {{p.url}} </td>\n" +
    "                             <td> {{p.starting_date  | date:'d MMMM yyyy' : 'UTC' }} </td>\n" +
    "                              <td style=\"text-align:center\">\n" +
    "                                    <a href=\"#\" class=\"btn btn-xs btn-teal tooltips\" data-placement=\"top\" data-original-title=\"Edit\" ng-click='showEditModel(p)'><i class=\"fa fa-edit\"></i></a>\n" +
    "                                </td>\n" +
    "                              \n" +
    "                            </tr>\n" +
    "\n" +
    "                        </tbody>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("report/report.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("report/report.tpl.html",
    "<div class=\"container\">\n" +
    "   \n" +
    "   <!-- start: User Table -->\n" +
    "\n" +
    "   <div class=\"row\">\n" +
    "    <div style=\"height:58px\">\n" +
    "        \n" +
    "    </div>\n" +
    "       \n" +
    "   </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-offset-7 col-md-4\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"panel panel-default\" style=\"margin-bottom: 10px; margin-top: 10px; background-color:#EFEFEF\">\n" +
    "                    <div class=\"panel-body\" style=\"padding: 7px;\">\n" +
    "                        <div class=\"form-group\" style=\"margin-bottom: 0px; text-align:center \">\n" +
    "                            <label class=\"col-sm-7\" style=\"margin-top:5px\">\n" +
    "                                Select your Library by Language\n" +
    "                            </label>\n" +
    "                            <div class=\"col-sm-4\">\n" +
    "                                <span>\n" +
    "                                    <select class=\"form-control\">\n" +
    "                                        <option value=\"1\">English</option>\n" +
    "                                        <option value=\"2\">Franch</option>\n" +
    "                                        <option value=\"3\">Spanish</option>\n" +
    "                                    </select>\n" +
    "                                </span>\n" +
    "                            </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div> <!-- end: User Table -->\n" +
    "\n" +
    "\n" +
    "<div class=\"panel panel-default\">                \n" +
    "                <div class=\"panel-body\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <!-- Start BX Slider holder -->\n" +
    "                            <section class=\"row features-books\">\n" +
    "                                <section class=\"col-md-12 m-bottom\">                                    \n" +
    "                                    <div class=\"slider1\">\n" +
    "                                        <div class=\"slide\">\n" +
    "                                           <div><a href=\"#\"><img src=\"http://www.placehold.it/140x180/EFEFEF/AAAAAA?text=no+image\" alt=\"\" class=\"pro-img\" /></a> </div>                                                                      \n" +
    "                                        </div>\n" +
    "                                        <div class=\"slide\">\n" +
    "                                            <div><a href=\"#\"><img src=\"http://www.placehold.it/140x180/EFEFEF/AAAAAA?text=no+image\" alt=\"\" class=\"pro-img\" /></a> </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"slide\">\n" +
    "                                            <div><a href=\"#\"><img src=\"http://www.placehold.it/140x180/EFEFEF/AAAAAA?text=no+image\" alt=\"\" class=\"pro-img\" /></a> </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"slide\">\n" +
    "                                            <div><a href=\"#\"><img src=\"http://www.placehold.it/140x180/EFEFEF/AAAAAA?text=no+image\" alt=\"\" class=\"pro-img\" /></a> </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"slide\">\n" +
    "                                            <div><a href=\"#\"><img src=\"http://www.placehold.it/140x180/EFEFEF/AAAAAA?text=no+image\" alt=\"\" class=\"pro-img\" /></a> </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"slide\">\n" +
    "                                            <div><a href=\"#\"><img src=\"http://www.placehold.it/140x180/EFEFEF/AAAAAA?text=no+image\" alt=\"\" class=\"pro-img\" /></a> </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"slide\">\n" +
    "                                            <div><a href=\"#\"><img src=\"http://www.placehold.it/140x180/EFEFEF/AAAAAA?text=no+image\" alt=\"\" class=\"pro-img\" /></a> </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"slide\">\n" +
    "                                            <div><a href=\"#\"><img src=\"http://www.placehold.it/140x180/EFEFEF/AAAAAA?text=no+image\" alt=\"\" class=\"pro-img\" /></a> </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"slide\">\n" +
    "                                            <div><a href=\"#\"><img src=\"http://www.placehold.it/140x180/EFEFEF/AAAAAA?text=no+image\" alt=\"\" class=\"pro-img\" /></a> </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"slide\">\n" +
    "                                            <div><a href=\"#\"><img src=\"http://www.placehold.it/140x180/EFEFEF/AAAAAA?text=no+image\" alt=\"\" class=\"pro-img\" /></a> </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"slide\">\n" +
    "                                            <div><a href=\"#\"><img src=\"http://www.placehold.it/140x180/EFEFEF/AAAAAA?text=no+image\" alt=\"\" class=\"pro-img\" /></a> </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"slide\">\n" +
    "                                            <div><a href=\"#\"><img src=\"http://www.placehold.it/140x180/EFEFEF/AAAAAA?text=no+image\" alt=\"\" class=\"pro-img\" /></a> </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"slide\">\n" +
    "                                            <div><a href=\"#\"><img src=\"http://www.placehold.it/140x180/EFEFEF/AAAAAA?text=no+image\" alt=\"\" class=\"pro-img\" /></a> </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </section>\n" +
    "                            </section>\n" +
    "                            <!-- End BX Slider holder -->\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    " </div>\n" +
    "\n" +
    "</div>");
}]);
