import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Modal, ModalContext, UserSetsModal } from 'components';

const SharedLayout = () => {
  const { isOpenModal, toggleModal } = useContext(ModalContext);
  return (
    <div>
      <Header />
      {/* example open modal can be deleted */}
      <div>
        <button
          style={{ outline: '1px solid red', padding: '15px 20px' }}
          type="button"
          onClick={toggleModal}
        >
          Open Modal
        </button>
        {isOpenModal && (
          <Modal pd={60}>
            <UserSetsModal />
          </Modal>
        )}
      </div>
      {/* end example */}
      <Outlet />
    </div>
  );
};

export default SharedLayout;
