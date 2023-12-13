import type { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
const users = [
  {
    name: "Иван Иванов",
    email: "ivan@example.com",
    password: "123123123",

    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Мария Петрова",
    email: "maria@example.com",
    password: "123123123",

    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Александр Смирнов",
    email: "alex@example.com",
    password: "123123123",

    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Екатерина Иванова",
    email: "ekaterina@example.com",
    password: "123123123",

    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Дмитрий Петров",
    email: "dmitry@example.com",
    password: "123123123",

    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Анна Смирнова",
    email: "anna@example.com",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Сергей Иванов",
    email: "sergei@example.com",
    password: "123123123",

    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Ольга Петрова",
    email: "olga@example.com",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Николай Смирнов",
    email: "nikolai@example.com",
    password: "123123123",

    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];
export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          required: true,
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const currentUser = users.find(
          (user) => user.email === credentials.email
        );
        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPass } = currentUser;
          return userWithoutPass as User;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
    // signOut: "/logout",
    // error: "/error",
    // verifyRequest: "/verify-request",
    // newUser: "/register",
  },
};
