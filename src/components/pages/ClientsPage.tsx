type ClientsProps = {};

const ClientsPage: React.FC<ClientsProps> = (props) => {
  const currentPageLink = window.location.pathname;
  console.log("currentPageLink, ", currentPageLink);
  return (
    <>
      <h1>Here is the Clients.</h1>
    </>
  );
};
export default ClientsPage;
