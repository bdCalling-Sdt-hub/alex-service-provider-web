import AccountSettings from "../../src/components/profile/AccountSettings";
import CustomComponent from "../shared/CustomComponent";

function Profile() {
  return (
    <CustomComponent>
      <div className="flex justify-center my-16">
        <AccountSettings />
      </div>
    </CustomComponent>
  );
}

export default Profile;
