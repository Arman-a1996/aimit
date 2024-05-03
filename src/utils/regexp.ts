export const loginPasswordPattern =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%/^&*()_+={}\[\]|;:'",.<>?~-])(?!.*\s)(?=.{6,})/;
export const emailPattern =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const phoneRegExp = /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10}(\s*)?/;

export const onlyCharacters = /^[A-Za-z\s"'`]+$/;
export const SSN_REGEXP = /[0-9]{3}-[0-9]{2}-[0-9]{4}/;
export const EIN_REGEXP = /[0-9]{2}-[0-9]{12}/;
