var obj = {
    x: function() {
        console.log('In function x');
        console.log('Value of y is ', this.y);
    },
    x2: function() {
        // var __this = this;
        setTimeout(function() {
            console.log('In function x2');
            console.log('Value of y is', this.y);
        }.bind(this),1000);
    },
    y: 'a'
}

obj.x();
obj.x2();