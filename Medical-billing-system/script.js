$(document).ready(function () {
  var input1 = 0,
    input2 = 0,
    input3 = 0,
    total = 0,
    gst = 0,
    grandTotal = 0;
  $(".input1").change(function () {
    input1 = $(this).val() * 58;
    $(".output1").text(input1);
  });

  $(".input2").change(function () {
    input2 = $(this).val() * 46;
    $(".output2").text(input2);
  });

  $(".input3").change(function () {
    input3 = $(this).val() * 1090;
    $(".output3").text(input3);
  });

  $("input").change(function () {
    total = input1 + input2 + input3;
    gst = (total * 15) / 100;
    $(".output4").text(total);
    $(".output5").text(gst);
  });
  $("button").click(function () {
    grandTotal = gst + total;
    $(".output6").text(grandTotal);
  });
});
