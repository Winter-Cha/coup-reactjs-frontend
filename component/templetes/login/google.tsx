import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const GoogleLoginButton = () => {
  return (
    <GoogleOAuthProvider clientId="1020336237076-038a3b00nth32pp49266f31sm4a5qfr6.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          if (credentialResponse.credential) {
            var decoded = jwt_decode(credentialResponse.credential);
            console.log(decoded);
          }

          //   let data = {
          //     "code" :credentialResponse.credential,
          //     "client_id" :"1020336237076-038a3b00nth32pp49266f31sm4a5qfr6.apps.googleusercontent.com",
          //     "client_secret" :"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",
          //     "redirect_uri" :"http://localhost:3000",
          //     "grant_type":"authorization_code"
          // }
          //   const response = await axios.post('https://oauth2.googleapis.com/token ', data);
          //   console.log(response);
        }}
        onError={() => {
          console.log("onError :: ", "Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
