


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
$.post('sales_by_item.php', function (data) {
    console.log(data);
    var item = [];
    var totalSale = [];
    for(var i in data){
      
      

      item.push(data[i].instrumentDesc);
      totalSale.push(data[i]['ROUND(SUM(calCost),2)']);
      console.log(i);
    }
    
    // console.log(totalSale);
    console.log(item);
    $("#top1_sale").append(item[0] + ": " + "<span class=\"text-success\">$" + totalSale[0] + "</span>");
    $("#top2_sale").append(item[1] + ": " + "<span class=\"text-success\">$" + totalSale[1] + "</span>");
    $("#top3_sale").append(item[2] + ": " + "<span class=\"text-success\">$" + totalSale[2] + "</span>");
    
  });
 


//----------------------Fetch Table Cal Data (Homepage tab) -------------------------- //

$.post('homepage_calRequestForm.php', function(data) {
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

//----------------------Fetch Table Cal Data (Request Status tab) -------------------------- //

$.post('requestForm_table.php', function(data) {
  $.each(data, function(i, item) {
    calStatus = item.status;
    
      $("#formAll").append("<tr id=\"highlight\" data-toggle=\"collapse\" data-target=\".childData\">" +
                            "<td>" + item.id             +"</td>" +
                            "<td>" + item.ein_new             +"</td>" +
                            "<td>" + item.instrumentDesc      +"</td>" +
                            "<td>" + item.dateReceived        +"</td>" +
                            "<td>" + item.siteCode            +"</td>" +
                            "<td class=\"text-success\">" + item.status              +"</td>" +
                            "</tr>" +
                              "<tr>" +
                                "<td colspan=6 class=\"hiddenRow\">" +
                                    "<div class=\"collapse childData ml-5\" style=\"font-size: 13px\">" +
                                      "<div class=\"row\">" +
                                          "<div class=\"col-4\">" + "Calibration Job: " + item.status     + "</div>" +
                                          "<div class=\"col-4\">" + "Owner: "           + item.owner      + "</div>" +
                                          "<div class=\"col-4\">" + "Serial Number: "   + item.serialNum  + "</div>" +
                                      "</div>" +
                                      "<div class=\"row\">" +
                                          "<div class=\"col-4\">" + "Date Received:  "   + item.dateReceived +  "</div>" +
                                          "<div class=\"col-4\">" + "Calibration Cost: " + item.calCost      + "</div>" +
                                          "<div class=\"col-4\">" + "Manufacturer: "     + item.manufacturer + "</div>" +
                                      "</div>" +
                                    "</div>" +
                                "</td>" +
                            "</tr>"
      );
  });
});





// ----------------------Fetch Table Cal Data (ALL)-------------------------- //

// $.post('fetch_calRequest_ALL.php', function(data) {
//   $.each(data, function(i, item) {
//     calStatus = item.status;
    
    
//       $("#table_All").append("<tr>" +
//                             "<td>" + item.id + "</td>" + 
//                             "<td>" + item.ein_new + "</td>" +
//                             "<td>" + item.instrumentDesc+ "</td>" +
//                             "<td>" + item.dateReceived + "</td>" +
//                             "<td>" + item.siteCode + "</td>" +
//                             "<td>" + item.owner + "</td>" +
//                             "<td>" + item.status +  "</td>" +
//                             "<td>" + "Null" +  "</td>" +
//                             "</tr>"
//                             );
//   });
// });

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


