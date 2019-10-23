$.post('fetchData_userform_json.php', function(data) {

    // $("#userData").text("<table>");
  
    $.each(data, function(i, item) {
        $("#userData").append("<tr>" +
                              "<td>" + item.id + "</td>" + 
                              "<td>" + item.status + "</td>" +
                              "<td>" + item.InstrumentDesc+ "</td>" +
                              "<td>" + item.calJob + "</td>" +
                              "<td>" + item.siteCode + "</td>" + "<br>" +
                              "</tr>"
                                
                              
                              );
    });
  
    //  $("#div-my-table").append("</table>");
  });
  
  
  