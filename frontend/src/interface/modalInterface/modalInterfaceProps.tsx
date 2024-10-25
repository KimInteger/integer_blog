export default interface ModalProps {
  onClose: () => void;
  onLogin: (password: number) => boolean;
}