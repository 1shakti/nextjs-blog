import { authModalState } from "@/types/authModal"
import { atom } from "recoil"


const initialAuthModalState : authModalState = {
    isOpen: false,
    type: "login"
}

export const authModalAtom = atom<authModalState>({
    key: "authModalState",
    default: initialAuthModalState
})