function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  $(function() {
    $(".video").click(function () {
      var theModal = $(this).data("target"),
          videoSRC = $(this).attr("data-video"),
          videoSRCauto = videoSRC + "";
      $(theModal + ' source').attr('src', videoSRCauto);
      $(theModal + ' button.close').click(function () {
        $(theModal + ' source').attr('src', videoSRC);
      });
    });
  });


  var modal = document.getElementById("about-Modal");

  var btn = document.getElementById("about");
  
  var closeBtn = document.getElementsByClassName("about-close")[0];
  closeBtn.onclick = function() {
    console.log('aaa');
    modal.style.display = "none";
  }
  btn.onclick = function() {
    modal.style.display = "block";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


  const expandBtns = document.querySelectorAll(".card-item span");
expandBtns.forEach( (btn,index) => {
    btn.addEventListener("click",() => {
        for(let i=0; i<expandBtns.length;i++){
        if(index==i) {
            expandBtns[i].parentElement.classList.toggle("expand");
                    }
        else  {
            expandBtns[i].parentElement.classList.remove("expand");
            }
            }
        })
})



