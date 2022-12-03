import { auth, googleAuthProvider } from "../firebase";
import { signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState, createContext, useContext } from "react"

import type { User } from "firebase/auth"
import type { ReactNode } from "react"

const authContext = createContext<ReturnType<typeof useProvideAuth>|null>(null);

export function ProvideAuth({ children }: {children: ReactNode}) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};


function useProvideAuth() {
  const [user, setUser] = useState<null|User|false>(null)

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((res) => {
        setUser(res.user)
        return res.user
      })
  }

  const signInWithEmail = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      setUser(res.user)
      return res.user
    })
  }

  const signUpWithEmail = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      setUser(res.user)
      return res.user
    })
  }

  const signout = () => {
    signOut(auth)
      .then(() => {
        setUser(false)
      })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(false)
      }
    })

    return () => unsubscribe()
  }, [])

  return {
    user,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    signout
  }
}