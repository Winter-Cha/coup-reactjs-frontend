import { User } from "@/models/User";
import { useAppDispatch, useAppSelector } from "@/redux";
import { closeDialog } from "@/redux/slices/globalSlice";
import { GoogleLogin, GoogleLoginProps } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const GoogleLoginButton = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector<User>((state) => state.user);
  return (
    <GoogleOAuthProvider clientId="1020336237076-038a3b00nth32pp49266f31sm4a5qfr6.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          if (credentialResponse.credential) {
            const decoded: any = jwt_decode(credentialResponse.credential);
            console.log(decoded);
            dispatch({
              type: "user/setUser",
              payload: {
                id: decoded.sub,
                name: decoded.name,
                email: decoded.email,
                picture: decoded.picture,
              },
            });
            dispatch(closeDialog());
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
          /*
            aud:"1020336237076-038a3b00nth32pp49266f31sm4a5qfr6.apps.googleusercontent.com"
            azp:"1020336237076-038a3b00nth32pp49266f31sm4a5qfr6.apps.googleusercontent.com"
            email:"diskdooencl@gmail.com"
            email_verified:true
            exp:1686644679
            family_name:"winter"
            given_name:"Cha"
            iat:1686641079
            iss:"https://accounts.google.com"
            jti:"8f716ebdc99165f6fd76b3bd31cc4b58977eb142"
            name:"Cha winter"
            nbf:1686640779
            picture:"https://lh3.googleusercontent.com/a/AAcHTtdYR6n6X03XekT4zp-epRqLHCvjf-6nU6TyZeTwPQ=s96-c"
            sub:"108181304063986103622"
            */
        }}
        onError={() => {
          console.log("onError :: ", "Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
function useGoogleSucsses() {
  throw new Error("Function not implemented.");
}
