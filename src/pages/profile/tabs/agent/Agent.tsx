import { Row } from 'antd';

import styles from './Agent.module.scss';

const Agent = ({}: any) => {
  return (
    <>
      <div className="page-content">
        <div className="filtersWrapper">
          <div className={styles.agentTopBlock}>
            <div className={styles.agentMainFilter}>
              <Row justify="space-between" align="bottom">
                <p>test</p>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Agent;
