import { useState } from "react";
import MembershipList from "./components/MembershipList";
import MembershipForm from "./components/MembershipForm";
import Membership from "./models/membership";

function App() {
  const [memberships, setMemberships] = useState<Membership[]>([
    {
      membershipCode: "SLVR",
      title: "Silver",
      description: "Customer Accumulating $100 spent enjoy 2% discount",
    },
    {
      membershipCode: "GLD",
      title: "Gold",
      description: "Customer Accumulating $500 spent enjoy 5% discount",
    },
    {
      membershipCode: "PLTNM",
      title: "Platinum",
      description: "Customer Accumulating $1000 spent enjoy 10% discount",
    },
  ]);

  enum AppState {
    AddMembership,
    ListMembership,
  }

  const [appState, setAppState] = useState<AppState>(AppState.ListMembership);

  const addMembershipHandler = (newMembership: Membership) => {
    setAppState(AppState.ListMembership);
    setMemberships((prevMemberships) => {
      return prevMemberships.concat(newMembership);
    });
  };

  let displayMembership;

  switch (appState) {
    case AppState.AddMembership:
      displayMembership = (
        <MembershipForm
          onAddMembership={addMembershipHandler}
          onCancel={() => setAppState(AppState.ListMembership)}
        />
      );
      break;
    default:
      displayMembership = (
        <>
          <button onClick={() => setAppState(AppState.AddMembership)}>
            Add Membership
          </button>
          <MembershipList memberships={memberships} />
        </>
      );
  }

  return <div className="App">{displayMembership}</div>;
}

export default App;
