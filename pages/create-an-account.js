import SignupForm from '../components/SignupForm';
import FormSide from '../components/FormSide';
import styles from '../css/login.module.css';

export default function CreateAnAccount() {
  return (
    <div className="flex">
      <FormSide
        title="Welcome to Code Circle"
        paragraph1="Are you looking for a programming partner to collaborate with on your personal projects? Look no further! Code Circle is the perfect platform for finding like-minded individuals who share your passion for coding."
        paragraph2="Our community is filled with talented programmers who are eager to work together and build something great. With Code Circle, you can easily connect with other developers, discuss project ideas, and find a programming partner that suits your needs."
        paragraph3="So why wait? Sign up today and start building your dream project with a partner who shares your vision. We can't wait to see what you create!"
      />
      <SignupForm />
    </div>
  );
}
