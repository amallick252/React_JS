import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf.js";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.apperiteURL)
            .setProject(conf.apperiteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            await this.databases.createDocument(
                conf.apperiteDatabaseId,
                conf.apperiteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updatePost(slug,{title, content, featuredImage,status}){// user id will be directly provided from post
        try {
            return await this.databases.updateDocument(
                conf.apperiteDatabaseId,
                conf.apperiteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);   
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.apperiteDatabaseId,
                conf.apperiteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.apperiteDatabaseId,
                conf.apperiteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status","active" )]){
        try {
            return await this.databases.listDocuments(
                conf.apperiteDatabaseId,
                conf.apperiteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false 
        }
    }

    //File upload services

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.apperiteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false 
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.apperiteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.apperiteBucketId,
            fileId
        )
    }
}

const service = new Service()

export default service