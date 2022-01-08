import React, { useContext, useState, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from "@react-native-firebase/auth";
import { loginAsync, registerAsync } from "../services/auth";
import { Text, View } from "react-native";

interface authContext {
  auth: authState;
  signIn: (email: string, password: string, cb: Function) => void;
  signUp: (email: string, password: string, cb: Function) => void;
  logout: () => void;
}
interface authState {
  isLogin: boolean;
  isLoading: boolean;
  idToken?: string;
  refreshToken?: string;
  email?: string;
  localId?: string;
  expiresIn?: number;
}
const defaultContext: authContext = {
  auth: { isLoading: true, isLogin: false },
  logout: () => {},
  signIn: () => {},
  signUp: () => {},
};
const AuthContext = createContext<authContext>(defaultContext);

const AuthProvider = (props: any) => {
  const [state, setState] = useState<authState>(defaultContext.auth);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    // (async () => {
    //   try {
    //     const token = await AsyncStorage.getItem("idToken");
    //     if (token) {
    //       setState({ isLoading: false, isLogin: true, idToken: token });
    //     } else {
    //       throw new Error("no token!");
    //     }
    //   } catch (error) {
    //     setState((data) => ({ ...data, isLoading: false }));
    //   }
    // })();

    return subscriber;
  }, []);

  const signIn = async (email: string, password: string, cb: Function) => {
    try {
      const resp = await loginAsync(email, password);
      if (!resp.ok) {
        const { code, message } = await resp.json();
        throw { code, message };
      }
      const data = await resp.json();
      setState({
        isLoading: false,
        isLogin: true,
        email: data.email,
        idToken: data.idToken,
        refreshToken: data.refreshToken,
        localId: data.localId,
        expiresIn: data.expiresIn,
      });
      await AsyncStorage.setItem("idToken", data.idToken);
      cb();
    } catch (error: any) {
      let readableMessage;
      switch (error.message) {
        default:
          readableMessage = "something went wrong. Please try again";
      }
      cb(readableMessage);
    }
  };
  const signUp = async (email: string, password: string, cb: Function) => {
    try {
      const resp = await registerAsync(email, password);
      if (!resp.ok) {
        const {
          error: { code, message },
        } = await resp.json();
        throw { code, message };
      }
      const data = await resp.json();
      setState({
        isLoading: false,
        isLogin: true,
        email: data.email,
        idToken: data.idToken,
        refreshToken: data.refreshToken,
        localId: data.localId,
        expiresIn: data.expiresIn,
      });
      await AsyncStorage.setItem("idToken", data.idToken);
      cb();
    } catch (error: any) {
      let readableMessage = "something went wrong. Please try again";
      switch (error.message) {
        case "EMAIL_EXISTS":
          readableMessage = "this email is already in use!";
      }
      cb(readableMessage);
    }
  };
  const logout = async () => {
    try {
      setState({ isLoading: false, isLogin: false });
      await AsyncStorage.removeItem("idToken");
    } catch (error) {
      console.error(error);
    }
  };

  if (initializing) return null;

  if (!user) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Login.......</Text>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={{ auth: state, logout, signIn, signUp }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
