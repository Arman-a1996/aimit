import React from 'react';
import { Divider } from 'antd';
import clsx from 'clsx';
import { useHandleCopyActive } from 'hooks/useCopy';

import CopyIcon from 'components/svgs/CopyIcon';

import { IViewItem } from './constants/types';

import styles from './ViewItemWrapper.module.scss';

const ViewItemWrapper = ({
  title,
  children,
  id,
  className = '',
  required,
  canceledBlock,
  Component,
  copyValue,
}: IViewItem) => {
  const { copiedText, handleCopy } = useHandleCopyActive();

  return (
    <div className={styles.viewItemMainWrapper}>
      <div
        className={clsx(styles.whiteBlock, {
          [styles?.[className]]: className,
          [styles.canceled]: canceledBlock,
        })}
        id={id}
      >
        <div className={styles.headerBlock}>
          <div className={styles.headerWithButtons}>
            {!copyValue ? (
              <p className={styles.blockTitle} children={title} />
            ) : (
              <div
                className={clsx(styles.copyIconText, {
                  [styles.copyActive]: copiedText === 'loadNumber',
                })}
              >
                <p
                  className={styles.blockTitle}
                  children={
                    <>
                      {title}
                      <span>{copyValue}</span>
                    </>
                  }
                />

                <div
                  className={styles.copyIcon}
                  role="button"
                  onClick={() => handleCopy(String(copyValue), 'loadNumber')}
                >
                  <CopyIcon active={copiedText === 'loadNumber'} />
                </div>
              </div>
            )}
            <div className={styles.buttonsGroup}>{Component}</div>
          </div>
          <Divider className={styles.divider} />
        </div>
        <div className={styles.whiteBlockBody}>{children}</div>
      </div>
    </div>
  );
};

export default ViewItemWrapper;
