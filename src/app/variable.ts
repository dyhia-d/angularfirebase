import { JsonObject } from "survey-angular";

export var jsonrec = '{"recommendations":[{"overall":[{"legacy":[{"first":"Create a strategy for deploying application integration technologies that support the postmodern ERP strategy","second":"Determine your organization’s requirements for Postmodern ERP application integration by developing both a postmodern ERP strategy and a corresponding application integration strategy","third":"Consider to use HOOF model to plan for different scenarios","fourth":"Address the internal skills needed to move from your legacy system to the cloud"}]},{"novice":[{"first":"Explore the use of a service broker to aggregate, integrate or customize cloud services","second":"Consider adopting public cloud SaaS administrative ERP to provide your organization’s core ERP functionality","third":"Understand the potential benefits IMC for your organization","fourth":"Identify opporunities for productivity gain by encouraging users to explore application capabilities","fifth":"Deploy simpler interactions and transportability to mobile device","sixth":"Determine if the use of CSB in your organization is appropriate within the context of your postmodern ERP strategy"}]},{"optimised":[{"first":"Closely monitor the evolution of blockchain and consider how it might change how your organization do business","second":"Explore how artificial intelligence will change industry and back-office","third":"Start educating the organization about the power of predictive analytics"}]},{"innovative":[{"first":" Piper At The Gates of Dawn","second":" Piper At The Gates of Dawn"}]}]},{"specific":[{"manufacturing":[{"legacysys":[{"first":"Evaluate cloud ERP manufacturings as part of your ERP strategy and ensure a good functionality fit","second":"Identify the integration capabilities delivered with the cloud ERP suite and ensure that it will support any application planned (either on-premise or cloud)"}]},{"optimisedsys":[{"first":"Establish where IoT systems could improve your operational processes as well as support new innovation processes","second":"Upgrade your ERP system to a version that offers the required IoT functionality and interfaces","third":"Investigate how existing data-rich product/services can provide a data foundation for smart machine application","fourth":"Prepare for the impact of IoT on their ERP requirements"}]}]},{"public sector":[{"first":" Piper At The Gates of Dawn","second":" Piper At The Gates of Dawn"}]},{"financeindustry":[{"first":" Piper At The Gates of Dawn"}]},{"other":[{"first":" Piper At The Gates of Dawn"}]}]}]}';

var rec_legacy = '{"Create a strategy for deploying application integration technologies that support the postmodern ERP strategy":"leg1","Determine your organization’s requirements for Postmodern ERP application integration by developing both a postmodern ERP strategy and a corresponding application integration strategy":"leg2","Consider to use HOOF model to plan for different scenarios":"leg3","Address the internal skills needed to move from your legacy system to the cloud":"leg4"}';
var rec_novice = '{"Explore the use of a service broker to aggregate, integrate or customize cloud services":"nov1","Consider adopting public cloud SaaS administrative ERP to provide your organization’s core ERP functionality":"nov2","Understand the potential benefits IMC for your organization":"nov3","Identify opporunities for productivity gain by encouraging users to explore application capabilities":"nov4","Deploy simpler interactions and transportability to mobile device":"nov5","Determine if the use of CSB in your organization is appropriate within the context of your postmodern ERP strategy":"nov6"}'
var rec_optimised = '{"Closely monitor the evolution of blockchain and consider how it might change how your organization do business":"opt1","Explore how artificial intelligence will change industry and back-office":"opt2","Start educating the organization about the power of predictive analytics":"opt3"}';
export var rec_innovative = '{"Piper at the gates of dawn": "inn1"}';

export var rec_leg_manu = '{"Evaluate cloud ERP manufacturings as part of your ERP strategy and ensure a good functionality fit":"man1","Identify the integration capabilities delivered with the cloud ERP suite and ensure that it will support any application planned (either on-premise or cloud)":"man2"}';
export var rec_opt_manu = '{"Establish where IoT systems could improve your operational processes as well as support new innovation processes":"manu1","Upgrade your ERP system to a version that offers the required IoT functionality and interfaces":"manu2","Investigate how existing data-rich product/services can provide a data foundation for smart machine application":"manu3","Prepare for the impact of IoT on their ERP requirements":"manu4"}';

  // parsing rec generales
  var j = JSON.parse(rec_legacy);
  var n = JSON.parse(rec_novice);
  var o = JSON.parse(rec_optimised);
  var i = JSON.parse(rec_innovative);

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

 export var legacy: string[] = [j1, j2, j3, j4];
 export var novice: string[] = [n1, n2, n3, n4, n5, n6];
 export var optimised: string[] = [o1, o2, o3];
