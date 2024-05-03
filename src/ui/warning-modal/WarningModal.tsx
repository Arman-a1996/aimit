import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Modal, Row } from 'antd';
import clsx from 'clsx';
import { changeLoading as changeLoadingModal, closeModal, drawerClose } from 'store/modal-slice/modals';
import { selectModals } from 'store/modal-slice/selector';

import CloseIcon from 'components/svgs/CloseIcon';

import styles from './WarningModal.module.scss';

const WarningModal = () => {
  const {
    title,
    content,
    opened,
    onOk,
    onCancel,
    cancelText = 'Close',
    okText = 'Save',
    cancelButtonVariant = 'outlined',
    okButtonVariant = 'modalPrimary',
    isReceive = false,
    showOk = true,
    showCancel = true,
    isLoading = false,
    maskClosable = true,
    currentClass = '',
  } = useSelector(selectModals);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
    dispatch(drawerClose({ isDrawerClosed: false }));
  };

  useEffect(() => {
    if (!opened) {
      // dispatch(changeLoading(false));
      dispatch(changeLoadingModal(false));
    }
  }, [opened]);

  return (
    <>
      <Modal
        zIndex={999999}
        className={clsx(styles.modalDialog, {
          [styles.withTitle]: title === 'Actions',
          [styles[currentClass]]: currentClass,
        })}
        title={title}
        closeIcon={<CloseIcon />}
        open={opened}
        onOk={onCancel}
        destroyOnClose
        onCancel={handleCloseModal}
        footer={false}
        maskClosable={maskClosable}
      >
        {!isReceive && (
          <>
            <Row justify="start">
              <Col>
                <p className={styles.warningModalContent}>{content}</p>
              </Col>
            </Row>
            <Row gutter={5} justify="end">
              {showCancel && (
                <Col>
                  <Button
                    htmlType="button"
                    size="large"
                    // onClick={onCancel}
                    loading={isLoading}
                    onClick={() => {
                      if (!isLoading) {
                        onCancel();
                      }
                    }}
                  >
                    {cancelText}
                  </Button>
                </Col>
              )}
              {showOk && (
                <Col>
                  <Button
                    htmlType="button"
                    loading={isLoading}
                    size="large"
                    onClick={() => {
                      if (!isLoading) {
                        onOk();
                      }
                    }}
                  >
                    {okText}
                  </Button>
                </Col>
              )}
            </Row>
          </>
        )}
      </Modal>
    </>
  );
};

export default WarningModal;
