import { createWorkspace } from "@/actions/workspace";
import { workspaceSchema } from "@/components/forms/workspace-form/schema";
import { useMutationData } from "./useMutationData";
import useZodForm from "./useZodForm";

const useCreateWorkSpace = () => {
  const { mutate, isPending } = useMutationData(
    ["create-workspace"],
    (data: { name: string }) => createWorkspace(data.name),
    "user-workspaces"
  );

  const { errors, onFormSubmit, register } = useZodForm(
    workspaceSchema,
    mutate
  );
  return { errors, onFormSubmit, register, isPending };
};

export default useCreateWorkSpace;
