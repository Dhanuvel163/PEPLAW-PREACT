export const  imageObserver = new IntersectionObserver((entries, imgObserver) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  const lazyImage = entry.target
                  let img = document.createElement("IMG")
                  img.setAttribute("alt","Card image cap")
                  img.setAttribute("class","card-img-top")
                  img.setAttribute("src",lazyImage.dataset.src)
                  img.onload = function(){
                  lazyImage.replaceWith(img)
                  }

                  // lazyImage.src = lazyImage.dataset.src
                  lazyImage.classList.remove("lzy_img");

                  imgObserver.unobserve(lazyImage);
              }
          })
      });


export const  iframeObserver = new IntersectionObserver((entries, imgObserver) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  const lazyImage = entry.target
                  lazyImage.src = lazyImage.dataset.src
                  lazyImage.classList.remove("lzy_ifrm");
                  imgObserver.unobserve(lazyImage);
              }
          })
      });