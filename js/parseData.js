


//   "<tr>" +
// "<td>" + item.id + "</td>" + 
// "<td>" + item.status + "</td>" +
// "<td>" + item.InstrumentDesc+ "</td>" +
// "<td>" + item.calJob + "</td>" +
// "<td>" + item.siteCode + "</td>" + "<br>" +
// "</tr>"

// ----------------------Fetch Calibration 'Volume' Data-------------------------- //
// $.post('fetch_calVolume.php', function(data) {
//     $.each(data, function(i, item) {
//         $("#total_calVolume").append( " " + item['count(id)'] );
//     });  
// });

// ----------------------Fetch Calibration 'Completed' Data-------------------------- //
// $.post('fetch_calCompleted.php', function (data) {
//   $.each(data, function (i, item) {
//     $("#total_calCompleted").append(" " + item['count(status)']);
//   });
// });

// ----------------------Fetch Calibration 'In-Review' Data-------------------------- //
$.post('fetch_calReview.php', function (data) {
  var score= [];
  for(var i in data) {
    score.push(data[i]['count(status)']);
  }
  
  var numbers = score.map(Number);
  console.log(numbers);
  //Complete, Approved,  Reviewing
  $("#total_calCompleted").append(" " + score[0]);
  $("#total_calApproved").append(" " + score[1]);
  $("#total_calReviewing").append(" " + score[2]);




});

// ----------------------Fetch Calibration 'Cost' Data-------------------------- //
$.post('fetch_calCost.php', function (data) {
  $.each(data, function (i, item) {
    $("#total_calCost").append(" " + item['ROUND(SUM(calCost), 2)']);
  });
});

// ----------------------Top Cost Savings by Item Data-------------------------- //
$.post('topsales_by_item.php', function (data) {
    // console.log(data);
    var item = [];
    var totalSale = [];
    for(var i in data){
      
      

      item.push(data[i].instrumentDesc);
      totalSale.push(data[i]['ROUND(SUM(calCost),2)']);
      // console.log(i);
    }
    
    // console.log(totalSale);
    // console.log(item);
    $("#top1_sale").append("#1 " + item[0] + ": " + "<br>" + "<span class=\"text-success pl-4\">USD " + totalSale[0] + "</span>");
    $("#top2_sale").append("#2 " + item[1] + ": " + "<br>" + "<span class=\"text-success pl-4\">USD " + totalSale[1] + "</span>");
    $("#top3_sale").append("#3 " + item[2] + ": " + "<br>" + "<span class=\"text-success pl-4\">USD " + totalSale[2] + "</span>");
    
  });
 
 // ----------------------Top Requestor Data-------------------------- //
$.post('toprequestors.php', function (data) {
  // console.log(data);
  var item = [];
  var totalOwner = [];
  for(var i in data){
    
    

    item.push(data[i].owner);
    totalOwner.push(data[i]['count(owner)']);
    // console.log(i);
  }
  
  // console.log(totalSale);
  // console.log(item);
  $("#top1_owner").append("#1 " + item[0] + ": " + "<br>" + "<span class=\"text-success pl-4\">" + totalOwner[0] + " requests</span>");
  $("#top2_owner").append("#2 " + item[1] + ": " + "<br>" + "<span class=\"text-success pl-4\">" + totalOwner[1] + " requests</span>");
  $("#top3_owner").append("#3 " + item[2] + ": " + "<br>" + "<span class=\"text-success pl-4\">" + totalOwner[2] + " requests</span>");
  
}); 


//----------------------Fetch Table Cal Data (Homepage tab) -------------------------- //

$.post('homepage_calRequestForm.php', function(data) {
  $.each(data, function(i, item) {
    calStatus = item.status;
    
      $("#table1").append("<tr>" +
                            "<td>" + item.id + "</td>" + 
                            "<td>" + item.ein_number + "</td>" +
                            "<td>" + item.instrumentDesc+ "</td>" +
                            "<td>" + item.dateReceived + "</td>" +
                            "<td>" + "<span class=\"statusColor\" style=\" font-style: italic;\">" +  item.status + "</span>" + "</td>" +
                            "</tr>"
                            );
  });
});

//----------------------Top Reuqestor (Analytic tab) -------------------------- //

$.post('analytics_php/row3_c2.php', function(data) {
  
  $.each(data, function(i, item) {
    
    console.log(item['count(owner)']);
      $("#tableContent").append("<tr>" +
                                "<td>" + (i+1) + "</td>" + 
                                "<td>" + item.owner + "</td>" +
                                "<td>" + item['count(owner)'] + "</td>" +
                                "</tr>"
                            );
  });
});

$.post('analytics_php/row3_c3.php', function(data) {
  
  $.each(data, function(i, item) {
    
    console.log(item['count(owner)']);
      $("#tableContent2").append("<tr>" +
                                "<td>" + (i+1) + "</td>" + 
                                "<td>" + item.instrumentDesc + "</td>" +
                                "<td>" + item['count(instrumentDesc)'] + "</td>" +
                                "</tr>"
                            );
  });
});

// $(document).ready(function () {
//   if ($('statusColor').text() === 'Completed') {  
//     $('statusColor').css({"background-color":"green"}); 
//   } 
//   if ($('statusColor').text() === 'Approved') { 
//     $('.statusColor').css({"background-color":"blue"});
//   }
// });

// $(document).ready(function() {

//   var changeText1 = 'Completed';
//   var changeText2 = 'Approved';

//   $('statusColor').each(function() {
//       var text = $(this).text();
//       if (text == changeText1) {
//           console.log("complete@#$%d");
//           $(this).css({"color":"green"});
//       } else if (text == changeText2) {
//         console.log("approved@@EW");
//           $(this).css({"color":"yellow"});
//       }
//   });
// })


//----------------------Fetch Table Cal Data (Request Status tab) -------------------------- //

$.post('requestForm_table.php', function(data) {
  $.each(data, function(i, item) {
    //calStatus = item.status;
    
    $("#formAll").append("<tr id=\"highlight\" data-toggle=\"collapse\" data-target=\".childData"+i+"\">" +
                            "<td class=\"text-center\">" + item.id             +"</td>" +
                            "<td class=\"text-center\">" + item.ein_number           +"</td>" +
                            "<td class=\"pl-4\">" + item.instrumentDesc      +"</td>" +
                            "<td class=\"text-center\">" + item.dateReceived        +"</td>" +
                            "<td class=\"text-center\">" + item.siteCode            +"</td>" +
                            "<td class=\"text-success text-center\">" + "<span class=\"statusColor\" style=\" font-style: italic;\">" + item.status + "</span>" + "</td>" +
                            "</tr>" +
                              "<tr>" +
                                "<td colspan=6 class=\"hiddenRow\">" +
                                    "<div class=\"collapse childData"+ i + " ml-5\" style=\"font-size: 13px\">" +
                                      "<div class=\"row\">" +
                                          "<div class=\"col-4\">" + "Calibration Job: " + "<span class=\"text-success\">" + item.status  + "</span>"   + "</div>" +
                                          "<div class=\"col-4\">" + "Date Received: "           + item.dateReceived   + "</div>" +
                                          "<div class=\"col-4\">" + "Serial Number: "   + item.serialNum      + "</div>" +
                                      "</div>" +
                                      "<div class=\"row\">" +
                                          "<div class=\"col-4\">" + "Owner: "   + item.owner +  "</div>" +
                                          "<div class=\"col-4\">" + "Date Completed: " + item.dateCompleted      + "</div>" +
                                          "<div class=\"col-4\">" + "Manufacturer: "     + item.manufacturer + "</div>" +
                                      "</div>" +
                                    "</div>" +
                                "</td>" +
                            "</tr>"
      );
  });
});





// ----------------------Status Replace Color *Works on Edge only* -------------------------- //


$(document).ready(function () {
  var changeText1 = 'In Reviewing';
  var changeText2 = 'Completed';
  var changeText3 = 'Approved';

  $('.statusColor').each(function()  {
    var text = $(this).text();
    // if (text == changeText1) { $(this).css({"color":"green"});}
    if (text == changeText1) { $(this).html("<button type=\"button\" class=\"btn btn-info btn-xs\">In Reviewing</button>");}
    // else if (text == changeText2) { $(this).text('ds');}
    // else if (text == changeText3) {  $(this).css({"color":"blue"});}
    else if (text == changeText2) { $(this).html("<button type=\"button\" class=\"btn btn-success btn-xs\">Completed</button>");}
    else if (text == changeText3) { $(this).html("<button type=\"button\" class=\"btn btn-warning btn-xs\">Approved</button>");}
    // else if (text == changeText2) { $(this).html("<img><img>"); }
  });
}); 
 

