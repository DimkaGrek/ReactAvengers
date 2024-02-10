import React /* , { useContext } */ from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Modal, /* ModalContext, */ UserSetsModal } from 'components';
import { useModal } from 'hooks';

const SharedLayout = () => {
  const [isOpenModal, toggle] = useModal();
  const [isOpenModal2, toggle2] = useModal();
  return (
    <div>
      <Header />
      {/* example open modal can be deleted */}

      <div>
        <button
          style={{ outline: '1px solid red', padding: '15px 20px' }}
          type="button"
          onClick={toggle2}
        >
          Open 2Modal
        </button>
        {isOpenModal2 && (
          <Modal anotherModal={isOpenModal} pd={60} toggleModal={toggle2}>
            <p>say hello</p>
            <div>
              <button
                style={{ outline: '1px solid red', padding: '15px 20px' }}
                type="button"
                onClick={toggle}
              >
                Open 1Modal
              </button>
              {isOpenModal && (
                <Modal pd={60} toggleModal={toggle}>
                  <UserSetsModal />
                </Modal>
              )}
            </div>
          </Modal>
        )}
      </div>

      {/* end example */}
      <Outlet />
    </div>
  );
};

export default SharedLayout;
