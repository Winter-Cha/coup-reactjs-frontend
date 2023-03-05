import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

const GoogleLoginButton = () => {
  return (
    <GoogleOAuthProvider clientId='1020336237076-038a3b00nth32pp49266f31sm4a5qfr6.apps.googleusercontent.com'>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log("onSuccess :: ", credentialResponse);
        }}
        onError={() => {
          console.log("onError :: ", 'Login Failed');
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
