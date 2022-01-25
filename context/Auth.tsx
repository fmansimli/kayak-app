import React, { useContext, useState, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";

GoogleSignin.configure({
  webClientId:
    "677034901661-3nn46158t1df1cvd40upvo32vj4h0v34.apps.googleusercontent.com",
});

// interface authContext {
//   user: any;
//   signIn: (email: string, password: string) => Promise<FirebaseAuthTypes.UserCredential>;
//   signUp: (email: string, password: string) => Promise<FirebaseAuthTypes.UserCredential>;
//   signInWithGoogle: () => Promise<FirebaseAuthTypes.UserCredential>;
//   logout: () => Promise<void>;
// }

const AuthContext = createContext<any>(null);

const AuthProvider = (props: any) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user: any) {
    console.log(user);

    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const signIn = (email: string, password: string) => {
    return auth().signInWithEmailAndPassword(email, password);
  };
  const signUp = (email: string, password: string) => {
    return auth().createUserWithEmailAndPassword(email, password);
  };

  const signInWithGoogle = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  async function signInWithFacebook() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      "public_profile",
      "email",
    ]);

    if (result.isCancelled) {
      throw "User cancelled the login process";
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw "Something went wrong obtaining access token";
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  const logout = () => {
    GoogleSignin.signOut();
    LoginManager.logOut();
    return auth().signOut();
  };

  if (initializing) return null;

  return (
    <AuthContext.Provider
      value={{
        user: user,
        logout,
        signIn,
        signUp,
        signInWithGoogle,
        signInWithFacebook,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
