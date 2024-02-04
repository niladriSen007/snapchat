import { Session } from "next-auth";
import { NextRequest } from "next/server";

export const authConfig = {
  pages: {
    signIn: "/auth/login",
  },
  providers: [],
  callbacks: {
    async authorized({
      auth,
      request,
    }: {
      auth: Session | null,
      request: NextRequest
    }) {


      // console.log(request.nextUrl.pathname)

      const user = auth?.user;
      const isVisitingChatPage = request.nextUrl.pathname.startsWith("/chat");
      const isVisitingAuthPage =
        request.nextUrl.pathname.startsWith("/auth/login") ||
        request.nextUrl.pathname.startsWith("/auth/register");

      //authorized noy tao chat page dekhche
      if (!user && isVisitingChatPage) {
        return false
      }

      //authorized tao auth page dekhche
      if (user && isVisitingAuthPage) {
        return Response.redirect(
          new URL("/chat", request.nextUrl)
        );
      }

      return true;
    },
  },
};
