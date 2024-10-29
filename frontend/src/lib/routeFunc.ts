import { useNavigate } from 'react-router-dom';

const routePush = (stage: string): (() => void) => {
  const navigate = useNavigate();

  return () => {
    navigate(stage);
  };
};

export default routePush;