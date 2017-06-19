// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var arrayOfNodes = [];

  var lookThroughNodes = function(element){
    var children = element.childNodes;
    //What is the base Case?
    if(element.classList !== undefined && element.classList.contains(className)){
      arrayOfNodes.push(element);
    }
   
    children.forEach(function(child){
      lookThroughNodes(child);
    });
  };  

  lookThroughNodes(document.body);

  return arrayOfNodes;
};


//document.body, element.childNodes, and element.classList


