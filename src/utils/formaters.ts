export const formatPhone = (phone: string) => {
  if (!phone) return phone;
  const value = onlyNumbersFormatter(phone);
  const formatedPhone = value.replace(/[^\d]/g, '');
  const phoneLenght = formatedPhone.length;
  if (phoneLenght < 4) return formatedPhone;
  if (phoneLenght < 7) {
    return `${formatedPhone.slice(0, 3)}-${formatedPhone.slice(3)}`;
  }
  return `${formatedPhone.slice(0, 3)}-${formatedPhone.slice(3, 6)}-${formatedPhone.slice(6)}`;
};

export const onlyNumbersFormatter = (value: any) => value?.replace(/[-\s]/g, '').replace(/\D/g, '');
