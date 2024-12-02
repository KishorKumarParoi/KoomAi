"use client";

import { getNotifications } from "@/actions/user";
import { getWorkSpaces } from "@/actions/workspace";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MENU_ITEMS } from "@/constants";
import { useQueryData } from "@/hooks/useQueryData";
import { NotificationProps, WorkspaceProps } from "@/types/index.type";
import { SelectValue } from "@radix-ui/react-select";
import { Menu, PlusCircle } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import GlobalCard from "../global-card";
import InfoBar from "../info-bar";
import Modal from "../modal";
import PaymentButton from "../payment-button";
import Search from "../search";
import SidebarItem from "./sidebar-item";
import WorkspacePlaceholder from "./workspace-placeholder";

type Props = {
  activeWorkspaceId: string;
};

const Sidebar = ({ activeWorkspaceId }: Props) => {
  const pathName = usePathname();
  const router = useRouter();
  const { data, isFetched } = useQueryData(["user-workspaces"], getWorkSpaces);
  const menuItems = MENU_ITEMS(activeWorkspaceId);

  const { data: notifications } = useQueryData(
    ["user-notifications"],
    getNotifications
  );

  const { data: workspaces } = data as WorkspaceProps;
  const { data: count } = notifications as NotificationProps;

  const onChangeActiveWorkspace = (value: string) => {
    router.push(`/dashboard/${value}`);
  };

  const currentWorkSpace = workspaces.workspace.find(
    (wp) => wp.id === activeWorkspaceId
  );

  const SideBarSection = (
    <div className="bg-[#111111] flex-none relative p-4 h-full w-[250px] flex flex-col gap-4 items-center overflow-hidden">
      <div className="bg-[#111111] p-4 flex gap-2 justify-center items-center mb-4 absolute top-0 left-0 right-0 ">
        <Image src="/koom-ai-logo.svg" height={40} width={40} alt="logo" />
        <p className="text-2xl">KoomAi</p>
      </div>
      <Select
        defaultValue={activeWorkspaceId}
        onValueChange={onChangeActiveWorkspace}
      >
        <SelectTrigger className="mt-16 text-neutral-400 bg-transparent">
          <SelectValue placeholder="Select a workspace" />
        </SelectTrigger>
        <SelectContent className="bg-[#111111] backdrop-blur-xl">
          <SelectGroup>
            <SelectLabel>Workspaces</SelectLabel>
            <Separator />
            {workspaces.workspace.map((workspaceItem) => (
              <SelectItem value={workspaceItem.id} key={workspaceItem.id}>
                {workspaceItem.name}
              </SelectItem>
            ))}
            {workspaces.members.length > 0 &&
              workspaces.members.map(
                (workspaceObj) =>
                  workspaceObj.WorkSpace && (
                    <SelectItem
                      value={workspaceObj.WorkSpace.id}
                      key={workspaceObj.WorkSpace.id}
                    >
                      {workspaceObj.WorkSpace.name}
                    </SelectItem>
                  )
              )}
          </SelectGroup>
        </SelectContent>
      </Select>

      {currentWorkSpace?.type === "PUBLIC" &&
        workspaces.subscription?.plan === "PRO" && (
          <Modal
            trigger={
              <span className="text-sm cursor-pointer flex items-center justify-center bg-neutral-800/90  hover:bg-neutral-800/60 w-full rounded-sm p-[5px] gap-2">
                <PlusCircle
                  size={15}
                  className="text-neutral-800/90 fill-neutral-500"
                />
                <span className="text-neutral-400 font-semibold text-xs">
                  Invite To Workspace
                </span>
              </span>
            }
            title="Invite To Workspace"
            description="Invite other users to your workspace"
          >
            <Search workspaceId={activeWorkspaceId} />
          </Modal>
        )}

      <p className="w-full text-[#9D9D9D] font-bold mt-4">Menu</p>
      <nav className="w-full">
        <ul>
          {menuItems.map((item) => (
            <SidebarItem
              href={item.href}
              icon={item.icon}
              selected={pathName === item.href}
              title={item.title}
              key={item.title}
              notifications={
                (item.title === "Notifications" &&
                  count._count &&
                  count._count.notification) ||
                0
              }
            />
          ))}
        </ul>
      </nav>

      <Separator className="w-4/5" />
      <p className="w-full text-[#9D9D9D] font-bold mt-4 ">Workspaces</p>

      {workspaces.workspace.length === 1 && workspaces.members.length === 0 && (
        <div className="w-full mt-[-10px]">
          <p className="text-[#3c3c3c] font-medium text-sm">
            {workspaces.subscription?.plan === "FREE"
              ? "Upgrade to create workspaces"
              : "No Workspaces"}
          </p>
        </div>
      )}

      <nav className="w-full">
        <ul className="h-[150px] overflow-auto overflow-x-hidden fade-layer">
          {workspaces.workspace.length > 0 &&
            workspaces.workspace.map(
              (item) =>
                item.type !== "PERSONAL" && (
                  <SidebarItem
                    href={`/dashboard/${item.id}`}
                    selected={pathName === `/dashboard/${item.id}`}
                    title={item.name}
                    notifications={0}
                    key={item.name}
                    icon={
                      <WorkspacePlaceholder>
                        {item.name.charAt(0)}
                      </WorkspacePlaceholder>
                    }
                  />
                )
            )}
          {workspaces.members.length > 0 &&
            workspaces.members.map((item) => (
              <SidebarItem
                href={`/dashboard/${item.WorkSpace.id}`}
                selected={pathName === `/dashboard/${item.WorkSpace.id}`}
                title={item.WorkSpace.name}
                notifications={0}
                key={item.WorkSpace.name}
                icon={
                  <WorkspacePlaceholder>
                    {item.WorkSpace.name.charAt(0)}
                  </WorkspacePlaceholder>
                }
              />
            ))}
        </ul>
      </nav>
      <Separator className="w-4/5" />
      {workspaces.subscription?.plan === "FREE" && (
        <GlobalCard
          title="Upgrade to Pro"
          description=" Unlock AI features like transcription, AI summary, and more."
          footer={<PaymentButton />}
        />
      )}
    </div>
  );
  return (
    <div className="full">
      {/* <InfoBar /> */}
      <InfoBar />
      <div className="md:hidden fixed my-4">
        <Sheet>
          <SheetTrigger asChild className="ml-2">
            <Button variant={"ghost"} className="mt-[2px]">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"} className="p-0 w-fit h-full">
            {SideBarSection}
          </SheetContent>
        </Sheet>
      </div>
      <div className="md:block hidden h-full">{SideBarSection}</div>
    </div>
  );
};

export default Sidebar;
