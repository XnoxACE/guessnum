let myrandommodule = function(minVal,maxVal) {
    this.minValue = minVal;
    this.maxValue = maxVal;
}
myrandommodule.prototype.setMinMax = function(minVal,maxVal) {
    this.minValue = minVal;
    this.maxValue = maxVal;
}
myrandommodule.prototype.getMin = function() {
	return(this.minValue);
}
myrandommodule.prototype.getMax = function() {
	return(this.maxValue);
}
myrandommodule.prototype.getValueMiddle = function() {
	return ((this.minValue+this.maxValue)/2);
}
myrandommodule.prototype.getRange = function() {
	return (this.maxValue - this.minValue + 1);
}
myrandommodule.prototype.random = function() {
//  console.log(this.minValue + " " + this.maxValue);
  let range = this.maxValue - this.minValue + 1;
  return (Math.floor(Math.random() * range) + this.minValue);
}
module.exports = myrandommodule;