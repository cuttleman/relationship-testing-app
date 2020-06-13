export const getMobileOS = () => {
  const varUA = navigator.userAgent.toLowerCase();
  const smsLink = document.getElementById("sms-link-btn");
  if (varUA.indexOf("android") > -1) {
    smsLink.href = "sms:?body=https://cocky-yalow-588613.netlify.app/";
  } else if (
    varUA.indexOf("iphone") > -1 ||
    varUA.indexOf("ipad") > -1 ||
    varUA.indexOf("ipod") > -1
  ) {
    smsLink.href = "sms:&body=https://cocky-yalow-588613.netlify.app/";
  } else {
    return;
  }
};
