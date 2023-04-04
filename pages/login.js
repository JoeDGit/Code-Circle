import FormSide from '../components/FormSide';
import LoginForm from '../components/LoginForm';
import styles from '../css/login.module.css';

export default function Login() {
  return (
    <div className="flex">
      <FormSide
        title="Welcome Back to Code Circle"
        paragraph1="As a member of our community, you have access to a diverse range of talented programmers and exciting personal projects. Whether you're looking for a programming partner, seeking feedback on your code, or simply want to connect with like-minded individuals, Code Circle is the perfect platform for you."
        paragraph2="We're constantly working to improve our website and enhance your experience, so be sure to let us know if you have any feedback or suggestions. And remember, your privacy and security are our top priorities, so you can rest assured that your data is safe with us."
        paragraph3="Thank you for being a part of our community, and happy coding!"
      />
      <LoginForm />
    </div>
  );
}
