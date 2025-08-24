function fun() {
        let inputPswd = document.getElementById("validate")
                                .value;
        let correctPswd = "240709";
        if (inputPswd === correctPswd) {
            window.location.href = "https://unknownperson12251.github.io/random.website.com/actualblog_yzx_938LTNO32837.html"
        } else {
            	document.getElementById("container")
                	.style.display = "block";
            	document.getElementById("pswd")
                	.style.display = "none";
        }
};
document.onkeydown = function(e) {
        if (e.ctrlKey && e.keyCode === 85 ) {
            return false;
        }
};
var input = document.getElementById("validate");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button").click();
  }
});

