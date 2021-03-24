import {
  Background,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
  StyledTextInput,
  StyledLabel,
  AddUserModalButton,
} from "./../components/Styles";

const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <form>
                <div>
                  <StyledLabel>First Name:</StyledLabel>
                  <StyledTextInput
                    type="text"
                    name="firstName"
                    id="first_name"
                    placeholder="First Name"
                    required=""
                    autocomplete="off"
                    aria-required="true"
                  />
                </div>
                <div>
                  <StyledLabel>Last Name:</StyledLabel>
                  <StyledTextInput
                    type="text"
                    name="lastName"
                    id="last_name"
                    placeholder="Last Name"
                    required=""
                    autocomplete="off"
                    aria-required="true"
                  />
                </div>
                <div>
                  <StyledLabel>Email Address:</StyledLabel>
                  <StyledTextInput
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required=""
                    autocomplete="off"
                    aria-required="true"
                  />
                </div>
                <div>
                  <StyledLabel>Avatar Url:</StyledLabel>
                  <StyledTextInput
                    type="text"
                    name="Avatar"
                    id="avatar"
                    placeholder="Avatar Url"
                    required=""
                    autocomplete="off"
                    aria-required="true"
                  />
                </div>
              </form>
            </ModalContent>
            <AddUserModalButton>Add User</AddUserModalButton>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
export default Modal;
