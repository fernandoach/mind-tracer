import { connection, disconnect } from "@/models/connection";
import userModel from "@/models/schemas/userSchema";

async function getUser(email: string){
    try {
        await connection();
        const user = await userModel.findOne({ email });
        await disconnect();
        return user; 
    } catch (error) {
        return null
    }
}

export { getUser}