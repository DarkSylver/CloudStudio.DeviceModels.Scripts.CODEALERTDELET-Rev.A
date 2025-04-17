function getConfiguration(config)
{
  // This function allows you to indicate general configuration values
  // for all devices of this model.

  // Depending on the meaning of the "device address" in this device, 
  // you may want to change the label that is used to refer to the 
  // address in the user interface.
  // For instance, if the address of the device is actually a MAC 
  // address, you may want to use the code below.
  
  // config.addressLabel = {en: "MAC address", es: "Dirección MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
  // This function allows you to indicate the initial endpoint configuration
  // when a device is created using this model. This improves end-user 
  // experience significantly, because it allows the platform to create
  // all endpoints included in the device automatically when the device
  // is created.

  // In the code below, two endpoints are created. The first is a
  // temperature sensor, while the second one is a carbon dioxide sensor.

  // endpoints.addEndpoint("1", "Temperature sensor", endpointType.temperatureSensor);
  // endpoints.addEndpoint("2", "CO2 sensor", endpointType.ppmConcentrationSensor, ppmConcentrationSensorSubType.carbonDioxide);
  var endpointAlerta20 = endpoints.addEndpoint("2", "ALERT", endpointType.iasSensor, iasEndpointSubType.alarmInput);
    var alert = endpointAlerta20.addAlert();
    alert.variableTypeId = variableType.discreteSensorState;
    alert.conditionType = conditionType.equal; 
    alert.threshold = 2; 
    alert.normalConditionType = conditionType.notEqual;
    alert.normalThreshold = 2;
    alert.severity = alarmSeverity.medium;
    alert.notificationEmails = ['martin.lauria@cloud.studio'];
    alert.emailTemplates = {
        channelType: 1,
        closeSubjectTemplate: "TEST PARA ERWIN {DEVICE_ID} {FACILITY_NAME} {ENDPOINT_ID} QA CERRADA  ",
        closeTemplate: "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n \r\n<head>\r\n  <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\r\n  <title>Cloud Studio - alarm closed notification</title>\r\n  <style media=\"screen\" type=\"text/css\">\r\n\r\nbody {\r\n\tmargin: 0; padding: 0; min-width: 100%!important;\r\n}\r\n\r\nimg {\r\n\theight: auto;\r\n}\r\n.content {\r\n\twidth: 100%; \r\n\tmax-width: 600px;\r\n\tmargin-left:auto; \r\n\tmargin-right:auto;\r\n}\r\n.header {\r\n\tpadding: 20px;\r\n}\r\n.message {\r\n\tpadding: 20px;\r\n\tpadding-bottom: 0;\r\n}\r\n.subhead {\r\n\tfont-size: 15px; color: #ffffff; font-family: sans-serif; letter-spacing: 10px;\r\n}\r\n.h1, .h2, .bodycopy {\r\n\tcolor: #000000; font-family: sans-serif;\r\n}\r\n.h1 {\r\n\tfont-size: 28px; line-height: 38px; font-weight: bold; text-align: center;\r\n}\r\n.h2 {\r\n\tpadding: 0 0 15px 0; font-size: 24px; line-height: 28px; font-weight: bold;\r\n}\r\n.bodycopy {\r\n\tfont-size: 14px; line-height: 22px;\r\n}\r\n.button {\r\n\ttext-align: center; font-size: 18px; font-family: sans-serif; font-weight: bold; padding: 0 30px 0 30px;\r\n}\r\n.button a {\r\n\tcolor: #ffffff; text-decoration: none;\r\n}\r\n.footer {\r\n\tpadding: 10px 20px 10px 20px; \r\n}\r\n.footer tr td {\r\n\tpadding-top: 10px;\r\n}\r\n.footer tr td.bodycopy {\r\n\tpadding-top: 0;\r\n\tpadding-bottom: 20px;\r\n\tborder-bottom: 1px solid #f2eeed;\r\n}\r\n.footermessage {\r\n\tfont-family: sans-serif; font-size: 12px; color: grey; padding-left: 20px;\r\n}\r\n.footermessage a {\r\n\tcolor: #000000; text-decoration: underline;\r\n}\r\n\r\n</style>\r\n\r\n</head>\r\n\r\n<body>\r\n\t<table width=\"100%\">\r\n\t<tr>\r\n\t\t<td>\r\n\t\t\t<table class=\"content\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"message\">\r\n\t\t\t\t\t\t<table class=\"col380\" align=\"left\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width: 100%\">  \r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"bodycopy\">                      \r\n\t\t\t\t\t\t\t\t\t\t\t\tThis e-mail is to let you know that an alarm of type \"<strong>{ALARM_TEXT}</strong>\" has been closed for device \"<strong>{DEVICE_OR_ENDPOINT_NAME}</strong>\".\r\n\t\t\t\t\t\t\t\t\t\t\t\t<br><br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"display:{ALARM_DETAILS_DISPLAY}\"><strong>Details</strong>: {ALARM_DETAILS}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>     \t\t\t\t  \r\n\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>      \t \r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"footer\">\r\n\t\t\t\t\t\t<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r\n\t<tr>\r\n\t\t<td class=\"bodycopy\" colspan=\"2\">\r\n\t\t\tBest regards,<br/>\r\n\t\t\tCloud Studio's team\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td>\r\n\t\t\t<img src=\"https://gear-dev.cloud.studio/filedata/notificationtemplates/assets/images/header_logo.png\" width=\"105\" alt=\"logo\">\r\n\t\t</td>\r\n\t\t<td align=\"left\" class=\"footermessage\">\r\n\t\t\tDo you need help? Send your questions to: <a href=\"mailto:support@cloud.studio\">support@cloud.studio</a> or check the online or app help.<br/>Please do not reply to this message.\r\n\t\t</td>\r\n\t</tr>  \r\n</table>\r\n\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</td>\r\n\t</tr>\r\n\t</table>\r\n</body>\r\n</html>",
        description: "Email notification",
        openSubjectTemplate: "TESTS PARA MARTIN LAURIA  {ALARM_TEXT} {ALARM_DETAILS} {ALARM_DETAILS_DISPLAY} TINOS ALARMA",
        openTemplate: "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n \r\n<head>\r\n  <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\r\n  <title>Cloud Studio - alarm notification</title>\r\n  <style media=\"screen\" type=\"text/css\">\r\n\r\nbody {\r\n\tmargin: 0; padding: 0; min-width: 100%!important;\r\n}\r\n\r\nimg {\r\n\theight: auto;\r\n}\r\n.content {\r\n\twidth: 100%; \r\n\tmax-width: 600px;\r\n\tmargin-left:auto; \r\n\tmargin-right:auto;\r\n}\r\n.header {\r\n\tpadding: 20px;\r\n}\r\n.message {\r\n\tpadding: 20px;\r\n\tpadding-bottom: 0;\r\n}\r\n.subhead {\r\n\tfont-size: 15px; color: #ffffff; font-family: sans-serif; letter-spacing: 10px;\r\n}\r\n.h1, .h2, .bodycopy {\r\n\tcolor: #000000; font-family: sans-serif;\r\n}\r\n.h1 {\r\n\tfont-size: 28px; line-height: 38px; font-weight: bold; text-align: center;\r\n}\r\n.h2 {\r\n\tpadding: 0 0 15px 0; font-size: 24px; line-height: 28px; font-weight: bold;\r\n}\r\n.bodycopy {\r\n\tfont-size: 14px; line-height: 22px;\r\n}\r\n.button {\r\n\ttext-align: center; font-size: 18px; font-family: sans-serif; font-weight: bold; padding: 0 30px 0 30px;\r\n}\r\n.button a {\r\n\tcolor: #ffffff; text-decoration: none;\r\n}\r\n.footer {\r\n\tpadding: 10px 20px 10px 20px; \r\n}\r\n.footer tr td {\r\n\tpadding-top: 10px;\r\n}\r\n.footer tr td.bodycopy {\r\n\tpadding-top: 0;\r\n\tpadding-bottom: 20px;\r\n\tborder-bottom: 1px solid #f2eeed;\r\n}\r\n.footermessage {\r\n\tfont-family: sans-serif; font-size: 12px; color: grey; padding-left: 20px;\r\n}\r\n.footermessage a {\r\n\tcolor: #000000; text-decoration: underline;\r\n}\r\n\r\n</style>\r\n\r\n</head>\r\n\r\n<body>\r\n\t<table width=\"100%\">\r\n\t<tr>\r\n\t\t<td>\r\n\t\t\t<table class=\"content\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"message\">\r\n\t\t\t\t\t\t<table class=\"col380\" align=\"left\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width: 100%\">  \r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"bodycopy\">                      \r\n\t\t\t\t\t\t\t\t\t\t\t\tThis e-mail is to let you know that an alarm of type \"<strong>{ALARM_TEXT}</strong>\" was raised by device \"<strong>{DEVICE_OR_ENDPOINT_NAME}</strong>\". You will be notified as soon as this alarm clears.\r\n\t\t\t\t\t\t\t\t\t\t\t\t<br><br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"display:{ALARM_DETAILS_DISPLAY}\"><strong>Details</strong>: {ALARM_DETAILS}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>     \t\t\t\t  \r\n\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>      \t \r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"footer\">\r\n\t\t\t\t\t\t<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r\n\t<tr>\r\n\t\t<td class=\"bodycopy\" colspan=\"2\">\r\n\t\t\tBest regards,<br/>\r\n\t\t\tCloud Studio's team\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td>\r\n\t\t\t<img src=\"https://gear-dev.cloud.studio/filedata/notificationtemplates/assets/images/header_logo.png\" width=\"105\" alt=\"logo\">\r\n\t\t</td>\r\n\t\t<td align=\"left\" class=\"footermessage\">\r\n\t\t\tDo you need help? Send your questions to: <a href=\"mailto:support@cloud.studio\">support@cloud.studio</a> or check the online or app help.<br/>Please do not reply to this message.\r\n\t\t</td>\r\n\t</tr>  \r\n</table>\r\n\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</td>\r\n\t</tr>\r\n\t</table>\r\n</body>\r\n</html>"
    };
}

function validateDeviceAddress(address, result)
{
  // This function allows you to validate the address of a device, when
  // the user is creating it. If your device has special validation rules
  // for the address, you can check them here, and return an error message
  // in case the address format is incorrect.

  // In the code below, a validation is made to ensure that the address 
  // is exactly 10 characters long.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // This function allows you to specify UI rules at the device level.
  // For instance, you can make it possible to enable or disable adding
  // endpoints manually to the device after it was created.
  
  // In the code below, adding endpoints manually is disabled in the
  // user interface. This means that the device will be limited to the 
  // endpoints defined by function getEndpoints() above.
  
  // rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules)
{
  // This function allows you to specify UI rules at the endpoint level.
  // For instance, you can make it possible to delete certain endpoints, 
  // or edit their endpoint subtype, if applicable.

  // In the code below, the following rules are defined:
  // - Endpoints cannot be deleted.
  // - The endpoint subtype can be changed, but only for the second 
  //   endpoint.
  
  // rules.canDelete = false;
  // rules.canEditSubType = (endpoint.address == "2");
}
