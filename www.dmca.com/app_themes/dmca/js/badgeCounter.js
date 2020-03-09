
function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;

    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }

    return x1 + x2;
}

(function($) {
	$(document).ready( function() {
        var currentTime = new Date();

        function increaseCounter() {

            var currentAmountOfUsers = $("#amountOfUsers").text().replace(/,/gi, "");
            currentAmountOfUsers = parseFloat(currentAmountOfUsers);
            ++currentAmountOfUsers;
            currentAmountOfUsers = "" + currentAmountOfUsers + "";
            currentAmountOfUsers = addCommas(currentAmountOfUsers);

            var newNumArray = currentAmountOfUsers.split("");

            $.each(newNumArray, function (index, value) {
                if (value != ",")
                    newNumArray[index] = "<span>" + value + "</span>";
            });

            currentAmountOfUsers = newNumArray.join("");

            $("#amountOfUsers").html(currentAmountOfUsers);

            setTimeout(increaseCounter, 2554);
        }

        if ($("#amountOfUsers").text().length > 0) {
            var ts = Math.round((new Date()).getTime() / 1000);
            var tsStarted = 1303936544;
            var tsDifference = parseInt(ts - tsStarted);
            // 01/8/2012 Matthew. Adjust this to compensate for changes in the actual table.
			var tsValueToAdd = Math.ceil(tsDifference * 0.44);
            var currentAmountOfUsers = $("#amountOfUsers").text().replace(/,/gi, "");
            currentAmountOfUsers = parseFloat(currentAmountOfUsers);

            $("#amountOfUsers").text(addCommas(currentAmountOfUsers + tsValueToAdd));

            increaseCounter();
        }
	});
})(jQuery);