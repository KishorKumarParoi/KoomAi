type Props = {
  workspaceId: string;
};

const CreateFolders = ({ workspaceId }: Props) => {
  return <div>CreateFolders : {workspaceId.charAt(0)}</div>;
};

export default CreateFolders;
