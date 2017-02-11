(function() {


const COLOR_LIST = ["yellow", "red", "aqua", "darkorchid", "orange"]

let colorChange = (selector) => {
	selector.css("background-color", COLOR_LIST[Math.floor(Math.random(0,COLOR_LIST.length) * COLOR_LIST.length)]);
}

$(".parkit").hover(() => {
	colorChange($(".parkit"))
}, () => {
	$(".parkit").css("background-color", "white");
})	

$(".pufferfish").hover(() => {
	colorChange($(".pufferfish"))
}, () => {
	$(".pufferfish").css("background-color", "white");
})	

$(".alexa").hover(() => {
	colorChange($(".alexa"))
}, () => {
	$(".alexa").css("background-color", "white");
})	

$(".markit").hover(() => {
	colorChange($(".markit"))
}, () => {
	$(".markit").css("background-color", "white");
})

$(".yah").hover(() => {
	colorChange($(".yah"))
}, () => {
	$(".yah").css("background-color", "white");
})

$(".excel").hover(() => {
	colorChange($(".excel"))
}, () => {
	$(".excel").css("background-color", "white");
})

$(".comic").hover(() => {
	colorChange($(".comic"))
}, () => {
	$(".comic").css("background-color", "white");
})

$(".eggs").hover(() => {
	colorChange($(".eggs"))
}, () => {
	$(".eggs").css("background-color", "white");
})

$(".website").hover(() => {
	colorChange($(".website"))
}, () => {
	$(".website").css("background-color", "white");
})

}());
