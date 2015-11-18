
// function of everything

window.onload = function(){

  // image and popup variables

      var overlayDiv;
      var imgBox;
      var prevButt;
      var nextButt;
      var sliderBox;
      var closeButt;
      var count;
      var images;
      var thumbCount;
      var imgDivs;
      var imgObjectArray;

  // image and popup variables

// object array

    imgObjectArray = [];

// object array


// image objects function

  var createThumb = function(imgSource){
          this.imgSource = imgSource;
          imgObjectArray.push(imgSource);
      };

// image objects function

// image objects

     img = new createThumb('url("img/img1.jpg")');
     img = new createThumb('url("img/img2.jpg")');
     img = new createThumb('url("img/img3.jpg")');
     img = new createThumb('url("img/img4.jpg")');
     img = new createThumb('url("img/img5.jpg")');
     img = new createThumb('url("img/img7.jpg")');
     img = new createThumb('url("img/img8.jpg")');
     img = new createThumb('url("img/img6.jpg")');
     img = new createThumb('url("img/img9.jpg")');
     img = new createThumb('url("img/img10.jpg")');
     img = new createThumb('url("img/img11.jpg")');
     img = new createThumb('url("img/img12.jpg")');
     img = new createThumb('url("img/img13.jpg")');
     img = new createThumb('url("img/img14.jpg")');
     img = new createThumb('url("img/img15.jpg")');
     img = new createThumb('url("img/img16.jpg")');
     img = new createThumb('url("img/img17.jpg")');
     img = new createThumb('url("img/img18.jpg")');
     img = new createThumb('url("img/img19.jpg")');
     img = new createThumb('url("img/img20.jpg")');

// image objects


// little thumbnail count, increment as you wish

  thumbCount = [1,2,3,4,5,6,7,8,9,10,11,12];

// little thumbnail count, increment as you wish


// structure of the html

    // header

    var header = document.createElement("DIV");
        header.className = "header";
    var headerText = document.createTextNode("My Gallery");
        header.appendChild(headerText);
        document.body.appendChild(header);

    // header


    // container

    var container = document.createElement("DIV");
        container.className = "container";
        document.body.appendChild(container);

    // thumbnailBody

    var thumbnailBody = document.createElement("DIV");
        thumbnailBody.className = "thumbnailBody";
        container.appendChild(thumbnailBody);

    // thumbnailBody

    // thumbnail divs

      for (var i = 0; i < thumbCount.length; i++) {

              imgDivs = document.createElement("DIV");
              imgDivs.className = "imgBox";
              imgDivs.style.background = imgObjectArray[i];
              imgDivs.style.backgroundSize = "cover";

              imgDivs.onclick = function(){

                createPopup();

                // popUp image box

                  container.classList.add("blur");

                  imgBox = document.createElement("DIV");
                  imgBox.className = "popUpImg";

                  // clicked image

                  var currentImage = this.style.backgroundImage;
                      imgBox.style.backgroundImage = currentImage;

                  // clicked image

                  imgBox.style.backgroundSize = "cover";
                  sliderBox.appendChild(imgBox);

                // popUp image box

      for (var i = 0; i < thumbCount.length; i++) {

                if (currentImage == imgObjectArray[i]) {
                    return count = i;
                }

}



              }

              thumbnailBody.appendChild(imgDivs);

            }

      // thumbnail divs

    // container


    // footer

    var footer = document.createElement("DIV");
        footer.className = "footer";
    var footerText = document.createTextNode("© Orkhan Farmanli");
        footer.appendChild(footerText);
        document.body.appendChild(footer);

    // footer

// structure of the html


// popup function

function createPopup(){

// dark overlay

            overlayDiv = document.createElement("DIV");
            overlayDiv.className = "overlay";
            document.body.appendChild(overlayDiv);

// dark overlay


// slider box inside overlay

            sliderBox = document.createElement("DIV");
            sliderBox.className = "sliderBox";
            overlayDiv.appendChild(sliderBox);

// slider box inside overlay



// close button

            closeButt = document.createElement("DIV");
        var closeText = document.createTextNode("Close");
            closeButt.appendChild(closeText);
            closeButt.className = "closeButt";
            closeButt.onclick = closeOverlay;
            overlayDiv.appendChild(closeButt);

// close button


// Button to previous image

            prevButt = document.createElement("DIV");
            prevButt.className = "prevButt";
            prevButt.id = "navButt";
            prevButt.onclick = prevImage;
            sliderBox.appendChild(prevButt);

// Button to previous image


// Button to next image

            nextButt = document.createElement("DIV");
            nextButt.className = "nextButt";
            nextButt.id = "navButt";
            nextButt.onclick = nextImage;
            sliderBox.appendChild(nextButt);

// Button to next imag

}

// popup function


// slider function

  // next image

//  count = 0;

      function nextImage() {

        count++;

        imgBox.style.background = imgObjectArray[count];
        imgBox.style.backgroundSize = "cover";

        if (count >= imgObjectArray.length - 1) {
          count = -1;
        }
      }

  // next image

  // previous image

      function prevImage() {

        count--;

        if (count < 0) {
          count = imgObjectArray.length - 1;
        }

        imgBox.style.background = imgObjectArray[count];
        imgBox.style.backgroundSize = "cover";
      }

  // previous image

// slider function

// close overlay function

    function closeOverlay(){
      overlayDiv.style.display = "none";
      container.classList.remove("blur");
    }

// close overlay function


// keyboard image switch

    document.onkeydown = function(e) {
        switch (e.keyCode) {
          // switch previous
            case 37:
                prevImage();
                break;
          // switch previous

          // switch next
            case 39:
                nextImage();
                break;
          // switch next

          // close the overlay
            case 27:
                closeOverlay();
                break;
          // close the overlay

        };
    };

// keyboard image switch

}
// function of everything
