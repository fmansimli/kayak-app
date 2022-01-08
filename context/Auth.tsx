import React, { useContext, useState, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Text, View } from "react-native";

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

  const logout = () => {
    GoogleSignin.signOut();
    return auth().signOut();
  };

  if (initializing) return null;

  // if (!user) {
  //   return (
  //     <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
  //       <Text>Login.......</Text>
  //     </View>
  //   );
  // }

  return (
    <AuthContext.Provider
      value={{ user: user, logout, signIn, signUp, signInWithGoogle }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
