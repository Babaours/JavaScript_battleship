/*jslint browser this */
/*global _, player */

(function (global) {
    "use strict";

    var computer = _.assign({}, player, {
        grid: [],
        tries: [],
        fleet: [],
        game: null,
        play: function () {
            var self = this;
            setTimeout(function () {
                self.game.fire(this, 0, 0, function (hasSucced) {
                    self.tries[0][0] = hasSucced;
                });
            }, 2000);
        },

        isShipOk: function (callback) 
        {
            var i = 0;

            while(i < 4){
                var x = Math.floor(Math.random() * 9);
            var y = Math.floor(Math.random() * 9);
            var a = Math.floor(Math.random() * 10);
            if(a > 5){
                    window.rightclick = true;
                }
                else{
                    window.rightclick = false;
                }
            if(!window.rightclick && this.setActiveShipPosition(y,x) || window.rightclick && this.setActiveShipPosition(y,x)) {
                    this.activateNextShip();
                    i += 1;
                }
            }

            setTimeout(function () {
                callback();
            }, 500);
            console.table(this.grid);

      
        }

});
    global.computer = computer;

}(this));


            