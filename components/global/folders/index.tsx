type Props = {
  workspaceId: string;
};

const Folders = ({ workspaceId }: Props) => {
  return <div>Folders: {workspaceId.charAt(1)}</div>;
};

export default Folders;
