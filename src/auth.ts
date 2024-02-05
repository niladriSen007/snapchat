import { connectToDatabase } from "@/lib/db_connection";
import { UserModel } from "@/models/userModel";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
export const { handlers, auth , signIn,signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "github") {
        await connectToDatabase();

        try {
          const user = await UserModel.findOne({ email: profile?.email });

          //login na thakle signup korbe
          if (!user) {
            const newUser = new UserModel({
              username: profile?.login,
              firstname: profile?.name,
              email: profile?.email,
              avatar: profile?.avatar_url,
            });
            await newUser.save();
          }

          //else return korbe je login done
          return true;
        } catch (error) {
          console.log("Error in signIn callback: ", error);
          return false;
        }
      }

      return false;
    },
  },
});
