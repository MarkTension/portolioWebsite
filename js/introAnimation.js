$(document).ready(function() {
  paper.setup("myCanvas");
  with (paper) {
    var rasters = [];
    for (var i = 0; i <= 6; i++) {
      rasters.push(new Raster("m" + i, [800 + i * 80, 180]));
      rasters[i].scale(0.1);
    }

    var text = new PointText({
      point: new Point(view.size.width / 2, view.size.height / 2),
      content: "The contents of the point text",
      fillColor: "white",
      fontFamily: "Raleway",
      fontWeight: "bold",
      fontSize: 25
    });

    var textList = [
      "Don't",
      "Fear",
      "Artificial",
      "Intelligence",
      "We",
      "Come",
      "In",
      "Peace"
    ];

    var zoomer = 1.001;
    view.onFrame = function(event) {
      var timeInt = Math.round(event.time * 4) % 8;
      text.content = textList[timeInt];

      console.log(timeInt);
      //raster0.rotate(1.5);
      for (var i = 0; i <= 6; i++) {
        // A cylic value between -1 and 1
        var sinus = Math.sin(event.time * 3 + i);
        var sinus2 = Math.sin(event.time * 2 + i);

        // text.position.y = sinus * 20 + view.size.height / 2;
        // text.position.x = 1 * sinus2 * 20 + view.size.width / 2;
        // Change the y position of the segment point:
        rasters[i].position.y = sinus * 20 + view.size.height / 2;
        rasters[i].position.x = (6 - i) * sinus2 * 20 + view.size.width / 2;
        rasters[i].scale(zoomer);
        if (i < 5) {
          rasters[i].rotate(1.00005 * (i + 0.4));
        }

        text.position.x = rasters[5].position.x;
        text.position.y = rasters[5].position.y;
      }
      var poo = true;
      if (event.time > 40 && poo == true) {
        zoomer = 0.999;
        poo = false;
      }
    };
  }
});
