/*!
 * Loading v1.0
 * Copyright Grafikdev
 * Distributed under the MIT license
 */

(function($) {

    $.fn.Loading = function(options) {


        var methods = {

            init : function(option) {
                $(document).on({
                    ajaxStart: function() {
                        helpers.start();
                    },
                    ajaxStop: function() {
                        helpers.stop();
                    }
                });

                return this;
            }
        }

        var helpers = {
        	start : function(){
        		if($('#full-loading').length == 0) {
                    var loading = $("<div>").attr("id","full-loading");
                    var wrapper = $("<div>").addClass("wrapper").appendTo(loading);
                    var inner = $("<div>").addClass("inner").appendTo(wrapper);
                    $("<span>").text("L").appendTo(inner);
                    $("<span>").text("o").appendTo(inner);
                    $("<span>").text("a").appendTo(inner);
                    $("<span>").text("d").appendTo(inner);
                    $("<span>").text("i").appendTo(inner);
                    $("<span>").text("n").appendTo(inner);
                    $("<span>").text("g").appendTo(inner);
                    $(loading).appendTo("body");
                }
        	},
        	stop : function(){
        		if($('#full-loading').length != 0) {
                    $('#full-loading').remove();
                }
        	}
        }

        return methods.init.apply(this, arguments);
    }

})(jQuery);
