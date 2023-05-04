import axios from "axios";
import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";

type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  _id?: string;
  url: string;
};

const DeleteModal: React.FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
  _id,
  url,
}) => {
  if (!isOpen) {
    return null;
  }
  const { getAccessTokenSilently } = useAuth0();
  const handleDelete = async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      axios
        .post(
          `http://localhost:5001/${url}`,
          {
            _id: _id,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      onClose();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal basic open={isOpen} size="fullscreen">
      <Header icon>
        <Icon name="archive" />
        {title}
      </Header>
      <Modal.Actions>
        <Button basic color="red" inverted onClick={onClose}>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" inverted onClick={handleDelete}>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteModal;
