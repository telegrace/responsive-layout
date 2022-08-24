type AssetsProps = {};

const AssetsPage: React.FC<AssetsProps> = (props) => {
  const currentPageLink = window.location.pathname;
  console.log("currentPageLink, ", currentPageLink);
  return (
    <>
      <h1>Here is the Assets.</h1>
    </>
  );
};
export default AssetsPage;
