import React, { useEffect } from "react"
import { authModalAtom } from "@/atoms/authModalAtom"
import { useSetRecoilState } from "recoil"

export const useAuthModal = () => {

    const setAuthModalState = useSetRecoilState(authModalAtom);

    const closeModal = (): void => {
        setAuthModalState((prev) => ({...prev, isOpen: false, type:"login"}))
    }

    useEffect(() => {
        const handleEsc = (e:KeyboardEvent) => {
            if(e.key==="Escape"){
                closeModal();
            }
        }

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
        
    },[])

    return closeModal

}