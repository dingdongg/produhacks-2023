import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useState, useEffect } from "react";

const auth = getAuth();

export default function useAuth() {
    const [user, setUser] = useState<User>(null);

    useEffect(() => {
        const unsubFromAuthStateChanges = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return unsubFromAuthStateChanges;
    }, []);

    return { user };
}
