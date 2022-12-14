import {
  useNavigate,
  useParams,
} from "react-router-dom";
import PropTypes from "prop-types";
import apiService from "../services/api.service";
import RegisterForm from "./RegisterForm";

export default function Profile() {
  const params = useParams();
  const destination = useNavigate();

  const handleDeleteSubmit = async () => {
    if (params.id) {
      await apiService.deleteUser(params.id);
      destination("/");
    }
  };

  return (
    <>
      <RegisterForm onSubmit={handleDeleteSubmit}></RegisterForm>
    </>
  );
}

Profile.propTypes = {
  user: PropTypes.object,
};
