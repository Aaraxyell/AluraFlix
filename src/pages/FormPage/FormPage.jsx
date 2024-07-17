import NavBar from "../../components/NavBar/NavBar";
import VideoForm from '../../components/VideoForm/VideoForm';
import './FormPage.css';

const FormPage = () => {
  return (
    <div className="form-page">
      <NavBar />
      <div style={{ marginTop: '100px' }}>
        <VideoForm />
      </div>
    </div>
  );
};

export default FormPage;
