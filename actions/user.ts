"use server";

import { client } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

const onAuthenticateUser = async () => {
  // Check if the user is authenticated
  // first try to get the user from Clerk
  try {
    const user = await currentUser();

    // If the user is not found, return a 403 status
    if (!user) {
      return {
        status: 403,
      };
    }

    // Check if the user exists in the database
    const userExist = await client.user.findUnique({
      where: {
        clerkid: user.id,
      },
      include: {
        workspace: {
          where: {
            User: {
              clerkid: user.id,
            },
          },
        },
      },
    });

    // If the user exists, return the user and a 200 status
    if (userExist) {
      return {
        status: 200,
        user: userExist,
      };
    }

    // If the user does not exist, create a new user in the database
    const newUser = await client.user.create({
      data: {
        clerkid: user.id,
        email: user.emailAddresses[0].emailAddress,
        firstname: user.firstName,
        lastname: user.lastName,
        image: user.imageUrl,
        studio: {
          create: {},
        },
        subscription: {
          create: {},
        },
        workspace: {
          create: {
            name: `${user.firstName}'s Workspace`,
            type: "PERSONAL",
          },
        },
      },
      include: {
        workspace: {
          where: {
            User: {
              clerkid: user.id,
            },
          },
        },
        subscription: {
          select: {
            plan: true,
          },
        },
      },
    });

    // after creating new user successfully return a 201 status
    if (newUser) {
      return {
        status: 201,
        user: newUser,
      };
    }

    return {
      status: 400,
    };
  } catch (error) {
    console.log("🔴 ERROR", error);
    return { status: 500 };
  }
};

export default onAuthenticateUser;
