export type modalState = {
    isOpen: boolean,
}

export type modalTypeState = {
    type: "login" | "register" | "forgotPassword"
}

export type authModalState = modalState & modalTypeState;