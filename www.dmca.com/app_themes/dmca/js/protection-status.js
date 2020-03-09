// share buttons link properly
function shareLink(sPermaUrl) {
    var addthis_share = {
        url: sPermaUrl
    };
}

// overlay/modals
function popupModal(divId) {
    $("#" + divId).show();
    $(".page-overlay").show();
}
function hideModal() {
    $(".popup-container").hide();
    $(".page-overlay").hide();
    $(".watermark").hide();
}

function verifiedExampleModal() {
    popupModal("divVerifiedExample");
    drawGraph("divTimelineEx", "timelineTooltipEx", "lblDurationEx", false, true);
    $(".watermark").show();
}

function noUrlModal() {
    popupModal("divNoUrl");
}


function decodedSignatureModal() {
    popupModal("divDecodedSignature");

    var dateContainer = $("#spDateSignatureContainer");
    if (dateContainer.hasClass("hidden")) {

        var txtSignature = $(".decoded-signature");
        var spinner = drawSpinner("divDecodeSpinner");

        $.ajax({
            type: "POST",
            url: "Status.aspx/DecompressString",
            data: '{compressedText:"' + txtSignature.text() + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                var txtDecompressed = data.d;
                var date = new Date(txtDecompressed.substr(txtDecompressed.indexOf("Date") + 6, 29));
                $("#spDateSignature").text(isNaN(date.getTime()) ? "Unavailable" : formatDate(date));

                setTimeout(function () {
                    txtSignature.text(txtDecompressed);
                    dateContainer.removeClass("hidden");

                    spinner.stop();
                    $("#divDecodeSpinnerContainer").hide();
                }, 2000);
            },
            error: function (e) {
                console.log(e);

                spinner.stop();
                $("#divDecodeSpinnerContainer").hide();
            }
        });
    }

    function formatDate(date) {
        return padNum(date.getMonth() + 1) + "/" +
        padNum(date.getDate()) + "/" +
        padNum(date.getFullYear()) + " " +
        padNum(date.getHours()) + ":" +
        padNum(date.getMinutes()) + ":" +
        padNum(date.getSeconds());

        function padNum(n) {
            return (n < 10) ? ("0" + n) : n;
        }
    }
}

// language select box flag image support
function languageSelectBox() {
    var options = $(".language-selector option");
    for (var i = 0; i < options.length; i++) {
        $(options[i]).attr("data-image", "https://az25533.vo.msecnd.net/assets/flags/" + options[i].value + ".gif");
    }
    $(".language-selector").msDropDown();
}

// help tooltip
function setupHelpTooltip() {
    var certTt = $(".certificate-tooltip");
    for (var i = 0; i < certTt.length; i++) {
        var certHelp = $(certTt[i]);
        if (certHelp.hasClass("help")) {
            // help icons
            if (certHelp.hasClass("help")) {
                var certTooltip = certHelp.children("span");
                certTooltip.css("left", (certHelp.position().left - (certTooltip.width() / 2)) + "px");
            }
        } else {
            // certificate buttons
            var certBtn = $(certTt[i]).find(".certificate-button");
            if (certBtn.length > 0) {
                var certTooltip = certBtn.next("span");
                certTooltip.css("left", (certBtn.position().left - (certTooltip.width() / 2) + certBtn.width()) + "px");
            }
        }
    }
}

// draw spinner
function drawSpinner(spinnerId) {
    var opts = {
        lines: 6, length: 0, width: 10, radius: 8, scale: 0.6, corners: 1, color: "#000", opacity: 0.3, rotate: 30, trail: 54, fps: 20, className: "spinner", top: "auto", left: "auto"
    };
    var spinner = new Spinner(opts).spin($("#" + spinnerId)[0]);
    return spinner;
}


// zoom hover over certificate signature
function signatureZoom() {
    $(".magnify").mousemove(function (e) {
        var magnify_offset = $(this).offset(),
            mx = e.pageX - magnify_offset.left,
            my = e.pageY - magnify_offset.top;

        // fade out the magnifying glass if the mouse is outside the container
        if (mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0) {
            $(".mag-glass").fadeIn(100);
            $(".sig-large").fadeIn(100);
        }
        else {
            $(".mag-glass").fadeOut(100);
            $(".sig-large").fadeOut(100);
        }

        if ($(".mag-glass").is(":visible")) {
            // background position of .large changes based on mouse position
            var rx = Math.round(mx - $(".mag-glass").width() / 2) * -1,
                ry = Math.round(my - $(".mag-glass").height() / 2) * -1;
            var bgpx = (rx * 3 - 70) + "px",
                bgpy = (ry - 5) + "px";

            // move magnifying glass and larger background zoom div with the mouse
            var px = mx - $(".mag-glass").width() / 2,
                py = my - $(".mag-glass").height() / 2;

            $(".mag-glass").css({ left: px, top: py });
            $(".sig-large").css({ left: bgpx, top: bgpy });
        }
    });
    
}


// tiny url api call
function getTinyUrl(sPermaUrl) {
    var url = encodeURI(sPermaUrl);
    $.getJSON('https://api-ssl.bitly.com/v3/shorten?callback=?',
        {
            format: "json",
            apiKey: "R_284bfd72f13149d7a18cd10c37b7eb46",
            login: "netromedia",
            longUrl: url
        },
        function (response) {
            var tinyUrl = response.data.url;
            if (tinyUrl != undefined) {
                $("#lnkTinyUrl").attr("href", tinyUrl);
                $("#txtTinyUrl").val(tinyUrl);
            }
        }
    );
}

// get registered badges
function getBadgesList(gAccountId) {
    var spinnerContainer = $("#divBadgesSpinnerContainer");
    var spinner = null;

    if (!spinnerContainer.hasClass("hidden")) {
        spinner = drawSpinner("divBadgesSpinner");

        // ajax call get registered badges
        if ($("#dlstBadges").is(":empty")) {
            $.ajax({
                type: "GET",
                url: "../rest/GetRegisteredBadges",
                data: "AccountID=" + gAccountId,
                dataType: "xml",
                success: function (data) {
                    var xml = $(data).children()[0];
                    populateBadgesList($(xml).html());
                },
                error: function (e) {
                    console.log(e);
                    spinner.stop();
                }
            });
        }
    }
    
    // badges callback function
    function populateBadgesList(allBadges) {
        var containerHtml = "";
        var lastLoop = false;
        allBadges = allBadges.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    
        // each badge entry starts with <a> tag
        while (!lastLoop) {
            var ind = allBadges.indexOf('<a ');
            var nextInd = allBadges.indexOf('<a ', ind + 1);
            if (nextInd == -1) {
                nextInd = allBadges.length;
                lastLoop = true;
            }
 
            var badge = allBadges.substring(ind, nextInd);
            allBadges = allBadges.substring(nextInd);

            var imgUrl = badge.substring(badge.indexOf('//images'));
            imgUrl = imgUrl.substring(0, imgUrl.indexOf('"'));

            containerHtml += '<div class="modal-badges">' +
                    badge +
				    '<br/><br/>' +
				    '<strong>Copy this embed code:</strong>' +
				    '<p>' +
                        '<textarea class="embedTextbox" id="txtEmbed" rows="3" cols="50" onclick="this.focus();this.select()">' + badge + '</textarea>' +
					    '<strong><a href="' + imgUrl + '" rel="<%=sStatusLink %>" class="addToBlogger">Add this Badge to Blogger</a></strong><br />' +
                        '<span style="padding-left:5px;"><img src="https://az25533.vo.msecnd.net/assets/images/facebook.gif" /> <a href="#" class="shareFBLink">Share on Facebook</a></span>' +
				    '</p>' +
			    '</div>';
        }

        spinnerContainer.addClass("hidden");
        spinner.stop();

        $("#dlstBadges").html(containerHtml);
    }
}


// protection date timeline
function dateTimeline(isVerified) {
    // cancel graph render on rescan reload
    if ($("#ctl00_cntBody_btnRescan").hasClass("grey")) return;

    var spinner = drawSpinner("divSpinner");

    setTimeout(function () {
        // show protection info
        if ($("#ctl00_cntBody_spProtectionPendingDays").text() == "") {
            $("#spDuration").show();
        }
        if (!$(".protection-info").hasClass("unavail")) {
            $(".timeline-lock").show();
            $(".button-recheck").show();
        }
        $("#spProtectionStatus").removeClass("hidden");
        $("#spProtectionStatusHelp").css("visibility", "visible");
        $("#spProtectionStatusTmp").addClass("hidden");

        // remove loading spinner
        spinner.stop();
        $("#divSpinnerContainer").hide();

        // draw graph
        $("#divTimeline").show();
        drawGraph("divTimeline", "timelineTooltip", "lblDuration", isVerified, false);
    }, 2000);
}

function drawGraph(divId, tooltipId, durationId, isVerified, isUpgradeExample) {
    var canvas = $("#" + divId),
        w = canvas.width(),
        h = canvas.height();

    //red, red-orange, orange, yellow, green
    var colors = ["#dd340d", "#da6f22", "#daa42d", "#c5b138", "#7eca26"];

    // if canvas is visible
    if (!canvas.hasClass("hidden")) {
        canvas.empty();

        var svg = d3.select("#" + divId).append("svg")
            .attr("width", w)
            .attr("height", h);

        var recentDate = new Date($("#ctl00_cntBody_lblLastChecked").text()),
            startDate = new Date($("#ctl00_cntBody_lblStarted").text());

        // unavailable/unauthorized (no dates)
        if (!recentDate.getTime() || !startDate.getTime()) {
            $("#" + divId).addClass("hidden");
            return;
        }

        var protectionDate = new Date(startDate),
            today = new Date(Date.now());
        if (isVerified || isUpgradeExample) {
            protectionDate.setDate(protectionDate.getDate() + 1); // 24 hr pending period
        } else {
            protectionDate.setDate(protectionDate.getDate() + 30); // 30 day pending period
        }
        today.setHours(0, 0, 0, 0);

        // setup d3 variables
        var isPending = (today < protectionDate),
            pendingDays = (isPending) ? Math.floor((protectionDate - today) / (1000 * 60 * 60 * 24)) : 0;
        var futureHatchPx = 30;

        var data = [recentDate, startDate, protectionDate, today];
        var x = d3.time.scale().range([1, w - (isPending ? futureHatchPx + 1 : 1)]);
        x.domain(d3.extent(data));

        var xStart = x(startDate),
            xProtection = x(protectionDate),
            xToday = x(today);
        var xProtectedBorder = (xToday - xStart) * 0.7;

        var tooltipText = [$("#spnLastChecked").text(), "Date of First Scan:", $("#spnStarted").text(), "Current Date:"],
            tooltip = $("#" + tooltipId),
            ttWidthHalf = 112;
        var fmt = d3.time.format("%x");

        // duration days count loop
        var duration = 2500;
        var lblTimer = $("#" + durationId),
            totalDays = Math.floor((today - protectionDate) / (1000 * 60 * 60 * 24)),
            day = 0;
        lblTimer.text(0);

        // diagonal hatch defs
        svg.append("defs").append("pattern")
            .attr("id", "diagonalHatchPending" + (isUpgradeExample ? "Ex" : ""))
            .attr("patternUnits", "userSpaceOnUse")
            .attr("width", 4)
            .attr("height", 4)
            .append("path")
            .attr("d", "M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2");
        svg.append("defs").append("pattern")
            .attr("id", "diagonalHatchProtected" + (isUpgradeExample ? "Ex" : ""))
            .attr("patternUnits", "userSpaceOnUse")
            .attr("width", 4)
            .attr("height", 4)
            .append("path")
            .attr("d", "M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2");

        // hatch rects
        svg.append("rect")
            .attr("x", xStart)
            .attr("y", 10)
            .attr("width", isPending ? xProtection - xStart : xProtectedBorder - xStart)
            .attr("height", 20)
            .attr("fill", "url(#diagonalHatchPending" + (isUpgradeExample ? "Ex" : "") + ")")
            .on("mouseover", onMouseoverPending)
            .on("mouseout", hideTooltip);

        svg.append("rect")
            .attr("x", isPending ? xProtection : xProtectedBorder)
            .attr("y", 10)
            .attr("width", isPending ? futureHatchPx : xToday - xProtectedBorder)
            .attr("height", 20)
            .attr("fill", "url(#diagonalHatchProtected" + (isUpgradeExample ? "Ex" : "") + ")")
            .on("mouseover", onMouseoverProtected)
            .on("mouseout", hideTooltip);

        $(".timeline-lock").on("mouseover", onMouseoverProtected).on("mouseout", hideTooltip);

        if (isPending) {
            // still in protection pending zone
            var percentToProtected = (xToday - xStart) / (xProtection - xStart),
                shortDuration = percentToProtected * duration;

            var rect = svg.append("rect")
                .attr("class", "rect")
                .attr("x", xStart)
                .attr("y", 10)
                .attr("width", 0)
                .attr("height", 20)
    	        .style("fill", colors[0])
                .on("mouseover", function () {
                    if (!isVerified && !isUpgradeExample) {
                        onMouseoverElapsed();
                    }
                })
                .on("mouseout", hideTooltip);

            // status pending transitions
            if (percentToProtected < .5) {
                var endColor = (percentToProtected < .25) ? colors[0] : colors[1];
                rect.transition()
                        .duration(shortDuration)
                        .ease("linear")
                        .style("fill", endColor)
        	            .attr("width", xToday - xStart);
            } else {
                var endColor = (percentToProtected < .75) ? colors[2] : colors[3];
                rect.transition()
                        .duration(shortDuration * (3 / 4))
                        .ease("linear")
                        .style("fill", colors[2])
        	            .attr("width", (xToday * (3 / 4)) - xStart)
                    .transition()
                        .duration(shortDuration * (1 / 4))
        	            .ease("linear")
                        .style("fill", endColor)
        	            .attr("width", xToday - xStart);
            }

            // text days for pending
            if (!isVerified && !isUpgradeExample) {
                svg.append("text")
                    .attr("class", "timelinetext")
                    .attr("x", xStart - 4 + (xToday - xStart) / 2)
                    .attr("y", 24)
                    .text(0)
                    .on("mouseover", onMouseoverElapsed)
                    .on("mouseout", hideTooltip)
                    .transition()
                        .duration(shortDuration)
                        .ease("linear")
                        .tween("text", function () {
                            var i = d3.interpolateRound(0, (30 - pendingDays));
                            return function (t) {
                                this.textContent = i(t);
                            };
                        });

                svg.append("text")
                    .attr("class", "timelinetext")
                    .attr("x", xToday - 4 + (xProtection - xToday) / 2)
                    .attr("y", 24)
                    .text(30)
                    .on("mouseover", onMouseoverPending)
                    .on("mouseout", hideTooltip)
                    .transition()
                        .duration(shortDuration)
                        .ease("linear")
                        .tween("text", function () {
                            var i = d3.interpolateRound(30, pendingDays);
                            return function (t) {
                                this.textContent = i(t);
                            };
                        });
            } else {
                svg.append("text")
                    .attr("class", "timelinetext")
                    .attr("x", xToday - 4 + (xProtection - xToday) / 2)
                    .attr("y", 24)
                    .text(1)
                    .on("mouseover", onMouseoverPending)
                    .on("mouseout", hideTooltip);
            }
        }
        else {
            // protection pending date has been passed
            var redDuration = ((xProtectedBorder - xStart) / (xToday - xStart)) * duration;

            var interval = (duration - redDuration) / totalDays,
                timer = null, incr = 1;
            // if interval < 5 milliseconds, skip numbers so script can keep up
            if (interval < 5) {
                incr = Math.ceil(5 / interval);
                interval = 5;
            }
            setTimeout(function () { timer = setInterval(updateDays, interval) }, redDuration);

            // status protected transitions
            svg.append("rect")
                    .attr("class", "rect")
                    .attr("x", xStart)
                    .attr("y", 10)
                    .attr("width", 0)
                    .attr("height", 20)
                    .style("fill", colors[0])
                .transition()
                    .ease("linear")
                    .duration(redDuration * (3 / 4))
                    .style("fill", colors[2])
                    .attr("width", (xProtectedBorder * (3 / 4)) - xStart)
                .transition()
    	            .ease("linear")
                    .duration(redDuration * (1 / 4))
    	            .style("fill", colors[4])
    	            .attr("width", xProtectedBorder - xStart)
                .each("end", function () {
                    // reached green protected zone
                    d3.select(this)
                        .transition()
                            .ease("linear")
                            .duration(30)
                            .style("fill", "#9bf92f")
                        .transition()
                            .ease("linear")
                            .duration((duration - redDuration) / 3)
                            .attr("width", (xProtectedBorder - xStart) + ((xToday - xStart) - (xProtectedBorder - xStart)) / 3)
                            .style("fill", colors[4])
                        .transition()
    	                    .ease("linear")
    	                    .duration((duration - redDuration) / 2)
    	                    .attr("width", xToday - xStart);

                    svg.append("text")
                        .attr("class", "timelinetext")
                        .attr("x", 90)
                        .attr("y", 24)
                        .style("font-weight", "bold")
                        .text("Page is Protected");
                });
        }

        // date ticks
        var node = svg.selectAll("g")
            .data(data)
            .enter()
            .append("g");
        node.append("svg:line")
  	        .attr("class", function (d, i) { return "tick" + (i == 0 ? " grey-dashed" : ""); })
  	        .attr("x1", function (d) { return x(d); })
            .attr("x2", function (d) { return x(d); })
            .attr("y1", function (d, i) { return i == 0 ? 7 : 8; })
            .attr("y2", function (d, i) { return i == 0 ? 33 : 32; })
            .on("mouseover", function (d, i) {
                if (!isUpgradeExample) {
                    tooltip.find("span").show()
                        .css("top", "31px").css("left", (x(d) - ttWidthHalf) + "px")
                        .text(tooltipText[i] + " " + fmt(d));
                }
            })
            .on("mouseout", hideTooltip);

        tooltip.mouseover(function () {
            if (!isUpgradeExample) {
                tooltip.find("span").show();
            }
        }).mouseout(hideTooltip);
    }

    // count up days with rect transitions
	function updateDays() {
	    day += incr;
	    if (day >= totalDays) {
	        clearInterval(timer);
	        day = totalDays;
	    }
        lblTimer.text(day);
	}

    // hide rectangle zone tooltip
    function hideTooltip() {
        if (!isUpgradeExample) {
            tooltip.find("span").hide();
        }
    }

    function onMouseoverProtected() { 
        if (!isUpgradeExample) {
            var leftPx = (isPending) ? xProtection - ttWidthHalf + futureHatchPx / 2 : xToday - ttWidthHalf - 14;
            var txt = (isPending) ?
                (isVerified ? "Page protection begins 24 hours after first successful scan of page." : "Page protection begins 30 days after first successful scan of page. To speed up this process, click to <a href='../ProtectionPro.aspx?r=pstu'>upgrade</a>") :
                "Page is Protected";
            tooltip.find("span").show()
                .css("top", "31px").css("left", leftPx + "px")
                .html(txt);
        }
    }

    function onMouseoverPending() {
        if (!isUpgradeExample) {
            tooltip.find("span").show()
                .css("top", "31px").css("left", (xToday - ttWidthHalf + (xProtection - xToday) / 2) + "px")
                .text(pendingDays + " days left until page is protected by dmca.com");
        }
    }

    function onMouseoverElapsed() {
        if (!isUpgradeExample) {
            tooltip.find("span").show()
                .css("top", "31px").css("left", (xStart - ttWidthHalf + (xToday - xStart) / 2) + "px")
                .text((30 - pendingDays) + " days since badge was succesfully scanned");
        }
    }
}
