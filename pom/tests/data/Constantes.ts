import dotenv from 'dotenv'
dotenv.config()

export const URL = {
    SAUCEDEMOURL: process.env.SAUCEDEMOURL as string,
}

export const CREDENTIALS = {
    SAUCEDMOUSER: process.env.SAUCEDMOUSER as string,
    SAUCEDMOPASSWORD: process.env.SAUCEDMOPASSWORD as string,
}