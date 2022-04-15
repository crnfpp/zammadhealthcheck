// Example answer
// {"healthy":true,"message":"success","issues":[],"token":"++++++++++++++++"}
function healthCheck() {
  var url ="YOUR_ZAMMAD_URL_HERE/api/v1/monitoring/health_check?token=+++++++++++++++++++++++++++";
  var response = UrlFetchApp.fetch(url);
  var status = JSON.parse(response);
  Logger.log (status["healthy"]);
  if (status["healthy"]==false) {
    MailApp.sendEmail({
      to: "ADMIN_MAIL_HERE@example",
      subject: "WARNING - Zammad Health Status Alert",
      htmlBody: "Issues detected on Zammad: <br><strong>Message: </strong>" + status["message"] +"<br><strong>Issue: </strong>"+ status["issues"] ,
    });
  }
}
