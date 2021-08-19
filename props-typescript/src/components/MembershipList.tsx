import Membership from "../models/membership";
import MembershipItemB from "./MembershipItemB";

const MembershipList: React.FC<{ memberships: Membership[] }> = (props) => {
  if (props.memberships.length === 0) {
    return <h2>No Membership Tier Available</h2>;
  }
  return (
    <>
      <h2>Membership Tiers</h2>
      {props.memberships.map((membership) => (
        <MembershipItemB
          key={membership.membershipCode}
          membership={membership}
        />
      ))}
    </>
  );
};

export default MembershipList;
