;(function() {

	var tabs = document.querySelector("paper-tabs")

	tabs.addEventListener("core-select", function() {

		console.log("Tab \"" + tabs.selected + "\" selected")

	})

}())
