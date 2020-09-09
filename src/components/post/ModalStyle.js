import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import { MoreIcon } from '../../styles/commonIcons/SvgIcons';

export default function ModalStyle() {
  const [modalStatus, setModalStatus] = useState(false);

  return (
    <div>
      <MoreIcon
        type="primary"
        onClick={() => setModalStatus(true)}
        width="22"
        height="22"
      />
      <Modal
        title="Vertically centered modal dialog"
        centered
        visible={modalStatus}
        onOk={() => setModalStatus(false)}
        onCancel={() => setModalStatus(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </div>
  );
}
