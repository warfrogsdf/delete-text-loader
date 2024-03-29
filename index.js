const path = require('path');

function isMatch(rule, resourcePath){
  if(rule instanceof RegExp){
    return rule.test(resourcePath);
  }else if (typeof rule === 'string'){
    var fileName = path.basename(resourcePath);
    return rule === fileName;
  }else {
    return false;
  }
}

module.exports = function deleteTextLoader(content, map, meta) {
  var callback = this.async();
  if(this.query && this.query.fileName !== undefined && this.query.rules !== undefined){
    var fileNameRule = this.query.fileName;
    var rules = this.query.rules;
    var resourcePath = this.resourcePath;
    if (!isMatch(fileNameRule, resourcePath)){
      callback(null, content, map, meta);
    }else{
      var afterContent = rules.reduce(function (preContent, item, index, arr) {
        var rule = item.rule;
        var replacement = item.replacement;
        return preContent.replace(rule, replacement);
      }, content);
      callback(null, afterContent, map, meta);
    }
  }else{
    callback(new Error('options not right'));
  }
};