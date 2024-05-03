import { createSlice } from '@reduxjs/toolkit';

import { IWarningModal } from './interfaces';

export const initialState: IWarningModal = {
  opened: false,
  title: '',
  content: '',
  cancelText: '',
  okText: '',
  isLoading: false,
  onOk: () => undefined,
  onCancel: () => undefined,
  isDrawerClosed: false,
  isDrawerSaved: false,
  cancelButtonVariant: undefined,
  okButtonVariant: undefined,
  isReceive: false,
  loadIds: [],
  showOk: true,
  showCancel: true,
  maskClosable: true,
  currentClass: '',
};

export const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal: (
      state,
      {
        payload: {
          title,
          content,
          onOk,
          onCancel,
          cancelText,
          okText,
          cancelButtonVariant,
          okButtonVariant,
          isReceive,
          showOk,
          showCancel,
          maskClosable,
          currentClass,
        },
      }
    ) => {
      state.opened = true;
      state.title = title;
      state.content = content;
      state.onOk = onOk;
      state.onCancel = onCancel;
      state.cancelText = cancelText;
      state.okText = okText;
      state.cancelButtonVariant = cancelButtonVariant;
      state.okButtonVariant = okButtonVariant;
      state.isReceive = isReceive;
      state.showOk = showOk;
      state.showCancel = showCancel;
      state.maskClosable = maskClosable;
      state.currentClass = currentClass;
    },
    changeLoading: (state, { payload: isLoading }) => {
      state.isLoading = isLoading;
    },
    closeModal: state => {
      state.opened = false;
    },
    drawerClose: (state, { payload: { isDrawerClosed } }) => {
      state.isDrawerClosed = isDrawerClosed;
    },
    drawerSave: (state, { payload: { isDrawerSaved } }) => {
      state.isDrawerSaved = isDrawerSaved;
    },
    setLoadIds: (state, { payload }) => {
      state.loadIds = payload;
    },
  },
});

export const { openModal, closeModal, drawerClose, drawerSave, setLoadIds, changeLoading } = modalSlice.actions;

export default modalSlice.reducer;
