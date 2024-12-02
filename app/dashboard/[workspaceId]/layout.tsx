import { getNotifications, onAuthenticateUser } from "@/actions/user";
import {
  getAllUserVideos,
  getWorkSpaceFolders,
  getWorkSpaces,
  verifyAccessToWorkspace,
} from "@/actions/workspace";
import GlobalHeader from "@/components/global/global-header";
import Sidebar from "@/components/global/sidebar";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { redirect } from "next/navigation";

type Props = {
  params: {
    workspaceId: string;
  };
  children: React.ReactNode;
};

const layout = async ({ params: { workspaceId }, children }: Props) => {
  //  Check if user is authenticated and has a valid workspace id
  const auth = await onAuthenticateUser();
  if (!auth.user?.workspace) redirect("/auth/sign-in");
  if (!auth.user?.workspace.length) redirect("/auth/sign-in");

  // Check if the user has the access to the workspace
  const hasAccess = await verifyAccessToWorkspace(workspaceId);

  // if response status is not 200, redirect to the dashboard
  if (hasAccess.status !== 200) {
    redirect(`/dashboard/${auth.user.workspace[0].id}`);
  }

  // If the user does not have access to the workspace return null
  if (!hasAccess.data?.workspace) return null;

  // query setup with react-query
  const query = new QueryClient();
  await query.prefetchQuery({
    queryKey: ["workspace-folders"],
    queryFn: () => getWorkSpaceFolders(workspaceId),
  });
  await query.prefetchQuery({
    queryKey: ["user-videos"],
    queryFn: () => getAllUserVideos(workspaceId),
  });
  await query.prefetchQuery({
    queryKey: ["user-workspaces"],
    queryFn: () => getWorkSpaces(),
  });
  await query.prefetchQuery({
    queryKey: ["user-notifications"],
    queryFn: () => getNotifications(),
  });

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="flex h-screen w-screen">
        <Sidebar activeWorkspaceId={workspaceId} />
        <div className="w-full pt-28 p-6 overflow-y-scroll overflow-x-hidden">
          <GlobalHeader workspace={hasAccess.data.workspace} />
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default layout;
