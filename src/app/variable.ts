import { JsonObject } from "survey-angular";

//export var jsonrec = '{"recommendations":[{"overall":[{"legacy":[{"first":"Create a strategy for deploying application integration technologies that support the postmodern ERP strategy","second":"Determine your organization’s requirements for Postmodern ERP application integration by developing both a postmodern ERP strategy and a corresponding application integration strategy","third":"Consider to use HOOF model to plan for different scenarios","fourth":"Address the internal skills needed to move from your legacy system to the cloud"}]},{"novice":[{"first":"Explore the use of a service broker to aggregate, integrate or customize cloud services","second":"Consider adopting public cloud SaaS administrative ERP to provide your organization’s core ERP functionality","third":"Understand the potential benefits IMC for your organization","fourth":"Identify opporunities for productivity gain by encouraging users to explore application capabilities","fifth":"Deploy simpler interactions and transportability to mobile device","sixth":"Determine if the use of CSB in your organization is appropriate within the context of your postmodern ERP strategy"}]},{"optimised":[{"first":"Closely monitor the evolution of blockchain and consider how it might change how your organization do business","second":"Explore how artificial intelligence will change industry and back-office","third":"Start educating the organization about the power of predictive analytics"}]},{"innovative":[{"first":" Piper At The Gates of Dawn","second":" Piper At The Gates of Dawn"}]}]},{"specific":[{"manufacturing":[{"legacysys":[{"first":"Evaluate cloud ERP manufacturings as part of your ERP strategy and ensure a good functionality fit","second":"Identify the integration capabilities delivered with the cloud ERP suite and ensure that it will support any application planned (either on-premise or cloud)"}]},{"optimisedsys":[{"first":"Establish where IoT systems could improve your operational processes as well as support new innovation processes","second":"Upgrade your ERP system to a version that offers the required IoT functionality and interfaces","third":"Investigate how existing data-rich product/services can provide a data foundation for smart machine application","fourth":"Prepare for the impact of IoT on their ERP requirements"}]}]},{"public sector":[{"first":" Piper At The Gates of Dawn","second":" Piper At The Gates of Dawn"}]},{"financeindustry":[{"first":" Piper At The Gates of Dawn"}]},{"other":[{"first":" Piper At The Gates of Dawn"}]}]}]}';

var rec_legacy = '{"Create a strategy for deploying application integration technologies that support the postmodern ERP strategy":"leg1","Determine your organization’s requirements for Postmodern ERP application integration by developing both a postmodern ERP strategy and a corresponding application integration strategy":"leg2","Consider to use HOOF model to plan for different scenarios":"leg3","Address the internal skills needed to move from your legacy system to the cloud":"leg4"}';
var rec_novice = '{"Explore the use of a service broker to aggregate, integrate or customize cloud services":"nov1","Consider adopting public cloud SaaS administrative ERP to provide your organization’s core ERP functionality":"nov2","Understand the potential benefits IMC for your organization":"nov3","Identify opporunities for productivity gain by encouraging users to explore application capabilities":"nov4","Deploy simpler interactions and transportability to mobile device":"nov5","Determine if the use of CSB in your organization is appropriate within the context of your postmodern ERP strategy":"nov6"}'
var rec_optimised = '{"Closely monitor the evolution of blockchain and consider how it might change how your organization do business":"opt1","Explore how artificial intelligence will change industry and back-office":"opt2","Start educating the organization about the power of predictive analytics":"opt3"}';
var rec_innovative = '{"You are ready for postmodern ERP and new technologies. You have maximised your potential": "inn1"}';

var culture_legacy = '{"Focus on change management ":"cl1","Identify if and when agile methodologies are suitable for your project":"cl_2"}';
var culture_novice = '{"Begin to educate team members and stakeholders about agile methodologies ":"cn_1", "Prepare to modify general behaviour to change oriented instead of resistant toward new technology":"cn_2"}';
var culture_optimised = '';
var culture_inno = '{"Potential maximised":"in_1"}';

var resource_legacy= '{"Identify the areas where skills are lacking and develop a plan of action to close the gaps":"rl_1","Ensure you have the necessary resources (support, budget...)":"rl_2"}';
var resource_novice= '';
var resource_optimised= '';
var resource_inno= '{"Potential maximised":"in_1"}';

var bp_legacy= '{"Focus on understanding your business process and how your organization do work":"bl_1", "Be aware there might be some changes in the business processes and prepare to manage them ":"bl_2"}';
var bp_novice= '';
var bp_optimised= '';
var bp_inno= '{"Potential maximised":"in_1"}';

var it_legacy= '{"If you are tight on budget, you can consider MDM Hub for your data management": "tl_1", "Prepare your integration strategy":"tl_2"}';
var it_novice= '';
var it_optimised= '{"Establish where IoT systems could improve your processes as well as support new innovation processes":"manu1","Upgrade your ERP system to a version that offers the required IoT functionality and interfaces":"manu2","Investigate how existing data-rich product/services can provide a data foundation for smart machine application":"manu3","Prepare for the impact of IoT on your ERP requirements":"manu4"}';
var it_inno= '{"Potential maximised":"in_1"}';

var strat_legacy= '{"Begin preparing for postmodern ERP, then work toward developing a postmodern erp strategy.":"sl_1"}';
var strat_novice= '{"Evaluate cloud ERP manufacturings/public sector as part of your ERP strategy and ensure a good functionality fit":"man1","Identify the integration capabilities delivered with the cloud ERP suite and ensure that it will support any application planned":"man2"}';
var strat_optimised= '';
var strat_inno= '{"Potential maximised":"in_1"}';



//export var rec_leg_manu = '{"Evaluate cloud ERP manufacturings as part of your ERP strategy and ensure a good functionality fit":"man1","Identify the integration capabilities delivered with the cloud ERP suite and ensure that it will support any application planned (either on-premise or cloud)":"man2"}';
//xport var rec_opt_manu = '{"Establish where IoT systems could improve your operational processes as well as support new innovation processes":"manu1","Upgrade your ERP system to a version that offers the required IoT functionality and interfaces":"manu2","Investigate how existing data-rich product/services can provide a data foundation for smart machine application":"manu3","Prepare for the impact of IoT on their ERP requirements":"manu4"}';

  // parsing rec
  var j = JSON.parse(rec_legacy);
  var n = JSON.parse(rec_novice);
  var o = JSON.parse(rec_optimised);
  var i = JSON.parse(rec_innovative);

  var culture_l = JSON.parse(culture_legacy);
  var culture_n = JSON.parse(culture_novice);
  //var culture = JSON.parse(culture_optimised);
  var culture_i = JSON.parse(culture_inno);

  var resource_l = JSON.parse(resource_legacy);
  //var resource = JSON.parse(resource_novice);
  //var resource = JSON.parse(resource_optimised);
  var resource_i = JSON.parse(resource_inno);

  var bp_l = JSON.parse(bp_legacy);
  //var bp = JSON.parse(bp_novice);
  //var bp = JSON.parse(bp_optimised);
  var bp_i = JSON.parse(bp_inno);

  var infrastructure_l = JSON.parse(it_legacy);
  //var infrastructure = JSON.parse(it_novice);
  var infrastructure_o = JSON.parse(it_optimised);
  var infrastructure_i = JSON.parse(it_inno);

  var strategy_l = JSON.parse(strat_legacy);
  var strategy_n = JSON.parse(strat_novice);
  //var strategy = JSON.parse(strat_optimised);
  var strategy_i = JSON.parse(strat_inno);

  // display legacy rec
 var j1 = Object.keys(j)[0];
 var j2 = Object.keys(j)[1];
 var j3 = Object.keys(j)[2];
 var j4 = Object.keys(j)[3];

  // display novice rec
  var n1 = Object.keys(n)[0];
  var n2 = Object.keys(n)[1];
  var n3 = Object.keys(n)[2];
  var n4 = Object.keys(n)[3];
  var n5 = Object.keys(n)[4];
  var n6 = Object.keys(n)[5];

  // display optimised rec
  var o1 = Object.keys(o)[0];
  var o2 = Object.keys(o)[1];
  var o3 = Object.keys(o)[2];

  // display innovative rec
  var i1 = Object.keys(i)[0];

  // display others
  var c1 = Object.keys(culture_l)[0];
  var c2 = Object.keys(culture_l)[1];
  var c3 = Object.keys(resource_l)[0];
  var c4 = Object.keys(resource_l)[1];
  var c5 = Object.keys(bp_l)[0];
  var c6 = Object.keys(bp_l)[1];
  var c7 = Object.keys(infrastructure_l)[0];
  var c8 = Object.keys(infrastructure_l)[1];
  var c9 = Object.keys(strategy_l)[0];

 export var legacy: string[] = [j1, j2, j3, j4];
 export var novice: string[] = [n1, n2, n3, n4, n5, n6];
 export var optimised: string[] = [o1, o2, o3];
 export var innovative: string[] = [i1];


 export var tab_culture_legacy: string[] = [c1, c2];
 /*export var tab_culture_novice: string[] = [];
 export var tab_culture_optimised: string[] = [];
 export var tab_culture_inno: string[] = [];*/

 export var tab_resource_legacy: string[] = [c3, c4];
 /*export var tab_resource_novice: string[] = [];
 export var tab_resource_optimised: string[] = [];
 export var tab_resource_inno: string[] = [];*/

 export var tab_bp_legacy: string[] = [c5, c6];
 /*export var tab_bp_novice: string[] = [];
 export var tab_bp_optimised: string[] = [];
 export var tab_bp_inno: string[] = [];*/

 export var tab_infrastructure_legacy: string[] = [c7, c8];
 /*export var tab_infrastructure_novice: string[] = [];
 export var tab_infrastructure_optimised: string[] = [];
 export var tab_infrastructure_inno: string[] = [];*/

 export var tab_strategy_legacy: string[] = [c9];
 /*export var tab_strategy_novice: string[] = [];
 export var tab_strategy_optimised: string[] = [];
 export var tab_strategy_inno: string[] = [];*/
