


//   "<tr>" +
// "<td>" + item.id + "</td>" + 
// "<td>" + item.status + "</td>" +
// "<td>" + item.InstrumentDesc+ "</td>" +
// "<td>" + item.calJob + "</td>" +
// "<td>" + item.siteCode + "</td>" + "<br>" +
// "</tr>"

// ----------------------Fetch Calibration 'Volume' Data-------------------------- //
$.post('fetch_calVolume.php', function(data) {
    $.each(data, function(i, item) {
        $("#total_calVolume").append( " " + item['count(id)'] );
    });  
});

// ----------------------Fetch Calibration 'Completed' Data-------------------------- //
$.post('fetch_calCompleted.php', function (data) {
  $.each(data, function (i, item) {
    $("#total_calCompleted").append(" " + item['count(status)']);
  });
});

// ----------------------Fetch Calibration 'In-Review' Data-------------------------- //
$.post('fetch_calReview.php', function (data) {
  $.each(data, function (i, item) {
    $("#total_calReview").append(" " + item['count(status)']);
  });
});

// ----------------------Fetch Calibration 'Cost' Data-------------------------- //
$.post('fetch_calCost.php', function (data) {
  $.each(data, function (i, item) {
    $("#total_calCost").append(" " + item['ROUND(SUM(calCost), 2)']);
  });
});

// ----------------------Top Cost Savings by Item Data-------------------------- //
// $.post('sales_by_item.php', function (data) {
//   $.each(data, function (i, item) {
//     $("#top1_sale").append(" " + item['ROUND(SUM(calCost),2)']);
//   });
// });


// ----------------------Fetch Table Cal Data (Home)-------------------------- //

$.post('fetch_calRequestForm.php', function(data) {
  $.each(data, function(i, item) {
    calStatus = item.status;
    
      $("#table1").append("<tr>" +
                            "<td>" + item.id + "</td>" + 
                            "<td>" + item.ein_new + "</td>" +
                            "<td>" + item.instrumentDesc+ "</td>" +
                            "<td>" + item.dateReceived + "</td>" +
                            "<td>" + item.status + "</td>" +
                            "</tr>"
                            );
  });
});


// ----------------------Fetch Table Cal Data (ALL)-------------------------- //

$.post('fetch_calRequest_ALL.php', function(data) {
  $.each(data, function(i, item) {
    calStatus = item.status;
    
    
      $("#table_All").append("<tr>" +
                            "<td>" + item.id + "</td>" + 
                            "<td>" + item.ein_new + "</td>" +
                            "<td>" + item.instrumentDesc+ "</td>" +
                            "<td>" + item.dateReceived + "</td>" +
                            "<td>" + item.siteCode + "</td>" +
                            "<td>" + item.owner + "</td>" +
                            "<td>" + item.status +  "</td>" +
                            "<td>" + "Null" +  "</td>" +
                            "</tr>"
                            );
  });
});

// ----------------------Fetch Table Cal Data (Shipping Indicaltor)----------- //
/* $("#table_All").append("<tr>" +
"<td>" + item.id + "</td>" + 
"<td>" + item.ein_new + "</td>" +
"<td>" + item.instrumentDesc+ "</td>" +
"<td>" + item.dateReceived + "</td>" +
"<td>" + item.status + "</td>" + "<br>" +
"<td>" + "<span class=\"replaceStatus\">" + calStatus+ "</span>" + "</td>" + "<br>" +
"</tr>"
); */

// $(document).ready(function () {
//   var changeText1 = 'Completed';
//   var changeText2 = 'In review';
//   var changeText3 = 'Approved';

//   $('.replaceStatus').each(function()  {
//     var text = $(this).text();
//     if (text == changeText1) { $(this).text('Shipped Out');}
//     // else if (text == changeText2) { $(this).text('ds');}
//     else if (text == changeText3) { $(this).text('dst');}
//     // else if (text == changeText2) { $(this).html("<img src=static/img/cross.jpg width=\"20px\" height=\"20px\"><img>"); }
//     // else if (text == changeText3) { $(this).html("<img src=static/img/cross.jpg width=\"20px\" height=\"20px\"><img>"); }
//   });
// }); 


