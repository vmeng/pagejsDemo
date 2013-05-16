
var applicationViewModel = function() {
	self = this;
	
	self.showContentDiv = function(data,event){
		location.href = "#content";
	}
}

var explanationViewModel = function() {
	self = this;
	
	self.segmentItemJson = ko.observableArray();

	self.backgroundImageUrl = function(data) {

		var imageUrl = 'url(/assets/' + data.name + '.gif)';

		return imageUrl;
	}
}