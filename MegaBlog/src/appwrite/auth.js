import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {// single object destucturing(Avoids Parameter Order Dependencies, extract only the properties you need, ), props order doesnot matter(order matters in without destucturing)/extra arguments can be passed in both the methods. 
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions(ID.unique());
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService


// class AuthService {
//     client= new Client()
//     account;

//     constructor(){
//         this.client
//         .setEndpoint(conf.appwriteUrl)
//         .setProject(conf.appwriteProjectId)
//         this.account = new Account(this.client)
//     }

//     async createAccount({name, email, password,}){
//         try {
//           const userAccount = await this.account.create(ID.unique(), email, password, name);
//           if (userAccount) {
//             // call another method
//             return this.login({ email, password });
//           } else {
//             return userAccount;
//           }
//         } catch (error) {
//         //   console.log(`appwrite:createAccount::${error}`);
//           throw error;
//         }
//     }

//     async login({email, password}){
//         try {
//             return await this.account.createEmailSession(email, password);
//         } catch (error) {
//             console.log(`appwrite:login::${error}`)
//         }
//     }


//     async getCurrentUser(){
//         try {
//             await this.account.get()
//         } catch (error) {
//             throw error
//         }
//     }       

//     async logout(){
//         try {
//             await this.account.deleteSessions(ID.unique());
//         } catch (error) {
//             console.log(`appwrite:logout::${error}`)
//         }
//     }
// }

// const authService = new AuthService()

// export default authService

//NOTES
//Destructuring(Avoids Parameter Order Dependencies, extract only the properties you need, props order doesnot matter,order matters in without destucturing/extra arguments can be passed from the object. )
// in destructuring we pass keys(property names) to the fuction, it can be passed as nested parameters, 
// we can mention the object being destructured within or outside of the destructuring function.  