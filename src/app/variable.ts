import { JsonObject } from "survey-angular";

export var jsonrec = '{"recommendations":[{"overall":[{"legacy":[{"first":"Create a strategy for deploying application integration technologies that support the postmodern ERP strategy","second":"Determine your organization’s requirements for Postmodern ERP application integration by developing both a postmodern ERP strategy and a corresponding application integration strategy","third":"Consider to use HOOF model to plan for different scenarios","fourth":"Address the internal skills needed to move from your legacy system to the cloud"}]},{"novice":[{"first":"Explore the use of a service broker to aggregate, integrate or customize cloud services","second":"Consider adopting public cloud SaaS administrative ERP to provide your organization’s core ERP functionality","third":"Understand the potential benefits IMC for your organization","fourth":"Identify opporunities for productivity gain by encouraging users to explore application capabilities","fifth":"Deploy simpler interactions and transportability to mobile device","sixth":"Determine if the use of CSB in your organization is appropriate within the context of your postmodern ERP strategy"}]},{"optimised":[{"first":"Closely monitor the evolution of blockchain and consider how it might change how your organization do business","second":"Explore how artificial intelligence will change industry and back-office","third":"Start educating the organization about the power of predictive analytics"}]},{"innovative":[{"first":" Piper At The Gates of Dawn","second":" Piper At The Gates of Dawn"}]}]},{"specific":[{"manufacturing":[{"legacysys":[{"first":"Evaluate cloud ERP manufacturings as part of your ERP strategy and ensure a good functionality fit","second":"Identify the integration capabilities delivered with the cloud ERP suite and ensure that it will support any application planned (either on-premise or cloud)"}]},{"optimisedsys":[{"first":"Establish where IoT systems could improve your operational processes as well as support new innovation processes","second":"Upgrade your ERP system to a version that offers the required IoT functionality and interfaces","third":"Investigate how existing data-rich product/services can provide a data foundation for smart machine application","fourth":"Prepare for the impact of IoT on their ERP requirements"}]}]},{"public sector":[{"first":" Piper At The Gates of Dawn","second":" Piper At The Gates of Dawn"}]},{"financeindustry":[{"first":" Piper At The Gates of Dawn"}]},{"other":[{"first":" Piper At The Gates of Dawn"}]}]}]}';

var rec_legacy = '{"Create a strategy for deploying application integration technologies that support the postmodern ERP strategy":"leg1","Determine your organization’s requirements for Postmodern ERP application integration by developing both a postmodern ERP strategy and a corresponding application integration strategy":"leg2","Consider to use HOOF model to plan for different scenarios":"leg3","Address the internal skills needed to move from your legacy system to the cloud":"leg4"}';
var rec_novice = '{"Explore the use of a service broker to aggregate, integrate or customize cloud services":"nov1","Consider adopting public cloud SaaS administrative ERP to provide your organization’s core ERP functionality":"nov2","Understand the potential benefits IMC for your organization":"nov3","Identify opporunities for productivity gain by encouraging users to explore application capabilities":"nov4","Deploy simpler interactions and transportability to mobile device":"nov5","Determine if the use of CSB in your organization is appropriate within the context of your postmodern ERP strategy":"nov6"}';
var rec_optimised = '{"Closely monitor the evolution of blockchain and consider how it might change how your organization do business":"opt1","Explore how artificial intelligence will change industry and back-office":"opt2","Start educating the organization about the power of predictive analytics":"opt3"}';
var rec_innovative = '{"You are ready for postmodern ERP and new technologies. You have maximised your potential": "inn1"}';

var culture_legacy = '{"Focus on embrace a culture of change and flexibility ":"cl1","Identify if and when agile methodologies are suitable for your project":"cl_2"}';
var culture_novice = '{"Begin to educate team members and stakeholders about agile methodologies ":"cn_1", "Prepare to modify general behaviour to change oriented instead of resistant toward new technology":"cn_2"}';
var culture_optimised = '{"Determine an appropriate training strategy based on the current needs of employee groups and on past organizational training approaches":"co_1"}';
var culture_inno = '{"Potential maximised":"in_1"}';

var resource_legacy= '{"Identify the areas where skills are lacking and develop a plan of action to close the gaps":"rl_1","Ensure you have the necessary resources (support, budget...)":"rl_2"}';
var resource_novice= '{"Make sure everyone involved understands the commitment required":"rn_1", "Be clear on the budget and resources required to support the project and determine the plan":"rn_2"}';
var resource_optimised= '{"Identify key changes to systems, processes and organizational structure ":"ro_1"}';
var resource_inno= '{"Potential maximised":"in_1"}';

var bp_legacy= '{"Focus on understanding your business processes and how your organization do work":"bl_1", "Analyze your current processes":"bl_2"}';
var bp_novice= '{"Identify the need for changes and be aware of what it means for your business":"bn_1"}';
var bp_optimised= '{"Create improvements strategies for your business processes":"bo_1", "Identify areas for continuous improvement":"bo_2"}';
var bp_inno= '{"Potential maximised":"in_1"}';

var it_legacy= '{"If you are tight on budget, you can consider MDM Hub for your data management": "tl_1", "Prepare your integration strategy":"tl_2"}';
var it_novice= '{"Improve communication between IT and the business":"in_1", "Improve user adoption through proper education":"in_2"}';
var it_optimised= '{"Establish where IoT systems could improve your processes as well as support new innovation processes":"manu1","Upgrade your ERP system to a version that offers the required IoT functionality and interfaces":"manu2","Investigate how existing data-rich product/services can provide a data foundation for smart machine application":"manu3","Prepare for the impact of IoT on your ERP requirements":"manu4"}';
var it_inno= '{"Potential maximised":"in_1"}';

var strat_legacy= '{"Begin preparing for postmodern ERP, then work toward developing a postmodern erp strategy.":"sl_1"}';
var strat_novice= '{"Evaluate cloud ERP manufacturings/public sector as part of your ERP strategy and ensure a good functionality fit":"man1","Identify the integration capabilities delivered with the cloud ERP suite and ensure that it will support any application planned":"man2"}';
var strat_optimised= '{"Establish governance processes":"so_1"}';
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
  var culture_o = JSON.parse(culture_optimised);
  var culture_i = JSON.parse(culture_inno);

  var resource_l = JSON.parse(resource_legacy);
  var resource_n = JSON.parse(resource_novice);
  var resource_o = JSON.parse(resource_optimised);
  var resource_i = JSON.parse(resource_inno);

  var bp_l = JSON.parse(bp_legacy);
  var bp_n = JSON.parse(bp_novice);
  var bp_o = JSON.parse(bp_optimised);
  var bp_i = JSON.parse(bp_inno);

  var infrastructure_l = JSON.parse(it_legacy);
  var infrastructure_n = JSON.parse(it_novice);
  var infrastructure_o = JSON.parse(it_optimised);
  var infrastructure_i = JSON.parse(it_inno);

  var strategy_l = JSON.parse(strat_legacy);
  var strategy_n = JSON.parse(strat_novice);
  var strategy_o = JSON.parse(strat_optimised);
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

  // display legacy dimensions
  var a1 = Object.keys(culture_l)[0];
  var a2 = Object.keys(culture_l)[1];
  var a3 = Object.keys(resource_l)[0];
  var a4 = Object.keys(resource_l)[1];
  var a5 = Object.keys(bp_l)[0];
  var a6 = Object.keys(bp_l)[1];
  var a7 = Object.keys(infrastructure_l)[0];
  var a8 = Object.keys(infrastructure_l)[1];
  var a9 = Object.keys(strategy_l)[0];

  // display novice dimensions
  var z1 = Object.keys(culture_n)[0];
  var z2 = Object.keys(culture_n)[1];
  var z3 = Object.keys(resource_n)[0];
  var z4 = Object.keys(resource_n)[1];
  var z5 = Object.keys(bp_n)[0];
  var z6 = Object.keys(infrastructure_n)[0];
  var z7 = Object.keys(infrastructure_n)[1];
  var z8 = Object.keys(strategy_n)[0];
  var z9 = Object.keys(strategy_n)[1];

  // display optimised dimensions 1 1 2 4 1
  var m1 = Object.keys(culture_o)[0];
  var m2 = Object.keys(resource_o)[0];
  var m3 = Object.keys(bp_o)[0];
  var m4 = Object.keys(bp_o)[1];
  var m5 = Object.keys(infrastructure_o)[0];
  var m6 = Object.keys(infrastructure_o)[1];
  var m7 = Object.keys(infrastructure_o)[2];
  var m8 = Object.keys(infrastructure_o)[3];
  var m9 = Object.keys(strategy_o)[0];

  // display innovative dimensions 1 1 2 4 1
  var d1 = Object.keys(culture_i)[0];
  var d2 = Object.keys(resource_i)[0];
  var d3 = Object.keys(bp_i)[0];
  var d4 = Object.keys(infrastructure_i)[0];
  var d5 = Object.keys(strategy_i)[0];

  

 export var legacy: string[] = [j1, j2, j3, j4];
 export var novice: string[] = [n1, n2, n3, n4, n5, n6];
 export var optimised: string[] = [o1, o2, o3];
 export var innovative: string[] = [i1];


 export var tab_culture_legacy: string[] = [a1, a2];
 export var tab_culture_novice: string[] = [z1, z2];
 export var tab_culture_optimised: string[] = [m1];
 export var tab_culture_inno: string[] = [d1];

 export var tab_resource_legacy: string[] = [a3, a4];
 export var tab_resource_novice: string[] = [z3, z4];
 export var tab_resource_optimised: string[] = [m2];
 export var tab_resource_inno: string[] = [d2];

 export var tab_bp_legacy: string[] = [a5, a6];
 export var tab_bp_novice: string[] = [z5];
 export var tab_bp_optimised: string[] = [m3, m4];
 export var tab_bp_inno: string[] = [d3];

 export var tab_infrastructure_legacy: string[] = [a7, a8];
 export var tab_infrastructure_novice: string[] = [z6, z7];
 export var tab_infrastructure_optimised: string[] = [m5, m6, m7, m8];
 export var tab_infrastructure_inno: string[] = [d4];

 export var tab_strategy_legacy: string[] = [a9];
 export var tab_strategy_novice: string[] = [z8, z9];
 export var tab_strategy_optimised: string[] = [m9];
 export var tab_strategy_inno: string[] = [d5];
