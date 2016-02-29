!function(){"use strict";angular.module("red",["ngAnimate","ngCookies","ngTouch","ngSanitize","ui.router","ngOrderObjectBy"])}(),function(){"use strict";function e(e,t,n,o,r,i){var a="https://red-wdp-api.herokuapp.com/api/mars/aliens",l="https://red-wdp-api.herokuapp.com/api/mars/encounters";e.aliens={},e.validate=!1;e.aliens.type;t({method:"GET",url:a}).then(function(t){e.aliens=t.data.aliens},function(e){}),e.encounters={date:i("date")(new Date,"yyyy-MM-dd"),colonist_id:o.getObject("new-colonist").id},e.submit=function(n){event.preventDefault(),e.reportForm.$invalid?e.validate=!0:t({method:"POST",url:l,data:{encounter:e.encounters}}).then(function(e){r.go("report-filed"),r.go("encounters")},function(e){console.log(e)})}}e.$inject=["$scope","$http","$rootScope","$cookies","$state","$filter"],angular.module("red").controller("ReportCtrl",e)}(),function(){"use strict";function e(e,t){this.online=!0,e.enter=function(e){event.preventDefault(),t.go("check-in")}}e.$inject=["$scope","$state"],angular.module("red").controller("MainCtrl",e)}(),function(){"use strict";function e(e,t,n,o,r){var i="https://red-wdp-api.herokuapp.com/api/mars/jobs",a="https://red-wdp-api.herokuapp.com/api/mars/colonists";e.colonist={},e.validate=!1,n({method:"GET",url:i}).then(function(t){e.jobs=t.data.jobs},function(e){}),e.login=function(i){event.preventDefault(),e.checkinForm.$invalid?e.validate=!0:n({method:"POST",url:a,data:{colonist:e.colonist}}).then(function(e){t.colonist=e.data.colonist,r.putObject("new-colonist",e.data.colonist),o.go("encounters")},function(e){console.log(e)})}}e.$inject=["$scope","$rootScope","$http","$state","$cookies"],angular.module("red").controller("CheckinCtrl",e)}(),function(){"use strict";function e(e,t,n){var o="https://red-wdp-api.herokuapp.com/api/mars/encounters";e.encounters={},t({method:"GET",url:o}).then(function(t){e.encounters=t.data.encounters},function(e){}),e.reportEncounters=function(e){event.preventDefault(),n.go("report")}}e.$inject=["$scope","$http","$state"],angular.module("red").controller("EncountersCtrl",e)}(),function(){"use strict";function e(e,t,n,o){t.$state=n,e.debug("Run block end!"),t.$on("$stateChangeStart",function(e,n){t.stateName=n.name,t.user=o.getObject("new-colonist")})}e.$inject=["$log","$rootScope","$state","$cookies"],angular.module("red").run(e)}(),function(){"use strict";function e(e,t,n){n.html5Mode({enabled:!0,requireBase:!1,rewriteLinks:!1}),e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl"}).state("check-in",{url:"/check-in",templateUrl:"app/checkin/check-in.html",controller:"CheckinCtrl"}).state("encounters",{url:"/encounters",templateUrl:"app/encounters/encounters.html",controller:"EncountersCtrl"}).state("report",{url:"/report",templateUrl:"app/report/report.html",controller:"ReportCtrl"}).state("report-filed",{url:"/report-filed",templateUrl:"app/report/report-filed.html",controller:"ReportCtrl"}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],angular.module("red").config(e)}(),function(){"use strict";angular.module("red").constant("APP_NAME","RED Angular seed application")}(),function(){"use strict";function e(e){e.debugEnabled(!0)}e.$inject=["$logProvider"],angular.module("red").config(e)}(),angular.module("red").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="home" ui-view="{{ stateName }}"><div class="welcome"><header><h1 class="all-caps">Mars Colony</h1></header><button ng-click="enter($event)"><div class="circle-one"><div class="circle-two"><div class="circle-three"><div class="circle-four"><div class="circle-five"></div></div></div></div></div></button><div class="enter">Click on Mars to enter</div></div></div>'),e.put("app/report/report-filed.html",'<div class="report-filed"><h1>Report is Filed</h1></div>'),e.put("app/report/report.html",'<div class="report"><header><h2>Recent Encounters</h2><p class="tagline">Safety on Mars is your responsibility</p></header><form name="reportForm" class="report-form" novalidate=""><div class="alien-select"><select name="alien type" ng-model="encounters.atype" required=""><option value="">Select alien type</option><option value="{{ alien.type }}" ng-repeat="alien in aliens">{{ alien.type }}</option></select></div><textarea type="text" name="action" placeholder="Action taken" ng-model="encounters.action" required=""></textarea><p ng-if="validate">Please fill in the form.</p><button ng-click="submit($event)"><h1>Submit Report</h1></button></form></div>'),e.put("app/encounters/encounters.html",'<div class="encounters"><header><h2>Recent Encounters</h2><p class="tagline">See an Alien? Report it!</p></header><div class="report-wrapper"><ul><li class="encounters-report" ng-repeat="report in encounters | orderObjectBy: \'date\':true">{{ report.date }} - {{ report.atype }}<br>{{ report.action }}</li></ul></div><button ng-click="reportEncounters($event)"><h1>Report Encounters</h1></button></div>'),e.put("app/checkin/check-in.html",'<div class="check-in"><header><h1>Register</h1></header><form name="checkinForm" class="checkin-form" novalidate=""><input type="text" name="name" placeholder="Name" ng-model="colonist.name" required=""> <input type="number" name="age" placeholder="Age" ng-model="colonist.age" required=""><div class="job-select"><select name="job" ng-model="colonist.job_id" required=""><option value="">Select a job</option><option value="{{ job.id }}" ng-repeat="job in jobs">{{ job.name }}</option></select></div><p ng-if="validate">Please fill in the form.</p><button ng-click="login($event)"><h1>Check in</h1></button></form></div>')}]);