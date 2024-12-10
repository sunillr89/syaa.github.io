/* Slider 1*/
var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider11"] = {
    once: RS_MODULES.modules["revslider11"] !== undefined ? RS_MODULES.modules["revslider11"].once : undefined,
    init: function() {
        window.revapi1 = window.revapi1 === undefined || window.revapi1 === null || window.revapi1.length === 0 ? document.getElementById("rev_slider_1_1") : window.revapi1;
        if (window.revapi1 === null || window.revapi1 === undefined || window.revapi1.length == 0) {
            window.revapi1initTry = window.revapi1initTry === undefined ? 0 : window.revapi1initTry + 1;
            if (window.revapi1initTry < 20) requestAnimationFrame(function() {
                RS_MODULES.modules["revslider11"].init()
            });
            return;
        }
        window.revapi1 = jQuery(window.revapi1);
        if (window.revapi1.revolution == undefined) {
            revslider_showDoubleJqueryError("rev_slider_1_1");
            return;
        }
        revapi1.revolutionInit({
            revapi: "revapi1",
            DPR: "dpr",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1324,1024,778,480",
            gridheight: "950,700,600,500",
            lazyType: "smart",
            perspective: 600,
            perspectiveType: "local",
            editorheight: "950,700,600,500",
            responsiveLevels: "1240,1024,778,480",
            progressBar: {
                disableProgressBar: true
            },
            navigation: {
                onHoverStop: false
            },
            viewPort: {
                global: true,
                globalDist: "-200px",
                enable: false,
                visible_area: "20%"
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });
        // listen for when the slider initially loads
        revapi1.bind('revolution.slide.onloaded', function() {

            // get number of total slides in slider
            var totalSlides = revapi1.revmaxslide();

            // listen for when a new slide is shown
            revapi1.bind('revolution.slide.onchange', function(e, data) {

                // get current slide number
                var currentSlide = data.slideIndex;

                jQuery('#rev-total-slide .rs-layer').html('0' + currentSlide + ' / 0' + totalSlides);

            });

        });

    }
} // End of RevInitScript
if (window.RS_MODULES.checkMinimal !== undefined) {
    window.RS_MODULES.checkMinimal();
};

/* Slider 2*/
var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider22"] = {
    once: RS_MODULES.modules["revslider22"] !== undefined ? RS_MODULES.modules["revslider22"].once : undefined,
    init: function() {
        window.revapi2 = window.revapi2 === undefined || window.revapi2 === null || window.revapi2.length === 0 ? document.getElementById("rev_slider_2_1") : window.revapi2;
        if (window.revapi2 === null || window.revapi2 === undefined || window.revapi2.length == 0) {
            window.revapi2initTry = window.revapi2initTry === undefined ? 0 : window.revapi2initTry + 1;
            if (window.revapi2initTry < 20) requestAnimationFrame(function() {
                RS_MODULES.modules["revslider22"].init()
            });
            return;
        }
        window.revapi2 = jQuery(window.revapi2);
        if (window.revapi2.revolution == undefined) {
            revslider_showDoubleJqueryError("rev_slider_2_1");
            return;
        }
        revapi2.revolutionInit({
            revapi: "revapi2",
            DPR: "dpr",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1270,1024,778,480",
            gridheight: "1080,750,650,500",
            lazyType: "smart",
            perspective: 600,
            perspectiveType: "global",
            editorheight: "1080,750,650,500",
            responsiveLevels: "1240,1024,778,480",
            progressBar: {
                disableProgressBar: true
            },
            navigation: {
                wheelCallDelay: 1000,
                onHoverStop: false,
                arrows: {
                    enable: true,
                    tmp: "<div class=\"tp-title-wrap\">  	<div class=\"tp-arr-imgholder\"></div> </div>",
                    style: "zeus",
                    hide_onmobile: true,
                    hide_under: "1400px",
                    left: {
                        h_offset: 80
                    },
                    right: {
                        h_offset: 80
                    }
                }
            },
            viewPort: {
                global: true,
                globalDist: "-200px",
                enable: false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });

    }
} // End of RevInitScript

/* Slider 03 */
var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider33"] = {
    once: RS_MODULES.modules["revslider33"] !== undefined ? RS_MODULES.modules["revslider33"].once : undefined,
    init: function() {
        window.revapi3 = window.revapi3 === undefined || window.revapi3 === null || window.revapi3.length === 0 ? document.getElementById("rev_slider_3_1") : window.revapi3;
        if (window.revapi3 === null || window.revapi3 === undefined || window.revapi3.length == 0) {
            window.revapi3initTry = window.revapi3initTry === undefined ? 0 : window.revapi3initTry + 1;
            if (window.revapi3initTry < 20) requestAnimationFrame(function() {
                RS_MODULES.modules["revslider33"].init()
            });
            return;
        }
        window.revapi3 = jQuery(window.revapi3);
        if (window.revapi3.revolution == undefined) {
            revslider_showDoubleJqueryError("rev_slider_3_1");
            return;
        }
        revapi3.revolutionInit({
            revapi: "revapi3",
            DPR: "dpr",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1324,1024,778,480",
            gridheight: "950,750,650,500",
            lazyType: "smart",
            spinner: "spinner0",
            perspective: 600,
            perspectiveType: "local",
            editorheight: "950,750,650,500",
            responsiveLevels: "1240,1024,778,480",
            progressBar: {
                disableProgressBar: true
            },
            navigation: {
                mouseScrollNavigation: false,
                wheelCallDelay: 1000,
                onHoverStop: false,
                arrows: {
                    enable: true,
                    style: "custom",
                    hide_onmobile: true,
                    hide_under: "1300px",
                    animDelay: "3000ms",
                    left: {
                        container: "layergrid",
                        h_offset: 35,
                        v_offset: 220
                    },
                    right: {
                        container: "layergrid",
                        h_align: "left",
                        h_offset: 180,
                        v_offset: 220
                    }
                }
            },
            viewPort: {
                global: true,
                globalDist: "-200px",
                enable: false,
                visible_area: "20%"
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });
        // listen for when the slider initially loads
        revapi3.bind('revolution.slide.onloaded', function() {
            // get number of total slides in slider
            var totalSlides = revapi3.revmaxslide();
            // listen for when a new slide is shown
            revapi3.bind('revolution.slide.onchange', function(e, data) {
                // get current slide number
                var currentSlide = data.slideIndex;
                jQuery('#rev-total-slide .rs-layer').html('0' + currentSlide + ' / 0' + totalSlides);
            });

        });

    }
} // End of RevInitScript

/* Slider 04 */
var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider44"] = {
    once: RS_MODULES.modules["revslider44"] !== undefined ? RS_MODULES.modules["revslider44"].once : undefined,
    init: function() {
        window.revapi4 = window.revapi4 === undefined || window.revapi4 === null || window.revapi4.length === 0 ? document.getElementById("rev_slider_4_1") : window.revapi4;
        if (window.revapi4 === null || window.revapi4 === undefined || window.revapi4.length == 0) {
            window.revapi4initTry = window.revapi4initTry === undefined ? 0 : window.revapi4initTry + 1;
            if (window.revapi4initTry < 20) requestAnimationFrame(function() {
                RS_MODULES.modules["revslider44"].init()
            });
            return;
        }
        window.revapi4 = jQuery(window.revapi4);
        if (window.revapi4.revolution == undefined) {
            revslider_showDoubleJqueryError("rev_slider_4_1");
            return;
        }
        revapi4.revolutionInit({
            revapi: "revapi4",
            DPR: "dpr",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1270,1024,778,480",
            gridheight: "950,700,600,500",
            lazyType: "smart",
            perspective: 600,
            perspectiveType: "global",
            editorheight: "950,700,600,500",
            responsiveLevels: "1240,1024,778,480",
            progressBar: {
                disableProgressBar: true
            },
            navigation: {
                wheelCallDelay: 1000,
                onHoverStop: false,
                bullets: {
                    enable: true,
                    tmp: "",
                    style: "custom",
                    hide_onmobile: true,
                    hide_under: "767px",
                    v_offset: 70
                }
            },
            viewPort: {
                global: true,
                globalDist: "-200px",
                enable: false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });

    }
} // End of RevInitScript

/* Slider 05 */
var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider55"] = {
    once: RS_MODULES.modules["revslider55"] !== undefined ? RS_MODULES.modules["revslider55"].once : undefined,
    init: function() {
        window.revapi5 = window.revapi5 === undefined || window.revapi5 === null || window.revapi5.length === 0 ? document.getElementById("rev_slider_5_1") : window.revapi5;
        if (window.revapi5 === null || window.revapi5 === undefined || window.revapi5.length == 0) {
            window.revapi5initTry = window.revapi5initTry === undefined ? 0 : window.revapi5initTry + 1;
            if (window.revapi5initTry < 20) requestAnimationFrame(function() {
                RS_MODULES.modules["revslider55"].init()
            });
            return;
        }
        window.revapi5 = jQuery(window.revapi5);
        if (window.revapi5.revolution == undefined) {
            revslider_showDoubleJqueryError("rev_slider_5_1");
            return;
        }
        revapi5.revolutionInit({
            revapi: "revapi5",
            DPR: "dpr",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1324,1024,778,480",
            gridheight: "950,700,600,500",
            lazyType: "smart",
            spinner: "spinner0",
            perspective: 600,
            perspectiveType: "local",
            editorheight: "950,700,600,500",
            responsiveLevels: "1240,1024,778,480",
            progressBar: {
                disableProgressBar: true
            },
            navigation: {
                mouseScrollNavigation: false,
                wheelCallDelay: 1000,
                onHoverStop: false,
                bullets: {
                    enable: true,
                    tmp: "",
                    style: "custom",
                    h_align: "right",
                    v_align: "center",
                    h_offset: 70,
                    v_offset: 0,
                    direction: "vertical"
                }
            },
            viewPort: {
                global: true,
                globalDist: "-200px",
                enable: false,
                visible_area: "20%"
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });
        // 		// listen for when the slider initially loads
        // revapi1.bind('revolution.slide.onloaded', function() {

        // // get number of total slides in slider
        // var totalSlides = revapi1.revmaxslide();

        // // listen for when a new slide is shown
        // revapi1.bind('revolution.slide.onchange', function(e, data) {

        // // get current slide number
        // var currentSlide = data.slideIndex;

        // jQuery('#rev-total-slide .rs-layer').html('0' + currentSlide + ' / 0' + totalSlides);

        // });

        // });

    }
} // End of RevInitScript

/* Slider 06 */
var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider66"] = {
    once: RS_MODULES.modules["revslider66"] !== undefined ? RS_MODULES.modules["revslider66"].once : undefined,
    init: function() {
        window.revapi6 = window.revapi6 === undefined || window.revapi6 === null || window.revapi6.length === 0 ? document.getElementById("rev_slider_6_1") : window.revapi6;
        if (window.revapi6 === null || window.revapi6 === undefined || window.revapi6.length == 0) {
            window.revapi6initTry = window.revapi6initTry === undefined ? 0 : window.revapi6initTry + 1;
            if (window.revapi6initTry < 20) requestAnimationFrame(function() {
                RS_MODULES.modules["revslider66"].init()
            });
            return;
        }
        window.revapi6 = jQuery(window.revapi6);
        if (window.revapi6.revolution == undefined) {
            revslider_showDoubleJqueryError("rev_slider_6_1");
            return;
        }
        revapi6.revolutionInit({
            revapi: "revapi6",
            DPR: "dpr",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1324,1024,778,480",
            gridheight: "950,700,600,500",
            lazyType: "smart",
            spinner: "spinner0",
            perspective: 600,
            perspectiveType: "local",
            editorheight: "950,700,600,500",
            responsiveLevels: "1240,1024,778,480",
            progressBar: {
                disableProgressBar: true
            },
            navigation: {
                mouseScrollNavigation: false,
                wheelCallDelay: 1000,
                onHoverStop: false,
                bullets: {
                    enable: true,
                    tmp: "",
                    style: "custom",
                    hide_onmobile: true,
                    hide_under: "1024px",
                    h_align: "right",
                    v_align: "center",
                    h_offset: 70,
                    v_offset: 0,
                    direction: "vertical"
                }
            },
            viewPort: {
                global: true,
                globalDist: "-200px",
                enable: false,
                visible_area: "20%"
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });
        // 			// listen for when the slider initially loads
        // 	revapi1.bind('revolution.slide.onloaded', function() {

        // 	// get number of total slides in slider
        // 	var totalSlides = revapi1.revmaxslide();

        // 	// listen for when a new slide is shown
        // 	revapi1.bind('revolution.slide.onchange', function(e, data) {

        // 	// get current slide number
        // 	var currentSlide = data.slideIndex;

        // 	jQuery('#rev-total-slide .rs-layer').html('0' + currentSlide + ' / 0' + totalSlides);

        //     });

        // });

    }
} // End of RevInitScript

/* Slider 07 */
var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider77"] = {
    once: RS_MODULES.modules["revslider77"] !== undefined ? RS_MODULES.modules["revslider77"].once : undefined,
    init: function() {
        window.revapi7 = window.revapi7 === undefined || window.revapi7 === null || window.revapi7.length === 0 ? document.getElementById("rev_slider_7_1") : window.revapi7;
        if (window.revapi7 === null || window.revapi7 === undefined || window.revapi7.length == 0) {
            window.revapi7initTry = window.revapi7initTry === undefined ? 0 : window.revapi7initTry + 1;
            if (window.revapi7initTry < 20) requestAnimationFrame(function() {
                RS_MODULES.modules["revslider77"].init()
            });
            return;
        }
        window.revapi7 = jQuery(window.revapi7);
        if (window.revapi7.revolution == undefined) {
            revslider_showDoubleJqueryError("rev_slider_7_1");
            return;
        }
        revapi7.revolutionInit({
            revapi: "revapi7",
            DPR: "dpr",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1270,1024,778,480",
            gridheight: "950,700,600,500",
            lazyType: "smart",
            spinner: "spinner0",
            perspective: 600,
            perspectiveType: "local",
            editorheight: "950,700,600,500",
            responsiveLevels: "1240,1024,778,480",
            progressBar: {
                disableProgressBar: true
            },
            navigation: {
                mouseScrollNavigation: false,
                wheelCallDelay: 1000,
                onHoverStop: false,
                bullets: {
                    enable: true,
                    tmp: "",
                    style: "custom",
                    hide_onmobile: true,
                    hide_under: "1200px",
                    h_align: "right",
                    v_align: "center",
                    h_offset: 70,
                    v_offset: 0,
                    direction: "vertical"
                }
            },
            viewPort: {
                global: true,
                globalDist: "-200px",
                enable: false,
                visible_area: "20%"
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });
        // 			// listen for when the slider initially loads
        // revapi1.bind('revolution.slide.onloaded', function() {

        // // get number of total slides in slider
        // var totalSlides = revapi1.revmaxslide();

        // // listen for when a new slide is shown
        // revapi1.bind('revolution.slide.onchange', function(e, data) {

        // // get current slide number
        // var currentSlide = data.slideIndex;

        // jQuery('#rev-total-slide .rs-layer').html('0' + currentSlide + ' / 0' + totalSlides);

        // });

        // });

    }
} // End of RevInitScript

/* Slider 08 */
var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider88"] = {
    once: RS_MODULES.modules["revslider88"] !== undefined ? RS_MODULES.modules["revslider88"].once : undefined,
    init: function() {
        window.revapi8 = window.revapi8 === undefined || window.revapi8 === null || window.revapi8.length === 0 ? document.getElementById("rev_slider_8_1") : window.revapi8;
        if (window.revapi8 === null || window.revapi8 === undefined || window.revapi8.length == 0) {
            window.revapi8initTry = window.revapi8initTry === undefined ? 0 : window.revapi8initTry + 1;
            if (window.revapi8initTry < 20) requestAnimationFrame(function() {
                RS_MODULES.modules["revslider88"].init()
            });
            return;
        }
        window.revapi8 = jQuery(window.revapi8);
        if (window.revapi8.revolution == undefined) {
            revslider_showDoubleJqueryError("rev_slider_8_1");
            return;
        }
        revapi8.revolutionInit({
            revapi: "revapi8",
            DPR: "dpr",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1194,1024,778,480",
            gridheight: "1020,800,650,450",
            perspective: 600,
            perspectiveType: "global",
            editorheight: "1020,800,650,450",
            responsiveLevels: "1240,1024,778,480",
            progressBar: {
                disableProgressBar: true
            },
            navigation: {
                wheelCallDelay: 1000,
                onHoverStop: false,
                arrows: {
                    enable: true,
                    style: "hephaistos",
                    hide_onmobile: true,
                    hide_under: "1024px",
                    left: {
                        container: "layergrid",
                        v_align: "bottom",
                        h_offset: 30,
                        v_offset: 100
                    },
                    right: {
                        container: "layergrid",
                        h_align: "left",
                        v_align: "bottom",
                        h_offset: 110,
                        v_offset: 100
                    }
                }
            },
            viewPort: {
                global: false,
                globalDist: "-200px",
                enable: false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });

    }
} // End of RevInitScript

/* Slider 09 */
var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider99"] = {
    once: RS_MODULES.modules["revslider99"] !== undefined ? RS_MODULES.modules["revslider99"].once : undefined,
    init: function() {
        window.revapi9 = window.revapi9 === undefined || window.revapi9 === null || window.revapi9.length === 0 ? document.getElementById("rev_slider_9_1") : window.revapi9;
        if (window.revapi9 === null || window.revapi9 === undefined || window.revapi9.length == 0) {
            window.revapi9initTry = window.revapi9initTry === undefined ? 0 : window.revapi9initTry + 1;
            if (window.revapi9initTry < 20) requestAnimationFrame(function() {
                RS_MODULES.modules["revslider99"].init()
            });
            return;
        }
        window.revapi9 = jQuery(window.revapi9);
        if (window.revapi9.revolution == undefined) {
            revslider_showDoubleJqueryError("rev_slider_9_1");
            return;
        }
        revapi9.revolutionInit({
            revapi: "revapi9",
            DPR: "dpr",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1240,1024,778,480",
            gridheight: "970,750,650,600",
            perspective: 600,
            perspectiveType: "global",
            editorheight: "970,750,650,600",
            responsiveLevels: "1240,1024,778,480",
            progressBar: {
                disableProgressBar: true
            },
            navigation: {
                wheelCallDelay: 1000,
                onHoverStop: false,
                bullets: {
                    enable: true,
                    tmp: "",
                    style: "hermes",
                    hide_onmobile: true,
                    hide_under: "1400px",
                    h_align: "left",
                    v_align: "center",
                    h_offset: 30,
                    v_offset: 0,
                    direction: "vertical"
                }
            },
            viewPort: {
                global: false,
                globalDist: "-200px",
                enable: false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });

    }
} // End of RevInitScript

/* Slider 10 */
var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider10"] = {
    once: RS_MODULES.modules["revslider10"] !== undefined ? RS_MODULES.modules["revslider10"].once : undefined,
    init: function() {
        window.revapi10 = window.revapi10 === undefined || window.revapi10 === null || window.revapi10.length === 0 ? document.getElementById("rev_slider_10_1") : window.revapi10;
        if (window.revapi10 === null || window.revapi10 === undefined || window.revapi10.length == 0) {
            window.revapi10initTry = window.revapi10initTry === undefined ? 0 : window.revapi10initTry + 1;
            if (window.revapi10initTry < 20) requestAnimationFrame(function() {
                RS_MODULES.modules["revslider10"].init()
            });
            return;
        }
        window.revapi10 = jQuery(window.revapi10);
        if (window.revapi10.revolution == undefined) {
            revslider_showDoubleJqueryError("rev_slider_10_1");
            return;
        }
        revapi10.revolutionInit({
            revapi: "revapi10",
            DPR: "dpr",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1170,1024,778,480",
            gridheight: "1000,768,650,450",
            perspective: 600,
            perspectiveType: "global",
            editorheight: "1000,768,650,450",
            responsiveLevels: "1240,1024,778,480",
            progressBar: {
                disableProgressBar: true
            },
            navigation: {
                wheelCallDelay: 1000,
                onHoverStop: false,
                arrows: {
                    enable: true,
                    style: "hesperiden",
                    hide_onmobile: true,
                    hide_under: "1200px",
                    left: {
                        h_offset: 100
                    },
                    right: {
                        h_offset: 100
                    }
                }
            },
            viewPort: {
                global: false,
                globalDist: "-200px",
                enable: false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });

    }
} // End of RevInitScript

/* Slider 11 */
var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider111"] = {
    once: RS_MODULES.modules["revslider111"] !== undefined ? RS_MODULES.modules["revslider111"].once : undefined,
    init: function() {
        window.revapi11 = window.revapi11 === undefined || window.revapi11 === null || window.revapi11.length === 0 ? document.getElementById("rev_slider_11_1") : window.revapi11;
        if (window.revapi11 === null || window.revapi11 === undefined || window.revapi11.length == 0) {
            window.revapi11initTry = window.revapi11initTry === undefined ? 0 : window.revapi11initTry + 1;
            if (window.revapi11initTry < 20) requestAnimationFrame(function() {
                RS_MODULES.modules["revslider111"].init()
            });
            return;
        }
        window.revapi11 = jQuery(window.revapi11);
        if (window.revapi11.revolution == undefined) {
            revslider_showDoubleJqueryError("rev_slider_11_1");
            return;
        }
        revapi11.revolutionInit({
            revapi: "revapi11",
            DPR: "dpr",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1240,1024,778,480",
            gridheight: "870,750,600,500",
            perspective: 600,
            perspectiveType: "global",
            editorheight: "870,750,600,500",
            responsiveLevels: "1240,1024,778,480",
            progressBar: {
                disableProgressBar: true
            },
            navigation: {
                wheelCallDelay: 1000,
                onHoverStop: false,
                bullets: {
                    enable: true,
                    tmp: "<span class=\"tp-bullet-inner\"></span>",
                    style: "uranus",
                    hide_onmobile: true,
                    hide_under: 778,
                    v_offset: 30
                }
            },
            viewPort: {
                global: false,
                globalDist: "-200px",
                enable: false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });

    }
} // End of RevInitScript
if (window.RS_MODULES.checkMinimal !== undefined) {
    window.RS_MODULES.checkMinimal();
};