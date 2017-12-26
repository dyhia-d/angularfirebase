/*Survey.Survey.cssType = "bootstrap";

var json = {questions: [
{ type: "matrix", name: "Quality", title: "Please indicate if you agree or disagree with the following statements",
   columns: [{ value: 1, text: "Strongly Disagree" }, 
              { value: 2, text: "Disagree" }, 
              { value: 3, text: "Neutral" }, 
              { value: 4, text: "Agree" }, 
              { value: 5, text: "Strongly Agree" }],
    rows: [{ value: "affordable", text: "1. Product is affordable" }, 
           { value: "does what it claims", text: "2. Product does what it claims" },
           { value: "better then others", text: "3. Product is better than other products on the market" }, 
           { value: "easy to use", text: "4. Product is easy to use" }]}
]};

window.survey = new Survey.Model(json);


survey.onComplete.add(function(result) {
    document.querySelector('#surveyResult').innerHTML = "result: " + JSON.stringify(result.data);
});

survey.onUpdateQuestionCssClasses.add(function(survey, options) {
    var classes = options.cssClasses;

    if (options.question.getType() === "matrix") {
      classes.root = classes.root  + " custom-matrix";
    }
});


$("#surveyElement").Survey({ 
    model: survey 
});*/

Survey.Survey.cssType = "bootstrap";
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

var json = {
triggers: [{ type: "complete", name: "exit1", operator: "equal", value: "Yes" },
    { type: "complete", name: "exit2", operator: "equal", value: "Yes" }],
pages: [
{ title: "What operating system do you use?",
    questions: [
        {type:"checkbox", name:"opSystem", title: "OS", hasOther: true, 
            choices:["Windows", "Linux", "Macintosh OSX"]},
        {type:"radiogroup", name:"exit1", title:"Do you want to finish the survey?", choices: ["Yes", "No"], colCount: 0}
    ]  
},
{   title: "What language(s) are you currently using?",
    questions: [
    {type:"checkbox", name:"langs",title:"Plese select from the list",
            colCount: 4,
        choices:["Javascript", "Java", "Python", "CSS", "PHP", "Ruby", "C++", "C", 
            "Shell", "C#", "Objective-C", "R", "VimL", "Go", "Perl", "CoffeeScript", 
            "TeX", "Swift", "Scala", "Emacs List", "Haskell", "Lua", "Clojure", 
            "Matlab", "Arduino", "Makefile", "Groovy", "Puppet", "Rust", "PowerShell"]
    },
    {type:"radiogroup", name:"exit2", title:"Do you want to finish the survey?", choices: ["Yes", "No"], colCount: 0}
]},        
{ title: "Please enter your name and e-mail",
    questions: [ 
    {type: "text", name: "name", title: "Name:"}, 
    {type: "text", name: "email", title: "Your e-mail"}]
}]};

window.survey = new Survey.Model(json);


survey.onComplete.add(function(result) {
    document.querySelector('#surveyResult').innerHTML = "result: " + JSON.stringify(result.data);
});


function onAngularComponentInit() {
    Survey.SurveyNG.render("surveyElement", { 
        model: survey 
    });
}
var HelloApp =
    ng.core
        .Component({
            selector: 'ng-app',
            template: '<div id="surveyContainer" class="survey-container contentcontainer codecontainer"><div id="surveyElement"></div></div> '})
        .Class({
            constructor: function() {
            },
            ngOnInit: function() {
                onAngularComponentInit();
            }
    });
document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic.bootstrap(HelloApp);
});
