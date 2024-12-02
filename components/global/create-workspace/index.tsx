import { getWorkSpaces } from "@/actions/workspace";
import WorkSpaceForm from "@/components/forms/workspace-form";
import FolderPlusDuotine from "@/components/icons/folder-plus-duotone";
import { Button } from "@/components/ui/button";
import { useQueryData } from "@/hooks/useQueryData";
import Modal from "../modal";

type Props = {};

const CreateWorkspace = (props: Props) => {
  const { data, isLoading, isError } = useQueryData(
    ["user-workspaces"],
    getWorkSpaces
  );

  console.log("data", data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error loading data</div>;
  }

  const plan = data as {
    status: number;
    data: {
      subscription: {
        plan: "PRO" | "FREE";
      } | null;
    };
  };

  if (plan.data.subscription?.plan === "FREE") {
    return <>FREE</>;
  }

  if (plan.data.subscription?.plan === "PRO") {
    return (
      <Modal
        title="Create a Workspace"
        description=" Workspaces helps you collaborate with team members. You are assigned a default personal workspace where you can share videos in private with yourself."
        trigger={
          <Button className="bg-[#1D1D1D] text-[#707070] flex items-center gap-2 py-6 px-4 rounded-2xl">
            <FolderPlusDuotine />
            Create Workspace
          </Button>
        }
      >
        <WorkSpaceForm />
      </Modal>
    );
  }

  return <div>Kishor Kumar Paroi</div>;
};

export default CreateWorkspace;
