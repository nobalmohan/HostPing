!function(){"use strict";angular.module("hostping",["ui.router"]).config(["$stateProvider","$rootScopeProvider","$urlRouterProvider",function(e,o,t){t.otherwise("/"),e.state("main",{url:"/",templateUrl:"views/main.html",controller:"mainController"})}]).config(["$httpProvider",function(e){e.defaults.headers.post.Accept="application/json, text/javascript",e.defaults.headers.post["Content-Type"]="application/json; charset=utf-8",e.defaults.headers.post["Access-Control-Max-Age"]="1728000",e.defaults.headers.common["Access-Control-Max-Age"]="1728000",e.defaults.headers.common.Accept="application/json, text/javascript",e.defaults.headers.common["Content-Type"]="application/json; charset=utf-8",e.defaults.useXDomain=!0}])}(),angular.module("hostping").controller("mainController",function(e,o){function t(e){console.log("Geolacation Failed")}function a(e){var o=document.createElement("div");o.id="mapcanvas",o.style.height="630px",$("#js_map-box").append(o);var t=new google.maps.LatLng(e.coords.latitude,e.coords.longitude),a={zoom:15,center:t,mapTypeControl:!1};r=new google.maps.Map(document.getElementById("mapcanvas"),a);var i=new google.maps.Marker({position:t,map:r});i.setIcon("http://maps.google.com/mapfiles/ms/icons/blue-dot.png");var p=new google.maps.InfoWindow({content:"Restaurant name "+e.coords.accuracy+" "});google.maps.event.addListener(i,"click",function(e){p.open(r,this)});var l={location:t,radius:500,types:["food"]};s=new google.maps.InfoWindow,c=new google.maps.places.PlacesService(r),c.nearbySearch(l,n)}function n(e,o){if(o==google.maps.places.PlacesServiceStatus.OK)for(var t=0;t<e.length;t++)i(e[t])}function i(e){var o=(e.geometry.location,new google.maps.Marker({map:r,position:e.geometry.location}));google.maps.event.addListener(o,"click",function(){s.setContent(e.name),s.open(r,this)})}e.options=[{label:"Distance",value:"-distance"},{label:"Price",value:"price"},{label:"Rating",value:"-rate"}],e.defaultSelected=e.options[0],navigator.geolocation?navigator.geolocation.getCurrentPosition(a,t):t("not supported");var r,s,c,p=[{geometry:{location:{lat:-33.867591,lng:151.201196}},icon:"http://maps.gstatic.com/mapfiles/place_api/icons/travel_agent-71.png",id:"a97f9fb468bcd26b68a23072a55af82d4b325e0d",name:"Australian Cruise Group",opening_hours:{open_now:!1,weekday_text:[]},photos:[{height:1607,html_attributions:[],photo_reference:"CnRnAAAAgRIDb_yEN5U0JTOsZ_YuvkZ8Ubjr2KSzEYXn2_UIw4C2QxweNH4mv4FP-9SkdB6B_Ypf9GoUooazqONKKmI2TI1ZObcHfPzVOBO3RWkieo0wCIevssFJIBS-nSAl6aKKU4yHIleCGfFt3tw1Vm-HOhIQgrnUAysIrBh4T91J43a_FRoUX-V_-9wDDKzr-kEhYu9wPK1VRlQ",width:1969}],place_id:"ChIJrTLr-GyuEmsRBfy61i59si0",reference:"CnRqAAAAs0NN4kO3cbRv3asTQQSMxyycOqeUd6YSasQyFWWh2kyDVvrRxBVOQ6mazkRWoTa2WLbyLrQoXt1M-xn6blrixp66_8GtQuh_q1af4vwrdglBw1ZbZ3qqBdTr6vtzP9YR_gU5RgQs0CancfRJU9w75hIQmUBf1cUhhcUsJMZZ6sjiPxoUcxQF-MVkJcrgHjWevZ_J-ynCapM",scope:"GOOGLE",types:["travel_agency","restaurant","food","establishment"],vicinity:"32 The Promenade, King Street Wharf 5, Sydney"},{geometry:{location:{lat:-33.870943,lng:151.190311}},icon:"http://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",id:"e644f7f34cf875b9919c6548f1b721947362850a",name:"Lunch Cruise with Jazz on Sydney Harbour",opening_hours:{open_now:!1,weekday_text:[]},photos:[{height:565,html_attributions:[],photo_reference:"CnRnAAAAYGgrNekG2Gw9wQT7aFP7mCZ-HKGDt0dURvneoBQahcyYDi__vBmSnYaA3_4MRGxut8iM321Y4r3aHQauaqIZRk-7vgl6NnZv1U2IwYQLphlOICZXnw9Dpt5EjIImrk6tPOGn7nFr1MH0S026DGLEcxIQcqbyFShwOLKrrVSn5SgJXRoUWJ0CgeB6Cde1yOBJQjCkghXeXf0",width:850}],place_id:"ChIJLfySpTOuEmsRPCRKrzl8ZEY",reference:"CoQBewAAALvmpMLEYuO-p5G-f3tV5q-QMCoFevyQ2AFZPtxJmQ5xZC6USuir_xSXUNci7zZkg1uqSpl1vQbbQYhW66cB98yXbJ7BpEPbtNBJNqbZGORDu8YJmdrPAJeScysyLsEfSwH8-RPxK-_HJ0PoVWe_sCpV-lA_GERVvR6i2eiR7Q_nEhCfI6ykCQmqySFc_CHjpAW8GhTsttUpHIyw5vod_jNoscsxhWCs1A",scope:"GOOGLE",types:["bar","restaurant","food","establishment"],vicinity:"37 Bank St, Pyrmont"},{geometry:{location:{lat:-33.86879,lng:151.194217}},icon:"http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",id:"21a0b251c9b8392186142c798263e289fe45b4aa",name:"Rhythmboat Cruises",opening_hours:{open_now:!1,weekday_text:[]},photos:[{height:467,html_attributions:[],photo_reference:"CnRnAAAANGo7AMVt3RiRREQI-0Ukk_zCPsWwNpQAc-2hBUrljYiYv7a2aAKCnUyHM70n11OEM2OYLRWpAnR_uBqdaKpGNZtDlPaihsGQiGqDCKPrRU5WCcZVlCsE17_2Q4ycaSJU4eure0J5cLj7_iPvPgTgZRIQ5JxAmODs82-FqruXnzkaXxoUbhhsfptJPhuRNkPeCWnxLitKpz0",width:573}],place_id:"ChIJyWEHuEmuEmsRm9hTkapTCrk",reference:"CnRmAAAA7BHyk8VJWNjqrwh_OOLl3jRjyKLfpL95EVmzIMaF9WjHawB3h7EQgM9CnYx7nf6n52hztHfGywPfINz9R3Bkej7hkclqnLd_S9iIozQ8YVFD0OZPvxX9jsN-NfgPxkVZEbw_mHd-cX8GyKbgAFaf-xIQq4-J5Ehd89e6R9lofPgnohoUHmYxkWCe6OviRmDeO6rcMvV-PwM",scope:"GOOGLE",types:["restaurant","food","establishment"],vicinity:"Pyrmont Bay Wharf (Near Australia Maritime Museum), Pyrmont, NSW 2009"}],l=[];angular.forEach(p,function(e,o){e.photos[0].photo_reference="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+e.photos[0].photo_reference+"&key=AIzaSyAneGsXcNH6G1mSV4bjB2m1LR--rxAtnl8",e.distance=e.photos[0].height/10,e.price="$$$$",e.rate=4.5,e.review=943,e.index=o+1,l.push(e)}),e.ApiResponse=l});