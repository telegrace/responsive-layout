
interface OverviewProps {}
        
const OverviewPage: React.FC<OverviewProps> = (props) => {
  console.log(props);
  return (
    <>
      <h1>Here is the Overview.</h1>
    </>
  );
};
export default OverviewPage;
