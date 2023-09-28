export type Users = Array<UserData>;

export type UserData = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (arg0: boolean) => void;
  data: UserData;
};
