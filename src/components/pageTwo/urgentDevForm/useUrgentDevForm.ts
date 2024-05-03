import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { formatPhone } from '../../../utils/formaters';

import { defaultValues, validation } from './constants';

const useUrgentDevForm = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isDirty, errors },
    getValues,
    setValue,
    watch,
    reset,
    clearErrors,
    setError,
    trigger,
    resetField,
  } = useForm<any>({
    defaultValues,
    mode: 'all',
    resolver: yupResolver(validation),
  });

  const onInputBlur = ({ target: { name } }: any) => {
    trigger(name);
  };

  const onInputChange = ({ target: { name, value } }: any) => {
    setValue(name, name === 'phone' ? formatPhone(value) : value, { shouldValidate: true });
  };

  const onSubmit = handleSubmit(data => {
    console.log(data, 'data');
  });

  return {
    onInputChange,
    onInputBlur,
    errors,
    watch,
    onSubmit,
  };
};

export default useUrgentDevForm;
